import type { Locale } from "@/content/schema";

export const locales: Locale[] = ["en", "ar"];

export const dirFor = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

export const categories = [
  { id: "vascular", en: "Vascular", ar: "الأوعية الدموية" },
  { id: "headache", en: "Headache", ar: "الصداع" },
  { id: "seizures", en: "Seizure disorders", ar: "اضطرابات النوبات" },
] as const;

export const ui = {
  en: {
    siteName: "NeuroCare",
    libraryHeading: "Neurology explained",
    tagline: "Patient education from a neurology clinic in Dubai",
    author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
    skipToContent: "Skip to main content",
    switchLanguage: "العربية",
    switchLanguageLabel: "Switch to Arabic",
    home: "Library",
    searchLabel: "Search conditions",
    searchPlaceholder: "Search by name or symptom",
    filterLabel: "Filter by category",
    allCategories: "All",
    noResults: "No conditions match your search.",
    statusPublished: "Published",
    statusReview: "In clinical review",
    reviewNotice:
      "This guide is in clinical review. It is not yet published as patient guidance.",
    readTime: (n: number) => `${n} min read`,
    author_: "Author",
    reviewed: "Reviewed",
    nextReview: "Next review",
    sources: "Sources",
    disclaimer: "Patient information",
    emergency: "Emergency in the UAE: call 998",
    backToLibrary: "Back to the library",
    print: "Print these questions",
    intro:
      "Short, carefully reviewed explanations of common neurological conditions, written for patients and families in English and Arabic.",
    conditionsHeading: "Conditions",
    sectionsLabel: "On this page",
  },
  ar: {
    siteName: "NeuroCare",
    libraryHeading: "طب الأعصاب بلغة واضحة",
    tagline: "تثقيف المرضى من عيادة أعصاب في دبي",
    author: "د. محمد إسماعيل، استشاري الأعصاب، دبي",
    skipToContent: "تخطَّ إلى المحتوى الرئيسي",
    switchLanguage: "English",
    switchLanguageLabel: "التبديل إلى الإنجليزية",
    home: "المكتبة",
    searchLabel: "ابحث في الحالات",
    searchPlaceholder: "ابحث بالاسم أو العرض",
    filterLabel: "تصفية حسب الفئة",
    allCategories: "الكل",
    noResults: "لا توجد حالات مطابقة لبحثك.",
    statusPublished: "منشور",
    statusReview: "قيد المراجعة الإكلينيكية",
    reviewNotice:
      "هذا الدليل قيد المراجعة الإكلينيكية ولم يُنشر بعد كإرشاد للمرضى.",
    readTime: (n: number) => `قراءة ${n} دقائق`,
    author_: "المؤلف",
    reviewed: "تاريخ المراجعة",
    nextReview: "المراجعة القادمة",
    sources: "المصادر",
    disclaimer: "معلومات للمرضى",
    emergency: "الطوارئ في الإمارات: اتصل بالرقم 998",
    backToLibrary: "العودة إلى المكتبة",
    print: "اطبع هذه الأسئلة",
    intro:
      "شروحات موجزة ومراجَعة بعناية لأكثر الحالات العصبية شيوعاً، مكتوبة للمرضى وذويهم بالعربية والإنجليزية.",
    conditionsHeading: "الحالات",
    sectionsLabel: "في هذه الصفحة",
  },
} as const;

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}