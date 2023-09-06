<script lang="ts" setup>
import { useToast } from "vue-toastification";
import { useAuthStore } from "~/stores/useAuthStore";

const errors = ref("");
const auth = useAuthStore();
const toast = useToast();

const form = ref({
  old_password: "",
  new_password: "",
  new_password_confirmation: "",
});

const handleUpdatePassword = async () => {
  if (!auth.isLoggedIn) return;

  const { error } = await auth.updatePassword(form.value);
  errors.value = error?.value?.data?.errors ?? "";

  if (!error.value) {
    form.value.old_password = "";
    form.value.new_password = "";
    form.value.new_password_confirmation = "";

    toast.success("Password Updated Successfully");
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
              id="old_password"
              v-model:value="form.old_password"
              class="mt-4 block w-full"
              name="old_password"
              label="Old Password"
              type="password"
              :error="errors?.old_password ? errors.old_password[0] : ''"
            />

            <TextInput
              id="new_password"
              v-model:value="form.new_password"
              class="mt-4 block w-full"
              name="new_password"
              label="New Password"
              type="password"
              :error="errors?.new_password ? errors.new_password[0] : ''"
            />

            <TextInput
              id="new_password_confirmation"
              v-model:value="form.new_password_confirmation"
              class="mt-4 block w-full"
              name="new_password_confirmation"
              label="New Password Confirmation"
              type="password"
              :error="
                errors?.new_password_confirmation
                  ? errors.new_password_confirmation[0]
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
