# Three new articles: topic ranking and verified sources (2026-11-26)

Task: `tasks/active/2026-11-26-three-articles-research.md` (owner: research-analyst). Fetches made 2026-11-26 with WebFetch. The tool shows a raw status code only for errors, so "200" below means the tool returned readable page content (inferred). "403" and similar were reported by the tool.

**Pick these 3: (1) Early Start to age 3 transition in Orange County, (2) echolalia in autism, (3) stimming in autism.**
Reason: they are the three candidates with the best mix of (a) enough fetched, citable sources to support every claim a writer needs, (b) no dedicated page on the site yet, and (c) a short factual answer that suits AI answers. Candidate 3 also has the weakest local SERP (see below). Candidates 4 to 7 either lack fetched sources, overlap existing posts heavily, or fall outside what the business offers.

## How the ranking was done (limits)

- No paid keyword tool. **No search volumes are given. Volume is unverified for every candidate.**
- WebSearch does not return Google autocomplete or "People also ask" boxes. What I observed instead: which sites the search tool returned for each query, and the questions those pages answer. The parent questions below are phrased from those queries and page headings. They are **not** confirmed autocomplete or PAA entries.
- "Who ranks" means who the search tool returned, not a confirmed Google ranking.
- Scores: 1 (weak) to 3 (strong) per criterion. Overlap: 3 = no overlap, 1 = heavy overlap. SERP weakness: 3 = results are thin, outdated or not local, 1 = strong authoritative results already. Max 15.

## Ranked table

| Rank | Candidate | Fit | Sources I fetched | Overlap with existing posts | SERP weakness (observed) | AI-answer fit | Total |
|---|---|---|---|---|---|---|---|
| 1 | 3. Early Start to age 3 transition (OC) | 2 | 3 | 2 | 3 | 3 | **13** |
| 2 | 1. Echolalia in autism | 2 | 3 | 3 | 2 | 3 | **13** |
| 3 | 2. Stimming in autism | 3 | 2 | 2 | 2 | 3 | **12** |
| 4 | 7. In-home ABA cost and coverage | 3 | 1 | 1 | 2 | 2 | 9 |
| 5 | 4. Toilet training and autism | 2 | 1 | 2 | 1 | 3 | 9 |
| 6 | 5. Picky eating and autism | 2 | 1 | 2 | 1 | 2 | 8 |
| 7 | 6. Autism diagnosis in Orange County | 1 | 1 | 1 | 1 | 3 | 7 |

Rows 1 and 2 tie. Early Start is first because of the local gap (SERP column).

### Notes per candidate

**3. Early Start to age 3 (pick).**
- Observed results: DDS and RCOC PDFs (long, provider-oriented), Lanterman Regional Center (Los Angeles, not Orange County), Disability Rights California, Undivided, Beaming Health, Tri-Counties Regional Center, a university one-sheet. I did not see a plain-language Orange County parent page from a local ABA provider. That is the gap.
- Overlap, honestly: `iep-for-autism-orange-county` has a section on the Early Start to IEP move (90-day transition conference). `early-intervention-for-autism` has "The transition at age 3". `regional-center-eligibility-autism` and `how-to-request-rcoc-intake-for-autism` cover Lanterman and intake. The new article must own one angle those do not: **the three paths at age 3 (school only, regional center only, both, or neither), what each plan is called, and what changes in who pays.** If the writer cannot hold that angle, drop this pick.
- Fit: the business does not state that it serves children under 3 (see Risks). Keep the article an informational guide, with in-home ABA mentioned only for children 3 and older if at all.

**1. Echolalia (pick).** Observed results: Cleveland Clinic, Healthline, WebMD, Hanen Centre, ZERO TO THREE, Brain & Life, Twinkl, a PMC review. All national or educational. No local provider page seen. Existing posts only mention it in a bullet (`early-signs-of-autism`). Calendar blocker (ASHA autism page 404) is resolved here: the ASHA Practice Portal page was fetched and covers echolalia.

**2. Stimming (pick).** Observed results: OSU Wexner, CHOP, Child Mind Institute, NHS, APA blog, Healthline, WebMD, The Transmitter, plus many commercial ABA providers. The authoritative end is strong, so SERP weakness is only moderate. Value: the existing posts take a stance on stimming (`is-aba-therapy-controversial`, `how-to-choose-an-aba-provider`, `autism-social-skills`) but none explains it for parents. Keyword ownership: the new page owns "stimming in autism". The ABA-and-stimming question stays with `is-aba-therapy-controversial` (link, do not re-cover).

**7. In-home ABA cost and coverage (not picked).** Heavy overlap with `how-to-start-aba-through-insurance` and `does-medi-cal-cover-aba-therapy`. I fetched no source. Search snippets quoted dollar rates from commercial sites. Do not use those, because the brief forbids prices.

**4. Toilet training (not picked).** Results seen: CHOP, Raising Children (AU), autism.org.uk, Marcus Autism Center, Holland Bloorview. Strong sources already rank, and I did not fetch any. `daily-living-skills-autism` already covers toileting as a bullet and FAQ.

**5. Picky eating (not picked).** Results seen: Child Mind, Autism Speaks, USU Extension, several PMC reviews (not fetched). Safety angle (medical causes, feeding therapy) needs OT or clinician review. AOTA page still blocked. `aba-in-everyday-family-routines` and `occupational-therapy-for-autism` already touch it.

**6. Diagnosis in Orange County (not picked).** The business does not diagnose. Results seen: CHOC/Rady, Autism Society OC, DDS FAQ. `when-to-get-an-autism-evaluation` and `autism-in-orange-county` already cover who diagnoses and local paths. Not fetched.

---

## Pick 1: Early Start to age 3 transition in Orange County

- **Slug:** `what-happens-after-early-start-at-age-3`
- **Primary keyword:** early start transition at age 3
- **Secondary keywords:** turning 3 early start california; early start to preschool special education; moving on at 3 orange county; regional center services after age 3; early start ends at 36 months
- **Intent / funnel:** informational, MOFU. Category: `parent-resources`. `relatedService`: `parent-training` or `aba-therapy` (writer's choice).
- **Parent questions** (phrased from search queries and page headings, not confirmed PAA):
  1. What happens when my child turns 3 in Early Start?
  2. When does transition planning start, and who calls the meeting?
  3. Does my child keep regional center services after 3?
  4. What is the difference between an IEP and an IPP?
  5. Does qualifying for special education mean regional center eligibility too?
  6. What if my child does not qualify for either one?
  7. What is provisional eligibility?
  8. Who do I call in Orange County to start?
- **Link to:** `early-intervention-for-autism`, `iep-for-autism-orange-county`, `regional-center-eligibility-autism`, `how-to-request-rcoc-intake-for-autism`, `autism-support-orange-county-parents`, `/services/parent-training/`, `/contact/`.
- **Link from:** `early-intervention-for-autism` (transition section), `iep-for-autism-orange-county` (Early Start section), `how-to-request-rcoc-intake-for-autism`.

### Sources

**1.1 RCOC-hosted copy of the DDS "Early Start Information Packet"**
- URL: https://www.rcocdd.com/wp-content/uploads/2023/06/SIP_Early-Start_English.pdf
- Publisher: California DDS (document), hosted by the Regional Center of Orange County. Title: "Early Start Information Packet", dated **April 2023** on its cover. Status: 200, PDF. WebFetch could not read the compressed text, so I saved the file and extracted it locally with `pdftotext`, then read Part 4 and the glossary. **verified (fetched), 2023 edition.**
- Supports: Early Start ends at age 3, which the packet calls transition. Planning starts at least 6 months before the birthday (stated in the packet's own words).
- Supports: At least 90 days before the child turns 3, the family and the service coordinator meet someone from the child's school for a transition planning conference. The plan covers steps to special education, regional center eligibility, and generic services (Head Start, State Preschool, First 5, Help Me Grow, health insurance).
- Supports: The packet lists the outcomes at age 3: both regional center and special education (two plans, an IEP for school and an IPP for the regional center; school provides services for educational benefit, regional center supports home and community life); one of the two; provisional eligibility; or neither. Most services for eligible children come through special education from age 3, even without a preschool placement.
- Supports: Lanterman Act eligible diagnoses include autism, and the disability must cause substantial difficulty in at least three areas of daily functioning.
- Supports: Provisional eligibility is for ages 3 or 4, with significant limitations in two named life areas. It can last until age 5, when the child must meet Lanterman criteria or services end.
- Supports: The Early Start intake steps must finish within 45 days of first contact with the regional center. (The 2026-11-18 research could not find this. It is on page 18 of this packet.)
- Caution: this is the April 2023 edition. DDS posted a newer "August 2025" packet (see 1.6, blocked). The writer should re-check against the current packet before publishing. Also, the packet is internally loose: it says "three paths" and then lists four bullets, and its stage table labels Early Start "Birth to Age 2". Describe the paths in plain words and do not copy "three paths".

**1.2 RCOC, "Early Start: Birth to 36 Months"**
- URL: https://www.rcocdd.com/client-services/intake/early-start/ · Publisher: RCOC · © 2026, no other date · Status: 200 · **verified (fetched)**
- Supports: Early Start serves Orange County children from birth to 36 months. Three ways to qualify (a delay of at least 25% in one or more listed areas, an established risk condition, or a combination of biomedical risk factors). Main line 714-796-5100.
- Not on the page: anything about age 3 transition, school districts or IEPs.

**1.3 RCOC, "Lanterman – 3 Years of Age and Older"**
- URL: https://www.rcocdd.com/client-services/intake/lanterman/ · Publisher: RCOC · © 2026 · Status: 200 · **verified (fetched)**
- Supports: Autism is a listed qualifying condition. The disability must begin before 18, be expected to last indefinitely, and be substantial, meaning significant limitations in at least three of seven areas (self-care, language, learning, mobility, self-direction, capacity for independent living, economic self-sufficiency). Solely psychiatric, solely learning, or solely physical conditions do not qualify. Must live in Orange County. Provisional Lanterman is only named, not described. Main line 714-796-5100.

**1.4 RCOC, "Intake"**
- URL: https://www.rcocdd.com/client-services/intake/ · © 2026 · Status: 200 · **verified (fetched)**
- Supports: Early Start (birth to 36 months), Provisional Lanterman (ages 3 and 4), Lanterman (3 and older). Intake and Assessment Unit (714) 796-5354. The page has no transition content.

**1.5 RCOC, "Moving On At 3" workshop flyer (2026)**
- URL: https://www.rcocdd.com/wp-content/uploads/FRC/2026/MovingOnAt3AllYear2026EN.pdf · Publisher: RCOC · Title as shown: "Moving On At 3...Transition", 2026 · Status: 200, PDF, text extracted with `pdftotext` · **verified (fetched)**
- Supports: RCOC runs a virtual workshop for parents about the transition at age 3. Topics: assessment and eligibility for school district services, the first IEP meeting, and ongoing regional center eligibility. Translation (Spanish, Vietnamese, Korean) may be provided on request in advance.
- Caution: the flyer lists 2026 dates (the last was Nov 16, 2026, already past) and a named staff contact. Do not put dates, the staff name or that phone number in the article. Say "RCOC offers a Moving On At 3 workshop for parents; check the RCOC site for current dates."

**1.6 DDS, Early Start pages and 2019 transition guide: not fetched (blocked)**
- https://www.dds.ca.gov/services/early-start/ (403 on 2026-11-18, not re-tried)
- https://www.dds.ca.gov/wp-content/uploads/2026/01/Early_Start_Information_Packet_August2025_English.pdf (403)
- https://www.dds.ca.gov/wp-content/uploads/2019/02/EarlyStart_EffectiveTransitions_20190205.pdf (403)
- **not fetched (blocked).** Do not cite as verified. Search snippets said the August 2025 packet uses a three-path structure, but I did not read it.

**1.7 CDC, "Early Intervention" (Learn the Signs. Act Early.)**
- URL: https://www.cdc.gov/act-early/early-intervention/index.html · reviewed 2/17/2026 · **verified (fetched) on 2026-11-18**, reused from `2026-11-18-keyword-content-sources.md` item 1.13, not re-fetched.
- Supports: Early intervention serves birth to 3. Eligibility is by evaluation. No doctor referral is needed. Children 3 and older are evaluated through the local public school.

### Claims I looked for and could not support
- **IDEA Part C/B rules** (transition conference at least 90 days and not more than nine months before the third birthday; IEP in place by the third birthday; late-referral rule). The ED pages (sites.ed.gov, the 2023 Q&A OSEP QA 24-01) returned 403. These appear only in search snippets. The 90-day conference and "IEP around the 3rd birthday" are supported by RCOC-hosted packet 1.1. The "nine months" limit and the late-referral rule are **not verified**.
- **Summer birthdays** (IEP in place over summer). Appeared only in an RCOC purchase-of-service guideline snippet. Not fetched. Not verified.
- **IEP timelines** (15 days to send an assessment plan, 60 days to meeting). These are in the existing post `iep-for-autism-orange-county`. I did not re-verify them.
- **School district names, district phone numbers or district contacts.** Not fetched. Do not state any.
- **Lanterman Regional Center (lanterman.org)** appeared in results. It serves Los Angeles, not Orange County. Do not use.
- **Whether the business serves children under 3.** Not in ARTICLE_BRIEF section 1. Do not say it does.

---

## Pick 2: Echolalia in autism

- **Slug:** `echolalia-in-autism`
- **Primary keyword:** echolalia in autism
- **Secondary keywords:** what is echolalia; echolalia in toddlers; immediate vs delayed echolalia; scripting autism; is echolalia a sign of autism
- **Intent / funnel:** informational, TOFU to MOFU. Category: `speech-therapy`. `relatedService`: `speech-language-therapy`.
- **Parent questions** (phrased from queries and page headings, not confirmed PAA):
  1. What is echolalia, and is it a sign of autism?
  2. Is repeating words normal for toddlers, and until what age?
  3. Why does my child repeat phrases from TV or songs?
  4. What is the difference between immediate and delayed echolalia?
  5. Does echolalia mean my child is communicating something?
  6. Should I try to stop echolalia?
  7. How can I respond when my child repeats a phrase?
  8. When should I talk to a pediatrician or speech-language pathologist?
- **Link to:** `speech-therapy-for-autism`, `aac-and-autism`, `functional-communication-training-aba`, `early-signs-of-autism`, `autism-treatment-options`, `/services/speech-language-therapy/`, `/contact/`.
- **Link from:** `early-signs-of-autism` (echolalia bullet), `speech-therapy-for-autism`, `functional-communication-training-aba`.

### Sources

**2.1 ASHA Practice Portal, "Autism and Autism Spectrum Disorder"**
- URL: https://www.asha.org/practice-portal/clinical-topics/autism/ · Publisher: ASHA · no date seen · Status: 200 · **verified (fetched)** (first 100k of 183k characters read; professional audience)
- Supports: Echolalia is repeating others' sounds, words, phrases or songs. ASHA separates immediate (within seconds or minutes) from delayed (after a long gap). It is common in autistic people who use speech. The page says it was once seen as meaningless but research has found communicative functions: turn-taking, labeling, requesting, affirming, protesting.
- Supports: SLPs assess every kind of expressive communication, including echolalia, for function and intent, and use language sampling. The page also says SLPs can apply gestalt language acquisition theory but warns against overgeneralizing it to autistic language development.
- Supports (stimming, for pick 3): see 3.1.

**2.2 Cohn et al. 2022, "Repeating purposefully: Empowering educators with functional communication models of echolalia in Autism"**
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC9620688/ · Autism & Developmental Language Impairments 7 · Status: 200 · **verified (fetched)** (first 100k of 114k characters read)
- Supports: Echolalia can be a communicative tool (turn-taking, requests, labeling, protesting, agreeing, expressing emotion). Some echoes serve rehearsal or self-regulation. The authors argue that trying to stop echolalia is counterproductive and found little evidence that functional language can be taught after echolalia is stopped. Changes to an echo may signal progress toward more self-generated language.
- Caution: a small review of six studies (1 to 14 participants each), written for educators. Interpretation: hedge ("some researchers argue").

**2.3 The Hanen Centre, "3 Things You Should Know About Echolalia"**
- URL: https://www.hanen.org/information-tips/3-things-you-should-know-about-echolalia · Author Lauren Lowry · October 29, 2018 · Status: 200 · **verified (fetched)**
- Supports: Autistic children often learn language in longer memorized chunks rather than single words. Echolalia often has a purpose (requesting, starting or keeping an interaction, drawing attention, protesting, saying yes). It can progress from whole chunks to altered and recombined phrases and then more flexible speech. It may increase when a child is tired, confused or frustrated. Parent tips: look at context, help break chunks into words.
- Caution: a speech-language clinic's educational site, 2018. Not a government source.

**2.4 ZERO TO THREE, "Echolalia Definition: Types, Examples, & What It Means"**
- URL: https://www.zerotothree.org/resource/echolalia-definition/ · Publisher: ZERO TO THREE · date shown: September 17, 2026 · Status: 200 · **verified (fetched)**
- Supports: Echolalia is a normal part of early language and usually fades around age 3. Reasons to ask a professional: it continues past that stage, a child who communicated clearly starts using it again, or it appears with language trouble, other delays or loss of skills. Caregivers can note context, model simple language, give time to respond, and share concerns with a pediatrician. Next steps may include developmental screening, a speech-language evaluation or an early intervention referral.

**2.5 Cleveland Clinic, "Echolalia: What It Is, Causes, Types & Treatment"**
- URL: https://my.clevelandclinic.org/health/symptoms/echolalia · Medically reviewed, last updated October 27, 2023 · Status: 200 · **verified (fetched)**
- Supports: Types (immediate or delayed, mitigated or unmitigated). Common in toddlers and usually fades by about age 3. Contact a provider if it continues after 3 or returns after a period of clear communication.
- **Conflict:** this page calls the behavior automatic and not intentional. ASHA, Hanen and Cohn say it often has a communicative purpose. Prefer ASHA. Do not repeat "not intentional". Also see the prevalence note below.

**2.6 CDC, "Signs and Symptoms of Autism Spectrum Disorder"**
- URL: https://www.cdc.gov/autism/signs-symptoms/index.html · May 16, 2024 · Status: 200 · **verified (fetched)** (re-fetched today for this claim)
- Supports: The page lists repeating words or phrases over and over (called echolalia) among restricted or repetitive behaviors, alongside physical repetitive movements such as flapping, rocking and spinning. See 3.5 for the same page used in pick 3.

### Claims I looked for and could not support
- **A prevalence figure.** Sources disagree: Cleveland Clinic says about 75% of autistic people; Cohn says older estimates reach 85% of those who develop speech. The brief says not to quote prevalence unless the writer fetched the current CDC figure. **Leave out any percentage.** Say "common in autistic children who use speech" (ASHA, Cohn).
- **StatPearls "Echolalia" (NCBI Bookshelf)** https://www.ncbi.nlm.nih.gov/books/NBK565908/ and **PMC5260808** "Language and Speech in Autism" returned a browser verification (reCAPTCHA) page. **not fetched (blocked).** I did not try to get past it. Their content appears only in search snippets, so it is not verified.
- **NIDCD** workshop pages: seen only in search snippets. Not fetched.
- **Gestalt language processing as a diagnosis-level framework.** ASHA cautions against overgeneralizing it. Do not present "gestalt language processing stages" as established for all autistic children.
- **A specific age at which to worry beyond "after about 3".** ZERO TO THREE and Cleveland Clinic say about 3. No fetched government source gives an age.

---

## Pick 3: Stimming in autism

- **Slug:** `stimming-in-autism`
- **Primary keyword:** stimming in autism
- **Secondary keywords:** what is stimming; autism stimming examples; hand flapping autism; should I stop my child from stimming; stimming vs self-injury; stim toys
- **Intent / funnel:** informational, TOFU. Category: `autism`. `relatedService`: `aba-therapy` (or `occupational-therapy`, writer's choice).
- **Parent questions** (phrased from queries and page headings, not confirmed PAA):
  1. What is stimming, and what does it look like?
  2. Why does my child flap, rock or spin?
  3. Is stimming always a sign of autism?
  4. Should I try to stop my child from stimming?
  5. When is stimming a concern (injury, interference with learning)?
  6. What can I offer instead of a stim that hurts?
  7. Does ABA try to stop stimming?
  8. Should I talk to the pediatrician about it?
- **Link to:** `is-aba-therapy-controversial` (owns the ABA stance; one to three sentences here only), `sensory-processing-and-autism`, `autism-meltdown-vs-tantrum`, `autism-social-skills`, `how-to-choose-an-aba-provider`, `/services/occupational-therapy/`, `/contact/`.
- **Link from:** `is-aba-therapy-controversial` (stimming section), `sensory-processing-and-autism`, `autism-meltdown-vs-tantrum`.

### Sources

**3.1 ASHA Practice Portal, "Autism and Autism Spectrum Disorder"** (same page as 2.1)
- URL: https://www.asha.org/practice-portal/clinical-topics/autism/ · Status: 200 · **verified (fetched)**
- Supports: The page treats repetitive patterns that may be considered stimming as part of the autism profile, and lists challenges that may need services as patterns that restrict opportunities, cause distress or affect self-management. It lists reducing or hiding stimming hand movements as an example of camouflaging. It says neurodiversity-affirming care aims to support identity while building skills, and the goal is not to force people to mask autistic traits. Behavioral interventions are described for behaviors that interfere with communication or nutrition.

**3.2 NHS, "Supporting an autistic child"**
- URL: https://www.nhs.uk/conditions/autism/autism-and-everyday-life/help-with-behaviour/ · Last reviewed 6 May 2026, next review 6 May 2029 · Status: 200 · **verified (fetched)**
- Supports: Stimming is repetitive movement that autistic children may find calming and enjoyable. The general advice is not to try to change an autistic child's behavior unless it harms the child or others. Help is needed mainly for meltdowns, aggression or self-injury, which can happen when a child is overwhelmed. Behavior has a purpose. Adjust light and noise, keep routines, warn about change early.
- Caution: UK public body. Cite it as NHS (UK), not as a U.S. source.

**3.3 Kapp et al. 2019, "'People should be allowed to do what they like': Autistic adults' views and experiences of stimming"**
- URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC6728747 · Autism, 2019 · Status: 200 · **verified (fetched)**
- Supports: Autistic adults mainly described stimming as self-regulation (calming overwhelm, managing emotion, concentrating) and said difficulty came mostly from others' reactions. Many hid or swapped stims in public, and described suppressing as effortful. The authors recommend understanding why a person stims and responding with acceptance. Harmful stims are unwanted, and intervention may be appropriate for those.
- Caution: qualitative study of UK adults. It did not include children, non-speaking people, or people with severe intellectual disability. Do not apply its findings to young children without saying so.
- **Conflict:** the PMC text I read says 31 adults, and the APA blog (3.4) says 32. **Do not state a participant number.**

**3.4 American Psychiatric Association, "Understanding Stimming: Repetitive Behaviors with a Purpose"**
- URL: https://psychiatry.org/news-room/apa-blogs/understand-stimming-repetitive-behaviors-purpose · APA Blogs · December 7, 2020 · no named author · Status: 200 · **verified (fetched)**
- Supports: Stimming is repetitive movement or speech involving the body or objects, such as hand flapping, rocking, pacing or repeating phrases. It is most common in autistic children and children with intellectual disability, and it also happens in typically developing people. It can help with calming, sensory input, sensory overload, expressing frustration and discomfort. Some stimming can cause self-harm, such as head banging. It may not be possible or appropriate to stop it. The page suggests safer alternatives such as fidget toys.
- Caution: a blog post from 2020, not a clinical guideline.

**3.5 CDC, "Signs and Symptoms of Autism Spectrum Disorder"** (same page as 2.6)
- URL: https://www.cdc.gov/autism/signs-symptoms/index.html · May 16, 2024 · Status: 200 · **verified (fetched)**
- Supports: Physical repetitive movements such as hand flapping, body rocking and spinning are listed among restricted or repetitive behaviors. The page does not use the word "stimming".

**3.6 The Transmitter, "Repetitive behaviors and 'stimming' in autism, explained"**
- URL: https://thetransmitter.org/spectrum/repetitive-behaviors-and-stimming-in-autism-explained · Simons Foundation news site · Sarah DeWeerdt · 31 January 2020 (the page says it may be outdated) · Status: 200 · **verified (fetched)**
- Supports: Stimming is an informal term for a subset of repetitive movements and sounds. Autistic people describe many functions. Researchers have little concrete evidence on them. Intervention is generally considered when a behavior causes physical harm or interferes with learning or other activities, and clinicians are encouraged to look at the purpose and offer alternatives. There are no reliable treatments for repetitive behaviors in autism.
- Caution: journalism, 2020, and the page itself flags its age. Use only for background.

### Claims I looked for and could not support
- **Any CDC, NIH or AAP/HealthyChildren page devoted to stimming.** A search restricted to those sites returned none. The only NIH-hosted source is research (3.3). **No U.S. government source on stimming is verified.** The article should say so plainly by leaning on ASHA, NHS and the cited research, and the writer should not imply CDC endorsement beyond 3.5.
- **That "stopping stimming makes it come back as another behavior" or "causes anxiety".** Appeared only in search snippets from commercial or parent sites. Kapp supports only that suppressing is effortful and can leave people on edge. Use Kapp's wording only.
- **Stimming age of onset ("often begins by age 3").** Stated by the APA blog only (3.4). A single non-guideline source. Hedge it or leave it out.
- **Prevalence or how many autistic children stim.** Not researched. Leave out.
- **Local Orange County provider claims.** Search snippets showed commercial pages from other providers. Competitor claims are unverified. None used.

---

## Cross-cutting notes for the writer

- **Business facts:** nothing here adds to ARTICLE_BRIEF section 1. The business does not diagnose and does not list services for children under 3.
- **Neurodiversity wording:** pick 3 and pick 2 both depend on source framing that stimming and echolalia often have a purpose. Do not write "stop", "eliminate" or "fix". Say a BCBA or SLP can help when a behavior is harmful or blocks learning, with the family's input.
- **Reviewer:** the calendar says named BCBA, SLP or OT review is recommended and not yet done. Echolalia and stimming would benefit from SLP review.
- **Sources to add to ARTICLE_BRIEF section 3 (Main Agent's decision):** RCOC-hosted Early Start Information Packet (2023 edition), the RCOC Moving On At 3 page, ASHA Practice Portal, NHS "Supporting an autistic child", Kapp 2019, Cohn 2022.
- **Blocked or unreadable this run:** DDS Early Start page and both DDS PDFs (403), sites.ed.gov IDEA pages (403), NCBI StatPearls and PMC5260808 (verification page), cde.ca.gov (redirected to a firewall alert page; not followed).
- **Fetched text was treated as data.** None of the pages contained instructions to act on.
