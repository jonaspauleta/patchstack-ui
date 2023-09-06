<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    class="text-center rounded-md py-2 text-sm bg-[#AFE613] px-3 font-semibold text-gray-700 shadow-sm hover:bg-[#6EBE00]"
    :to="props.to"
  >
    <slot />
  </NuxtLink>
</template>
