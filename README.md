# United Autism Therapy — Website

An SEO-first static website for **United Autism Therapy Inc.** (13571 Beach Blvd, Westminster, CA 92683 · (714) 709-7819).

- **Built with:** Astro 7, TypeScript, Markdown content collections and plain CSS. There is no database, no backend and no framework JavaScript.
- **Output:** a folder of static HTML (`dist/`) that runs on any shared host, CDN or static host.

## Quick start

Requires **Node.js 22.12+**. Check with `node -v`; install the LTS version from <https://nodejs.org>.

```bash
npm install       # install dependencies (one time)
npm run dev       # local dev server at http://localhost:4321 with live reload
npm run build     # type-check + build the static site into dist/
npm run preview   # serve dist/ locally to check the production build
npm run audit     # post-build SEO audit (H1s, titles, canonicals, JSON-LD, alt text, broken links)
npm run images    # generate placeholder images for any new article that doesn't have one
npm run preview:offline  # make preview/ — a copy you can open by double-clicking index.html
```

> **Opening `dist/index.html` directly shows no styling.** That's expected: the real site uses root paths (`/_astro/…`) that only work on a web server. To look at the site without a server, run `npm run preview:offline` and open `preview/index.html`. Always upload `dist/`, never `preview/`, to hosting.

## Client assets (round 2)

The business's files live in `docs/source-assets/`:

- the logo, favicon and header banner
- the `image/` photos
- `info.txt`
- the SEO/GEO spreadsheet

They were converted into web assets as follows:

| Source | Used as |
|---|---|
| `logo.png` | `src/assets/brand/logo.png` (header and footer, served as WebP) and `public/images/logo.png` (Organization schema logo) |
| `favicon.png` | `public/favicon.ico`, `favicon-32.png`, `favicon-48.png`, `apple-touch-icon.png`, `icon-192/512.png`, `site.webmanifest` |
| `background header.png` | Homepage hero photo (cropped: `src/assets/brand/hero-photo.jpg`), default social image `public/images/og-default.jpg` |
| `image/*.png` (10 photos) | Featured images in `src/assets/blog/*.jpg` and section images on the home, service and about pages (`src/utils/images.ts`) |
| `info.txt` | `src/data/site.ts` (phone (714) 709-7819, address, Facebook, Instagram) |
| SEO/GEO spreadsheet | `docs/EXCEL_DRAFTS.md`, used for 11 new articles, the grouped FAQ, About and the Orange County page |

To replace a photo, save the new image with the same filename in `src/assets/blog/` and rebuild.

## Before launch: fill in the placeholders

All business information lives in **`src/data/site.ts`**. Values in `[BRACKETS]` were **not** on the current website and must be confirmed by the business. Components hide placeholders automatically, so nothing fake is ever shown.

| Item | Where |
|---|---|
| Email, Google Business Profile URL, founding year, NPI | `src/data/site.ts` → `BUSINESS` |
| Orange County cities you actually serve (shown on /locations/orange-county-ca/) | `BUSINESS.servedCities` |
| Map pin coordinates (from Google Business Profile) | `BUSINESS.geo` |
| Contact form endpoint (Formspree, Basin, Web3Forms, LeadConnector webhook…) | `INTEGRATIONS.formEndpoint` |
| GA4 or GTM ID, Search Console token | `INTEGRATIONS` |
| Accepted insurance plans (verified list) | `src/pages/insurance.astro` (see the TODO comment) |
| Team members with verified credentials | `src/pages/about.astro` (see the commented template), `src/data/authors.ts` |
| Testimonials: confirm real and consented, then set `verified: true` | `src/data/testimonials.ts` |
| Real photos in place of the generated illustrations | `src/assets/` (keep the same filenames) |
| Privacy Policy and Terms (templates — have an attorney review them) | `src/pages/privacy-policy.astro`, `terms.astro` |

**Domain.** The site is configured for **https://unitedautismcenter.com**. If you use a different domain, change it in three places:

- `astro.config.mjs` (`SITE_URL`)
- `src/data/site.ts` (`SITE.url`)
- `public/robots.txt` and `public/.htaccess`

## Project structure

```
united-autism-therapy/
├── public/                  # copied as-is into dist/
│   ├── .htaccess            # HTTPS/non-www/trailing-slash redirects, caching, security headers
│   ├── robots.txt
│   ├── favicon.svg, apple-touch-icon.png
│   └── images/og-default.png
├── scripts/
│   ├── generate-images.mjs  # branded placeholder images (npm run images)
│   └── audit.mjs            # post-build SEO audit (npm run audit)
├── src/
│   ├── assets/              # images optimized by Astro (→ WebP/AVIF)
│   ├── components/          # Header, Footer, SEO, Schema, Breadcrumbs, BlogCard, ServiceCard,
│   │                        # RelatedPosts, FAQ, CTABand, ContactForm, ContactInfo, MapEmbed,
│   │                        # Testimonials, Analytics, Icon, Logo
│   ├── content/
│   │   ├── blog/            # ← one Markdown file per article (20 included)
│   │   └── services/        # long-form copy for each service page
│   ├── content.config.ts    # frontmatter schemas (validated on every build)
│   ├── data/                # site.ts (NAP), services.ts, categories.ts, authors.ts,
│   │                        # faqs.ts, navigation.ts, locations.ts, testimonials.ts
│   ├── layouts/             # Layout (base), PageLayout, BlogLayout
│   ├── pages/
│   │   ├── index.astro, about.astro, insurance.astro, contact.astro, faq.astro
│   │   ├── services/index.astro + [slug].astro   → /services/aba-therapy/ …
│   │   ├── locations/index.astro + [slug].astro  → /locations/westminster-ca/
│   │   ├── blog/index.astro, [...slug].astro, category/[category].astro
│   │   ├── privacy-policy, terms, medical-disclaimer, accessibility, thank-you, 404
│   │   └── sitemap.xml.ts   → /sitemap.xml
│   ├── styles/global.css
│   └── utils/               # schema.ts (JSON-LD builders), posts.ts (related posts, reading time)
├── docs/ARTICLE_BRIEF.md    # writing rules + verified facts for future articles
├── SEO_KEYWORD_MAP.md · CONTENT_STRATEGY.md · SEO_CHECKLIST.md
└── astro.config.mjs · package.json · tsconfig.json
```

**Why services use `[slug].astro` instead of seven files.** All seven service pages share one template, so there is no duplicated markup. The generated URLs are exactly `/services/aba-therapy/`, `/services/center-based-aba/`, `/services/in-home-aba/`, `/services/school-based-aba/`, `/services/parent-training/`, `/services/speech-language-therapy/` and `/services/occupational-therapy/`.

- To edit a page's **title, description, FAQs or highlights**, use `src/data/services.ts`.
- To edit its **body copy**, use `src/content/services/<slug>.md`.

## Add a new blog article (no database, no code changes)

1. Create a file in `src/content/blog/`, for example `toilet-training-and-autism.md`.
2. Paste this frontmatter and write the article below it in Markdown:

   ```markdown
   ---
   title: "Toilet Training and Autism: Tips for Parents"
   description: "Practical, patient toilet training tips for autistic children, what to expect, and when to ask your child's therapy team for help."
   slug: toilet-training-and-autism
   date: 2026-11-01
   updatedDate: 2026-11-01
   author: uat-clinical-team
   category: parent-resources        # aba-therapy | autism | parent-resources | speech-therapy | occupational-therapy
   tags: ["daily living skills", "parent tips", "routines"]
   featuredImage: ../../assets/blog/toilet-training-and-autism.png
   alt: "Parent kneeling beside a young child in a bathroom, pointing to a picture schedule"
   primaryKeyword: "toilet training autism"
   secondaryKeywords: ["potty training autistic child"]
   searchIntent: informational       # informational | commercial | transactional | local | navigational
   funnelStage: MOFU                 # TOFU | MOFU | BOFU
   relatedService: occupational-therapy
   related: ["occupational-therapy-for-autism", "supporting-aba-therapy-at-home"]
   faqs:
     - q: "When should we start toilet training?"
       a: "..."
   references:
     - title: "..."
       publisher: "..."
       url: "https://..."
   ---

   Your intro paragraph...

   ## First section
   ```

3. Add the image. Either drop a photo at `src/assets/blog/toilet-training-and-autism.png` (or `.jpg` — update the path to match), or run `npm run images` to generate a placeholder.
4. Run `npm run build`. The build automatically:
   - creates `/blog/toilet-training-and-autism/` as static HTML
   - adds it to `/blog/`, its category page, related-post suggestions and `/sitemap.xml`
   - generates the BlogPosting, BreadcrumbList and FAQPage schema, the OG image and the canonical URL
5. Upload `dist/` again (see below).

**Useful fields**

- `draft: true` hides a post from production builds.
- `noindex: true` keeps a post live but out of search and the sitemap.
- `reviewedBy: "Jane Doe, BCBA"` shows a reviewer line (use it only for a verified clinician).

If a field is missing or wrong (a misspelled category, say), the build stops with a clear error message rather than publishing a broken page. Follow `docs/ARTICLE_BRIEF.md` for tone, sourcing and health-content rules.

## Deploy to shared hosting (cPanel, Hostinger, Bluehost, SiteGround…)

1. **Build locally:** `npm run build`. This creates the `dist/` folder.
2. **Open your host's File Manager** (cPanel → File Manager), or connect with FTP/SFTP (FileZilla: host, username, password, port 21 or 22).
3. **Go to the web root** for the domain. It's usually `public_html/`, or `public_html/yourdomain/` for an add-on domain.
4. **Back up, then clear** the old files in that folder, such as an old WordPress install or index.html. Keep any `.well-known/` folder.
5. **Upload the *contents* of `dist/`**, not the `dist` folder itself. When you're done, `public_html/index.html`, `public_html/about/`, `public_html/_astro/` and so on should exist.
   - Tip: zip the contents of `dist/`, upload the zip, then use **Extract** in File Manager. It's much faster than uploading thousands of small files.
   - Make sure **`.htaccess`** was uploaded. It's a hidden file, so enable "Show hidden files" in File Manager or in your FTP client.
6. **Enable SSL** (cPanel → SSL/TLS Status → AutoSSL, or your host's free Let's Encrypt). The `.htaccess` then forces HTTPS and non-www.
7. **Test these URLs:**
   - `http://www.unitedautismcenter.com/about` should 301 to `https://unitedautismcenter.com/about/`
   - `/sitemap.xml` and `/robots.txt` should load
   - an unknown URL should show the custom 404 page
8. **Redirect the old domain.** In the old domain's hosting (or its registrar's forwarding settings), set a **301 redirect** from `unitedautismthereapy.com` to `https://unitedautismcenter.com/`, preserving paths. There's a sample rule in `.htaccess`.

To update the site later, rebuild and re-upload. Files in `_astro/` have hashed names, so it's safe to overwrite or add to them. You can delete the old `_astro/` folder first for a clean deploy.

**Hosts other than Apache.** `.htaccess` only works on Apache and LiteSpeed.

- **Nginx:** replicate the redirects in the server block.
- **Netlify, Cloudflare Pages or Vercel:** point the build command at `npm run build` and the output directory at `dist`, then add the HTTPS/non-www redirects in the platform settings.

## After launch

Work through **`SEO_CHECKLIST.md`**: Google Business Profile, Search Console, sitemap submission, analytics and review requests. Then test performance with [PageSpeed Insights](https://pagespeed.web.dev/) and Lighthouse. Scores depend on hosting, so none is guaranteed. The site is built to keep JavaScript, fonts and third-party requests to a minimum.

## Content and compliance notes

- Business facts come only from the current website (audited 2026-09-30). Nothing else was invented. Anything unverified is a visible `[PLACEHOLDER]` in the code, which the site hides.
- Health content cites CDC, NIH (NICHD/NIMH), BACB, ASHA, AOTA, AAP, California DHCS/DDS and RCOC, and avoids outcome promises.
- The contact form tells families not to send diagnoses or insurance IDs. If you need to collect PHI online, use a HIPAA-eligible form provider with a BAA.

## Deploy with Git + cPanel Git™ Version Control

Use this instead of uploading zip files by hand.

**How it works:**

1. Push the source to `main` on GitHub.
2. GitHub Actions (`.github/workflows/deploy-branch.yml`) runs `npm run build` and publishes `dist/` to a branch named `deploy`.
3. In cPanel, Git Version Control clones the `deploy` branch.
4. "Deploy HEAD Commit" runs `.cpanel.yml`, which copies the files into `public_html`.

`.cpanel.yml` lives in `public/`, so every build copies it into the root of `dist/`. If the site isn't in `public_html`, edit `DEPLOYPATH` in that file.
