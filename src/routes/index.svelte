<style>
  .banner {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    background-image: url(http://oasis-scantrad.fr/V4/skin/Bon/header.jpg);
    background-attachment: scroll;
    backdrop-filter: blur(3px);
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .banner > h1 {
    margin: 0;
  }

  .banner-height {
    height: 100px;
    margin-top: -3em;
  }

  .release-roll {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .release-item {
    height: 150px;
    width: 150px;
    overflow: hidden;
    position: relative;
  }
  .release-item > div.img > img {
    height: 100%;
  }
  .release-item > div.img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
  }
  .release-hover {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    z-index: 1;
    background-color: #000c;
    color: #fff;
    padding: 10px;
    transition-duration: 0.3s;
    text-decoration: none;
  }
  .release-hover:hover {
    opacity: 1;
  }
</style>

<svelte:head>
  <title>Oasis Scantrad</title>
</svelte:head>

<div class="banner banner-height">
  <h1>.</h1>
</div>
<div class="banner-height placeholder" />

<h2>Dernieres sorties</h2>
<div class="release-roll">
  <div class="release-item">
    <div class="img">
      <img
        src="http://oasis-scantrad.fr/img/dons.png"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h3>Donnation</h3>
      some bala bla
    </a>
  </div>
  <div class="release-item">
    <div class="img">
      <img
        src="http://oasis-scantrad.fr/img/dons.png"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h3>Donnation</h3>
      some bala bla
    </a>
  </div>
  <div class="release-item">
    <div class="img">
      <img
        src="http://oasis-scantrad.fr/img/dons.png"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h3>Donnation</h3>
      some bala bla
    </a>
  </div>
</div>

<h2>Dernieres news</h2>
<div class="last-news">
  <div class="new">
    <div />
  </div>
</div>
