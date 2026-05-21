---
title: JABR
description: Just Another Book Reader — en selv-hostet e-bokleser for nettleseren
url: https://codeberg.org/geokkjer/jabr
icon: 📖
status: active
tags: [vue, express, sqlite, epub, pdf]
---

## Hva er JABR?

**JABR** (Just Another Book Reader) er en selv-hostet e-bokleser for nettleseren. Slipp filer i en mappe, les dem fra hvor som helst. Støtter EPUB, PDF og ren tekst.

> *"No PostgreSQL. No PostgREST. No nginx reverse proxy. No container orchestration platform that needs its own dedicated SRE team. Just `node` and a file descriptor or two."*

## Arkitektur

```
┌─────────┐     ┌──────────┐     ┌──────────┐
│  Vite   │────▶│ Express  │────▶│ SQLite   │
│  (Vue)  │◀────│  (API)   │◀────│  (data)  │
└─────────┘     │          │     └──────────┘
                │  ┌──────┐│     ┌──────────┐
                │  │multer││────▶│  books/  │
                │  └──────┘│     │ (files)  │
                └──────────┘     └──────────┘
```

## Tech Stack

| Lag | Teknologi |
|---|---|
| **Frontend** | Vue 3 + Vue Router + Pinia + Tailwind CSS |
| **Backend** | Express 5 + better-sqlite3 |
| **Storage** | Filsystem (books/) + SQLite metadata |
| **Reader** | epub.js (EPUB), pdf.js (PDF), iframes (txt) |

## Kom i gang

```sh
git clone https://codeberg.org/geokkjer/jabr.git
cd jabr
pnpm install
pnpm dev
```

Åpner på `http://localhost:5173`.

## Hvorfor ikke PostgreSQL?

Fordi denne appen har fem tabeller og null relasjoner verdt å indeksere. SQLite er én fil, trenger ingen daemon, overlever `podman compose down` uten en pg_dump-rite, og håndterer arbeidsmengden til én bruker som leser bøker uten å svette.

Den originale versjonen brukte PostgreSQL + PostgREST. Det fungerte. Det var også fullstendig overkill — som å bruke et lasteskip for å krysse en dam. Vi tømte dammen og bygde en bro i stedet.
