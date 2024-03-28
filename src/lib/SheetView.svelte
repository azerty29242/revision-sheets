<script>
  import { onMount } from "svelte";
  import SheetPlaceholder from "./TextPlaceholder.svelte";
  import readText from "./readText";
  import SectionView from "./SectionView.svelte";

  export let item;
  export let updateLocation;

  let textLoaded = false;

  let sheet = {
    title: "",
    sections: [],
  };

  onMount(async () => {
    const response = await fetch(item.text);
    sheet = readText(await response.text());
    textLoaded = true;
  });
</script>

<div class="mt-8">
  {#if textLoaded}
    <div class="flex flex-col items-start gap-8">
      {#each sheet.sections as section}
        <SectionView {section} {updateLocation} />
      {/each}
    </div>
  {:else}
    <SheetPlaceholder />
  {/if}
</div>
