<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`releases/${params.id}.json`, {
      credentials: "include",
    });
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
  import Button from "../../../components/Button.svelte";
  import { stores, goto } from "@sapper/app";
  import ChapterLine from "./_chapter-line.svelte";
  export let release;
  export let saveText = "Enregistrer";
  export let editText = "edition";
  export let postUrl = `/releases/${release.id}.json`;

  const { session } = stores();
  if (!$session.auth.logged) goto("/auth/login");

  let tags = release.tags.join(", ");

  async function save() {
    release.tags = tags.split(",").map((t) => t.trim().toLowerCase());
    const res = await fetch(postUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(release),
    });
    console.log(await res.json());
    window.history.back();
  }

  function addChapter() {
    const last = release.chapters[release.chapters.length - 1] || { number: 0 };
    release.chapters = [
      ...release.chapters,
      {
        number: +last.number + 1,
        title: "",
        state: "todo",
        date: Date.now(),
        editors: [],
      },
    ];
  }

  $: workers = release.chapters
    .flatMap((c) => c.editors)
    .filter((value, index, self) => self.indexOf(value) === index);
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
  input {
    width: 100%;
  }

  .release-img > img {
    max-width: 150px;
    max-height: 250px;
  }
  .input-holder {
    display: flex;
    margin-bottom: 5px;
  }
  .input-holder :global(button) {
    padding-top: 6px;
    padding-bottom: 6px;
  }
  textarea {
    min-height: 200px;
  }
  .actions {
    text-align: right;
  }
</style>

<svelte:head>
  <title>{release.title}</title>
</svelte:head>

<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img
        src={release.img || 'https://via.placeholder.com/150x200'}
        alt="release pic" />
      <span>
        <br />
        URL:
      </span>
      <div class="input-holder">
        <input type="text" bind:value={release.img} />
      </div>
    </div>
    <h3>Tags</h3>
    <div class="tags">
      <input type="text" bind:value={tags} />
    </div>
    <div class="author">
      <h3>Auteur</h3>
      <div class="input-holder">
        <input type="text" bind:value={release.author} />
      </div>
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
      <h1>
        Mode {editText}:
        <br />
        <input type="text" bind:value={release.title} />
      </h1>
      <p class="content">
        <textarea bind:value={release.description} />
      </p>
    </div>
    <div class="chapters">
      <h2>Chapitres</h2>
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Etat</th>
            <th>Date</th>
            <th>Editeurs</th>
            <th>Lien</th>
          </tr>
        </thead>
        <tbody>
          {#each release.chapters.sort((a, b) => a.number - b.number) as chapter, index}
            <ChapterLine {chapter} bind:release {index} />
          {/each}
          <tr>
            <td colspan="4">
              <Button text="+ Ajouter" on:click={addChapter} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<div class="actions">
  <Button text="Annuler" on:click={() =>window.history.back()} />
  <Button text={saveText} on:click={save} />
</div>
