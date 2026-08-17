import {
  ArrowUpRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Languages,
  Search,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { conditions } from "@/content/conditions";
import type { Locale } from "@/content/schema";
import { categories, formatDate, ui } from "@/lib/i18n";

const categoryIcons = {
  vascular: HeartPulse,
  headache: Brain,
  seizures: Zap,
} as const;

export function LibraryIndex({
  locale,
  renderLink,
}: {
  locale: Locale;
  renderLink: (slug: string, children: ReactNode, className: string) => ReactNode;
}) {
  const t = ui[locale];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(locale);
    return conditions.filter((condition) => {
      const matchesCategory = category === "all" || condition.categoryId === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        condition.en.title,
        condition.en.summary,
        condition.en.category,
        condition.ar.title,
        condition.ar.summary,
        condition.ar.category,
      ]
        .join(" ")
        .toLocaleLowerCase(locale);
      return haystack.includes(q);
    });
  }, [query, category, locale]);

  return (
    <div>
      <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground shadow-[0_24px_80px_-42px_rgba(10,34,64,0.65)] sm:px-10 sm:py-14 lg:grid lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12 lg:px-14">
        <div className="relative z-10">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
            <ShieldCheck aria-hidden="true" className="size-4 text-[oklch(0.78_0.11_190)]" />
            {t.libraryEyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
            {t.libraryHeading}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/78 sm:text-lg">
            {t.intro}
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm font-medium text-primary-foreground/90">
            <BookOpenCheck aria-hidden="true" className="size-4 text-[oklch(0.78_0.11_190)]" />
            {t.guideCount(conditions.length)}
          </div>
        </div>

        <div className="relative z-10 mt-10 rounded-2xl border border-white/14 bg-white/[0.07] p-5 backdrop-blur-sm lg:mt-0">
          <ul className="space-y-3">
            {[
              { icon: CheckCircle2, label: t.evidenceBased },
              { icon: Languages, label: t.bilingual },
              { icon: Clock3, label: t.reviewCycle },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/[0.06] px-4 py-3 text-sm font-medium"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10">
                  <Icon aria-hidden="true" className="size-4 text-[oklch(0.78_0.11_190)]" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-white/12 pt-5 text-sm leading-6 text-primary-foreground/65">
            {t.author}
          </p>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -end-16 -top-20 size-64 rounded-full border border-white/8"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 end-20 size-56 rounded-full border border-white/8"
        />
      </section>

      <section aria-labelledby="library-heading" className="mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {t.conditionsHeading}
            </p>
            <h2
              id="library-heading"
              className="mt-2 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
            >
              {t.browseHeading}
            </h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.browseIntro}</p>
          </div>
          <p aria-live="polite" className="text-sm font-medium text-muted-foreground">
            {results.length} / {conditions.length}
          </p>
        </div>

        <div className="mt-7 rounded-2xl border border-border bg-card p-4 shadow-[0_18px_50px_-40px_rgba(10,34,64,0.7)] sm:p-5">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <label htmlFor="condition-search" className="text-sm font-semibold text-foreground">
                {t.searchLabel}
              </label>
              <div className="relative mt-2">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute start-3.5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  id="condition-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="min-h-12 w-full rounded-xl border border-input bg-background px-11 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label={t.clearSearch}
                    className="absolute end-2 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    <X aria-hidden="true" className="size-4" />
                  </button>
                )}
              </div>
            </div>

            <fieldset>
              <legend className="text-sm font-semibold text-foreground">{t.filterLabel}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {[
                  { id: "all", label: t.allCategories },
                  ...categories.map((item) => ({ id: item.id, label: item[locale] })),
                ].map((option) => {
                  const selected = category === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setCategory(option.id)}
                      className={`inline-flex min-h-12 items-center rounded-xl border px-4 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        selected
                          ? "border-primary bg-primary text-primary-foreground shadow-sm"
                          : "border-border bg-background text-foreground hover:border-accent/40 hover:bg-secondary"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-border bg-secondary/50 px-5 py-12 text-center">
            <Search aria-hidden="true" className="mx-auto size-6 text-muted-foreground" />
            <p className="mt-3 text-muted-foreground">{t.noResults}</p>
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((condition) => {
              const content = condition[locale];
              const published = condition.status === "published";
              const Icon = categoryIcons[condition.categoryId];

              return (
                <li key={condition.slug} className="min-w-0">
                  {renderLink(
                    condition.slug,
                    <>
                      <span className="flex items-start justify-between gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                          <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                        </span>
                        <span
                          className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wide ${
                            published
                              ? "border-accent/25 bg-accent/5 text-accent"
                              : "border-border bg-secondary text-muted-foreground"
                          }`}
                        >
                          {published ? t.statusPublished : t.statusReview}
                        </span>
                      </span>

                      <span className="mt-6 block font-serif text-2xl font-semibold leading-snug tracking-tight text-primary">
                        {content.title}
                      </span>
                      <span className="mt-3 line-clamp-3 block text-sm leading-7 text-muted-foreground">
                        {content.summary}
                      </span>

                      <span className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                        <span>
                          {content.category} · {t.minutes(condition.readTimeMinutes)}
                        </span>
                        <span className="inline-flex items-center gap-1 font-semibold text-accent">
                          {t.readGuide}
                          <ArrowUpRight
                            aria-hidden="true"
                            className="directional-icon size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </span>

                      <span className="mt-3 block text-[0.68rem] text-muted-foreground/80">
                        {t.updated}: {formatDate(condition.reviewedDate, locale)}
                      </span>
                    </>,
                    "group flex h-full min-h-[22rem] flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_18px_50px_-42px_rgba(10,34,64,0.75)] transition-all hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_25px_65px_-42px_rgba(10,34,64,0.75)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
