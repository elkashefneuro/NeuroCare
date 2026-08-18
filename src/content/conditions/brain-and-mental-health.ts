import type { Condition } from "../schema";

export const brainAndMentalHealth = {
  slug: "brain-and-mental-health",
  categoryId: "brain-health",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 9,
  sources: [
    {
      label: "World Health Organization — mental health and brain health",
      url: "https://www.who.int/health-topics/mental-health",
    },
    {
      label: "World Health Organization — dementia risk reduction guidelines",
      url: "https://www.who.int/health-topics/dementia",
    },
    {
      label: "American Academy of Neurology — clinical guidelines",
      url: "https://www.aan.com/practice/guidelines",
    },
  ],
  en: {
    title: "Brain and mental health",
    summary:
      "How neurological and mental health shape each other, what genuinely protects the brain over a lifetime, and when low mood or anxiety needs treating as part of a neurological illness.",
    category: "Brain and mental health",
    metaTitle: "Brain and mental health — NeuroCare",
    metaDescription:
      "Patient guide to brain and mental health: the link between neurological and psychiatric symptoms, functional neurological disorder, risk reduction, treatment and exercise.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you is a decision for your own doctor. If you are having thoughts of harming yourself, seek help today. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "The separation of neurology from psychiatry is a matter of medical history, not biology. Both are disorders of the same organ. Depression after a stroke, anxiety that presents as dizziness, memory complaints driven by low mood, and epilepsy accompanied by depression are not coincidences — they reflect shared circuits, shared chemistry and shared consequences.",
          },
          {
            type: "paragraph",
            text: "This matters practically for two reasons. First, mental health symptoms are extremely common in neurological illness and are consistently under-treated, even though treating them improves pain, fatigue, seizure control and rehabilitation outcomes. Second, distress can produce genuine neurological symptoms — real weakness, real seizures, real numbness — through mechanisms that have nothing to do with pretending. Understanding that changes how people are treated and how they recover.",
          },
          {
            type: "list",
            items: [
              "Depression affects roughly one in three people after a stroke, and is similarly common in Parkinson's disease, multiple sclerosis and epilepsy.",
              "Anxiety commonly presents physically — dizziness, chest tightness, tingling in the hands and around the mouth, headache — and these symptoms are real, not imagined.",
              "Functional neurological disorder produces genuine symptoms such as weakness, tremor, non-epileptic seizures or gait difficulty, arising from a problem in how the nervous system functions rather than from structural damage. It is common, diagnosable positively, and treatable.",
              "Chronic pain, poor sleep and low mood form a loop in which each worsens the other two.",
              "Brain health is built over decades. What protects the brain in midlife determines a great deal about cognition in later life.",
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
            text: "Mental health symptoms in neurological illness are often missed because both patient and doctor attribute everything to the neurological diagnosis. Fatigue, poor concentration, disturbed sleep and loss of interest get put down to the primary illness when they may be a treatable depression sitting on top of it.",
          },
          {
            type: "list",
            items: [
              "Depression: persistent low mood or loss of interest and enjoyment for two weeks or more, with poor sleep, low energy, appetite change, guilt, poor concentration, or hopelessness.",
              "Anxiety: persistent worry, restlessness, muscle tension, palpitations, and physical symptoms that repeatedly prompt medical investigation with normal results.",
              "Panic attacks: sudden intense fear peaking within minutes, with a racing heart, breathlessness, tingling in the hands and around the mouth, and a sense of impending disaster. Frequently mistaken for a heart or neurological emergency.",
              "Functional neurological symptoms: weakness or tremor that varies with attention, a leg that works better when you are distracted, or seizure-like episodes with preserved awareness and prolonged duration.",
              "Cognitive symptoms of depression: slow thinking and poor concentration that the person is very worried about — in contrast with dementia, where the family worries more than the patient.",
              "Sudden personality or behaviour change, particularly in someone under 60, needs neurological assessment as well as psychiatric assessment.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Get help today, not at your next appointment",
            items: [
              "Thoughts of ending your life, or of harming yourself or anyone else. Tell someone today — a doctor, an emergency department, or a person you trust. This is treatable and help exists.",
              "A plan or preparation to harm yourself — go to an emergency department now or call 998.",
              "New confusion, hallucinations or severe agitation developing over hours to days — this can be delirium from a physical cause and needs same-day assessment.",
              "Severe depression with inability to eat or drink.",
              "First episode of psychosis — hearing voices or holding fixed unusual beliefs — needs urgent assessment.",
              "Any sudden neurological symptom — face droop, one-sided weakness, speech difficulty — must be assessed as a stroke first, whatever else is going on. Call 998.",
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
            text: "Good assessment works in both directions: it looks for physical causes of psychological symptoms, and psychological contributors to physical symptoms. Neither is a diagnosis of exclusion — both are made on positive findings.",
          },
          {
            type: "list",
            items: [
              "A full history covering mood, sleep, appetite, energy, concentration, alcohol and substance use, and stressors — asked directly rather than left to the patient to raise.",
              "Structured questionnaires such as the PHQ-9 for depression and GAD-7 for anxiety, useful for measuring change over time as well as for diagnosis.",
              "Neurological examination, which in functional neurological disorder shows characteristic positive signs — such as Hoover's sign, where hip extension is weak on direct testing but normal when the other leg is used.",
              "Blood tests for physical causes of psychological symptoms: thyroid function, B12, vitamin D, calcium, glucose, and full blood count.",
              "A medication review — steroids, some Parkinson's medicines, isotretinoin, interferons and several others affect mood directly.",
              "Screening for sleep apnoea and other sleep disorders, which cause fatigue, low mood and poor concentration that no antidepressant will fix.",
              "Imaging or EEG only where the history suggests a structural or epileptic cause, not as reassurance.",
              "In non-epileptic attacks, video-EEG monitoring during a typical episode is the definitive test.",
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
            text: "There is no blood test or scan that diagnoses depression, anxiety or functional neurological disorder. Tests are used to exclude other causes and, in the case of seizure-like episodes, to make a positive diagnosis. A normal result is meaningful information, not a dismissal of your symptoms.",
          },
          {
            type: "list",
            items: [
              "EEG: 30 to 60 minutes with about 20 small electrodes attached to the scalp using paste. Completely painless — nothing is passed into you, it only records. You lie or sit quietly, will be asked to breathe deeply for three minutes, and will be shown a flashing light. Wash your hair beforehand and skip conditioner and hair products.",
              "A routine EEG between episodes is often normal even in genuine epilepsy, so a normal EEG does not exclude it — and equally, minor EEG variations do not prove it. The EEG is interpreted alongside your history, never alone.",
              "Sleep-deprived EEG: you are asked to stay awake for much of the night beforehand to increase the yield. Arrange for someone to drive you.",
              "Video-EEG telemetry: an admission of several days with continuous EEG and video recording, to capture a typical episode. This is the best test for distinguishing epileptic from non-epileptic seizures, and it gives a definite answer rather than a probability.",
              "MRI brain: 20 to 40 minutes lying still in a loud tunnel, no radiation, no pain. If you have claustrophobia or anxiety, tell the department in advance — this is common and they can help with positioning, a mirror, or occasionally sedation.",
              "Nerve conduction studies, if arranged for functional weakness or sensory symptoms, are normal in functional neurological disorder. That is an expected part of the diagnosis rather than a failure to find anything.",
              "Expect your doctor to explain what each test is for before it is done, and what a normal result would mean.",
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
            text: "Treatment combines psychological therapy, medication where appropriate, and attention to sleep, exercise and substance use. In neurological illness, treating mood is not a side issue — it improves pain, fatigue, adherence to treatment and rehabilitation outcomes measurably.",
          },
          {
            type: "list",
            items: [
              "Psychological therapy: cognitive behavioural therapy has the strongest evidence base for depression, anxiety, chronic pain and insomnia. Acceptance and commitment therapy and mindfulness-based approaches are effective alternatives, particularly in long-term conditions.",
              "Antidepressants: SSRIs such as sertraline, escitalopram or fluoxetine, and SNRIs such as duloxetine or venlafaxine. Duloxetine has the advantage of treating nerve pain and depression together. Expect two to four weeks before benefit, and possible early nausea or restlessness that usually settles.",
              "Do not stop an antidepressant suddenly — discontinuation symptoms are common and unpleasant. Reduction should be planned and gradual.",
              "Some antidepressants interact with other medicines, including triptans for migraine and some epilepsy drugs. Always tell each prescriber everything you take.",
              "In epilepsy, mood treatment is important and safe with the right choices, but the interaction between antidepressants, antiseizure medicines and seizure threshold needs a doctor familiar with both.",
              "Functional neurological disorder: the treatment is specialist physiotherapy retraining movement, together with psychological therapy where relevant. Understanding and accepting the diagnosis is itself therapeutic, and outcomes are considerably better when it is explained clearly and early rather than after years of investigation.",
              "Non-epileptic attacks are not treated with antiseizure medicines, and withdrawing those medicines is often part of the treatment.",
              "Address alcohol and recreational drug use honestly. Both worsen mood, sleep, seizures and cognition, and both are common self-treatments for the same symptoms.",
              "Treat sleep disorders and chronic pain as part of mental health treatment, not separately. The loop runs in both directions.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Protecting your brain over a lifetime",
            items: [
              "Control blood pressure, diabetes and cholesterol from midlife. Vascular health is the strongest modifiable influence on later cognition.",
              "Stop smoking, and keep alcohol low.",
              "Treat hearing loss — untreated hearing loss is one of the largest modifiable risk factors for cognitive decline.",
              "Stay physically active, socially connected and mentally engaged. All three are independently protective.",
              "Protect your head: seatbelts, helmets, and reducing falls risk at home.",
              "Treat depression and sleep disorders rather than living with them. Both have long-term effects on cognition.",
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
            text: "Exercise has effect sizes in mild to moderate depression comparable to medication and psychological therapy, and it improves anxiety, sleep and cognition at the same time. It is genuinely a treatment, not a wellbeing suggestion — but only at a dose that most people never reach.",
          },
          {
            type: "list",
            items: [
              "Aerobic exercise 30 minutes, three to five times a week, at an intensity where talking is possible but singing is not. This is the dose used in the trials that showed an antidepressant effect.",
              "Start far smaller than you think you should if mood is low. Ten minutes of walking daily, achieved reliably, beats a plan for an hour that never happens.",
              "Exercise outdoors in morning daylight where possible — it combines the exercise effect with light exposure, which independently helps mood and the sleep-wake cycle.",
              "Resistance training twice a week has its own evidence for depression and anxiety, separate from aerobic exercise.",
              "Yoga, tai chi and breathing practices reduce anxiety and improve sleep, with the added benefit of balance training.",
              "Slow breathing — around six breaths a minute, with the out-breath longer than the in-breath — for five minutes is a practical tool during acute anxiety and can be used anywhere.",
              "Exercise with other people where you can. The social element adds a measurable effect beyond the physical one.",
              "In functional neurological disorder, graded physiotherapy-guided movement is a core treatment. Do it with a therapist familiar with the condition, since the approach differs from ordinary rehabilitation.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living well with brain and mental health",
        blocks: [
          {
            type: "paragraph",
            text: "Living well with a neurological condition is as much about mood, sleep, relationships and purpose as it is about the diagnosis itself. People with the same scan findings can have very different lives, and much of that difference lies in things that can be worked on.",
          },
          {
            type: "list",
            items: [
              "Say something about your mood at your neurology appointments. Most doctors will not ask unless you open the door, and it is a legitimate part of the consultation.",
              "Keep a regular sleep schedule. Sleep is the single most powerful lever on mood available without a prescription.",
              "Stay socially connected. Isolation worsens both mood and cognition, and it creeps up quietly after a diagnosis.",
              "Maintain purpose and routine — work, volunteering, caring, a structured hobby. Purpose predicts outcomes independently of severity.",
              "Limit alcohol. It is a depressant, it fragments sleep, it lowers the seizure threshold, and it interacts with most neurological medicines.",
              "Set expectations that fit the condition rather than your previous self, and adjust them without treating adjustment as defeat.",
              "Involve family. They are affected too, and carers of people with neurological illness have high rates of depression that go unrecognised.",
              "Ask for help earlier than feels necessary. Both psychological therapy and medication work better before things reach crisis point.",
              "If a treatment is not working after a fair trial, say so. There are many options, and persisting silently with something ineffective is common and avoidable.",
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
              "Could my mood or anxiety be contributing to my physical symptoms, or the other way round?",
              "Have physical causes of my low mood — thyroid, B12, vitamin D, sleep apnoea, my medicines — been checked?",
              "Would psychological therapy help me, and can I be referred?",
              "If I need medication, which one fits best with my neurological condition and my other medicines?",
              "How long before I should expect an effect, and what side effects should I watch for?",
              "If I have functional neurological disorder, can you explain how the diagnosis was made and what treatment involves?",
              "What can I do to reduce my long-term risk of cognitive decline?",
              "Who do I contact if things get worse quickly?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "صحة الدماغ والصحة النفسية",
    summary:
      "كيف تشكّل الصحة العصبية والنفسية إحداهما الأخرى، وما الذي يحمي الدماغ فعلاً على مدى العمر، ومتى يحتاج انخفاض المزاج أو القلق إلى علاج كجزء من المرض العصبي.",
    category: "صحة الدماغ والنفس",
    metaTitle: "صحة الدماغ والصحة النفسية — NeuroCare",
    metaDescription:
      "دليل المريض لصحة الدماغ والصحة النفسية: العلاقة بين الأعراض العصبية والنفسية، الاضطراب العصبي الوظيفي، تقليل المخاطر، العلاج والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء فقرار طبيبك. إن راودتك أفكار بإيذاء نفسك فاطلب المساعدة اليوم. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "الفصل بين طب الأعصاب والطب النفسي مسألة تاريخ طبي لا مسألة بيولوجيا. فكلاهما اضطراب في العضو نفسه. والاكتئاب بعد السكتة، والقلق الذي يظهر على شكل دوخة، وشكوى الذاكرة الناتجة عن انخفاض المزاج، والصرع المصحوب بالاكتئاب، ليست مصادفات — بل تعكس دارات مشتركة وكيمياء مشتركة وعواقب مشتركة.",
          },
          {
            type: "paragraph",
            text: "ولهذا أهمية عملية لسببين. أولاً، الأعراض النفسية شائعة جداً في الأمراض العصبية وتُعالَج باستمرار أقل مما ينبغي، رغم أن علاجها يحسّن الألم والإرهاق والسيطرة على النوبات ونتائج التأهيل. وثانياً، قد يُنتج الضيق النفسي أعراضاً عصبية حقيقية — ضعفاً حقيقياً ونوبات حقيقية وتنميلاً حقيقياً — عبر آليات لا علاقة لها بالتظاهر. وفهم ذلك يغيّر طريقة علاج الناس وطريقة تعافيهم.",
          },
          {
            type: "list",
            items: [
              "يصيب الاكتئاب نحو واحد من كل ثلاثة بعد السكتة الدماغية، وهو شائع بالقدر نفسه في مرض باركنسون والتصلب المتعدد والصرع.",
              "كثيراً ما يظهر القلق جسدياً — دوخة وضيق في الصدر ووخز في اليدين وحول الفم وصداع — وهذه أعراض حقيقية لا متخيّلة.",
              "الاضطراب العصبي الوظيفي يُنتج أعراضاً حقيقية مثل الضعف أو الرعشة أو نوبات غير صرعية أو صعوبة في المشي، ناشئة عن خلل في كيفية عمل الجهاز العصبي لا عن ضرر بنيوي. وهو شائع ويُشخّص بعلامات إيجابية وقابل للعلاج.",
              "الألم المزمن وسوء النوم وانخفاض المزاج تشكّل حلقة يُسوئ كل منها الاثنين الآخرين.",
              "صحة الدماغ تُبنى عبر عقود. وما يحمي الدماغ في منتصف العمر يحدد الكثير عن الإدراك في المراحل المتأخرة.",
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
            text: "كثيراً ما تُغفل الأعراض النفسية في المرض العصبي لأن المريض والطبيب كليهما يعزوان كل شيء إلى التشخيص العصبي. فالإرهاق وضعف التركيز واضطراب النوم وفقدان الاهتمام تُنسب إلى المرض الأساسي بينما قد تكون اكتئاباً قابلاً للعلاج يجلس فوقه.",
          },
          {
            type: "list",
            items: [
              "الاكتئاب: انخفاض مزاج مستمر أو فقدان الاهتمام والاستمتاع لأسبوعين أو أكثر، مع سوء نوم وقلة طاقة وتغيّر في الشهية وشعور بالذنب وضعف تركيز أو فقدان أمل.",
              "القلق: قلق مستمر وتململ وشدّ عضلي وخفقان وأعراض جسدية تدفع مراراً إلى فحوصات طبية نتائجها طبيعية.",
              "نوبات الهلع: خوف شديد مفاجئ يبلغ ذروته خلال دقائق، مع تسارع في القلب وضيق تنفس ووخز في اليدين وحول الفم وإحساس بكارثة وشيكة. كثيراً ما تُخلط بحالة قلبية أو عصبية طارئة.",
              "الأعراض العصبية الوظيفية: ضعف أو رعشة تتغيّر مع الانتباه، أو ساق تعمل أفضل حين تكون منشغلاً، أو نوبات شبيهة بالصرع مع بقاء الوعي وطول المدة.",
              "الأعراض الإدراكية للاكتئاب: بطء في التفكير وضعف في التركيز يقلق منهما الشخص كثيراً — على عكس الخرف حيث تقلق الأسرة أكثر من المريض.",
              "التغيّر المفاجئ في الشخصية أو السلوك، خاصة لدى من هم دون الستين، يحتاج تقييماً عصبياً إلى جانب التقييم النفسي.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "اطلب المساعدة اليوم لا في موعدك القادم",
            items: [
              "أفكار بإنهاء حياتك أو بإيذاء نفسك أو أي شخص آخر. أخبر أحداً اليوم — طبيباً أو قسم طوارئ أو شخصاً تثق به. هذا قابل للعلاج والمساعدة موجودة.",
              "وجود خطة أو تحضير لإيذاء نفسك — اذهب إلى قسم الطوارئ الآن أو اتصل بالرقم 998.",
              "تشوّش جديد أو هلاوس أو هياج شديد يتطور خلال ساعات إلى أيام — قد يكون هذياناً من سبب جسدي ويحتاج تقييماً في اليوم نفسه.",
              "اكتئاب شديد مع عجز عن الأكل أو الشرب.",
              "أول نوبة ذهان — سماع أصوات أو اعتقادات ثابتة غير معتادة — تحتاج تقييماً عاجلاً.",
              "أي عَرَض عصبي مفاجئ — انحراف في الوجه أو ضعف في جانب أو صعوبة في الكلام — يجب تقييمه كسكتة أولاً مهما كان ما يجري غير ذلك. اتصل بالرقم 998.",
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
            text: "التقييم الجيد يعمل في الاتجاهين: يبحث عن أسباب جسدية للأعراض النفسية، وعن مساهمات نفسية في الأعراض الجسدية. وليس أيّهما تشخيصاً بالاستبعاد — بل يُبنى كلاهما على علامات إيجابية.",
          },
          {
            type: "list",
            items: [
              "قصة كاملة تغطي المزاج والنوم والشهية والطاقة والتركيز وتناول الكحول والمواد والضغوط — تُطرح مباشرة لا تُترك للمريض ليبادر بها.",
              "استبيانات منظمة مثل PHQ-9 للاكتئاب وGAD-7 للقلق، وهي مفيدة لقياس التغيّر عبر الزمن كما هي مفيدة للتشخيص.",
              "فحص عصبي، يُظهر في الاضطراب العصبي الوظيفي علامات إيجابية مميزة — مثل علامة هوفر، حيث يكون بسط الورك ضعيفاً عند الفحص المباشر وطبيعياً عند استخدام الساق الأخرى.",
              "تحاليل دم للأسباب الجسدية للأعراض النفسية: وظائف الغدة الدرقية وB12 وفيتامين D والكالسيوم والسكر وتعداد الدم الكامل.",
              "مراجعة الأدوية — فالكورتيزون وبعض أدوية باركنسون والإيزوتريتينوين والإنترفيرونات وغيرها تؤثر على المزاج مباشرة.",
              "فحص انقطاع النفس النومي واضطرابات النوم الأخرى، التي تسبب إرهاقاً وانخفاض مزاج وضعف تركيز لن يصلحها أي مضاد اكتئاب.",
              "الأشعة أو تخطيط الدماغ فقط حين تشير القصة إلى سبب بنيوي أو صرعي، لا كوسيلة للاطمئنان.",
              "في النوبات غير الصرعية، المراقبة بالفيديو مع تخطيط الدماغ أثناء نوبة نموذجية هي الفحص القاطع.",
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
            text: "لا يوجد تحليل دم ولا أشعة تُشخّص الاكتئاب أو القلق أو الاضطراب العصبي الوظيفي. تُستخدم الفحوصات لاستبعاد أسباب أخرى، وفي حالة النوبات الشبيهة بالصرع لوضع تشخيص إيجابي. والنتيجة الطبيعية معلومة ذات معنى لا تقليلاً من شأن أعراضك.",
          },
          {
            type: "list",
            items: [
              "تخطيط الدماغ الكهربائي: من 30 إلى 60 دقيقة مع نحو 20 قطباً صغيراً تُثبَّت على فروة الرأس بمعجون. غير مؤلم تماماً — لا يُمرَّر إليك شيء، بل يسجّل فقط. تستلقي أو تجلس بهدوء، وسيُطلب منك التنفس بعمق لثلاث دقائق، وستُعرض عليك أضواء وامضة. اغسل شعرك مسبقاً وتجنّب البلسم ومنتجات الشعر.",
              "التخطيط الروتيني بين النوبات كثيراً ما يكون طبيعياً حتى في الصرع الحقيقي، فالنتيجة الطبيعية لا تستبعده — وبالمثل فالتغيّرات البسيطة لا تُثبته. ويُفسَّر التخطيط إلى جانب قصتك لا بمفرده أبداً.",
              "تخطيط الدماغ بعد الحرمان من النوم: يُطلب منك البقاء مستيقظاً معظم الليلة السابقة لزيادة فرصة الالتقاط. رتّب من يقود بك.",
              "المراقبة التلفزيونية مع تخطيط الدماغ: إقامة لعدة أيام مع تسجيل مستمر للتخطيط والفيديو لالتقاط نوبة نموذجية. وهذا أفضل فحص للتفريق بين النوبات الصرعية وغير الصرعية، ويعطي إجابة قاطعة لا احتمالاً.",
              "رنين الدماغ: من 20 إلى 40 دقيقة بلا حركة داخل نفق صوته مرتفع، بلا إشعاع وبلا ألم. وإن كان لديك رهاب أماكن مغلقة أو قلق فأخبر القسم مسبقاً — فهذا شائع ويمكنهم المساعدة بالوضعية أو بمرآة أو أحياناً بمهدّئ.",
              "تخطيط الأعصاب، إن طُلب لضعف وظيفي أو أعراض حسية، يكون طبيعياً في الاضطراب العصبي الوظيفي. وهذا جزء متوقّع من التشخيص لا فشل في إيجاد شيء.",
              "توقّع أن يشرح لك طبيبك الغرض من كل فحص قبل إجرائه، ومعنى النتيجة الطبيعية.",
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
            text: "يجمع العلاج بين العلاج النفسي والدواء عند الحاجة والاهتمام بالنوم والتمارين وتعاطي المواد. وفي المرض العصبي، علاج المزاج ليس مسألة جانبية — بل يحسّن الألم والإرهاق والالتزام بالعلاج ونتائج التأهيل بشكل ملموس.",
          },
          {
            type: "list",
            items: [
              "العلاج النفسي: للعلاج السلوكي المعرفي أقوى قاعدة أدلة في الاكتئاب والقلق والألم المزمن والأرق. وعلاج القبول والالتزام والأساليب القائمة على اليقظة الذهنية بدائل فعّالة، خاصة في الحالات المزمنة.",
              "مضادات الاكتئاب: مثبطات استرداد السيروتونين مثل سيرترالين أو إسيتالوبرام أو فلوكسيتين، ومثبطات السيروتونين والنورأدرينالين مثل دولوكسيتين أو فينلافاكسين. وللدولوكسيتين ميزة علاج ألم الأعصاب والاكتئاب معاً. توقّع أسبوعين إلى أربعة قبل ظهور الفائدة، مع احتمال غثيان أو تململ مبكر يهدأ عادة.",
              "لا توقف مضاد الاكتئاب فجأة — فأعراض الإيقاف شائعة ومزعجة. وينبغي أن يكون التخفيض مخططاً وتدريجياً.",
              "بعض مضادات الاكتئاب تتفاعل مع أدوية أخرى، منها التريبتانات للصداع النصفي وبعض أدوية الصرع. أخبر دائماً كل طبيب يصف لك بكل ما تتناوله.",
              "في الصرع، علاج المزاج مهم وآمن مع الاختيارات الصحيحة، لكن التفاعل بين مضادات الاكتئاب وأدوية النوبات وعتبة النوبة يحتاج طبيباً ملمّاً بالاثنين.",
              "الاضطراب العصبي الوظيفي: العلاج هو علاج طبيعي متخصص يعيد تدريب الحركة، مع علاج نفسي عند الحاجة. وفهم التشخيص وقبوله علاجيّ بحد ذاته، والنتائج أفضل بكثير حين يُشرح بوضوح ومبكراً بدل أن يأتي بعد سنوات من الفحوصات.",
              "لا تُعالَج النوبات غير الصرعية بمضادات النوبات، وسحب تلك الأدوية غالباً جزء من العلاج.",
              "تعامل بصدق مع تناول الكحول والمواد الترفيهية. فكلاهما يُسوئ المزاج والنوم والنوبات والإدراك، وكلاهما علاج ذاتي شائع للأعراض نفسها.",
              "عالج اضطرابات النوم والألم المزمن كجزء من علاج الصحة النفسية لا بشكل منفصل. فالحلقة تدور في الاتجاهين.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "حماية دماغك على مدى العمر",
            items: [
              "اضبط ضغط الدم والسكري والكوليسترول من منتصف العمر. فصحة الأوعية الدموية أقوى مؤثر قابل للتعديل في الإدراك لاحقاً.",
              "أقلع عن التدخين، وأبقِ الكحول قليلاً.",
              "عالج ضعف السمع — فضعف السمع غير المعالَج من أكبر عوامل الخطر القابلة للتعديل للتدهور الإدراكي.",
              "ابقَ نشطاً بدنياً ومتواصلاً اجتماعياً ومنشغلاً ذهنياً. الثلاثة كلها واقية بشكل مستقل.",
              "احمِ رأسك: أحزمة الأمان والخوذات وتقليل خطر السقوط في المنزل.",
              "عالج الاكتئاب واضطرابات النوم بدل التعايش معها. فلكليهما آثار بعيدة المدى على الإدراك.",
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
            text: "لأثر التمارين في الاكتئاب الخفيف إلى المتوسط حجم يقارن بالدواء والعلاج النفسي، وهي تحسّن القلق والنوم والإدراك في الوقت نفسه. وهي علاج فعلاً لا اقتراح للعافية — لكن بجرعة لا يبلغها معظم الناس أبداً.",
          },
          {
            type: "list",
            items: [
              "تمارين هوائية 30 دقيقة، من ثلاث إلى خمس مرات أسبوعياً، بشدة تسمح بالكلام لا بالغناء. هذه هي الجرعة المستخدمة في التجارب التي أظهرت أثراً مضاداً للاكتئاب.",
              "ابدأ أصغر بكثير مما تظن أنه ينبغي إن كان مزاجك منخفضاً. فعشر دقائق مشي يومياً تُنجَز بانتظام أفضل من خطة لساعة لا تتحقق أبداً.",
              "تمرّن في الهواء الطلق في ضوء الصباح حيثما أمكن — فذلك يجمع أثر التمرين مع التعرّض للضوء الذي يفيد المزاج ودورة النوم واليقظة بشكل مستقل.",
              "لتمارين المقاومة مرتين أسبوعياً أدلتها الخاصة في الاكتئاب والقلق، منفصلة عن التمارين الهوائية.",
              "اليوغا وتاي تشي وتمارين التنفس تقلل القلق وتحسّن النوم، مع فائدة إضافية في تدريب التوازن.",
              "التنفس البطيء — نحو ست أنفاس في الدقيقة مع زفير أطول من الشهيق — لخمس دقائق أداة عملية أثناء القلق الحاد ويمكن استخدامها في أي مكان.",
              "تمرّن مع آخرين حيثما أمكن. فالعنصر الاجتماعي يضيف أثراً قابلاً للقياس يتجاوز الأثر البدني.",
              "في الاضطراب العصبي الوظيفي، الحركة المتدرجة بإشراف أخصائي علاج طبيعي علاج أساسي. مارسها مع معالج ملمّ بالحالة، لأن الأسلوب يختلف عن التأهيل المعتاد.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "العيش بصحة دماغية ونفسية جيدة",
        blocks: [
          {
            type: "paragraph",
            text: "العيش الجيد مع حالة عصبية يتعلق بالمزاج والنوم والعلاقات والمعنى بقدر ما يتعلق بالتشخيص نفسه. فأشخاص بنتائج أشعة متطابقة قد تكون حياتهم مختلفة جداً، ومعظم هذا الفرق يقع في أمور يمكن العمل عليها.",
          },
          {
            type: "list",
            items: [
              "قل شيئاً عن مزاجك في مواعيد طبيب الأعصاب. فمعظم الأطباء لن يسألوا ما لم تفتح الباب، وهو جزء مشروع من الاستشارة.",
              "حافظ على جدول نوم منتظم. فالنوم أقوى رافعة متاحة للمزاج دون وصفة طبية.",
              "ابقَ متواصلاً اجتماعياً. فالعزلة تُسوئ المزاج والإدراك معاً، وتتسلل بهدوء بعد التشخيص.",
              "حافظ على المعنى والروتين — عمل أو تطوّع أو رعاية أو هواية منظمة. فالمعنى يتنبأ بالنتائج بشكل مستقل عن شدة المرض.",
              "قلّل الكحول. فهو مثبط، ويُفتّت النوم، ويخفض عتبة النوبة، ويتفاعل مع معظم أدوية الأعصاب.",
              "ضع توقعات تناسب الحالة لا شخصك السابق، وعدّلها دون اعتبار التعديل هزيمة.",
              "أشرك الأسرة. فهم متأثرون أيضاً، ومقدّمو الرعاية لمرضى الأعصاب لديهم معدلات اكتئاب عالية لا يُنتبه إليها.",
              "اطلب المساعدة أبكر مما تشعر أنه ضروري. فالعلاج النفسي والدواء كلاهما أنجع قبل بلوغ نقطة الأزمة.",
              "إن لم ينجح علاج بعد تجربة عادلة فقُل ذلك. الخيارات كثيرة، والاستمرار صامتاً على شيء غير فعّال شائع ويمكن تجنّبه.",
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
              "هل قد يسهم مزاجي أو قلقي في أعراضي الجسدية، أو العكس؟",
              "هل فُحصت الأسباب الجسدية لانخفاض مزاجي — الغدة الدرقية وB12 وفيتامين D وانقطاع النفس النومي وأدويتي؟",
              "هل يفيدني العلاج النفسي، وهل يمكن إحالتي؟",
              "إن احتجت دواءً، فأيّه يناسب حالتي العصبية وأدويتي الأخرى؟",
              "كم من الوقت قبل أن أتوقع أثراً، وما الآثار الجانبية التي أنتبه لها؟",
              "إن كان لديّ اضطراب عصبي وظيفي، فهل يمكنك شرح كيف وُضع التشخيص وما الذي يتضمنه العلاج؟",
              "ما الذي يمكنني فعله لتقليل خطر التدهور الإدراكي على المدى الطويل؟",
              "بمن أتصل إن ساءت الأمور بسرعة؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
