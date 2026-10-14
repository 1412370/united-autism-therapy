/**
 * /sitemap.xml — generated at build time.
 * Includes only canonical, indexable URLs: core pages, services, real
 * locations, published blog posts and non-empty category archives.
 * Excluded: 404, /thank-you/, drafts and any post with `noindex: true`.
 */
import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { LOCATIONS } from '../data/locations';
import { CATEGORIES } from '../data/categories';
import { getPosts } from '../utils/posts';

interface Entry { path: string; lastmod?: Date; priority: number; }

const STATIC_PAGES: Entry[] = [
  { path: '/', priority: 1.0 },
  { path: '/services/', priority: 0.9 },
  { path: '/about/', priority: 0.7 },
  { path: '/insurance/', priority: 0.8 },
  { path: '/contact/', priority: 0.8 },
  { path: '/faq/', priority: 0.6 },
  { path: '/locations/', priority: 0.6 },
  { path: '/locations/orange-county-ca/', priority: 0.9 },
  { path: '/blog/', priority: 0.7 },
  { path: '/privacy-policy/', priority: 0.2 },
  { path: '/terms/', priority: 0.2 },
  { path: '/medical-disclaimer/', priority: 0.2 },
  { path: '/accessibility/', priority: 0.2 },
];

export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((p) => !p.data.noindex && !p.data.canonical);
  const entries: Entry[] = [
    ...STATIC_PAGES,
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}/`, priority: 0.9 })),
    ...LOCATIONS.map((l) => ({ path: `/locations/${l.slug}/`, priority: 0.9 })),
    ...CATEGORIES.filter((c) => posts.some((p) => p.data.category === c.slug)).map((c) => ({
      path: `/blog/category/${c.slug}/`,
      priority: 0.5,
      lastmod: posts.filter((p) => p.data.category === c.slug).map((p) => p.data.updatedDate ?? p.data.date).sort((a, b) => b.valueOf() - a.valueOf())[0],
    })),
    ...posts.map((p) => ({ path: `/blog/${p.id}/`, priority: 0.7, lastmod: p.data.updatedDate ?? p.data.date })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${new URL(e.path, SITE.url).toString()}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
