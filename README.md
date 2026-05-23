# devblog

> A personal development blog for exploring Nuxt, Vue, TypeScript, and modern frontend architecture.

This site uses Nuxt 4 with static site generation to deliver fast, SEO-optimized pages. Content lives in Markdown files managed by Nuxt Content v3.

## Features

- **Static site generation** — Pre-rendered pages for speed and SEO
- **Nuxt Content v3** — Write blog posts and project pages in Markdown with frontmatter
- **Nuxt SEO** — Auto-generated sitemap, OG images for social sharing, JSON-LD structured data, and robots.txt with AI crawler blocking
- **Nuxt UI v4** — Brutalist-inspired component library with Tailwind CSS v4
- **GitHub Pages** — Deployed via the gh-pages branch

## Tech Stack

| Tool              | Purpose                        |
| ----------------- | ------------------------------ |
| Nuxt 4            | Full-stack framework           |
| Nuxt Content v3   | Markdown-based content management |
| Nuxt UI v4        | UI component library           |
| @nuxtjs/seo       | SEO meta-module (sitemap, OG images, schema.org) |
| Tailwind CSS v4   | Utility-first styling          |
| TypeScript        | Type safety across the project |
| GitHub Pages      | Static hosting                 |

## Getting Started

Make sure to install the dependencies:

```bash [Terminal]
pnpm install
```

Start the development server on `http://localhost:3000`:

```bash [Terminal]
pnpm dev
```

Generate a static build for production:

```bash [Terminal]
pnpm generate
```

Preview the static build locally:

```bash [Terminal]
pnpm preview
```

Deploy to GitHub Pages:

```bash [Terminal]
pnpm deploy:gh
```

## Project Structure

```
app/
  components/         # Vue components (auto-imported)
    OgImage/          # OG image templates for social sharing
  layouts/            # Page layouts
  pages/              # File-based routes
    blog/             # Blog listing and [slug] pages
    projects/         # Project listing and [slug] pages
  app.vue             # Root component with global title template
content/
  blog/               # Blog posts as Markdown files
  projects/           # Project pages as Markdown files
content.config.ts     # Content collections with Zod schemas
public/
  robots.txt          # Crawler rules with AI bot blocking
  favicon.svg         # Site favicon
nuxt.config.ts        # Nuxt configuration with SEO setup
```

## Managing Content

Blog posts and projects are Markdown files in the `content/` directory. Each file requires frontmatter with at least a `title` and `description`.

### Blog post frontmatter

```yaml [content/blog/my-post.md]
---
title: My Blog Post
description: A short description for SEO and previews
date: 2025-01-15
tags: [nuxt, vue]
author: Your Name
---
```

The `asSeoCollection` helper adds support for optional SEO fields in frontmatter:

```yaml
ogImage:
  component: NuxtSeo
  props:
    title: Custom OG Title
robots: noindex, nofollow
sitemap:
  changefreq: weekly
  priority: 0.8
```

::note
Nuxt generates the sitemap, OG images, and schema.org structured data automatically from your content. There is no need to configure these per-page unless you want custom values.
::

### Writing a new post

Create a new `.md` file in `content/blog/`. The filename becomes the URL slug. Add frontmatter at the top and write the body in Markdown.

## SEO Features

The site uses `@nuxtjs/seo` to handle search engine optimization:

- **Sitemap** — Auto-generated at `/sitemap.xml` with all blog posts and projects
- **OG images** — Pre-rendered social cards for every page, featuring the devblog brand mark and your page title
- **Schema.org** — Article markup on blog posts and WebPage markup on listing pages
- **Per-page meta** — Unique `title` and `description` tags on every route via `useSeoMeta`
- **AI crawler blocking** — Robots.txt blocks GPTBot, Claude-Web, Google-Extended, and similar crawlers

::tip
The OG image template lives at `app/components/OgImage/NuxtSeo.satori.vue`. Customize it to match your brand colors and logo.
::

## Deployment

The site deploys to GitHub Pages using a worktree-based script:

```bash [Terminal]
pnpm deploy:gh
```

The script generates the static site, copies it to a `gh-pages` worktree, and pushes to the `gh-pages` branch. The `baseURL` in `nuxt.config.ts` is set to `/dev-blog/` to match the GitHub Pages project path.

## License

MIT
