import type { Condition } from "../schema";

export const migraine = {
  slug: "migraine",
  categoryId: "headache",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 9,
  sources: [
    {
      label: "NICE clinical guideline CG150 — Headaches in over 12s: diagnosis and management",
      url: "https://www.nice.org.uk/guidance/cg150",
    },
    {
      label: "American Headache Society — position statements and guidelines",
      url: "https://americanheadachesociety.org",
    },
    {
      label: "International Headache Society — ICHD-3 classification",
      url: "https://ichd-3.org",
    },
  ],
  en: {
    title: "Migraine",
    summary:
      "Why migraine attacks happen, how they are diagnosed without a scan, and how treatment has changed now that medicines designed specifically for migraine exist.",
    category: "Headache",
    metaTitle: "Migraine — NeuroCare",
    metaDescription:
      "Patient guide to migraine: typical attacks, triggers, when a scan is needed, acute and preventive treatment including CGRP medicines, and exercise.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Migraine is not simply a bad headache. It is an inherited tendency of the brain to respond to ordinary changes — a missed meal, a short night, hormonal shifts, stress rising or suddenly falling — with a wave of altered nerve activity. That wave switches on a pain pathway centred on the trigeminal nerve, and the head pain follows.",
          },
          {
            type: "paragraph",
            text: "This explains a great deal that puzzles people about migraine. It explains why an attack can begin the morning after a stressful week ends rather than during it, why light and sound become unbearable, and why nausea is part of the illness rather than a reaction to the pain. It also explains why migraine cannot be cured but can very often be controlled.",
          },
          {
            type: "list",
            items: [
              "Migraine is common — roughly one adult in seven — and about twice as common in women.",
              "Attacks come in phases: a warning phase hours or a day before, sometimes an aura, the headache itself, then a drained recovery day.",
              "Episodic migraine means fewer than 15 headache days a month; chronic migraine means 15 or more for over three months.",
              "It runs in families. A parent or sibling with 'sinus headaches' or 'stress headaches' was often an undiagnosed migraine sufferer.",
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
            text: "A typical attack is one-sided, throbbing, moderate to severe, made worse by moving about, and lasts from four hours to three days if untreated. Light, sound and often smell become intolerable. Many people feel sick and some vomit. But migraine is a shape-shifter: the pain is on both sides in a third of people, and can settle behind one eye, in the face, or in the neck.",
          },
          {
            type: "list",
            items: [
              "Warning phase: yawning, food cravings, mood change, neck stiffness, thirst — hours to a day before the pain.",
              "Aura, in about one person in four: usually visual — a shimmering zigzag or blind spot that grows over 5 to 20 minutes and clears within an hour. It can also be numbness spreading up an arm, or difficulty finding words.",
              "Headache phase: throbbing, worse with movement, with nausea and a need for a dark quiet room.",
              "Recovery phase: flat, tired and foggy for a day afterwards — often mistaken for the after-effect of the painkillers.",
              "Neck pain and blocked-feeling sinuses are part of migraine far more often than they are separate problems.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "A headache that needs emergency assessment, not a clinic appointment",
            items: [
              "Thunderclap headache — the worst headache of your life reaching full intensity within a minute. Call 998.",
              "Headache with fever, a stiff neck, a rash that does not fade under pressure, or confusion.",
              "Headache with new weakness, drooping face, slurred speech or loss of vision — treat this as a stroke and call 998.",
              "Aura symptoms that do not clear within an hour, or an aura affecting the same side every single time.",
              "A first severe headache after the age of 50, or any headache that is steadily worsening week on week.",
              "Headache after a head injury, or one that is much worse on coughing, straining or lying flat.",
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
            text: "Migraine is diagnosed from your history and a normal neurological examination. There is no blood test and no scan that confirms it. A doctor who takes a careful history and examines you, then tells you no scan is needed, is following the evidence rather than cutting corners.",
          },
          {
            type: "list",
            items: [
              "The history: how attacks start, how long they last, what they feel like, what makes them worse, what you take and how often.",
              "A headache diary for four to eight weeks — the single most useful thing you can bring to an appointment.",
              "Neurological examination, including the back of the eye and blood pressure.",
              "Blood tests only to look for another cause when something in the history suggests one.",
              "Imaging is reserved for red-flag features, an abnormal examination, or a pattern that has changed.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Count your painkiller days, not just your headache days",
            items: [
              "Taking simple painkillers on 15 or more days a month, or triptans, opioids or combination tablets on 10 or more days a month, can itself turn episodic migraine into daily headache.",
              "This is called medication-overuse headache and it is common, reversible and very often missed.",
              "Bring the actual boxes to your appointment; almost everyone underestimates their intake.",
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
            text: "Most people with migraine never need a scan. If one is arranged, it is usually to rule something out rather than because it is expected to show anything — and a normal result is a useful result, not a wasted appointment.",
          },
          {
            type: "list",
            items: [
              "MRI brain: 20 to 40 minutes lying still inside a tunnel-shaped magnet. It is loud — a series of knocking and buzzing sounds — and you are given ear protection and a buzzer to call staff. No radiation and no pain.",
              "Tell the team beforehand about a pacemaker, cochlear implant, any metal in the body, previous eye injury involving metal, pregnancy, or claustrophobia. Sedation or an open scanner can usually be arranged.",
              "Contrast dye is not always needed. When it is, it goes through a small cannula in the arm and gives a brief cool sensation.",
              "CT head: under a minute, used mainly in emergencies. It uses X-rays and is far less detailed than MRI for migraine questions.",
              "EEG has no role in diagnosing migraine, and neither does nerve conduction testing. If either is offered for headache alone, ask what question it is meant to answer.",
              "Results usually take a few days. Ask at the time who will contact you and how.",
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
            text: "Treatment has two halves that work differently: something to stop an attack that has started, and — if attacks are frequent or disabling — something taken regularly to make attacks rarer. Most people who are still suffering are missing the second half.",
          },
          {
            type: "paragraph",
            text: "Acute treatment works best taken early and at a full dose, while the pain is still mild. Waiting to see whether it will be a bad one is the commonest self-defeating mistake in migraine.",
          },
          {
            type: "list",
            items: [
              "Simple analgesics: aspirin, ibuprofen or another anti-inflammatory, or paracetamol — often more effective than people expect if taken early and at full dose.",
              "Anti-sickness medicines such as metoclopramide or domperidone help the nausea and also help the painkiller absorb.",
              "Triptans (sumatriptan, rizatriptan, eletriptan and others) are migraine-specific and remain the mainstay. They are not suitable if you have uncontrolled high blood pressure, heart disease or have had a stroke.",
              "Gepants (rimegepant, ubrogepant, and zavegepant as a nasal spray) block the CGRP pathway. They are an option when triptans do not work or cannot be used, and they do not carry the same blood-vessel cautions.",
              "Lasmiditan is a further alternative for people who cannot take triptans. It can cause drowsiness and dizziness, so driving is restricted for several hours after a dose.",
            ],
          },
          {
            type: "paragraph",
            text: "Preventive treatment is worth discussing if you have roughly four or more migraine days a month, if attacks are disabling, or if acute treatment is being used too often. Every preventive needs six to twelve weeks at an adequate dose before you can judge it, and the realistic goal is halving your attacks rather than abolishing them.",
          },
          {
            type: "list",
            items: [
              "Long-established tablets: propranolol, candesartan, amitriptyline, topiramate, flunarizine. Cheap, familiar and effective for many people.",
              "CGRP monoclonal antibodies (erenumab, fremanezumab, galcanezumab, eptinezumab) are injections given monthly or quarterly, designed specifically for migraine prevention. They tend to be better tolerated than older tablets and often work within the first month.",
              "Atogepant and rimegepant are oral CGRP blockers licensed for prevention.",
              "OnabotulinumtoxinA injections are an option specifically for chronic migraine — 15 or more headache days a month — not for episodic migraine.",
              "Access to the newer medicines varies between insurers and countries, and most systems ask that two or three older preventives have been tried first.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "If you are pregnant, or could become pregnant",
            items: [
              "Sodium valproate must not be used for migraine in anyone who could become pregnant — it causes serious birth defects and developmental problems.",
              "Topiramate also carries a significant risk in pregnancy and reduces the reliability of hormonal contraception.",
              "Tell any doctor prescribing a migraine preventive if there is any chance of pregnancy, and raise it again before trying to conceive.",
              "Migraine with aura affects the choice of contraception. Ask specifically about this.",
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
            text: "Regular aerobic exercise is one of the few non-drug measures with genuine evidence behind it in migraine prevention — comparable in some studies to a preventive tablet. The catch is that a sudden burst of hard exercise can trigger an attack, so the way you start matters as much as what you do.",
          },
          {
            type: "list",
            items: [
              "Aim for 30 to 40 minutes of moderate aerobic exercise — brisk walking, cycling, swimming — three times a week.",
              "Build up slowly over six to eight weeks. Starting at your old fitness level is the classic way to trigger an attack and give up.",
              "Warm up for a full ten minutes. Abrupt exertion is a far more common trigger than sustained effort.",
              "Drink water before and during, and do not exercise on an empty stomach — dehydration and low blood sugar are both triggers.",
              "Neck and shoulder mobility work, and gentle strengthening of the deep neck flexors, help the many people whose attacks start with neck tightness.",
              "Yoga and paced breathing have modest but real evidence, mostly through their effect on stress and sleep.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with migraine",
        blocks: [
          {
            type: "paragraph",
            text: "Migraine responds more to regularity than to avoidance. Chasing individual food triggers rarely helps and often shrinks life for no benefit; keeping sleep, meals and hydration steady helps most people measurably.",
          },
          {
            type: "list",
            items: [
              "Keep the same sleep and waking times, including at weekends. A long lie-in is a classic trigger.",
              "Eat regularly. Skipping meals is one of the most reliable triggers there is.",
              "Treat caffeine as a medicine: a steady modest amount, or none. It is the withdrawal, not the intake, that usually causes the headache.",
              "Stay hydrated, particularly in the Gulf summer and if you work outdoors or in strong air conditioning.",
              "Keep a diary during any treatment change — it is the only fair way to judge whether something is working.",
              "Tell your employer or school what you need during an attack. A dark quiet hour early often prevents a lost day.",
              "Attacks commonly change around menstruation, pregnancy and menopause. If yours are hormonally patterned, say so — it changes the treatment plan.",
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
              "Is this migraine, and what in my history made you confident without a scan?",
              "How many headache days and painkiller days am I having? Am I overusing anything?",
              "Should I be on a preventive, and which would you start with for me?",
              "How long should I give this before deciding it has not worked?",
              "What should I take at the start of an attack, and how quickly should I take it?",
              "Am I suitable for a CGRP medicine, and what does getting access to one involve here?",
              "Does my migraine affect my contraception, or my plans for pregnancy?",
              "What would make you want to see me sooner, or arrange a scan?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الصداع النصفي",
    summary:
      "لماذا تحدث نوبات الصداع النصفي، وكيف يُشخّص دون أشعة، وكيف تغيّر العلاج بعد ظهور أدوية صُمّمت خصيصاً للصداع النصفي.",
    category: "الصداع",
    metaTitle: "الصداع النصفي — NeuroCare",
    metaDescription:
      "دليل المريض للصداع النصفي: شكل النوبة، المحفزات، متى تلزم الأشعة، علاج النوبة والوقاية بما فيها أدوية CGRP، والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "الصداع النصفي ليس مجرد صداع شديد، بل استعداد وراثي في الدماغ للاستجابة لتغيّرات عادية — وجبة فائتة، ليلة قصيرة، تقلّب هرموني، توتر يتصاعد أو ينتهي فجأة — بموجة من النشاط العصبي المتغيّر. هذه الموجة تُشغّل مساراً للألم مركزه العصب ثلاثي التوائم، فيأتي ألم الرأس بعدها.",
          },
          {
            type: "paragraph",
            text: "هذا يفسّر أموراً كثيرة تحيّر المرضى: لماذا تبدأ النوبة صباح اليوم التالي لانتهاء أسبوع مرهق لا أثناءه، ولماذا يصبح الضوء والصوت لا يُحتملان، ولماذا الغثيان جزء من المرض لا ردّ فعل للألم. ويفسّر أيضاً لماذا لا يُشفى الصداع النصفي نهائياً لكنه غالباً يُضبط جيداً.",
          },
          {
            type: "list",
            items: [
              "الصداع النصفي شائع — نحو بالغ من كل سبعة — وأكثر بمرتين تقريباً لدى النساء.",
              "تأتي النوبة على مراحل: مرحلة إنذار قبل ساعات أو يوم، وأحياناً أورة، ثم الصداع نفسه، ثم يوم تعافٍ يشعر فيه المريض بالإرهاق.",
              "الصداع النصفي النوبي يعني أقل من 15 يوم صداع شهرياً، والمزمن يعني 15 يوماً أو أكثر لمدة تتجاوز ثلاثة أشهر.",
              "ينتشر في العائلات. كثير ممن وُصف صداعهم بأنه «جيبي» أو «توتري» كانوا مرضى صداع نصفي دون تشخيص.",
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
            text: "النوبة النموذجية في جانب واحد، نابضة، متوسطة إلى شديدة، تزداد مع الحركة، وتستمر من أربع ساعات إلى ثلاثة أيام دون علاج. يصبح الضوء والصوت وغالباً الرائحة غير محتملين، ويشعر كثيرون بالغثيان وقد يتقيؤون. لكن الصداع النصفي متغيّر الشكل: الألم في الجانبين لدى ثلث المرضى، وقد يستقر خلف عين واحدة أو في الوجه أو في الرقبة.",
          },
          {
            type: "list",
            items: [
              "مرحلة الإنذار: تثاؤب، اشتهاء أطعمة، تغيّر مزاج، تيبّس رقبة، عطش — قبل الألم بساعات إلى يوم.",
              "الأورة لدى نحو مريض من كل أربعة: بصرية غالباً — خط متعرّج لامع أو بقعة عمياء تتسع خلال 5 إلى 20 دقيقة وتزول خلال ساعة. وقد تكون تنميلاً يصعد في الذراع أو صعوبة في إيجاد الكلمات.",
              "مرحلة الصداع: ألم نابض يزداد بالحركة مع غثيان وحاجة إلى غرفة مظلمة هادئة.",
              "مرحلة التعافي: إرهاق وتشوّش لمدة يوم بعدها — يُنسب خطأً إلى أثر المسكنات.",
              "ألم الرقبة والشعور بانسداد الجيوب جزء من الصداع النصفي أكثر بكثير من كونهما مشكلة منفصلة.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "صداع يحتاج تقييماً طارئاً لا موعداً في العيادة",
            items: [
              "صداع الصاعقة — أشد صداع في حياتك يبلغ ذروته خلال دقيقة. اتصل بالرقم 998.",
              "صداع مع حمى أو تيبّس في الرقبة أو طفح لا يختفي بالضغط عليه أو تشوّش.",
              "صداع مع ضعف جديد أو انحراف في الوجه أو تلعثم أو فقدان بصر — تعامل معه كسكتة دماغية واتصل بالرقم 998.",
              "أعراض أورة لا تزول خلال ساعة، أو أورة تصيب الجانب نفسه في كل مرة.",
              "أول صداع شديد بعد سن الخمسين، أو صداع يزداد سوءاً أسبوعاً بعد أسبوع.",
              "صداع بعد إصابة في الرأس، أو يزداد كثيراً مع السعال أو الإجهاد أو الاستلقاء.",
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
            text: "يُشخّص الصداع النصفي من القصة المرضية وفحص عصبي طبيعي. لا يوجد تحليل دم ولا أشعة تؤكده. الطبيب الذي يأخذ قصة دقيقة ويفحصك ثم يخبرك أنك لا تحتاج أشعة يتبع الدليل العلمي ولا يختصر الطريق.",
          },
          {
            type: "list",
            items: [
              "القصة المرضية: كيف تبدأ النوبات، وكم تستمر، وما شكل الألم، وما الذي يزيده، وما الذي تتناوله وكم مرة.",
              "مفكرة صداع لمدة أربعة إلى ثمانية أسابيع — أنفع شيء يمكنك إحضاره إلى الموعد.",
              "فحص عصبي يشمل قاع العين وقياس ضغط الدم.",
              "تحاليل دم فقط للبحث عن سبب آخر حين تشير القصة إليه.",
              "الأشعة محجوزة لعلامات الخطر أو فحص غير طبيعي أو نمط تغيّر.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "احسب أيام المسكنات لا أيام الصداع فقط",
            items: [
              "تناول المسكنات البسيطة 15 يوماً أو أكثر شهرياً، أو التريبتانات أو الأفيونيات أو الأقراص المركّبة 10 أيام أو أكثر شهرياً، قد يحوّل الصداع النصفي النوبي إلى صداع يومي.",
              "يُسمّى صداع الإفراط الدوائي، وهو شائع وقابل للعكس ويُغفل كثيراً.",
              "أحضر العلب نفسها إلى الموعد؛ يقلّل الجميع تقريباً من تقدير ما يتناولونه.",
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
            text: "معظم مرضى الصداع النصفي لا يحتاجون أشعة أبداً. وإن طُلبت فغالباً لاستبعاد شيء آخر لا لتوقّع أن تُظهر شيئاً — والنتيجة الطبيعية نتيجة مفيدة وليست موعداً ضائعاً.",
          },
          {
            type: "list",
            items: [
              "الرنين المغناطيسي للدماغ: من 20 إلى 40 دقيقة مستلقياً بلا حركة داخل مغناطيس على شكل نفق. الصوت مرتفع — طَرْق وطنين متتابع — ويُعطى لك واقٍ للأذن وجرس لاستدعاء الفريق. بلا إشعاع وبلا ألم.",
              "أخبر الفريق مسبقاً عن منظم ضربات القلب أو زراعة القوقعة أو أي معدن في الجسم أو إصابة سابقة في العين بمعدن أو الحمل أو رهاب الأماكن المغلقة. غالباً يمكن ترتيب مهدّئ أو جهاز مفتوح.",
              "الصبغة ليست ضرورية دائماً. وحين تلزم تُعطى عبر قنية صغيرة في الذراع وتسبب إحساساً بالبرودة لثوانٍ.",
              "الأشعة المقطعية للرأس: أقل من دقيقة، وتُستخدم في الطوارئ أساساً. تعتمد على الأشعة السينية وتفاصيلها أقل بكثير من الرنين في أسئلة الصداع النصفي.",
              "لا دور لتخطيط الدماغ الكهربائي في تشخيص الصداع النصفي، ولا لتخطيط الأعصاب. إذا عُرض أيّهما لصداع وحده فاسأل عن السؤال الذي يُفترض أن يجيب عنه.",
              "تستغرق النتائج أياماً عادة. اسأل وقتها من سيتواصل معك وكيف.",
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
            text: "للعلاج شقّان يعملان بطريقتين مختلفتين: دواء يوقف نوبة بدأت، ودواء يُؤخذ بانتظام ليجعل النوبات أندر إذا كانت متكررة أو معطِّلة. ومعظم من لا يزالون يعانون ينقصهم الشق الثاني.",
          },
          {
            type: "paragraph",
            text: "علاج النوبة أنجع حين يُؤخذ مبكراً وبجرعة كاملة والألم لا يزال خفيفاً. والانتظار لمعرفة إن كانت النوبة ستشتد هو أكثر الأخطاء شيوعاً وضرراً في الصداع النصفي.",
          },
          {
            type: "list",
            items: [
              "المسكنات البسيطة: الأسبرين أو الإيبوبروفين أو مضاد التهاب آخر أو الباراسيتامول — وفعاليتها أعلى مما يتوقع الناس إذا أُخذت مبكراً وبجرعة كاملة.",
              "مضادات الغثيان مثل الميتوكلوبراميد أو الدومبيريدون تخفف الغثيان وتساعد أيضاً على امتصاص المسكّن.",
              "التريبتانات (سوماتريبتان، ريزاتريبتان، إليتريبتان وغيرها) مخصصة للصداع النصفي وتبقى العلاج الأساسي. لا تناسب من لديه ارتفاع ضغط غير مضبوط أو مرض قلبي أو سكتة سابقة.",
              "الجيبانتات (ريميجيبانت، أوبروجيبانت، وزافيجيبانت كبخاخ أنفي) تحصر مسار CGRP، وهي خيار حين لا تنفع التريبتانات أو لا يمكن استخدامها، ولا تحمل التحذيرات الوعائية نفسها.",
              "لازميديتان بديل آخر لمن لا يستطيع تناول التريبتانات. قد يسبب نعاساً ودوخة، لذا تُمنع القيادة لعدة ساعات بعد الجرعة.",
            ],
          },
          {
            type: "paragraph",
            text: "العلاج الوقائي يستحق النقاش إذا كان لديك نحو أربعة أيام صداع شهرياً أو أكثر، أو كانت النوبات معطِّلة، أو كنت تستخدم علاج النوبة أكثر من اللازم. كل دواء وقائي يحتاج ستة إلى اثني عشر أسبوعاً بجرعة كافية قبل الحكم عليه، والهدف الواقعي تقليل النوبات إلى النصف لا إلغاؤها.",
          },
          {
            type: "list",
            items: [
              "الأقراص المعروفة منذ زمن: بروبرانولول، كانديسارتان، أميتريبتيلين، توبيراميت، فلوناريزين. رخيصة ومألوفة وفعالة لكثيرين.",
              "الأجسام المضادة وحيدة النسيلة ضد CGRP (إيرينوماب، فريمانيزوماب، جالكانيزوماب، إبتينيزوماب) حقن شهرية أو كل ثلاثة أشهر، صُمّمت خصيصاً للوقاية من الصداع النصفي. تحمّلها أفضل عادة من الأقراص القديمة وكثيراً ما تعمل خلال الشهر الأول.",
              "أتوجيبانت وريميجيبانت حاصرات CGRP فموية مرخّصة للوقاية.",
              "حقن توكسين البوتولينوم من النوع A خيار للصداع النصفي المزمن تحديداً — 15 يوم صداع شهرياً أو أكثر — لا للنوبي.",
              "يختلف توفّر الأدوية الأحدث بين شركات التأمين والدول، ومعظم الأنظمة تطلب تجربة دواءين أو ثلاثة من الوقائيات القديمة أولاً.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "إذا كنتِ حاملاً أو يُحتمل أن تحملي",
            items: [
              "لا يجوز استخدام فالبروات الصوديوم للصداع النصفي لدى أي شخص يمكن أن يحمل — فهو يسبب تشوهات خلقية خطيرة ومشكلات في النمو.",
              "التوبيراميت أيضاً يحمل خطراً كبيراً في الحمل ويقلل موثوقية وسائل منع الحمل الهرمونية.",
              "أخبري أي طبيب يصف دواءً وقائياً إن كان هناك أي احتمال للحمل، وأعيدي طرح الأمر قبل محاولة الإنجاب.",
              "الصداع النصفي المصحوب بأورة يؤثر على اختيار وسيلة منع الحمل. اسألي عن هذا تحديداً.",
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
            text: "التمارين الهوائية المنتظمة من الإجراءات غير الدوائية القليلة التي تسندها أدلة حقيقية في الوقاية من الصداع النصفي — وتقارنها بعض الدراسات بدواء وقائي. لكن الاندفاع المفاجئ في مجهود شاق قد يفجّر نوبة، لذا طريقة البدء لا تقل أهمية عن نوع التمرين.",
          },
          {
            type: "list",
            items: [
              "استهدف 30 إلى 40 دقيقة من التمارين الهوائية المعتدلة — مشي سريع أو دراجة أو سباحة — ثلاث مرات أسبوعياً.",
              "تدرّج خلال ستة إلى ثمانية أسابيع. البدء من مستوى لياقتك القديم طريقة كلاسيكية لتفجير نوبة ثم الاستسلام.",
              "أحمِ عضلاتك عشر دقائق كاملة قبل البدء. المجهود المفاجئ محفّز أكثر شيوعاً من المجهود المستمر.",
              "اشرب الماء قبل التمرين وأثناءه، ولا تتمرّن على معدة فارغة — الجفاف وانخفاض السكر كلاهما محفّز.",
              "تمارين مرونة الرقبة والكتف وتقوية عضلات الرقبة العميقة تفيد الكثيرين ممن تبدأ نوبتهم بشدّ في الرقبة.",
              "لليوغا وتمارين التنفس المنتظم أدلة متواضعة لكنها حقيقية، معظمها عبر تأثيرها في التوتر والنوم.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع الصداع النصفي",
        blocks: [
          {
            type: "paragraph",
            text: "يستجيب الصداع النصفي للانتظام أكثر من استجابته للامتناع. ملاحقة محفزات غذائية فردية نادراً ما تفيد وكثيراً ما تضيّق الحياة بلا مقابل، بينما ثبات النوم والوجبات والترطيب يفيد معظم الناس بشكل ملموس.",
          },
          {
            type: "list",
            items: [
              "حافظ على مواعيد نوم واستيقاظ ثابتة، حتى في العطلات. النوم المتأخر محفّز كلاسيكي.",
              "كل بانتظام. تفويت الوجبات من أكثر المحفزات ثباتاً على الإطلاق.",
              "تعامل مع الكافيين كدواء: كمية معتدلة ثابتة أو لا شيء. الانسحاب لا الاستهلاك هو ما يسبب الصداع عادة.",
              "حافظ على ترطيبك، خاصة في صيف الخليج وإن كنت تعمل في الخارج أو في تكييف قوي.",
              "احتفظ بمفكرة عند أي تغيير في العلاج — فهي الطريقة المنصفة الوحيدة للحكم على نجاحه.",
              "أخبر جهة عملك أو مدرستك بما تحتاجه أثناء النوبة. ساعة مبكرة في مكان مظلم هادئ تمنع غالباً ضياع يوم كامل.",
              "كثيراً ما تتغيّر النوبات مع الدورة الشهرية والحمل وسن اليأس. إن كان نمطك هرمونياً فقُل ذلك — فهو يغيّر خطة العلاج.",
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
              "هل هذا صداع نصفي، وما الذي في قصتي جعلك واثقاً دون أشعة؟",
              "كم عدد أيام الصداع وأيام المسكنات لدي؟ هل أفرط في تناول شيء؟",
              "هل ينبغي أن آخذ دواءً وقائياً، وبأيّها ستبدأ في حالتي؟",
              "كم من الوقت أعطي هذا الدواء قبل أن نقرر أنه لم ينجح؟",
              "ماذا آخذ عند بداية النوبة، وبأي سرعة؟",
              "هل أنا مرشّح لدواء CGRP، وما الذي يتطلبه الحصول عليه هنا؟",
              "هل يؤثر صداعي على وسيلة منع الحمل أو على خططي للحمل؟",
              "ما الذي يجعلك تريد رؤيتي أبكر أو طلب أشعة؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
