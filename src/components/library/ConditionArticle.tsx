import {
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck2,
  Check,
  CircleAlert,
  Clock3,
  ExternalLink,
  Eye,
  HeartHandshake,
  Info,
  MessageCircleQuestion,
  Pill,
  Printer,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Block, Condition, Locale, SectionKey } from "@/content/schema";
import { formatDate, ui } from "@/lib/i18n";

const sectionIcons: Record<SectionKey, LucideIcon> = {
  understand: BrainCircuit,
  recognise: Eye,
  assess: Stethoscope,
  treat: Pill,
  live: HeartHandshake,
  ask: MessageCircleQuestion,
};

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-5">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className="mt-4 text-[1.02rem] leading-8 text-foreground/90">
              {block.text}
            </p>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="mt-5 space-y-3">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[1.01rem] leading-8">
                  <span
                    aria-hidden="true"
                    className="mt-[0.68rem] size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        const emergency = block.tone === "emergency";
        const Icon = emergency ? CircleAlert : Info;

        return (
          <aside
            key={index}
            className={`mt-7 overflow-hidden rounded-2xl border ${
              emergency
                ? "border-destructive/25 bg-destructive/[0.045]"
                : "border-accent/20 bg-accent/[0.045]"
            }`}
          >
            <div
              className={`flex items-center gap-3 border-b px-5 py-4 ${
                emergency
                  ? "border-destructive/15 bg-destructive/[0.035] text-destructive"
                  : "border-accent/15 bg-accent/[0.035] text-primary"
              }`}
            >
              <span
                className={`grid size-9 shrink-0 place-items-center rounded-xl ${
                  emergency ? "bg-destructive/10" : "bg-accent/10 text-accent"
                }`}
              >
                <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
              </span>
              <p className="font-serif text-lg font-semibold">{block.title}</p>
            </div>
            <ul className="space-y-3 px-5 py-5">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.98rem] leading-7">
                  <Check
                    aria-hidden="true"
                    className={`mt-1 size-4 shrink-0 ${
                      emergency ? "text-destructive" : "text-accent"
                    }`}
                    strokeWidth={2.4}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        );
      })}
    </div>
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
  const sections = content.sections ?? [];
  const displayedAuthor = locale === "ar" ? ui.ar.author : condition.author;

  return (
    <article className="pb-6">
      <div className="mb-5 print:hidden">{backLink}</div>

      <header className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_80px_-52px_rgba(10,34,64,0.72)]">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="p-6 sm:p-9 lg:p-11">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {content.category}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                  published
                    ? "border-accent/20 bg-accent/[0.04] text-accent"
                    : "border-border bg-secondary text-muted-foreground"
                }`}
              >
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                {published ? t.statusPublished : t.statusReview}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-primary text-balance sm:text-5xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {content.summary}
            </p>

            <button
              type="button"
              onClick={() => window.print()}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-accent/35 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring print:hidden"
            >
              <Printer aria-hidden="true" className="size-4 text-accent" />
              {t.print}
            </button>
          </div>

          <div className="border-t border-border bg-secondary/55 p-6 sm:p-8 lg:border-s lg:border-t-0 lg:p-9">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                <BookOpenCheck aria-hidden="true" className="size-5" />
              </span>
              <h2 className="font-serif text-xl font-semibold text-primary">{t.whatYouNeed}</h2>
            </div>
            <ul className="mt-5 space-y-4">
              {content.keyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-6 text-foreground/85"
                >
                  <Check
                    aria-hidden="true"
                    className="mt-1 size-4 shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {!published && (
          <p
            role="status"
            className="border-t border-border bg-[oklch(0.985_0.025_92)] px-6 py-4 text-sm font-medium text-foreground sm:px-9"
          >
            {t.statusReview} — {t.reviewNotice}
          </p>
        )}
      </header>

      <section aria-labelledby="guide-details" className="mt-6">
        <h2 id="guide-details" className="sr-only">
          {t.clinicalOverview}
        </h2>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: UserRound,
              label: t.author_,
              value: displayedAuthor,
            },
            {
              icon: Clock3,
              label: content.category,
              value: t.readTime(condition.readTimeMinutes),
            },
            {
              icon: CalendarCheck2,
              label: t.reviewed,
              value: formatDate(condition.reviewedDate, locale),
              dateTime: condition.reviewedDate,
            },
            {
              icon: RefreshCcw,
              label: t.nextReview,
              value: formatDate(condition.nextReviewDate, locale),
              dateTime: condition.nextReviewDate,
            },
          ].map(({ icon: Icon, label, value, dateTime }) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-4">
              <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <Icon aria-hidden="true" className="size-4 text-accent" />
                {label}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-foreground">
                {dateTime ? <time dateTime={dateTime}>{value}</time> : value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-9 lg:grid lg:grid-cols-[14.5rem_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-12">
        <nav
          aria-label={t.sectionsLabel}
          className="top-28 z-10 rounded-2xl border border-border bg-card p-3 shadow-[0_18px_50px_-44px_rgba(10,34,64,0.6)] lg:sticky print:hidden"
        >
          <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            {t.sectionsLabel}
          </p>
          <ul className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
            {sections.map((section, index) => {
              const Icon = sectionIcons[section.key];
              return (
                <li key={section.key} className="shrink-0">
                  <a
                    href={`#${section.key}`}
                    className="group flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-secondary text-accent group-hover:bg-accent/10">
                      <Icon aria-hidden="true" className="size-4" strokeWidth={1.9} />
                    </span>
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      <span className="me-1 text-xs tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-7 min-w-0 space-y-6 lg:mt-0">
          {sections.map((section, index) => {
            const Icon = sectionIcons[section.key];
            return (
              <section
                key={section.key}
                id={section.key}
                aria-labelledby={`${section.key}-heading`}
                className="scroll-mt-32 rounded-2xl border border-border bg-card p-5 shadow-[0_20px_55px_-48px_rgba(10,34,64,0.65)] sm:p-8"
              >
                <div className="flex items-start gap-4 border-b border-border pb-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2
                      id={`${section.key}-heading`}
                      className="mt-1 font-serif text-2xl font-semibold leading-snug text-primary sm:text-3xl"
                    >
                      {section.heading}
                    </h2>
                  </div>
                </div>
                <Blocks blocks={section.blocks} />
              </section>
            );
          })}

          {condition.sources.length > 0 && (
            <section
              aria-labelledby="sources-heading"
              className="rounded-2xl border border-border bg-secondary/45 p-5 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-background text-accent shadow-sm">
                  <BookOpenCheck aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <h2
                    id="sources-heading"
                    className="font-serif text-2xl font-semibold text-primary"
                  >
                    {t.sources}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{t.sourcesIntro}</p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {condition.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="group flex h-full items-start justify-between gap-3 rounded-xl border border-border bg-background p-4 text-sm font-medium leading-6 text-foreground transition-colors hover:border-accent/35 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <span>{source.label}</span>
                      <ExternalLink
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <aside className="rounded-2xl border border-border bg-card p-5 sm:p-7">
            <div className="flex items-start gap-3">
              <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-foreground">{t.disclaimer}</p>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{content.disclaimer}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
