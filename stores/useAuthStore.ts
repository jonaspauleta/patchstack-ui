import { defineStore } from "pinia";
import { User, Credentials, RegistrationInfo } from "~/models";
import { useApiFetch } from "~/composables/useApiFetch";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  const isLoggedIn = computed(() => !!user.value);

  const fetchUser = async () => {
    const { data, error } = await useApiFetch("/api/user");
    user.value = data.value as User;
  };

  const register = async (info: RegistrationInfo) => {
    await useApiFetch("/sanctum/csrf-cookie");

    const response = await useApiFetch("/api/register", {
      method: "POST",
      body: info,
    });

    await fetchUser();

    return response;
  };

  const login = async (credentials: Credentials) => {
    await useApiFetch("/sanctum/csrf-cookie");

    const response = await useApiFetch("/api/login", {
      method: "POST",
      body: credentials,
    });

    await fetchUser();

    return response;
  };

  const logout = async () => {
    await useApiFetch('/api/logout', {
      method: "POST",
    });

    user.value = null;

    navigateTo("/login");
  };

  return {
    user,
    register,
    login,
    logout,
    isLoggedIn,
    fetchUser,
  };
});
