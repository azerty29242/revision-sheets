<script>
  import ParagraphView from "./ParagraphView.svelte";

  export let section;
  export let updateLocation;
</script>

<div class="flex flex-col gap-4">
  <h2 class="text-xl font-bold">{section.header}</h2>
  {#each section.paragraphs as paragraph}
    <ParagraphView {paragraph} {updateLocation} />
  {/each}
</div>
