<script>
  import Tag from "../components/Tag.svelte";
  import Button from "../components/Button.svelte";
  import { stores, goto } from "@sapper/app";
  import { format } from "date-fns";
  const { session } = stores();
  export let release;

  const trad = {
    done: "Termine",
    todo: "A faire",
    "in-progress": "En cours",
  };

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
  table {
    width: 100%;
  }
  th {
    text-align: left;
  }
  .release-img > img {
    max-width: 150px;
    max-height: 150px;
  }
  .tags {
    display: flex;
  }
</style>

<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img src={release.img} alt="release pic" />
    </div>
  </div>
  <div class="col-2">
    <div class="desc">
      <h3>
        <a href="/releases/{release.id}">{release.title}</a>
      </h3>
      <div class="tags">
        {#each release.tags as tag}
          <Tag name={tag} />
        {/each}
      </div>
      <div class="author">
        <b>Auteur:</b>
        <a href=".">{release.author}</a>
      </div>
    </div>
    <div class="chapters">
      <table>
        <thead>
          <tr>
            <th>Numero</th>
            <th>Etat</th>
            <th>Date</th>
            <th>Editeurs</th>
          </tr>
        </thead>
        <tbody>
          {#each release.chapters as chapter}
            <tr>
              <td>{chapter.number}</td>
              <td>{trad[chapter.state]}</td>
              <td>
                {chapter.date ? format(new Date(chapter.date), 'dd/MM/yyyy') : '-'}
              </td>
              <td>
                {#each chapter.editors as editor, index}
                  <a href="/users/{editor}">{editor}</a>{#if index+1 !== chapter.editors.length},&MediumSpace;{/if}
                {/each}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
