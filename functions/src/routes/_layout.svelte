<script>
  import Nav from "../components/Nav.svelte";
  import Button from "../components/Button.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let dark =
    (globalThis.localStorage &&
      globalThis.localStorage.getItem("theme") === "dark") ||
    false;

  function toggleTheme() {
    globalThis.localStorage.setItem("theme", dark ? "light" : "dark");
    dark = !dark;
  }
  const darktheme = "<style>:root{--primary:#222;--secondary:#eee;--filter-invert:brightness(0.3) grayscale(.5) invert();--invert:invert();}</style>";
</script>

<style>
  main {
    max-width: var(--page-width);
    padding: var(--medium);
    margin: 0 auto;
    box-sizing: border-box;
    text-align: justify;
    border: 1px solid var(--secondary);
  }

  :global(textarea) {
    font-family: inherit;
    text-align: justify;
  }

  :global(input[type="text"]),
  :global(input[type="password"]),
  :global(input[type="number"]),
  :global(select),
  :global(textarea) {
    width: 100%;
    box-sizing: border-box;
    font-size: var(--small);
    border: 0px;
    padding: var(--xs-px);
    border-bottom: 1px solid var(--secondary);
    background-color: transparent;
    color: var(--secondary);
    background-color: #0001;
  }

  :global(input[type="text"]:focus),
  :global(input[type="password"]:focus),
  :global(input[type="number"]:focus),
  :global(select:focus),
  :global(textarea:focus) {
    outline: 0;
    border-bottom-width: 2px;
  }

  :global(hr.hr){
    margin-bottom:2em;
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
    --filter-invert: brightness(0.3) grayscale(.5);
    --invert: none;
  }

  :global(body) {
    background-color: var(--primary);
    color: var(--secondary);
    transition-duration: 0.3s;
  }
  .bottom-image {
    z-index: -1;
    max-height: 500px;
  }
  .bottom-image > div > img {
    width: 60%;
    min-width: 650px;
    opacity: .3;
    z-index: -1;
    filter: var(--invert);
  }
  .bottom-image > div {
    top:200px;
    text-align : center;
    position: absolute;
    z-index: -1;
    left:0;
    right:0;
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

<Button
  text="Change theme to {dark ? 'light' : 'dark'}"
  on:click={toggleTheme} />

<div class="bottom-image">
  <div>
    <img src="bg.png" alt="bg"/>
  </div>
</div>