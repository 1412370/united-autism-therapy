/**
 * Single source of truth for business information (NAP) and site-wide settings.
 *
 * Every page, the footer, the contact page and all structured data read from
 * this file — change a value here and it updates everywhere, which keeps NAP
 * (Name / Address / Phone) consistent for local SEO.
 *
 * VERIFIED = taken from the business's current website (audited 2026-09-30).
 * Values in [BRACKETS] are placeholders that must be confirmed by the business
 * before launch. Components hide placeholder values automatically (see isSet()).
 */

export const SITE = {
  /** Production origin. No trailing slash. Also set in astro.config.mjs. */
  url: 'https://unitedautismcenter.com',
  name: 'United Autism Therapy',
  legalName: 'United Autism Therapy Inc.', // VERIFIED (footer copyright)
  tagline: 'Supporting Children. Empowering Families.', // from the client's logo
  defaultTitle: 'ABA Therapy for Children With Autism in Westminster, CA',
  defaultDescription:
    'ABA, speech and occupational therapy for children with autism in Westminster, CA, with in-home ABA across Orange, Riverside, San Diego, San Bernardino and Santa Clara Counties.',
  locale: 'en_US',
  lang: 'en',
  /** Default social share image (1200×630) in /public. */
  ogImage: '/images/og-default.jpg', // cropped from the client's header banner
  logo: '/images/logo.png',
  themeColor: '#0a5aa8',
} as const;

export const BUSINESS = {
  phone: '(714) 709-7819', // VERIFIED — client info.txt (2026-10-05); replaces (714) 724-7988 from the old site
  phoneE164: '+17147097819', // VERIFIED (derived)
  email: '[BUSINESS EMAIL]', // NOT LISTED on current site — confirm
  address: {
    street: '13571 Beach Blvd', // VERIFIED
    city: 'Westminster', // VERIFIED
    region: 'CA', // VERIFIED
    regionName: 'California',
    postalCode: '92683', // VERIFIED
    country: 'US',
  },
  /** Only set coordinates once confirmed from the Google Business Profile pin. */
  geo: { lat: null as number | null, lng: null as number | null },
  /** VERIFIED from current site. Used for display + openingHoursSpecification. */
  /** Confirmed by the business 2026-10-05. Used for display + openingHoursSpecification. */
  hours: [
    { days: 'Monday – Saturday', value: '8:00 AM – 6:00 PM', schema: { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '18:00' } },
    { days: 'Sunday', value: 'Closed', schema: null },
  ],
  hoursShort: 'Mon–Sat 8 AM–6 PM',
  /** Counties served — confirmed by the business 2026-10-05. Drives schema areaServed, llms.txt and the service-area lists. */
  counties: ['Orange County', 'Riverside County', 'San Diego County', 'San Bernardino County', 'Santa Clara County'],
  areaServed: ['Westminster, CA', 'Orange County, CA', 'Riverside County, CA', 'San Diego County, CA', 'San Bernardino County, CA', 'Santa Clara County, CA'],
  /** Short human-readable list, e.g. for hero copy. */
  countiesShort: 'Orange, Riverside, San Diego, San Bernardino & Santa Clara Counties',
  /**
   * Orange County cities where in-home ABA is CONFIRMED available. Leave empty
   * until the business verifies the list — the Orange County page then asks
   * families to call to confirm instead of naming cities.
   * Example: ['Westminster', 'Garden Grove', 'Huntington Beach']
   */
  servedCities: [] as string[],
  /** Credentials exactly as stated on the current site. Do not embellish. */
  credentialsStatement: 'Care is designed and supervised by Board Certified Behavior Analysts (BCBAs) and delivered with Registered Behavior Technicians (RBTs).',
  /** Google Business Profile / Maps links — fill in once claimed/verified. */
  googleBusinessProfileUrl: '[GOOGLE BUSINESS PROFILE URL]',
  mapsQuery: '13571 Beach Blvd, Westminster, CA 92683',
  foundingYear: '[FOUNDING YEAR]',
  npi: '[NPI NUMBER]',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61595161883736', // VERIFIED (info.txt)
    instagram: 'https://www.instagram.com/united_autism_therapy/', // VERIFIED (info.txt)
    linkedin: '[LINKEDIN URL]',
    youtube: '[YOUTUBE URL]',
  },
} as const;

export const INTEGRATIONS = {
  /**
   * Contact form endpoint. The site is static, so the form posts to a form
   * service (Formspree, Basin, Web3Forms, your existing LeadConnector/GHL form
   * webhook, or a PHP mail script on your host). Leave the placeholder to show
   * a phone-first fallback message instead of a broken form.
   */
  formEndpoint: '[FORM ENDPOINT URL]', // paste the Google Apps Script Web app URL (…/exec) here — see docs/google-apps-script/SETUP.md
  /** GA4 measurement ID, e.g. G-XXXXXXXXXX. Empty = no analytics script loaded. */
  ga4Id: '',
  /** Google Tag Manager container, e.g. GTM-XXXXXXX. Use GA4 *or* GTM, not both. */
  gtmId: '',
  /** Google Search Console HTML-tag verification token (content="..."). */
  googleSiteVerification: '',
  bingSiteVerification: '',
  /**
   * Emit FAQPage JSON-LD for visible FAQs. Valid markup, but since 2023 Google
   * shows FAQ rich results only for a small set of authoritative sites — do not
   * expect a rich result from it.
   */
  faqSchema: true,
} as const;

/** True when a value has been filled in (not empty and not a [PLACEHOLDER]). */
export function isSet(value: string | null | undefined): value is string {
  return !!value && !/^\[.*\]$/.test(value.trim());
}

export const fullAddress = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region} ${BUSINESS.address.postalCode}`;
export const telHref = `tel:${BUSINESS.phoneE164}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`;
export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();
