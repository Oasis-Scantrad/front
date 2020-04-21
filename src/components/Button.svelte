<script>
  export let text;
  // available size: small; medium; large
  export let size = "medium";
</script>

<style>
  .button {
    background-color: var(--primary);
    color: var(--secondary);
    transition-duration: .3s;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    border:0;
  }
  .button:hover {
    background-color: var(--secondary);
    color: var(--primary);
    font-weight: bold;
  }
  .button:focus {
    outline: none;
  }
  .small {
    padding: var(--xsmall);
    font-size: var(--xsmall);
  }
  .medium {
    padding: var(--small);
    font-size: var(--small);
  }
  .large {
    padding: var(--medium);
    font-size: var(--medium);
  }
</style>

<button on:click class="button {size}">
  {text}
</button>