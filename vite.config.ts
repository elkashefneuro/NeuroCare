// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync } from "node:fs";
import type { Plugin } from "vite";
import { validateConditions } from "./src/content/validate";
import { renderSitemap } from "./scripts/sitemap";

/** Build-time gate: fails the build if published content is incomplete or expired. */
const contentCheckPlugin: Plugin = {
  name: "neurocare-content-check",
  buildStart() {
    const conditions = validateConditions();
    const published = conditions.filter((c) => c.status === "published").length;
    this.info(`${conditions.length} conditions validated, ${published} published.`);
  },
};

/**
 * Emits `/sitemap.xml` alongside the client build so it always matches the
 * content that shipped. Sitemap URLs must be absolute, so this is a no-op
 * unless `VITE_SITE_URL` names the deployed origin.
 */
const sitemapPlugin = (): Plugin => {
  let origin: string | undefined;

  return {
    name: "neurocare-sitemap",
    apply: "build",
    configResolved(config) {
      origin = config.env["VITE_SITE_URL"]?.toString().trim().replace(/\/+$/, "") || undefined;
    },
    generateBundle() {
      if (this.environment?.name !== "client") return;
      if (!origin) {
        this.warn(
          "VITE_SITE_URL is not set — skipping sitemap.xml and the robots.txt Sitemap line.",
        );
        return;
      }
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: renderSitemap(origin) });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: withSitemapDirective(readFileSync("public/robots.txt", "utf8"), origin),
      });
      this.info(`sitemap.xml emitted for ${origin}`);
    },
  };
};

/** Appends the (absolute, per spec) Sitemap directive to robots.txt, replacing any existing one. */
function withSitemapDirective(robots: string, origin: string): string {
  const withoutSitemap = robots
    .split("\n")
    .filter((line) => !/^\s*sitemap\s*:/i.test(line))
    .join("\n")
    .trimEnd();
  return `${withoutSitemap}\n\nSitemap: ${origin}/sitemap.xml\n`;
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [contentCheckPlugin, sitemapPlugin()],
  },
});
