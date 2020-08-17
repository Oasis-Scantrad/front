<script>
  import ReleaseEdit from "./[id]/edit.svelte";
  import {stores, goto} from '@sapper/app'
  const { session } = stores();
  if (!$session.auth.logged) goto("/auth/login");

  let release = {
    title: "",
    chapters: [],
    img: "",
    author: $session.auth.session.username,
    tags: []
  };
</script>

<ReleaseEdit {release} editText="ajout" saveText="creer" postUrl="/releases.json" />
