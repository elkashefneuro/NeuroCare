import type { Condition } from "../schema";

export const memoryProblems = {
  slug: "memory-problems",
  categoryId: "cognition",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 9,
  sources: [
    {
      label: "NICE guideline NG97 — Dementia: assessment, management and support",
      url: "https://www.nice.org.uk/guidance/ng97",
    },
    {
      label: "Alzheimer's Association — diagnosis and treatment information",
      url: "https://www.alz.org",
    },
    {
      label: "World Health Organization — risk reduction of cognitive decline and dementia",
      url: "https://www.who.int/health-topics/dementia",
    },
  ],
  en: {
    title: "Memory problems",
    summary:
      "What ordinary forgetfulness looks like compared with something that needs assessment, the treatable causes worth excluding first, and where the new Alzheimer's medicines fit.",
    category: "Memory and thinking",
    metaTitle: "Memory problems — NeuroCare",
    metaDescription:
      "Patient guide to memory problems: normal ageing versus dementia, reversible causes, MRI and cognitive testing, treatment including new medicines, and exercise.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Memory changes with age in everyone. Retrieving a name takes longer, learning something new takes more repetitions, and divided attention becomes harder. This is normal ageing, and it is not the beginning of dementia. The distinction that matters is not whether you forget, but whether forgetting is interfering with things you used to manage independently.",
          },
          {
            type: "paragraph",
            text: "The other essential point is that memory problems are not a single disease. A meaningful proportion of people who present with memory difficulty have something reversible: depression, poor sleep, an underactive thyroid, B12 deficiency, alcohol, or the cumulative effect of several sedating medications. These are found by looking for them, which is why a proper assessment matters more than a scan.",
          },
          {
            type: "list",
            items: [
              "Normal ageing: slower recall, misplacing objects, forgetting names but recognising people, remembering later.",
              "Mild cognitive impairment: measurable memory change beyond age expectation, but daily life is still managed independently. Some people progress, many stay stable, and some improve.",
              "Dementia: cognitive change severe enough to interfere with independent daily function. Alzheimer's disease is the commonest form; vascular, Lewy body and frontotemporal dementias each look different.",
              "Reversible contributors are common and are often the whole explanation: depression, anxiety, poor sleep, sleep apnoea, thyroid disease, B12 deficiency, alcohol, and sedating medicines.",
              "Depression in older people can mimic dementia closely, and it is treatable.",
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
            text: "The most useful information usually comes from a family member rather than the patient. In normal ageing and in anxiety, the person is worried and the family is not. In dementia, the family is worried and the person often is not. That reversal is one of the more reliable clinical signals there is.",
          },
          {
            type: "list",
            items: [
              "Concerning: repeating the same question within a single conversation, and not recalling having asked.",
              "Concerning: getting lost on a familiar route, or difficulty managing money, bills or medication that was previously routine.",
              "Concerning: struggling with a familiar task like cooking a usual meal or using a long-owned appliance.",
              "Concerning: word-finding difficulty that interrupts sentences, or losing the thread mid-conversation.",
              "Concerning: personality or behaviour change, loss of interest, or uncharacteristic social behaviour — this can precede memory change in frontotemporal dementia.",
              "Concerning in Lewy body dementia: visual hallucinations, marked day-to-day fluctuation, acting out dreams during sleep, and Parkinson-like slowness.",
              "Reassuring: forgetting a name and recalling it later, misplacing keys but retracing steps, needing a list — while running your life independently.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Memory or confusion that needs urgent assessment",
            items: [
              "Sudden confusion developing over hours to days — this is delirium, and it usually means an infection, a medication problem or another acute illness. Seek same-day medical help.",
              "Confusion with fever, headache or neck stiffness — call 998.",
              "Memory loss after a head injury, especially with drowsiness, vomiting or worsening headache.",
              "Confusion with new weakness, speech difficulty or facial droop — treat as stroke and call 998.",
              "Rapid decline over weeks rather than months.",
              "Memory problems in someone under 60, which need specialist assessment rather than watchful waiting.",
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
            text: "Assessment has three parts: establishing what has actually changed and over what time, excluding reversible causes with blood tests, and characterising the pattern with cognitive testing. Imaging supports the diagnosis but rarely makes it. Bring someone who knows you well — their account is part of the assessment, not an intrusion.",
          },
          {
            type: "list",
            items: [
              "A detailed history from both the patient and a family member or close friend, covering what changed, when, and how it affects daily function.",
              "Cognitive testing such as the MoCA or ACE-III — a structured pencil-and-paper assessment of memory, language, attention, visuospatial skill and executive function, taking 20 to 40 minutes.",
              "Blood tests: full blood count, thyroid function, B12 and folate, calcium, glucose and HbA1c, kidney and liver function.",
              "A screen for depression and anxiety, which are common and treatable causes.",
              "A medication review, looking particularly at sedatives, anticholinergics, sleeping tablets and bladder medicines, several of which impair memory.",
              "Screening for sleep apnoea, which causes significant cognitive impairment and is fully treatable.",
              "Brain imaging, usually MRI, to look at the pattern of any shrinkage and to exclude stroke, tumour or hydrocephalus.",
              "In selected cases, and usually in specialist clinics: detailed neuropsychology, amyloid PET imaging, or cerebrospinal fluid testing.",
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
            text: "Nothing in a memory assessment is painful, but the cognitive testing is the part people find most stressful. It is designed so that nobody scores full marks on every section, and being told to keep going after you cannot answer is a normal part of the method rather than a bad sign.",
          },
          {
            type: "list",
            items: [
              "Cognitive testing: 20 to 40 minutes of questions, drawing, word lists and memory tasks, done sitting at a desk. Bring your glasses and hearing aids — uncorrected vision or hearing lowers scores for reasons that have nothing to do with memory.",
              "It is normal to find parts difficult. The tester will ask you to try even when you cannot answer, because how you approach the task is informative.",
              "Do not revise or practise beforehand. It changes the result and makes it less useful to you.",
              "MRI brain: 20 to 40 minutes lying still inside a noisy tunnel, with ear protection and a call buzzer. No radiation, no pain. If staying still or being enclosed is difficult, say so — the department can arrange support or, occasionally, sedation.",
              "Declare any pacemaker, cochlear implant, implanted metal, or previous metal injury to the eye before the appointment.",
              "The MRI report may mention small vessel disease, white matter changes, or age-related shrinkage. These are common findings and their meaning depends entirely on your symptoms — ask your doctor to interpret them for you rather than reading them alone.",
              "CT head: about a minute, uses X-rays, less detailed than MRI but used when MRI is not possible.",
              "EEG is not a routine memory test. It is used when seizures are suspected, or in rare rapidly progressive conditions.",
              "Amyloid PET or lumbar puncture: only relevant where a specific Alzheimer's diagnosis must be confirmed, typically before considering one of the newer antibody treatments.",
              "Results are normally given at a follow-up appointment, with someone with you.",
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
            text: "Treatment starts with everything that is reversible, because that is where the largest gains usually are. After that, medication, brain-health measures and practical support all contribute, and the practical support is often what makes the greatest difference to daily life.",
          },
          {
            type: "list",
            items: [
              "Correct what is treatable: replace B12, treat thyroid disease, treat depression, treat sleep apnoea, reduce alcohol, and review every sedating medication.",
              "Control vascular risk factors — blood pressure, diabetes, cholesterol, atrial fibrillation and smoking. Blood pressure control in midlife is one of the best-evidenced ways to reduce dementia risk, and it also slows vascular cognitive decline once present.",
              "Cholinesterase inhibitors — donepezil, rivastigmine and galantamine — are used in Alzheimer's disease and Lewy body dementia. They do not stop the disease, but they produce a modest, real improvement in symptoms for many people. Nausea, vivid dreams and slow pulse are the common side effects.",
              "Memantine is used in moderate to severe Alzheimer's disease, alone or with a cholinesterase inhibitor.",
              "Anti-amyloid antibody treatments — lecanemab and donanemab — are newer infusion treatments that remove amyloid from the brain and slow decline modestly in early, biomarker-confirmed Alzheimer's disease. They are not a cure, they require confirmed amyloid on PET or spinal fluid testing, genetic APOE testing, and regular MRI monitoring for brain swelling and small bleeds. Availability and funding differ substantially between countries.",
              "In Lewy body dementia, antipsychotic medicines can cause severe reactions and must be used with great caution, if at all.",
              "Non-drug approaches have good evidence: cognitive stimulation therapy, structured routine, exercise, and treating hearing loss with hearing aids.",
              "Support for the family carer is a treatment, not an add-on. Carer stress predicts outcomes for both people.",
              "Practical measures: pill organisers, calendars and whiteboards, labelled cupboards, simplified finances, and advance planning for legal and financial decisions while capacity is good.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Hearing and vision first",
            items: [
              "Untreated hearing loss is one of the largest modifiable risk factors for cognitive decline.",
              "Hearing aids and up-to-date glasses often produce a visible improvement in someone who seemed confused.",
              "Have hearing and vision checked before concluding that memory is the whole problem.",
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
            text: "Physical exercise has the strongest evidence of any lifestyle measure for protecting thinking, and it works partly by improving blood vessel health in the brain and partly through direct effects on brain tissue. It is more effective than brain-training puzzles, which mainly make you better at the puzzle.",
          },
          {
            type: "list",
            items: [
              "Aerobic exercise 30 minutes on at least five days a week — brisk walking is entirely sufficient. Any amount is better than none, and starting at any age helps.",
              "Resistance training twice a week — sit-to-stands, step-ups, resistance bands, or light weights. Muscle strength independently predicts cognitive outcomes in later life.",
              "Balance work, since falls are both a consequence and an accelerator of cognitive decline. Standing on one leg beside a counter, heel-to-toe walking, or tai chi.",
              "Dancing has particularly good evidence, because it combines aerobic exercise, balance, sequence learning and social contact at once.",
              "For someone with established dementia, a daily walk at a regular time helps sleep, mood, agitation and appetite. Keep it routine and familiar.",
              "Exercise outdoors in daylight where possible — light exposure helps the day-night rhythm, which is frequently disrupted.",
              "Combine exercise with social contact where you can. Isolation is an independent risk factor and exercising with others addresses both.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with memory problems",
        blocks: [
          {
            type: "paragraph",
            text: "A memory diagnosis changes plans, not personhood. Many people live well for years, and the practical steps taken early — legal, financial and social — are what protect independence and dignity later.",
          },
          {
            type: "list",
            items: [
              "Deal with legal and financial planning early, while decision-making capacity is clearly intact. This is the single most protective practical step, and it becomes harder later.",
              "Keep a consistent daily routine. Predictability reduces confusion and anxiety far more effectively than reminders.",
              "Use external memory aids without embarrassment: a wall calendar, a whiteboard, phone alarms, a pill organiser, and a single fixed place for keys and wallet.",
              "Stay socially connected. Social withdrawal accelerates decline, and it is easy to slip into after a diagnosis.",
              "Keep alcohol low and sleep regular. Both have direct, measurable effects on memory.",
              "Discuss driving honestly with your doctor. Rules differ by jurisdiction and safety is the priority for everyone on the road.",
              "Carers: accept help early, take breaks deliberately, and ask about carer support services before you reach crisis point.",
              "Ask about local support groups and cognitive stimulation programmes. They help both the person and the family.",
              "Have a plan for what to do during an acute illness — infections cause sudden worsening that usually reverses with treatment.",
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
              "Is this normal ageing, mild cognitive impairment, or dementia?",
              "Have all the reversible causes been checked — thyroid, B12, depression, sleep apnoea, and my medicines?",
              "Which of my current medicines could be affecting my memory?",
              "If this is dementia, which type, and what does that mean for what to expect?",
              "Would a cholinesterase inhibitor or memantine help me?",
              "Am I a candidate for one of the newer anti-amyloid treatments, and what would that involve here?",
              "Should my hearing and vision be tested?",
              "What should we put in place legally and financially, and when?",
              "What support is available for my family?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "مشاكل الذاكرة",
    summary:
      "كيف يبدو النسيان العادي مقارنةً بما يستدعي التقييم، والأسباب القابلة للعلاج التي يجب استبعادها أولاً، وأين تقع أدوية الزهايمر الجديدة.",
    category: "الذاكرة والإدراك",
    metaTitle: "مشاكل الذاكرة — NeuroCare",
    metaDescription:
      "دليل المريض لمشاكل الذاكرة: الشيخوخة الطبيعية مقابل الخرف، الأسباب القابلة للعكس، الرنين والفحص الإدراكي، العلاج بما فيه الأدوية الجديدة، والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "تتغيّر الذاكرة مع العمر عند الجميع. فاستحضار الاسم يستغرق وقتاً أطول، وتعلّم شيء جديد يحتاج تكراراً أكثر، وتوزيع الانتباه يصبح أصعب. هذه شيخوخة طبيعية وليست بداية الخرف. والفرق المهم ليس هل تنسى، بل هل صار النسيان يعيق أموراً كنت تديرها باستقلالية.",
          },
          {
            type: "paragraph",
            text: "والنقطة الجوهرية الأخرى أن مشاكل الذاكرة ليست مرضاً واحداً. فنسبة معتبرة ممن يراجعون بشكوى ضعف الذاكرة لديهم سبب قابل للعكس: اكتئاب أو نوم سيئ أو قصور في الغدة الدرقية أو نقص B12 أو كحول أو الأثر التراكمي لعدة أدوية مهدئة. وهذه تُكتشف بالبحث عنها، ولهذا فالتقييم الصحيح أهم من الأشعة.",
          },
          {
            type: "list",
            items: [
              "الشيخوخة الطبيعية: بطء في الاستحضار، وضياع الأشياء، ونسيان الأسماء مع التعرّف على الأشخاص، والتذكّر لاحقاً.",
              "الضعف الإدراكي المعتدل: تغيّر في الذاكرة يمكن قياسه ويتجاوز المتوقع للعمر، مع إدارة الحياة اليومية باستقلالية. بعض المرضى يتقدّمون، وكثيرون يستقرون، وبعضهم يتحسّن.",
              "الخرف: تغيّر إدراكي شديد بما يكفي ليعيق الوظائف اليومية المستقلة. ومرض الزهايمر أشيع أشكاله؛ أما الخرف الوعائي وخرف أجسام ليوي والخرف الجبهي الصدغي فلكل منها ملامح مختلفة.",
              "العوامل القابلة للعكس شائعة وكثيراً ما تكون التفسير كله: الاكتئاب والقلق وسوء النوم وانقطاع النفس النومي وأمراض الغدة الدرقية ونقص B12 والكحول والأدوية المهدئة.",
              "الاكتئاب لدى كبار السن قد يحاكي الخرف بدقة، وهو قابل للعلاج.",
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
            text: "أنفع المعلومات تأتي عادة من أحد أفراد الأسرة لا من المريض نفسه. ففي الشيخوخة الطبيعية والقلق يكون الشخص قلقاً والأسرة غير قلقة. أما في الخرف فالأسرة قلقة والشخص غالباً غير قلق. هذا الانعكاس من أكثر الإشارات الإكلينيكية موثوقية.",
          },
          {
            type: "list",
            items: [
              "مقلق: تكرار السؤال نفسه ضمن المحادثة الواحدة دون تذكّر أنه سأله.",
              "مقلق: الضياع في طريق مألوف، أو صعوبة في إدارة المال أو الفواتير أو الأدوية بعد أن كانت روتيناً.",
              "مقلق: التعثّر في مهمة مألوفة كطهي وجبة معتادة أو استخدام جهاز يملكه منذ سنوات.",
              "مقلق: صعوبة في إيجاد الكلمات تقطع الجمل، أو فقدان خيط الحديث في منتصفه.",
              "مقلق: تغيّر في الشخصية أو السلوك، أو فقدان الاهتمام، أو سلوك اجتماعي غير معتاد — وقد يسبق هذا تغيّر الذاكرة في الخرف الجبهي الصدغي.",
              "مقلق في خرف أجسام ليوي: هلاوس بصرية وتذبذب واضح من يوم لآخر وتمثيل الأحلام أثناء النوم وبطء شبيه بالشلل الرعاش.",
              "مطمئن: نسيان اسم واستحضاره لاحقاً، وضياع المفاتيح مع تتبّع الخطوات، والحاجة إلى قائمة — مع إدارة حياتك باستقلالية.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "ذاكرة أو تشوّش يحتاج تقييماً عاجلاً",
            items: [
              "تشوّش مفاجئ يتطور خلال ساعات إلى أيام — هذا هذيان، ويعني عادة عدوى أو مشكلة دوائية أو مرضاً حاداً آخر. اطلب مساعدة طبية في اليوم نفسه.",
              "تشوّش مع حمى أو صداع أو تيبّس في الرقبة — اتصل بالرقم 998.",
              "فقدان الذاكرة بعد إصابة في الرأس، خاصة مع نعاس أو قيء أو صداع يتفاقم.",
              "تشوّش مع ضعف جديد أو صعوبة في الكلام أو انحراف في الوجه — تعامل معه كسكتة واتصل بالرقم 998.",
              "تدهور سريع خلال أسابيع لا أشهر.",
              "مشاكل ذاكرة لدى من هم دون الستين، وتحتاج تقييماً متخصصاً لا انتظاراً ومراقبة.",
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
            text: "للتقييم ثلاثة أجزاء: تحديد ما تغيّر فعلاً وعلى أي مدى زمني، واستبعاد الأسباب القابلة للعكس بتحاليل الدم، وتوصيف النمط بالفحص الإدراكي. والأشعة تدعم التشخيص لكنها نادراً ما تصنعه. اصطحب من يعرفك جيداً — فروايته جزء من التقييم لا تطفّل.",
          },
          {
            type: "list",
            items: [
              "قصة مفصّلة من المريض ومن أحد أفراد الأسرة أو صديق مقرّب، تغطي ما تغيّر ومتى وكيف يؤثر على الوظائف اليومية.",
              "فحص إدراكي مثل MoCA أو ACE-III — تقييم منظم بالورقة والقلم للذاكرة واللغة والانتباه والمهارات البصرية المكانية والوظائف التنفيذية، يستغرق من 20 إلى 40 دقيقة.",
              "تحاليل دم: تعداد الدم الكامل ووظائف الغدة الدرقية وB12 وحمض الفوليك والكالسيوم والسكر والسكر التراكمي ووظائف الكلى والكبد.",
              "فحص للاكتئاب والقلق، وهما سببان شائعان وقابلان للعلاج.",
              "مراجعة الأدوية، مع تركيز خاص على المهدئات ومضادات الكولين والأقراص المنومة وأدوية المثانة، وعدد منها يُضعف الذاكرة.",
              "فحص انقطاع النفس النومي، الذي يسبب ضعفاً إدراكياً كبيراً وهو قابل للعلاج تماماً.",
              "أشعة الدماغ، وغالباً الرنين، للنظر في نمط أي ضمور ولاستبعاد سكتة أو ورم أو استسقاء دماغي.",
              "في حالات مختارة وعادة في عيادات متخصصة: تقييم نفسي عصبي مفصّل، أو تصوير الأميلويد بالبوزيترون، أو فحص السائل النخاعي.",
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
            text: "لا شيء في تقييم الذاكرة مؤلم، لكن الفحص الإدراكي هو الجزء الذي يجده الناس أكثر إجهاداً. وهو مصمم بحيث لا يحصل أحد على العلامة الكاملة في كل قسم، وأن يُطلب منك المواصلة بعد عجزك عن الإجابة جزء طبيعي من الطريقة لا علامة سيئة.",
          },
          {
            type: "list",
            items: [
              "الفحص الإدراكي: من 20 إلى 40 دقيقة من الأسئلة والرسم وقوائم الكلمات ومهام الذاكرة، جالساً إلى طاولة. أحضر نظارتك وسماعة الأذن — فضعف البصر أو السمع غير المصحّح يخفض النتيجة لأسباب لا علاقة لها بالذاكرة.",
              "من الطبيعي أن تجد أجزاءً صعبة. وسيطلب منك الفاحص المحاولة حتى حين تعجز عن الإجابة، لأن طريقة تعاملك مع المهمة تحمل معلومات.",
              "لا تراجع أو تتدرّب مسبقاً. فذلك يغيّر النتيجة ويجعلها أقل فائدة لك.",
              "رنين الدماغ: من 20 إلى 40 دقيقة بلا حركة داخل نفق صوته مرتفع، مع واقٍ للأذن وجرس للاستدعاء. بلا إشعاع وبلا ألم. وإن كان الثبات أو الأماكن المغلقة صعباً عليك فقُل ذلك — يمكن للقسم ترتيب دعم أو أحياناً مهدّئ.",
              "صرّح عن أي منظم ضربات أو زراعة قوقعة أو معدن مزروع أو إصابة سابقة بمعدن في العين قبل الموعد.",
              "قد يذكر تقرير الرنين مرض الأوعية الصغيرة أو تغيّرات المادة البيضاء أو ضموراً مرتبطاً بالعمر. هذه نتائج شائعة ومعناها يعتمد كلياً على أعراضك — اطلب من طبيبك تفسيرها لك بدل قراءتها بمفردك.",
              "الأشعة المقطعية للرأس: نحو دقيقة، وتستخدم الأشعة السينية، وتفاصيلها أقل من الرنين لكنها تُستخدم حين يتعذر الرنين.",
              "تخطيط الدماغ الكهربائي ليس فحصاً روتينياً للذاكرة. يُستخدم عند الاشتباه بنوبات صرعية أو في حالات نادرة سريعة التقدّم.",
              "تصوير الأميلويد أو البزل القطني: مهم فقط حين يجب تأكيد تشخيص زهايمر محدد، وعادة قبل النظر في أحد العلاجات الحديثة بالأجسام المضادة.",
              "تُعطى النتائج عادة في موعد متابعة، مع وجود شخص معك.",
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
            text: "يبدأ العلاج بكل ما هو قابل للعكس، لأن هناك تكون المكاسب الأكبر عادة. وبعد ذلك يسهم الدواء وإجراءات صحة الدماغ والدعم العملي، وغالباً ما يكون الدعم العملي هو الأكثر تأثيراً في الحياة اليومية.",
          },
          {
            type: "list",
            items: [
              "صحّح ما هو قابل للعلاج: عوّض B12، وعالج الغدة الدرقية، وعالج الاكتئاب، وعالج انقطاع النفس النومي، وقلّل الكحول، وراجع كل دواء مهدئ.",
              "اضبط عوامل الخطر الوعائية — ضغط الدم والسكري والكوليسترول والرجفان الأذيني والتدخين. وضبط ضغط الدم في منتصف العمر من أقوى الطرق المسندة بالأدلة لتقليل خطر الخرف، ويبطئ أيضاً التدهور الإدراكي الوعائي بعد حدوثه.",
              "مثبطات الكولين إستراز — دونيبيزيل وريفاستيغمين وجالانتامين — تُستخدم في الزهايمر وخرف أجسام ليوي. لا توقف المرض، لكنها تُحدث تحسّناً متواضعاً وحقيقياً في الأعراض لدى كثيرين. والغثيان والأحلام الحيّة وبطء النبض هي الآثار الجانبية الشائعة.",
              "الميمانتين يُستخدم في الزهايمر المتوسط إلى الشديد، وحده أو مع مثبط الكولين إستراز.",
              "علاجات الأجسام المضادة لمضاد الأميلويد — ليكانيماب ودونانيماب — علاجات تسريب أحدث تزيل الأميلويد من الدماغ وتبطئ التدهور بشكل متواضع في الزهايمر المبكر المؤكد بالمؤشرات الحيوية. ليست علاجاً شافياً، وتتطلب تأكيد وجود الأميلويد بتصوير البوزيترون أو السائل النخاعي، وفحصاً جينياً لـ APOE، ومتابعة منتظمة بالرنين لرصد تورّم الدماغ والنزيف الصغير. ويختلف توفّرها وتمويلها كثيراً بين الدول.",
              "في خرف أجسام ليوي، قد تسبب مضادات الذهان تفاعلات شديدة ويجب استخدامها بحذر بالغ إن استُخدمت أصلاً.",
              "للأساليب غير الدوائية أدلة جيدة: العلاج بالتحفيز الإدراكي، والروتين المنظم، والتمارين، وعلاج ضعف السمع بسماعات الأذن.",
              "دعم مقدّم الرعاية من الأسرة علاج وليس إضافة. فإجهاد مقدّم الرعاية يتنبأ بنتائج الطرفين.",
              "إجراءات عملية: منظّمات الأقراص والتقويمات واللوحات البيضاء والخزائن الموسومة وتبسيط الأمور المالية والتخطيط المسبق للقرارات القانونية والمالية بينما الأهلية جيدة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "السمع والبصر أولاً",
            items: [
              "ضعف السمع غير المعالَج من أكبر عوامل الخطر القابلة للتعديل للتدهور الإدراكي.",
              "سماعات الأذن والنظارات المحدّثة كثيراً ما تُحدث تحسّناً ملحوظاً لدى من بدا مشوّشاً.",
              "افحص السمع والبصر قبل استنتاج أن الذاكرة هي المشكلة كلها.",
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
            text: "للتمارين البدنية أقوى دليل بين كل إجراءات نمط الحياة في حماية التفكير، وتعمل جزئياً بتحسين صحة الأوعية الدموية في الدماغ وجزئياً بتأثيرات مباشرة على نسيج الدماغ. وهي أنجع من ألعاب تدريب الدماغ التي تجعلك أساساً أفضل في اللعبة نفسها.",
          },
          {
            type: "list",
            items: [
              "تمارين هوائية 30 دقيقة في خمسة أيام أسبوعياً على الأقل — والمشي السريع كافٍ تماماً. وأي قدر أفضل من لا شيء، والبدء في أي عمر يفيد.",
              "تمارين مقاومة مرتين أسبوعياً — النهوض من الجلوس والصعود على درجة وأشرطة المقاومة أو أوزان خفيفة. فقوة العضلات تتنبأ بشكل مستقل بالنتائج الإدراكية في المراحل المتأخرة من العمر.",
              "تمارين التوازن، لأن السقوط نتيجة للتدهور الإدراكي ومُسرّع له في آن. الوقوف على ساق واحدة بجوار سطح، والمشي كعباً أمام إصبع، أو تاي تشي.",
              "للرقص أدلة جيدة بشكل خاص، لأنه يجمع التمارين الهوائية والتوازن وتعلّم التسلسلات والتواصل الاجتماعي معاً.",
              "لمن لديه خرف مستقر، المشي اليومي في وقت ثابت يحسّن النوم والمزاج والهياج والشهية. أبقِه روتينياً ومألوفاً.",
              "تمرّن في الهواء الطلق وفي ضوء النهار حين يمكن — فالتعرّض للضوء يساعد إيقاع الليل والنهار الذي كثيراً ما يضطرب.",
              "اجمع بين التمارين والتواصل الاجتماعي حيثما أمكن. فالعزلة عامل خطر مستقل، والتمرّن مع الآخرين يعالج الأمرين.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع مشاكل الذاكرة",
        blocks: [
          {
            type: "paragraph",
            text: "تشخيص الذاكرة يغيّر الخطط لا الإنسان. كثيرون يعيشون جيداً لسنوات، والخطوات العملية المتخذة مبكراً — القانونية والمالية والاجتماعية — هي ما يحمي الاستقلالية والكرامة لاحقاً.",
          },
          {
            type: "list",
            items: [
              "أنجز التخطيط القانوني والمالي مبكراً بينما أهلية اتخاذ القرار سليمة بوضوح. هذه أكثر خطوة عملية حماية، وتصبح أصعب لاحقاً.",
              "حافظ على روتين يومي ثابت. فالقابلية للتوقع تقلل التشوّش والقلق أكثر بكثير من التذكيرات.",
              "استخدم وسائل الذاكرة الخارجية دون حرج: تقويم على الجدار ولوح أبيض ومنبهات الهاتف ومنظّم أقراص ومكان ثابت واحد للمفاتيح والمحفظة.",
              "ابقَ متواصلاً اجتماعياً. فالانسحاب الاجتماعي يسرّع التدهور، ومن السهل الانزلاق إليه بعد التشخيص.",
              "أبقِ الكحول قليلاً والنوم منتظماً. لكليهما أثر مباشر وقابل للقياس على الذاكرة.",
              "ناقش القيادة بصراحة مع طبيبك. القواعد تختلف بين الدول والسلامة هي الأولوية لكل من على الطريق.",
              "لمقدّمي الرعاية: اقبل المساعدة مبكراً، وخذ استراحات بقصد، واسأل عن خدمات دعم مقدّمي الرعاية قبل بلوغ نقطة الأزمة.",
              "اسأل عن مجموعات الدعم المحلية وبرامج التحفيز الإدراكي. فهي تفيد المريض والأسرة معاً.",
              "ليكن لديك خطة لما تفعله أثناء مرض حاد — فالعدوى تسبب تدهوراً مفاجئاً يزول عادة مع العلاج.",
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
              "هل هذه شيخوخة طبيعية أم ضعف إدراكي معتدل أم خرف؟",
              "هل فُحصت كل الأسباب القابلة للعكس — الغدة الدرقية وB12 والاكتئاب وانقطاع النفس النومي وأدويتي؟",
              "أي من أدويتي الحالية قد يؤثر على ذاكرتي؟",
              "إن كان هذا خرفاً، فأي نوع، وماذا يعني ذلك لما ينبغي توقعه؟",
              "هل يفيدني مثبط الكولين إستراز أو الميمانتين؟",
              "هل أنا مرشّح لأحد العلاجات الحديثة المضادة للأميلويد، وما الذي يتطلبه ذلك هنا؟",
              "هل ينبغي فحص سمعي وبصري؟",
              "ما الذي ينبغي ترتيبه قانونياً ومالياً، ومتى؟",
              "ما الدعم المتاح لأسرتي؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
