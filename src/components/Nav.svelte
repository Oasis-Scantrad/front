<script>
  import { stores } from "@sapper/app";
  const { session } = stores();
  export let segment;
  let sub = false;
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    z-index: 10;
    background: var(--primary);
  }

  .sizer {
    max-width: var(--page-width);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 3px solid var(--secondary);
  }

  .placer {
    padding: var(--sm-px) 0px;
  }

  .link {
    display: block;
    background-color: transparent;
    padding: 5px 15px;
    font-family: Arial;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: var(--secondary);
    transition-duration: 0.2s;
    cursor: pointer;
  }
  .link:hover,
  .link.active {
    background-color: var(--secondary);
    color: var(--primary);
  }

  .logo > .link {
    color: var(--secondary);
    position: absolute;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-left: -45px;
    margin-top: -43px;
    border: 3px solid var(--secondary);
    background-color: var(--primary);
    font-size: 35px;
    border-radius: 50%;
  }

  .placeholder {
    height: 70px;
  }
  .sub {
    height: 0px;
    position: absolute;
    overflow: hidden;
    transition-duration: 0.5s;
    border-radius: 1px;
    transition-duration: 0.5s;
    background-color: var(--primary);
    padding: 0px;
  }
  .hidden {
    height: 0px;
    box-shadow: 0;
  }
  .show {
    width: 200px;
    height: 200px;
    padding: 10px;
    box-shadow: 0px 0px 1px var(--secondary);
  }
</style>

<nav>
  <div class="sizer">
    <div class="placer">
      <a href="news" class="link {segment === 'news' ? 'active' : ''}">
        <div class="text">News</div>
      </a>
    </div>
    <div class="placer">
      <a href="releases" class="link {segment === 'releases' ? 'active' : ''}">
        <div class="text">Bouquins</div>
      </a>
    </div>
    <div class="logo placer">
      <a href="." class="link">
        <div class="text">OS</div>
      </a>
    </div>
    <div class="placer">
      <a href="about" class="link {segment === 'about' ? 'active' : ''}">
        <div class="text">Avancement</div>
      </a>
    </div>
    <div class="placer">
      <div class:active={sub} on:click={() => (sub = !sub)} class="link">
        <div class="text">Plus</div>
      </div>
      <div class:hidden={!sub} class:show={sub} class="sub">
        <div>
          {#if !$session.auth.logged}
            <a class="link" href="auth/login">Connexion</a>
          {:else}
            <a class="link" href="auth/login">logout</a>
          {/if}
        </div>
        <div>
          <a href="/" class="link">home</a>
        </div>
      </div>
    </div>
  </div>
</nav>
<div class="placeholder" />
