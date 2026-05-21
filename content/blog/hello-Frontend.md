---
title: Hallo Frontend!
description: Dette er en test av Static Site Generation i Nuxt 4.
date: 2026-05-21
tags: [ssr, nuxt, performance]
---

# Hallo Frontend!

Dette er en test av Static Site Generation i Nuxt 4. Siden er generert på forhånd, og serveren sender ferdig HTML til klienten. Dette gir rask innlastning og bedre SEO, siden søkemotorer kan lese innholdet direkte.

## Hva er Static Site Generation?
Static Site Generation (SSG) er en teknikk der nettsider genereres på forhånd, før de blir servert til brukeren. Dette betyr at når en bruker besøker siden, får de en ferdig HTML-side som kan vises umiddelbart, uten å vente på at JavaScript skal laste og kjøre.
## Fordeler med SSG
- **Rask innlastning:** Siden er allerede generert, så det tar kortere tid å laste inn.
- **Bedre SEO:** Søkemotorer kan lese innholdet direkte, noe som kan forbedre rangeringen.
- **Enklere hosting:** Siden kan hostes på en enkel statisk server, uten behov for en backend.

## Hvordan fungerer det i Nuxt 4?
I Nuxt 4 kan du bruke `nuxt generate` for å generere statiske sider. Dette vil bygge prosjektet ditt og generere HTML-filer for hver rute. Når du kjører `nuxt generate`, vil Nuxt gå gjennom alle ruter i applikasjonen og generere en HTML-fil for hver av dem. Disse filene kan deretter distribueres til en statisk hosting-tjeneste som Netlify, Vercel, eller GitHub Pages

```bash
npx nuxt generate
``` 

## Konklusjon
Static Site Generation er en kraftig teknikk for å forbedre ytelsen og SEO for nettsider. Med Nuxt 4 er det enkelt å implementere SSG, og det kan gi en betydelig forbedring i brukeropplevelsen. Hvis du ønsker å lære mer om SSG og hvordan det fungerer i Nuxt 4, anbefaler jeg å sjekke ut den offisielle dokumentasjonen og eksperimentere med det i dine egne prosjekter!
