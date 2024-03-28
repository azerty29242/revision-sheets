<script>
  import FragmentView from "./FragmentView.svelte";
  import Popover from "./Popover.svelte";

  export let fragments;
  export let updateLocation;
</script>

{#each fragments as fragment}
  <FragmentView {fragment} {updateLocation} />
{/each}
