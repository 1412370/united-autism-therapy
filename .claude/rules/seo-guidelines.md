# SEO guidelines (website)

Strategy and keywords are in `SEO_KEYWORD_MAP.md` and `CONTENT_STRATEGY.md`. The full checklist is `SEO_CHECKLIST.md`. This file lists only the rules that the build and audit enforce and the decisions that affect every page.

## Enforced by the audit (`npm run audit`)
- Title: 60 characters or fewer (the layout adds the brand suffix only if the total stays within 60).
- Meta description: 120 to 160 characters.
- One H1 per page.
- Canonical tag points to the page's own canonical URL on the canonical domain (`SITE.url`).

## Site-wide decisions
- Canonical domain: `https://unitedautismtherapy.org`. Do not reintroduce `unitedautismcenter.com` in canonicals, sitemap, schema, robots.txt or llms.txt. The only permitted use is the redirect rule in `public/.htaccess` and historical notes.
- Schema is generated from `src/data/site.ts` and `src/utils/schema.ts`. Do not hand-write LocalBusiness or Organization JSON-LD in a page.
- Local service area: five California counties, with in-home ABA launching in Orange County first. Do not state more coverage than this.
- Google Business Profile service area must list cities or ZIP codes, not whole counties. Keep the website and GBP consistent.

## Content SEO
- Each article targets one primary keyword. Check `SEO_KEYWORD_MAP.md` for ownership before creating a new page, to avoid two pages competing for the same query.
- Use descriptive H2s. Answer the query in the first paragraph.
- Internal links use descriptive anchor text. Never "click here".

## Measurement
- GA4 measurement ID is `ga4Id` in `src/data/site.ts`. Do not change it without the user's confirmation, because it changes where data is recorded.
- Search Console property for the canonical domain is `sc-domain:unitedautismtherapy.org`.

## Agents
- Technical and schema audits: delegate to the user-level `seo-*` agents through `seo-specialist`. Do not re-implement their checks.
