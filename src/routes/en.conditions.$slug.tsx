import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ConditionArticle } from "@/components/library/ConditionArticle";
import { getCondition } from "@/content/conditions";
import { ui } from "@/lib/i18n";

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
    return {
      meta: [
        { title: metaTitle },
        { name: "description", content: metaDescription },
        { property: "og:title", content: metaTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/en/conditions/${params.slug}` },
        { name: "twitter:card", content: "summary" },
        ...(condition.status === "published" ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: [
        { rel: "canonical", href: `/en/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "en", href: `/en/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "ar", href: `/ar/conditions/${params.slug}` },
        { rel: "alternate", hrefLang: "x-default", href: `/en/conditions/${params.slug}` },
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
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-semibold text-primary shadow-sm transition-colors hover:border-accent/35 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
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
            className="inline-flex min-h-11 items-center rounded-lg text-sm font-semibold text-accent underline decoration-accent/35 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {ui.en.backToLibrary}
          </Link>
        }
      />
    </SiteLayout>
  );
}
