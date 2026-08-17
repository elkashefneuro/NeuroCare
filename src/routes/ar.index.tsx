import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LibraryIndex } from "@/components/library/LibraryIndex";
import { ui } from "@/lib/i18n";

const title = "NeuroCare — أدلة للمرضى بالعربية والإنجليزية";
const description =
  "أدلة عصبية للمرضى مراجَعة بعناية من د. محمد إسماعيل، استشاري الأعصاب في دبي: السكتة الدماغية والنوبة العابرة، الصداع النصفي، الصرع والنوبات.";

export const Route = createFileRoute("/ar/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ar" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "/ar" },
      { rel: "alternate", hrefLang: "ar", href: "/ar" },
      { rel: "alternate", hrefLang: "en", href: "/en" },
      { rel: "alternate", hrefLang: "x-default", href: "/en" },
    ],
  }),
  component: ArabicLibrary,
});

function ArabicLibrary() {
  return (
    <SiteLayout
      locale="ar"
      languageSwitch={
        <Link
          to="/en"
          lang="en"
          aria-label={ui.ar.switchLanguageLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {ui.ar.switchLanguage}
        </Link>
      }
    >
      <LibraryIndex
        locale="ar"
        renderLink={(slug, children, className) => (
          <Link to="/ar/conditions/$slug" params={{ slug }} className={className}>
            {children}
          </Link>
        )}
      />
    </SiteLayout>
  );
}