import { getCollection } from 'astro:content';
import type { ImageMetadata } from 'astro';

/** Drafts are visible in `npm run dev` but excluded from production builds. */
const isVisible = (data: { draft: boolean }) => import.meta.env.DEV || !data.draft;

export async function getPublishedWork() {
  const work = await getCollection('work', ({ data }) => isVisible(data));
  return work.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublishedInsights() {
  const posts = await getCollection('insights', ({ data }) => isVisible(data));
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** All images in src/assets/images, keyed by filename — lets profile.ts reference photos by name. */
const imageModules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export function getImageByName(name: string): ImageMetadata | undefined {
  const entry = Object.entries(imageModules).find(([path]) => path.endsWith(`/${name}`));
  return entry?.[1].default;
}
