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
    description: 'Understanding autism in children: early signs, evaluations, early intervention and what the autism spectrum means.',
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
    description: 'How speech and language therapy and AAC can support communication for children with autism.',
    pillar: '/services/speech-language-therapy/',
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    description: 'Occupational therapy, sensory processing, fine motor and daily living skills for children with autism.',
    pillar: '/services/occupational-therapy/',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];
export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;
