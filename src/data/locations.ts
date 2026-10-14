/**
 * Physical locations. Only add a location here when the business actually
 * operates from that address (a real, staffed center that matches its Google
 * Business Profile). Do NOT create city pages for areas you only drive to —
 * cover those on the in-home service page instead.
 */
import { BUSINESS } from './site';

export const LOCATIONS = [
  {
    slug: 'westminster-ca',
    name: 'Westminster, CA',
    title: 'ABA Therapy Center in Westminster, CA',
    h1: 'Our Westminster, CA Autism Therapy Center',
    description:
      'Visit United Autism Therapy at 13571 Beach Blvd, Westminster, CA 92683. Center-based ABA, speech, OT and parent training, plus in-home ABA across Orange County.',
    address: BUSINESS.address,
    phone: BUSINESS.phone,
    services: ['aba-therapy', 'center-based-aba', 'in-home-aba', 'school-based-aba', 'parent-training', 'speech-language-therapy', 'occupational-therapy'],
  },
] as const;
