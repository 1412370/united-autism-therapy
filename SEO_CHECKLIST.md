# SEO Checklist — United Autism Therapy

Legend:

- ✅ Built into this codebase
- 🔲 To do at or after launch (needs access or business input)

Run `npm run build && npm run audit` before every deploy. The audit checks that each page has exactly one H1, title and description lengths, a canonical, valid JSON-LD, images with alt/width/height, and no broken internal links.

## Technical SEO

- ✅ Static HTML for every page (Astro SSG). Primary content never depends on JavaScript.
- ✅ Clean, stable URLs with trailing slashes (`trailingSlash: 'always'`, `build.format: 'directory'`).
- ✅ Custom 404 page (`noindex`).
- ✅ `.htaccess`: force HTTPS, non-www, trailing slash, strip `index.html`, security headers, gzip, long-cache for `/_astro/`.
- 🔲 301-redirect the old domain `unitedautismthereapy.com` (and www) to `https://unitedautismcenter.com/`.
- 🔲 Map old anchor URLs if they were ever shared (e.g. `/#uat-services` → can't redirect a hash server-side; the homepage covers them).
- 🔲 Confirm the SSL certificate covers both the bare and www hostnames.

## On-page SEO

- ✅ Unique `<title>` and meta description on every page. The brand suffix is added only when the title stays ≤ 62 characters.
- ✅ One H1 per page, with a logical H2/H3 hierarchy.
- ✅ Primary keyword in the title, H1, first paragraph and URL, used naturally.
- ✅ Semantic variations via `secondaryKeywords` (for planning, not stuffing).
- ✅ Descriptive anchor text for internal links.
- 🔲 Review titles and descriptions against Search Console CTR after 60 days.

## Local SEO

- ✅ NAP in one file (`src/data/site.ts`). Header, footer, contact, location and schema all read from it.
- ✅ `MedicalBusiness` (a LocalBusiness subtype) JSON-LD with address, phone, hours, areaServed and hasMap.
- ✅ Location page for the one verified center: `/locations/westminster-ca/`. No fake city pages.
- ✅ Click-to-load Google Map plus a "Get directions" link.
- ✅ Every page includes "Westminster, CA" or "Orange County, CA". "Westminster" is always qualified with CA (autocomplete shows MD/CO confusion).
- 🔲 **Update the phone on every listing to (714) 709-7819** (the old site showed (714) 724-7988), including GBP, Yelp and directories. NAP must match everywhere.
- 🔲 Claim or verify the **Google Business Profile**:
  - Primary category: best fit such as "Behavioral therapist" or "Child health care centre". Confirm the available categories in GBP.
  - Add services, hours, photos, and website URL `https://unitedautismcenter.com/`. Use `/locations/westminster-ca/` if you add more locations later.
- 🔲 Paste the GBP URL into `BUSINESS.googleBusinessProfileUrl`. Add geo coordinates from the GBP pin to `BUSINESS.geo`.
- 🔲 Keep NAP identical on Yelp, Healthgrades, Psychology Today, BBB, Apple Business Connect, Bing Places and the RCOC vendor directory, if applicable.
- 🔲 Ask satisfied families (without incentives) to leave Google reviews, and respond to every review. Never write reviews on anyone's behalf.
- 🔲 Get local links: Westminster Chamber of Commerce, local parent groups, school PTAs, community events.

## Internal linking

- ✅ Pillar ↔ cluster links (services ↔ articles), breadcrumbs, and category pages.
- ✅ Automatic related posts (category + tags + hand-picked `related`).
- ✅ Each article links to its service page, sibling articles and /contact/.
- ✅ No orphan pages (the audit checks for broken links; the sitemap lists everything indexable).

## Schema (JSON-LD, one `@graph` per page)

- ✅ `Organization` and `WebSite` on every page.
- ✅ `MedicalBusiness` on home, services, about, insurance, contact and location pages.
- ✅ `Service` on each service page, linked to the business via `provider`.
- ✅ `BreadcrumbList` on every page except home.
- ✅ `BlogPosting` on articles: headline, dates, author, publisher, image, wordCount, keywords, citation, about.
- ✅ `FAQPage` only where the FAQ is visible on the page. It can be disabled with `INTEGRATIONS.faqSchema`. Since 2023 Google shows FAQ rich results only for a limited set of sites, so don't expect one.
- ✅ No Review/AggregateRating markup. Self-serving reviews aren't eligible for review stars.
- 🔲 Validate with the [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/) after deploy.

## Sitemap and robots

- ✅ `/sitemap.xml` is generated at build: core pages, services, location, blog posts and non-empty categories. It excludes the 404 page, `/thank-you/`, drafts and `noindex` posts. `lastmod` comes from each post's `updatedDate`.
- ✅ `/robots.txt` allows all crawling and references the sitemap. `/thank-you/` is `noindex` rather than disallowed, so Google can read the noindex.
- 🔲 Submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Canonicals

- ✅ An absolute canonical on every indexable page (https, non-www, trailing slash, no query string).
- ✅ Optional `canonical` frontmatter for syndicated or duplicate articles. Posts with an external canonical are left out of the sitemap.
- ✅ Server redirects enforce the same URL form.

## Image SEO

- ✅ Astro `<Image>`/`<Picture>` outputs WebP (and AVIF for the hero), with `srcset`, `sizes`, `width`, `height`, `loading` and `decoding`.
- ✅ LCP image is eager with `fetchpriority="high"`; everything else is lazy.
- ✅ Descriptive `alt` on meaningful images. Empty `alt` on decorative card thumbnails, whose link text already describes them.
- ✅ OG images are 1200×630 JPEGs generated per article.
- 🔲 Replace the generated illustrations with real photos of the center and team (with consent).

## Core Web Vitals and performance

- ✅ Zero framework JavaScript. The only scripts are the tiny menu, map facade and form handlers (bundled, deferred).
- ✅ Self-hosted variable font (Nunito, `font-display: swap`, unicode-range subsets). No Google Fonts request.
- ✅ Map iframe loads only on click. No third-party scripts load by default.
- ✅ Hashed assets cached for 1 year; HTML revalidates.
- 🔲 Test after deploy:
  - [PageSpeed Insights](https://pagespeed.web.dev/) on mobile and desktop for home, a service page and an article.
  - Chrome DevTools → Lighthouse, in an incognito window.
  - Search Console → Core Web Vitals report, once field data exists (usually after about 28 days of traffic).
  - Scores vary with hosting, network and third-party scripts, so no specific score is guaranteed. Shared hosting with slow TTFB is the most common bottleneck; enable the host's CDN or caching if one is offered.

## Accessibility

- ✅ Semantic landmarks, a skip link, `aria-current` in the nav, and keyboard-operable menus (Esc closes them).
- ✅ Visible focus rings; `prefers-reduced-motion` is respected.
- ✅ Body text contrast meets WCAG AA. CTA orange `#b93f0f` on white is about 5.3:1.
- ✅ Every input has a label, required fields are marked, status messages use `aria-live`.
- ✅ Native `<details>` FAQ accordions, which need no JS.
- 🔲 Run [WAVE](https://wave.webaim.org/) or axe DevTools and do a manual keyboard pass after content edits.

## GEO (AI answer engines)

- ✅ "Quick answer" summaries on articles and key service pages.
- ✅ `/llms.txt` is generated from site data (key facts, services and article summaries).
- ✅ robots.txt explicitly allows AI search crawlers.
- ✅ The About page has a key-facts list, and the NAP matches the schema exactly. Facebook and Instagram are linked via `sameAs`.
- 🔲 Once a month, ask ChatGPT, Perplexity and Google AI Mode questions like "in-home ABA therapy Westminster CA" and note whether United Autism Therapy is cited and which page it cites.
- 🔲 Keep the Facebook and Instagram bios consistent with the site:
  - name: United Autism Therapy
  - phone: (714) 709-7819
  - address: 13571 Beach Blvd, Westminster, CA 92683
  - link: the website URL

## Search Console and analytics

- 🔲 Verify the domain property in Search Console. Use DNS verification, or paste the token into `INTEGRATIONS.googleSiteVerification`.
- 🔲 Submit `https://unitedautismcenter.com/sitemap.xml`.
- 🔲 Add the GA4 ID (`INTEGRATIONS.ga4Id`) or a GTM container (`INTEGRATIONS.gtmId`). Nothing loads until you do.
- 🔲 Mark the `generate_lead` (form) and `click_to_call` events as conversions in GA4.
- 🔲 Healthcare privacy: never send form contents or health details to analytics or ad pixels. Review HIPAA guidance on tracking technologies before adding any ad pixel. Add a consent banner if you add advertising tags.

## Content quality

- ✅ 20 articles (about 1,550–2,000 body words each), each with sources, FAQs, a CTA and author and date info.
- ✅ No fabricated statistics, testimonials, credentials or outcomes.
- ✅ A medical disclaimer on every article, plus a dedicated page.
- 🔲 Have a BCBA/SLP/OT review the articles and add `reviewedBy`.
- 🔲 Confirm the testimonials are real and consented, then set `verified: true` in `src/data/testimonials.ts`.
- 🔲 Fill every `[PLACEHOLDER]` in `src/data/site.ts`. Placeholders are hidden automatically until you do.

## Indexation

- ✅ Only canonical, indexable pages are in the sitemap.
- ✅ Utility pages (404, thank-you) are `noindex, follow`.
- 🔲 Two weeks after launch, check Search Console → Pages for "Discovered – not indexed" and "Duplicate without user-selected canonical".
- 🔲 Use URL Inspection → "Request indexing" for the homepage and the service pages on launch day.
