# Content Strategy — United Autism Therapy

## Goals

1. **Help parents first.** Every page should answer a real question a caregiver in Westminster or Orange County has, in plain language.
2. **Turn trust into contact.** Every page ends in a soft, clear next step: free consultation, call, or a related guide.
3. **Build topical authority, not keyword density.** Organise content into clusters: each has one pillar page and a set of supporting articles that link back to it.

## Audit of the current site (unitedautismthereapy.com, audited 2026-09-30)

| Area | Finding | Response in the rebuild |
|---|---|---|
| Architecture | Single page with anchor links (#uat-services, #uat-faq…). Only one URL can rank. | Separate indexable URLs for each service, the location, insurance, FAQ and 20 articles |
| Domain | The domain is misspelled ("thereapy") | New canonical domain unitedautismcenter.com; 301 the old domain (see README) |
| Title / meta | Good: "ABA Therapy for Autism \| United Autism Therapy Westminster CA" | Kept the intent; unique titles on every page |
| Blog | None | 20-article blog in 5 categories, plus related-post logic |
| Structured data | None found | Organization, WebSite, MedicalBusiness (LocalBusiness), Service, BreadcrumbList, BlogPosting, FAQPage |
| NAP | Phone, address and hours present; no email | Centralised in `src/data/site.ts`; email is a placeholder |
| Trust | "BCBA & RBT certified" but no named staff; three testimonials | Credential statement kept exactly as worded. Team section scaffolded for verified staff. Testimonials held back until consent is confirmed |
| Insurance | Mentions Medi-Cal only | Dedicated /insurance/ page plus a Medi-Cal article citing DHCS |
| Conversion | Many CTAs; form is a third-party widget | Sticky mobile call bar, consistent CTA band, native accessible form with pluggable endpoint |
| Images | Photos with descriptive alts (ownership unknown) | Generated brand placeholders. Replace with the business's own photos (see image plan) |

## Clusters and pillar pages

```
ABA THERAPY  (pillar: /services/aba-therapy/)
├── /services/center-based-aba/
├── /services/in-home-aba/
├── /services/school-based-aba/
└── Blog: what-is-aba-therapy · how-does-aba-therapy-work · benefits-of-aba-therapy ·
          what-age-to-start-aba-therapy · how-long-does-aba-therapy-last ·
          what-happens-in-an-aba-therapy-session · center-based-vs-in-home-aba-therapy ·
          how-to-choose-an-aba-provider · is-aba-therapy-controversial

AUTISM (support pillar: /services/aba-therapy/, category: /blog/category/autism/)
└── Blog: early-signs-of-autism · when-to-get-an-autism-evaluation ·
          early-intervention-for-autism · understanding-autism-spectrum-disorder

PARENT RESOURCES (pillar: /services/parent-training/ + /insurance/)
└── Blog: supporting-aba-therapy-at-home · does-medi-cal-cover-aba-therapy ·
          autism-support-orange-county-parents

SPEECH & COMMUNICATION (pillar: /services/speech-language-therapy/)
└── Blog: speech-therapy-for-autism · aac-and-autism

OCCUPATIONAL THERAPY (pillar: /services/occupational-therapy/)
└── Blog: occupational-therapy-for-autism · sensory-processing-and-autism

LOCAL (pillar: /locations/westminster-ca/)
└── Homepage, contact, autism-support-orange-county-parents
```

Funnel coverage:

- **TOFU:** signs, ASD explainer, what is ABA, sensory.
- **MOFU:** how it works, age, duration, session, comparison, speech, AAC, OT, early intervention, evaluation, controversy, at-home.
- **BOFU:** choose a provider, Medi-Cal, all service pages, insurance, contact.

## Internal linking strategy

**Principles**

1. **Up:** every article links to its pillar service page at least once, in context, and the sidebar repeats it (`relatedService`).
2. **Across:** every article links to 2–6 sibling articles. The "Keep reading" block adds 3 more automatically: hand-picked `related` slugs first, then same category (+3 points) and shared tags (+1 point each).
3. **Down:** every service page lists its cluster articles (`relatedPosts` in `services.ts`).
4. **Out to conversion:** every article links to /contact/ near the end. The sidebar CTA and closing CTA band repeat it.
5. **Anchor text:** descriptive and varied ("in-home ABA across Orange County", "our Medi-Cal guide"). Never "click here".
6. **Breadcrumbs** on every page except home reinforce the hierarchy, and BreadcrumbList schema mirrors them.
7. **No orphans:** all indexable pages are reachable from the nav, the footer, a category page or a pillar. The post-build audit (`npm run audit`) flags broken links.

**Example path:**
Home → /services/aba-therapy/ → /blog/what-is-aba-therapy/ → /blog/benefits-of-aba-therapy/ → /blog/supporting-aba-therapy-at-home/ → /services/parent-training/ → /contact/

## Editorial standards (health content)

- Cite authoritative sources (CDC, NIH/NICHD, NIMH, AAP, BACB, ASHA, AOTA, CA DHCS/DDS, RCOC) inline and in `references`.
- No invented statistics, outcomes, credentials, staff names or plan lists.
- No "cure", "recover", "guaranteed" or "100%". Use "support", "build skills" and "results vary".
- Respectful, neurodiversity-aware language. Mention assent and dignity where it's relevant.
- **Author:** currently "United Autism Therapy Clinical Team". **Strongly recommended:** have a named BCBA (and an SLP/OT for their topics) review each article and add `reviewedBy: "Name, BCBA"`. That is one of the strongest E-E-A-T improvements available.
- **Review cadence:** re-check every article at least every 12 months, update `updatedDate` only when the content materially changes, and re-verify any Medi-Cal/insurance facts every 6 months.

## Image plan

Generated illustrations are placeholders. Replace them with **real photos from the business**, with consent from families (or staff-only or hands-only shots):

- Center exterior with signage (helps local trust and matches Google Business Profile photos)
- Therapy rooms and play areas
- A BCBA with a parent (parent training)
- Staff team photo for /about/
- Tablet/AAC or fine-motor materials, for the speech and OT pages

Save photos as the same filename in `src/assets/blog/` or `src/assets/`. Astro outputs WebP/AVIF automatically. Each article has an `<!-- Image suggestion -->` comment describing the ideal shot.

## Future content opportunities (validate with keyword data first)

| Idea | Why | Cluster | Needs |
|---|---|---|---|
| Careers / RBT jobs in Westminster | "aba therapy jobs near me" is a top autocomplete. Recruits staff (not leads) | Company | Real openings |
| Vietnamese-language service page(s) | Westminster is home to Little Saigon; "aba therapy in vietnamese" autocompletes | Local | **Verified** Vietnamese-speaking staff |
| Spanish-language pages | Large Spanish-speaking population in Orange County | Local | Verified bilingual staff |
| Toilet training and autism | Common parent question; OT/ABA crossover | Parent resources | — |
| Autism and sleep routines | Common co-occurring concern (CDC lists sleep differences) | Parent resources | — |
| Visual schedules: free printable | Linkable asset | Parent resources | Design |
| IEP basics for Orange County parents | School-based support | Parent resources | Legal accuracy review |
| Transitioning from Early Start at age 3 | Moment when many families search | Autism | — |
| Echolalia explained | Speech cluster depth | Speech | SLP review |
| Picky eating and autism | OT cluster depth | OT | OT review |
| Social skills for kids with autism | Only if the business offers it | ABA | Confirm the service |
| Meet the team profiles (BCBA bios) | E-E-A-T | Company | Verified credentials |
| Commercial insurance and ABA in California | Complements the Medi-Cal article | Parent resources | DMHC-verified facts |

## Publishing cadence

- **Months 1–3:** 2 articles per month, plus replace placeholder images and add team bios.
- **After that:** 2–4 articles per month, driven by Search Console queries where the site ranks 8–20.

---

## Round 2 (2026-10-05): in-home first + GEO

### What changed

- **Brand:** the client's logo, favicon, header banner and 10 photos are now used across the site. Colors are sampled from the logo: blue `#0a5aa8`, green `#3a9a1a`, yellow `#f7b500`, orange `#f47b20`. The CTA orange is darkened to `#c4470c` so white text meets contrast requirements.
- **Positioning:**
  - In-home ABA comes first in the nav, the homepage hero, the services order and the schema description.
  - Center-based, school-based, speech and OT remain as secondary services.
- **New pages:**
  - `/locations/orange-county-ca/`: a service-area page. It lists cities only once the business confirms them.
  - A grouped `/faq/` with 5 groups.
  - A rebuilt `/about/` with mission, approach, team and key facts.
- **Content:** 11 new articles and one retargeted article, bringing the blog to 31 articles. The client's spreadsheet drafts are the starting point; many of those drafts were template text, so the articles keep their structure and topics and rewrite the substance with verified sources.

### New cluster: In-Home ABA

Pillar: /services/in-home-aba/

- benefits-of-in-home-aba-therapy
- what-happens-in-an-aba-therapy-session
- aba-in-everyday-family-routines
- preparing-your-home-for-aba
- how-to-start-in-home-aba-therapy
- center-based-vs-in-home-aba-therapy (comparison; stays in the ABA category)

### GEO (Generative Engine Optimization) — how the site is built for AI answers

Generative engines (Google AI Overviews, ChatGPT search, Perplexity, Copilot, Claude) quote pages that answer clearly, state facts consistently and are easy to parse. What the site does:

1. **Quick answers.**
   - Every new article has a 40–70 word `summary`. It's shown in a "Quick answer" box at the top and used as the BlogPosting `description`.
   - Key service pages have an `answer` paragraph (`services.ts`).
2. **Answer-first writing.** The first paragraph answers the question. H2s are written as the questions parents ask, and terms are defined in one sentence.
3. **One consistent entity.** Name, address, phone, hours and service area come from `src/data/site.ts` and appear identically in:
   - visible text
   - JSON-LD (Organization, MedicalBusiness, Service)
   - `/llms.txt`
   - the About page's "at a glance" fact list

   `sameAs` links the Facebook and Instagram profiles.
4. **`/llms.txt`.** A generated plain-text map of the business: key facts, services, pages and every article with its summary. It follows the proposed llmstxt.org convention, which is cheap to support but not yet a Google standard.
5. **AI crawlers allowed** in robots.txt: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended and Applebot-Extended. If the business ever wants to opt out of AI training, remove `Google-Extended` and `GPTBot`; search-oriented bots can stay.
6. **Citations.** Health claims link to the CDC, NIH, BACB, ASHA, AOTA and California DHCS/DDS. References are listed per article and included as `citation` in the schema.
7. **Freshness.** `updatedDate` is shown on articles and used in the sitemap's `lastmod`.

No one can guarantee inclusion in AI answers. These are the practices that make inclusion more likely.

## Round 3 (2026-10-05): homepage layout update

- **Hero:** "Compassionate ABA Therapy for Children with Autism", with BCBA & RBT and Westminster badges, the five counties served, a stats row and floating trust cards.
- **Highlights band:** Center-Based ABA, In-Home ABA, Parent Training and School-Based ABA. Each item opens an accessible `<dialog>` popup. The popup text is in the HTML, so it's crawlable, and without JavaScript each item links to its service page. Content lives in `src/data/highlights.ts`.
- **Programs section:** the three core services (ABA, Speech & Language, OT) as photo cards, using crops of the client's photos (`src/assets/brand/program-*.jpg`).
- **Service area:**
  - Counties (from `BUSINESS.counties` in `site.ts`): Orange, Riverside, San Diego, San Bernardino and Santa Clara.
  - Shown in the hero, topbar, footer, ContactInfo, the locations page, the Orange County page, schema `areaServed` and `/llms.txt`.
  - No thin per-county pages were created. Add a county page only when there is real local content for it, such as local resources or an actual office.
