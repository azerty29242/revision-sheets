<script>
  import { onMount } from "svelte";
  import SheetPlaceholder from "./TextPlaceholder.svelte";
  import readText from "./readText";
  import SectionView from "./SectionView.svelte";
  import fp from "lodash/fp";

  export let item;
  export let updateLocation;

  let textLoaded = false;

  let sheet = {
    title: "",
    sections: [],
  };

  onMount(async () => {
    const response = await fetch(item.text);
    sheet = readText(await response.text());
    textLoaded = true;
  });
</script>

<div class="mt-8">
  {#if textLoaded}
    <div class="flex flex-col items-start gap-8">
      {#each sheet.sections as section}
        <SectionView {section} {updateLocation} />
      {/each}
      <div class="hidden print:block">
        <SectionView
          section={{
            header: "Définitions",
            paragraphs: [
              {
                type: "A",
                lines: fp.flattenDepth(
                  3,
                  sheet.sections.map((section) =>
                    section.paragraphs.map((paragraph) =>
                      paragraph.lines.map((line) =>
                        line
                          .filter((fragment) => fragment.action === "&")
                          .map((fragment) => [
                            {
                              text:
                                fp.capitalize(fragment.text) +
                                "<sup>" +
                                fragment.reference +
                                "</sup>" +
                                ": " +
                                fragment.target,
                              color: "",
                              action: "",
                              target: "",
                            },
                          ])
                      )
                    )
                  )
                ),
              },
            ],
          }}
          {updateLocation}
        />
      </div>
    </div>
  {:else}
    <SheetPlaceholder />
  {/if}
</div>
