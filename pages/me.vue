<script lang="ts" setup>
import { useAuthStore } from "~/stores/useAuthStore";

const errors = ref("");
const auth = useAuthStore();

const form = ref({
  password: "",
  password_confirmation: "",
});

const handleUpdatePassword = async () => {
  if (auth.isLoggedIn) return;

  const { error } = await auth.updatePassword(form.value);
  errors.value = error?.value?.data?.errors ?? "";

  if (!error.value) {
    alert("Password updated successfully!");
  }
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div class="mt-8 flex justify-center items-center">
    <div class="w-full mx-8 md:w-1/2">
      <h2 class="text-3xl font-bold text-center leading-7 text-white">
        My Profile
      </h2>

      <!-- Display Name and Email -->
      <div class="mt-4">
        <p class="text-lg text-white">
          <span class="font-bold text-xl">Name:</span> {{ auth.user.name }}
        </p>
        <p class="text-lg text-white">
          <span class="font-bold text-xl">Email:</span> {{ auth.user.email }}
        </p>
      </div>

      <!-- Edit Password Form -->
      <div class="mt-6">
        <form @submit.prevent="handleUpdatePassword">
          <div class="mb-4">
            <TextInput
              id="password"
              v-model:value="form.password"
              class="mt-4 block w-full"
              label="Password"
              name="password"
              type="password"
              :error="errors?.password ? errors.password[0] : ''"
            />

            <TextInput
              id="password_confirmation"
              v-model:value="form.password_confirmation"
              class="mt-4 block w-full"
              label="Password Confirmation"
              name="password_confirmation"
              type="password"
              :error="
                errors?.password_confirmation
                  ? errors.password_confirmation[0]
                  : ''
              "
            />
          </div>

          <div>
            <PrimaryButton class="mt-4 w-full block">
              Update Password
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
