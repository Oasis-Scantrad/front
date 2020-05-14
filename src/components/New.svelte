<script>
  import { format } from "date-fns";
  import Button from "./Button.svelte";
  import { stores, goto } from "@sapper/app";
  const { session } = stores();

  export let title;
  export let author;
  export let date;
  export let content;
  export let id;
</script>

<style>
  .new {
    display: flex;
    justify-content: space-between;
    padding-bottom: var(--small);
  }
  .new:nth-last-child(1) {
    padding-bottom: 0;
  }
  .content {
    padding-left: var(--sm-px);
    flex: auto;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .author > img {
    width: 7em;
  }
  .date {
    margin-left: 10px;
  }
</style>

<div class="new">
  <div class="author">
    <img src="https://via.placeholder.com/200x450?text={author}" alt="author" />
    {#if $session.auth.logged}
      <Button text="Modifier" on:click={(_) => goto(`/news/${id}/edit`)} />
    {/if}
  </div>
  <div class="content">
    <div class="title">
      <h2>{title}</h2>
      <div class="date">
        <small>{format(new Date(date), 'dd/MM/yyyy')}</small>
      </div>
    </div>
    <p class="text">
      {@html content}
    </p>
  </div>
</div>
