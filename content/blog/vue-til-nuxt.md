---
title: Fra Vue til Nuxt
description: Hvorfor og hvordan ta steget fra ren Vue SPA til Nuxt.
date: 2026-05-19
tags: [vue, nuxt, frontend]
author: Student
---

## Hvorfor Nuxt?

Nuxt bygger på Vue og gir oss file-based routing, server-side rendering og mer — uten å bytte ut det vi allerede kan.

## Det viktigste å huske

All Vue-kunnskapen din er fortsatt gyldig. Nuxt legger til konvensjoner og server-funksjonalitet, men fundamentet er det samme.

### Auto-imports

I Nuxt trenger du ikke importere `ref`, `computed` eller egne komponenter manuelt. Nuxt skanner mappene dine og genererer import-deklarasjoner automatisk.

```ts
const count = ref(0); // Ingen import nødvendig!
```