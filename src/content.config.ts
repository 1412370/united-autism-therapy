/**
 * Content collections.
 *
 * Blog articles live in src/content/blog/*.md(x). Every file becomes a static
 * page at /blog/<slug>/ at build time — no database, no client-side loading.
 * The schema below is validated on every build, so a missing field or a typo
 * in a category fails loudly instead of shipping a broken page.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORY_SLUGS } from './data/categories';
import { SERVICE_SLUGS } from './data/services';
import { AUTHOR_IDS } from './data/authors';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      /** SEO <title>. Keep ~50–60 characters. Brand suffix is added automatically. */
      title: z.string().max(70),
      /** Visible H1. Defaults to `title` when omitted. */
      h1: z.string().optional(),
      /**
       * 40–70 word "quick answer" shown in a highlighted box at the top of the
       * article. Written to be quotable by search and AI answer engines (GEO).
       */
      summary: z.string().optional(),
      /** Meta description. Aim for 140–160 characters. */
      description: z.string().min(70).max(170),
      /** URL slug → /blog/<slug>/. Lowercase, hyphens only. */
      slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.enum(AUTHOR_IDS),
      /** Name + credential of the clinician who reviewed the article (only if verified). */
      reviewedBy: z.string().optional(),
      category: z.enum(CATEGORY_SLUGS),
      tags: z.array(z.string()).default([]),
      featuredImage: image(),
      alt: z.string().min(10),
      /** Only set when the canonical differs from the page's own URL. */
      canonical: z.url().optional(),

      // --- SEO planning fields (not rendered, used for audits & the keyword map) ---
      primaryKeyword: z.string(),
      secondaryKeywords: z.array(z.string()).default([]),
      searchIntent: z.enum(['informational', 'commercial', 'transactional', 'local', 'navigational']),
      funnelStage: z.enum(['TOFU', 'MOFU', 'BOFU']).default('TOFU'),

      /** Service page this article supports (drives the in-article CTA + schema `about`). */
      relatedService: z.enum(SERVICE_SLUGS).optional(),
      /** Optional hand-picked related article slugs (shown before automatic matches). */
      related: z.array(z.string()).default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      references: z
        .array(z.object({ title: z.string(), publisher: z.string(), url: z.url() }))
        .default([]),
      draft: z.boolean().default(false),
      noindex: z.boolean().default(false),
    }),
});

/**
 * Long-form body copy for each service page. Structured data (name, summary,
 * FAQs, keywords) lives in src/data/services.ts; the prose lives here so it
 * can be edited like a blog post.
 */
const services = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/services' }),
  schema: z.object({
    service: z.enum(SERVICE_SLUGS),
  }),
});

export const collections = { blog, services };
