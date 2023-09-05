<script lang="ts" setup>
const props = defineProps({
  label: String,
  id: String,
  name: String,
  type: String,
  modelValue: String,
});
</script>

<template>
  <div>
    <label :for="props.id" class="block text-sm font-medium leading-6 text-white">
      {{ props.label }}
    </label>

    <div class="mt-2">
      <input
          v-model="props.modelValue"
          :type="props.type"
          :name="props.name"
          :id="props.id"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
</template>