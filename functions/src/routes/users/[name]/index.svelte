<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`users/${params.name}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return {
        user: data,
        releases: await (await this.fetch(`releases.json`)).json(),
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Button from "../../../components/Button.svelte";
  import ReleaseChapters from "../../../components/Release-chapters.svelte";
  import { stores } from "@sapper/app";
  import { format } from "date-fns";
  const { session } = stores();
  export let user;
  export let releases;

  $: releasesList = releases
    .filter((r) => r.chapters.some((c) => c.editors.includes(user.username)))
    .map((r) => ({
      ...r,
      chapters: r.chapters.filter((c) => c.editors.includes(user.username)),
    }));
</script>

<style>
  .placer {
    display: flex;
    justify-content: stretch;
  }

  .col-2 {
    padding-left: var(--sm-px);
    flex: auto;
  }
  .release-img > img {
    max-width: 150px;
    max-height: 250px;
  }
  .content {
    white-space: pre-line;
  }
</style>

<svelte:head>
  <title>{user.username}</title>
</svelte:head>
<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img
        src={user.img || 'https://via.placeholder.com/200x450'}
        alt="user pic" />
    </div>
  </div>
  <div class="col-2">
    <div class="desc">
      <h1>{user.username}</h1>
      <div> <b>Roles:</b> {user.roles.join(', ')}</div>
      <p class="content">{user.description || '-'}</p>
    </div>

    <h2>Derniers travaux</h2>

    {#each releasesList as release, index}
      <ReleaseChapters {release} />
      {#if index + 1 !== releasesList.length}
        <hr class="hr" />
      {/if}
    {/each}

  </div>
</div>
