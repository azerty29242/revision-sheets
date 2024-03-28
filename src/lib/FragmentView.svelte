<script>
  import Popover from "./Popover.svelte";

  export let fragment;
  export let updateLocation;

  let handleDefinedButtonClick;
  let definedButton;
</script>

{#if fragment.color !== ""}
  {#if fragment.action === "&"}
    <button bind:this={definedButton} on:click={handleDefinedButtonClick}>
      <span class={fragment.color + " print:hidden text-blue-600"}>
        {@html fragment.text}
      </span></button
    >
    <span class={fragment.color + " hidden print:inline"}
      >{@html fragment.text}<sup>{fragment.reference}</sup></span
    >
    <Popover
      title={fragment.text}
      contents={fragment.target}
      button={definedButton}
      bind:display={handleDefinedButtonClick}
    />
  {:else if fragment.action === "*"}
    <button on:click={() => updateLocation(fragment.target)}>
      <span
        class={fragment.color +
          " text-blue-600 underline print:text-black print:no-underline"}
      >
        {@html fragment.text}
      </span></button
    >
  {:else if fragment.action === "#"}
    <a href={fragment.target}>
      <span
        class={fragment.color +
          " text-blue-600 underline print:text-black print:no-underline"}
      >
        {@html fragment.text}
      </span></a
    >
  {:else}
    <span class={fragment.color}>{@html fragment.text}</span>
  {/if}
{:else if fragment.action === "&"}
  <button bind:this={definedButton} on:click={handleDefinedButtonClick}>
    <span class="print:hidden text-blue-600 print:text-black">
      {@html fragment.text}
    </span></button
  >
  <span class="hidden print:inline text-black"
    >{@html fragment.text}<sup>{fragment.reference}</sup></span
  >
  <Popover
    title={fragment.text}
    contents={fragment.target}
    button={definedButton}
    bind:display={handleDefinedButtonClick}
  />
{:else if fragment.action === "*"}
  <button on:click={() => updateLocation(fragment.target)}>
    <span class="text-blue-600 underline print:text-black print:no-underline">
      {@html fragment.text}
    </span></button
  >
{:else if fragment.action === "#"}
  <a href={fragment.target}>
    <span class="text-blue-600 underline print:text-black print:no-underline">
      {@html fragment.text}
    </span></a
  >
{:else}
  <span>{@html fragment.text}</span>
{/if}
