<script>
  export let title;
  export let author;
  export let date;
  export let content;
</script>

<style>
  .new {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
  }
  .new:nth-last-child(1) {
    padding-bottom: 0;
  }
  .content {
    padding-left: 15px;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .author > img {
    width: 7em;
  }
</style>

<div class="new">
  <div class="author">
    <img src="{author}" alt="author" />
  </div>
  <div class="content">
    <div class="title">
      <h2>{title}</h2>
      <div class="date">{date}</div>
    </div>
    <p class="text">
      {@html content}
    </p>
  </div>
</div>
