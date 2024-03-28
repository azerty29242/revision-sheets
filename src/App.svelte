<script>
  import BackButton from "./lib/BackButton.svelte";
  import ListView from "./lib/ListView.svelte";
  import SheetView from "./lib/SheetView.svelte";
  import sheets from "./lib/sheets.js";

  let currentLocation = "";

  window.addEventListener("popstate", (event) => {
    let state = event.state;

    if (Object.hasOwn(state, "location")) {
      currentLocation = state.location;
    }
  });

  function replaceHistoryState() {
    if (currentLocation === "") {
      history.replaceState(
        { location: currentLocation },
        "",
        location.origin + location.pathname
      );
    } else {
      history.replaceState(
        { location: currentLocation },
        "",
        location.origin + location.pathname + "#" + currentLocation
      );
    }

    document.title = sheets[currentLocation].name;
  }

  function pushHistoryState() {
    if (currentLocation === "") {
      history.pushState(
        { location: currentLocation },
        "",
        location.origin + location.pathname
      );
    } else {
      history.pushState(
        { location: currentLocation },
        "",
        location.origin + location.pathname + "#" + currentLocation
      );
    }

    document.title = sheets[currentLocation].name;
  }

  /**
   * @param {string} newLocation
   */
  function updateLocation(newLocation) {
    currentLocation = newLocation;

    pushHistoryState();
  }

  const hash = location.hash;

  if (hash !== null && hash.length >= 2) {
    for (const letter of hash.substring(1)) {
      if (Object.hasOwn(sheets, currentLocation + letter)) {
        currentLocation += letter;
      } else {
        break;
      }
    }
  }

  replaceHistoryState();

  $: item = sheets[currentLocation];
</script>

<div class="container mx-auto px-4">
  <h1 class="text-3xl font-bold mb-4">{item.name}</h1>
  {#if currentLocation !== ""}
    <BackButton {currentLocation} {updateLocation} />
  {/if}
  {#if item.type === "folder"}
    <ListView {item} {updateLocation} />
  {:else}
    <SheetView {item} {updateLocation} />
  {/if}
</div>
