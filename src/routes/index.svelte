<style>
  .banner {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    background-image: url(https://via.placeholder.com/940x215);
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
    height: 15em;
    margin-top: -3em;
    margin-bottom: 1em;
  }

  .release-roll {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    margin-bottom: 1em;
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

  .new {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
  }
  .new:nth-last-child(1) {
    padding-bottom: 0;
  }
  .content{
    padding-left: 15px; 
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .author>img {
    width:7em;
  }
  h3.part {
    text-transform: uppercase;
  }
</style>

<svelte:head>
  <title>Oasis Scantrad</title>
</svelte:head>

<div class="banner banner-height">
  <h1>.</h1>
</div>
<div class="banner-height placeholder" />

<h3 class="part">Dernieres sorties</h3>
<div class="release-roll">
  <div class="release-item">
    <div class="img">
      <img
        src="https://via.placeholder.com/150x200"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h4>Release 1</h4>
      some bala bla
    </a>
  </div>
  <div class="release-item">
    <div class="img">
      <img
        src="https://via.placeholder.com/150x200"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h4>Release 2</h4>
      some bala bla
    </a>
  </div>
  <div class="release-item">
    <div class="img">
      <img
        src="https://via.placeholder.com/150x200"
        alt="release-thumbnail" />
    </div>
    <a href="." class="release-hover">
      <h4>Release 3</h4>
      some bala bla
    </a>
  </div>
</div>

<h3 class="part">Dernieres news</h3>
<div class="last-news">
  <div class="new">
    <div class="author">
      <img src="https://via.placeholder.com/200x450?text=author" alt="">
    </div>
    <div class="content">
      <div class="title">
        <h2>Nouveau site en construction</h2>
        <div class="date">19.04.2020</div>
      </div>
      <p class="text">
        <img src="https://via.placeholder.com/200x80" alt="some image" style="float:left;margin: 0 10px;">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
  <div class="new">
    <div class="author">
      <img src="https://via.placeholder.com/200x450?text=author" alt="">
    </div>
    <div class="content">
      <div class="title">
        <h2>Nouveau site en construction</h2>
        <div class="date">19.04.2020</div>
      </div>
      <p class="text">
        <img src="https://via.placeholder.com/80x120" alt="some image" style="float:left;margin: 0 10px;">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
  </div>
</div>
