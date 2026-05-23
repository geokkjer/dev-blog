// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxt/content", "@nuxt/ui"],
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
  site: {
    url: "https://geir.dev",
    name: "devblog",
    description: "En utviklers reise gjennom frontend-arkitektur, komponentdesign og moderne web-teknologier.",
    defaultLocale: "nb-NO",
    trailingSlash: false,
    indexable: process.env.NUXT_SITE_INDEXABLE === "true",
  },

  robots: {
    blockAiBots: true,
    blockNonSeoBots: true,
    robotsTxt: false,
  },

  sitemap: {
    zeroRuntime: true,
  },

  ogImage: {
    defaults: {
      component: "NuxtSeo",
      width: 1200,
      height: 600,
    },
    zeroRuntime: true,
  },

  schemaOrg: {
    identity: {
      type: "Person",
      name: "Student",
      url: "https://geir.dev/dev-blog",
    },
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