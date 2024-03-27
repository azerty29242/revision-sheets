<script>
  export let currentLocation;
  export let updateLocation;

  function goBack() {
    const newLocation = currentLocation.substring(
      0,
      currentLocation.length - 1
    );
    updateLocation(newLocation);
  }
</script>

<button
  class="border px-4 py-2 rounded flex w-auto gap-4 mb-4"
  on:click={goBack}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width={1.5}
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
  Retour</button
>
