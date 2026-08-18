/**
 * Canonical origin of the deployed site, e.g. `https://neurocare.example`.
 *
 * Set `VITE_SITE_URL` at build time to emit absolute canonical, hreflang and
 * Open Graph URLs plus a sitemap. It is intentionally not defaulted to a guessed
 * domain: a canonical tag pointing at the wrong host is worse for a clinic's
 * search presence than no canonical host at all.
 */
export const siteOrigin = normaliseOrigin(import.meta.env["VITE_SITE_URL"] as string | undefined);

function normaliseOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim().replace(/\/+$/, "");
  return trimmed.length > 0 ? trimmed : undefined;
}

/**
 * Absolute URL when an origin is configured, otherwise the root-relative path.
 * Safe for `rel="canonical"` and `hreflang`, which crawlers resolve against the
 * requesting origin when relative.
 */
export function canonicalUrl(path: string): string {
  return siteOrigin ? `${siteOrigin}${path}` : path;
}

/**
 * Absolute URL, or `undefined` when no origin is configured. Use for Open Graph
 * `og:url`, which has no valid relative form — omitting the tag beats emitting
 * one that no social crawler can resolve.
 */
export function absoluteUrl(path: string): string | undefined {
  return siteOrigin ? `${siteOrigin}${path}` : undefined;
}
