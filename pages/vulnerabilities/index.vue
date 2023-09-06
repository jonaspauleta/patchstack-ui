<script lang="ts" setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import { useVulnerabilitiesStore } from "~/stores/useVulnerabilitiesStore";

definePageMeta({
  middleware: ["auth"],
});

const config = useRuntimeConfig();
const vulnerabilitiesStore = useVulnerabilitiesStore();
const { data: vulnerabilities } = await vulnerabilitiesStore.index();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-3xl font-bold text-center leading-7 text-white">
      Vulnerabilities
    </h2>

    <ul
      v-if="vulnerabilities"
      role="list"
      class="m-8 border border-[#AFE613] divide-y divide-[#AFE613] overflow-hidden shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
    >
      <li
        v-for="vulnerability in vulnerabilities"
        :key="vulnerability.id"
        class="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6"
      >
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none"
            :src="config.public.api_url + vulnerability.image_url"
            alt="vulnerability image"
          />

          <div class="min-w-0 flex-auto">
            <p
              class="text-sm font-semibold leading-6 text-white hover:text-gray-900"
            >
              <NuxtLink :to="'/vulnerabilities/' + vulnerability.id">
                <span class="absolute inset-x-0 -top-px bottom-0" />
                {{ vulnerability.code }}
              </NuxtLink>
            </p>

            <p class="mt-1 flex text-xs leading-5 text-gray-500">
              {{ vulnerability.title }}
            </p>
          </div>
        </div>

        <div class="flex shrink-0 items-center gap-x-4">
          <ChevronRightIcon
            class="h-5 w-5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
