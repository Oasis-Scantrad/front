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
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Dernieres news</h1>
{#if news.length > 0}
  {#each news.slice((currentPage - 1) * perPage, (currentPage - 1) * perPage + perPage) as anew}
    <New {...anew} />
  {/each}
  <Paginate bind:currentPage list={news} {perPage} />
{:else}
  <h3>Pas de nouvelle, bonne nouvelle ;)</h3>
{/if}
{#if $session.auth.logged}
  <div style="text-align:right">
    <Button
      text="ajouter"
      on:click={() => {
        goto(location.origin+location.pathname + '/add');
      }} />
  </div>
{/if}
