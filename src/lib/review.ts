import type { Condition } from "@/content/schema";

/** Today as an ISO `YYYY-MM-DD` string, comparable directly against content dates. */
function isoToday(now: Date): string {
  return now.toISOString().slice(0, 10);
}

/**
 * True when a published guide is past its scheduled clinical review date.
 *
 * The build gate (`validateConditions`) refuses to ship overdue content, but a
 * deployed site keeps serving after that date with no rebuild. Rather than fail
 * the request, published pages disclose that the review is due so a patient can
 * weigh how current the guidance is.
 */
export function isReviewOverdue(condition: Condition, now: Date = new Date()): boolean {
  return condition.status === "published" && condition.nextReviewDate < isoToday(now);
}
