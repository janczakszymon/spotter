import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/main.scss";`,
        },
      },
    },
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  css: [
    "@/assets/fontello/css/fontello.css",
    "@/assets/fontello/css/animation.css",
    "@/assets/fontello/css/fontello-codes.css",
    "@/assets/fontello/css/fontello-embedded.css",
    "@/assets/fontello/css/fontello-ie7.css",
    "@/assets/fontello/css/fontello-ie7-codes.css",
  ],
});
