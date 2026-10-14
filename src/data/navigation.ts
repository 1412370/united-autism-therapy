export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Applied Behavior Analysis (ABA)', href: '/services/aba-therapy/' },
      { label: 'Speech & Language Therapy', href: '/services/speech-language-therapy/' },
      { label: 'Occupational Therapy (OT)', href: '/services/occupational-therapy/' },
    ],
  },
  { label: 'About', href: '/about/' },
  { label: 'Insurance', href: '/insurance/' },
  { label: 'Resources', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const FOOTER_NAV: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Services',
    links: MAIN_NAV[0].children!,
  },
  {
    heading: 'Families',
    links: [
      { label: 'Insurance & Medi-Cal', href: '/insurance/' },
      { label: 'Parent Resources', href: '/blog/category/parent-resources/' },
      { label: 'What Is ABA Therapy?', href: '/blog/what-is-aba-therapy/' },
      { label: 'How to Start In-Home ABA', href: '/blog/how-to-start-in-home-aba-therapy/' },
      { label: 'Autism Support in Orange County', href: '/blog/autism-support-orange-county-parents/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about/' },
      { label: 'Westminster Location', href: '/locations/westminster-ca/' },
      { label: 'Orange County Service Area', href: '/locations/orange-county-ca/' },
      { label: 'FAQ', href: '/faq/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];

export const LEGAL_NAV: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Terms of Use', href: '/terms/' },
  { label: 'Medical Disclaimer', href: '/medical-disclaimer/' },
  { label: 'Accessibility', href: '/accessibility/' },
];
