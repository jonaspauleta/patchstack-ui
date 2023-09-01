<script setup>
import { useCounterStore } from '@/stores/counter';
import { computed } from 'vue';

const store = useCounterStore();
const getCount = computed(() => store.getCount);
const increment = store.increment;
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-gray-200 p-4 rounded-lg">
      <div class="text-center p-4">
        <p class="mb-4">
          Counter: <span class="font-bold">{{ getCount }}</span>
        </p>

        <button
            type="button"
            @click="increment"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  </div>
</template>