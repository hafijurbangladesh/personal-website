import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedInsights } from '../lib/content';
import { siteConfig } from '../site.config';

export async function GET(context: APIContext) {
  const posts = await getPublishedInsights();
  return rss({
    title: `${siteConfig.title} — Insights`,
    description: 'Notes and perspectives on Digital Public Infrastructure, GovTech and responsible AI in government.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/insights/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
