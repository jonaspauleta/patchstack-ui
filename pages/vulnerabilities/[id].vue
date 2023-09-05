<script lang="ts" setup>
const route = useRoute();

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="mt-8">
    <h2 class="text-3xl font-bold text-center leading-7 text-white">
      Vulnerability: {{ route.params.id }}
    </h2>
  </div>
</template>
