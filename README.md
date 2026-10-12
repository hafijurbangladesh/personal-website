# Md. Hafijur Rahman — personal website

A fast, static personal website built with [Astro](https://astro.build) and Tailwind CSS.
All content is plain files in this repository, so you edit text files instead of a database.

## Quick start

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321 (live reload)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

## Where to edit content

| What | File |
| --- | --- |
| Name, headline, roles, about text, stats, expertise, experience timeline, speaking, credentials, teaching | `src/data/profile.ts` |
| Accent colour, site title/description, navigation | `src/site.config.ts` |
| Case studies (Selected Work) | `src/content/work/*.md` |
| Articles (Insights) | `src/content/insights/*.md` |
| Photos | `src/assets/images/` |
| Downloadable CV | `public/cv.pdf` |

### Add a case study

Create `src/content/work/my-project.md`. It will appear at `/work/my-project/`.

```md
---
title: 'Project name'
summary: 'One-sentence summary shown on the card.'
meta: 'Role · Organisation · 2020–2022'
tags: ['DPI']
order: 7          # position on the home page (lower = earlier)
draft: false      # true = visible in dev only
---

## Context
...
```

### Add an article

Create `src/content/insights/my-article.md`:

```md
---
title: 'Article title'
description: 'Short description for cards, SEO and RSS.'
pubDate: 2026-11-01
tags: ['AI']
draft: false
---

Article text in Markdown…
```

The three newest articles are shown on the home page automatically. Every article is also added to `/insights/`, `/rss.xml` and the sitemap.

### Add a speaking engagement

Add an entry at the top of the `speaking` array in `src/data/profile.ts`. To include a photo, put the image in
`src/assets/images/` and set `photo: 'filename.jpg'` and a descriptive `photoAlt`.

### Photos

- `src/assets/images/profile.jpg`: square portrait, at least 800×800 px. It is shown in the hero and used as the social-sharing (Open Graph) image.
- `src/assets/images/smart-bangladesh-summit.jpg`: wide panel photo (about 4:1), at least 2000 px wide.

The repository includes generated placeholders. Replace them with your real photos and keep the same filenames.
Images are automatically converted to AVIF/WebP in several sizes at build time.
(They live in `src/assets/` rather than `public/` because only images in `src/` can be optimised.)

## Environment variables

Copy `.env.example` to `.env` for local builds, and add the same variables in Cloudflare Pages.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical URL, e.g. `https://yourdomain.com`. Used for canonical links, sitemap, RSS and social cards. |
| `PUBLIC_FORMSPREE_ID` | Formspree form ID. If empty, the contact section shows an email button instead of a form. |
| `PUBLIC_CF_BEACON_TOKEN` | Cloudflare Web Analytics token. If empty, no analytics script is loaded. |

### Formspree (contact form)

1. Sign up at [formspree.io](https://formspree.io) and create a new form with your email as the recipient.
2. Copy the form ID: the part after `https://formspree.io/f/` (e.g. `xyzabcde`).
3. Set `PUBLIC_FORMSPREE_ID` to that ID and redeploy.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub (or GitLab) repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Under **Environment variables** (Production), add:
   - `NODE_VERSION` = `22`
   - `SITE_URL` = your final URL (currently `https://hafijur.info`)
   - `PUBLIC_FORMSPREE_ID` and `PUBLIC_CF_BEACON_TOKEN` (optional)
5. Click **Save and Deploy**. Every push to the main branch redeploys the site automatically.

### Connect a custom domain

1. In your Pages project, open **Custom domains → Set up a custom domain** and enter your domain (e.g. `hafijur.com` or `www.hafijur.com`).
2. If the domain's DNS is managed by Cloudflare, the record is created automatically. Otherwise, add the `CNAME` record Cloudflare shows you at your domain registrar (pointing to `<project>.pages.dev`). For an apex domain (no `www`), you must move the domain's nameservers to Cloudflare.
3. Wait until the domain shows **Active** (SSL is issued automatically).
4. Update `SITE_URL` to the new domain and redeploy, so canonical URLs, the sitemap and social cards use it.
5. Optional: add both `yourdomain.com` and `www.yourdomain.com`, then use a Cloudflare **Redirect Rule** to send one to the other.

### Cloudflare Web Analytics

1. In the Cloudflare dashboard, open **Analytics & Logs → Web Analytics → Add a site** and enter your domain.
2. Copy the token from the provided JS snippet (`"token": "…"`).
3. Set `PUBLIC_CF_BEACON_TOKEN` and redeploy.

(Alternatively, for a domain proxied through Cloudflare, you can enable Web Analytics automatically from the Pages project's **Metrics** tab and leave the variable empty.)

## Project structure

```
src/
  site.config.ts        site-wide settings (accent colour, nav, env-driven options)
  data/profile.ts       all personal data
  content/              Markdown collections (work, insights)
  content.config.ts     collection schemas
  assets/images/        photos (optimised at build time)
  components/           page sections and UI pieces
  layouts/              base and article layouts
  pages/                routes: /, /work/[slug], /insights, /insights/[slug], 404, rss.xml, robots.txt
  styles/global.css     Tailwind setup and light/dark colour tokens
public/                 static files served as-is (cv.pdf, favicon, _headers)
scripts/                helper scripts (placeholder image generator)
```
