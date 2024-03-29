<script>
  import ImagePlaceholder from "./ImagePlaceholder.svelte";

  export let item;
  export let openItem;

  let imageLoaded = false;
</script>

<button class="border rounded" on:click={openItem}>
  <img
    src={item.image}
    alt=""
    class={"w-full rounded-t" + (imageLoaded === false ? " hidden" : "")}
    on:load={() => (imageLoaded = true)}
  />
  {#if imageLoaded === false}
    <ImagePlaceholder />
  {/if}
  <div class="px-2 flex justify-center items-center h-12">
    <span class="font-bold max-w-full max-h-full overflow-hidden"
      >{item.name}</span
    >
  </div>
</button>
