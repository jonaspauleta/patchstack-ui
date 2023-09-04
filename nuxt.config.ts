// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      patchstack_api_url: process.env.PATCHSTACK_API_URL,
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
