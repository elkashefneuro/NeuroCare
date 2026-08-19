import type { Locale } from "@/content/schema";

export const locales: Locale[] = ["en", "ar"];

export const dirFor = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

export const categories = [
  { id: "vascular", en: "Vascular", ar: "الأوعية الدموية" },
  { id: "headache", en: "Headache", ar: "الصداع" },
  { id: "seizures", en: "Seizure disorders", ar: "اضطرابات النوبات" },
  { id: "demyelinating", en: "Multiple sclerosis", ar: "التصلب المتعدد" },
  { id: "spine", en: "Neck and back", ar: "الرقبة والظهر" },
  { id: "neuromuscular", en: "Nerve and muscle", ar: "الأعصاب والعضلات" },
  { id: "balance", en: "Dizziness and balance", ar: "الدوخة والتوازن" },
  { id: "cognition", en: "Memory and thinking", ar: "الذاكرة والإدراك" },
  { id: "sleep", en: "Sleep", ar: "النوم" },
  { id: "brain-health", en: "Brain and mental health", ar: "صحة الدماغ والنفس" },
] as const;

export const ui = {
  en: {
    siteName: "NeuroCare",
    libraryHeading: "Neurology explained",
    tagline: "Patient education from a neurology clinic in Dubai",
    strapline: "Trusted neurology guidance",
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
    reviewNotice: "This guide is in clinical review. It is not yet published as patient guidance.",
    draftNoticeTitle: "Draft — not yet approved patient guidance",
    draftNotice:
      "This guide has been drafted but not yet signed off by the clinic. Treat everything below as a working draft, not as advice for your own care, and speak to your doctor before acting on it.",
    readTime: (n: number) => `${n} min read`,
    readTimeLabel: "Reading time",
    author_: "Author",
    reviewed: "Reviewed",
    nextReview: "Next review",
    sources: "Sources",
    disclaimer: "Patient information",
    emergency: "Emergency in the UAE: call 998",
    emergencyStrip:
      "New weakness, speech or vision change, or a seizure lasting 5 minutes: call 998.",
    evidenceBased: "Guideline informed",
    backToLibrary: "Back to the library",
    print: "Print these questions",
    intro:
      "Short, carefully reviewed explanations of common neurological conditions, written for patients and families in English and Arabic.",
    conditionsHeading: "Conditions",
    sectionsLabel: "On this page",
    keyPointsLabel: "Key points",
    results: (n: number) => (n === 1 ? "1 condition shown" : `${n} conditions shown`),
    reviewOverdue:
      "This guide has passed its scheduled review date and is being updated. Check anything time-sensitive with your doctor.",
    notFoundTitle: "Page not found",
    notFoundBody: "This page does not exist, or it has moved.",
    goHome: "Go to the library",
  },
  ar: {
    siteName: "NeuroCare",
    libraryHeading: "طب الأعصاب بلغة واضحة",
    tagline: "تثقيف المرضى من عيادة أعصاب في دبي",
    strapline: "رعاية عصبية موثوقة",
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
    reviewNotice: "هذا الدليل قيد المراجعة الإكلينيكية ولم يُنشر بعد كإرشاد للمرضى.",
    draftNoticeTitle: "مسودة — لم تُعتمد بعد كإرشاد للمرضى",
    draftNotice:
      "تمت كتابة هذا الدليل ولم تعتمده العيادة بعد. اعتبر كل ما يلي مسودة عمل وليس إرشاداً لحالتك، وتحدث مع طبيبك قبل التصرف بناءً عليه.",
    readTime: (n: number) => `قراءة ${n} دقائق`,
    readTimeLabel: "مدة القراءة",
    author_: "المؤلف",
    reviewed: "تاريخ المراجعة",
    nextReview: "المراجعة القادمة",
    sources: "المصادر",
    disclaimer: "معلومات للمرضى",
    emergency: "الطوارئ في الإمارات: اتصل بالرقم 998",
    emergencyStrip: "ضعف جديد أو تغير الكلام أو الرؤية، أو نوبة تستمر 5 دقائق: اتصل بالرقم 998.",
    evidenceBased: "مستند إلى الإرشادات",
    backToLibrary: "العودة إلى المكتبة",
    print: "اطبع هذه الأسئلة",
    intro:
      "شروحات موجزة ومراجَعة بعناية لأكثر الحالات العصبية شيوعاً، مكتوبة للمرضى وذويهم بالعربية والإنجليزية.",
    conditionsHeading: "الحالات",
    sectionsLabel: "في هذه الصفحة",
    keyPointsLabel: "أهم النقاط",
    results: (n: number) => `عدد الحالات المعروضة: ${n}`,
    reviewOverdue:
      "تجاوز هذا الدليل تاريخ مراجعته المقرر وهو قيد التحديث. راجع طبيبك بشأن أي معلومة حساسة زمنياً.",
    notFoundTitle: "الصفحة غير موجودة",
    notFoundBody: "هذه الصفحة غير موجودة أو تم نقلها.",
    goHome: "الانتقال إلى المكتبة",
  },
} as const;

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-AE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
}

/**
 * Locale implied by a URL path. Used by the document shell, which renders above
 * the locale-specific routes and so cannot read the locale from a route param.
 * Anything outside `/ar` falls back to English, matching the `/` redirect.
 */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

/** The locale a language switch should lead to. */
export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/** BCP 47 tag used for `og:locale`. */
export const openGraphLocale: Record<Locale, string> = {
  en: "en_GB",
  ar: "ar_AE",
};
