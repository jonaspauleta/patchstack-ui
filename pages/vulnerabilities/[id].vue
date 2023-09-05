<script lang="ts" setup>
const route = useRoute()

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="text-white">
    Vulnerability: {{ route.params.id }}
  </div>
</template>
