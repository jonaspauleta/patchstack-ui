<script lang="ts" setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: true,
  },
});

defineEmits(["update:value"]);
</script>

<template>
  <div>
    <label
      :for="props.id"
      class="block text-sm font-medium leading-6 text-white"
    >
      {{ props.label }}
    </label>

    <div class="mt-2">
      <input
        :id="props.id"
        :value="props.value"
        :type="props.type"
        :name="props.name"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        @input="$emit('update:value', $event.target.value)"
      />
    </div>

    <div v-if="props.error" class="text-red-500 text-sm mt-2">
      {{ props.error }}
    </div>
  </div>
</template>
