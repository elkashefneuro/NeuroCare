import { rawConditions } from "./conditions/index";
import { conditionSchema, type Condition } from "./schema";

/**
 * Strict, build-time validation of every condition.
 *
 * Imported only by the build gate (vite.config.ts) and `bun run check:content`
 * — never by application code, which keeps zod out of the browser bundle and
 * keeps schema failures at release time instead of inside a live request.
 *
 * Throws with a readable, aggregated message on failure.
 */
export function validateConditions(now = new Date()): Condition[] {
  const problems: string[] = [];
  const parsed: Condition[] = [];
  const seenSlugs = new Set<string>();

  for (const condition of rawConditions) {
    if (seenSlugs.has(condition.slug)) {
      problems.push(`${condition.slug}: slug — duplicate slug; each guide needs a unique URL.`);
    }
    seenSlugs.add(condition.slug);

    const result = conditionSchema(now).safeParse(condition);
    if (result.success) {
      parsed.push(result.data);
    } else {
      for (const issue of result.error.issues) {
        problems.push(`${condition.slug}: ${issue.path.join(".")} — ${issue.message}`);
      }
    }
  }

  if (problems.length > 0) {
    throw new Error(`Content validation failed:\n - ${problems.join("\n - ")}`);
  }
  return parsed;
}
