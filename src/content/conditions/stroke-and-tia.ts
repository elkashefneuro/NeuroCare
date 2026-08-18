import type { Condition } from "../schema";

export const strokeAndTia = {
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
        key: "tests",
        heading: "What to expect from your tests",
        blocks: [
          {
            type: "paragraph",
            text: "Scans after a stroke are quick, painless and done as an emergency. Knowing roughly what happens makes a frightening few hours a little easier for you and the family with you.",
          },
          {
            type: "list",
            items: [
              "CT head: the first scan, usually within minutes of arrival. You lie flat on a moving table for under a minute. It shows bleeding immediately and decides whether clot-dissolving treatment is safe.",
              "CT angiogram: the same machine with dye through a vein in your arm. The dye gives a warm flush and a metallic taste for a few seconds. It maps the blocked artery.",
              "MRI brain: a longer scan, 20 to 40 minutes, inside a narrow tunnel that is loud. You wear ear protection and can speak to the staff throughout. It shows small or early strokes that CT misses. Tell staff about any metal implant, pacemaker or claustrophobia beforehand.",
              "Carotid ultrasound: a probe with gel on your neck, about 15 minutes, no needles. It looks for narrowing in the neck arteries.",
              "ECG and heart monitoring: sticky pads on the chest, sometimes for several days, to catch an irregular heart rhythm that could have thrown the clot.",
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
        key: "exercise",
        heading: "Exercise that matters",
        blocks: [
          {
            type: "paragraph",
            text: "Movement is treatment after a stroke, not an optional extra. Getting out of bed safely and early, under supervision, is one of the strongest influences on how much function returns. Your therapy team sets the level; these are the priorities they work towards.",
          },
          {
            type: "list",
            items: [
              "Sitting and standing balance first, with supervision, before any walking practice.",
              "Repeated, specific practice with the weaker arm or leg. The brain rewires around the task you actually repeat, so hundreds of small repetitions beat a few large ones.",
              "Walking practice daily, building distance gradually, with whatever aid the physiotherapist provides.",
              "Gentle range-of-movement at the shoulder on the weak side, to protect a joint that dislocates easily when the muscles are weak.",
              "Aerobic work — walking, a static bike — once you are steady, to lower the risk of a second stroke.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Do this with your therapist, not alone",
            items: [
              "Falls are common in the first weeks and set recovery back.",
              "Ask your physiotherapist which exercises are safe to do without supervision at home.",
              "Stop and report any new chest pain, severe breathlessness or sudden change in weakness.",
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
        key: "tests",
        heading: "ما الذي تتوقعه من الفحوصات",
        blocks: [
          {
            type: "paragraph",
            text: "الفحوصات بعد السكتة سريعة وغير مؤلمة وتُجرى كحالة طارئة. معرفة ما سيحدث تجعل ساعات مخيفة أسهل قليلاً عليك وعلى من يرافقك.",
          },
          {
            type: "list",
            items: [
              "الأشعة المقطعية للرأس: أول فحص، غالباً خلال دقائق من الوصول. تستلقي على طاولة متحركة أقل من دقيقة. تُظهر النزيف فوراً وتحدد ما إذا كان دواء إذابة الجلطة آمناً.",
              "الأشعة المقطعية للأوعية: نفس الجهاز مع صبغة عبر وريد في الذراع. تسبب الصبغة إحساساً بالدفء وطعماً معدنياً لثوانٍ. تحدد الشريان المسدود.",
              "الرنين المغناطيسي للدماغ: فحص أطول، من 20 إلى 40 دقيقة، داخل نفق ضيق وصوته مرتفع. تُعطى واقياً للأذن ويمكنك التحدث إلى الفريق طوال الوقت. يُظهر السكتات الصغيرة أو المبكرة التي لا تظهر بالمقطعية. أخبر الفريق مسبقاً عن أي معدن مزروع أو منظم ضربات قلب أو رهاب الأماكن المغلقة.",
              "الموجات فوق الصوتية لشرايين الرقبة: مجس مع جل على الرقبة، نحو 15 دقيقة، دون إبر. يبحث عن تضيّق في شرايين الرقبة.",
              "تخطيط القلب ومراقبة النظم: لصقات على الصدر، أحياناً لعدة أيام، لالتقاط اضطراب في نظم القلب قد يكون مصدر الجلطة.",
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
        key: "exercise",
        heading: "التمارين المهمة",
        blocks: [
          {
            type: "paragraph",
            text: "الحركة علاج بعد السكتة وليست إضافة اختيارية. النهوض من السرير بأمان وفي وقت مبكر، تحت إشراف، من أقوى العوامل المؤثرة في مقدار ما يعود من الوظائف. فريق العلاج الطبيعي يحدد المستوى، وهذه هي الأولويات التي يعملون نحوها.",
          },
          {
            type: "list",
            items: [
              "توازن الجلوس ثم الوقوف أولاً، تحت إشراف، قبل أي تدريب على المشي.",
              "تكرار تمارين محددة بالذراع أو الساق الأضعف. يعيد الدماغ تنظيم نفسه حول الحركة التي تكررها فعلاً، فمئات التكرارات الصغيرة أفضل من بضع تكرارات كبيرة.",
              "تدريب يومي على المشي مع زيادة المسافة تدريجياً، باستخدام الوسيلة المساعدة التي يحددها أخصائي العلاج الطبيعي.",
              "تحريك الكتف بلطف في الجانب الضعيف ضمن مدى الحركة، لحماية مفصل يسهل خلعه حين تضعف العضلات.",
              "تمارين هوائية — المشي أو دراجة ثابتة — بعد أن يستقر توازنك، لتقليل خطر سكتة ثانية.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "افعل ذلك مع أخصائي العلاج الطبيعي لا بمفردك",
            items: [
              "السقوط شائع في الأسابيع الأولى ويؤخر التعافي.",
              "اسأل أخصائي العلاج الطبيعي أي التمارين آمن دون إشراف في المنزل.",
              "توقف وأبلغ عن أي ألم جديد في الصدر أو ضيق تنفس شديد أو تغيّر مفاجئ في الضعف.",
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
