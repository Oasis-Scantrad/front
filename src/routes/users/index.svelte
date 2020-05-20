<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`users.json`)
      .then((r) => r.json())
      .then((users) => {
        return { users };
      });
  }
</script>

<script>
  export let users;
</script>

<style>
  table {
    width: 100%;
  }
</style>

<svelte:head>
  <title>L'equipe</title>
</svelte:head>

<h1>L'equipe</h1>

<table>
  <tr>
    <th>Nom</th>
    <th>Roles</th>
    <th />
  </tr>
  {#each users.sort((a,b)=>a.username -b.username).sort((a,b)=> -+a.roles.includes('admin')) as user}
    <tr>
      <td><a href="/users/{user.username}">{user.username}</a></td>
      <td>{user.roles.join(', ')}</td>
    </tr>
  {/each}
</table>
