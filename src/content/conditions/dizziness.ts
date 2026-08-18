import type { Condition } from "../schema";

export const dizziness = {
  slug: "dizziness-and-vertigo",
  categoryId: "balance",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 8,
  sources: [
    {
      label: "Bárány Society — international classification of vestibular disorders",
      url: "https://www.jvr-web.org/ICVD.html",
    },
    {
      label: "Vestibular Disorders Association — patient resources",
      url: "https://vestibular.org",
    },
    {
      label: "American Academy of Neurology — clinical guidelines",
      url: "https://www.aan.com/practice/guidelines",
    },
  ],
  en: {
    title: "Dizziness and vertigo",
    summary:
      "Why the timing of dizziness matters more than the word you use for it, how BPPV is cured in minutes, and why long-term dizziness tablets make things worse.",
    category: "Dizziness and balance",
    metaTitle: "Dizziness and vertigo — NeuroCare",
    metaDescription:
      "Patient guide to dizziness and vertigo: BPPV, vestibular neuritis, vestibular migraine, red flags for stroke, tests, treatment and balance exercises.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Balance depends on three information streams agreeing: the inner ear, the eyes, and the position sensors in the joints and feet. Dizziness is what you feel when those streams disagree. The brain receives conflicting reports about where you are in space, and the resulting sensation can be spinning, swaying, floating or simply a fog.",
          },
          {
            type: "paragraph",
            text: "People often struggle to describe dizziness, and doctors have largely stopped asking them to. Descriptions are unreliable — the same person will describe the same episode differently on different days. What is far more reliable, and what a good assessment focuses on, is timing and triggers: how long each episode lasts, what brings it on, and whether anything else came with it.",
          },
          {
            type: "list",
            items: [
              "BPPV: seconds of intense spinning triggered by head position — rolling over in bed, looking up, bending down. The commonest cause, and curable in minutes.",
              "Vestibular neuritis: a single attack of severe constant vertigo lasting days, usually after a viral illness, gradually settling over weeks.",
              "Vestibular migraine: episodes lasting minutes to hours, often without headache, in someone with a migraine history. Far commoner than most people realise.",
              "Menière's disease: attacks of vertigo lasting 20 minutes to hours, with hearing loss, tinnitus and a full feeling in one ear.",
              "Non-vestibular causes: low blood pressure on standing, heart rhythm problems, anaemia, medication side effects, low blood sugar, and anxiety.",
              "Persistent postural-perceptual dizziness: a chronic swaying or unsteadiness that often follows any of the above and is maintained by the brain's over-vigilance about balance.",
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
            text: "The single most useful thing you can tell your doctor is how long an episode lasts and what sets it off. Seconds on turning in bed points strongly to BPPV. Days of constant spinning points to the vestibular nerve. Minutes to hours, recurring, points to migraine or Menière's. Lightheadedness on standing points away from the inner ear altogether.",
          },
          {
            type: "list",
            items: [
              "BPPV: brief violent spinning, lasting under a minute, reliably triggered by lying down, rolling over, or tipping the head back. Often worst on first waking.",
              "Vestibular neuritis: sudden severe spinning with nausea and vomiting, constant for days, worse with any head movement, hearing unaffected.",
              "Vestibular migraine: dizziness lasting minutes to hours, sensitivity to light, sound and visual motion, sometimes with headache and sometimes without.",
              "Menière's: vertigo with fluctuating hearing loss, ringing, and pressure in one ear.",
              "Lightheadedness or near-fainting on standing up, especially in the heat, when dehydrated, or after starting a blood pressure medicine.",
              "Chronic unsteadiness that is worse in supermarkets, busy patterns, or on screens — typical of persistent postural-perceptual dizziness.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Dizziness that could be a stroke — call 998",
            items: [
              "Dizziness with double vision, difficulty speaking or swallowing, or facial droop.",
              "Dizziness with weakness or numbness in an arm or leg.",
              "Dizziness with a severe new headache or neck pain, especially sudden.",
              "Being unable to walk or even sit unsupported — inner ear causes usually allow you to walk, badly, if you try.",
              "Dizziness with new deafness in one ear, which can indicate a stroke in the brainstem or inner ear circulation.",
              "New, constant vertigo in someone with vascular risk factors — high blood pressure, diabetes, atrial fibrillation, smoking.",
              "Any dizziness with loss of consciousness, chest pain or palpitations needs urgent assessment.",
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
            text: "Most causes of dizziness are diagnosed at the bedside, by a doctor who watches your eyes while moving your head. Eye movements are the readout of the balance system, and a careful examination outperforms a brain scan for the great majority of patients.",
          },
          {
            type: "list",
            items: [
              "A timing-and-triggers history — how long, how often, what brings it on, what accompanies it.",
              "The Dix-Hallpike manoeuvre: you are laid back quickly with the head turned to one side while the doctor watches your eyes. If BPPV is present it briefly reproduces the vertigo and produces a characteristic eye movement. Unpleasant for 30 seconds, and diagnostic.",
              "The head impulse test, checking for spontaneous nystagmus, and a test of eye alignment — together these separate inner ear causes from stroke with high accuracy in trained hands.",
              "Blood pressure lying and standing, to detect a postural drop.",
              "Hearing assessment when hearing symptoms are present.",
              "Blood tests for anaemia, glucose, thyroid function and vitamin levels; ECG if fainting or palpitations feature.",
              "A medication review — blood pressure tablets, sedatives, antidepressants and some antibiotics all cause dizziness.",
              "Brain imaging when the examination suggests a central cause or when there are stroke risk factors and red flags — not routinely.",
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
            text: "Vestibular tests look strange but are safe and mostly involve watching your eyes. They can provoke dizziness deliberately — that is how they work — so arrange for someone to take you home if you are having a full battery.",
          },
          {
            type: "list",
            items: [
              "MRI brain: 20 to 40 minutes lying still in a loud tunnel, with ear protection and a call buzzer. Standard CT is poor at seeing the brainstem and cerebellum, so MRI is the scan of choice when a central cause is suspected. Note that MRI can be falsely normal in the first 24 to 48 hours after a small brainstem stroke.",
              "Tell staff about implanted metal, pacemakers, pregnancy or claustrophobia before the appointment. If lying flat makes you dizzy, say so — the team can position you and go slowly.",
              "Videonystagmography: goggles with a camera record your eye movements while you follow lights and while your head is moved into different positions. Painless, about an hour.",
              "Caloric testing, part of the same session: warm and cool air or water is put into each ear canal in turn, which deliberately induces about a minute of spinning. It is genuinely unpleasant but brief and completely safe, and it tells the doctor how each inner ear is performing separately.",
              "Video head impulse test: goggles record the eye while your head is turned quickly a short distance. Quick and much better tolerated than caloric testing.",
              "Audiometry: sitting in a soundproof booth with headphones, pressing a button when you hear a tone. Painless, 20 to 30 minutes.",
              "EEG has no routine role in dizziness unless episodes involve loss of awareness suggesting seizures.",
              "Nerve conduction studies are relevant only if reduced sensation in the feet is contributing to unsteadiness.",
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
            text: "Treatment depends entirely on the cause, and the most important message is the opposite of what most people expect: for most causes of dizziness, medication is not the answer, and long-term dizziness tablets actively slow recovery.",
          },
          {
            type: "list",
            items: [
              "BPPV: treated with a repositioning manoeuvre, most commonly the Epley manoeuvre, performed in the clinic in a few minutes. It resolves symptoms in the great majority after one or two treatments. Medication does not treat BPPV. If you are told your dizziness is BPPV and offered only tablets, ask about a repositioning manoeuvre.",
              "Vestibular neuritis: a short course of a vestibular sedative such as prochlorperazine or cinnarizine may be used for the first 48 to 72 hours only, to control severe vomiting. After that it must be stopped — continuing it prevents the brain from compensating and turns a three-week illness into a three-month one. Vestibular rehabilitation exercises are the actual treatment.",
              "Vestibular migraine: treated as migraine. Attention to sleep, meals and hydration, plus a migraine preventive such as propranolol, amitriptyline, candesartan or topiramate. Vestibular sedatives do not help and should be avoided.",
              "Menière's disease: reducing salt, caffeine and alcohol; betahistine is widely used, and diuretics are sometimes added. Specialist ENT referral is appropriate for recurrent attacks.",
              "Postural drop in blood pressure: increase fluid and salt intake if appropriate, rise slowly in stages, and review any medications that lower blood pressure.",
              "Persistent postural-perceptual dizziness: vestibular rehabilitation, an SSRI or SNRI antidepressant which works here for the dizziness itself rather than for mood, and cognitive behavioural therapy. This combination is effective and the condition is frequently missed for years.",
              "Vestibular rehabilitation therapy is the single most under-prescribed effective treatment in this whole area. Ask about it specifically.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Why long-term dizziness tablets are the wrong answer",
            items: [
              "Betahistine, cinnarizine, prochlorperazine and similar medicines suppress the balance system.",
              "Recovery from most inner ear problems depends on the brain recalibrating, and it can only do that if it receives the abnormal signals. Suppression blocks exactly the process you need.",
              "Beyond about three days for an acute attack, these medicines usually make the outcome worse, not better.",
              "In older people they also increase falls and can cause a Parkinson-like syndrome with long-term use.",
              "If you have been on one of these for months, ask your doctor about stopping it and starting exercises instead.",
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
            text: "Vestibular rehabilitation works by deliberately provoking mild dizziness so the brain learns to recalibrate. This feels counter-intuitive and slightly unpleasant, and it is the single most effective treatment for chronic dizziness of inner ear origin. Mild symptoms during exercises are expected and necessary; they should settle within about 15 minutes afterwards.",
          },
          {
            type: "list",
            items: [
              "Gaze stabilisation: hold a card with a letter at arm's length, keep your eyes fixed on it, and turn your head side to side for 30 seconds. Repeat vertically. Three times a day, building to a minute. This is the core exercise.",
              "Eye-head movements: look from one target to another, then move your head to follow, ten repetitions.",
              "Standing balance progression: feet apart, then together, then heel-to-toe, then eyes closed — 30 seconds each, always beside a wall or counter.",
              "Walking with head turns: walk while looking left and right, then up and down, in a safe corridor.",
              "Sit-to-stand practice ten times, twice a day, which addresses both balance and blood pressure drops.",
              "For BPPV, ask about the Brandt-Daroff exercises for home use if manoeuvres cannot be repeated in clinic.",
              "Build up gradually and stay consistent — daily short sessions beat occasional long ones. Most people need six to twelve weeks.",
              "Do not avoid the movements that provoke symptoms. Avoidance is the main reason dizziness becomes chronic.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with dizziness",
        blocks: [
          {
            type: "paragraph",
            text: "Dizziness is frightening and exhausting, and it commonly leads people to restrict their lives — avoiding shopping centres, driving, or going out alone. That avoidance is understandable and it is also the main thing that keeps dizziness going.",
          },
          {
            type: "list",
            items: [
              "Keep moving and keep going out. Gradual, deliberate exposure is treatment; avoidance is the trap.",
              "Stay well hydrated, particularly in the Gulf climate. Dehydration worsens every cause of dizziness.",
              "Rise from bed and from chairs in stages: sit up, wait, then stand.",
              "Review your medicines with your doctor. Dizziness is one of the commonest side effects of common tablets.",
              "Reduce falls risk at home — lighting, night lights, removing loose rugs, handrails on stairs.",
              "Ask about driving. Rules differ, and sudden vertigo attacks may mean a temporary restriction.",
              "Anxiety and dizziness feed each other in both directions. Treating anxiety is a legitimate part of treating dizziness, not a dismissal of it.",
              "Reduce visual triggers where they bother you — screen scrolling, busy patterns, supermarket aisles — but reintroduce them gradually rather than avoiding them permanently.",
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
              "What do you think is causing my dizziness, and what in the examination points there?",
              "Have I been tested for BPPV, and can it be treated today with a manoeuvre?",
              "Do I need a scan, and would MRI or CT be the right one?",
              "Should I be taking any medication for this, and for how long?",
              "If I am already on a dizziness tablet, should I still be taking it?",
              "Can I be referred for vestibular rehabilitation?",
              "Is it safe for me to drive?",
              "What symptoms would mean I should go to hospital?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الدوخة والدوار",
    summary:
      "لماذا يهمّ توقيت الدوخة أكثر من الكلمة التي تصفها بها، وكيف يُشفى دوار الوضعة في دقائق، ولماذا تزيد أقراص الدوخة طويلة الأمد الأمر سوءاً.",
    category: "الدوخة والتوازن",
    metaTitle: "الدوخة والدوار — NeuroCare",
    metaDescription:
      "دليل المريض للدوخة والدوار: دوار الوضعة، التهاب العصب الدهليزي، الصداع النصفي الدهليزي، علامات السكتة، الفحوصات، العلاج وتمارين التوازن.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "يعتمد التوازن على اتفاق ثلاثة مصادر للمعلومات: الأذن الداخلية والعينان ومستشعرات الوضع في المفاصل والقدمين. والدوخة هي ما تشعر به حين تختلف هذه المصادر. يتلقى الدماغ تقارير متناقضة عن موضعك في الفراغ، فيكون الإحساس الناتج دوراناً أو تمايلاً أو طفواً أو مجرد ضبابية.",
          },
          {
            type: "paragraph",
            text: "كثيراً ما يعجز الناس عن وصف الدوخة، وقد كفّ الأطباء إلى حد كبير عن مطالبتهم بذلك. فالأوصاف غير موثوقة — إذ يصف الشخص نفسه النوبة نفسها بطرق مختلفة في أيام مختلفة. أما الأكثر موثوقية، وما يركز عليه التقييم الجيد، فهو التوقيت والمحفزات: كم تستمر كل نوبة، وما الذي يثيرها، وهل رافقها شيء آخر.",
          },
          {
            type: "list",
            items: [
              "دوار الوضعة الحميد: ثوانٍ من دوران شديد يثيره وضع الرأس — التقلّب في السرير أو النظر لأعلى أو الانحناء. أشيع سبب، ويُشفى في دقائق.",
              "التهاب العصب الدهليزي: نوبة واحدة من دوار شديد مستمر يدوم أياماً، غالباً بعد مرض فيروسي، ويهدأ تدريجياً خلال أسابيع.",
              "الصداع النصفي الدهليزي: نوبات تستمر دقائق إلى ساعات، غالباً دون صداع، لدى شخص لديه تاريخ صداع نصفي. أشيع بكثير مما يدرك معظم الناس.",
              "داء منيير: نوبات دوار تستمر من 20 دقيقة إلى ساعات، مع نقص سمع وطنين وإحساس بامتلاء في أذن واحدة.",
              "أسباب غير دهليزية: انخفاض ضغط الدم عند الوقوف، واضطرابات نظم القلب، وفقر الدم، وآثار الأدوية الجانبية، وانخفاض سكر الدم، والقلق.",
              "الدوخة الوضعية الإدراكية المستمرة: تمايل أو عدم ثبات مزمن يتبع غالباً أياً مما سبق ويستمر بسبب فرط يقظة الدماغ تجاه التوازن.",
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
            text: "أنفع ما يمكنك إخبار طبيبك به هو كم تستمر النوبة وما الذي يثيرها. ثوانٍ عند التقلّب في السرير تشير بقوة إلى دوار الوضعة. أيام من الدوران المستمر تشير إلى العصب الدهليزي. دقائق إلى ساعات متكررة تشير إلى الصداع النصفي أو منيير. أما الدوخة عند الوقوف فتشير بعيداً عن الأذن الداخلية تماماً.",
          },
          {
            type: "list",
            items: [
              "دوار الوضعة: دوران عنيف قصير أقل من دقيقة، يثيره بشكل موثوق الاستلقاء أو التقلّب أو إمالة الرأس للخلف. وغالباً أسوأ عند الاستيقاظ.",
              "التهاب العصب الدهليزي: دوران شديد مفاجئ مع غثيان وقيء، مستمر لأيام، يسوء مع أي حركة للرأس، والسمع سليم.",
              "الصداع النصفي الدهليزي: دوخة تستمر دقائق إلى ساعات، مع حساسية للضوء والصوت والحركة البصرية، أحياناً مع صداع وأحياناً بدونه.",
              "منيير: دوار مع نقص سمع متذبذب وطنين وضغط في أذن واحدة.",
              "دوخة أو شعور بقرب الإغماء عند الوقوف، خاصة في الحر أو عند الجفاف أو بعد بدء دواء لضغط الدم.",
              "عدم ثبات مزمن يسوء في المتاجر الكبيرة أو أمام الأنماط المزدحمة أو على الشاشات — نموذجي للدوخة الوضعية الإدراكية المستمرة.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "دوخة قد تكون سكتة دماغية — اتصل بالرقم 998",
            items: [
              "دوخة مع ازدواج رؤية أو صعوبة في الكلام أو البلع أو انحراف في الوجه.",
              "دوخة مع ضعف أو تنميل في ذراع أو ساق.",
              "دوخة مع صداع جديد شديد أو ألم في الرقبة، خاصة إن كان مفاجئاً.",
              "عجز عن المشي أو حتى الجلوس دون سند — فأسباب الأذن الداخلية تسمح عادة بالمشي، ولو بصعوبة، إن حاولت.",
              "دوخة مع صمم جديد في أذن واحدة، وقد يدل ذلك على سكتة في جذع الدماغ أو في تروية الأذن الداخلية.",
              "دوار جديد مستمر لدى شخص لديه عوامل خطر وعائية — ارتفاع ضغط أو سكري أو رجفان أذيني أو تدخين.",
              "أي دوخة مع فقدان وعي أو ألم صدري أو خفقان تحتاج تقييماً عاجلاً.",
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
            text: "تُشخّص معظم أسباب الدوخة عند سرير المريض، بطبيب يراقب عينيك أثناء تحريك رأسك. فحركات العين هي قراءة جهاز التوازن، والفحص الدقيق يتفوق على أشعة الدماغ عند الغالبية العظمى من المرضى.",
          },
          {
            type: "list",
            items: [
              "قصة قائمة على التوقيت والمحفزات — كم تستمر، وكم مرة، وما يثيرها، وما يرافقها.",
              "مناورة ديكس-هولبايك: تُضجَع بسرعة والرأس مُدار إلى جانب بينما يراقب الطبيب عينيك. فإن وُجد دوار الوضعة أعادت الدوار لفترة قصيرة وأظهرت حركة عين مميزة. مزعجة لثلاثين ثانية، وتشخيصية.",
              "اختبار دفع الرأس، وفحص الرأرأة التلقائية، واختبار محاذاة العينين — ومعاً تفصل هذه أسباب الأذن الداخلية عن السكتة بدقة عالية في أيدٍ مدرّبة.",
              "قياس ضغط الدم مستلقياً وواقفاً لكشف الهبوط الوضعي.",
              "تقييم السمع عند وجود أعراض سمعية.",
              "تحاليل دم لفقر الدم والسكر ووظائف الغدة الدرقية والفيتامينات؛ وتخطيط قلب إن وُجد إغماء أو خفقان.",
              "مراجعة الأدوية — فأقراص ضغط الدم والمهدئات ومضادات الاكتئاب وبعض المضادات الحيوية كلها تسبب دوخة.",
              "أشعة الدماغ حين يوحي الفحص بسبب مركزي أو عند وجود عوامل خطر للسكتة مع علامات إنذار — لا بشكل روتيني.",
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
            text: "تبدو فحوصات التوازن غريبة لكنها آمنة وتعتمد غالباً على مراقبة عينيك. وقد تثير الدوخة عمداً — فهكذا تعمل — لذا رتّب من يوصلك إلى المنزل إن كنت ستجري مجموعة كاملة منها.",
          },
          {
            type: "list",
            items: [
              "رنين مغناطيسي للدماغ: من 20 إلى 40 دقيقة بلا حركة داخل نفق صوته مرتفع، مع واقٍ للأذن وجرس للاستدعاء. الأشعة المقطعية العادية ضعيفة في رؤية جذع الدماغ والمخيخ، لذا الرنين هو الفحص المفضّل عند الاشتباه بسبب مركزي. ولاحظ أن الرنين قد يكون طبيعياً كاذباً في أول 24 إلى 48 ساعة بعد سكتة صغيرة في جذع الدماغ.",
              "أخبر الفريق عن معادن مزروعة أو منظم ضربات أو حمل أو رهاب أماكن مغلقة قبل الموعد. وإن كان الاستلقاء المسطح يسبب لك دوخة فقُل ذلك — يمكن للفريق أن يضعك بعناية ويتقدّم ببطء.",
              "تخطيط الرأرأة بالفيديو: نظارات بكاميرا تسجّل حركات عينيك بينما تتابع أضواءً وبينما يُحرَّك رأسك إلى أوضاع مختلفة. غير مؤلم، نحو ساعة.",
              "اختبار السعرات الحرارية، وهو جزء من الجلسة نفسها: يُدخَل هواء أو ماء دافئ ثم بارد في كل قناة أذن بالتناوب، مما يُحدث عمداً نحو دقيقة من الدوران. مزعج فعلاً لكنه قصير وآمن تماماً، ويخبر الطبيب بأداء كل أذن داخلية على حدة.",
              "اختبار دفع الرأس بالفيديو: نظارات تسجّل العين بينما يُدار رأسك بسرعة مسافة قصيرة. سريع ويُتحمّل أفضل بكثير من اختبار السعرات.",
              "قياس السمع: الجلوس في غرفة عازلة للصوت مع سماعات والضغط على زر عند سماع نغمة. غير مؤلم، من 20 إلى 30 دقيقة.",
              "لا دور روتيني لتخطيط الدماغ الكهربائي في الدوخة إلا إن كانت النوبات تشمل فقدان وعي يوحي بنوبات صرعية.",
              "تخطيط الأعصاب مهم فقط إن كان ضعف الإحساس في القدمين يسهم في عدم الثبات.",
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
            text: "يعتمد العلاج كلياً على السبب، وأهم رسالة هي عكس ما يتوقعه معظم الناس: في معظم أسباب الدوخة، الدواء ليس هو الحل، وأقراص الدوخة طويلة الأمد تُبطئ التعافي فعلياً.",
          },
          {
            type: "list",
            items: [
              "دوار الوضعة: يُعالج بمناورة إعادة التموضع، وأشيعها مناورة إيبلي، وتُجرى في العيادة خلال دقائق. تزيل الأعراض عند الغالبية العظمى بعد جلسة أو جلستين. والدواء لا يعالج دوار الوضعة. فإن قيل لك إن دوخّتك دوار وضعة وعُرضت عليك أقراص فقط، فاسأل عن مناورة إعادة التموضع.",
              "التهاب العصب الدهليزي: قد يُستخدم مهدئ دهليزي مثل البروكلوربيرازين أو السيناريزين لأول 48 إلى 72 ساعة فقط للسيطرة على القيء الشديد. وبعد ذلك يجب إيقافه — فالاستمرار عليه يمنع الدماغ من التعويض ويحوّل مرضاً مدته ثلاثة أسابيع إلى ثلاثة أشهر. أما العلاج الحقيقي فهو تمارين التأهيل الدهليزي.",
              "الصداع النصفي الدهليزي: يُعالج كصداع نصفي. الاهتمام بالنوم والوجبات والترطيب، مع دواء وقائي مثل البروبرانولول أو الأميتريبتيلين أو الكانديسارتان أو التوبيراميت. والمهدئات الدهليزية لا تفيد وينبغي تجنّبها.",
              "داء منيير: تقليل الملح والكافيين والكحول؛ والبيتاهيستين مستخدم على نطاق واسع، وتُضاف مدرات البول أحياناً. وإحالة إلى أخصائي أنف وأذن مناسبة للنوبات المتكررة.",
              "الهبوط الوضعي في ضغط الدم: زيادة السوائل والملح إن كان ذلك مناسباً، والنهوض ببطء على مراحل، ومراجعة أي أدوية تخفض الضغط.",
              "الدوخة الوضعية الإدراكية المستمرة: تأهيل دهليزي، ومضاد اكتئاب من نوع SSRI أو SNRI يعمل هنا على الدوخة نفسها لا على المزاج، والعلاج السلوكي المعرفي. هذه التوليفة فعّالة والحالة كثيراً ما تُغفل لسنوات.",
              "التأهيل الدهليزي هو العلاج الفعّال الأقل وصفاً على الإطلاق في هذا المجال كله. اسأل عنه تحديداً.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "لماذا أقراص الدوخة طويلة الأمد إجابة خاطئة",
            items: [
              "البيتاهيستين والسيناريزين والبروكلوربيرازين وما شابهها تُثبّط جهاز التوازن.",
              "التعافي من معظم مشاكل الأذن الداخلية يعتمد على إعادة معايرة الدماغ، ولا يستطيع ذلك إلا إن تلقّى الإشارات غير الطبيعية. والتثبيط يعطّل بالضبط العملية التي تحتاجها.",
              "بعد نحو ثلاثة أيام في النوبة الحادة، تُسوئ هذه الأدوية النتيجة عادة ولا تحسّنها.",
              "ولدى كبار السن تزيد أيضاً السقوط وقد تسبب متلازمة شبيهة بالشلل الرعاش مع الاستخدام الطويل.",
              "إن كنت تتناول أحدها منذ أشهر، فاسأل طبيبك عن إيقافه والبدء بالتمارين بدلاً منه.",
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
            text: "يعمل التأهيل الدهليزي بإثارة دوخة خفيفة عمداً كي يتعلم الدماغ إعادة المعايرة. يبدو هذا مخالفاً للحدس ومزعجاً قليلاً، وهو العلاج الأنجع على الإطلاق للدوخة المزمنة ذات المنشأ الأذني. والأعراض الخفيفة أثناء التمارين متوقّعة وضرورية، وينبغي أن تهدأ خلال نحو 15 دقيقة بعدها.",
          },
          {
            type: "list",
            items: [
              "تثبيت النظر: امسك بطاقة عليها حرف على مسافة ذراع، وثبّت عينيك عليها، وأدر رأسك يميناً ويساراً لثلاثين ثانية. كرّر عمودياً. ثلاث مرات يومياً، وصولاً إلى دقيقة. هذا هو التمرين الأساس.",
              "حركات العين والرأس: انظر من هدف إلى آخر ثم حرّك رأسك لتتبعه، عشر تكرارات.",
              "تدرّج توازن الوقوف: القدمان متباعدتان، ثم متلاصقتان، ثم كعب أمام إصبع، ثم بعينين مغلقتين — 30 ثانية لكل وضع، دائماً بجوار جدار أو سطح.",
              "المشي مع إدارة الرأس: امشِ وأنت تنظر يميناً ويساراً، ثم لأعلى ولأسفل، في ممر آمن.",
              "تمرين الجلوس والوقوف عشر مرات، مرتين يومياً، ويعالج التوازن وهبوط ضغط الدم معاً.",
              "لدوار الوضعة، اسأل عن تمارين براندت-داروف للاستخدام المنزلي إن تعذّر تكرار المناورات في العيادة.",
              "تدرّج والتزم — الجلسات القصيرة اليومية أفضل من الطويلة المتقطعة. ويحتاج معظم الناس ستة إلى اثني عشر أسبوعاً.",
              "لا تتجنّب الحركات التي تثير الأعراض. التجنّب هو السبب الرئيسي لتحوّل الدوخة إلى مزمنة.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع الدوخة",
        blocks: [
          {
            type: "paragraph",
            text: "الدوخة مخيفة ومرهقة، وتدفع الناس عادة إلى تضييق حياتهم — تجنّب المراكز التجارية أو القيادة أو الخروج بمفردهم. هذا التجنّب مفهوم، وهو أيضاً الشيء الرئيسي الذي يُبقي الدوخة مستمرة.",
          },
          {
            type: "list",
            items: [
              "استمر في الحركة والخروج. التعرّض التدريجي المقصود علاج؛ والتجنّب فخ.",
              "حافظ على ترطيبك، خاصة في مناخ الخليج. الجفاف يزيد كل سبب للدوخة سوءاً.",
              "انهض من السرير ومن الكرسي على مراحل: اجلس، انتظر، ثم قف.",
              "راجع أدويتك مع طبيبك. الدوخة من أشيع الآثار الجانبية للأقراص الشائعة.",
              "قلّل خطر السقوط في المنزل — الإضاءة والأضواء الليلية وإزالة السجاد المتحرك ودرابزين الدرج.",
              "اسأل عن القيادة. القواعد تختلف، ونوبات الدوار المفاجئة قد تعني تقييداً مؤقتاً.",
              "القلق والدوخة يغذّي كل منهما الآخر في الاتجاهين. علاج القلق جزء مشروع من علاج الدوخة وليس تقليلاً من شأنها.",
              "قلّل المحفزات البصرية حيث تزعجك — تمرير الشاشة والأنماط المزدحمة وممرات المتاجر — لكن أعد إدخالها تدريجياً بدل تجنّبها نهائياً.",
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
              "ما الذي تعتقد أنه يسبب دوخّتي، وما الذي في الفحص يشير إلى ذلك؟",
              "هل فُحصت لدوار الوضعة، وهل يمكن علاجه اليوم بمناورة؟",
              "هل أحتاج أشعة، وهل الرنين أم المقطعية هو المناسب؟",
              "هل ينبغي أن أتناول أي دواء لهذا، ولكم من الوقت؟",
              "إن كنت أتناول قرصاً للدوخة أصلاً، فهل ينبغي أن أستمر عليه؟",
              "هل يمكن إحالتي إلى التأهيل الدهليزي؟",
              "هل القيادة آمنة لي؟",
              "ما الأعراض التي تعني أن أذهب إلى المستشفى؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
