<script>
  import { onMount } from "svelte";
  import Button from "./Button.svelte";
  export let currentPage = 1;
  export let perPage = 5;
  export let list = [];

  onMount(() => {
    setPage(+currentPage, true);
  });

  function next(by = 1) {
    setPage(+currentPage + by);
  }
  function setPage(page, correctWhenWrong = false) {
    if (page <= maxPage && page > 0) {
      currentPage = page;
    } else if (correctWhenWrong) {
      currentPage = 1;
    }
  }

  $: maxPage = Math.ceil(list.length / perPage);
  $: setPage(+currentPage, list);
</script>

<style>
  .paginate {
    text-align: center;
  }
  .paginate > input {
    width: 3em;
    box-sizing: border-box;
    text-align: right;
  }
</style>

<div class="paginate">
  {#if currentPage !== 1}
    <Button text="1" on:click={() => setPage(1)} />
  {/if}
  {#if currentPage - 1 > 1}
    <Button text="<" on:click={() => setPage(currentPage - 1)} />
  {/if}
  <input type="number" min={1} max={maxPage} bind:value={currentPage} />
  {#if currentPage + 1 < maxPage}
    <Button text=">" on:click={() => setPage(currentPage + 1)} />
  {/if}
  {#if currentPage !== maxPage}
    <Button text={maxPage} on:click={() => setPage(maxPage)} />
  {/if}
</div>
