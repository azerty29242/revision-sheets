<script>
  import "katex";
  import renderMathInElement from "katex/contrib/auto-render";
  import LineView from "./LineView.svelte";

  export let paragraph;
  export let updateLocation;

  /**
   * @param {HTMLElement} element
   */
  function renderKatex(element) {
    renderMathInElement(element, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false },
      ],
      output: "htmlAndMathml",
      throwOnError: false,
    });
  }
</script>

{#if paragraph.type === "U"}
  <ul>
    {#each paragraph.lines as line}
      <li use:renderKatex>
        <LineView fragments={line} {updateLocation} />
      </li>
    {/each}
  </ul>
{:else if paragraph.type === "O"}
  <ol>
    {#each paragraph.lines as line}
      <li use:renderKatex>
        <LineView fragments={line} {updateLocation} />
      </li>
    {/each}
  </ol>
{:else}
  <p>
    {#each paragraph.lines as line}
      <span class="list-none" use:renderKatex>
        <LineView fragments={line} {updateLocation} />
      </span>
    {/each}
  </p>
{/if}
