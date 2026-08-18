import type { Condition } from "../schema";

import { strokeAndTia } from "./stroke-and-tia";
import { migraine } from "./migraine";
import { tensionAndDailyHeadache } from "./tension-and-daily-headache";
import { epilepsyAndSeizures } from "./epilepsy-and-seizures";
import { multipleSclerosis } from "./multiple-sclerosis";
import { neckPainAndSpasm } from "./neck-pain-and-spasm";
import { lowBackPain } from "./low-back-pain";
import { numbnessAndTingling } from "./numbness-and-tingling";
import { dizziness } from "./dizziness";
import { weakness } from "./weakness";
import { memoryProblems } from "./memory-problems";
import { sleepDisorders } from "./sleep-disorders";
import { brainAndMentalHealth } from "./brain-and-mental-health";

/**
 * Every guide in the library, in the order the index lists them.
 *
 * One file per guide: the bodies are long, bilingual and edited independently,
 * so a single module would make every content change a conflict-prone diff in a
 * file thousands of lines long.
 */
export const rawConditions: Condition[] = [
  strokeAndTia,
  migraine,
  tensionAndDailyHeadache,
  epilepsyAndSeizures,
  multipleSclerosis,
  neckPainAndSpasm,
  lowBackPain,
  numbnessAndTingling,
  dizziness,
  weakness,
  memoryProblems,
  sleepDisorders,
  brainAndMentalHealth,
];

/**
 * Runtime content used by the app.
 *
 * Deliberately does NOT re-run schema validation: `validateConditions()` in
 * ../validate.ts is a build-time gate (vite.config.ts + `bun run check:content`),
 * so a schema failure stops a release rather than throwing inside a request.
 * Validating here instead would (a) ship zod to every browser and (b) turn a
 * time-based rule such as the review-due check into a site-wide 500 the moment
 * a guide's next review date passed in production.
 */
export const conditions: Condition[] = rawConditions;

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((condition) => condition.slug === slug);
}
