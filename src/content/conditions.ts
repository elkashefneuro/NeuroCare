import type { Condition } from "./schema";

const stroke = {
  slug: "stroke-and-tia",
  categoryId: "vascular",
  status: "published",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-06-15",
  nextReviewDate: "2027-06-15",
  readTimeMinutes: 8,
  sources: [
    {
      label: "World Stroke Organization — Global Stroke Fact Sheet",
      url: "https://www.world-stroke.org/publications-and-resources/resources/global-stroke-fact-sheet",
    },
    {
      label: "NICE guideline NG128 — Stroke and transient ischaemic attack",
      url: "https://www.nice.org.uk/guidance/ng128",
    },
    {
      label: "American Heart Association / American Stroke Association guidelines",
      url: "https://professional.heart.org/en/guidelines-and-statements",
    },
  ],
  en: {
    title: "Stroke and TIA",
    summary:
      "How a stroke and a transient ischaemic attack happen, how to recognise them with BE-FAST, and what to do in the first minutes.",
    category: "Vascular",
    metaTitle: "Stroke and TIA — NeuroCare",
    metaDescription:
      "Patient guide to stroke and transient ischaemic attack: BE-FAST recognition, emergency steps in the UAE, assessment, treatment and recovery.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "A stroke happens when the blood supply to part of the brain is interrupted. Most strokes are ischaemic: a clot blocks an artery. A smaller number are haemorrhagic: a vessel bleeds into or around the brain. Brain cells deprived of blood begin to die within minutes, which is why time is the single most important factor in outcome.",
          },
          {
            type: "paragraph",
            text: "A transient ischaemic attack (TIA) produces the same symptoms but they resolve, usually within an hour. A TIA is not a minor event. It is a warning that a disabling stroke may follow, and the risk is highest in the first days afterwards.",
          },
          {
            type: "list",
            items: [
              "Ischaemic stroke: an artery to the brain is blocked.",
              "Haemorrhagic stroke: an artery in or near the brain bleeds.",
              "TIA: symptoms recover fully, but the underlying risk remains.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "Recognise",
        blocks: [
          {
            type: "paragraph",
            text: "Use BE-FAST. Any single sign that appears suddenly is enough to act on.",
          },
          {
            type: "list",
            items: [
              "B — Balance: sudden loss of balance, coordination or unexplained falling.",
              "E — Eyes: sudden loss of vision, double vision, or loss of one side of the field of view.",
              "F — Face: one side of the face droops or feels numb; the smile is uneven.",
              "A — Arms: one arm (or leg) is weak, heavy or drifts down when both are raised.",
              "S — Speech: slurred, absent, or the person cannot understand simple sentences.",
              "T — Time: note the time symptoms began and call for help now.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "If you see any BE-FAST sign",
            items: [
              "Call 998 immediately for an ambulance in the UAE.",
              "Do not drive yourself or the person to hospital.",
              "Do not wait to see whether the symptoms pass, even if they improve.",
              "Note the exact time the symptoms started and stay with the person.",
              "Give nothing to eat or drink, and do not give aspirin before assessment.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "Assess",
        blocks: [
          {
            type: "paragraph",
            text: "In hospital the priority is a brain scan, usually a CT, to separate a blockage from a bleed. This decides whether clot-dissolving treatment is safe. Scanning of the neck and brain arteries and a heart rhythm assessment follow, to find the cause.",
          },
          {
            type: "list",
            items: [
              "Urgent CT or MRI of the brain.",
              "Imaging of the brain and neck arteries (CT or MR angiography, or ultrasound).",
              "ECG and prolonged heart-rhythm monitoring to look for atrial fibrillation.",
              "Blood tests including glucose, clotting, cholesterol and kidney function.",
              "Echocardiogram in selected patients, particularly younger adults.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "Treat",
        blocks: [
          {
            type: "paragraph",
            text: "Treatment in the first hours aims to restore blood flow. Thrombolysis (a clot-dissolving medicine) can be given within a limited window after symptoms begin. Thrombectomy, the mechanical removal of a large clot, is possible for selected patients in a specialist centre. Eligibility depends on timing, scan findings and other conditions.",
          },
          {
            type: "paragraph",
            text: "Afterwards, treatment focuses on preventing a second stroke: an antiplatelet or anticoagulant medicine depending on the cause, blood-pressure and cholesterol control, diabetes management, and stopping smoking. A TIA is treated with the same urgency of prevention.",
          },
          {
            type: "list",
            items: [
              "Emergency reperfusion: thrombolysis and, in selected cases, thrombectomy.",
              "Antiplatelet medicine, or anticoagulation when the cause is atrial fibrillation.",
              "Blood-pressure and cholesterol treatment as the main long-term protection.",
              "Carotid surgery or stenting when a neck artery is significantly narrowed.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Live with it",
        blocks: [
          {
            type: "paragraph",
            text: "Recovery is fastest in the first three months but continues for far longer. Rehabilitation is led by physiotherapy, occupational therapy and speech and language therapy, matched to the deficits that remain.",
          },
          {
            type: "paragraph",
            text: "Fatigue, low mood, anxiety and problems with memory or concentration are common and treatable. They are part of the condition, not a personal failing. Driving is restricted after a stroke or TIA; ask your treating doctor when it is safe and permitted to resume.",
          },
          {
            type: "list",
            items: [
              "Take preventive medicines every day, without interruption.",
              "Aim for regular activity as advised by your rehabilitation team.",
              "Have blood pressure checked regularly and keep a record.",
              "Report new or returning symptoms as an emergency, not at the next appointment.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "Ask",
        blocks: [
          {
            type: "paragraph",
            text: "Questions to take to your appointment. This list is designed to be printed.",
          },
          {
            type: "list",
            items: [
              "What type of stroke did I have, and what caused it?",
              "What is my individual risk of a further stroke?",
              "Which of my medicines prevents another stroke, and what happens if I miss a dose?",
              "What blood pressure and cholesterol numbers should I be aiming for?",
              "Which rehabilitation will I have, how often, and for how long?",
              "When may I drive, travel by air, return to work, and exercise?",
              "Which symptoms mean I should call 998 rather than call the clinic?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "السكتة الدماغية والنوبة الإقفارية العابرة",
    summary:
      "كيف تحدث السكتة الدماغية والنوبة الإقفارية العابرة، وكيف تتعرف عليها باستخدام BE-FAST، وما الذي يجب فعله في الدقائق الأولى.",
    category: "الأوعية الدموية",
    metaTitle: "السكتة الدماغية والنوبة العابرة — NeuroCare",
    metaDescription:
      "دليل للمرضى عن السكتة الدماغية والنوبة الإقفارية العابرة: التعرف بـ BE-FAST، خطوات الطوارئ في الإمارات، التقييم والعلاج والتعافي.",
    disclaimer:
      "هذه الصفحة معلومات تثقيفية للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. في حالة الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "افهم",
        blocks: [
          {
            type: "paragraph",
            text: "تحدث السكتة الدماغية عند انقطاع تدفق الدم عن جزء من الدماغ. معظم السكتات إقفارية، أي أن جلطة تسد أحد الشرايين، وعدد أقل منها نزفي، أي أن وعاءً دموياً ينزف داخل الدماغ أو حوله. تبدأ خلايا الدماغ المحرومة من الدم بالموت خلال دقائق، ولهذا فإن الوقت هو العامل الأهم في النتيجة.",
          },
          {
            type: "paragraph",
            text: "النوبة الإقفارية العابرة تسبب الأعراض نفسها لكنها تزول، غالباً خلال ساعة. وهي ليست حدثاً بسيطاً، بل إنذار بأن سكتة دماغية معطِّلة قد تتبعها، ويكون الخطر أعلى ما يكون في الأيام الأولى.",
          },
          {
            type: "list",
            items: [
              "السكتة الإقفارية: انسداد شريان يغذي الدماغ.",
              "السكتة النزفية: نزيف من شريان داخل الدماغ أو بجواره.",
              "النوبة العابرة: تتعافى الأعراض تماماً، لكن الخطر الكامن يبقى.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "تعرَّف",
        blocks: [
          {
            type: "paragraph",
            text: "استخدم BE-FAST. ظهور أي علامة واحدة بشكل مفاجئ يكفي لاتخاذ إجراء فوري.",
          },
          {
            type: "list",
            items: [
              "B — التوازن: فقدان مفاجئ للتوازن أو التناسق أو سقوط غير مبرر.",
              "E — العينان: فقدان مفاجئ للرؤية أو ازدواج الرؤية أو فقدان جانب من مجال الإبصار.",
              "F — الوجه: تدلٍّ أو تنميل في أحد جانبي الوجه، وابتسامة غير متناظرة.",
              "A — الذراعان: ضعف أو ثقل في ذراع أو ساق، أو هبوط الذراع عند رفع الاثنتين.",
              "S — الكلام: كلام غير واضح أو غائب، أو عدم فهم الجمل البسيطة.",
              "T — الوقت: سجّل وقت بدء الأعراض واطلب المساعدة الآن.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "إذا ظهرت أي علامة من BE-FAST",
            items: [
              "اتصل بالرقم 998 فوراً لطلب سيارة إسعاف في الإمارات.",
              "لا تقُد السيارة بنفسك ولا تنقل المريض بسيارتك.",
              "لا تنتظر زوال الأعراض حتى لو بدأت في التحسن.",
              "سجّل وقت بدء الأعراض بدقة وابقَ مع المريض.",
              "لا تُعطِ المريض طعاماً أو شراباً، ولا تعطِ الأسبرين قبل التقييم.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "التقييم",
        blocks: [
          {
            type: "paragraph",
            text: "في المستشفى تكون الأولوية لتصوير الدماغ، عادةً بالأشعة المقطعية، للتفريق بين الانسداد والنزيف، لأن ذلك يحدد ما إذا كان علاج إذابة الجلطة آمناً. ثم يُجرى تصوير شرايين الرقبة والدماغ وتقييم نظم القلب لتحديد السبب.",
          },
          {
            type: "list",
            items: [
              "أشعة مقطعية أو رنين مغناطيسي عاجل للدماغ.",
              "تصوير شرايين الدماغ والرقبة بالأشعة المقطعية أو الرنين أو الموجات فوق الصوتية.",
              "تخطيط القلب ومراقبة النظم لفترة ممتدة بحثاً عن الرجفان الأذيني.",
              "تحاليل دم تشمل السكر والتخثر والكوليسترول ووظائف الكلى.",
              "تخطيط صدى القلب لبعض المرضى، خاصة الأصغر سناً.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "العلاج",
        blocks: [
          {
            type: "paragraph",
            text: "يهدف العلاج في الساعات الأولى إلى إعادة تدفق الدم. يمكن إعطاء دواء إذابة الجلطة خلال نافذة زمنية محدودة من بدء الأعراض، كما يمكن سحب الجلطة الكبيرة ميكانيكياً في مركز متخصص لمرضى مختارين. ويعتمد ذلك على التوقيت ونتائج الأشعة والحالات المصاحبة.",
          },
          {
            type: "paragraph",
            text: "بعد ذلك يتركز العلاج على منع سكتة ثانية: دواء مضاد للصفيحات أو مضاد للتخثر بحسب السبب، وضبط ضغط الدم والكوليسترول، وعلاج السكري، والإقلاع عن التدخين. وتُعالج النوبة العابرة بالسرعة الوقائية نفسها.",
          },
          {
            type: "list",
            items: [
              "إعادة التروية الطارئة: إذابة الجلطة، وسحبها في حالات مختارة.",
              "مضاد للصفيحات، أو مضاد للتخثر عند وجود رجفان أذيني.",
              "علاج ضغط الدم والكوليسترول باعتباره الحماية الأساسية على المدى الطويل.",
              "جراحة أو دعامة للشريان السباتي عند وجود تضيق شديد.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش",
        blocks: [
          {
            type: "paragraph",
            text: "يكون التعافي أسرع خلال الأشهر الثلاثة الأولى لكنه يستمر لفترة أطول بكثير. ويقود إعادة التأهيل العلاج الطبيعي والعلاج الوظيفي وعلاج النطق واللغة، بحسب ما تبقى من أعراض.",
          },
          {
            type: "paragraph",
            text: "الإرهاق وتدني المزاج والقلق وصعوبات الذاكرة أو التركيز شائعة وقابلة للعلاج، وهي جزء من الحالة وليست ضعفاً شخصياً. وتُقيَّد القيادة بعد السكتة أو النوبة العابرة، فاسأل طبيبك المعالج متى يكون استئنافها آمناً ومسموحاً.",
          },
          {
            type: "list",
            items: [
              "تناول الأدوية الوقائية يومياً دون انقطاع.",
              "احرص على نشاط بدني منتظم وفق توجيه فريق إعادة التأهيل.",
              "قِس ضغط الدم بانتظام واحتفظ بسجل للقراءات.",
              "تعامل مع أي عرض جديد أو عائد كحالة طارئة لا كموعد لاحق.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "اسأل",
        blocks: [
          {
            type: "paragraph",
            text: "أسئلة تأخذها معك إلى الموعد الطبي. هذه القائمة معدّة للطباعة.",
          },
          {
            type: "list",
            items: [
              "ما نوع السكتة التي أصابتني وما سببها؟",
              "ما مدى خطر تعرضي لسكتة أخرى؟",
              "أي من أدويتي يمنع السكتة، وماذا يحدث إذا نسيت جرعة؟",
              "ما القيم المستهدفة لضغط الدم والكوليسترول لدي؟",
              "ما برنامج إعادة التأهيل، وكم مرة، ولأي مدة؟",
              "متى يمكنني القيادة والسفر جواً والعودة إلى العمل وممارسة الرياضة؟",
              "أي الأعراض تستوجب الاتصال بالرقم 998 بدلاً من الاتصال بالعيادة؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;

const migraine = {
  slug: "migraine",
  categoryId: "headache",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-06-15",
  nextReviewDate: "2027-06-15",
  readTimeMinutes: 7,
  sources: [],
  en: {
    title: "Migraine",
    summary:
      "A guide to migraine attacks, triggers, acute treatment and prevention is being prepared and is currently in clinical review.",
    category: "Headache",
    metaTitle: "Migraine — in clinical review — NeuroCare",
    metaDescription:
      "The NeuroCare migraine guide is in clinical review and is not yet published as patient guidance.",
    disclaimer:
      "This guide is in clinical review. No clinical guidance is published on this page yet. Speak to your doctor about migraine symptoms.",
  },
  ar: {
    title: "الصداع النصفي",
    summary:
      "دليل عن نوبات الصداع النصفي ومحفزاتها وعلاجها والوقاية منها قيد الإعداد، وهو حالياً في مرحلة المراجعة الإكلينيكية.",
    category: "الصداع",
    metaTitle: "الصداع النصفي — قيد المراجعة — NeuroCare",
    metaDescription:
      "دليل الصداع النصفي في NeuroCare قيد المراجعة الإكلينيكية ولم يُنشر بعد كإرشاد للمرضى.",
    disclaimer:
      "هذا الدليل قيد المراجعة الإكلينيكية، ولم تُنشر فيه أي إرشادات طبية بعد. تحدّث مع طبيبك بشأن أعراض الصداع النصفي.",
  },
} satisfies Condition;

const epilepsy = {
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

export const rawConditions: Condition[] = [stroke, migraine, epilepsy];

/**
 * Runtime content used by the app.
 *
 * Deliberately does NOT re-run schema validation: `validateConditions()` in
 * ./validate.ts is a build-time gate (vite.config.ts + `bun run check:content`),
 * so a schema failure stops a release rather than throwing inside a request.
 * Validating here instead would (a) ship zod to every browser and (b) turn a
 * time-based rule such as the review-due check into a site-wide 500 the moment
 * a guide's next review date passed in production.
 */
export const conditions: Condition[] = rawConditions;

export function getCondition(slug: string): Condition | undefined {
  return conditions.find((condition) => condition.slug === slug);
}
