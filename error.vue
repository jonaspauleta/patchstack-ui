<script setup lang="ts">
const error = useError();
</script>

<template>
  <NuxtLayout>
    <div class="mt-8">
      <h2 class="text-3xl font-bold text-center leading-7 text-white">
        Error {{ error.statusCode }}
      </h2>

      <p class="mt-4 text-xl font-medium text-white text-center">
        {{ error.message }}
      </p>
    </div>
  </NuxtLayout>
</template>
