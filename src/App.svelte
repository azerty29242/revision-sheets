<script lang="typescript">
  import sheets from "./lib/sheets"
  let location = ""
  $: item = sheets[location]
</script>

<div class="container mx-auto px-4 flex flex-col gap-4">
  <h1 class="text-3xl font-bold">{item.name}</h1>
  {#if (item.type === "folder")}
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
    {#each item.subitems.map((subitem) => sheets[subitem]) as subitem}
      <div class="border rounded">
        <img src={subitem.image} alt="" class="w-full rounded-t">
        <div class="px-2 flex justify-center items-center h-12"><span class="font-bold">{subitem.name}</span></div>
      </div>
    {/each}
  </div>
  {:else}
  <p>Sheet view</p>
  {/if}
</div>
