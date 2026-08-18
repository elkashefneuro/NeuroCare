import type { Condition } from "../schema";

export const sleepDisorders = {
  slug: "sleep-disorders",
  categoryId: "sleep",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 9,
  sources: [
    {
      label: "American Academy of Sleep Medicine — clinical practice guidelines",
      url: "https://aasm.org",
    },
    {
      label: "NICE clinical knowledge summaries — insomnia",
      url: "https://cks.nice.org.uk/topics/insomnia",
    },
    {
      label: "Sleep Foundation — patient information on sleep disorders",
      url: "https://www.sleepfoundation.org",
    },
  ],
  en: {
    title: "Sleep disorders",
    summary:
      "Insomnia, sleep apnoea, restless legs and acting out dreams — why sleeping tablets are rarely the answer and what has replaced them.",
    category: "Sleep",
    metaTitle: "Sleep disorders — NeuroCare",
    metaDescription:
      "Patient guide to sleep disorders: insomnia, obstructive sleep apnoea, restless legs, REM behaviour disorder, sleep studies, treatment and exercise.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Poor sleep is not one problem. Someone who cannot fall asleep, someone who sleeps eight hours and wakes exhausted, and someone whose legs will not let them settle all describe 'bad sleep', but they have entirely different conditions with entirely different treatments. Sorting out which one you have is most of the work.",
          },
          {
            type: "paragraph",
            text: "Sleep problems matter beyond feeling tired. Untreated obstructive sleep apnoea raises blood pressure and the risk of stroke, heart disease and diabetes. Chronic insomnia is a strong independent risk factor for depression. And several sleep disorders are early neurological signals — acting out dreams can precede Parkinson's disease by years. Sleep is a neurological function, and treating it properly is worth the effort.",
          },
          {
            type: "list",
            items: [
              "Insomnia: difficulty falling asleep, staying asleep, or waking too early, with daytime consequences, despite adequate opportunity to sleep.",
              "Obstructive sleep apnoea: the airway repeatedly collapses during sleep. Snoring, witnessed pauses in breathing, and unrefreshing sleep with daytime sleepiness.",
              "Restless legs syndrome: an urge to move the legs with an unpleasant sensation, worse in the evening and at rest, relieved by movement.",
              "REM sleep behaviour disorder: acting out dreams — shouting, punching, falling out of bed. Important because it can precede Parkinson's disease or related conditions.",
              "Narcolepsy: overwhelming daytime sleepiness, sometimes with sudden loss of muscle tone triggered by emotion.",
              "Circadian rhythm problems: the sleep clock is shifted rather than broken — common in shift workers and adolescents.",
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
            text: "The most informative question is what the daytime looks like, not the night. Feeling tired but alert points towards insomnia. Falling asleep involuntarily — in meetings, watching television, at traffic lights — points towards apnoea or narcolepsy, and is a different and more urgent problem.",
          },
          {
            type: "list",
            items: [
              "Insomnia: lying awake with a racing mind, clock-watching, dreading bedtime, and feeling tired but wired during the day rather than sleepy.",
              "Sleep apnoea: loud snoring, a partner reporting pauses in breathing, waking with a dry mouth or headache, needing to pass urine several times at night, and falling asleep easily during the day. More likely with a larger neck size, obesity, or a receding jaw.",
              "Restless legs: a crawling, aching or fizzing sensation in the legs in the evening, an irresistible urge to move, relieved by walking and returning at rest.",
              "REM sleep behaviour disorder: shouting, kicking or punching during sleep, sometimes injuring a partner, with dream recall that matches the movements.",
              "Narcolepsy: irresistible sleep attacks, vivid dreams at sleep onset, sleep paralysis, and sometimes knees buckling or the jaw dropping when laughing.",
              "Falling asleep while driving, or at a red light, is a medical emergency in the sense that it requires immediate action, not a routine appointment.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Sleep symptoms that need prompt medical attention",
            items: [
              "Falling asleep while driving, or nearly doing so. Stop driving and seek assessment urgently — this is both a health and a legal matter.",
              "Witnessed pauses in breathing with gasping or choking, especially with high blood pressure or an irregular heartbeat.",
              "Sudden weakness of the knees, jaw or neck triggered by laughter or surprise.",
              "Violent behaviour during sleep causing injury to yourself or a partner.",
              "New severe insomnia with rapid weight loss, tremor or palpitations — this may be a thyroid problem.",
              "Insomnia with thoughts of self-harm. Seek help the same day.",
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
            text: "Most sleep disorders are diagnosed from a careful history, ideally with a bed partner present, since they observe things you cannot. A sleep diary over two weeks is more informative than any single-night test for insomnia. Sleep studies are reserved for apnoea and for the more complex conditions.",
          },
          {
            type: "list",
            items: [
              "A two-week sleep diary recording bedtime, estimated sleep, wake times, naps, caffeine, alcohol and daytime function.",
              "A bed partner's account of snoring, breathing pauses, leg movements and any behaviour during sleep.",
              "The Epworth Sleepiness Scale, a short questionnaire distinguishing tiredness from genuine sleepiness.",
              "Examination including blood pressure, weight, neck circumference and the back of the throat.",
              "Blood tests: ferritin and iron studies for restless legs, thyroid function, kidney function, glucose, and B12.",
              "A medication and substance review — caffeine, alcohol, nicotine, steroids, some antidepressants, decongestants and beta blockers all disturb sleep.",
              "Home sleep apnoea testing or full in-laboratory polysomnography when apnoea, REM sleep behaviour disorder, narcolepsy or unusual movements are suspected.",
              "A multiple sleep latency test the day after polysomnography if narcolepsy is being investigated.",
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
            text: "Sleep studies sound daunting but are painless and mostly involve sensors taped to the skin. The usual worry — that you will not sleep normally with all that on — is understandable, but the test allows for it and useful information comes even from a broken night.",
          },
          {
            type: "list",
            items: [
              "Home sleep apnoea test: you collect a small device, wear a band around the chest, a probe on a finger and a soft tube at the nostrils, and sleep in your own bed. Nothing is painful and you return it in the morning. This is the usual first test for suspected apnoea.",
              "In-laboratory polysomnography: you arrive in the evening and a technician attaches sensors to the scalp, face, chest and legs with paste and tape, plus a finger probe and breathing bands. It takes about an hour to set up. You can move, turn over and go to the toilet — the leads are long enough and staff will unhook you if needed.",
              "Wash your hair beforehand and do not use conditioner, oil or hairspray; the scalp electrodes need clean skin. Bring your usual nightwear and your own pillow if it helps.",
              "The scalp electrodes record an EEG, but this is not the same as a diagnostic EEG for epilepsy — it is being used to identify sleep stages.",
              "Multiple sleep latency test: the day after the overnight study, you are given five 20-minute nap opportunities two hours apart, to measure how quickly you fall asleep. It is tedious rather than unpleasant, and takes most of the day.",
              "A separate diagnostic EEG for epilepsy: around 30 to 60 minutes, electrodes on the scalp with paste, painless. You will be asked to breathe deeply for a few minutes and to look at a flashing light. Sometimes it is done after deliberate sleep deprivation, in which case arrange transport and do not drive yourself.",
              "MRI brain is not a routine sleep test. It is used when a neurological cause such as narcolepsy with unusual features, or a brainstem problem, is suspected.",
              "Results usually take one to three weeks, since a whole night of data has to be scored by hand.",
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
            text: "For insomnia specifically, the single most important thing to know is that the first-line treatment is not a tablet. Cognitive behavioural therapy for insomnia outperforms sleeping tablets, and unlike them its benefit persists after treatment stops. Tablets work quickly, stop working within weeks, and are hard to come off.",
          },
          {
            type: "list",
            items: [
              "Insomnia, first line: cognitive behavioural therapy for insomnia (CBT-I). It combines stimulus control, sleep restriction, and work on the thoughts that keep you awake. It is available through apps and online programmes as well as with a therapist, and typically takes four to eight weeks.",
              "Insomnia, medication: if used at all, for short periods only. Z-drugs and benzodiazepines should be limited to a few weeks because of tolerance, dependence, falls and memory effects. Melatonin is used particularly in people over 55 and in circadian problems. The newer orexin receptor antagonists — suvorexant, lemborexant and daridorexant — are designed for longer-term insomnia use with less dependence than older tablets. Low-dose sedating antidepressants are sometimes used where mood is also involved.",
              "Obstructive sleep apnoea: CPAP is the main treatment and is highly effective when tolerated. Persist through the first weeks — mask fit and humidity settings make the difference, and most early problems are solvable. A mandibular advancement device is an alternative in milder cases. Weight loss substantially improves apnoea, and in obesity-related apnoea some newer weight-loss medicines are now used specifically for this.",
              "Restless legs: check ferritin first — iron replacement alone resolves a substantial proportion of cases, and this step is often skipped. Alpha-2-delta ligands such as gabapentin enacarbil or pregabalin are now generally preferred to dopamine agonists, because dopamine agonists commonly cause augmentation, where symptoms worsen and spread over time.",
              "REM sleep behaviour disorder: make the bedroom safe first — remove sharp objects, pad or lower the bed, consider separate beds temporarily. Melatonin or clonazepam are used. This diagnosis warrants neurological follow-up because of its link to later Parkinson's disease.",
              "Narcolepsy: modafinil, solriamfetol or pitolisant for sleepiness, and sodium oxybate or low-sodium oxybate for cataplexy and disrupted night-time sleep. Scheduled short naps remain a genuinely effective part of treatment.",
              "Treat what is driving the sleep problem: pain, low mood, anxiety, reflux, prostate symptoms and menopausal flushes are all common and all treatable.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "If you are already on a sleeping tablet",
            items: [
              "Do not stop a benzodiazepine or z-drug suddenly, especially after long use — withdrawal can be severe and, rarely, dangerous.",
              "Ask your doctor for a planned, gradual reduction, usually combined with CBT-I.",
              "Expect sleep to worsen temporarily during withdrawal. This is rebound insomnia and it settles.",
              "It is entirely possible to come off long-term sleeping tablets, and most people sleep better afterwards.",
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
            text: "Exercise is one of the most reliable non-drug sleep treatments there is, and it works on nearly every sleep disorder at once — deepening sleep, reducing apnoea severity through weight, and relieving restless legs. Timing matters more than intensity.",
          },
          {
            type: "list",
            items: [
              "Aerobic exercise 30 minutes on most days. The effect on sleep quality builds over weeks rather than appearing the same night, so judge it after a month.",
              "Exercise in the morning or afternoon where possible. Vigorous exercise in the two hours before bed raises core temperature and delays sleep onset in many people, though light activity is fine.",
              "Get outdoors in daylight within an hour of waking, ideally for 20 to 30 minutes. Morning light is the strongest signal for setting the body clock, and it helps insomnia and shift-work problems more than most people expect.",
              "Resistance training twice a week has independent benefit for sleep quality.",
              "For restless legs: moderate regular exercise helps, but heavy exercise late in the day makes it worse. Stretching the calves and hamstrings before bed helps many people.",
              "For sleep apnoea: aerobic exercise and weight loss reduce severity measurably. Tongue and throat exercises — myofunctional therapy — have modest evidence as an addition to, not a replacement for, CPAP.",
              "Gentle stretching or yoga in the evening helps the wind-down routine without raising body temperature.",
              "Avoid using exercise to compensate for a bad night by pushing harder. Consistency beats intensity for sleep.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with a sleep problem",
        blocks: [
          {
            type: "paragraph",
            text: "Good sleep habits alone rarely cure a real sleep disorder, but poor habits will defeat any treatment. The most useful principle in chronic insomnia is counter-intuitive: spend less time in bed, not more.",
          },
          {
            type: "list",
            items: [
              "Get up at the same time every day, including weekends. A fixed wake time anchors the body clock far more effectively than a fixed bedtime.",
              "Do not go to bed until you are sleepy. Lying awake trains the brain to associate bed with wakefulness.",
              "If you are awake for more than about 20 minutes, get up, go to another room, do something quiet in dim light, and return only when sleepy. This is uncomfortable and it works.",
              "Keep the bedroom dark, quiet and cool, and reserve it for sleep and intimacy.",
              "No clock-watching. Turn the clock away — checking the time increases arousal and lengthens the wakeful period.",
              "Caffeine has a half-life of five to six hours; an afternoon coffee is still active at bedtime. Stop by early afternoon.",
              "Alcohol helps you fall asleep and then fragments the second half of the night and worsens apnoea. It is a false friend for sleep.",
              "Limit naps to 20 minutes and before mid-afternoon, unless you have narcolepsy where scheduled naps are therapeutic.",
              "If you use CPAP, use it every night and for the whole night. Partial use gives partial benefit.",
              "Tell your doctor about any daytime sleepiness affecting driving. It matters legally as well as medically.",
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
              "Which sleep disorder do you think I have, and what points to it?",
              "Am I tired, or genuinely sleepy? Do I need a sleep study?",
              "Can I be referred for CBT-I, or is there a programme you recommend?",
              "If I need medication, which one, for how long, and what is the plan to stop it?",
              "If I am on a sleeping tablet already, how do we reduce it safely?",
              "Has my ferritin been checked for restless legs?",
              "Could any of my current medicines be causing this?",
              "Is it safe for me to drive?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "اضطرابات النوم",
    summary:
      "الأرق وانقطاع النفس النومي وتململ الساقين وتمثيل الأحلام — لماذا نادراً ما تكون الأقراص المنومة هي الحل وما الذي حلّ محلها.",
    category: "النوم",
    metaTitle: "اضطرابات النوم — NeuroCare",
    metaDescription:
      "دليل المريض لاضطرابات النوم: الأرق وانقطاع النفس الانسدادي وتململ الساقين واضطراب سلوك نوم الريم، دراسات النوم، العلاج والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "سوء النوم ليس مشكلة واحدة. فمن لا يستطيع الخلود إلى النوم، ومن ينام ثماني ساعات ويستيقظ منهكاً، ومن لا تدعه ساقاه يستقر، كلهم يصفون «نوماً سيئاً» لكن لديهم حالات مختلفة تماماً بعلاجات مختلفة تماماً. وتحديد أيّها لديك هو معظم العمل.",
          },
          {
            type: "paragraph",
            text: "ومشاكل النوم تتجاوز الشعور بالتعب. فانقطاع النفس الانسدادي غير المعالَج يرفع ضغط الدم وخطر السكتة وأمراض القلب والسكري. والأرق المزمن عامل خطر مستقل قوي للاكتئاب. كما أن عدة اضطرابات نوم إشارات عصبية مبكرة — فتمثيل الأحلام قد يسبق مرض باركنسون بسنوات. النوم وظيفة عصبية، وعلاجه كما ينبغي يستحق الجهد.",
          },
          {
            type: "list",
            items: [
              "الأرق: صعوبة في بدء النوم أو الاستمرار فيه أو الاستيقاظ باكراً جداً، مع عواقب نهارية، رغم توفّر فرصة كافية للنوم.",
              "انقطاع النفس الانسدادي: انسداد متكرر لمجرى الهواء أثناء النوم. شخير وتوقفات ملحوظة في التنفس ونوم غير مريح مع نعاس نهاري.",
              "متلازمة تململ الساقين: رغبة في تحريك الساقين مع إحساس مزعج، أسوأ مساءً وعند السكون، ويخف بالحركة.",
              "اضطراب سلوك نوم حركة العين السريعة: تمثيل الأحلام — صراخ ولكم وسقوط من السرير. مهم لأنه قد يسبق مرض باركنسون أو حالات مرتبطة به.",
              "الخدار: نعاس نهاري طاغٍ، أحياناً مع فقدان مفاجئ لتوتر العضلات تثيره الانفعالات.",
              "اضطرابات الإيقاع اليومي: ساعة النوم مُزاحة لا معطّلة — شائعة لدى العاملين بنظام الورديات والمراهقين.",
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
            text: "أكثر الأسئلة إفادة هو كيف يبدو نهارك لا ليلك. فالشعور بالتعب مع اليقظة يشير نحو الأرق. أما الغفو اللاإرادي — في الاجتماعات أو أمام التلفاز أو عند إشارة المرور — فيشير نحو انقطاع النفس أو الخدار، وهي مشكلة مختلفة وأكثر إلحاحاً.",
          },
          {
            type: "list",
            items: [
              "الأرق: الاستلقاء مستيقظاً وعقلك يتسارع، ومراقبة الساعة، والخوف من موعد النوم، والشعور بالتعب مع التوتر نهاراً لا بالنعاس.",
              "انقطاع النفس: شخير عالٍ، وشريك يُبلغ عن توقفات في التنفس، والاستيقاظ بجفاف الفم أو صداع، والحاجة للتبول عدة مرات ليلاً، والغفو بسهولة نهاراً. وأرجح مع كبر محيط الرقبة أو السمنة أو تراجع الفك.",
              "تململ الساقين: إحساس بالزحف أو الألم أو الفوران في الساقين مساءً، ورغبة لا تُقاوم في الحركة، تخف بالمشي وتعود عند السكون.",
              "اضطراب سلوك نوم الريم: صراخ أو ركل أو لكم أثناء النوم، وأحياناً إيذاء الشريك، مع تذكّر حلم يطابق الحركات.",
              "الخدار: نوبات نوم لا تُقاوم، وأحلام حيّة عند بدء النوم، وشلل النوم، وأحياناً ارتخاء الركبتين أو سقوط الفك عند الضحك.",
              "الغفو أثناء القيادة أو عند إشارة حمراء حالة طارئة بمعنى أنها تتطلب إجراءً فورياً لا موعداً روتينياً.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "أعراض نوم تحتاج عناية طبية سريعة",
            items: [
              "الغفو أثناء القيادة أو الاقتراب من ذلك. توقف عن القيادة واطلب تقييماً عاجلاً — فهذه مسألة صحية وقانونية معاً.",
              "توقفات ملحوظة في التنفس مع لهاث أو شرقة، خاصة مع ارتفاع ضغط الدم أو اضطراب نظم القلب.",
              "ضعف مفاجئ في الركبتين أو الفك أو الرقبة يثيره الضحك أو المفاجأة.",
              "سلوك عنيف أثناء النوم يسبب إصابة لك أو لشريكك.",
              "أرق شديد جديد مع نقص وزن سريع أو رعشة أو خفقان — قد تكون مشكلة في الغدة الدرقية.",
              "أرق مع أفكار إيذاء النفس. اطلب المساعدة في اليوم نفسه.",
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
            text: "تُشخّص معظم اضطرابات النوم من قصة دقيقة، ويُفضّل بحضور شريك الفراش لأنه يلاحظ ما لا تستطيع ملاحظته. ومفكرة نوم لأسبوعين أكثر إفادة من أي فحص ليلة واحدة في الأرق. أما دراسات النوم فمحجوزة لانقطاع النفس وللحالات الأعقد.",
          },
          {
            type: "list",
            items: [
              "مفكرة نوم لأسبوعين تسجّل وقت الخلود للنوم ومدة النوم المقدّرة وأوقات الاستيقاظ والقيلولات والكافيين والكحول والأداء النهاري.",
              "رواية شريك الفراش عن الشخير وتوقفات التنفس وحركات الساقين وأي سلوك أثناء النوم.",
              "مقياس إبوورث للنعاس، وهو استبيان قصير يفرّق بين التعب والنعاس الحقيقي.",
              "فحص يشمل ضغط الدم والوزن ومحيط الرقبة ومؤخرة الحلق.",
              "تحاليل دم: الفيريتين ودراسات الحديد لتململ الساقين، ووظائف الغدة الدرقية، ووظائف الكلى، والسكر، وB12.",
              "مراجعة الأدوية والمواد — فالكافيين والكحول والنيكوتين والكورتيزون وبعض مضادات الاكتئاب ومزيلات الاحتقان وحاصرات بيتا كلها تُشوّش النوم.",
              "فحص انقطاع النفس المنزلي أو دراسة النوم الكاملة في المختبر عند الاشتباه بانقطاع النفس أو اضطراب سلوك نوم الريم أو الخدار أو حركات غير معتادة.",
              "اختبار كمون النوم المتعدد في اليوم التالي لدراسة النوم إن كان الخدار قيد الفحص.",
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
            text: "تبدو دراسات النوم مخيفة لكنها غير مؤلمة وتعتمد غالباً على مستشعرات ملصقة على الجلد. والقلق المعتاد — أنك لن تنام طبيعياً مع كل هذا — مفهوم، لكن الفحص يأخذه في الحسبان وتأتي معلومات مفيدة حتى من ليلة متقطعة.",
          },
          {
            type: "list",
            items: [
              "فحص انقطاع النفس المنزلي: تستلم جهازاً صغيراً، وترتدي حزاماً حول الصدر ومجساً على الإصبع وأنبوباً ليّناً عند فتحتي الأنف، وتنام في سريرك. لا شيء مؤلم وتعيده صباحاً. هذا هو الفحص الأول المعتاد عند الاشتباه بانقطاع النفس.",
              "دراسة النوم في المختبر: تصل مساءً ويثبّت فني مستشعرات على فروة الرأس والوجه والصدر والساقين بمعجون ولاصق، إضافة إلى مجس إصبع وأحزمة تنفس. يستغرق التجهيز نحو ساعة. يمكنك التحرك والتقلّب والذهاب إلى الحمام — فالأسلاك طويلة بما يكفي والفريق يفكّها عند الحاجة.",
              "اغسل شعرك مسبقاً ولا تستخدم بلسماً أو زيتاً أو مثبت شعر؛ فأقطاب فروة الرأس تحتاج جلداً نظيفاً. وأحضر ملابس نومك المعتادة ووسادتك إن كان ذلك يساعدك.",
              "تسجّل أقطاب فروة الرأس تخطيطاً للدماغ، لكن هذا ليس نفسه تخطيط الدماغ التشخيصي للصرع — بل يُستخدم هنا لتحديد مراحل النوم.",
              "اختبار كمون النوم المتعدد: في اليوم التالي للدراسة الليلية، تُعطى خمس فرص للقيلولة مدة كل منها 20 دقيقة بفاصل ساعتين، لقياس سرعة خلودك للنوم. مملّ لا مزعج، ويستغرق معظم اليوم.",
              "تخطيط الدماغ التشخيصي للصرع كفحص منفصل: من 30 إلى 60 دقيقة، وأقطاب على فروة الرأس بمعجون، وهو غير مؤلم. سيُطلب منك التنفس بعمق لدقائق والنظر إلى ضوء وامض. وأحياناً يُجرى بعد حرمان مقصود من النوم، وفي هذه الحالة رتّب من يوصلك ولا تقد بنفسك.",
              "رنين الدماغ ليس فحصاً روتينياً للنوم. يُستخدم عند الاشتباه بسبب عصبي مثل خدار بملامح غير معتادة أو مشكلة في جذع الدماغ.",
              "تستغرق النتائج عادة من أسبوع إلى ثلاثة، لأن بيانات ليلة كاملة يجب أن تُقيَّم يدوياً.",
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
            text: "في الأرق تحديداً، أهم ما ينبغي معرفته أن علاج الخط الأول ليس قرصاً. فالعلاج السلوكي المعرفي للأرق يتفوق على الأقراص المنومة، وخلافاً لها تستمر فائدته بعد انتهاء العلاج. أما الأقراص فتعمل بسرعة، وتتوقف عن العمل خلال أسابيع، ويصعب التخلص منها.",
          },
          {
            type: "list",
            items: [
              "الأرق، الخط الأول: العلاج السلوكي المعرفي للأرق. يجمع ضبط المثيرات وتقييد النوم والعمل على الأفكار التي تُبقيك مستيقظاً. متاح عبر تطبيقات وبرامج إلكترونية وكذلك مع معالج، ويستغرق عادة من أربعة إلى ثمانية أسابيع.",
              "الأرق، الدواء: إن استُخدم أصلاً فلفترات قصيرة فقط. وينبغي حصر أدوية Z والبنزوديازيبينات في أسابيع قليلة بسبب التحمّل والاعتماد والسقوط وتأثيرات الذاكرة. والميلاتونين يُستخدم خاصة لدى من تجاوزوا 55 وفي اضطرابات الإيقاع اليومي. أما مضادات مستقبلات الأوركسين الأحدث — سوفوريكسانت وليمبوريكسانت ودارِيدوريكسانت — فصُمّمت للاستخدام الأطول في الأرق باعتمادية أقل من الأقراص القديمة. وتُستخدم أحياناً مضادات اكتئاب مهدئة بجرعة منخفضة حين يكون المزاج متورطاً أيضاً.",
              "انقطاع النفس الانسدادي: جهاز الضغط الهوائي الإيجابي هو العلاج الأساسي وفعّال جداً عند تحمّله. اصبر خلال الأسابيع الأولى — فملاءمة القناع وإعدادات الترطيب تصنع الفرق، ومعظم المشاكل المبكرة قابلة للحل. وجهاز تقديم الفك بديل في الحالات الأخف. وإنقاص الوزن يحسّن انقطاع النفس كثيراً، وفي الحالات المرتبطة بالسمنة تُستخدم الآن بعض أدوية إنقاص الوزن الأحدث لهذا الغرض تحديداً.",
              "تململ الساقين: افحص الفيريتين أولاً — فتعويض الحديد وحده يحلّ نسبة كبيرة من الحالات، وكثيراً ما تُتخطى هذه الخطوة. وتُفضَّل الآن عموماً روابط ألفا-2-دلتا مثل جابابنتين إناكاربيل أو البريجابالين على ناهضات الدوبامين، لأن ناهضات الدوبامين تسبب عادة «التفاقم» حيث تسوء الأعراض وتنتشر مع الوقت.",
              "اضطراب سلوك نوم الريم: أمّن غرفة النوم أولاً — أزل الأشياء الحادة، وبطّن السرير أو اخفضه، وفكّر في أسرّة منفصلة مؤقتاً. ويُستخدم الميلاتونين أو الكلونازيبام. وهذا التشخيص يستدعي متابعة عصبية بسبب ارتباطه بمرض باركنسون لاحقاً.",
              "الخدار: مودافينيل أو سولرِيامفيتول أو بيتوليزانت للنعاس، وأوكسيبات الصوديوم أو أوكسيبات منخفض الصوديوم للجمدة واضطراب النوم الليلي. وتبقى القيلولات القصيرة المجدولة جزءاً فعّالاً حقاً من العلاج.",
              "عالج ما يقود مشكلة النوم: الألم وانخفاض المزاج والقلق والارتجاع وأعراض البروستاتا وهبّات سن اليأس كلها شائعة وكلها قابلة للعلاج.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "إن كنت تتناول قرصاً منوماً أصلاً",
            items: [
              "لا توقف البنزوديازيبين أو دواء Z فجأة، خاصة بعد استخدام طويل — فالانسحاب قد يكون شديداً وخطراً في حالات نادرة.",
              "اطلب من طبيبك خطة تخفيض تدريجية، تُدمج عادة مع العلاج السلوكي المعرفي للأرق.",
              "توقّع أن يسوء النوم مؤقتاً أثناء الانسحاب. هذا أرق ارتدادي وسيهدأ.",
              "من الممكن تماماً التوقف عن الأقراص المنومة طويلة الأمد، ومعظم الناس ينامون أفضل بعدها.",
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
            text: "التمارين من أكثر علاجات النوم غير الدوائية موثوقية، وتعمل على كل اضطرابات النوم تقريباً في آن — تعميق النوم، وتقليل شدة انقطاع النفس عبر الوزن، وتخفيف تململ الساقين. والتوقيت أهم من الشدة.",
          },
          {
            type: "list",
            items: [
              "تمارين هوائية 30 دقيقة في معظم الأيام. أثرها في جودة النوم يتراكم عبر أسابيع ولا يظهر في الليلة نفسها، فاحكم عليها بعد شهر.",
              "تمرّن صباحاً أو بعد الظهر حيثما أمكن. فالتمرين العنيف في الساعتين قبل النوم يرفع حرارة الجسم ويؤخر بدء النوم لدى كثيرين، أما النشاط الخفيف فلا بأس به.",
              "اخرج إلى ضوء النهار خلال ساعة من الاستيقاظ، ويُفضّل من 20 إلى 30 دقيقة. فضوء الصباح أقوى إشارة لضبط ساعة الجسم، ويفيد الأرق ومشاكل الورديات أكثر مما يتوقع معظم الناس.",
              "لتمارين المقاومة مرتين أسبوعياً فائدة مستقلة في جودة النوم.",
              "لتململ الساقين: التمرين المعتدل المنتظم يفيد، لكن التمرين الشاق في وقت متأخر من اليوم يزيده سوءاً. وإطالة عضلات الساق الخلفية وأوتار الركبة قبل النوم تفيد كثيرين.",
              "لانقطاع النفس: التمارين الهوائية وإنقاص الوزن يقللان الشدة بشكل ملموس. ولتمارين اللسان والحلق أدلة متواضعة كإضافة إلى جهاز الضغط الهوائي لا كبديل عنه.",
              "الإطالة اللطيفة أو اليوغا مساءً تساعد في روتين الاسترخاء دون رفع حرارة الجسم.",
              "تجنّب استخدام التمرين لتعويض ليلة سيئة بالدفع أكثر. الانتظام أفضل من الشدة للنوم.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع مشكلة النوم",
        blocks: [
          {
            type: "paragraph",
            text: "نادراً ما تشفي عادات النوم الجيدة وحدها اضطراب نوم حقيقياً، لكن العادات السيئة ستهزم أي علاج. وأنفع مبدأ في الأرق المزمن مخالف للحدس: اقضِ وقتاً أقل في السرير لا أكثر.",
          },
          {
            type: "list",
            items: [
              "استيقظ في الوقت نفسه كل يوم بما في ذلك العطلات. فوقت الاستيقاظ الثابت يثبّت ساعة الجسم أكثر بكثير من وقت النوم الثابت.",
              "لا تذهب إلى السرير حتى تشعر بالنعاس. فالاستلقاء مستيقظاً يدرّب الدماغ على ربط السرير باليقظة.",
              "إن بقيت مستيقظاً أكثر من نحو 20 دقيقة، فانهض واذهب إلى غرفة أخرى وافعل شيئاً هادئاً في ضوء خافت، ولا تعد إلا حين تشعر بالنعاس. هذا غير مريح وهو فعّال.",
              "أبقِ غرفة النوم مظلمة وهادئة وباردة، واحصرها للنوم والعلاقة الزوجية.",
              "لا تراقب الساعة. أدرها بعيداً — فالتحقق من الوقت يزيد الاستثارة ويطيل فترة اليقظة.",
              "عمر النصف للكافيين من خمس إلى ست ساعات؛ فقهوة بعد الظهر لا تزال فاعلة عند النوم. توقّف مع بداية فترة ما بعد الظهر.",
              "الكحول يساعدك على النوم ثم يُفتّت النصف الثاني من الليل ويزيد انقطاع النفس سوءاً. وهو صديق كاذب للنوم.",
              "احصر القيلولة في 20 دقيقة وقبل منتصف بعد الظهر، إلا إن كان لديك خدار حيث تكون القيلولات المجدولة علاجية.",
              "إن كنت تستخدم جهاز الضغط الهوائي فاستخدمه كل ليلة وطوال الليل. فالاستخدام الجزئي يعطي فائدة جزئية.",
              "أخبر طبيبك عن أي نعاس نهاري يؤثر على القيادة. فالأمر مهم قانونياً كما هو مهم طبياً.",
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
              "أي اضطراب نوم تعتقد أنه لدي، وما الذي يشير إليه؟",
              "هل أنا متعب أم ناعس فعلاً؟ وهل أحتاج دراسة نوم؟",
              "هل يمكن إحالتي للعلاج السلوكي المعرفي للأرق، أم هناك برنامج توصي به؟",
              "إن احتجت دواءً، فأيّه، ولكم من الوقت، وما خطة إيقافه؟",
              "إن كنت أتناول قرصاً منوماً أصلاً، فكيف نخفّضه بأمان؟",
              "هل فُحص الفيريتين لدي لتململ الساقين؟",
              "هل قد يكون أي من أدويتي الحالية سبباً في هذا؟",
              "هل القيادة آمنة لي؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
