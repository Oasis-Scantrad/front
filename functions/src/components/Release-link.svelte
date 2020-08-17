<script>
  export let name;
  export let id;
  export let imgSrc;
  export let description;
</script>

<style>
  .release-item {
    height: 150px;
    width: 150px;
    overflow: hidden;
    position: relative;
  }
  .release-item > div.img > img {
    height: 100%;
    transition-duration: .3s;

  }

  .release-item:hover > div.img > img {
    width: 100%;
    height: auto;
    filter: var(--filter-invert);
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
    color: var(--primary);
    padding: var(--sm-px);
    transition-duration: 0.3s;
    text-decoration: none;
    text-align: left;
    font-size: 0.8em;
    overflow: auto;
  }
  .release-hover:hover {
    opacity: 1;
  }

  :glabal(.tag) {
    font-size: 1em;
  }
</style>

<div class="release-item">
  <div class="img">
    <img src={imgSrc} alt="release-thumbnail" />
  </div>
  <a href="releases/{id}" class="release-hover">
    <b>{name}</b><br/>
    {description}
  </a>
</div>
