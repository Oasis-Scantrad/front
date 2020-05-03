<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let dark = (globalThis.localStorage && globalThis.localStorage.getItem('theme') === 'dark') || false;

  function toggleTheme() {
    globalThis.localStorage.setItem('theme', dark ? 'light' : 'dark')
    dark = !dark;
  }

  const darktheme = `
  <style>
    :root {
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

  :global(input) {
    font-size: var(--small);
    border: 0px;
    padding: var(--xs-px);
    border-bottom: 1px solid var(--secondary);
    background-color:transparent;
    color: var(--secondary);
  }

  :global(input):focus {
    outline: 0;
    border-bottom-width: 2px;
  }

  :global(:root) {
    --primary: #eee;
    --secondary: #222;
    --emphasis: #22863a;
    --error: #b91515;
    --page-width: 56em;
    --large: 4em;
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

<button on:click={toggleTheme} >toggle theme</button>
