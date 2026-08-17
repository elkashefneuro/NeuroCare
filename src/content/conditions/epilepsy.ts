import type { Condition } from "../schema";

export const epilepsy = {
  slug: "epilepsy-and-seizures",
  categoryId: "seizures",
  status: "published",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 12,
  sources: [
    {
      label: "NICE NG217 — Epilepsies in children, young people and adults",
      url: "https://www.nice.org.uk/guidance/ng217",
    },
    {
      label: "ILAE — Updated classification of epileptic seizures 2025",
      url: "https://www.ilae.org/guidelines/definition-and-classification/updated-classification-of-epileptic-seizures-2025",
    },
    {
      label: "ILAE — Practical definition of epilepsy",
      url: "https://www.ilae.org/guidelines/definition-and-classification/the-2014-definition-of-epilepsy-a-perspective-for-patients-and-caregivers",
    },
    {
      label: "Epilepsy Foundation — Seizure first aid",
      url: "https://www.epilepsy.com/recognition/first-aid-resources",
    },
    {
      label: "Mayo Clinic — Epilepsy: diagnosis and treatment",
      url: "https://www.mayoclinic.org/diseases-conditions/epilepsy/diagnosis-treatment/drc-20350098",
    },
    {
      label: "Cleveland Clinic — Epilepsy",
      url: "https://my.clevelandclinic.org/health/diseases/17636-epilepsy",
    },
    {
      label: "World Health Organization — Epilepsy fact sheet",
      url: "https://www.who.int/news-room/fact-sheets/detail/epilepsy",
    },
  ],
  en: {
    title: "Epilepsy and seizures",
    summary:
      "Learn what seizures can look like, how epilepsy is diagnosed and treated, and the simple first-aid steps that protect someone during an event.",
    keyPoints: [
      "A seizure is an event; epilepsy is an enduring tendency to have unprovoked seizures. One seizure does not always mean epilepsy.",
      "During a seizure: stay, keep the person safe, turn them onto their side when possible, and time the event.",
      "Call 998 for a seizure lasting 5 minutes or more, repeated seizures without recovery, a first seizure or any breathing or injury concern.",
      "Treatment is matched to seizure type and the person. Never stop an antiseizure medicine suddenly without urgent clinical advice.",
    ],
    category: "Seizure care",
    metaTitle: "Epilepsy and seizures: first aid, diagnosis and care | NeuroCare",
    metaDescription:
      "Patient guide to epilepsy and seizures: types, first aid, five-minute emergency rule, EEG and MRI, treatment, medicine safety, pregnancy and daily life.",
    disclaimer:
      "This guide is general patient education. It cannot identify the cause of an individual event or replace a personalised seizure plan. Follow your clinician’s emergency plan and call 998 in the UAE when emergency criteria are met.",
    sections: [
      {
        key: "understand",
        heading: "Understand seizures and epilepsy",
        blocks: [
          {
            type: "paragraph",
            text: "A seizure is a brief episode caused by abnormal electrical activity in the brain. It may change movement, awareness, behaviour, sensation, emotion or memory; not every seizure causes collapse and shaking. A provoked seizure can occur during an acute problem such as very low glucose, a severe infection, alcohol withdrawal, a recent brain injury or a major chemical imbalance.",
          },
          {
            type: "paragraph",
            text: "Epilepsy describes an enduring tendency to have unprovoked seizures. It is commonly diagnosed after two unprovoked seizures more than 24 hours apart, or after one unprovoked seizure when tests and circumstances show a high risk of recurrence, or when a recognised epilepsy syndrome is present. The diagnosis should explain the evidence and uncertainty, not rely on one test alone.",
          },
          {
            type: "list",
            items: [
              "The 2025 ILAE classification groups seizures as focal, generalised, unknown whether focal or generalised, or unclassified.",
              "Focal seizures begin in networks on one side of the brain; awareness may be preserved or impaired.",
              "Generalised seizures rapidly involve networks on both sides and include absence, myoclonic, tonic, atonic and tonic-clonic seizures.",
              "Causes can be structural, genetic, infectious, metabolic, immune or unknown, and more than one factor may contribute.",
              "Many people achieve good seizure control and live full lives with the right diagnosis, treatment and safety plan.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "Recognise a seizure and give first aid",
        blocks: [
          {
            type: "paragraph",
            text: "A focal seizure may cause a sudden pause, loss of response, repetitive movements, unusual smell or taste, a rising stomach sensation, déjà vu, fear, speech difficulty, or jerking or tingling in one body part. Generalised seizures may cause brief staring, sudden muscle jerks, loss of tone or a tonic-clonic event with stiffening and rhythmic jerking. Afterwards, confusion, sleepiness, headache or muscle soreness can last minutes to hours.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Seizure first aid: Stay, Safe, Side",
            items: [
              "Stay with the person, keep calm and start timing the seizure.",
              "Keep them safe: move dangerous objects, cushion the head, loosen tight clothing around the neck and remove glasses.",
              "Turn them onto their side when it is safe to do so, especially once jerking stops, and check that breathing returns normally.",
              "Do not restrain movements and do not put fingers, a spoon, medicine, food or water in the mouth.",
              "Do not give mouth-to-mouth breathing during active jerking. After it stops, begin CPR only if the person is not breathing normally and you are able to do so.",
              "Stay until awareness and breathing have recovered, explain what happened calmly and protect privacy.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Call 998 in the UAE when",
            items: [
              "The convulsive seizure reaches 5 minutes, lasts longer than the person’s action plan allows, or the duration is unknown.",
              "Another seizure begins before full recovery, or the person has difficulty breathing or does not wake as expected.",
              "It is a first known seizure, the person is pregnant, seriously unwell or injured, or the seizure happened in water.",
              "You are unsure what to do. Emergency dispatchers can guide you while help is on the way.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "Assessment and diagnosis",
        blocks: [
          {
            type: "paragraph",
            text: "The most useful evidence is a careful description of what happened before, during and after the event. A witness account or a safe phone video can help distinguish an epileptic seizure from fainting, a heart-rhythm problem, a sleep disorder, migraine or a non-epileptic event. Do not delay first aid or place anyone at risk to record a video.",
          },
          {
            type: "list",
            items: [
              "A neurological and general examination, with review of sleep, illness, alcohol or substances, medicines and family history.",
              "Blood tests when needed to look for glucose, electrolyte, infection, organ-function or medicine-related problems.",
              "An ECG, especially after an unexplained blackout, because some heart-rhythm disorders can resemble seizures.",
              "EEG to look for patterns that support the seizure type or epilepsy syndrome; a normal routine EEG does not exclude epilepsy.",
              "MRI using an epilepsy protocol when a structural cause needs to be assessed; CT may be used urgently in specific situations.",
              "Longer ambulatory EEG or video-EEG monitoring when events remain unclear or treatment-resistant.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Prepare for the first appointment",
            items: [
              "Bring a witness if possible and write down the timeline while memories are fresh.",
              "Note sleep loss, fever, missed medicine, alcohol, fasting, flashing-light exposure and menstrual timing without assuming any one factor caused the event.",
              "Bring videos only if they were recorded safely, plus a complete medicine and supplement list.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "Treatment",
        blocks: [
          {
            type: "paragraph",
            text: "Antiseizure medicine is the main treatment. The choice depends on seizure type and epilepsy syndrome, age, other conditions and medicines, mental health, bone health, pregnancy potential and personal priorities. Treatment often starts with one medicine and is adjusted gradually. The aim is no seizures with the fewest possible side effects.",
          },
          {
            type: "paragraph",
            text: "If two well-chosen and appropriately used medicine plans do not achieve sustained seizure freedom, ask for early referral to a specialist epilepsy centre. Reassessment may identify a different diagnosis, a surgical target or options such as neurostimulation or a medically supervised ketogenic diet. These treatments require specialist evaluation; the ketogenic diet is not a do-it-yourself diet.",
          },
          {
            type: "list",
            items: [
              "Take medicine at consistent times and agree what to do after a late or missed dose.",
              "Do not stop suddenly: withdrawal can provoke prolonged or repeated seizures.",
              "Discuss new rashes, marked mood change, suicidal thoughts, pregnancy or severe side effects urgently.",
              "Ask about interactions before starting prescription, non-prescription or herbal products.",
              "People at risk of prolonged or cluster seizures may need a written action plan and prescribed rescue medicine; carers should be trained in when and how to use it.",
              "Anyone planning pregnancy should have a specialist medicine review before conception when possible, but should not stop treatment without advice.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Live safely and confidently",
        blocks: [
          {
            type: "paragraph",
            text: "Safety advice should reduce avoidable risk without taking away independence. The right precautions depend on seizure type, timing and control. Regular sleep, reliable medicine use and moderation or avoidance of alcohol help many people. Illness, vomiting, travel across time zones and fasting can affect a medicine schedule, so plan ahead.",
          },
          {
            type: "paragraph",
            text: "Sudden unexpected death in epilepsy (SUDEP) is rare but important to discuss openly. Risk is higher with uncontrolled tonic-clonic seizures, particularly at night. The most useful protection is improving seizure control and taking medicine reliably; a clinician can discuss individual risk and reasonable night-time measures without creating unnecessary fear.",
          },
          {
            type: "list",
            items: [
              "Prefer a shower to bathing alone; use direct supervision for swimming and wear an appropriate life jacket around open water.",
              "Take care with heights, open flames, hot surfaces, power tools and locking bathroom doors.",
              "Follow UAE driving rules and your neurologist’s advice; do not drive after a seizure until formally cleared.",
              "Create a seizure action plan for home, work or school, including emergency contacts and rescue medicine if prescribed.",
              "Carry medical identification and enough medicine when travelling, with doses split between bags.",
              "Ask about mood, memory, sexual health, bone health, work and stigma — all are legitimate parts of epilepsy care.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "Questions for your appointment",
        blocks: [
          {
            type: "paragraph",
            text: "A good epilepsy plan names the seizure type, the treatment goal, the emergency threshold and the next step if seizures continue.",
          },
          {
            type: "list",
            items: [
              "Was this event an epileptic seizure, and do I meet the definition of epilepsy?",
              "What seizure type and epilepsy syndrome do you suspect, and what evidence supports it?",
              "What did the EEG and MRI show, and what does a normal result not rule out?",
              "Why is this medicine the best fit, what side effects should I watch for, and what should I do after a missed dose?",
              "Do I need a rescue medicine and a written seizure action plan?",
              "Which safety, driving, work, school, exercise and travel restrictions apply to me now?",
              "How does the plan change for pregnancy, contraception, fasting or another medicine?",
              "What is my individual SUDEP risk and which practical steps can reduce it?",
              "When should I be referred to a specialist epilepsy centre?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الصرع والنوبات",
    summary:
      "تعرّف إلى أشكال النوبات، وكيف يُشخَّص الصرع ويُعالج، وخطوات الإسعاف البسيطة التي تحمي الشخص أثناء النوبة.",
    keyPoints: [
      "النوبة حدث عابر، أما الصرع فهو استعداد مستمر لنوبات غير مستفَزَّة؛ ولا تعني نوبة واحدة دائماً وجود صرع.",
      "أثناء النوبة: ابقَ مع الشخص، وأمِّن المكان، وضعه على جانبه متى أمكن، واحسب مدة النوبة.",
      "اتصل بالرقم 998 إذا استمرت النوبة 5 دقائق أو تكررت من دون تعافٍ، أو كانت الأولى، أو وُجدت مشكلة في التنفس أو إصابة.",
      "يُختار العلاج وفق نوع النوبة وحالة الشخص. لا توقف دواء النوبات فجأة من دون مشورة طبية عاجلة.",
    ],
    category: "رعاية النوبات",
    metaTitle: "الصرع والنوبات: الإسعاف والتشخيص والعلاج | NeuroCare",
    metaDescription:
      "دليل عن الصرع والنوبات: الأنواع والإسعاف وقاعدة الدقائق الخمس وتخطيط الدماغ والرنين والعلاج وأمان الدواء والحمل والحياة اليومية.",
    disclaimer:
      "هذا الدليل معلومات عامة للمرضى، ولا يحدد سبب حدث بعينه ولا يستبدل خطة النوبات الشخصية. اتبع خطة طبيبك واتصل بالرقم 998 في الإمارات عند تحقق معايير الطوارئ.",
    sections: [
      {
        key: "understand",
        heading: "فهم النوبات والصرع",
        blocks: [
          {
            type: "paragraph",
            text: "النوبة نوبة قصيرة تنتج من نشاط كهربائي غير طبيعي في الدماغ. وقد تغير الحركة أو الوعي أو السلوك أو الإحساس أو المشاعر أو الذاكرة؛ فليست كل النوبات سقوطاً وتشنجاً. وقد تحدث نوبة مستفَزَّة أثناء مشكلة حادة مثل انخفاض شديد في السكر، أو عدوى خطيرة، أو انسحاب الكحول، أو إصابة حديثة في الدماغ، أو اضطراب كبير في أملاح الجسم.",
          },
          {
            type: "paragraph",
            text: "يصف الصرع استعداداً مستمراً لحدوث نوبات غير مستفَزَّة. يُشخَّص غالباً بعد نوبتين غير مستفَزَّتين يفصل بينهما أكثر من 24 ساعة، أو بعد نوبة واحدة إذا أظهرت الظروف والفحوص خطراً مرتفعاً للتكرار، أو عند وجود متلازمة صرعية معروفة. ينبغي أن يشرح التشخيص الأدلة ودرجة عدم اليقين، وألا يعتمد على فحص واحد فقط.",
          },
          {
            type: "list",
            items: [
              "تقسم رابطة مكافحة الصرع الدولية في تصنيف 2025 النوبات إلى بؤرية، أو معممة، أو غير معروف إن كانت بؤرية أم معممة، أو غير مصنفة.",
              "تبدأ النوبات البؤرية في شبكات ضمن جهة واحدة من الدماغ، وقد يبقى الوعي أو يتأثر.",
              "تشمل النوبات المعممة شبكات الجانبين سريعاً، ومنها الغيابية والرمعية العضلية والتوترية والارتخائية والتوترية الرمعية.",
              "قد يكون السبب بنيوياً أو وراثياً أو عدوى أو اضطراباً أيضياً أو مناعياً أو غير معروف، وقد يشترك أكثر من عامل.",
              "يحقق كثير من الأشخاص سيطرة جيدة على النوبات ويعيشون حياة كاملة مع التشخيص والعلاج وخطة الأمان المناسبة.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "التعرّف إلى النوبة وتقديم الإسعاف",
        blocks: [
          {
            type: "paragraph",
            text: "قد تسبب النوبة البؤرية توقفاً مفاجئاً عن الاستجابة، أو حركات متكررة، أو رائحة أو طعماً غير معتاد، أو إحساساً صاعداً في البطن، أو شعوراً بأن الموقف حدث من قبل، أو خوفاً، أو صعوبة في الكلام، أو رجفاناً أو وخزاً في جزء من الجسم. وقد تسبب النوبات المعممة تحديقاً قصيراً، أو نفضات عضلية مفاجئة، أو فقدان توتر العضلات، أو نوبة توترية رمعية مع تيبس ورجفان منتظم. وبعدها قد يستمر الارتباك أو النعاس أو الصداع أو ألم العضلات من دقائق إلى ساعات.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "إسعاف النوبة: ابقَ معه، أمِّن المكان، ضعه على جانبه",
            items: [
              "ابقَ مع الشخص، وحافظ على هدوئك، وابدأ حساب مدة النوبة.",
              "أمِّن المكان: أبعد الأجسام الخطرة، وضع شيئاً ليناً تحت الرأس، وفك الملابس الضيقة حول الرقبة، وانزع النظارة.",
              "ضعه على جانبه متى أصبح ذلك آمناً، وخصوصاً بعد توقف الرجفان، وتأكد من عودة التنفس بصورة طبيعية.",
              "لا تثبت حركته، ولا تضع أصابعك أو ملعقة أو دواء أو طعاماً أو ماءً في فمه.",
              "لا تعطِ تنفساً فموياً أثناء الرجفان. بعد توقفه، ابدأ الإنعاش فقط إذا لم يعد التنفس طبيعياً وكنت تعرف كيف تقوم به.",
              "ابقَ حتى يستعيد وعيه وتنفسه، واشرح له ما حدث بهدوء واحمِ خصوصيته.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "اتصل بالرقم 998 في الإمارات عندما",
            items: [
              "تبلغ النوبة التشنجية 5 دقائق، أو تتجاوز المدة المحددة في خطة الشخص، أو لا تعرف وقت بدايتها.",
              "تبدأ نوبة أخرى قبل التعافي الكامل، أو تظهر صعوبة في التنفس، أو لا يستيقظ الشخص كما هو متوقع.",
              "تكون هذه أول نوبة معروفة، أو تكون المريضة حاملاً، أو يكون الشخص مريضاً بشدة أو مصاباً، أو حدثت النوبة في الماء.",
              "لا تعرف ماذا تفعل؛ يمكن لمجيب الطوارئ إرشادك إلى أن تصل المساعدة.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "التقييم والتشخيص",
        blocks: [
          {
            type: "paragraph",
            text: "أهم دليل هو وصف دقيق لما حدث قبل النوبة وأثناءها وبعدها. وقد تساعد شهادة من شاهدها أو مقطع صُوّر بأمان على التفريق بين النوبة الصرعية والإغماء واضطراب نظم القلب واضطراب النوم والصداع النصفي والحدث غير الصرعي. لا تؤخر الإسعاف ولا تعرض أحداً للخطر من أجل التصوير.",
          },
          {
            type: "list",
            items: [
              "فحص عصبي وعام، مع مراجعة النوم والمرض والكحول أو المواد والأدوية والتاريخ العائلي.",
              "تحاليل عند الحاجة للبحث عن اضطراب السكر أو الأملاح أو العدوى أو وظائف الأعضاء أو مشكلة مرتبطة بالدواء.",
              "تخطيط للقلب، وخصوصاً بعد فقدان وعي غير مفسر، لأن بعض اضطرابات النظم قد تشبه النوبات.",
              "تخطيط كهربائي للدماغ للبحث عن أنماط تدعم نوع النوبة أو المتلازمة؛ ولا يستبعد التخطيط الروتيني الطبيعي وجود الصرع.",
              "رنين مغناطيسي ببروتوكول الصرع عند الحاجة إلى البحث عن سبب بنيوي، وقد تُستخدم الأشعة المقطعية بشكل عاجل في مواقف محددة.",
              "تخطيط مطول متنقل أو مراقبة بالفيديو والتخطيط عندما تبقى الأحداث غير واضحة أو مقاومة للعلاج.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "الاستعداد للموعد الأول",
            items: [
              "أحضر شاهداً إن أمكن، واكتب تسلسل الحدث قبل أن تتلاشى التفاصيل.",
              "دوّن قلة النوم والحمى والجرعات الفائتة والكحول والصيام والضوء الومّاض وتوقيت الدورة الشهرية من دون افتراض أن عاملاً واحداً هو السبب.",
              "أحضر المقاطع المصورة فقط إذا التُقطت بأمان، مع قائمة كاملة بالأدوية والمكملات.",
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
            text: "دواء النوبات هو العلاج الرئيسي. يعتمد الاختيار على نوع النوبة والمتلازمة والعمر والحالات والأدوية الأخرى والصحة النفسية وصحة العظام واحتمال الحمل والأولويات الشخصية. يبدأ العلاج غالباً بدواء واحد ويُعدَّل تدريجياً. والهدف هو منع النوبات بأقل قدر ممكن من الآثار الجانبية.",
          },
          {
            type: "paragraph",
            text: "إذا لم تحقق خطتان دوائيتان مناسبتان ومستخدمتان بصورة صحيحة توقفاً مستمراً للنوبات، فاطلب الإحالة المبكرة إلى مركز متخصص في الصرع. قد تكشف إعادة التقييم تشخيصاً مختلفاً أو بؤرة قابلة للجراحة أو خيارات مثل التحفيز العصبي أو الحمية الكيتونية تحت إشراف طبي. وتحتاج هذه العلاجات إلى تقييم متخصص؛ فالحمية الكيتونية ليست حمية تُجرَّب ذاتياً.",
          },
          {
            type: "list",
            items: [
              "تناول الدواء في أوقات ثابتة واتفق مسبقاً على التصرف عند تأخر الجرعة أو نسيانها.",
              "لا توقف الدواء فجأة؛ فقد يسبب الانسحاب نوبات طويلة أو متكررة.",
              "أبلغ سريعاً عن طفح جديد أو تغير شديد في المزاج أو أفكار انتحارية أو حمل أو أثر جانبي خطير.",
              "اسأل عن التداخلات قبل بدء أي دواء بوصفة أو من دونها أو أي مستحضر عشبي.",
              "قد يحتاج المعرضون لنوبات طويلة أو متقاربة إلى خطة مكتوبة ودواء إسعافي موصوف، مع تدريب الأسرة على توقيت استخدامه وطريقته.",
              "يجب على من تخطط للحمل مراجعة العلاج مع متخصص قبل الحمل إن أمكن، لكن من دون إيقاف الدواء ذاتياً.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "حياة آمنة وواثقة",
        blocks: [
          {
            type: "paragraph",
            text: "ينبغي أن تقلل إرشادات الأمان المخاطر التي يمكن تجنبها من دون سلب الاستقلال. تختلف الاحتياطات بحسب نوع النوبات وتوقيتها ومدى السيطرة عليها. يفيد انتظام النوم والالتزام بالدواء والاعتدال في الكحول أو تجنبه كثيراً من الأشخاص. وقد يؤثر المرض والقيء والسفر عبر مناطق زمنية والصيام في جدول الدواء، لذلك خطط مسبقاً.",
          },
          {
            type: "paragraph",
            text: "الوفاة المفاجئة غير المتوقعة في الصرع (SUDEP) نادرة، لكن من المهم مناقشتها بصراحة. يزداد الخطر مع النوبات التوترية الرمعية غير المسيطر عليها، وخصوصاً ليلاً. أهم حماية هي تحسين السيطرة والالتزام بالدواء؛ ويمكن للطبيب مناقشة الخطر الشخصي وإجراءات الليل المعقولة من دون إثارة خوف غير ضروري.",
          },
          {
            type: "list",
            items: [
              "يفضل الاستحمام بالدش على الجلوس في حوض منفرداً، مع مراقبة مباشرة أثناء السباحة وسترة نجاة مناسبة قرب المياه المفتوحة.",
              "احذر المرتفعات واللهب المكشوف والأسطح الساخنة والأدوات الكهربائية وإغلاق باب الحمام بالمفتاح.",
              "اتبع قوانين القيادة في الإمارات ونصيحة طبيب الأعصاب؛ لا تقد السيارة بعد نوبة حتى تحصل على تصريح واضح.",
              "ضع خطة للنوبات في المنزل والعمل أو المدرسة، تشمل أرقام الطوارئ والدواء الإسعافي إن وُصف.",
              "احمل بطاقة تعريف طبية وكمية كافية من الدواء عند السفر، ووزع الجرعات بين الحقائب.",
              "اسأل عن المزاج والذاكرة والصحة الجنسية والعظام والعمل والوصمة؛ فجميعها أجزاء مشروعة من رعاية الصرع.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "أسئلة للطبيب",
        blocks: [
          {
            type: "paragraph",
            text: "تحدد الخطة الجيدة نوع النوبة وهدف العلاج وحد الطوارئ والخطوة التالية إذا استمرت النوبات.",
          },
          {
            type: "list",
            items: [
              "هل كان الحدث نوبة صرعية، وهل تنطبق عليّ معايير تشخيص الصرع؟",
              "ما نوع النوبة والمتلازمة المحتملة، وما الأدلة التي تدعم ذلك؟",
              "ماذا أظهر تخطيط الدماغ والرنين، وما الذي لا تستبعده النتيجة الطبيعية؟",
              "لماذا يناسبني هذا الدواء، وما الآثار التي أراقبها، وماذا أفعل عند نسيان جرعة؟",
              "هل أحتاج إلى دواء إسعافي وخطة مكتوبة للنوبات؟",
              "ما احتياطات الأمان والقيادة والعمل والدراسة والرياضة والسفر التي تنطبق عليّ الآن؟",
              "كيف تتغير الخطة مع الحمل أو منع الحمل أو الصيام أو دواء آخر؟",
              "ما خطر SUDEP لديّ، وما الخطوات العملية التي تخفضه؟",
              "متى ينبغي إحالتي إلى مركز متخصص في الصرع؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
