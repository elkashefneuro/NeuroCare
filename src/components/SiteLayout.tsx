import { Link } from "@tanstack/react-router";
import { BrainCircuit, CircleAlert, ShieldCheck } from "lucide-react";
import { useEffect, type ReactNode } from "react";
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
  const dir = dirFor(locale);
  const home = locale === "ar" ? "/ar" : "/en";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return (
    <div dir={dir} lang={locale} className="min-h-dvh bg-background font-sans text-foreground">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        {t.skipToContent}
      </a>

      <div className="border-b border-destructive/15 bg-destructive/[0.045] print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-medium text-destructive sm:px-6">
          <CircleAlert aria-hidden="true" className="size-4 shrink-0" strokeWidth={2} />
          <span>{t.emergencyStrip}</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            to={home}
            className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm transition-transform group-hover:-translate-y-0.5">
              <BrainCircuit aria-hidden="true" className="size-5" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block font-serif text-xl font-semibold leading-none tracking-tight text-primary">
                {t.siteName}
              </span>
              <span className="mt-1 hidden text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:block">
                {locale === "ar" ? "رعاية عصبية موثوقة" : "Trusted neurology guidance"}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-1.5 text-xs font-medium text-muted-foreground md:inline-flex">
              <ShieldCheck aria-hidden="true" className="size-4 text-accent" />
              {t.evidenceBased}
            </span>
            {languageSwitch}
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {children}
      </main>

      <footer className="mt-16 border-t border-border bg-secondary/55 print:hidden">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
                <BrainCircuit aria-hidden="true" className="size-4.5" />
              </span>
              <p className="font-serif text-lg font-semibold text-primary">{t.siteName}</p>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{t.tagline}</p>
            <p className="mt-5 text-sm font-medium text-foreground">{t.author}</p>
          </div>

          <div className="rounded-xl border border-destructive/15 bg-background p-5">
            <div className="flex items-start gap-3">
              <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive" />
              <div>
                <p className="font-semibold text-destructive">{t.emergency}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{t.emergencyStrip}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
