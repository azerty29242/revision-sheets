<script>
  export let fragments;
  export let updateLocation;
</script>

{#each fragments as fragment}
  {#if fragment.color !== ""}
    <span class={fragment.color}>{fragment.text}</span>
  {:else}
    <span>{fragment.text}</span>
  {/if}
{/each}
