<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";
import { navigateTo } from "#app";
import PrimaryButton from "~/components/PrimaryButton.vue";
import {ButtonSizes} from "~/models";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const auth = useAuthStore();

const handleRegister = async () => {
  if (auth.isLoggedIn) return;

  const { error } = await auth.register(form.value);

  if (!error.value) {
    navigateTo("/");
  }
};

definePageMeta({
  middleware: ["guest"],
});
</script>

<template>
  <div class="mt-8">
    <h2 class="text-3xl font-bold text-center leading-7 text-white">
      Register
    </h2>

    <form @submit.prevent="handleRegister">
      <div class="mt-8 mx-8">
        <TextInput
            class="mt-4"
            label="Name"
            id="name"
            name="name"
            type="text"
            :modelValue="form.name"
        />

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

        <TextInput
            class="mt-4"
            label="Password Confirmation"
            id="password_confirmation"
            name="password_confirmation"
            type="password"
            :modelValue="form.password_confirmation"
        />

        <PrimaryButton class="w-full mt-8" :size="ButtonSizes.BIG">
          Register
        </PrimaryButton>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
