import type { Condition } from "../schema";

export const migraine = {
  slug: "migraine",
  categoryId: "headache",
  status: "published",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 11,
  sources: [
    {
      label: "NICE CG150 — Headaches in over 12s: diagnosis and management",
      url: "https://www.nice.org.uk/guidance/cg150",
    },
    {
      label: "American Headache Society — CGRP-targeting therapies position statement",
      url: "https://headachejournal.onlinelibrary.wiley.com/doi/full/10.1111/head.14692",
    },
    {
      label: "International Headache Society — ICHD-3 migraine classification",
      url: "https://ichd-3.org/1-migraine/",
    },
    {
      label: "Mayo Clinic — Migraine: symptoms and causes",
      url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/symptoms-causes/syc-20360201",
    },
    {
      label: "Mayo Clinic — Migraine: diagnosis and treatment",
      url: "https://www.mayoclinic.org/diseases-conditions/migraine-headache/diagnosis-treatment/drc-20360207",
    },
    {
      label: "Cleveland Clinic — Migraine aura",
      url: "https://my.clevelandclinic.org/health/diseases/22131-migraine-aura",
    },
  ],
  en: {
    title: "Migraine",
    summary:
      "Understand migraine as a neurological condition, recognise its patterns and warning signs, and build an effective plan for attacks and prevention.",
    keyPoints: [
      "Migraine is more than a headache and can affect vision, sensation, speech, balance, energy and thinking.",
      "A typical, stable migraine pattern is usually diagnosed from the history and examination; scans are used when features are unusual or concerning.",
      "Treat attacks early with a clinician-agreed plan and avoid frequent rescue medicine that can worsen headache.",
      "Prevention is worth discussing when attacks are frequent, disabling, prolonged or difficult to treat.",
    ],
    category: "Headache care",
    metaTitle: "Migraine: symptoms, aura, treatment and prevention | NeuroCare",
    metaDescription:
      "Modern patient guide to migraine and aura: symptoms, urgent warning signs, diagnosis, attack treatment, prevention, medication overuse and daily life.",
    disclaimer:
      "This guide is general patient information. Headache treatment must be individualised for medical history, pregnancy, other medicines and the pattern of symptoms. Seek urgent care for a new red-flag headache.",
    sections: [
      {
        key: "understand",
        heading: "Understand migraine",
        blocks: [
          {
            type: "paragraph",
            text: "Migraine is a neurological disorder that produces recurring attacks. Head pain is common, but an attack can also affect vision, sensation, speech, balance, the gut, energy and concentration. The nervous system becomes temporarily more sensitive; this is not a sign that the person is weak or unable to cope.",
          },
          {
            type: "paragraph",
            text: "An attack may move through phases. A prodrome can cause fatigue, mood change, food cravings, neck discomfort or frequent yawning. Aura, when present, usually develops gradually before or during the headache. The headache phase can last hours to several days, followed by a postdrome with tiredness or slowed thinking. Not every person has every phase.",
          },
          {
            type: "list",
            items: [
              "Migraine without aura is the most common pattern.",
              "Migraine with aura includes fully reversible visual, sensory, speech or other neurological symptoms.",
              "Chronic migraine means headache on at least 15 days each month, with migraine features on at least 8, for more than 3 months.",
              "Genes influence susceptibility. Sleep disruption, stress change, missed meals, dehydration, menstruation and some sensory stimuli may help trigger an attack, but triggers vary.",
              "A trigger is not the underlying cause, and trying to avoid every possible trigger can make life unnecessarily restrictive.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "Recognise migraine — and red flags",
        blocks: [
          {
            type: "paragraph",
            text: "Typical migraine headache is moderate or severe, often throbbing and sometimes one-sided. Routine movement may make it worse. Nausea and sensitivity to light or sound are common. Some people have little head pain but prominent aura, dizziness or other symptoms.",
          },
          {
            type: "paragraph",
            text: "Typical aura builds gradually over at least several minutes, often changes or moves, and usually resolves within an hour. It may cause zig-zag lines, flashing or a blind area; pins and needles spreading along a hand, arm or face; or temporary difficulty finding words. A first aura, an abrupt symptom, persistent symptoms or weakness needs medical assessment because stroke and other conditions can look similar.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Get urgent medical help for these warning signs",
            items: [
              "A sudden explosive headache that reaches maximum intensity within seconds or a few minutes.",
              "New weakness, facial droop, loss of vision, severe imbalance, confusion, fainting or difficulty speaking — use BE-FAST and call 998 in the UAE.",
              "Headache with fever, a stiff neck, a new rash, repeated vomiting, a seizure or reduced consciousness.",
              "A new severe headache during pregnancy or soon after delivery, after a head injury, or with very high blood pressure.",
              "A clearly new pattern after age 50, or in someone with cancer, immune suppression or a blood-clotting problem.",
              "A headache that steadily worsens, is triggered by coughing or exertion, wakes you repeatedly, or is unlike your established migraine.",
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
            text: "Migraine is a positive clinical diagnosis: the clinician matches the pattern of symptoms to recognised criteria and checks for signs of another cause. A normal neurological examination and a stable, typical history are reassuring. Brain imaging is not routinely needed only for reassurance; it is arranged when the history, examination or change in pattern creates concern.",
          },
          {
            type: "list",
            items: [
              "Describe when attacks began, how quickly symptoms build, how long they last and whether you return fully to normal.",
              "Record headache days, migraine days and days using each acute medicine for at least 8 weeks if possible.",
              "Note aura, nausea, light or sound sensitivity, menstruation, sleep, missed meals and the effect on work or home life.",
              "Bring a full medicine and supplement list, including contraception and non-prescription painkillers.",
              "Tell the clinician about pregnancy or plans for pregnancy, cardiovascular disease, high blood pressure and previous stroke or TIA.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "A simple diary is more useful than a perfect diary",
            items: [
              "Mark each headache day and its severity.",
              "Record the medicine used and whether normal activity returned within two hours.",
              "Look for repeatable patterns over several weeks rather than blaming a single food or event.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "Treat attacks and prevent migraine",
        blocks: [
          {
            type: "paragraph",
            text: "An acute plan works best when used early in the headache phase. Depending on medical history, a clinician may recommend a triptan, a non-steroidal anti-inflammatory medicine, paracetamol, or an appropriate combination. An anti-sickness medicine can help even when nausea is mild. CGRP receptor antagonists (gepants) are another option for some adults. Opioids are not recommended for routine migraine treatment.",
          },
          {
            type: "paragraph",
            text: "Using acute medicine too frequently can create medication-overuse headache. The risk threshold depends on the medicine: often 10 days per month for triptans, opioids or combination products, and 15 days for simple painkillers when this continues for more than 3 months. If use is approaching these levels, seek a structured withdrawal and prevention plan rather than taking more.",
          },
          {
            type: "paragraph",
            text: "Preventive treatment is considered when attacks remain frequent or disabling, acute treatment is unsuitable or overused, or the person prefers prevention. Options include established tablets selected for the person’s health profile, onabotulinumtoxinA for eligible chronic migraine, and CGRP-targeting injections or tablets. The American Headache Society considers CGRP-targeting therapies a first-line preventive option; local access and insurance criteria may differ.",
          },
          {
            type: "list",
            items: [
              "Agree in advance which acute medicine to use, when to take it, whether a second step is allowed and when to seek help.",
              "Give a preventive treatment an adequate trial at a tolerated dose, then review benefit, side effects and the person’s goals.",
              "Measure improvement by migraine days, severity and restored function — not only by complete elimination of headache.",
              "Some migraine medicines are unsuitable in pregnancy, while trying to conceive, or with particular heart and blood-vessel conditions; review them early with a clinician.",
              "Do not stop a preventive medicine suddenly unless a clinician advises it or an urgent adverse reaction is suspected.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living well with migraine",
        blocks: [
          {
            type: "paragraph",
            text: "A steady routine reduces avoidable nervous-system stress: regular sleep and wake times, adequate fluids, regular meals, gradual exercise and planned recovery after an attack. Consistency usually matters more than perfection. Build changes one at a time so it is clear what helps.",
          },
          {
            type: "paragraph",
            text: "Migraine can affect work, parenting, study and relationships even between attacks. Share a concise action plan with the people who need it. Practical adjustments may include access to water and medicine, short breaks in a quiet space, reduced glare or flexible hours during a severe episode.",
          },
          {
            type: "list",
            items: [
              "Keep acute medicine available and check expiry dates, especially when travelling.",
              "Protect sleep without oversleeping dramatically at weekends; address snoring or persistent insomnia.",
              "Do not skip meals to avoid a suspected food trigger unless the link is consistent and nutrition remains balanced.",
              "Discuss menstrual migraine, fasting during Ramadan, travel and contraception as part of the treatment plan.",
              "Screen for anxiety, depression and poor sleep when migraine is difficult to control; treating them can improve quality of life.",
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
            text: "Use your diary to choose the two or three issues that matter most. A clear plan should cover both today’s attack and the next few months.",
          },
          {
            type: "list",
            items: [
              "Does my pattern meet the criteria for migraine, and is it with aura, without aura or chronic migraine?",
              "Are any of my symptoms red flags, and do I need imaging or another test?",
              "What should I take first during an attack, how soon, and what is the second step if it does not work?",
              "How many days per month can I safely use each acute medicine?",
              "Would prevention help me, and which options fit my other conditions and preferences?",
              "How will we define success and when will we review or change the plan?",
              "Do pregnancy, contraception, fasting, blood pressure or heart disease change my options?",
              "What document or medicine should I carry when travelling?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الصداع النصفي (الشقيقة)",
    summary:
      "تعرّف إلى الصداع النصفي كاضطراب عصبي، وميّز نمطه وعلامات الخطر، وضع خطة فعالة لعلاج النوبات والوقاية منها.",
    keyPoints: [
      "الصداع النصفي أكثر من مجرد ألم في الرأس؛ فقد يؤثر في الرؤية والإحساس والكلام والتوازن والطاقة والتركيز.",
      "يُشخَّص النمط المعتاد والمستقر غالباً من القصة المرضية والفحص، ويُطلب التصوير عند وجود سمات غير معتادة أو مقلقة.",
      "عالج النوبة مبكراً وفق خطة متفق عليها، وتجنب الإفراط في أدوية النوبات لأنه قد يزيد الصداع.",
      "تستحق الوقاية المناقشة عندما تكون النوبات متكررة أو معطِّلة أو طويلة أو صعبة العلاج.",
    ],
    category: "رعاية الصداع",
    metaTitle: "الصداع النصفي: الأعراض والهالة والعلاج والوقاية | NeuroCare",
    metaDescription:
      "دليل حديث عن الصداع النصفي والهالة: الأعراض وعلامات الخطر والتشخيص وعلاج النوبات والوقاية والإفراط الدوائي والحياة اليومية.",
    disclaimer:
      "هذا الدليل معلومات عامة للمرضى. يجب اختيار علاج الصداع وفق التاريخ الطبي والحمل والأدوية الأخرى ونمط الأعراض. اطلب الرعاية العاجلة عند ظهور إحدى علامات الخطر.",
    sections: [
      {
        key: "understand",
        heading: "فهم الصداع النصفي",
        blocks: [
          {
            type: "paragraph",
            text: "الصداع النصفي (الشقيقة) اضطراب عصبي يسبب نوبات متكررة. ألم الرأس شائع، لكن النوبة قد تؤثر أيضاً في الرؤية والإحساس والكلام والتوازن والجهاز الهضمي والطاقة والتركيز. يصبح الجهاز العصبي أكثر حساسية مؤقتاً، ولا يعني ذلك ضعف الشخص أو عدم قدرته على التحمّل.",
          },
          {
            type: "paragraph",
            text: "قد تمر النوبة بمراحل. تسبقها أحياناً بوادر مثل الإرهاق أو تغير المزاج أو اشتهاء طعام معين أو ألم الرقبة أو كثرة التثاؤب. وقد تظهر الهالة قبل الصداع أو أثناءه. تستمر مرحلة الصداع ساعات وقد تمتد أياماً، ثم تأتي مرحلة ما بعد النوبة مع التعب أو بطء التفكير. وليس من الضروري أن يمر كل شخص بجميع المراحل.",
          },
          {
            type: "list",
            items: [
              "الصداع النصفي من دون هالة هو النمط الأكثر شيوعاً.",
              "الصداع النصفي المصحوب بهالة يتضمن أعراضاً بصرية أو حسية أو لغوية أو عصبية أخرى تزول تماماً.",
              "يُسمى الصداع النصفي مزمناً عند وجود صداع في 15 يوماً أو أكثر شهرياً، منها 8 أيام على الأقل بسمات الصداع النصفي، لأكثر من 3 أشهر.",
              "تؤثر الجينات في الاستعداد. وقد تساعد اضطرابات النوم أو تغير الضغط النفسي أو تفويت الوجبات أو الجفاف أو الدورة الشهرية أو بعض المؤثرات الحسية على بدء النوبة، لكن المحفزات تختلف.",
              "المحفز ليس السبب الأساسي، ومحاولة تجنب كل محفز محتمل قد تقيد الحياة من دون فائدة.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "تمييز الصداع النصفي وعلامات الخطر",
        blocks: [
          {
            type: "paragraph",
            text: "يكون ألم الصداع النصفي عادةً متوسطاً أو شديداً، وقد يكون نابضاً أو في جهة واحدة، ويزداد مع الحركة المعتادة. ويشيع الغثيان والحساسية للضوء أو الصوت. وقد يكون ألم الرأس بسيطاً لدى بعض الأشخاص بينما تبرز الهالة أو الدوار أو أعراض أخرى.",
          },
          {
            type: "paragraph",
            text: "تتطور الهالة المعتادة تدريجياً خلال عدة دقائق، وقد تتحرك أو تتغير، وتزول غالباً خلال ساعة. قد تظهر خطوط متعرجة أو ومضات أو بقعة عمياء، أو وخز ينتشر في اليد أو الذراع أو الوجه، أو صعوبة مؤقتة في إيجاد الكلمات. تحتاج الهالة لأول مرة، أو العرض المفاجئ، أو العرض المستمر، أو الضعف إلى تقييم طبي لأن السكتة وحالات أخرى قد تبدو مشابهة.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "اطلب مساعدة عاجلة عند ظهور هذه العلامات",
            items: [
              "صداع صاعق مفاجئ يبلغ أقصى شدته خلال ثوانٍ أو دقائق قليلة.",
              "ضعف جديد أو تدلي الوجه أو فقدان الرؤية أو اختلال شديد في التوازن أو ارتباك أو إغماء أو صعوبة في الكلام — استخدم BE-FAST واتصل بالرقم 998 في الإمارات.",
              "صداع مع حمى أو تيبس الرقبة أو طفح جديد أو قيء متكرر أو نوبة تشنج أو انخفاض الوعي.",
              "صداع شديد جديد أثناء الحمل أو بعد الولادة بفترة قصيرة، أو بعد إصابة في الرأس، أو مع ارتفاع شديد في ضغط الدم.",
              "نمط جديد بوضوح بعد سن الخمسين، أو لدى شخص مصاب بالسرطان أو ضعف المناعة أو اضطراب في تخثر الدم.",
              "صداع يزداد تدريجياً، أو يبدأ مع السعال أو المجهود، أو يوقظك مراراً، أو يختلف عن صداعك النصفي المعتاد.",
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
            text: "الصداع النصفي تشخيص إكلينيكي إيجابي؛ يطابق الطبيب نمط الأعراض مع معايير معروفة ويبحث عن أي دليل على سبب آخر. يكون الفحص العصبي الطبيعي مع قصة معتادة ومستقرة مطمئناً. ولا يُطلب تصوير الدماغ روتينياً لمجرد الاطمئنان، بل عند وجود ما يثير القلق في القصة أو الفحص أو تغير النمط.",
          },
          {
            type: "list",
            items: [
              "صف متى بدأت النوبات، وسرعة تطور الأعراض، ومدتها، وهل تعود إلى طبيعتك تماماً بعدها.",
              "سجّل أيام الصداع وأيام الصداع النصفي وأيام استخدام كل دواء للنوبات لمدة 8 أسابيع إن أمكن.",
              "دوّن الهالة والغثيان والحساسية للضوء أو الصوت والدورة الشهرية والنوم والوجبات وأثر النوبات في العمل أو المنزل.",
              "أحضر قائمة كاملة بالأدوية والمكملات، بما فيها موانع الحمل والمسكنات من دون وصفة.",
              "أخبر الطبيب عن الحمل أو التخطيط له، وأمراض القلب والأوعية وارتفاع الضغط وأي سكتة أو نوبة عابرة سابقة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "مفكرة بسيطة أفضل من مفكرة مثالية",
            items: [
              "ضع علامة على كل يوم صداع وسجّل شدته.",
              "اكتب الدواء المستخدم وهل عدت إلى نشاطك الطبيعي خلال ساعتين.",
              "ابحث عن نمط متكرر على مدى أسابيع، ولا تنسب النوبة إلى طعام أو حدث واحد فقط.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "علاج النوبات والوقاية",
        blocks: [
          {
            type: "paragraph",
            text: "تكون خطة النوبة أكثر فاعلية عند استخدامها مبكراً في مرحلة الصداع. بحسب التاريخ الطبي، قد يوصي الطبيب بأحد أدوية التريبتان، أو مضاد التهاب غير ستيرويدي، أو باراسيتامول، أو مزيج مناسب. وقد يفيد دواء الغثيان حتى لو كان الغثيان خفيفاً. تمثل الأدوية المضادة لمستقبل CGRP (الجيبانت) خياراً آخر لبعض البالغين. ولا تُنصح المسكنات الأفيونية كعلاج روتيني للصداع النصفي.",
          },
          {
            type: "paragraph",
            text: "قد يؤدي الاستخدام المتكرر لأدوية النوبات إلى صداع الإفراط الدوائي. يختلف الحد بحسب الدواء: غالباً 10 أيام شهرياً لأدوية التريبتان أو الأفيونات أو المستحضرات المركبة، و15 يوماً للمسكنات البسيطة، إذا استمر ذلك أكثر من 3 أشهر. عند الاقتراب من هذه الحدود، اطلب خطة منظمة للتقليل والوقاية بدلاً من زيادة الدواء.",
          },
          {
            type: "paragraph",
            text: "تُناقش الوقاية عندما تبقى النوبات متكررة أو معطِّلة، أو لا يناسب علاج النوبة، أو يحدث إفراط دوائي، أو يفضل الشخص العلاج الوقائي. تشمل الخيارات أقراصاً معروفة تُختار وفق الحالة الصحية، وحقن البوتولينوم للحالات المؤهلة من الصداع النصفي المزمن، وحقناً أو أقراصاً تستهدف CGRP. وتعد جمعية الصداع الأمريكية علاجات CGRP خياراً وقائياً من الخط الأول، لكن شروط التوفر والتأمين محلياً قد تختلف.",
          },
          {
            type: "list",
            items: [
              "اتفق مسبقاً على الدواء الأول للنوبة وموعد تناوله والخطوة الثانية المسموح بها ومتى تطلب المساعدة.",
              "امنح العلاج الوقائي تجربة كافية بجرعة محتملة، ثم راجع الفائدة والآثار الجانبية والأهداف الشخصية.",
              "قِس التحسن بعدد أيام الصداع النصفي وشدته والقدرة على استعادة النشاط، لا باختفاء الصداع تماماً فقط.",
              "لا تناسب بعض أدوية الصداع الحمل أو التخطيط له أو بعض أمراض القلب والأوعية؛ راجعها مبكراً مع الطبيب.",
              "لا توقف دواءً وقائياً فجأة إلا بتوجيه الطبيب أو عند الاشتباه في أثر جانبي خطير يستدعي مساعدة عاجلة.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "الحياة بصورة أفضل مع الصداع النصفي",
        blocks: [
          {
            type: "paragraph",
            text: "يقلل الروتين المنتظم الضغط الذي يمكن تجنبه على الجهاز العصبي: مواعيد نوم واستيقاظ ثابتة، وسوائل كافية، ووجبات منتظمة، ورياضة تدريجية، ووقت مخطط للتعافي بعد النوبة. الاستمرارية أهم من الكمال عادةً. غيّر شيئاً واحداً في كل مرة حتى تعرف ما يفيدك.",
          },
          {
            type: "paragraph",
            text: "قد يؤثر الصداع النصفي في العمل ورعاية الأسرة والدراسة والعلاقات حتى بين النوبات. شارك خطة مختصرة مع من يحتاج إليها. وقد تساعد تعديلات عملية مثل توفر الماء والدواء، أو استراحة قصيرة في مكان هادئ، أو تقليل الوهج، أو مرونة مؤقتة في ساعات العمل.",
          },
          {
            type: "list",
            items: [
              "احتفظ بدواء النوبة قريباً وتحقق من تاريخ صلاحيته، وخصوصاً عند السفر.",
              "حافظ على النوم المنتظم وتجنب اختلافه الكبير في عطلة الأسبوع، وعالج الشخير أو الأرق المستمر.",
              "لا تُهمل الوجبات بسبب محفز غذائي مشتبه به إلا إذا كانت العلاقة متكررة وبقي الغذاء متوازناً.",
              "ناقش صداع الدورة الشهرية والصيام في رمضان والسفر وموانع الحمل ضمن خطة العلاج.",
              "قيّم القلق والاكتئاب وسوء النوم عندما يصعب ضبط الصداع؛ فعلاجها قد يحسن جودة الحياة.",
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
            text: "استخدم مفكرتك لاختيار أهم نقطتين أو ثلاث لك. ينبغي أن تغطي الخطة الواضحة نوبة اليوم والأشهر المقبلة معاً.",
          },
          {
            type: "list",
            items: [
              "هل يطابق نمطي تشخيص الصداع النصفي، وهل هو مصحوب بهالة أو من دونها أو مزمن؟",
              "هل توجد علامة خطر في أعراضي، وهل أحتاج إلى تصوير أو فحص آخر؟",
              "ما الدواء الأول أثناء النوبة، ومتى آخذه، وما الخطوة التالية إذا لم ينجح؟",
              "كم يوماً في الشهر يمكنني استخدام كل دواء للنوبات بأمان؟",
              "هل يناسبني علاج وقائي، وأي الخيارات يلائم حالاتي الأخرى وتفضيلاتي؟",
              "كيف سنعرّف نجاح العلاج ومتى نراجعه أو نغيره؟",
              "هل يغيّر الحمل أو منع الحمل أو الصيام أو ضغط الدم أو أمراض القلب خياراتي؟",
              "ما الوثيقة أو الدواء الذي ينبغي أن أحمله عند السفر؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
