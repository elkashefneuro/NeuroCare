import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import type { Locale } from "@/content/schema";
import { dirFor, ui } from "@/lib/i18n";

export function SiteLayout({
  locale,
  languageSwitch,
  children,
}: {
  locale: Locale;
  languageSwitch: ReactNode;
  children: ReactNode;
}) {
  const t = ui[locale];
  // `lang`/`dir` on <html> are owned by RootShell, which sets them during SSR;
  // this element repeats them so the subtree is self-describing in isolation.
  const dir = dirFor(locale);

  return (
    <div dir={dir} lang={locale} className="min-h-dvh bg-background font-sans text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        {t.skipToContent}
      </a>

      <header className="border-b border-border bg-background print:hidden">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          {locale === "ar" ? (
            <Link
              to="/ar"
              className="rounded-sm font-serif text-lg font-semibold tracking-tight text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {t.siteName}
            </Link>
          ) : (
            <Link
              to="/en"
              className="rounded-sm font-serif text-lg font-semibold tracking-tight text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {t.siteName}
            </Link>
          )}
          {languageSwitch}
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-5 py-10">
        {children}
      </main>

      <footer className="mt-16 border-t border-border print:hidden">
        <div className="mx-auto max-w-3xl px-5 py-8 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{t.author}</p>
          <p className="mt-1">{t.tagline}</p>
          <p className="mt-4 text-destructive">{t.emergency}</p>
        </div>
      </footer>
    </div>
  );
}
