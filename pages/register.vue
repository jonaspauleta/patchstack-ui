<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";
import { navigateTo } from "#app";
import PrimaryButton from "~/components/PrimaryButton.vue";
import { ButtonSizes } from "~/models/ButtonSizes";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const errors = ref("");
const auth = useAuthStore();

const handleRegister = async () => {
  if (auth.isLoggedIn) return;

  const { error } = await auth.register(form.value);
  errors.value = error?.value?.data?.errors ?? "";

  if (!error.value) {
    navigateTo("/");
  }
};

definePageMeta({
  middleware: ["guest"],
});
</script>

<template>
  <div class="mt-8 flex justify-center items-center">
    <form class="w-full mx-8 md:w-1/2" @submit.prevent="handleRegister">
      <h2 class="text-3xl font-bold text-center leading-7 text-white">
        Register
      </h2>

      <TextInput
        id="name"
        v-model:value="form.name"
        class="mt-4"
        label="Name"
        name="name"
        type="text"
        :error="errors?.name ? errors.name[0] : ''"
      />

      <TextInput
        id="email"
        v-model:value="form.email"
        class="mt-4"
        label="Email"
        name="email"
        type="email"
        :error="errors?.email ? errors.email[0] : ''"
      />

      <TextInput
        id="password"
        v-model:value="form.password"
        class="mt-4"
        label="Password"
        name="password"
        type="password"
        :error="errors?.password ? errors.password[0] : ''"
      />

      <TextInput
        id="password_confirmation"
        v-model:value="form.password_confirmation"
        class="mt-4"
        label="Password Confirmation"
        name="password_confirmation"
        type="password"
        :error="
          errors?.password_confirmation ? errors.password_confirmation[0] : ''
        "
      />

      <PrimaryButton class="w-full mt-8" :size="ButtonSizes.BIG">
        Register
      </PrimaryButton>
    </form>
  </div>
</template>

<style scoped></style>
