# Task: three-articles-writing
Owner agent: content-strategist (three parallel runs, one per article, each owns only its own new file)
Depends on: `tasks/completed/2026-11-26-three-articles-research.md` (done)
Objective: Write three new blog articles for SEO and GEO, in a natural human voice, using only the verified sources in the research file.

Inputs (all agents):
- `.claude/agents/content-strategist.md`, `.claude/skills/article-production/SKILL.md`
- `docs/ARTICLE_BRIEF.md` (sections 1, 2, 4, 5, 6; follow them), `.claude/rules/content-guidelines.md`
- `docs/research/2026-11-26-three-articles-sources.md`: your article's section AND the "Cross-cutting notes". Use only sources marked "verified (fetched)". Do not cite blocked sources. Do not use anything listed under "Claims I looked for and could not support".
- One existing post as a format sample: `src/content/blog/autism-treatment-options.md`

## Voice: write like a real person, not a template
- Sound like a knowledgeable friend who works with families: warm, direct, plain. 8th grade reading level.
- Vary sentence length. Some short. Use contractions (you're, it's, don't). Start some sentences with "But" or "And" where natural.
- Use generic, clearly hypothetical everyday scenes ("Say your child repeats a line from a show at the grocery store"). Never present an invented anecdote as a real family, client or staff story. No "in my experience", no made-up quotes, no named people.
- Do not open with a question or a scene-setting cliché. The first 2–3 sentences answer the query directly.
- Banned phrasing (AI tells): "it's important to note", "delve", "navigate the journey/landscape", "in today's world", "unlock", "game-changer", "embark", "rest assured", "when it comes to", "plays a crucial role", "in conclusion", "a testament to". Avoid em dashes (use commas or periods). Avoid forcing every list into three items. No emoji.
- Hedge claims the way the sources do ("ASHA describes...", "some researchers argue..."). Neurodiversity-aware: never "fix", "stop", "eliminate" as the goal. Never "cure", "recover", "guaranteed", "100%".
- Do not claim the business diagnoses autism. Do not state that the business serves children under 3.

## Common requirements
- Length 1,300–1,800 words in the body. No H1 in the body, no "References" or "FAQ" headings in the body. Start with the intro, then a `> **Key takeaways**` blockquote (3–5 bullets).
- Frontmatter per the brief: title 60 chars or fewer, description 120–160 chars, summary 40–70 words, alt at least 10 chars, 3–5 FAQs in frontmatter (answers 2–4 sentences), `references` listing every cited source (title, publisher, url) from the research file. `date: 2026-11-26`, `updatedDate` same day (no future dates; the audit flags them). `author: uat-clinical-team`. No `reviewedBy` (no clinician has reviewed these). First line after frontmatter: the `<!-- Image suggestion: ... -->` comment.
- 4–8 internal links in the body with descriptive anchors (only URLs in the brief section 2 and slugs that exist in `src/content/blog/`). Link the relevant service page once and `/contact/` once near the end. Close with a short "Talk with our team" style H2: free consultation, phone (714) 709-7819, /contact/. Add one sentence telling readers to talk with their pediatrician or a qualified professional.
- `featuredImage`: reuse an existing placeholder image from `src/assets/blog/` (named below) so the build passes. Write a real `alt` describing what a proper photo would show.
- `related`: 2–3 existing slugs. `relatedService`: a valid service slug.
- Quote YAML strings containing colons, apostrophes or `#`.
- Do not run npm build or any shell command that edits other files. You may only create your one file. Do not edit existing posts, the calendar, the keyword map or `docs/`. Do not commit or push. Report the standard 7-part report; write "build not run, handed to QA".

## Article A: Early Start at age 3 (Orange County)
- File: `src/content/blog/what-happens-after-early-start-at-age-3.md`; slug `what-happens-after-early-start-at-age-3`
- Primary keyword: early start transition at age 3. Secondary: turning 3 early start california; early start to preschool special education; moving on at 3 orange county; regional center services after age 3.
- Category `parent-resources`; `searchIntent: informational`; `funnelStage: MOFU`; `relatedService: parent-training`; image `../../assets/blog/early-intervention-for-autism.jpg`.
- Owned angle (do not re-cover the existing posts in depth): the outcomes at age 3 in plain words (school special education plan only, regional center plan only, both, provisional eligibility, or neither), what each plan is called (IEP vs IPP) and who pays for what, the transition planning meeting (planning starts at least 6 months before the birthday; meeting at least 90 days before, per the RCOC-hosted DDS packet, 2023 edition), the "Moving On At 3" parent workshop (say "check the RCOC site for current dates", no dates, no staff name), what to do if you disagree or your child doesn't qualify, and who to call (RCOC main line 714-796-5100 is verified on the RCOC pages).
- Do not state the IDEA "nine months" limit or the late-referral rule, school district names or phone numbers, or the August 2025 packet. Say the packet cited is the 2023 edition where it matters, or avoid version-specific figures. Do not copy "three paths".
- Link to existing posts: `early-intervention-for-autism`, `iep-for-autism-orange-county`, `regional-center-eligibility-autism`, `how-to-request-rcoc-intake-for-autism`, `autism-support-orange-county-parents`; service `/services/parent-training/`. Mention ABA only as something families may explore for children 3 and older, in one or two sentences, linking `/services/aba-therapy/`.

## Article B: Echolalia in autism
- File: `src/content/blog/echolalia-in-autism.md`; slug `echolalia-in-autism`
- Primary keyword: echolalia in autism. Secondary: what is echolalia; echolalia in toddlers; immediate vs delayed echolalia; scripting autism.
- Category `speech-therapy`; `searchIntent: informational`; `funnelStage: TOFU`; `relatedService: speech-language-therapy`; image `../../assets/blog/speech-therapy-for-autism.jpg`.
- Cover: what it is (immediate vs delayed), why toddlers do it and why it usually fades around age 3 (ZERO TO THREE, Cleveland Clinic), why many children with autism use it and the communicative functions (ASHA, Cohn 2022, Hanen: say "researchers describe", note the Cohn review is small), what a parent can do (note the context, model a simple version, give time, don't treat it as meaningless), when to talk to a pediatrician or speech-language pathologist (continues past about 3, returns after clear communication, with other delays or loss of skills), what an SLP looks at (function and intent, ASHA).
- No prevalence percentage. Do not write that echolalia is "not intentional". Do not present gestalt language processing as established; at most one cautious sentence citing ASHA's caution.
- Link: `speech-therapy-for-autism`, `aac-and-autism`, `functional-communication-training-aba`, `early-signs-of-autism`, `autism-treatment-options`; service `/services/speech-language-therapy/`.

## Article C: Stimming in autism
- File: `src/content/blog/stimming-in-autism.md`; slug `stimming-in-autism`
- Primary keyword: stimming in autism. Secondary: what is stimming; autism stimming examples; hand flapping autism; should I stop my child from stimming.
- Category `autism`; `searchIntent: informational`; `funnelStage: TOFU`; `relatedService: occupational-therapy`; image `../../assets/blog/sensory-processing-and-autism.jpg`.
- Cover: what stimming is and examples (APA blog, CDC lists hand flapping, rocking and spinning among repetitive behaviors; CDC does not use the word stimming), that many people also stim without autism, what autistic adults say it does for them (Kapp 2019, say it was a UK adult study and does not cover young children; no participant count), why the general advice is to leave harmless stims alone (NHS UK, ASHA neurodiversity-affirming framing), when it may need support (causes harm, such as head banging, or blocks learning; APA, The Transmitter, ASHA), safer alternatives (fidget items, APA), and what to ask a provider (how they treat stimming; link `how-to-choose-an-aba-provider`).
- Say plainly that no U.S. government page on stimming was found, so the article leans on ASHA, NHS and published research. Do not claim stopping stimming "comes back as another behavior" or "causes anxiety". Do not give prevalence or an onset age.
- The ABA-and-stimming question belongs to `is-aba-therapy-controversial`: one to three sentences and a link, no deeper.
- Link: `is-aba-therapy-controversial`, `sensory-processing-and-autism`, `autism-meltdown-vs-tantrum`, `autism-social-skills`, `how-to-choose-an-aba-provider`; service `/services/occupational-therapy/`.

Acceptance criteria:
- Every factual claim traces to a verified source in the research file; every cited URL is in the article's `references`.
- All frontmatter lengths within limits; slugs unique; related slugs exist.
- Passes the banned-phrasing list above.

Status: done

## Result (2026-11-26)
- Created: what-happens-after-early-start-at-age-3, echolalia-in-autism, stimming-in-autism. QA traced claims to the research file; 10 minor items fixed. Build 0 errors, audit 72 pages no issues.
- Back-links added from 8 existing posts. Keyword map and calendar updated.
- Open: SLP/OT review, recheck Early Start against the August 2025 DDS packet, real featured images (placeholders reused).
