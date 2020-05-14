<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`news/${params.id}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { anew: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Tag from "../../../components/Tag.svelte";
  import Button from "../../../components/Button.svelte";
  import { sanitize, unecodeHtml } from "../../../services/sanitizer";
  import Datepicker from "../../../vendor/svelte-calendar/src/Components/Datepicker.svelte";
  import { stores, goto } from "@sapper/app";
  import {onMount} from 'svelte';
  export let anew;
  export let saveText = "Enregistrer";
  export let editText = "edition";
  export let postUrl = `/news/${anew.id}.json`;

  onMount(()=>{
    console.log(anew.content);
    anew.content = unecodeHtml(anew.content);
    console.log(anew.content);
  })

  let formattedSelected;
  let selectedDate = new Date(+anew.date);

  const { session } = stores();
  if (!$session.auth.logged) goto("/auth/login");

  async function save() {
    const res = await fetch(postUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...anew, date: +anew.date }),
    });
    console.log(await res.json());
    goto("/news");
  }
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

  .author {
    padding-bottom: var(--sm-px);
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
    font-family: "Courier New", Courier, monospace;
    text-align: left;
    line-height: 1.5em;
  }
  .actions {
    text-align: right;
  }
</style>

<svelte:head>
  <title>{anew.title}</title>
</svelte:head>

<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img
        src={'https://via.placeholder.com/150x200?text=' + anew.author}
        alt="release pic" />
    </div>
    <div class="author">
      <h3>Auteur</h3>
      <div class="input-holder">
        <input type="text" bind:value={anew.author} />
      </div>
      <h3>Date</h3>
      <div class="input-holder">
        <Datepicker
          min={new Date(0)}
          format={'#{d}/#{m}/#{Y}'}
          bind:formattedSelected
          bind:selected={selectedDate}>
          <input type="text" disabled value={formattedSelected} />
        </Datepicker>
      </div>
    </div>
  </div>
  <div class="col-2">
    <div class="desc">
      <h1>
        Mode {editText}:
        <br />
        <input type="text" bind:value={anew.title} />
      </h1>
      <p class="content">
        <textarea bind:value={anew.content} />
      </p>
    </div>
    <h2>Apercu</h2>
    <div>
      {@html sanitize(anew.content)}
    </div>
  </div>
</div>
<div class="actions">
  <Button text="Annuler" on:click={() => window.history.back()} />
  <Button text={saveText} on:click={save} />
</div>
