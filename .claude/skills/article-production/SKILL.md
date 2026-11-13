---
name: article-production
description: Step-by-step workflow for producing one new blog article for the United Autism Therapy website, from keyword selection through source verification, drafting, self-check and build. Use when asked to write or add a blog article.
---

# Article production

Use this skill for one article at a time. Rules and facts come from `docs/ARTICLE_BRIEF.md`, not from this file.

## Steps

1. **Pick the topic.** Take the next item from `docs/CONTENT_CALENDAR.md`, or ask the user. Confirm the primary keyword is not already owned by an existing article in `SEO_KEYWORD_MAP.md`.
2. **Check the slug.** It must be unused in `src/content/blog/`.
3. **Read the brief.** Read `docs/ARTICLE_BRIEF.md` sections 1, 2, 5 and 6 (facts, URLs, structure, frontmatter).
4. **Verify sources.** Each source you cite must be listed in `docs/ARTICLE_BRIEF.md` section 3 or confirmed in a research-analyst report (URL plus what the page states). Writers without web access do not fetch; they use the report the Main Agent supplies. If a page is unavailable, do not cite it. Record the blocker in the calendar.
5. **Draft.** Write the frontmatter from the template, the image suggestion comment, the summary (40 to 70 words), the intro, the body with 4 to 8 internal links, and the closing section. Body length: 1,300 to 1,800 words.
6. **Self-check.** Confirm each item below before running the build.
7. **Build.** The `site-verification` skill is run by qa-specialist (or by the Main Agent). If you have no shell, do not claim a build result; write "not run, handed to QA". Fix any error the build or audit reports when the task comes back to you.
8. **Report.** Return the standard report with the file path, sources used, unverified items and the build result (or "not run").

## Self-check

- [ ] Frontmatter: title 60 characters or fewer, description 120 to 160 characters (the audit enforces both), summary 40 to 70 words, alt at least 10 characters.
- [ ] `primaryKeyword`, `searchIntent`, `funnelStage` and `category` are set and valid.
- [ ] `relatedService` is a real service slug if set. Every `related` slug exists as an article.
- [ ] Every `references` URL is listed in the brief or confirmed in a research-analyst report.
- [ ] Every internal link resolves to an existing page (checked by `npm run audit`).
- [ ] No H1 in the body. No "References" or "FAQ" heading in the body.
- [ ] No invented facts, staff names, reviews, numbers or insurance plans.
- [ ] No prohibited wording (see content-guidelines.md).
- [ ] `reviewedBy` is left out unless a clinician has reviewed the article.

## Output
- New file under `src/content/blog/<slug>.md`.
- Calendar updated in `docs/CONTENT_CALENDAR.md` (status and any blocker).
- Nothing committed.
