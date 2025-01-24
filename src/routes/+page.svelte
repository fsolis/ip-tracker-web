<script>
  import desktopBg from "$lib/images/pattern-bg-desktop.png";
  import mobileBg from "$lib/images/pattern-bg-mobile.png";
  import { isMdScreen } from "../stores/dims.svelte";

  const bgImage = $isMdScreen ? desktopBg : mobileBg;
</script>

<div class="grid grid-rows-[30vh_1fr] h-screen">
  <div class="bg-cover" style="background-image: url({bgImage});"></div>
  <p>Welcome to the home page!</p>
</div>
