/**
 * JSON-LD builders (schema.org). All business facts come from src/data/site.ts
 * so structured data always matches the visible NAP. Placeholder values are
 * omitted automatically rather than published.
 */
import { SITE, BUSINESS, isSet, absoluteUrl, mapsUrl } from '../data/site';
import type { Service } from '../data/services';

type Json = Record<string, unknown>;

export const ORG_ID = `${SITE.url}/#organization`;
export const BUSINESS_ID = `${SITE.url}/#business`;
export const WEBSITE_ID = `${SITE.url}/#website`;

const sameAs = (): string[] =>
  [...(Object.values(BUSINESS.social) as string[]), BUSINESS.googleBusinessProfileUrl as string].filter(isSet);

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.country,
});

export function organizationSchema(): Json {
  const s: Json = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo), width: 900, height: 293 },
    slogan: SITE.tagline,
    image: absoluteUrl(SITE.ogImage),
    telephone: BUSINESS.phoneE164,
    address: postalAddress(),
  };
  if (isSet(BUSINESS.email)) s.email = BUSINESS.email;
  if (isSet(BUSINESS.foundingYear)) s.foundingDate = BUSINESS.foundingYear;
  const links = sameAs();
  if (links.length) s.sameAs = links;
  return s;
}

/** Local business entity — MedicalBusiness is a LocalBusiness subtype. */
export function localBusinessSchema(): Json {
  const s: Json = {
    '@type': 'MedicalBusiness',
    '@id': BUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    telephone: BUSINESS.phoneE164,
    address: postalAddress(),
    hasMap: isSet(BUSINESS.googleBusinessProfileUrl) ? BUSINESS.googleBusinessProfileUrl : mapsUrl,
    areaServed: [
      { '@type': 'City', name: 'Westminster', containedInPlace: { '@type': 'State', name: 'California' } },
      ...BUSINESS.counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c}, California` })),
    ],
    openingHoursSpecification: BUSINESS.hours
      .filter((h) => h.schema)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', ...h.schema })),
    parentOrganization: { '@id': ORG_ID },
    medicalSpecialty: 'Pediatric',
    knowsAbout: ['Applied Behavior Analysis', 'Autism spectrum disorder', 'Speech-language therapy', 'Occupational therapy', 'Parent training'],
  };
  if (BUSINESS.geo.lat !== null && BUSINESS.geo.lng !== null) {
    s.geo = { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng };
  }
  if (isSet(BUSINESS.email)) s.email = BUSINESS.email;
  const links = sameAs();
  if (links.length) s.sameAs = links;
  return s;
}

export function websiteSchema(): Json {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: { '@id': ORG_ID },
  };
}

export interface Crumb { name: string; href: string; }
export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.href),
    })),
  };
}

export function serviceSchema(service: Service): Json {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(`/services/${service.slug}/`)}#service`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.answer ?? service.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Westminster, CA' },
      ...BUSINESS.counties.map((c) => ({ '@type': 'AdministrativeArea', name: `${c}, CA` })),
    ],
    audience: { '@type': 'PeopleAudience', audienceType: 'Children with autism and their families' },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export interface ArticleInput {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: Date;
  dateModified?: Date;
  authorName: string;
  authorUrl: string;
  authorType: 'Person' | 'Organization';
  section: string;
  keywords: string[];
  wordCount: number;
  aboutUrl?: string;
  citations: string[];
}

export function blogPostingSchema(a: ArticleInput): Json {
  return {
    '@type': 'BlogPosting',
    '@id': `${a.url}#article`,
    headline: a.title,
    description: a.description,
    url: a.url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
    image: [a.image],
    datePublished: a.datePublished.toISOString(),
    dateModified: (a.dateModified ?? a.datePublished).toISOString(),
    author: { '@type': a.authorType, name: a.authorName, url: absoluteUrl(a.authorUrl) },
    publisher: { '@id': ORG_ID },
    articleSection: a.section,
    keywords: a.keywords.join(', '),
    wordCount: a.wordCount,
    inLanguage: SITE.lang,
    isAccessibleForFree: true,
    ...(a.aboutUrl ? { about: { '@id': `${a.aboutUrl}#service` } } : {}),
    ...(a.citations.length ? { citation: a.citations } : {}),
  };
}

/** Wrap several nodes into one @graph document. */
export const graph = (...nodes: (Json | null | undefined | false)[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
