import type { Condition } from "../schema";

export const lowBackPain = {
  slug: "low-back-pain",
  categoryId: "spine",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 8,
  sources: [
    {
      label: "NICE guideline NG59 — Low back pain and sciatica in over 16s",
      url: "https://www.nice.org.uk/guidance/ng59",
    },
    {
      label: "NICE clinical guideline CG173 — Neuropathic pain in adults",
      url: "https://www.nice.org.uk/guidance/cg173",
    },
  ],
  en: {
    title: "Low back pain and sciatica",
    summary:
      "Why most back pain needs movement rather than a scan, how to recognise sciatica and cauda equina, and what modern guidelines actually recommend.",
    category: "Neck and back",
    metaTitle: "Low back pain and sciatica — NeuroCare",
    metaDescription:
      "Patient guide to low back pain and sciatica: presentation, cauda equina red flags, when MRI helps, evidence-based treatment and back exercises.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Low back pain is one of the most common reasons people see any doctor, and in around nine out of ten cases no specific structure can be blamed. This is called non-specific low back pain. It is not a diagnosis of exclusion or a way of saying nothing is wrong — it means the pain is coming from the normal structures of the back working under load, and it means the outlook is good.",
          },
          {
            type: "paragraph",
            text: "The most useful thing to know is that disc bulges, degeneration and 'wear and tear' appear on the scans of large numbers of people who have never had back pain. By the age of 50, most people have disc degeneration on MRI. Finding it does not explain your pain, and treating the scan rather than the person is the commonest route from a two-week problem to a two-year one.",
          },
          {
            type: "list",
            items: [
              "Non-specific low back pain: the large majority. Improves substantially within six weeks for most people.",
              "Sciatica: a nerve root compressed or inflamed, producing leg pain below the knee that is usually worse than the back pain itself.",
              "Spinal stenosis: narrowing of the canal, typically in older adults, causing leg heaviness and pain on walking that eases on sitting or leaning forward.",
              "Serious causes — fracture, infection, cancer, inflammatory disease — are uncommon, and the assessment is designed to detect them.",
              "Recurrence is normal and does not mean the back is deteriorating.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "Common presentation",
        blocks: [
          {
            type: "paragraph",
            text: "Typical back pain sits across the lower back, sometimes spreading into the buttock or upper thigh, and is worse with certain movements. It often begins after lifting, twisting, a long drive or a period of unusual activity — and just as often begins with no identifiable cause at all, which is not sinister.",
          },
          {
            type: "list",
            items: [
              "Pain and stiffness across the lower back, often with muscle spasm.",
              "Worse on bending, sitting for long periods, or first thing in the morning.",
              "Pain may spread to the buttock or the back of the thigh but stops above the knee.",
              "Sciatica: sharp, burning or electric pain travelling below the knee into the calf or foot, often with pins and needles or numbness in a strip, and typically worse than the back pain.",
              "Spinal stenosis: heaviness, aching or cramping in both legs after walking a certain distance, relieved within minutes by sitting or leaning on a trolley.",
              "Most acute episodes improve markedly within two to six weeks, though a background ache can persist longer.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Cauda equina syndrome — go to an emergency department now",
            items: [
              "Difficulty passing urine, a weak stream, or being unable to tell when the bladder is full.",
              "Loss of bladder or bowel control, or new incontinence.",
              "Numbness or altered sensation around the back passage, genitals, buttocks or inner thighs — the area that would touch a saddle.",
              "Numbness or weakness in both legs, or rapidly worsening weakness in one.",
              "Loss of sexual sensation.",
              "This is a surgical emergency. Delay of even hours can cause permanent damage. Do not wait for a clinic appointment — call 998 or go to hospital.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Other back pain that needs prompt assessment",
            items: [
              "Back pain after a significant fall or accident, or in someone with osteoporosis or on long-term steroids.",
              "Fever, night sweats, or unexplained weight loss with back pain.",
              "A history of cancer, or intravenous drug use, with new back pain.",
              "Constant pain that is clearly worse at night and not relieved by any position.",
              "Back pain starting before the age of 20 or after 55 for the first time.",
              "Progressive leg weakness — a foot that drags or catches.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "Tools of diagnosis",
        blocks: [
          {
            type: "paragraph",
            text: "Assessment is clinical, and its main purpose is to separate the large majority who will get better with the right advice from the small minority with a serious cause or a nerve problem needing intervention. National guidelines are explicit that routine imaging for back pain does more harm than good.",
          },
          {
            type: "list",
            items: [
              "A careful history including red-flag questions, and specific questions about bladder, bowel and saddle sensation.",
              "Examination of movement, leg power, reflexes, sensation and the straight-leg raise test.",
              "Assessment of the hips, because hip arthritis frequently presents as back or buttock pain.",
              "Screening for factors that predict a slow recovery — fear of movement, low mood, and beliefs that the back is damaged. These predict outcome better than any scan.",
              "Blood tests when infection, inflammation or cancer is a possibility.",
              "MRI is indicated for red flags, for cauda equina symptoms as an emergency, for progressive weakness, or for sciatica that has not improved after six to twelve weeks and where injection or surgery is being considered.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Why your doctor may not order a scan",
            items: [
              "For non-specific back pain, imaging does not improve outcomes and is associated with more pain, more procedures and worse function a year later.",
              "Almost every adult scan shows some degeneration. Being told you have the spine of a seventy-year-old is unhelpful, frightening and usually irrelevant.",
              "The exception is red flags or a nerve problem needing a decision — there, imaging is essential and should be prompt.",
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
            text: "If imaging or nerve testing is arranged, it is to answer a specific question. Knowing what happens — and how to read the report language — makes the process much less alarming.",
          },
          {
            type: "list",
            items: [
              "MRI of the lumbar spine: 20 to 30 minutes lying flat and still inside a noisy tunnel, with ear protection and a call buzzer. No radiation, no pain. Contrast is usually unnecessary unless you have had previous back surgery or infection is suspected.",
              "Lying flat can be the hardest part in acute pain. A pillow under the knees is usually allowed, and taking a painkiller an hour before is a reasonable request.",
              "Tell staff in advance about a pacemaker, spinal cord stimulator, implanted metal, pregnancy or claustrophobia.",
              "Expect the report to mention disc desiccation, bulging, facet arthropathy or degenerative change. These are common age-related findings, not necessarily the cause of your pain. Ask your doctor which findings, if any, match your symptoms.",
              "CT scan: quick, uses X-rays, better for bone than for discs and nerves. Used mainly after trauma or when MRI is not possible.",
              "Nerve conduction studies and EMG: electrodes deliver brief pulses that feel like sharp taps, then a fine needle samples a few muscles. Takes 30 to 60 minutes, uncomfortable rather than painful. Useful for confirming which nerve root is affected, or for distinguishing sciatica from a peripheral nerve problem or neuropathy.",
              "Nerve tests may be normal in the first two to three weeks, and are not needed for most straightforward sciatica.",
              "DEXA bone density scan: painless, a few minutes, arranged if a fragility fracture is suspected.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "Management and medications",
        blocks: [
          {
            type: "paragraph",
            text: "Modern guidelines have moved decisively away from rest and painkillers towards movement, education and exercise. Bed rest, in particular, makes back pain worse — the aim is to stay as active as the pain allows and return to normal activity early, using medication only as a bridge.",
          },
          {
            type: "list",
            items: [
              "Stay active and continue working if you can, with modified duties if needed. Bed rest beyond a day or two delays recovery.",
              "Exercise and physiotherapy are first-line treatment, not what you try after medication fails.",
              "Anti-inflammatory medicines such as ibuprofen or naproxen at the lowest effective dose for the shortest time, with food. Use with caution if you have stomach, kidney or heart disease.",
              "Paracetamol alone is no longer recommended for low back pain — the evidence shows little benefit.",
              "A muscle relaxant may help a severe spasm for a few days, but causes drowsiness and is not for long-term use.",
              "Opioids should be avoided. They do not improve long-term outcomes in back pain and carry real risks of dependence and worse function.",
              "Gabapentin and pregabalin are specifically not recommended for sciatica — the evidence shows no benefit and significant side effects. Duloxetine or amitriptyline may be considered for persistent nerve pain.",
              "Manual therapy or acupuncture may be offered, but as part of a package that includes exercise — not on their own.",
              "For persistent, disabling sciatica: a nerve root injection can help, and surgery is considered when leg pain has failed several months of proper conservative treatment, or where there is progressive weakness.",
              "Psychological support and pain-management programmes are effective for pain lasting beyond three months, and are not a suggestion that the pain is imagined.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "What not to do",
            items: [
              "Do not rest in bed. It is one of the most reliably harmful things you can do for back pain.",
              "Do not wear a back brace long-term unless specifically prescribed — it weakens the trunk muscles.",
              "Do not stop moving because you are afraid of causing damage. Hurt does not equal harm in non-specific back pain.",
              "Do not chase a scan for reassurance. The most likely outcome is a frightening word that does not explain your pain.",
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
            text: "No single exercise is best for back pain — the evidence supports whatever exercise you will actually keep doing. What matters is starting early, progressing gradually, and continuing after the pain settles. Walking is the most underrated treatment there is.",
          },
          {
            type: "list",
            items: [
              "Walking daily, starting with whatever is comfortable and building up by a few minutes each week. Aim towards 30 minutes.",
              "Knee rolls: lying on your back with knees bent, roll both knees slowly side to side within a comfortable range, ten each way.",
              "Knee to chest: pull one knee gently towards the chest, hold 20 seconds, five each side.",
              "Pelvic tilts: lying with knees bent, flatten the lower back into the floor, hold five seconds, ten repetitions.",
              "Bird-dog: on hands and knees, extend the opposite arm and leg, hold five seconds, ten each side. Builds the trunk control that protects the back.",
              "Bridging: lying with knees bent, lift the hips, hold five seconds, ten repetitions. Strengthens the glutes, which take load off the back.",
              "Hip flexor and hamstring stretches, particularly if you sit for long periods.",
              "When lifting: bend the hips and knees, keep the load close, and turn with your feet rather than twisting the spine. Lifting is not dangerous — lifting badly, cold, and beyond your current capacity is.",
              "Build back gradually rather than resuming your previous gym routine at full load. Deconditioning is a bigger contributor to recurrence than any structural finding.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with back pain",
        blocks: [
          {
            type: "paragraph",
            text: "The strongest predictors of a slow recovery are not on the scan. They are fear of movement, the belief that the back is damaged, low mood, and long periods away from work. Each is modifiable, and addressing them changes outcomes more than any medication.",
          },
          {
            type: "list",
            items: [
              "Understand that hurt does not equal harm. Discomfort while moving is expected and is not a sign of new injury.",
              "Return to work early, with adjusted duties if needed. Long absence makes recovery less likely, not more.",
              "Break up sitting. Stand and move every 30 to 45 minutes — this matters more than the chair you buy.",
              "Sleep on whatever is comfortable. There is no evidence that a very firm mattress helps; medium-firm suits most people.",
              "Keep weight in a healthy range and stay active generally. Both reduce recurrence.",
              "Stop smoking — it is associated with more back pain and slower disc healing.",
              "Treat low mood, poor sleep and stress deliberately. They amplify pain through real, well-documented mechanisms.",
              "Expect recurrences and have a plan: resume the exercises, stay active, and use short-term medication rather than starting from scratch each time.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "Questions to ask your doctor",
        blocks: [
          {
            type: "list",
            items: [
              "Is this non-specific back pain, sciatica, or something else?",
              "Do I have any red flags, and what symptoms should send me to hospital immediately?",
              "Do I need a scan now, and if not, what would change that?",
              "If my scan shows degeneration or a disc bulge, does that match my symptoms?",
              "What can I take, at what dose, for how long, and what should I avoid?",
              "Can I be referred to physiotherapy?",
              "What can I safely do at work and at the gym?",
              "If this does not settle in six weeks, what happens next?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "ألم أسفل الظهر وعرق النسا",
    summary:
      "لماذا يحتاج معظم ألم الظهر إلى الحركة لا إلى الأشعة، وكيف تتعرف على عرق النسا ومتلازمة ذيل الفرس، وما توصي به الإرشادات الحديثة فعلاً.",
    category: "الرقبة والظهر",
    metaTitle: "ألم أسفل الظهر وعرق النسا — NeuroCare",
    metaDescription:
      "دليل المريض لألم أسفل الظهر وعرق النسا: الأعراض، علامات ذيل الفرس الخطرة، متى يفيد الرنين، العلاج المبني على الأدلة وتمارين الظهر.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "ألم أسفل الظهر من أشيع أسباب زيارة الطبيب، وفي نحو تسع حالات من كل عشر لا يمكن تحميل بنية محددة المسؤولية. يُسمى هذا ألم الظهر غير النوعي. وهو ليس تشخيصاً بالاستبعاد ولا طريقة للقول إنه «لا يوجد شيء» — بل يعني أن الألم يأتي من بنى الظهر الطبيعية وهي تعمل تحت حمل، ويعني أن المآل جيد.",
          },
          {
            type: "paragraph",
            text: "وأنفع ما ينبغي معرفته أن انتفاخات الأقراص والتنكّس و«الاحتكاك» تظهر في صور أعداد كبيرة ممن لم يشكوا يوماً من ألم ظهر. فبحلول سن الخمسين يكون لدى معظم الناس تنكّس في الأقراص على الرنين. وجوده لا يفسّر ألمك، وعلاج الصورة بدل المريض أشيع طريق لتحويل مشكلة أسبوعين إلى مشكلة سنتين.",
          },
          {
            type: "list",
            items: [
              "ألم الظهر غير النوعي: الغالبية العظمى. يتحسّن كثيراً خلال ستة أسابيع عند معظم الناس.",
              "عرق النسا: جذر عصبي مضغوط أو ملتهب يسبب ألماً في الساق تحت الركبة، وهو عادة أشد من ألم الظهر نفسه.",
              "تضيّق القناة الشوكية: ضيق في القناة، غالباً لدى كبار السن، يسبب ثقلاً وألماً في الساقين عند المشي يخف بالجلوس أو الانحناء للأمام.",
              "الأسباب الخطيرة — كسر أو عدوى أو سرطان أو مرض التهابي — غير شائعة، والتقييم مصمم لاكتشافها.",
              "التكرار طبيعي ولا يعني أن الظهر يتدهور.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "الأعراض الشائعة",
        blocks: [
          {
            type: "paragraph",
            text: "ألم الظهر النموذجي يمتد عبر أسفل الظهر، وينتشر أحياناً إلى الأرداف أو أعلى الفخذ، ويزداد مع حركات معينة. يبدأ غالباً بعد رفع أو التواء أو قيادة طويلة أو فترة نشاط غير معتاد — وبنفس القدر يبدأ دون سبب يمكن تحديده إطلاقاً، وهذا ليس مقلقاً.",
          },
          {
            type: "list",
            items: [
              "ألم وتيبّس عبر أسفل الظهر، غالباً مع تشنج عضلي.",
              "يسوء عند الانحناء أو الجلوس الطويل أو أول الصباح.",
              "قد ينتشر الألم إلى الأرداف أو خلف الفخذ لكنه يتوقف فوق الركبة.",
              "عرق النسا: ألم حاد أو حارق أو كهربائي ينزل تحت الركبة إلى الساق أو القدم، غالباً مع وخز أو تنميل في شريط محدد، وعادة أشد من ألم الظهر.",
              "تضيّق القناة: ثقل أو ألم أو تقلّص في الساقين بعد مسافة معينة من المشي، يزول خلال دقائق بالجلوس أو الاتكاء على عربة.",
              "معظم النوبات الحادة تتحسّن بوضوح خلال أسبوعين إلى ستة أسابيع، وإن استمر ألم خفيف في الخلفية أطول.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "متلازمة ذيل الفرس — اذهب إلى الطوارئ الآن",
            items: [
              "صعوبة في التبول أو ضعف في تدفق البول أو عدم القدرة على الإحساس بامتلاء المثانة.",
              "فقدان التحكم في المثانة أو الأمعاء أو سلس جديد.",
              "تنميل أو تغيّر في الإحساس حول فتحة الشرج أو الأعضاء التناسلية أو الأرداف أو باطن الفخذين — المنطقة التي تلامس السرج.",
              "تنميل أو ضعف في الساقين معاً، أو ضعف يتفاقم بسرعة في إحداهما.",
              "فقدان الإحساس الجنسي.",
              "هذه حالة جراحية طارئة. التأخير ولو ساعات قد يسبب ضرراً دائماً. لا تنتظر موعداً في العيادة — اتصل بالرقم 998 أو اذهب إلى المستشفى.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "ألم ظهر آخر يحتاج تقييماً سريعاً",
            items: [
              "ألم ظهر بعد سقوط كبير أو حادث، أو لدى شخص مصاب بهشاشة العظام أو يتناول كورتيزوناً طويل الأمد.",
              "حمى أو تعرّق ليلي أو نقص وزن غير مفسّر مع ألم الظهر.",
              "تاريخ سرطان، أو تعاطٍ وريدي، مع ألم ظهر جديد.",
              "ألم مستمر يسوء بوضوح ليلاً ولا يخف بأي وضعية.",
              "ألم ظهر يبدأ لأول مرة قبل سن العشرين أو بعد الخامسة والخمسين.",
              "ضعف متزايد في الساق — قدم تُجرّ أو تتعثر.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "أدوات التشخيص",
        blocks: [
          {
            type: "paragraph",
            text: "التقييم إكلينيكي، وغرضه الأساسي فصل الغالبية العظمى الذين سيتحسنون بالنصيحة الصحيحة عن الأقلية الصغيرة ذات السبب الخطير أو مشكلة العصب التي تحتاج تدخلاً. والإرشادات الوطنية صريحة في أن الأشعة الروتينية لألم الظهر ضررها أكبر من نفعها.",
          },
          {
            type: "list",
            items: [
              "قصة دقيقة تشمل أسئلة علامات الخطر، وأسئلة محددة عن المثانة والأمعاء وإحساس منطقة السرج.",
              "فحص الحركة وقوة الساق والمنعكسات والإحساس واختبار رفع الساق الممدودة.",
              "فحص الوركين، لأن خشونة الورك كثيراً ما تظهر كألم ظهر أو أرداف.",
              "البحث عن عوامل تتنبأ ببطء التعافي — الخوف من الحركة وانخفاض المزاج والاعتقاد بأن الظهر متضرر. هذه تتنبأ بالنتيجة أفضل من أي أشعة.",
              "تحاليل دم عند احتمال العدوى أو الالتهاب أو السرطان.",
              "يُطلب الرنين عند علامات الخطر، وكحالة طارئة عند أعراض ذيل الفرس، وعند الضعف المتزايد، أو لعرق نسا لم يتحسّن بعد ستة إلى اثني عشر أسبوعاً ويُدرس فيه الحقن أو الجراحة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "لماذا قد لا يطلب طبيبك أشعة",
            items: [
              "في ألم الظهر غير النوعي، لا تحسّن الأشعة النتيجة وترتبط بألم أكثر وإجراءات أكثر ووظيفة أسوأ بعد سنة.",
              "تُظهر كل صورة لبالغ تقريباً بعض التنكّس. وإخبارك بأن عمودك الفقري يشبه عمود سبعيني كلام غير مفيد ومخيف وغير ذي صلة عادة.",
              "الاستثناء هو علامات الخطر أو مشكلة عصبية تحتاج قراراً — وهناك تكون الأشعة ضرورية وينبغي أن تكون سريعة.",
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
            text: "إن طُلبت أشعة أو تخطيط أعصاب فذلك للإجابة عن سؤال محدد. ومعرفة ما يحدث — وكيف تقرأ لغة التقرير — تجعل الأمر أقل إثارة للقلق بكثير.",
          },
          {
            type: "list",
            items: [
              "رنين مغناطيسي لأسفل الظهر: من 20 إلى 30 دقيقة مستلقياً بلا حركة داخل نفق صوته مرتفع، مع واقٍ للأذن وجرس للاستدعاء. بلا إشعاع وبلا ألم. الصبغة غير لازمة عادة إلا إن كانت لديك جراحة ظهر سابقة أو اشتُبه بعدوى.",
              "الاستلقاء المسطح قد يكون أصعب جزء أثناء الألم الحاد. وسادة تحت الركبتين مسموحة عادة، وتناول مسكّن قبل الموعد بساعة طلب معقول.",
              "أخبر الفريق مسبقاً عن منظم ضربات القلب أو محفّز الحبل الشوكي أو معادن مزروعة أو حمل أو رهاب أماكن مغلقة.",
              "توقّع أن يذكر التقرير جفاف الأقراص أو انتفاخها أو خشونة المفاصل الوجيهية أو تغيّرات تنكّسية. هذه نتائج شائعة مرتبطة بالعمر وليست بالضرورة سبب ألمك. اسأل طبيبك أي النتائج — إن وُجدت — تطابق أعراضك.",
              "الأشعة المقطعية: سريعة وتستخدم الأشعة السينية، وأفضل للعظام منها للأقراص والأعصاب. تُستخدم أساساً بعد الإصابات أو حين يتعذر الرنين.",
              "تخطيط الأعصاب والعضلات: أقطاب تُرسل نبضات قصيرة تُحسّ كنقرات حادة، ثم إبرة رفيعة تفحص بضع عضلات. يستغرق من 30 إلى 60 دقيقة، وهو مزعج لا مؤلم. مفيد لتأكيد أي جذر عصبي متأثر، أو للتفريق بين عرق النسا ومشكلة عصب طرفي أو اعتلال أعصاب.",
              "قد يكون تخطيط الأعصاب طبيعياً في أول أسبوعين إلى ثلاثة، وهو غير لازم لمعظم حالات عرق النسا الواضحة.",
              "قياس كثافة العظام: غير مؤلم ويستغرق دقائق، ويُطلب عند الاشتباه بكسر هشاشي.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "العلاج والنصائح",
        blocks: [
          {
            type: "paragraph",
            text: "ابتعدت الإرشادات الحديثة بوضوح عن الراحة والمسكنات نحو الحركة والتثقيف والتمارين. والراحة في السرير تحديداً تزيد ألم الظهر سوءاً — والهدف أن تبقى نشطاً بقدر ما يسمح الألم وأن تعود إلى نشاطك المعتاد مبكراً، مستخدماً الدواء كجسر فقط.",
          },
          {
            type: "list",
            items: [
              "ابقَ نشطاً وواصل العمل إن استطعت، مع تعديل المهام عند الحاجة. الراحة في السرير أكثر من يوم أو يومين تؤخر التعافي.",
              "التمارين والعلاج الطبيعي علاج من الخط الأول، لا ما تجرّبه بعد فشل الدواء.",
              "مضادات الالتهاب مثل الإيبوبروفين أو النابروكسين بأقل جرعة فعّالة ولأقصر مدة، مع الطعام. واحذر إن كان لديك مرض في المعدة أو الكلى أو القلب.",
              "لم يعد الباراسيتامول وحده موصى به لألم أسفل الظهر — إذ تُظهر الأدلة فائدة ضئيلة.",
              "قد يفيد مُرخي العضلات في تشنج شديد لأيام قليلة، لكنه يسبب نعاساً وليس للاستخدام طويل الأمد.",
              "ينبغي تجنّب المشتقات الأفيونية. لا تحسّن النتائج بعيدة المدى في ألم الظهر وتحمل مخاطر اعتماد حقيقية ووظيفة أسوأ.",
              "الجابابنتين والبريجابالين غير موصى بهما تحديداً لعرق النسا — إذ لا تُظهر الأدلة فائدة مع آثار جانبية معتبرة. وقد يُدرس الدولوكسيتين أو الأميتريبتيلين لألم عصبي مستمر.",
              "قد يُعرض العلاج اليدوي أو الوخز بالإبر، لكن ضمن حزمة تشمل التمارين لا بمفردهما.",
              "لعرق النسا المستمر والمعطِّل: قد يفيد حقن جذر العصب، وتُدرس الجراحة حين يفشل ألم الساق بعد أشهر من العلاج التحفظي الصحيح، أو عند وجود ضعف متزايد.",
              "الدعم النفسي وبرامج إدارة الألم فعّالة للألم المستمر أكثر من ثلاثة أشهر، وليست تلميحاً إلى أن الألم متخيّل.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "ما الذي يجب تجنّبه",
            items: [
              "لا تلزم السرير. من أكثر الأمور ضرراً بشكل موثوق لألم الظهر.",
              "لا ترتدِ حزام ظهر لفترة طويلة إلا إن وُصف تحديداً — فهو يُضعف عضلات الجذع.",
              "لا تتوقف عن الحركة خوفاً من إحداث ضرر. الألم لا يساوي الأذى في ألم الظهر غير النوعي.",
              "لا تسعَ خلف أشعة للاطمئنان. النتيجة الأرجح كلمة مخيفة لا تفسّر ألمك.",
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
            text: "لا يوجد تمرين واحد هو الأفضل لألم الظهر — فالأدلة تدعم أي تمرين ستواظب عليه فعلاً. المهم أن تبدأ مبكراً وتتدرّج وتستمر بعد زوال الألم. والمشي أكثر العلاجات بخساً لحقها.",
          },
          {
            type: "list",
            items: [
              "المشي يومياً، ابدأ بما هو مريح وزد بضع دقائق كل أسبوع. استهدف 30 دقيقة.",
              "تدوير الركبتين: مستلقياً على ظهرك والركبتان مثنيتان، أدر الركبتين ببطء يميناً ويساراً ضمن مدى مريح، عشر مرات لكل جهة.",
              "الركبة إلى الصدر: اسحب ركبة واحدة برفق نحو الصدر، اثبت 20 ثانية، خمس مرات لكل جانب.",
              "إمالة الحوض: مستلقياً والركبتان مثنيتان، ألصق أسفل ظهرك بالأرض، اثبت خمس ثوانٍ، عشر تكرارات.",
              "تمرين «الطائر والكلب»: على اليدين والركبتين، مُدّ الذراع والساق المتقابلتين، اثبت خمس ثوانٍ، عشر مرات لكل جانب. يبني تحكّم الجذع الذي يحمي الظهر.",
              "الجسر: مستلقياً والركبتان مثنيتان، ارفع الحوض، اثبت خمس ثوانٍ، عشر تكرارات. يقوّي عضلات الأرداف التي تخفف الحمل عن الظهر.",
              "إطالة ثنيات الورك وأوتار الركبة، خاصة إن كنت تجلس فترات طويلة.",
              "عند الرفع: اثنِ الوركين والركبتين، وأبقِ الحمل قريباً، والتفت بقدميك لا بلَيّ العمود الفقري. الرفع ليس خطراً — الخطر هو الرفع بطريقة سيئة وبعضلات باردة وفوق قدرتك الحالية.",
              "عد تدريجياً بدل استئناف روتين النادي السابق بحمل كامل. ضعف اللياقة يسهم في التكرار أكثر من أي اكتشاف بنيوي.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع ألم الظهر",
        blocks: [
          {
            type: "paragraph",
            text: "أقوى ما يتنبأ ببطء التعافي ليس في الأشعة، بل الخوف من الحركة والاعتقاد بأن الظهر متضرر وانخفاض المزاج والغياب الطويل عن العمل. وكل منها قابل للتعديل، ومعالجتها تغيّر النتيجة أكثر من أي دواء.",
          },
          {
            type: "list",
            items: [
              "افهم أن الألم لا يساوي الأذى. الانزعاج أثناء الحركة متوقّع وليس علامة إصابة جديدة.",
              "عد إلى العمل مبكراً مع تعديل المهام عند الحاجة. الغياب الطويل يقلل احتمال التعافي ولا يزيده.",
              "قسّم فترات الجلوس. قف وتحرّك كل 30 إلى 45 دقيقة — هذا أهم من الكرسي الذي تشتريه.",
              "نم على ما هو مريح لك. لا دليل على أن الفراش شديد الصلابة يفيد؛ والمتوسط الصلابة يناسب معظم الناس.",
              "حافظ على وزن صحي وابقَ نشطاً عموماً. كلاهما يقلل التكرار.",
              "أقلع عن التدخين — فهو مرتبط بألم ظهر أكثر وشفاء أبطأ للأقراص.",
              "عالج انخفاض المزاج وسوء النوم والتوتر بقصد. فهي تضخّم الألم عبر آليات حقيقية وموثّقة جيداً.",
              "توقّع التكرار وليكن لديك خطة: استأنف التمارين، وابقَ نشطاً، واستخدم دواءً قصير الأمد بدل البدء من الصفر كل مرة.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "أسئلة اطرحها على طبيبك",
        blocks: [
          {
            type: "list",
            items: [
              "هل هذا ألم ظهر غير نوعي أم عرق نسا أم شيء آخر؟",
              "هل لديّ أي علامات خطر، وما الأعراض التي ترسلني إلى المستشفى فوراً؟",
              "هل أحتاج أشعة الآن، وإن لم أكن أحتاجها فما الذي يغيّر ذلك؟",
              "إن أظهرت صوري تنكّساً أو انتفاخ قرص، فهل يطابق ذلك أعراضي؟",
              "ما الذي يمكنني تناوله، وبأي جرعة، ولكم من الوقت، وما الذي أتجنبه؟",
              "هل يمكن إحالتي إلى العلاج الطبيعي؟",
              "ما الذي يمكنني فعله بأمان في العمل وفي النادي الرياضي؟",
              "إن لم يهدأ هذا خلال ستة أسابيع، فماذا بعد؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
