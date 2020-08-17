<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`/releases.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { releases: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ReleaseChapters from "../components/Release-chapters.svelte";
  export let releases;

  $: releasesList = releases
    .filter((r) => r.chapters.some((c) => c.state === "in-progress"))
    .map((r) => ({
      ...r,
      chapters: r.chapters.filter((c) => c.state === "in-progress"),
    }));
</script>

<svelte:head>
  <title>Avancement</title>
</svelte:head>

<h1>Avancement</h1>

<p>Ici se trouve la liste de tous les chapites en cours.</p>

{#each releasesList as release, index}
  <ReleaseChapters {release} />
  {#if index + 1 !== releasesList.length}
    <hr class="hr" />
  {/if}
{/each}
