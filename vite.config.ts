// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { validateConditions } from "./src/content/conditions";

/** Build-time gate: fails the build if published content is incomplete or expired. */
const contentCheckPlugin = {
  name: "neurocare-content-check",
  buildStart() {
    const conditions = validateConditions();
    const published = conditions.filter((c) => c.status === "published").length;
    console.log(
      `[content-check] ${conditions.length} conditions validated, ${published} published.`,
    );
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [contentCheckPlugin],
  },
});
