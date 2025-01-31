<script lang="ts">
  import { ipInfo } from "../../stores/ipInfo.svelte";
</script>

<div
  class="bg-white rounded-2xl shadow-lg p-5 flex flex-row mt-12 justify-between min-h-48 py-10"
>
  <div class="flex flex-col flex-grow border-r border-gray-300 mr-3 px-3">
    <h5 class="uppercase font-bold text-gray-600">IP Address</h5>
    <h2 class="mt-4 text-3xl font-bold">{ipInfo.ip}</h2>
  </div>
  <div class="flex flex-col flex-grow border-r border-gray-300 mr-3 px-3">
    <h5 class="uppercase font-bold text-gray-600">Location</h5>
    <h2 class="mt-4 text-3xl font-bold">{ipInfo.location}</h2>
  </div>
  <div class="flex flex-col flex-grow border-r border-gray-300 mr-3 px-3">
    <h5 class="uppercase font-bold text-gray-600">Timezone</h5>
    <h2 class="mt-4 text-3xl font-bold">{ipInfo.timezone}</h2>
  </div>
  <div class="flex flex-col flex-grow px-3">
    <h5 class="uppercase font-bold text-gray-600">ISP</h5>
    <h2 class="mt-4 text-3xl font-bold">{ipInfo.isp}</h2>
  </div>
</div>
