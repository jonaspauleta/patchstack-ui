<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";
import PrimaryButton from "~/components/PrimaryButton.vue";
import { ButtonSizes } from "~/models/ButtonSizes";

definePageMeta({
  middleware: ["guest"],
});

const form = ref({
  email: "",
  password: "",
});

const auth = useAuthStore();

const errors = ref("");

const handleLogin = async () => {
  if (auth.isLoggedIn) {
    return navigateTo("/");
  }

  const { error } = await auth.login(form.value);
  errors.value = error?.value?.data?.errors ?? "";

  if (!error.value) {
    return navigateTo("/");
  }
};
</script>

<template>
  <div class="mt-8 flex justify-center items-center">
    <form class="w-full mx-8 md:w-1/2" @submit.prevent="handleLogin">
      <h2 class="text-3xl font-bold text-center leading-7 text-white">Login</h2>

      <TextInput
        id="email"
        v-model:value="form.email"
        class="mt-4 block w-full"
        label="Email"
        name="email"
        type="email"
        :error="errors?.email ? errors.email[0] : ''"
      />

      <TextInput
        id="password"
        v-model:value="form.password"
        class="mt-4 block w-full"
        label="Password"
        name="password"
        type="password"
        :error="errors?.password ? errors.password[0] : ''"
      />

      <PrimaryButton class="mt-8 block w-full" :size="ButtonSizes.BIG">
        Login
      </PrimaryButton>
    </form>
  </div>
</template>
