<script>
  import desktopBg from "$lib/images/pattern-bg-desktop.png";
  import mobileBg from "$lib/images/pattern-bg-mobile.png";
  import { isMdScreen } from "../stores/dims.svelte";

  const bgImage = $isMdScreen ? desktopBg : mobileBg;
</script>

<div class="relative flex flex-col flex-grow mx-auto">
  <h1 class="font-bold text-3xl text-white text-center">IP Address Tracker</h1>

  <div class="self-center flex flex-row justify-center max-w-lg w-full">
    <input
      type="text"
      placeholder="Search for any IP address or domain"
      class="w-full mt-5 px-5 py-3 rounded-l-lg outline-none"
    />

    <button class="mt-5 ml-0 px-5 py-3 bg-black text-white rounded-r-lg">
      Search
    </button>
  </div>
</div>
