<script>
  import { onMount, tick } from "svelte";
  import fp from "lodash/fp";
  import Popover from "./Popover.svelte";
  import {
    computePosition,
    offset,
    flip,
    shift,
    arrow,
    autoUpdate,
  } from "@floating-ui/dom";

  export let fragment;
  export let updateLocation;

  let handleDefinedButtonClick;
  let definedButton;
</script>

{#if fragment.color !== ""}
  {#if fragment.action === "&"}
    <button bind:this={definedButton} on:click={handleDefinedButtonClick}>
      <span class={fragment.color + " text-blue-600"}>
        {fragment.text}
      </span></button
    >
    <Popover
      title={fragment.text}
      contents={fragment.target}
      button={definedButton}
      bind:display={handleDefinedButtonClick}
    />
  {:else if fragment.action === "*"}
    <button on:click={() => updateLocation(fragment.target)}>
      <span class={fragment.color + " text-blue-600 underline"}>
        {fragment.text}
      </span></button
    >
  {:else}
    <span class={fragment.color}>{fragment.text}</span>
  {/if}
{:else if fragment.action === "&"}
  <button on:click={() => alert(fragment.target)}>
    <span class="text-blue-600">{fragment.text}</span>
  </button>
{:else if fragment.action === "*"}
  <button on:click={() => updateLocation(fragment.target)}>
    <span class="text-blue-600 underline">
      {fragment.text}
    </span></button
  >
{:else}
  <span>{fragment.text}</span>
{/if}
