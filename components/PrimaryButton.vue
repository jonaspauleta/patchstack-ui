<script lang="ts" setup>
import { ButtonSizes } from "~/models/ButtonSizes";

const props = defineProps({
  size: {
    type: ButtonSizes,
    required: false,
    default: ButtonSizes.DEFAULT,
  },
});

const classes = computed(() => {
  const classes = [
    "rounded-md bg-[#AFE613] px-3 font-semibold text-gray-700 shadow-sm hover:bg-[#6EBE00]",
  ];

  if (props.size === ButtonSizes.BIG) {
    classes.push("py-4 text-xl");
    return classes;
  }

  classes.push("py-2 text-sm");
  return classes;
});
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
