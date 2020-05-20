<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`users/${params.name}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return {
        user: data,
      };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Button from "../../../components/Button.svelte";
  import { stores, goto } from "@sapper/app";
  import { onMount } from "svelte";
  export let user;
  export let saveText = "Enregistrer";
  export let mode = "edition";
  export let postUrl = `/users/${user.username}.json`;

  onMount((_) => {
    user.img = !user.img
      ? "https://via.placeholder.com/200x450?text=" + user.username
      : user.img;
  });

  const { session } = stores();
  if (!$session.auth.logged) goto("/auth/login");

  async function save() {
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
</script>

<style>
  .placer {
    display: flex;
    justify-content: stretch;
  }
  .col-1 input {
    width: 150px;
  }
  .col-2 {
    padding-left: var(--sm-px);
    flex: auto;
  }
  .release-img > img {
    max-width: 150px;
    max-height: 350px;
  }
  .content {
    white-space: pre-line;
    min-height: 300px;
  }
  .actions {
    text-align: right;
  }
</style>

<svelte:head>
  <title>{user.username}</title>
</svelte:head>
<div class="placer">
  <div class="col-1">
    <div class="release-img">
      <img src={user.img} alt="user pic" />
    </div>
    <h3>Avatar URl:</h3>
    <input type="text" bind:value={user.img} />
  </div>
  <div class="col-2">
    <div class="desc">
      {#if mode === 'edition'}
        <h1>{user.username}</h1>
      {:else}
        <h3>Nom d'utilisateur:</h3>
        <input type="text" bind:value={user.username} />
        <h3>Mot de passe:</h3>
        <input type="password" bind:value={user.password} />
      {/if}
      <h3>Description:</h3>
      <textarea class="content" bind:value={user.description} />
    </div>
  </div>
</div>
<div class="actions">
  <Button text="Annuler" on:click={() => window.history.back()} />
  <Button text={saveText} on:click={save} />
</div>
