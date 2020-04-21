<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let dark = false;

  const darktheme = `
  <style>:root {
    --primary: #222;
    --secondary: #eee;
  }
  </style>`;
</script>

<style>
  main {
    max-width: var(--page-width);
    padding: var(--medium);
    margin: 0 auto;
    box-sizing: border-box;
  }
  :global(:root) {
    --primary: #eee;
    --secondary: #222;
    --emphasis: #22863a;
    --page-width: 56em;
    --medium: 2em;
    --small: 1em;
    --xsmall: 0.5em;
    --sm-px: 10px;
    --xs-px: 5px;
  }
  :global(body) {
    background-color: var(--primary);
    color: var(--secondary);
    transition-duration: .3s;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />

<div>
  {@html dark ? darktheme : ''}
</div>

<button on:click={() => (dark = !dark)} >toggle theme</button>
