// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxtjs/seo", "nuxt-gtag", "@nuxtjs/device"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  gtag: {
    id: "G-BQNBWR3N48",
  },
  components: [
    {
      path: "~/components/organisms",
      pathPrefix: false,
    },
    {
      path: "~/components/molecules",
      pathPrefix: false,
    },
  ],

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
  css: ["@/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_colors.scss";',
        },
      },
    },
  },
});
