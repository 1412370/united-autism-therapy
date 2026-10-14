/**
 * FAQs. Groups follow the client's SEO/GEO spreadsheet (ABA FAQ, In-Home ABA
 * FAQ, Therapist FAQ, Insurance FAQ). Answers are short, self-contained and
 * quotable (GEO), and only state verified business facts.
 * The homepage shows GENERAL_FAQS; /faq/ shows every group.
 */
export interface Faq {
  q: string;
  a: string;
  /** Optional internal link for "Learn more". */
  link?: { href: string; label: string };
}

export interface FaqGroup { id: string; title: string; items: Faq[]; }

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'aba',
    title: 'About ABA therapy',
    items: [
      { q: 'What is ABA therapy?', a: 'ABA (Applied Behavior Analysis) is an evidence-based approach that uses positive reinforcement to help children build communication, social, play and daily living skills, and to reduce behaviors that get in the way of learning. Every plan is individualized, and progress is measured along the way.', link: { href: '/blog/what-is-aba-therapy/', label: 'Read our parent’s guide to ABA' } },
      { q: 'How often does ABA therapy happen?', a: 'There is no single schedule. After an assessment, your child’s BCBA recommends a number of hours based on your child’s needs and goals, your family’s schedule and what your insurance authorizes. The plan is reviewed as your child progresses.', link: { href: '/blog/how-long-does-aba-therapy-last/', label: 'How long ABA therapy lasts' } },
      { q: 'What kinds of goals does ABA work on?', a: 'Common goals include communication (asking for things, answering questions), social and play skills, daily living skills such as dressing and handwashing, learning readiness, coping with transitions, and safety. Goals are chosen with you, based on what matters in your child’s daily life.', link: { href: '/blog/aba-therapy-goals/', label: 'Examples of ABA therapy goals' } },
      { q: 'How do I know if my child might benefit from ABA?', a: 'If your child has an autism diagnosis, or you have noticed differences such as delayed speech, difficulty with social interaction, repetitive behaviors or strong sensory sensitivities, ABA may help. A free consultation is a no-pressure way to talk through your child’s needs.', link: { href: '/blog/early-signs-of-autism/', label: 'Early signs of autism' } },
      { q: 'Do you diagnose autism?', a: 'No. We provide therapy services. If your child does not have a diagnosis yet, start with your pediatrician, and we are happy to talk through the steps families in Orange County usually take.', link: { href: '/blog/when-to-get-an-autism-evaluation/', label: 'When to get an autism evaluation' } },
    ],
  },
  {
    id: 'in-home',
    title: 'In-home ABA therapy',
    items: [
      { q: 'Do your therapists come to our home?', a: 'Yes. In-home ABA is our core service. Your child’s therapist comes to your home for scheduled sessions, and your BCBA supervises the program, reviews progress and coaches caregivers. We serve families across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties.', link: { href: '/services/in-home-aba/', label: 'In-home ABA therapy' } },
      { q: 'What happens during an in-home ABA session?', a: 'Sessions mix play, focused practice of your child’s goals and real routines such as snack time, getting dressed or cleaning up. The therapist records data during the session so the BCBA can see what is working and adjust the plan.', link: { href: '/blog/what-happens-in-an-aba-therapy-session/', label: 'What happens during a home session' } },
      { q: 'Does a parent need to be home during sessions?', a: 'Yes, a parent or caregiver generally needs to be home during in-home sessions. Being nearby also lets you see strategies in action and practice them with support from the team.', link: { href: '/services/parent-training/', label: 'Parent training' } },
      { q: 'How should we prepare our home for ABA?', a: 'You do not need special equipment. A space with fewer distractions, a few of your child’s favorite toys or snacks, and a predictable session time usually help. Your BCBA will make suggestions during intake.', link: { href: '/blog/preparing-your-home-for-aba/', label: 'Preparing your home for ABA' } },
      { q: 'Do you offer options besides in-home therapy?', a: 'Yes. Alongside in-home ABA we offer center-based sessions in Westminster, school-based support where schools permit it, parent training, speech and language therapy, and occupational therapy.', link: { href: '/services/', label: 'All services' } },
    ],
  },
  {
    id: 'team',
    title: 'Our therapists',
    items: [
      { q: 'Who will work with my child?', a: 'Treatment plans are designed and supervised by Board Certified Behavior Analysts (BCBAs). Day-to-day sessions are delivered by Registered Behavior Technicians (RBTs) working under that supervision.', link: { href: '/blog/bcba-vs-rbt/', label: 'BCBA vs RBT: who does what' } },
      { q: 'What is a BCBA?', a: 'A Board Certified Behavior Analyst holds a graduate-level certification from the Behavior Analyst Certification Board (BACB). BCBAs assess your child, write the treatment plan, supervise therapists, analyze progress data and coach parents.', link: { href: '/blog/bcba-vs-rbt/', label: 'Learn more about BCBAs' } },
      { q: 'What is an RBT?', a: 'A Registered Behavior Technician holds a paraprofessional certification from the BACB. RBTs work directly with your child during sessions, follow the BCBA’s plan, and collect the data used to track progress.' },
      { q: 'How is my child’s progress monitored?', a: 'Therapists record data during every session. Your BCBA reviews it regularly, adjusts goals and strategies, and shares progress with you in plain language so you know what is changing and why.', link: { href: '/blog/data-driven-aba-therapy/', label: 'How ABA tracks progress' } },
      { q: 'Can I check a therapist’s credentials?', a: 'Yes. The BACB keeps a public certificant registry where you can confirm a BCBA’s or RBT’s certification. We encourage families to ask about credentials and supervision.', link: { href: '/blog/how-to-choose-an-aba-provider/', label: 'Questions to ask an ABA provider' } },
    ],
  },
  {
    id: 'insurance',
    title: 'Insurance & Medi-Cal',
    items: [
      { q: 'Is ABA therapy covered by insurance or Medi-Cal?', a: 'Many plans, including Medi-Cal, cover ABA therapy for children with an autism diagnosis. Coverage and requirements vary by plan. Call (714) 709-7819 and our team will help you understand your coverage and start the authorization process.', link: { href: '/insurance/', label: 'Insurance & Medi-Cal' } },
      { q: 'What is prior authorization?', a: 'Prior authorization is a health plan’s review and approval of a service before it starts. For ABA it usually involves a diagnosis or recommendation, an assessment and a treatment plan. Approval does not guarantee that every requested hour will be covered.', link: { href: '/blog/how-to-start-aba-through-insurance/', label: 'How to start ABA through insurance' } },
      { q: 'What documents should I have ready?', a: 'Your child’s insurance card, any diagnosis report or recommendation from a physician or psychologist, your pediatrician’s contact information, and any previous evaluations. Please share insurance details by phone rather than through our website form.' },
      { q: 'How do I know if a provider is in my network?', a: 'Call the member services number on your insurance card and ask whether the provider is in network for ABA (behavioral health) services. You can also call us and we will help you check.' },
    ],
  },
  {
    id: 'visit',
    title: 'Location & hours',
    items: [
      { q: 'Where are you located?', a: 'United Autism Therapy is based at 13571 Beach Blvd, Westminster, CA 92683. We provide in-home ABA to families across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties.', link: { href: '/locations/westminster-ca/', label: 'Our Westminster location' } },
      { q: 'What are your hours?', a: 'We are open Monday through Saturday, 8:00 AM to 6:00 PM, and closed on Sundays.' },
      { q: 'What happens at the free consultation?', a: 'We listen to your concerns and goals, answer your questions, explain the intake and insurance steps, and help you decide whether in-home ABA is a good fit. There is no obligation.', link: { href: '/blog/how-to-start-in-home-aba-therapy/', label: 'How to start in-home ABA' } },
    ],
  },
];

const byQ = (q: string) => {
  const f = FAQ_GROUPS.flatMap((g) => g.items).find((x) => x.q === q);
  if (!f) throw new Error(`FAQ not found: ${q}`);
  return f;
};

/** Shown on the homepage. */
export const GENERAL_FAQS: Faq[] = [
  byQ('Do your therapists come to our home?'),
  byQ('What is ABA therapy?'),
  byQ('Who will work with my child?'),
  byQ('Is ABA therapy covered by insurance or Medi-Cal?'),
  byQ('Does a parent need to be home during sessions?'),
  byQ('Where are you located?'),
];
