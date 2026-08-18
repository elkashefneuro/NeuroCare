import { useMemo, useState, type ReactNode } from "react";
import { conditions } from "@/content/conditions";
import type { Block, Condition, Locale } from "@/content/schema";
import { categories, ui } from "@/lib/i18n";

function blockText(block: Block): string {
  if (block.type === "paragraph") return block.text;
  if (block.type === "list") return block.items.join(" ");
  return [block.title, ...block.items].join(" ");
}

function buildHaystack(condition: Condition): string {
  const parts: string[] = [];
  for (const locale of ["en", "ar"] as const) {
    const content = condition[locale];
    parts.push(content.title, content.summary, content.category);
    for (const section of content.sections ?? []) {
      parts.push(section.heading, ...section.blocks.map(blockText));
    }
  }
  return parts.join(" ").toLowerCase();
}

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

  // Built once, not per keystroke: for each guide, every searchable string in
  // both languages flattened into one lowercased blob. Searching the section
  // bodies as well as the card fields means a patient can find a guide by a
  // symptom the summary never mentions ("slurred speech", "تنميل").
  const haystacks = useMemo(
    () => new Map(conditions.map((condition) => [condition.slug, buildHaystack(condition)])),
    [],
  );

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return conditions.filter((condition) => {
      if (category !== "all" && condition.categoryId !== category) return false;
      if (terms.length === 0) return true;
      const haystack = haystacks.get(condition.slug) ?? "";
      return terms.every((term) => haystack.includes(term));
    });
  }, [query, category, haystacks]);

  return (
    <div>
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {t.libraryHeading}
      </h1>
      <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">{t.intro}</p>

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
              {[
                { id: "all", label: t.allCategories },
                ...categories.map((c) => ({ id: c.id, label: c[locale] })),
              ].map((option) => {
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
              })}
            </div>
          </fieldset>
        </div>

        <p role="status" aria-live="polite" className="mt-6 text-sm text-muted-foreground">
          {results.length === 0 ? t.noResults : t.results(results.length)}
        </p>

        {results.length > 0 && (
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
                        {` · ${t.readTime(condition.readTimeMinutes)}`}
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
