<script lang="ts">
  import { onMount } from "svelte";
  import { currentLocationLatLng } from "../stores/location.svelte";
  import { writable } from "svelte/store";
  import type { GeoifyResponse } from "../types/geoify";

  let inputValue = writable("");
  let isSubmitting = $state(false);
  // check if ip address is valid
  const ipRegex = new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}$");

  const handleSubmit = () => {
    const input = $inputValue;
    isSubmitting = true;

    if (input) {
      const qureyParemeter = ipRegex.test(input) ? "ipAddress" : "domain";
      fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_GEOIPFY_KEY}&${qureyParemeter}=${input}`
      )
        .then((res) => res.json())
        .then((data: GeoifyResponse) => {
          console.log("data", data);
        })
        .finally(() => {
          isSubmitting = false;
        });
    }
  };

  console.log($inputValue);

  onMount(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        currentLocationLatLng.loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    }
  });
</script>

<div class="relative flex flex-col flex-grow mx-auto">
  <h1 class="font-bold text-3xl text-white text-center">IP Address Tracker</h1>

  <div
    class="self-center flex flex-row justify-center max-w-lg w-full shadow-lg"
  >
    <input
      disabled={isSubmitting}
      bind:value={$inputValue}
      type="text"
      placeholder="Search for any IP address or domain"
      class="w-full mt-5 px-5 py-3 rounded-l-lg outline-none bg-white"
    />

    <button
      disabled={isSubmitting}
      class="mt-5 ml-0 px-5 py-3 bg-black text-white rounded-r-lg"
      onclick={handleSubmit}
    >
      Search
    </button>
  </div>
</div>
