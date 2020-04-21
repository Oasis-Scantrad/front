<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`releases.json`)
      .then(r => r.json())
      .then(releases => {
        return { releases };
      });
  }
</script>

<script>
  import Tag from "../../components/Tag.svelte";
  export let releases;
  let search = "";
  let filteredReleases = [];
  const perPage = 5;
  let page = 0;

  $: filteredReleases = releases.filter(r => {
    const rx = new RegExp(search);
    return (
      search === "" ||
      rx.test(r.title) ||
      rx.test(r.description) ||
      rx.test(r.author) ||
      r.tags.some(t => rx.test(t))
    );
  });
</script>

<style>
  .releases-list {
    max-height: calc(100vh - 250px);
    overflow: auto;
    transition-duration: 0.3s;
  }
  .releases-header {
    display: flex;
    justify-content: space-between;
  }

  .release {
    display: flex;
    justify-content: stretch;
  }

  .release > .img > img {
    max-width: 150px;
    max-height: 150px;
  }
  .release > .content {
    padding-left: var(--sm-px);
  }
  .tags {
    display: flex;
  }
</style>

<div class="releases-header">
  <h1>Bouquins</h1>
  <div>
    <input
      bind:value={search}
      type="text"
      name="search"
      id="search"
      placeholder="Search" />
  </div>
</div>
<!-- TODO: use virtual-list instead-->
<div class="releases-list">
  {#each filteredReleases.slice(page * perPage, perPage) as release}
    <div class="release">
      <div class="img">
        <img src={release.img} alt="release" />
      </div>
      <div class="content">
        <h3><a href="releases/{release.id}">{release.title}</a></h3>
        <div class="tags">
          {#each release.tags as tag}
            <Tag name={tag} />
          {/each}
        </div>
        <p class="description">{release.description}</p>
      </div>
    </div>
  {/each}
</div>
<div class="paginate">
  <!--
    TODO: create a true pagination
  -->
  <button onclick="{()=>page--}">prev</button>
  <button onclick="{()=>page=1-1}">1</button>
  <button onclick="{()=>page++}">next</button>
</div>
