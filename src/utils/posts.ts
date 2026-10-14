import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are excluded from production builds. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const wordCount = (body = '') =>
  body.replace(/<!--[\s\S]*?-->/g, '').replace(/[#>*_`|\-\[\]()]/g, ' ').split(/\s+/).filter(Boolean).length;

/** Minutes at ~230 wpm, minimum 1. */
export const readingTime = (body = '') => Math.max(1, Math.round(wordCount(body) / 230));

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

/**
 * Related posts: hand-picked `related` slugs first, then scored matches
 * (same category = 3 points, each shared tag = 1 point), newest as tiebreak.
 */
export function getRelated(post: Post, all: Post[], limit = 3): Post[] {
  const others = all.filter((p) => p.id !== post.id);
  const picked = post.data.related
    .map((slug) => others.find((p) => p.id === slug))
    .filter((p): p is Post => Boolean(p));
  const tags = new Set(post.data.tags);
  const scored = others
    .filter((p) => !picked.includes(p))
    .map((p) => ({
      p,
      score: (p.data.category === post.data.category ? 3 : 0) + p.data.tags.filter((t) => tags.has(t)).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.data.date.valueOf() - a.p.data.date.valueOf())
    .map((x) => x.p);
  return [...picked, ...scored].slice(0, limit);
}
