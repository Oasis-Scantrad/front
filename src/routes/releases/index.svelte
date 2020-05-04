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
  import Paginate from "../../components/Paginate.svelte";
  import query from "query-store";
  import { stores, goto } from "@sapper/app";
  const { session } = stores();

  export let releases = [];
  let filteredReleases = [];
  let perPage = 5;

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

  let currentPage;
  $: $query.page = currentPage;
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
    {#if $query.tag}
      <Button
        text="[ {$query.tag} ]"
        size="small"
        on:click={() => ($query.tag = undefined)} />
    {/if}
  </div>
</div>
{#if filteredReleases.length > 0}
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
  <Paginate bind:currentPage list={filteredReleases} {perPage} />
{:else}
  <h3>Aucun bouquins</h3>
{/if}
{#if $session.auth.logged}
  <div style="text-align:right">
    <Button
      text="ajouter"
      on:click={() => {
        goto(location.origin + location.pathname + '/add');
      }} />
  </div>
{/if}
