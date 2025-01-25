<script lang="ts">
  import "../app.css";
  let { children } = $props();

  import desktopBg from "$lib/images/pattern-bg-desktop.png";
  import mobileBg from "$lib/images/pattern-bg-mobile.png";
  import { isMdScreen } from "../stores/dims.svelte";

  const bgImage = $isMdScreen ? desktopBg : mobileBg;
</script>

<main class="h-full my-10 mx-10 p-0">
  <div
    class="absolute grid grid-rows-[30vh_1fr] h-screen bottom-0 top-0 left-0 right-0 z-0"
  >
    <div class="bg-cover" style="background-image: url({bgImage});"></div>
    <div></div>
  </div>
  {@render children()}
</main>
