import type { Condition } from "../schema";

export const epilepsyAndSeizures = {
  slug: "epilepsy-and-seizures",
  categoryId: "seizures",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-06-15",
  nextReviewDate: "2027-06-15",
  readTimeMinutes: 9,
  sources: [],
  en: {
    title: "Epilepsy and seizures",
    summary:
      "A guide to seizure types, first aid, diagnosis and treatment is being prepared and is currently in clinical review.",
    category: "Seizure disorders",
    metaTitle: "Epilepsy and seizures — in clinical review — NeuroCare",
    metaDescription:
      "The NeuroCare epilepsy and seizures guide is in clinical review and is not yet published as patient guidance.",
    disclaimer:
      "This guide is in clinical review. No clinical guidance is published on this page yet. Speak to your doctor about seizures.",
  },
  ar: {
    title: "الصرع والنوبات",
    summary:
      "دليل عن أنواع النوبات والإسعافات الأولية والتشخيص والعلاج قيد الإعداد، وهو حالياً في مرحلة المراجعة الإكلينيكية.",
    category: "اضطرابات النوبات",
    metaTitle: "الصرع والنوبات — قيد المراجعة — NeuroCare",
    metaDescription:
      "دليل الصرع والنوبات في NeuroCare قيد المراجعة الإكلينيكية ولم يُنشر بعد كإرشاد للمرضى.",
    disclaimer:
      "هذا الدليل قيد المراجعة الإكلينيكية، ولم تُنشر فيه أي إرشادات طبية بعد. تحدّث مع طبيبك بشأن النوبات.",
  },
} satisfies Condition;
