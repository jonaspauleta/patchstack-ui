// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  /*nitro: {
    routeRules: {
      "/backend/**": {
        proxy: {
          to: process.env.API_URL + "/**"
        },
      },
    },
  },
  devServer: {
    host: process.env.HOST ?? "127.0.0.1",
  },*/
  build: {
    transpile: ["vue-toastification"],
  },
  runtimeConfig: {
    public: {
      app_url: process.env.APP_URL,
      api_url: process.env.API_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
