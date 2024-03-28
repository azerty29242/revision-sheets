<script>
  import {
    arrow,
    autoUpdate,
    computePosition,
    flip,
    offset,
    shift,
  } from "@floating-ui/dom";
  import fp from "lodash/fp";
  import { tick } from "svelte";

  export let title;
  export let contents;
  export let button;

  let popover;
  let arrowElement;

  let popoverDisplayed = false;
  let cleanup;

  /**
   * @param {string} placement
   */
  function updateArrowPosition(placement, arrowData) {
    const { x: arrowX, y: arrowY } = arrowData;
    const [staticSide, arrowClasses] = {
      top: ["bottom", " bg-white border-b border-r"],
      bottom: ["top", " bg-gray-100 border-t border-l"],
    }[placement];

    arrowElement.classList = "absolute w-3 h-3 rotate-45" + arrowClasses;
    Object.assign(arrowElement.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-6px",
    });
  }

  function updatePopoverPosition() {
    computePosition(button, popover, {
      placement: "bottom",
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 16 }),
        arrow({ element: arrowElement }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      Object.assign(popover.style, {
        left: x + "px",
        top: y + "px",
      });

      updateArrowPosition(placement.split("-")[0], middlewareData.arrow);
    });
  }

  function isDescendant(parent, child) {
    var node = child;
    while (node != null) {
      if (node == parent) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  function hide(event) {
    if (
      !isDescendant(button, event.target) &&
      !isDescendant(popover, event.target)
    ) {
      cleanup();
      popoverDisplayed = false;
      document.body.removeEventListener("click", hide, false);
    }
  }

  export const display = async () => {
    popoverDisplayed = true;
    await tick();
    cleanup = autoUpdate(button, popover, updatePopoverPosition);

    document.body.addEventListener("click", hide, false);
  };
</script>

<div
  id="popover"
  bind:this={popover}
  on:focusout={cleanup}
  class={"border rounded w-max max-w-64 absolute top-0 left-0 z-50" +
    (popoverDisplayed ? "" : " hidden")}
>
  <div id="arrow" bind:this={arrowElement}></div>
  <div class="px-4 py-2 bg-gray-100">
    {fp.capitalize(title)}
  </div>
  <hr />
  <div class="px-4 py-2 bg-white">
    {contents}
  </div>
</div>
