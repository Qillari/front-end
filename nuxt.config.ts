// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-simple-robots", "@nuxtjs/sitemap", "nuxt-schema-org"],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('swiper-'),
    },
  },
  site: { 
    indexable: true, 
    url: "https://qillari.com", 
    trailingSlash: true,
    name: 'Qillari',
  },
  robots: {
    disallow: ["/checkout", "/pago"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "es",
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
  },
});
