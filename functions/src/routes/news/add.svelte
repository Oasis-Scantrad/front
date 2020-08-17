<script>
  import ReleaseEdit from "./[id]/edit.svelte";

  let anew = {
    title: "",
    content: "",
    author: "",
    date: Date.now()
  };
</script>

<ReleaseEdit {anew} editText="ajout" saveText="creer" postUrl="/news.json" />
