<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-2xl mx-8 p-6 bg-white border rounded-lg space-y-4"
  >
    <div class="flex justify-center items-center">
      <div
        class="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-12 sm:w-12"
      >
        <ExclamationTriangleIcon
          class="h-8 w-8 text-red-600"
          aria-hidden="true"
        />
      </div>

      <h1 class="ml-4 text-lg font-semibold leading-6 text-gray-900">
        {{ props.title }}
      </h1>
    </div>

    <slot />

    <button
      class="mt-4 ml-auto px-3 border rounded-lg text-red-600 border-red-600 hover:bg-red-100 hover:text-red-800"
      @click="$emit('confirm', false)"
    >
      Cancel
    </button>

    <button
      class="mt-4 ml-2 p-2 border rounded-lg bg-red-600 text-white hover:bg-red-700"
      @click="$emit('confirm', true)"
    >
      Delete
    </button>
  </VueFinalModal>
</template>

<script setup>
import { VueFinalModal } from "vue-final-modal";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

defineEmits(["confirm"]);
</script>
