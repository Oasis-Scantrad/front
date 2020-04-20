<script>
  import ReleaseLink from "../components/Release-link.svelte";
  import New from "../components/New.svelte";
</script>

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
  <ReleaseLink
    name="r1"
    id=""
    description="some wunderbar things like you do not know"
    imgSrc="https://via.placeholder.com/150x200" />
  <ReleaseLink
    name="r2"
    id=""
    description="some wunderbar things like you do not know"
    imgSrc="https://via.placeholder.com/150x200" />
  <ReleaseLink
    name="r3"
    id=""
    description="some wunderbar things like you do not know"
    imgSrc="https://via.placeholder.com/150x200" />
</div>

<h3 class="part">Dernieres news</h3>
<div class="last-news">
  <New
    title="Site en construction"
    author="https://via.placeholder.com/200x450?text=author"
    date="19.04.2020"
    content={`<img
          src="https://via.placeholder.com/200x80"
          alt="some image"
          style="float:left;margin: 0 10px;" />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`} />
  <New
    title="Happ Site en construction"
    author="https://via.placeholder.com/200x450?text=author"
    date="18.04.2020"
    content={`<img
          src="https://via.placeholder.com/100x140"
          alt="some image"
          style="float:left;margin: 0 10px;" />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`} />
</div>
