<script>
  export let name;
  import { goto } from "@sapper/app";
  import query from "query-store";

  function uselink() {
    $query.tag = name;
    goto("/releases");
  }
</script>

<style>
  .tag {
    border: 1px solid var(--secondary);
    border-radius: 5px;
    padding: 0px 5px;
    font-size: 0.6em;
    margin-right: 5px;
    margin-bottom: 5px;
    transition-duration: .3s;
  }
  .tag:hover,
  .tag.active {
    background-color: var(--secondary);
    color: var(--primary);
    cursor: pointer;
  }
</style>

<div class="tag" on:click={uselink} class:active={name === $query.tag}>
  {name}
</div>
