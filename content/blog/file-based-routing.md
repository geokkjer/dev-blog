---
title: File-based routing
description: Glemt manuell router-konfigurasjon — la filnavn gjøre jobben.
date: 2026-05-21
tags: [nuxt, routing]
---

## Filnavn = URL

I Nuxt bestemmer filnavnet og mappen hva URL-en blir:

- `pages/index.vue` → `/`
- `pages/about.vue` → `/about`
- `pages/blog/[slug].vue` → `/blog/:slug`

Ingen `createRouter()`. Ingen route-array. Bare filer.