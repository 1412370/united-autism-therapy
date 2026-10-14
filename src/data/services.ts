/**
 * Service definitions. Drives the services index, service cards, navigation,
 * Service JSON-LD and the per-service FAQ block. Long-form copy for each page
 * lives in src/content/services/<slug>.md.
 *
 * Only services listed on the business's current website are included.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  /** SEO <title> (brand suffix added automatically). */
  seoTitle: string;
  h1: string;
  description: string;
  /** One-line summary for cards. */
  summary: string;
  /** 40–70 word self-contained answer shown at the top of the page (GEO). */
  answer?: string;
  /** Hero image key (see src/utils/images.ts). */
  image?: 'in-home' | 'what-is' | 'routines' | 'goals' | 'reinforcement' | 'data';
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** Parent service for breadcrumbs / silo (setting pages sit under ABA). */
  parent?: string;
  /** Schema.org serviceType. */
  serviceType: string;
  icon: 'blocks' | 'building' | 'home' | 'school' | 'family' | 'speech' | 'hand';
  highlights: string[];
  /** Supporting blog posts (slugs) — the cluster for this pillar. */
  relatedPosts: string[];
  faqs: ServiceFaq[];
}

export const SERVICES = [
  {
    slug: 'in-home-aba',
    name: 'In-Home ABA Therapy',
    seoTitle: 'In-Home ABA Therapy in Orange County, CA',
    h1: 'In-Home ABA Therapy in Westminster & Orange County',
    description:
      'In-home ABA therapy for children with autism across Westminster and Orange County, CA. BCBA-designed plans, skills taught in daily routines, parents coached.',
    summary: 'BCBA-designed ABA therapy in your home, built around your child’s everyday routines, with parents coached along the way.',
    answer:
      'In-home ABA therapy is Applied Behavior Analysis delivered in your family’s home. At United Autism Therapy, a Board Certified Behavior Analyst (BCBA) designs your child’s plan, a Registered Behavior Technician (RBT) works with your child during real routines like play, meals and getting dressed, and parents are coached so skills carry over between sessions. We serve families across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties, CA.',
    primaryKeyword: 'in home ABA therapy Orange County',
    secondaryKeywords: ['in home ABA therapy', 'in home ABA therapy Westminster', 'home-based ABA', 'ABA therapy at home', 'in home ABA therapy near me'],
    parent: 'aba-therapy',
    serviceType: 'In-home ABA therapy',
    icon: 'home',
    image: 'in-home',
    highlights: [
      'Therapy in your home, where your child is most comfortable',
      'Goals built around real routines: meals, play, dressing, bedtime',
      'Plans designed and supervised by BCBAs, delivered with RBTs',
      'Hands-on parent coaching during sessions',
      'Serving Orange, Riverside, San Diego, San Bernardino & Santa Clara Counties',
    ],
    relatedPosts: ['benefits-of-in-home-aba-therapy', 'what-happens-in-an-aba-therapy-session', 'preparing-your-home-for-aba', 'aba-in-everyday-family-routines', 'how-to-start-in-home-aba-therapy', 'center-based-vs-in-home-aba-therapy'],
    faqs: [
      {
        q: 'Do your therapists come to our home?',
        a: 'Yes. In-home ABA is our core service. Your child’s therapist comes to your home for scheduled sessions, and your BCBA visits to supervise, review progress and coach caregivers.',
      },
      {
        q: 'Do you provide in-home ABA therapy in my city?',
        a: 'We provide in-home ABA across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties. Call (714) 709-7819 to confirm availability for your neighborhood and schedule.',
      },
      {
        q: 'Does a parent need to be home during in-home sessions?',
        a: 'Yes, a parent or caregiver generally needs to be home during sessions. Being nearby also lets you see strategies in action and practice them with support.',
      },
      {
        q: 'What happens during an in-home session?',
        a: 'Sessions mix play, practice of target skills and real routines such as snack time or getting ready to go out. The therapist records data during the session so the BCBA can track progress and adjust the plan.',
      },
      {
        q: 'How do I prepare my home for ABA sessions?',
        a: 'You do not need special equipment. A space with limited distractions, access to your child’s favorite toys or activities, and a predictable schedule usually help. Your BCBA will make suggestions during intake.',
      },
    ],
  },
  {
    slug: 'aba-therapy',
    name: 'ABA Therapy',
    seoTitle: 'ABA Therapy in Westminster, CA',
    h1: 'ABA Therapy for Children With Autism in Westminster, CA',
    description:
      'Individualized ABA therapy for children with autism in Westminster and Orange County. BCBA-designed plans, center, home and school options. Free consultation.',
    summary: 'Individualized, play-based Applied Behavior Analysis designed by BCBAs around your child and family goals.',
    answer:
      'ABA therapy (Applied Behavior Analysis) is an evidence-based approach that uses positive reinforcement and play to help children with autism build communication, social, daily living and learning skills. At United Autism Therapy, BCBAs design each plan around the child and family, and therapy happens mainly in the home, with center and school options in Westminster and Orange County, CA.',
    image: 'what-is',
    primaryKeyword: 'ABA therapy Westminster CA',
    secondaryKeywords: ['ABA therapy', 'applied behavior analysis', 'ABA therapy Orange County', 'autism therapy Westminster', 'ABA therapy for children'],
    serviceType: 'Applied Behavior Analysis (ABA) therapy',
    icon: 'blocks',
    highlights: [
      'Individualized treatment plans designed by BCBAs',
      'Delivered mainly in your home, with center and school options',
      'Positive reinforcement and play-based teaching',
      'Parent training included so skills carry over at home',
    ],
    relatedPosts: ['what-is-aba-therapy', 'how-does-aba-therapy-work', 'aba-therapy-goals', 'positive-reinforcement-in-aba', 'data-driven-aba-therapy', 'bcba-vs-rbt'],
    faqs: [
      {
        q: 'Does my child need an autism diagnosis to start ABA therapy?',
        a: 'Most insurance plans, including Medi-Cal, require a diagnosis or a recommendation from a physician or psychologist before they authorize ABA. If you do not have one yet, call us and we can talk through next steps and who to contact.',
      },
      {
        q: 'How many hours of ABA therapy will my child need?',
        a: 'There is no single number. After an assessment, your child’s BCBA recommends hours based on your child’s needs and goals, your family’s schedule and what your insurance authorizes. The plan is reviewed as your child progresses.',
      },
      {
        q: 'Where do sessions take place?',
        a: 'Sessions can take place at our center on Beach Blvd in Westminster, in your home, or at school, depending on your child’s goals. Many families combine settings.',
      },
      {
        q: 'Is ABA therapy covered by insurance?',
        a: 'Many plans, including Medi-Cal, cover ABA therapy for children with an autism diagnosis. Coverage depends on your plan. Our team can help you understand your benefits and start the authorization process.',
      },
    ],
  },
  {
    slug: 'parent-training',
    name: 'Parent Training',
    seoTitle: 'ABA Parent Training in Westminster, CA',
    h1: 'ABA Parent Training & Caregiver Coaching',
    description:
      'Hands-on ABA parent training in Westminster and Orange County. Learn practical strategies to support communication, routines and behavior at home.',
    summary: 'Practical coaching so you can support your child’s progress in everyday life, not just during sessions.',
    answer:
      'ABA parent training is coaching for caregivers, led by your child’s BCBA. You learn practical strategies — reinforcement, routines, communication and handling challenging moments — then practice them with feedback, so your child gets consistent support at home, not only during therapy sessions. It is included in United Autism Therapy’s ABA programs.',
    image: 'routines',
    primaryKeyword: 'ABA parent training',
    secondaryKeywords: ['parent training autism', 'caregiver training ABA', 'parent coaching autism Orange County', 'parent involvement in ABA'],
    parent: 'aba-therapy',
    serviceType: 'ABA parent and caregiver training',
    icon: 'family',
    highlights: [
      'One-on-one coaching with your child’s BCBA',
      'Strategies for routines, communication and challenging moments',
      'Practice with feedback, not just handouts',
      'Goals set around what matters most to your family',
    ],
    relatedPosts: ['supporting-aba-therapy-at-home', 'aba-in-everyday-family-routines', 'positive-reinforcement-in-aba'],
    faqs: [
      {
        q: 'Why is parent training part of ABA therapy?',
        a: 'Children spend most of their time with family. When caregivers use the same strategies at home, children have more chances to practice new skills in everyday situations.',
      },
      {
        q: 'Do I need any background to take part in parent training?',
        a: 'No. Sessions start with your questions and your child’s current goals. Your BCBA explains strategies in plain language, shows them and then helps you practice.',
      },
      {
        q: 'Can other caregivers join, like grandparents or nannies?',
        a: 'Often, yes. Including the adults who care for your child regularly helps keep strategies consistent. Ask your BCBA about including them.',
      },
    ],
  },
  {
    slug: 'center-based-aba',
    name: 'Center-Based ABA',
    seoTitle: 'Center-Based ABA Therapy in Westminster, CA',
    h1: 'Center-Based ABA Therapy in Westminster',
    description:
      'Center-based ABA therapy at our Westminster, CA clinic: structured, play-based sessions with BCBA oversight and chances to practice social skills. Free consult.',
    summary: 'Structured, play-based sessions at our Westminster center with built-in opportunities to practice social skills.',
    primaryKeyword: 'center based ABA therapy Westminster',
    secondaryKeywords: ['center based ABA therapy', 'ABA clinic Orange County', 'ABA center near me', 'clinic-based ABA'],
    parent: 'aba-therapy',
    serviceType: 'Center-based ABA therapy',
    icon: 'building',
    highlights: [
      'A consistent, purpose-built learning environment',
      'Direct BCBA supervision on site',
      'Opportunities to practice skills alongside peers',
      'Helpful preparation for preschool and school routines',
    ],
    relatedPosts: ['center-based-vs-in-home-aba-therapy', 'what-happens-in-an-aba-therapy-session', 'how-to-choose-an-aba-provider'],
    faqs: [
      {
        q: 'What does a center-based ABA session look like?',
        a: 'Sessions mix one-on-one teaching with play, breaks and, when appropriate, small-group activities. Your child works with a Registered Behavior Technician while a BCBA oversees the plan and reviews data.',
      },
      {
        q: 'Can my child do both center-based and in-home ABA?',
        a: 'Yes. Many families combine settings so a child can learn in a structured environment and then practice the same skills at home. Your BCBA will recommend what fits your child.',
      },
      {
        q: 'Where is your center?',
        a: 'Our center is at 13571 Beach Blvd, Westminster, CA 92683. We are open Monday through Saturday, 8:00 AM to 6:00 PM.',
      },
    ],
  },
  {
    slug: 'school-based-aba',
    name: 'School-Based ABA',
    seoTitle: 'School-Based ABA Therapy in Orange County',
    h1: 'School-Based ABA Support in Orange County',
    description:
      'School-based ABA support for children with autism in Westminster and Orange County, helping kids practice learning, social and classroom skills where they learn.',
    summary: 'Support in the classroom so your child can practice learning, social and routine skills with teachers and peers.',
    primaryKeyword: 'school based ABA therapy Orange County',
    secondaryKeywords: ['school based ABA', 'ABA in schools', 'school based ABA services', 'classroom behavior support autism'],
    parent: 'aba-therapy',
    serviceType: 'School-based ABA therapy',
    icon: 'school',
    highlights: [
      'Practice skills in real classroom situations',
      'Support for transitions, routines and group participation',
      'Collaboration with teachers and school staff when permitted',
      'Consistent strategies across home, center and school',
    ],
    relatedPosts: ['center-based-vs-in-home-aba-therapy', 'autism-support-orange-county-parents', 'how-to-choose-an-aba-provider'],
    faqs: [
      {
        q: 'Does the school have to approve school-based ABA?',
        a: 'Yes. Providing services on a school campus requires the school’s permission, and policies vary by school and district. We can talk with you about options for your child’s situation.',
      },
      {
        q: 'Is school-based ABA the same as an IEP?',
        a: 'No. An IEP is a plan created by your school district under special education law. School-based ABA from a private provider is a separate service, although it can support goals your child is working on at school.',
      },
      {
        q: 'What skills can school-based ABA focus on?',
        a: 'Common focus areas include following classroom routines, transitions between activities, asking for help, participating in groups and playing with peers. Goals are set by your child’s BCBA with your input.',
      },
    ],
  },
  {
    slug: 'speech-language-therapy',
    name: 'Speech & Language Therapy',
    seoTitle: 'Speech Therapy for Autism in Westminster, CA',
    h1: 'Speech & Language Therapy for Children With Autism',
    description:
      'Speech and language therapy for children with autism in Westminster, CA. Support for spoken language, understanding, social communication and AAC. Free consult.',
    summary: 'Helping children develop verbal and non-verbal communication so they can express themselves.',
    primaryKeyword: 'speech therapy for autism Westminster',
    secondaryKeywords: ['speech therapy for autism', 'speech and language therapy', 'speech therapy Orange County autism', 'AAC therapy'],
    serviceType: 'Speech and language therapy',
    icon: 'speech',
    highlights: [
      'Support for spoken language and understanding',
      'Social communication and conversation skills',
      'Non-verbal communication and AAC options',
      'Coordination with your child’s ABA team',
    ],
    relatedPosts: ['speech-therapy-for-autism', 'aac-and-autism', 'early-intervention-for-autism'],
    faqs: [
      {
        q: 'My child does not talk yet. Can speech therapy still help?',
        a: 'Yes. Speech therapy supports all forms of communication, including gestures, pictures and speech-generating devices (AAC). Communication can grow in many ways.',
      },
      {
        q: 'Will using AAC stop my child from learning to talk?',
        a: 'According to the American Speech-Language-Hearing Association, AAC does not stop children from developing speech. It gives your child a way to communicate now.',
      },
      {
        q: 'How does speech therapy work with ABA?',
        a: 'When both teams share goals and strategies, your child gets consistent practice. We coordinate so communication goals are reinforced across sessions.',
      },
    ],
  },
  {
    slug: 'occupational-therapy',
    name: 'Occupational Therapy',
    seoTitle: 'Occupational Therapy for Autism in Westminster',
    h1: 'Occupational Therapy for Children With Autism',
    description:
      'Pediatric occupational therapy for children with autism in Westminster, CA: fine motor skills, sensory regulation and self-care routines. Free consultation.',
    summary: 'Building independence through fine motor development, sensory support and self-care skills.',
    primaryKeyword: 'occupational therapy for autism Westminster',
    secondaryKeywords: ['occupational therapy for autism', 'pediatric occupational therapy Orange County', 'sensory integration therapy', 'fine motor skills therapy'],
    serviceType: 'Pediatric occupational therapy',
    icon: 'hand',
    highlights: [
      'Fine motor skills like grasping, cutting and drawing',
      'Sensory processing and self-regulation support',
      'Self-care skills such as dressing and mealtime routines',
      'Strategies families can use at home',
    ],
    relatedPosts: ['occupational-therapy-for-autism', 'sensory-processing-and-autism', 'supporting-aba-therapy-at-home'],
    faqs: [
      {
        q: 'What is the difference between occupational therapy and ABA?',
        a: 'Occupational therapy focuses on the skills needed for daily activities, such as motor skills, sensory regulation and self-care. ABA uses principles of learning to build a wide range of skills. Many children benefit from both.',
      },
      {
        q: 'Can occupational therapy help with sensory sensitivities?',
        a: 'An occupational therapist can assess how your child responds to sensory input and suggest strategies and routines that help your child feel more regulated at home and school.',
      },
      {
        q: 'Does my child need a referral for occupational therapy?',
        a: 'Requirements depend on your insurance plan. Call us and we can help you figure out what your plan needs.',
      },
    ],
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof SERVICES)[number]['slug'];
export const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as [ServiceSlug, ...ServiceSlug[]];
export const getService = (slug: string): Service => {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
};
export const serviceUrl = (slug: string) => `/services/${slug}/`;
/** Ways families receive ABA (in-home, center, school, parent training) — part of the ABA program, not separate services. */
export const ABA_SETTINGS = SERVICES.filter((s) => 'parent' in s && s.parent === 'aba-therapy');
/** The ONLY services the business lists: ABA, Speech & Language Therapy, Occupational Therapy. */
export const CORE_SERVICE_SLUGS = ['aba-therapy', 'speech-language-therapy', 'occupational-therapy'] as const;
export const CORE_SERVICES = CORE_SERVICE_SLUGS.map((slug) => getService(slug));
