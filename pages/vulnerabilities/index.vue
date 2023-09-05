<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="mt-8">
    <h2 class="text-3xl font-bold text-center leading-7 text-white">
      Vulnerabilities
    </h2>

    <div class="mt-8 flex flex-col items-center">
      <PrimaryButton>
        <NuxtLink to="/vulnerabilities/1" class="w-full h-full">
          Vulnerability 1
        </NuxtLink>
      </PrimaryButton>
    </div>
  </div>
</template>
