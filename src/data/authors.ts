/**
 * Article authors. For health content (E-E-A-T), replace the team entry with
 * real, verified clinicians — name, credential (e.g. "BCBA"), a short bio and
 * a BACB certificant-registry link — once the business confirms them.
 * Never publish a credential that has not been verified.
 */
export const AUTHORS = {
  'uat-clinical-team': {
    name: 'United Autism Therapy Clinical Team',
    role: 'ABA, speech and occupational therapy team',
    bio: 'Written by the United Autism Therapy team in Westminster, CA. Our programs are designed and supervised by Board Certified Behavior Analysts (BCBAs). Articles are for general education and are reviewed for accuracy against the cited sources.',
    url: '/about/',
    type: 'Organization' as const,
  },
} as const;

export type AuthorId = keyof typeof AUTHORS;
export const AUTHOR_IDS = Object.keys(AUTHORS) as [AuthorId, ...AuthorId[]];
