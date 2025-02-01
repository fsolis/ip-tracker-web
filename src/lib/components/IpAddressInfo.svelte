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
      <h2
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        IP Address
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.ip}
      </p>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h2
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        Location
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.location}
      </p>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h2
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        Timezone
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.timezone}
      </p>
    </div>
    <div class="flex flex-col flex-grow md:mr-3 md:px-3">
      <h2
        class="uppercase text-sm md:text-base font-bold text-gray-600 text-center md:text-start"
      >
        ISP
      </h2>
      <p
        class="md:mt-4 text-xl md:text-3xl font-bold text-center md:text-start"
      >
        {ipInfo.isp}
      </p>
    </div>
  </div>
</div>
