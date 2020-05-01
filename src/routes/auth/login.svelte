<script>
  import Button from "../../components/Button.svelte";
  import { amILogged, logout } from "../../helpers/auth";
  let username;
  let password;

  function login() {
    fetch("auth/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(r => r.json())
      .then(r => console.log(r));
  }
</script>

<style>
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    margin-bottom: var(--small);
    text-align: center;
  }
</style>

<svelte:head>
  <title>Login - OS</title>
</svelte:head>
{#if !amILogged()}
<form class="login-form">
  <h1>Connexion</h1>
  <input
    type="text"
    autocomplete="username"
    bind:value={username}
    placeholder="Username" />
  <input
    type="password"
    autocomplete="current-password"
    bind:value={password}
    placeholder="Password" />
  <Button text="se connecter" on:click={() => login()} />
</form>
{:else}
  <h3>You are already connected</h3>
  <button on:click={logout}>logout</button>
{/if}
