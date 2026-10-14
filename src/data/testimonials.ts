/**
 * Family testimonials.
 *
 * The three quotes below appear on the business's current website. Before they
 * are shown on this site, the business must confirm each one is from a real
 * family who gave written permission to publish it. Set `verified: true` only
 * after that confirmation. Unverified entries are never rendered.
 *
 * Healthcare note: do not publish identifying details or clinical specifics
 * without consent. Review markup (star ratings) is intentionally NOT emitted —
 * Google does not show self-serving review stars for a business's own reviews.
 */
export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'United Autism Therapy has been a blessing for our family. Our son’s communication and social skills have grown incredibly.',
    name: 'Sarah M.',
    context: 'Parent, Westminster, CA',
    verified: false,
  },
  {
    quote: 'The in-home therapy changed everything for our daughter. Sessions are so productive and the parent training is genuinely helpful.',
    name: 'James & Linda R.',
    context: 'Parents, Orange County, CA',
    verified: false,
  },
  {
    quote: 'From the first consultation the whole team was warm and focused on our son. The school-based support helped him thrive.',
    name: 'Maria T.',
    context: 'Parent, Westminster, CA',
    verified: false,
  },
];

export const PUBLISHED_TESTIMONIALS = TESTIMONIALS.filter((t) => t.verified);
