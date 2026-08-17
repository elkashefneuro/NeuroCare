import { z } from "zod";

export const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be ISO format YYYY-MM-DD");

export const sectionKeys = [
  "understand",
  "recognise",
  "assess",
  "treat",
  "live",
  "ask",
] as const;

export type SectionKey = (typeof sectionKeys)[number];

/** A block of body content inside one of the six guide sections. */
export const blockSchema = z.union([
  z.object({ type: z.literal("paragraph"), text: z.string().min(1) }),
  z.object({ type: z.literal("list"), items: z.array(z.string().min(1)).min(1) }),
  z.object({
    type: z.literal("callout"),
    tone: z.enum(["emergency", "note"]),
    title: z.string().min(1),
    items: z.array(z.string().min(1)).min(1),
  }),
]);

export type Block = z.infer<typeof blockSchema>;

export const sectionSchema = z.object({
  key: z.enum(sectionKeys),
  heading: z.string().min(1),
  blocks: z.array(blockSchema).min(1),
});

export const localeContentSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  category: z.string().min(1),
  metaTitle: z.string().min(1).max(70),
  metaDescription: z.string().min(1).max(180),
  disclaimer: z.string().min(1),
  sections: z.array(sectionSchema).optional(),
});

export const sourceSchema = z.object({
  label: z.string().min(1),
  url: z.string().url(),
});

export const conditionSchema = z
  .object({
    slug: z.string().regex(/^[a-z0-9-]+$/),
    categoryId: z.enum(["vascular", "headache", "seizures"]),
    status: z.enum(["published", "in-review"]),
    author: z.string().min(1),
    reviewedDate: isoDate,
    nextReviewDate: isoDate,
    readTimeMinutes: z.number().int().positive(),
    sources: z.array(sourceSchema),
    en: localeContentSchema,
    ar: localeContentSchema,
  })
  .superRefine((condition, ctx) => {
    if (condition.status !== "published") return;

    const requirePublished = (path: (string | number)[], message: string) =>
      ctx.addIssue({ code: z.ZodIssueCode.custom, path, message });

    if (condition.sources.length === 0) {
      requirePublished(["sources"], "Published content must cite at least one source.");
    }
    for (const locale of ["en", "ar"] as const) {
      const sections = condition[locale].sections;
      if (!sections || sections.length !== sectionKeys.length) {
        requirePublished(
          [locale, "sections"],
          `Published content requires all six sections in ${locale}.`,
        );
        continue;
      }
      const keys = sections.map((section) => section.key);
      for (const key of sectionKeys) {
        if (!keys.includes(key)) {
          requirePublished([locale, "sections"], `Missing "${key}" section in ${locale}.`);
        }
      }
    }
    if (condition.nextReviewDate <= condition.reviewedDate) {
      requirePublished(
        ["nextReviewDate"],
        "Next review date must be after the reviewed date.",
      );
    }
    const today = new Date().toISOString().slice(0, 10);
    if (condition.nextReviewDate < today) {
      requirePublished(
        ["nextReviewDate"],
        `Published content is overdue for review (next review ${condition.nextReviewDate}).`,
      );
    }
  });

export type Condition = z.infer<typeof conditionSchema>;
export type LocaleContent = z.infer<typeof localeContentSchema>;
export type Locale = "en" | "ar";