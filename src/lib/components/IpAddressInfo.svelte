<script lang="ts">
  import { ipInfo } from "../../stores/ipInfo.svelte";
</script>

<div class="flex w-full md:justify-center">
  <div
    class="bg-white rounded-2xl shadow-lg p-1 md:p-5 flex flex-col md:flex-row mt-6 md:mt-12 justify-between min-h-36 py-5 md:py-8 w-full md:w-6/9"
  >
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h2
        class="uppercase text-xs md:sm font-bold text-dark-gray text-center md:text-start tracking-widest"
      >
        IP Address
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-3 text-xl md:text-2xl font-bold text-center md:text-start text-very-dark-gray"
      >
        {ipInfo.ip}
      </p>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h2
        class="uppercase text-xs md:text-sm font-bold text-dark-gray text-center md:text-start tracking-widest"
      >
        Location
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-3 text-xl md:text-2xl font-bold text-center md:text-start text-very-dark-gray"
      >
        {ipInfo.location}
      </p>
    </div>
    <div
      class="flex flex-col flex-grow md:border-r border-gray-300 md:mr-3 md:px-3"
    >
      <h2
        class="uppercase text-xs md:text-sm font-bold text-dark-gray text-center md:text-start tracking-widest"
      >
        Timezone
      </h2>
      <p
        class="mb-4 md:mb-0 md:mt-3 text-xl md:text-2xl font-bold text-center md:text-start text-very-dark-gray"
      >
        {ipInfo.timezone}
      </p>
    </div>
    <div class="flex flex-col flex-grow md:mr-3 md:px-3">
      <h2
        class="uppercase text-xs md:text-sm font-bold text-dark-gray text-center md:text-start tracking-widest"
      >
        ISP
      </h2>
      <p
        class="md:mt-3 text-xl md:text-2xl font-bold text-center md:text-start text-very-dark-gray"
      >
        {ipInfo.isp}
      </p>
    </div>
  </div>
</div>
