import type { Condition, Locale } from "@/content/schema";
import { canonicalUrl } from "@/lib/site";
import { ui } from "@/lib/i18n";

/**
 * Schema.org JSON-LD.
 *
 * Patient-education pages compete on trust signals as much as on text, so the
 * author, the review dates and the cited guidelines are the parts worth making
 * machine-readable. Only published guides are described — in-review pages are
 * `noindex` and must not advertise themselves as reviewed medical content.
 */

const authorNode = (condition: Condition) => ({
  "@type": "Person",
  name: condition.author,
  jobTitle: "Neurologist",
});

/** `MedicalWebPage` describing one published condition guide. */
export function conditionJsonLd(condition: Condition, locale: Locale) {
  const content = condition[locale];
  const path = `/${locale}/conditions/${condition.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": canonicalUrl(path),
    url: canonicalUrl(path),
    name: content.title,
    headline: content.metaTitle,
    description: content.metaDescription,
    inLanguage: locale,
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    author: authorNode(condition),
    reviewedBy: authorNode(condition),
    lastReviewed: condition.reviewedDate,
    datePublished: condition.reviewedDate,
    dateModified: condition.reviewedDate,
    isPartOf: {
      "@type": "WebSite",
      name: ui[locale].siteName,
      url: canonicalUrl(`/${locale}`),
    },
    citation: condition.sources.map((source) => ({
      "@type": "CreativeWork",
      name: source.label,
      url: source.url,
    })),
  };
}

/** `CollectionPage` describing the library index for one locale. */
export function libraryJsonLd(conditions: Condition[], locale: Locale) {
  const t = ui[locale];
  const published = conditions.filter((condition) => condition.status === "published");

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": canonicalUrl(`/${locale}`),
    url: canonicalUrl(`/${locale}`),
    name: t.libraryHeading,
    description: t.intro,
    inLanguage: locale,
    isPartOf: {
      "@type": "WebSite",
      name: t.siteName,
      url: canonicalUrl(`/${locale}`),
    },
    hasPart: published.map((condition) => ({
      "@type": "MedicalWebPage",
      "@id": canonicalUrl(`/${locale}/conditions/${condition.slug}`),
      url: canonicalUrl(`/${locale}/conditions/${condition.slug}`),
      name: condition[locale].title,
      lastReviewed: condition.reviewedDate,
    })),
  };
}
