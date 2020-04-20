<script>
  export let segment;
</script>

<style>
  nav {
    width: 100%;
    position: fixed;
    z-index: 10;
    background: #fff;
  }

  .sizer {
    max-width: 56em;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 3px solid #000;
  }

  .placer {
    padding: 10px 0px;
  }

  a.link {
    display: block;
    background-color: transparent;
    padding: 5px 15px;
    font-family: Arial;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: black;
    transition-duration: 0.2s;
  }
  a.link:hover,
  a.link.active {
    background-color: black;
    color: #fff;
  }

  .logo > .link {
    color: #000;
    position: absolute;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin-left: -45px;
    margin-top: -43px;
    border: 3px solid #000;
    background-color: #fff;
    font-size: 35px;
    border-radius: 50%;
  }

  .placeholder {
    height: 70px;
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
        <div class="text">Releases</div>
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
      <a href="blog" class="link">
        <div class="text">Plus</div>
      </a>
    </div>
  </div>
</nav>
<div class="placeholder" />
