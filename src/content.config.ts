import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Selected Work — case studies. One Markdown file per project in src/content/work/. */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** e.g. "a2i · 2018–2023" — keep factual. */
    meta: z.string().optional(),
    tags: z.array(z.string()).default([]),
    /** Lower numbers appear first on the home page. */
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/** Insights — articles. One Markdown file per post in src/content/insights/. */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, insights };
