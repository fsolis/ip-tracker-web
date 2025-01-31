<script lang="ts">
  import { ipInfo } from "../../stores/ipInfo.svelte";
</script>

<div class="flex w-full md:justify-center">
  <div
    class="bg-white rounded-2xl shadow-lg p-1 md:p-5 flex flex-col md:flex-row mt-6 md:mt-12 justify-between min-h-48 py-5 md:py-10 w-full md:w-6/9"
  >
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h5
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        IP Address
      </h5>
      <h2
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.ip}
      </h2>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h5
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        Location
      </h5>
      <h2
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.location}
      </h2>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h5
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        Timezone
      </h5>
      <h2
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.timezone}
      </h2>
    </div>
    <div class="flex flex-col flex-grow md:mr-3 md:px-3">
      <h5
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        ISP
      </h5>
      <h2
        class="md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.isp}
      </h2>
    </div>
  </div>
</div>
