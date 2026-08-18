import type { ReactNode } from "react";
import type { Block, Condition, Locale } from "@/content/schema";
import { formatDate, ui } from "@/lib/i18n";
import { isReviewOverdue } from "@/lib/review";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="mt-4 text-base leading-8 text-foreground">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="mt-4 space-y-2 ps-5 text-base leading-8">
              {block.items.map((item) => (
                <li key={item} className="list-disc marker:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        const emergency = block.tone === "emergency";
        return (
          <div
            key={index}
            className={`mt-6 rounded-lg border p-5 ${
              emergency ? "border-destructive bg-destructive/5" : "border-border bg-secondary"
            }`}
          >
            <p
              className={`font-serif text-lg font-semibold ${
                emergency ? "text-destructive" : "text-primary"
              }`}
            >
              {block.title}
            </p>
            <ul className="mt-3 space-y-2 ps-5 text-base leading-8">
              {block.items.map((item) => (
                <li key={item} className="list-disc marker:text-destructive">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export function ConditionArticle({
  condition,
  locale,
  backLink,
}: {
  condition: Condition;
  locale: Locale;
  backLink: ReactNode;
}) {
  const t = ui[locale];
  const content = condition[locale];
  const published = condition.status === "published";
  const reviewOverdue = isReviewOverdue(condition);
  const sections = content.sections ?? [];
  // A drafted but unapproved guide still renders its body, behind a prominent
  // notice, so the clinic can review it in place. These pages stay `noindex`.
  const hasDraftBody = !published && sections.length > 0;

  return (
    <article>
      <div className="print:hidden">{backLink}</div>

      <p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">
        {content.category}
      </p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {content.title}
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
        {content.summary}
      </p>

      {!published && (
        <aside
          role="note"
          aria-labelledby="draft-notice-heading"
          className="mt-6 rounded-lg border-2 border-destructive bg-destructive/5 p-5"
        >
          <p
            id="draft-notice-heading"
            className="font-serif text-lg font-semibold text-destructive"
          >
            {hasDraftBody ? t.draftNoticeTitle : t.statusReview}
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground">
            {hasDraftBody ? t.draftNotice : t.reviewNotice}
          </p>
        </aside>
      )}

      {published && reviewOverdue && (
        <p
          role="status"
          className="mt-6 rounded-lg border border-destructive bg-destructive/5 p-4 text-sm font-medium text-foreground"
        >
          {t.reviewOverdue}
        </p>
      )}

      {published && (
        <dl className="mt-8 grid gap-3 rounded-lg border border-border p-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground">{t.author_}</dt>
            <dd className="font-medium">{condition.author}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t.readTimeLabel}</dt>
            <dd className="font-medium">{t.readTime(condition.readTimeMinutes)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t.reviewed}</dt>
            <dd className="font-medium">
              <time dateTime={condition.reviewedDate}>
                {formatDate(condition.reviewedDate, locale)}
              </time>
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t.nextReview}</dt>
            <dd className="font-medium">
              <time dateTime={condition.nextReviewDate}>
                {formatDate(condition.nextReviewDate, locale)}
              </time>
            </dd>
          </div>
        </dl>
      )}

      {sections.length > 0 && (
        <>
          <nav aria-label={t.sectionsLabel} className="mt-8 print:hidden">
            <h2 className="text-sm font-medium text-muted-foreground">{t.sectionsLabel}</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {sections.map((section) => (
                <li key={section.key}>
                  <a
                    href={`#${section.key}`}
                    className="inline-flex min-h-11 items-center rounded-md border border-border px-3 text-sm hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {sections.map((section) => (
            <section
              key={section.key}
              id={section.key}
              aria-labelledby={`${section.key}-heading`}
              className="mt-12 scroll-mt-8 border-t border-border pt-8"
            >
              <h2
                id={`${section.key}-heading`}
                className="font-serif text-2xl font-semibold text-primary"
              >
                {section.heading}
              </h2>
              <Blocks blocks={section.blocks} />
              {section.key === "ask" && (
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="mt-6 inline-flex min-h-11 items-center rounded-md border border-accent px-4 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring print:hidden"
                >
                  {t.print}
                </button>
              )}
            </section>
          ))}

          {condition.sources.length > 0 && (
            <section
              aria-labelledby="sources-heading"
              className="mt-12 border-t border-border pt-8"
            >
              <h2 id="sources-heading" className="font-serif text-2xl font-semibold text-primary">
                {t.sources}
              </h2>
              <ul className="mt-4 space-y-2 ps-5 text-sm leading-7">
                {condition.sources.map((source) => (
                  <li key={source.url} className="list-disc">
                    <a
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      <aside className="mt-12 rounded-lg border border-border p-5 text-sm leading-7 text-muted-foreground">
        <p className="font-medium text-foreground">{t.disclaimer}</p>
        <p className="mt-2">{content.disclaimer}</p>
      </aside>
    </article>
  );
}
