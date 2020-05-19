<script>
  import Button from "../../components/Button.svelte";
  let username;
  let password;

  import { stores, goto } from "@sapper/app";
  const { session } = stores();

  let loginError;

  function login() {
    fetch("auth/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(r => {
        if (r.status === 401) throw Error("Credentials error");
        loginError = undefined;
        return r.json();
      })
      .catch(e => {
        console.error(e);
        loginError = "Connexion impossible, veuillez reessayer";
      })
      .then(r => {
        if (loginError) return;
        session.update(s => ({ ...s, auth: r.auth }));
        goto("/");
      });
  }


</script>

<style>
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form input {
    margin-bottom: var(--small);
    text-align: center;
    width: 18em;
  }

  .login-error{
    color: var(--error);
    padding-left: 5px;
    border-left: 2px solid var(--error);
    margin-bottom: 5px;
  }
</style>

<svelte:head>
  <title>Login - OS</title>
</svelte:head>
{#if !$session.auth.logged}
  <div
    class="login-form"
    on:keypress={event => (event.key == 'Enter' ? login() : '')}>
    <h1>Connexion</h1>
    {#if loginError !== undefined}
      <div class="login-error">{loginError}</div>
    {/if}
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
    <Button text="se connecter" on:click={login} />
  </div>
{:else}
  <div>
    Vous etes deja connecte en tant que <strong><a href="/users/{$session.auth.session.username}">{$session.auth.session.username}</a></strong>    <pre>{JSON.stringify($session, null,2)}</pre>
  </div>
{/if}
