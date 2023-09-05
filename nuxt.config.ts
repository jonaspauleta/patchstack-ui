// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    public: {
      api_url: process.env.API_URL,
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
