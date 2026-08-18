import { rawConditions } from "../src/content/conditions/index";

type SitemapEntry = { path: string; lastmod: string; alternates: Array<[string, string]> };

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (char) =>
    char === "<"
      ? "&lt;"
      : char === ">"
        ? "&gt;"
        : char === "&"
          ? "&amp;"
          : char === "'"
            ? "&apos;"
            : "&quot;",
  );

/**
 * Sitemap entries for every indexable URL.
 *
 * In-review guides carry `robots: noindex`, so listing them here would ask
 * crawlers to fetch pages we have already told them not to index.
 */
export function sitemapEntries(today = new Date().toISOString().slice(0, 10)): SitemapEntry[] {
  const indexAlternates: Array<[string, string]> = [
    ["en", "/en"],
    ["ar", "/ar"],
    ["x-default", "/en"],
  ];

  const entries: SitemapEntry[] = [
    { path: "/en", lastmod: today, alternates: indexAlternates },
    { path: "/ar", lastmod: today, alternates: indexAlternates },
  ];

  for (const condition of rawConditions) {
    if (condition.status !== "published") continue;
    const alternates: Array<[string, string]> = [
      ["en", `/en/conditions/${condition.slug}`],
      ["ar", `/ar/conditions/${condition.slug}`],
      ["x-default", `/en/conditions/${condition.slug}`],
    ];
    for (const locale of ["en", "ar"] as const) {
      entries.push({
        path: `/${locale}/conditions/${condition.slug}`,
        lastmod: condition.reviewedDate,
        alternates,
      });
    }
  }

  return entries;
}

/** Renders the sitemap XML for a given absolute origin (no trailing slash). */
export function renderSitemap(origin: string, today?: string): string {
  const body = sitemapEntries(today)
    .map((entry) => {
      const links = entry.alternates
        .map(
          ([hreflang, path]) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(origin + path)}" />`,
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${escapeXml(origin + entry.path)}</loc>`,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        links,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    body,
    "</urlset>",
    "",
  ].join("\n");
}
