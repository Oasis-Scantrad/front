<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`releases.json`)
      .then(r => r.json())
      .then(releases => {
        return { releases };
      });
  }
</script>

<script>
  import Tag from "../../components/Tag.svelte";
  import Button from "../../components/Button.svelte";
  import query from "query-store";
  import { onMount } from "svelte";

  export let releases = [];
  let filteredReleases = [];
  let currentPage;
  onMount(() => {
    if ($query.page === undefined) {
      $query.page = 1;
    }
    setPage(+$query.page, true);
  });

  const perPage = 5;
  function next(by = 1) {
    setPage(+$query.page + by);
  }
  function setPage(page, correctWhenWrong = false) {
    if (page <= maxPage && page > 0) {
      $query.page = page;
      currentPage = page;
    } else if (correctWhenWrong) {
      currentPage = 1;
      $query.page = 1;
    }
  }

  $: filteredReleases = releases
    .filter(r => r.tags.some(t => $query.tag === undefined || $query.tag === t))
    .filter(r => {
      const rx = new RegExp($query.search);
      return (
        $query.search === "" ||
        rx.test(r.title) ||
        rx.test(r.description) ||
        rx.test(r.author) ||
        r.tags.some(t => rx.test(t))
      );
    });
  $: maxPage = Math.ceil(filteredReleases.length / perPage);
  $: setPage(+currentPage, filteredReleases);
</script>

<style>
  .releases-list {
    max-height: calc(100vh - 250px);
    overflow: auto;
    transition-duration: 0.3s;
  }
  .releases-header {
    display: flex;
    justify-content: space-between;
  }

  .release {
    display: flex;
    justify-content: stretch;
  }

  .release > .img > img {
    max-width: 150px;
    max-height: 150px;
  }
  .release > .content {
    padding-left: var(--sm-px);
  }
  .tags {
    display: flex;
  }

  .paginate {
    text-align: center;
  }
  .paginate > input {
    width: 3em;
    box-sizing: border-box;
    text-align: right;
  }
</style>

<div class="releases-header">
  <h1>Bouquins</h1>
  <div>
    <input
      bind:value={$query.search}
      type="text"
      name="search"
      id="search"
      placeholder="Search" />
  </div>
</div>
{#if maxPage !== 0}
  <div class="releases-list">
    {#each filteredReleases.slice(($query.page - 1) * perPage, ($query.page - 1) * perPage + perPage) as release}
      <div class="release">
        <div class="img">
          <img src={release.img} alt="release" />
        </div>
        <div class="content">
          <h3>
            <a href="releases/{release.id}">{release.title}</a>
          </h3>
          <div class="tags">
            {#each release.tags as tag}
              <Tag name={tag} />
            {/each}
          </div>
          <p class="description">{release.description}</p>
        </div>
      </div>
    {/each}
  </div>
  <div class="paginate">
    {#if $query.page !== 1}
      <Button text="1" on:click={() => setPage(1)} />
    {/if}
    {#if $query.page - 1 > 1}
      <Button text="<" on:click={() => setPage($query.page - 1)} />
    {/if}
    <input type="number" min={1} max={maxPage} bind:value={currentPage} />
    {#if $query.page + 1 < maxPage}
      <Button text=">" on:click={() => setPage($query.page + 1)} />
    {/if}
    {#if $query.page !== maxPage}
      <Button text={maxPage} on:click={() => setPage(maxPage)} />
    {/if}
  </div>
{:else}
  <h3>Aucun bouquins</h3>
{/if}
