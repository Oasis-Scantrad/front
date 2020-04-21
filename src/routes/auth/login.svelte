<script>
  import Button from "../../components/Button.svelte";
  let username;
  let password;
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
  <Button
    text="se connecter"
    on:click={() => alert(`TODO: send ${username} + ${password}`)} />
</form>
