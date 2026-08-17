import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LibraryIndex } from "@/components/library/LibraryIndex";
import { ui } from "@/lib/i18n";

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
      { property: "og:url", content: "/en" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/en" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "x-default", href: "/en" },
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
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-accent/35 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
