import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ConditionArticle } from "@/components/library/ConditionArticle";
import { getCondition } from "@/content/conditions";
import { ui } from "@/lib/i18n";

export const Route = createFileRoute("/ar/conditions/$slug")({
  loader: ({ params }) => {
    const condition = getCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "غير متاح" }, { name: "robots", content: "noindex" }] };
    }
    const { condition } = loaderData;
    const { metaTitle, metaDescription } = condition.ar;
    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/ar/conditions/${params.slug}` },
        { name: "twitter:card", content: "summary" },
        ...(condition.status === "published"
          ? []
          : [{ name: "robots", content: "noindex" }]),
      ],
      links: [
        { rel: "canonical", href: `/ar/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "ar", href: `/ar/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "en", href: `/en/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "x-default", href: `/en/conditions/${params.slug}` },
      ],
    };
  },
  component: ArabicCondition,
});

function ArabicCondition() {
  const { condition } = Route.useLoaderData();
  const { slug } = Route.useParams();

  return (
    <SiteLayout
      locale="ar"
      languageSwitch={
        <Link
          to="/en/conditions/$slug"
          params={{ slug }}
          lang="en"
          aria-label={ui.ar.switchLanguageLabel}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {ui.ar.switchLanguage}
        </Link>
      }
    >
      <ConditionArticle
        condition={condition}
        locale="ar"
        backLink={
          <Link
            to="/ar"
            className="inline-flex min-h-11 items-center text-sm text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {ui.ar.backToLibrary}
          </Link>
        }
      />
    </SiteLayout>
  );
}