/** Blog categories = topic clusters. Each maps to a pillar service page. */
export const CATEGORIES = [
  {
    slug: 'aba-therapy',
    name: 'ABA Therapy',
    description: 'Plain-language guides to Applied Behavior Analysis: how it works, what sessions look like, how long it lasts and how to choose a provider.',
    pillar: '/services/aba-therapy/',
  },
  {
    slug: 'in-home-aba',
    name: 'In-Home ABA',
    description: 'What in-home ABA therapy looks like: home sessions, everyday family routines, preparing your home and how parents take part.',
    pillar: '/services/in-home-aba/',
  },
  {
    slug: 'autism',
    name: 'Autism',
    description: 'Understanding autism in children: early signs, evaluations, early intervention and what the autism spectrum means for daily life.',
    pillar: '/services/aba-therapy/',
  },
  {
    slug: 'parent-resources',
    name: 'Parent Resources',
    description: 'Practical help for parents and caregivers in Orange County: insurance and Medi-Cal, local resources and supporting therapy at home.',
    pillar: '/services/parent-training/',
  },
  {
    slug: 'speech-therapy',
    name: 'Speech & Communication',
    description: 'How speech and language therapy and AAC can support communication for children with autism, with practical guides for parents in Orange County.',
    pillar: '/services/speech-language-therapy/',
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    description: 'Occupational therapy, sensory processing, fine motor and daily living skills for children with autism, explained for parents in Orange County.',
    pillar: '/services/occupational-therapy/',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;

/**
 * Long-form intro shown above the article list on selected category pages.
 * Facts are limited to the CDC treatment guidance and the business's own
 * services; add a category here only when its copy is verified.
 */
export const CATEGORY_INTROS: Record<string, { heading: string; paragraphs: string[] }> = {
  'speech-therapy': {
    heading: 'How speech and language therapy supports autistic children',
    paragraphs: [
      "Speech-language pathologists (SLPs) help children understand and use language. The CDC's treatment guidance describes speech and language therapy as the most common developmental therapy for people with autism spectrum disorder. It helps with understanding and using speech and language, and it may involve signs, gestures, pictures or devices.",
      "Communication does not always mean spoken words. Some children benefit from gestures or sign language, some use picture cards, and others use a speech-generating device. The best choice depends on the child's strengths, interests and what works in everyday life at home, at school and in the community. Many families use more than one method, and the goal is a system the child can use reliably.",
      "Speech therapy often focuses on functional communication: asking for things, making choices, saying no, greeting people and joining in play. Sessions are planned around the goals your child and family care about most. Families are included so that practice carries over into daily routines, not only into sessions.",
      "Speech therapy works best when it is coordinated with the rest of your child's team. If your child also receives ABA therapy, occupational therapy or school services, ask how the goals connect. For example, a child who is learning to ask for a break in ABA may use the same picture card or device in speech sessions. Our <a href=\"/services/speech-language-therapy/\">speech and language therapy</a> page explains how this support fits with our other services, and <a href=\"/blog/aac-and-autism/\">our guide to AAC and autism</a> covers picture and device options in more depth.",
      "Talk with your child's pediatrician about speech and language concerns and any specific medical needs, since they know your child's history best.",
    ],
  },
  'occupational-therapy': {
    heading: 'How occupational therapy supports daily life and independence',
    paragraphs: [
      "Occupational therapy (OT) teaches skills that help a child live as independently as possible. The CDC's treatment guidance notes that these skills may include dressing, eating, bathing and relating to people. OT can also address sensory integration and physical needs, which is why it often connects with everyday routines.",
      "For many children, OT focuses on fine motor skills such as holding a pencil, using utensils, buttoning clothes and handling toys. It can also support self-care routines, such as brushing teeth or getting dressed, and help a child manage sensory input that feels overwhelming in everyday settings.",
      "Sensory support is one part of OT, not the whole service. A plan may combine sensory strategies with play, self-care practice and school readiness, depending on the child's goals. Your child's occupational therapist will explain what they are working on and how you can practice it at home. Our guide to <a href=\"/blog/sensory-processing-and-autism/\">sensory processing and autism</a> explains these ideas in more depth.",
      "OT also works best with the rest of the team. A child who is learning self-care in OT may also practice those skills during ABA sessions or at home. Ask how the goals connect across services, so your child gets consistent practice within one plan. You can read more about <a href=\"/services/occupational-therapy/\">our occupational therapy services</a> and about <a href=\"/blog/daily-living-skills-autism/\">daily living skills for children with autism</a>.",
      "Talk with your child's pediatrician about motor, feeding, sleep or sensory concerns and any specific medical needs, since they know your child's history best.",
    ],
  },
};
