import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ConditionArticle } from "@/components/library/ConditionArticle";
import { getCondition } from "@/content/conditions";
import { openGraphLocale, ui } from "@/lib/i18n";
import { absoluteUrl, canonicalUrl } from "@/lib/site";
import { conditionJsonLd } from "@/lib/structured-data";

export const Route = createFileRoute("/en/conditions/$slug")({
  loader: ({ params }) => {
    const condition = getCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { condition } = loaderData;
    const { metaTitle, metaDescription } = condition.en;
    const selfPath = `/en/conditions/${params.slug}`;
    const otherPath = `/ar/conditions/${params.slug}`;
    const defaultPath = `/en/conditions/${params.slug}`;
    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: ui.en.siteName },
        { property: "og:locale", content: openGraphLocale.en },
        { property: "og:locale:alternate", content: openGraphLocale.ar },
        ...(absoluteUrl(selfPath) ? [{ property: "og:url", content: absoluteUrl(selfPath)! }] : []),
        { name: "twitter:card", content: "summary" },
        ...(condition.status === "published"
          ? [{ "script:ld+json": conditionJsonLd(condition, "en") }]
          : [{ name: "robots", content: "noindex" }]),
      ],
      links: [
        { rel: "canonical", href: canonicalUrl(selfPath) },
        { rel: "alternate", hrefLang: "en", href: canonicalUrl(selfPath) },
        { rel: "alternate", hrefLang: "ar", href: canonicalUrl(otherPath) },
        { rel: "alternate", hrefLang: "x-default", href: canonicalUrl(defaultPath) },
      ],
    };
  },
  component: EnglishCondition,
});

function EnglishCondition() {
  const { condition } = Route.useLoaderData();
  const { slug } = Route.useParams();

  return (
    <SiteLayout
      locale="en"
      languageSwitch={
        <Link
          to="/ar/conditions/$slug"
          params={{ slug }}
          lang="ar"
          aria-label={ui.en.switchLanguageLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {ui.en.switchLanguage}
        </Link>
      }
    >
      <ConditionArticle
        condition={condition}
        locale="en"
        backLink={
          <Link
            to="/en"
            className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {ui.en.backToLibrary}
          </Link>
        }
      />
    </SiteLayout>
  );
}
