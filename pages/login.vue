<script lang="ts" setup>
import {useAuthStore} from "~/stores/useAuthStore";
import PrimaryButton from "~/components/PrimaryButton.vue";
import { ButtonSizes } from "~/models";

const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

const handleLogin = async () => {
  if (auth.isLoggedIn) {
    return navigateTo("/");
  }

  const { error } = await auth.login(form.value);

  if (!error.value) {
    return navigateTo("/");
  }
};

definePageMeta({
  middleware: ["guest"],
});
</script>

<template>
  <div class="mt-8">
    <h2 class="text-3xl font-bold text-center leading-7 text-white">
      Login
    </h2>

    <form @submit.prevent="handleLogin">
      <div class="mt-8 mx-8">
        <TextInput
            class="mt-4"
            label="Email"
            id="email"
            name="email"
            type="email"
            :modelValue="form.email"
        />

        <TextInput
            class="mt-4"
            label="Password"
            id="password"
            name="password"
            type="password"
            :modelValue="form.password"
        />

        <PrimaryButton class="w-full mt-8" :size="ButtonSizes.BIG">
          Login
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>
