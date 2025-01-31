<script lang="ts">
  import "../app.css";
  import L from "leaflet";
  import desktopBg from "$lib/images/pattern-bg-desktop.png";
  import mobileBg from "$lib/images/pattern-bg-mobile.png";
  import { isMdScreen } from "../stores/dims.svelte";
  import { onMount } from "svelte";
  import { currentLocationLatLng } from "../stores/location.svelte";
  import PIN_ICON from "$lib/images/icon-location.svg";

  let { children } = $props();

  let map: L.Map;

  const bgImage = $isMdScreen ? desktopBg : mobileBg;

  var pinIcon = L.icon({
    iconUrl: PIN_ICON,
    iconSize: [46, 56], // size of the icon
    iconAnchor: [23, 56], // point of the icon which will correspond to marker's location
  });

  onMount(() => {
    map = L.map("map").setView(
      [currentLocationLatLng.loc.lat, currentLocationLatLng.loc.lng],
      17
    );

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 17,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  });

  $effect(() => {
    if (map) {
      map.setView(
        [currentLocationLatLng.loc.lat, currentLocationLatLng.loc.lng],
        17
      );

      L.marker([currentLocationLatLng.loc.lat, currentLocationLatLng.loc.lng], {
        icon: pinIcon,
      }).addTo(map);
    }
  });
</script>

<main class="h-full pb-0 pt-10 px-10 p-0">
  <div
    class="absolute grid grid-rows-[30vh_1fr] h-screen bottom-0 top-0 left-0 right-0 z-0"
  >
    <div class="bg-cover" style="background-image: url({bgImage});"></div>
    <div class="relative">
      <div class="absolute top-0 bottom-0 w-full h-full" id="map"></div>
    </div>
  </div>
  {@render children()}
</main>
