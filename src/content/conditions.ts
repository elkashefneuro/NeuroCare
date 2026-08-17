import { conditionSchema, type Condition } from "./schema";
import { stroke } from "./conditions/stroke";
import { migraine } from "./conditions/migraine";
import { epilepsy } from "./conditions/epilepsy";

export const rawConditions: Condition[] = [stroke, migraine, epilepsy];

/** Validates every guide and fails the build with a readable content error. */
export function validateConditions(): Condition[] {
  const problems: string[] = [];
  const parsed: Condition[] = [];

  for (const condition of rawConditions) {
    const result = conditionSchema.safeParse(condition);
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

export const conditions = validateConditions();

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((condition) => condition.slug === slug);
}
