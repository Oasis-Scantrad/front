<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`releases/${params.id}.json`, {credentials: 'include'});
    const data = await res.json();
    if (res.status === 200) {
      return { release: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Tag from "../../../components/Tag.svelte";
  import { stores, goto } from "@sapper/app";
  export let release;

  const { session } = stores();
  if (!$session.auth.logged) goto("/auth/login");

  const trad = {
    done: "Termine",
    todo: "A faire",
    "in-progress": "En cours"
  };

  $: workers = release.chapters
    .flatMap(c => c.editors)
    .filter((value, index, self) => self.indexOf(value) === index);
</script>

<style>
  .placer {
    display: flex;
    justify-content: stretch;
  }

  .col-2 {
    padding-left: var(--sm-px);
  }

  .tags {
    display: flex;
    padding-bottom: var(--sm-px);
    flex-wrap: wrap;
  }
  .author {
    padding-bottom: var(--sm-px);
  }
  .workers {
    display: flex;
    flex-direction: column;
  }
  table {
    width: 100%;
  }
  th {
    text-align: left;
  }
</style>

<svelte:head>
  <title>{release.title}</title>
</svelte:head>

<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img src={release.img} alt="release image" />
    </div>
    <h3>Tags</h3>
    <div class="tags">
      {#each release.tags as tag}
        <Tag name={tag} />
      {/each}
    </div>
    <div class="author">
      <h3>Auteur</h3>
      <a href=".">{release.author}</a>
    </div>
    <h3>Equipe</h3>
    <div class="workers">
      {#each workers as worker}
        <a href=".">{worker}</a>
      {/each}
    </div>
  </div>
  <div class="col-2">
    <div class="desc">
      <h1>{release.title}</h1>
      <p class="content">{release.description}</p>
    </div>
    <div class="chapters">
      <h2>Chapitres</h2>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Etat</th>
            <th>Date</th>
            <th>Lien</th>
          </tr>
        </thead>
        <tbody>
          {#each release.chapters as chapter}
            <tr>
              <td>{chapter.number}</td>
              <td>{trad[chapter.state]}</td>
              <td>{chapter.date || '-'}</td>
              <td>
                {#if chapter.link !== undefined}
                  <a class="download" href={chapter.link}>Telecharger</a>
                {/if}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
