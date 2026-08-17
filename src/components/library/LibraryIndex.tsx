import { useMemo, useState, type ReactNode } from "react";
import { conditions } from "@/content/conditions";
import type { Locale } from "@/content/schema";
import { categories, ui } from "@/lib/i18n";

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
    const q = query.trim().toLowerCase();
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
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {t.libraryHeading}
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
        {t.intro}
      </p>

      <section aria-labelledby="library-heading" className="mt-10">
        <h2 id="library-heading" className="sr-only">
          {t.conditionsHeading}
        </h2>

        <div className="rounded-lg border border-border p-4">
          <label htmlFor="condition-search" className="block text-sm font-medium">
            {t.searchLabel}
          </label>
          <input
            id="condition-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            className="mt-2 min-h-11 w-full rounded-md border border-input bg-background px-3 text-base placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />

          <fieldset className="mt-4">
            <legend className="text-sm font-medium">{t.filterLabel}</legend>
            <div className="mt-2 flex flex-wrap gap-2">
              {[{ id: "all", label: t.allCategories }, ...categories.map((c) => ({ id: c.id, label: c[locale] }))].map(
                (option) => {
                  const selected = category === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setCategory(option.id)}
                      className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        selected
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-foreground hover:bg-secondary"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                },
              )}
            </div>
          </fieldset>
        </div>

        {results.length === 0 ? (
          <p className="mt-8 text-muted-foreground">{t.noResults}</p>
        ) : (
          <ul className="mt-8 space-y-4">
            {results.map((condition) => {
              const content = condition[locale];
              const published = condition.status === "published";
              return (
                <li key={condition.slug}>
                  {renderLink(
                    condition.slug,
                    <>
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-serif text-xl font-semibold text-primary">
                          {content.title}
                        </span>
                        <span
                          className={`rounded-full border px-2 py-0.5 text-xs font-medium ${
                            published
                              ? "border-accent text-accent"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {published ? t.statusPublished : t.statusReview}
                        </span>
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                        {content.summary}
                      </span>
                      <span className="mt-3 block text-xs uppercase tracking-wide text-muted-foreground">
                        {content.category}
                        {published ? ` · ${t.readTime(condition.readTimeMinutes)}` : ""}
                      </span>
                    </>,
                    "block rounded-lg border border-border p-5 transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
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