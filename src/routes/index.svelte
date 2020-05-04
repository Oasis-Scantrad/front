<script context="module">
  export async function preload({ params }) {
    const releases = await this.fetch(`releases.json`).then(r => r.json());
    const news = await this.fetch(`news.json`).then(r => r.json());
    return { releases, news };
  }
</script>

<script>
  import ReleaseLink from "../components/Release-link.svelte";
  import Button from "../components/Button.svelte";
  import New from "../components/New.svelte";
  import { goto } from "@sapper/app";
  export let releases = [];
  export let news = [];
</script>

<style>
  .banner {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    background-image: url(https://via.placeholder.com/940x215);
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    color: var(--primary);
  }

  .banner > h1 {
    margin: 0;
  }

  .banner-height {
    height: 15em;
    margin-top: -3em;
    margin-bottom: var(--small);
  }

  .release-roll {
    display: flex;
    justify-content: space-around;
    padding: var(--sm-px);
    margin-bottom: var(--small);
  }

  h3.part {
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Oasis Scantrad</title>
</svelte:head>

<div class="banner banner-height">
  <h1>BANNER</h1>
</div>
<div class="banner-height placeholder" />

<h3 class="part">Dernieres sorties</h3>
<div class="release-roll">
  {#each releases.slice(0, 3) as release}
    <ReleaseLink
      name={release.title}
      id={release.id}
      description={release.description}
      imgSrc={release.img} />
  {/each}
</div>

<h3 class="part">Dernieres news</h3>
<div class="last-news">
  {#each news.slice(0, 2) as anew}
    <New {...anew} />
  {/each}
</div>
<div style="text-align:center">
  <Button text="Plus" on:click={_ => goto('/news')} />
</div>
