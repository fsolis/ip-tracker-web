<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import SEARCH_ICON from "$lib/images/icon-arrow.svg";
  import IpAddressInfo from "$lib/components/IpAddressInfo.svelte";

  import { fetchInfoForIp, fetchInfoGeo } from "../utils/geoifyRequests";

  let inputValue = writable("");
  let isSubmitting = $state(false);

  const handleSubmit = async () => {
    const input = $inputValue;
    isSubmitting = true;

    if (input) {
      await fetchInfoForIp(input);
    }

    isSubmitting = false;
  };

  onMount(() => {
    fetchInfoGeo();
  });
</script>

<div class="relative flex flex-col flex-grow mx-auto">
  <h1 class="font-bold text-xl md:text-3xl text-white text-center mb-4 md:mb-8">
    IP Address Tracker
  </h1>

  <div
    class="self-center flex flex-row justify-center max-w-lg w-full shadow-lg"
  >
    <input
      disabled={isSubmitting}
      bind:value={$inputValue}
      type="text"
      placeholder="Search for any IP address or domain"
      class="w-full px-5 md:px-8 py-3 md:py-5 rounded-l-xl outline-none bg-white font-bold"
    />

    <button
      disabled={isSubmitting}
      class="ml-0 px-8 py-3 bg-black text-white rounded-r-xl"
      onclick={handleSubmit}
    >
      <img class="h-4 w-4" src={SEARCH_ICON} alt="search" />
    </button>
  </div>

  <IpAddressInfo />
</div>
