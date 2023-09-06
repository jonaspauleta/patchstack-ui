<script lang="ts" setup>
defineEmits(["update:value"]);

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
  value: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: true,
  },
});

const textarea = ref(null);

onMounted(() => {
  resize();
});

const resize = () => {
  textarea.value.style.height = textarea.value.scrollHeight + 4 + "px";
};
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
      <textarea
        :id="props.id"
        ref="textarea"
        :value="props.value"
        :name="props.name"
        rows="1"
        class="block w-full resize-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        @input="$emit('update:value', $event.target.value)"
        @focus="resize"
        @keyup="resize"
      />
    </div>

    <div v-if="props.error" class="text-red-500 text-sm mt-2">
      {{ props.error }}
    </div>
  </div>
</template>
