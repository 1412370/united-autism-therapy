/**
 * Homepage "highlights" band: the four ways families can receive care.
 * Each opens a popup with details (content is in the HTML for SEO; without
 * JavaScript the item links straight to the service page).
 */
import type { IconName } from '../components/Icon.astro';

export interface Highlight {
  id: string;
  title: string;
  icon: IconName;
  short: string;
  intro: string;
  points: string[];
  href: string;
  cta: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    id: 'center-based',
    title: 'Center-Based ABA',
    icon: 'building',
    short: 'Structured therapy in our Westminster center.',
    intro:
      'Center-based ABA takes place at our location at 13571 Beach Blvd in Westminster. The setting is designed for learning, with predictable routines, a range of materials and a team on site together.',
    points: [
      'One-on-one teaching built into play, with BCBA oversight',
      'Chances to practice social skills around other children',
      'Helpful preparation for preschool and classroom routines',
      'Can be combined with in-home sessions',
    ],
    href: '/services/center-based-aba/',
    cta: 'Learn about center-based ABA',
  },
  {
    id: 'in-home',
    title: 'In-Home ABA',
    icon: 'home',
    short: 'Our therapists come to you — in a familiar setting.',
    intro:
      'In-home ABA brings therapy to your home. Your child works on goals during the routines that matter most — meals, play, getting dressed and bedtime — while you learn strategies alongside the therapist.',
    points: [
      'Skills taught where your child actually uses them',
      'Goals built around your family’s daily routines',
      'Plans designed and supervised by BCBAs, delivered with RBTs',
      'Available across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties',
    ],
    href: '/services/in-home-aba/',
    cta: 'Learn about in-home ABA',
  },
  {
    id: 'parent-training',
    title: 'Parent Training',
    icon: 'family',
    short: 'Coaching so progress continues between every session.',
    intro:
      'Parent training is hands-on coaching led by your child’s BCBA. You learn practical strategies, see them modeled, then practice with feedback — so your child gets consistent support every day.',
    points: [
      'Strategies for routines, communication and challenging moments',
      'Explain, show, practice and feedback — not just handouts',
      'Grandparents and other caregivers can often join',
      'Included in our ABA programs',
    ],
    href: '/services/parent-training/',
    cta: 'Learn about parent training',
  },
  {
    id: 'school-based',
    title: 'School-Based ABA',
    icon: 'school',
    short: 'Therapist support in your child’s school environment.',
    intro:
      'School-based ABA helps your child practice classroom skills — following routines, transitions, asking for help and joining group activities — in the place they are needed, where the school permits it.',
    points: [
      'Support for routines, transitions and group participation',
      'Collaboration with teachers and staff, with your consent',
      'Consistent strategies across home, center and school',
      'A separate service from your child’s IEP that can support its goals',
    ],
    href: '/services/school-based-aba/',
    cta: 'Learn about school-based ABA',
  },
];

/** The three core programs shown on the homepage services section. */
export const PROGRAMS = [
  {
    slug: 'aba-therapy',
    title: 'Applied Behavior Analysis (ABA)',
    icon: 'chart' as IconName,
    image: 'program-aba',
    alt: 'Smiling boy stacking colorful blocks with a therapist during a play-based ABA session',
    text: 'Individualized, data-driven therapy using positive reinforcement to build skills and reduce challenging behaviors.',
    points: ['Individualized behavior plans', 'Positive reinforcement strategies', 'Communication & social skill building', 'Regular BCBA progress reviews'],
  },
  {
    slug: 'speech-language-therapy',
    title: 'Speech & Language Therapy',
    icon: 'speech' as IconName,
    image: 'program-speech',
    alt: 'Therapist holding up an apple picture card for a smiling girl, with picture cards on the table',
    text: 'Helping children develop verbal and non-verbal communication so they can express themselves fully.',
    points: ['Verbal & non-verbal communication', 'Articulation & language comprehension', 'Social & pragmatic language skills', 'AAC support when needed'],
  },
  {
    slug: 'occupational-therapy',
    title: 'Occupational Therapy (OT)',
    icon: 'hand' as IconName,
    image: 'program-ot',
    alt: 'Young boy working on a tabletop picture activity next to labeled storage bins, with a therapist nearby',
    text: 'Building independence through fine motor development, sensory integration and self-care skill training.',
    points: ['Sensory integration therapy', 'Fine motor & coordination skills', 'Daily living & self-care skills', 'School readiness support'],
  },
] as const;
