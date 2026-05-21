// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { prerender: true },
    "/about": { prerender: true },
    "/api/**": { ssr: false, cors: true },
  },
  app: {
    baseURL: "/dev-blog/",
  },
});
