<script>
  import Button from "../../../components/Button.svelte";
  import Datepicker from "../../../vendor/svelte-calendar/src/Components/Datepicker.svelte";
  import { onMount } from "svelte";
  export let chapter;
  export let release;
  export let index;

  let editors = chapter.editors.join(', ')

  const n = Date.now();

  let selected = new Date(chapter.date || n);
  let formattedSelected;

  $: chapter.date = selected.getTime() !== n ? selected.getTime() : undefined;

  $: chapter.editors = editors.split(',').map(e=>e.trim())

  const trad = {
    done: "Termine",
    todo: "A faire",
    "in-progress": "En cours",
  };
</script>

<style>
  .input-holder.number > input {
    width: 55px;
  }
  .input-holder :global(button) {
    padding-top: 6px;
    padding-bottom: 6px;
  }

  input {
    width: 100%;
  }

  .input-holder {
    display: flex;
    margin-bottom: 5px;
  }
</style>

<tr>
  <td>
    <div class="input-holder number">
      <input type="text" bind:value={chapter.number} />
    </div>
  </td>
  <td>
    <div class="input-holder">
      <select bind:value={chapter.state}>
        {#each Object.entries(trad) as [key, value]}
          <option value={key}>{value}</option>
        {/each}
      </select>
    </div>
  </td>
  <td>
    <div class="input-holder">
      <Datepicker
        format={'#{d}/#{m}/#{Y}'}
        bind:formattedSelected
        bind:selected>
        <input
          type="text"
          disabled
          value={!isNaN(selected.getTime()) ? formattedSelected : ''} />
      </Datepicker>
    </div>
  </td>
  <td>
    <div class="input-holder">
      <input type="text" bind:value={editors} />
    </div>
  </td>
  <td>
    <div class="input-holder">
      <input type="text" bind:value={chapter.link} />
    </div>
  </td>
  <td>
    <div class="input-holder">
      <Button
        text="-"
        on:click={() => (release.chapters = release.chapters.filter((c, i) => i !== index))} />
    </div>
  </td>
</tr>
