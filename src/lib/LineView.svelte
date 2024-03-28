<script>
  export let fragments;
  export let updateLocation;
</script>

{#each fragments as fragment}
  <span class={fragment.color}>{fragment.text}</span>
{/each}
