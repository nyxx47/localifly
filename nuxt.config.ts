// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/seo", "@nuxt/image"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  // production
  // site: {
  //   url: "https://localifly.com",
  //   name: "Localifly",
  //   description:
  //     "Layanan untuk setiap bisnis, organisasi, atau individu dengan berpengalaman dalam penerjemahan semua jenis dokumen.",
  //   defaultLocale: "id", // not needed if you have @nuxtjs/i18n installed
  // },
  // development
  site: { indexable: false },

  seo: {
    fallbackTitle: false,
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  image: {
    // Options
  },
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
});
