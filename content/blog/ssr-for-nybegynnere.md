---
title: SSR for nybegynnere
description: Hva er server-side rendering, og hvorfor bry seg?
date: 2026-05-20
tags: [ssr, nuxt, performance]
---

## Hva er SSR?

I en vanlig SPA sender serveren en tom HTML-side. JavaScript lastes, kjøres, og genererer innholdet i nettleseren.

Med SSR kjøres Vue-koden på serveren. Klienten får ferdig HTML med synlig innhold.

## Hvorfor bry seg?

- **SEO:** Søkemotorer ser faktisk innhold
- **Første inntrykk:** Brukeren ser innhold umiddelbart
- **Social previews:** Facebook, Slack, Twitter viser riktig tittel og bilde