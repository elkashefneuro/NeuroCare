import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LibraryIndex } from "@/components/library/LibraryIndex";
import { openGraphLocale, ui } from "@/lib/i18n";
import { absoluteUrl, canonicalUrl } from "@/lib/site";
import { libraryJsonLd } from "@/lib/structured-data";
import { conditions } from "@/content/conditions";

const title = "NeuroCare — patient guides in English and Arabic";
const description =
  "Carefully reviewed neurology patient guides from Dr Mohamed Ismaiel, Neurologist, Dubai. Stroke and TIA, migraine, epilepsy and seizures.";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: ui.en.siteName },
      { property: "og:locale", content: openGraphLocale.en },
      { property: "og:locale:alternate", content: openGraphLocale.ar },
      ...(absoluteUrl("/en") ? [{ property: "og:url", content: absoluteUrl("/en")! }] : []),
      { name: "twitter:card", content: "summary" },
      { "script:ld+json": libraryJsonLd(conditions, "en") },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl("/en") },
      { rel: "alternate", hrefLang: "en", href: canonicalUrl("/en") },
      { rel: "alternate", hrefLang: "ar", href: canonicalUrl("/ar") },
      { rel: "alternate", hrefLang: "x-default", href: canonicalUrl("/en") },
    ],
  }),
  component: EnglishLibrary,
});

function EnglishLibrary() {
  return (
    <SiteLayout
      locale="en"
      languageSwitch={
        <Link
          to="/ar"
          lang="ar"
          aria-label={ui.en.switchLanguageLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {ui.en.switchLanguage}
        </Link>
      }
    >
      <LibraryIndex
        locale="en"
        renderLink={(slug, children, className) => (
          <Link to="/en/conditions/$slug" params={{ slug }} className={className}>
            {children}
          </Link>
        )}
      />
    </SiteLayout>
  );
}
