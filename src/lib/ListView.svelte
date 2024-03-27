<script>
  import GridButton from "./GridButton.svelte";
  import sheets from "./sheets.js";

  export let item;
  export let updateLocation;
</script>

<div
  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full"
>
  {#each item.subitems.map( (/** @type {string} */ subitem) => [subitem, sheets[subitem]] ) as [subitemLocation, subitem]}
    <GridButton
      item={subitem}
      openItem={() => updateLocation(subitemLocation)}
    />
  {/each}
</div>
