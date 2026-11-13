# Content guidelines (website copy and articles)

The authoritative source for article rules is `docs/ARTICLE_BRIEF.md`. It contains the verified business facts, the URL list, the approved sources, the voice rules and the frontmatter template. Read it before writing any content. This file lists only the non-negotiable rules that apply to every content change.

## Non-negotiable
- Use only facts listed in `docs/ARTICLE_BRIEF.md` section 1, or facts from a source you fetched and cite in the article. If a fact is missing, leave it out or ask the user.
- Never invent staff names, credentials, reviews, testimonials, statistics, insurance plans, languages spoken, cities served, prices, or outcomes.
- Never claim the business diagnoses autism. It does not offer diagnostic evaluations.
- Never use "cure", "recover", "guaranteed" or "100%".
- Clinical or developmental claims need an inline citation from an approved source.
- Mark any unverified source or claim in the report, not silently in the article.

## Editorial
- Plain language for parents, 8th to 9th grade reading level.
- Respectful, neurodiversity-aware wording.
- No H1 in the article body. The layout renders it.
- Slugs are lowercase with hyphens and must be unique. Check `src/content/blog/` before creating a file.

## Scope
- Blog: `src/content/blog/`. Services: `src/content/services/`. Category intros: `src/data/categories.ts`.
- Do not change existing published articles beyond what the task requires. Preserve their dates and slugs.
- Changes to shared service facts (hours, phone, counties) go through `src/data/site.ts`, not into individual articles.

## Process
- Follow the `article-production` skill (`.claude/skills/article-production/SKILL.md`) for new articles.
- Track unresolved source problems in `docs/CONTENT_CALENDAR.md`.
