// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  nitro: {
    routeRules: {
      "/backend/**": {
        proxy: process.env.API_URL + "/**",
      },
    },
  },
  devServer: {
    host: process.env.HOST ?? "0.0.0.0",
  },
  runtimeConfig: {
    public: {
      app_url: process.env.APP_URL,
      api_url: process.env.API_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
