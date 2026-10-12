// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
// Canonical site URL: set SITE_URL in .env / Cloudflare Pages. TODO: replace the fallback with your custom domain.
const site = (env.SITE_URL || process.env.SITE_URL || 'https://personal-website-1ca.pages.dev').replace(/\/$/, '');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
  },
});
