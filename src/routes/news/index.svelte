<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`news.json`)
      .then(r => r.json())
      .then(news => {
        return { news };
      });
  }
</script>

<script>
  import Button from "../../components/Button.svelte";
  import Paginate from "../../components/Paginate.svelte";
  import New from "../../components/New.svelte";
  import query from "query-store";
  import { stores, goto } from "@sapper/app";
  const { session } = stores();
  export let news;

  let perPage = 3;
  let currentPage;
  $: $query.page = currentPage;
  $: filteredNews = news
    .filter(n => {
      const rx = new RegExp($query.search);
      return (
        $query.search === "" ||
        rx.test(n.title) ||
        rx.test(n.content) ||
        rx.test(n.author)
      );
    });
  $: displayNews = filteredNews.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage)
</script>

<style>
  .news-header {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="news-header">
  <h1>Dernieres news</h1>
  <div>
    <input
      bind:value={$query.search}
      type="text"
      name="search"
      id="search"
      placeholder="Search" />
  </div>
</div>
{#if filteredNews.length > 0}
  {#each displayNews as anew, index}
    <New {...anew} />
    {#if index+1 !== displayNews.length}
      <hr class="hr">
    {/if}
  {/each}
  <Paginate bind:currentPage list={filteredNews} {perPage} />
{:else}
  <h3>Pas de nouvelle, bonne nouvelle ;)</h3>
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
