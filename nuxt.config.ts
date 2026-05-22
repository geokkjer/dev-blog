// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui"],
  css: ["~/assets/css/main.css"],
  ui: {
    theme: {
      colors: ["primary", "info", "success", "warning", "error"],
    },
    fonts: {
      defaults: {
        weights: [400, 500, 600, 700, 800],
      },
    },
  },
  fonts: {
    families: [
      { name: 'Syne', provider: 'google', weights: [400, 700, 800] },
      { name: 'Outfit', provider: 'google', weights: [400, 500, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 700] },
      { name: 'Libre Baskerville', provider: 'google', weights: [400, 700] },
    ],
  },
  routeRules: {
    "/": { prerender: true },
    "/blog/**": { prerender: true },
    "/projects/**": { prerender: true },
    "/about": { prerender: true },
  },
  app: {
    baseURL: "/dev-blog/",
    head: {
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/dev-blog/favicon.svg" },
      ],
    },
  },
});