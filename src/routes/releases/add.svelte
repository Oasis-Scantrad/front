<script>
  import ReleaseEdit from "./[id]/edit.svelte";

  let release = {
    title: "",
    chapters: [],
    img: "",
    author: "",
    tags: []
  };
</script>

<ReleaseEdit {release} editText="ajout" saveText="creer" postUrl="/releases.json" />
