import type { Condition } from "../schema";

export const multipleSclerosis = {
  slug: "multiple-sclerosis",
  categoryId: "demyelinating",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 10,
  sources: [
    {
      label: "NICE guideline NG220 — Multiple sclerosis in adults: management",
      url: "https://www.nice.org.uk/guidance/ng220",
    },
    {
      label: "National Multiple Sclerosis Society — treatment and research information",
      url: "https://www.nationalmssociety.org",
    },
    {
      label: "MS International Federation — Atlas of MS and global resources",
      url: "https://www.msif.org",
    },
  ],
  en: {
    title: "Multiple sclerosis",
    summary:
      "What MS is, how it is diagnosed with MRI and lumbar puncture, and how disease-modifying treatment has changed the outlook for people diagnosed today.",
    category: "Multiple sclerosis",
    metaTitle: "Multiple sclerosis — NeuroCare",
    metaDescription:
      "Patient guide to multiple sclerosis: first symptoms, MRI and lumbar puncture, relapse treatment, disease-modifying therapies, exercise and daily life.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you is a decision for your own neurologist. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Multiple sclerosis is a condition in which the immune system attacks myelin, the insulating sheath around nerve fibres in the brain, spinal cord and optic nerves. Where myelin is damaged, signals slow or fail, and the symptom depends entirely on which pathway is affected — vision from the optic nerve, numbness from a sensory tract, weakness from a motor tract.",
          },
          {
            type: "paragraph",
            text: "The single most important thing to know at diagnosis is that MS today is not the MS of thirty years ago. There are now more than a dozen licensed disease-modifying treatments, several of them highly effective, and the evidence increasingly favours starting effective treatment early rather than waiting for damage to accumulate. Most people diagnosed now will not end up using a wheelchair.",
          },
          {
            type: "list",
            items: [
              "Relapsing-remitting MS is the commonest pattern at diagnosis: attacks lasting days to weeks, followed by partial or complete recovery.",
              "Secondary progressive MS is a later phase in some people, where disability accumulates gradually rather than in attacks.",
              "Primary progressive MS, about one in ten, progresses gradually from the start without distinct relapses.",
              "It is most often diagnosed between 20 and 40, and is two to three times more common in women.",
              "MS is not inherited in a simple way. Having a parent with MS raises a child's risk modestly, but most children of people with MS never develop it.",
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
            text: "A relapse develops over hours to days, plateaus, and then slowly improves over weeks. Symptoms lasting only seconds or minutes, or changing from hour to hour, are usually not a relapse. A true relapse lasts at least 24 hours in the absence of infection or fever.",
          },
          {
            type: "list",
            items: [
              "Optic neuritis: blurring or loss of vision in one eye over days, with pain on moving the eye and washed-out colours, especially red.",
              "Numbness, pins and needles, or a tight band-like sensation around the trunk or a limb.",
              "Weakness or heaviness of one leg, or a foot that catches when walking.",
              "Double vision, or vertigo lasting days.",
              "Bladder urgency or hesitancy, and bowel changes.",
              "Fatigue that is out of proportion to activity — the most common and most underestimated symptom of all.",
              "An electric-shock sensation running down the spine when the neck is bent forward.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Old symptoms returning is usually not a new relapse",
            items: [
              "Heat, fever, infection, dehydration and exhaustion can all temporarily unmask previous symptoms. This is called a pseudo-relapse.",
              "It settles as the temperature or infection settles, and it does not mean new damage.",
              "A urine infection is the most common trigger. Ask about testing for one before assuming a relapse.",
              "New symptoms lasting more than 24 hours without fever or infection do need to be reported to your MS team.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Seek urgent help for these",
            items: [
              "Sudden inability to pass urine, or loss of bladder or bowel control.",
              "Rapidly worsening weakness in both legs over hours.",
              "Numbness around the groin, buttocks or inner thighs.",
              "Any sudden facial droop, slurred speech or one-sided weakness — treat as a possible stroke and call 998.",
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
            text: "MS is diagnosed by showing damage in more than one part of the central nervous system, occurring at more than one point in time, with no better explanation. No single test proves it — the diagnosis is assembled from the history, examination, MRI and usually a lumbar puncture.",
          },
          {
            type: "list",
            items: [
              "MRI of the brain and spinal cord, with and without contrast. This is the central investigation.",
              "Lumbar puncture, looking for oligoclonal bands — proteins that indicate immune activity confined to the nervous system.",
              "Blood tests, mainly to exclude conditions that mimic MS, including B12 deficiency, thyroid disease, lupus, and antibody-mediated conditions such as NMOSD and MOG antibody disease.",
              "Visual evoked potentials, which measure how fast signals travel along the optic nerve, if optic nerve damage is suspected but not visible.",
              "Ophthalmology assessment, sometimes with OCT scanning of the retina.",
              "Distinguishing MS from NMOSD and MOG antibody disease genuinely matters — some MS treatments make those conditions worse.",
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
            text: "The two tests that worry people most — MRI and lumbar puncture — are both routine and safe. Knowing what actually happens takes most of the fear out of them.",
          },
          {
            type: "list",
            items: [
              "MRI brain and spine: expect 45 to 75 minutes, longer than a standard head scan because the spinal cord is included. You lie still inside a noisy tunnel with ear protection and a call buzzer. There is no radiation and no pain, but staying still matters — movement blurs the images and may mean repeating a sequence.",
              "Gadolinium contrast is given part-way through, via a cannula in the arm. It highlights areas of active inflammation, which helps date the damage. A brief cool feeling in the arm is normal.",
              "Tell the team about a pacemaker, cochlear implant, metal fragments, previous metalwork, pregnancy, kidney problems or claustrophobia before the appointment, not on the day.",
              "Lumbar puncture: you curl on your side or lean over a table. Local anaesthetic stings for a few seconds, then a fine needle is passed between the bones of the lower back, well below where the spinal cord ends. Most people feel pressure rather than pain. It takes about 20 minutes.",
              "Afterwards, about one person in ten gets a headache that is worse sitting or standing and better lying flat. It usually settles in a few days with fluids, rest and simple painkillers. Tell your team if it is severe or persists — it is treatable.",
              "Evoked potentials: small electrodes on the scalp while you watch a flickering checkerboard pattern. Painless, about 45 minutes, no needles.",
              "Results are usually discussed at a follow-up appointment rather than by phone, because the picture needs explaining as a whole.",
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
            text: "MS treatment has three separate strands: treating a relapse when it happens, reducing future relapses and disability with a disease-modifying therapy, and managing symptoms that persist. These are decided separately, and doing well on one does not remove the need for the others.",
          },
          {
            type: "paragraph",
            text: "Relapses that meaningfully affect function are usually treated with a short course of high-dose steroids, by mouth or by drip. Steroids speed recovery from a relapse but do not change the long-term course, so they are used for disabling relapses rather than every symptom.",
          },
          {
            type: "list",
            items: [
              "Injectable therapies: interferon beta and glatiramer acetate. The longest safety record, well suited to milder disease and to pregnancy planning.",
              "Oral therapies: teriflunomide, dimethyl fumarate and diroximel fumarate, and the S1P modulators fingolimod, siponimod, ozanimod and ponesimod. Cladribine tablets are given as short courses over two years.",
              "High-efficacy antibody therapies: ocrelizumab and ublituximab by infusion, ofatumumab as a monthly self-injection, natalizumab by infusion, and alemtuzumab as pulsed courses.",
              "Ocrelizumab is also licensed for primary progressive MS, and siponimod for secondary progressive MS with continuing activity.",
              "Every one of these needs monitoring — typically blood counts, liver function and infection screening, with interval MRI scans. Natalizumab requires JC virus antibody testing because of a rare brain infection risk.",
              "Vaccinations, including live vaccines, should be planned before starting most of these treatments. Raise this early.",
            ],
          },
          {
            type: "paragraph",
            text: "Symptom treatment is where day-to-day quality of life is usually won, and it is often under-used.",
          },
          {
            type: "list",
            items: [
              "Spasticity and stiffness: baclofen, tizanidine, and physiotherapy. Nabiximols spray is available in some countries for resistant spasticity.",
              "Fatigue: pacing and graded exercise first; amantadine or modafinil are sometimes tried. Always check for anaemia, thyroid problems, depression and sleep apnoea first.",
              "Walking difficulty: fampridine helps a minority meaningfully, and is stopped if there is no benefit after a short trial.",
              "Bladder symptoms: assessment first, then anticholinergics, mirabegron, or intermittent self-catheterisation. Untreated bladder problems drive infections and falls.",
              "Nerve pain: gabapentin, pregabalin, duloxetine or amitriptyline.",
              "Low mood and anxiety are common, treatable, and worth raising without waiting to be asked.",
              "Vitamin D is commonly low, particularly with limited sun exposure, and is usually checked and replaced.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Pregnancy and family planning",
            items: [
              "MS does not prevent pregnancy, and relapse rates usually fall during pregnancy.",
              "Some disease-modifying treatments must be stopped or changed well before conceiving, and a few require a washout period.",
              "Discuss family plans at diagnosis, not when you are already trying — it genuinely influences which treatment is chosen.",
              "This applies to men as well; a few treatments have specific advice for fathers.",
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
            text: "Exercise was once discouraged in MS. That advice was wrong. Regular exercise improves strength, walking, fatigue, mood and quality of life, and does not accelerate the disease. The one real caution is heat: a rise in core temperature can temporarily worsen symptoms, which is uncomfortable but not harmful.",
          },
          {
            type: "list",
            items: [
              "Aerobic work: 20 to 30 minutes, two to three times a week — walking, static cycling, or swimming. Swimming is ideal because the water keeps you cool.",
              "Resistance training twice a week for the hips, thighs and trunk. Leg strength is the single biggest determinant of safe walking.",
              "Balance training: standing with feet together, then heel-to-toe, holding a support. Progress only with supervision if balance is affected.",
              "Stretching daily for calves, hamstrings and hip flexors if you have spasticity — this is what keeps stiffness from becoming permanent shortening.",
              "Pelvic floor exercises help many people with bladder urgency and are usually overlooked.",
              "Manage heat deliberately: exercise in air conditioning or early morning, use a cool towel, drink cold fluids, and stop if vision blurs or weakness increases. It reverses on cooling.",
              "Pace rather than push. In MS, exercising to exhaustion costs the next two days and gains nothing.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with MS",
        blocks: [
          {
            type: "paragraph",
            text: "Most people with MS work, drive, travel and raise families. The practical priorities are staying on treatment, catching infections early, and getting help with fatigue and mood rather than enduring them.",
          },
          {
            type: "list",
            items: [
              "Do not stop a disease-modifying treatment because you feel well. Feeling well while on it is the treatment working.",
              "Treat urine infections promptly — they are the commonest cause of a sudden apparent worsening.",
              "Stop smoking. Smoking measurably accelerates MS progression, and stopping is one of the few things you control that changes the course.",
              "Plan around heat: the Gulf summer is a real factor. Air conditioning, cooling scarves and timing outdoor activity for early morning all help.",
              "Fatigue management means planning the day around your best hours, not pushing through. Ask for an occupational therapy referral.",
              "Tell your employer what you need. Flexible hours and a cool workspace are usually far more useful than time off.",
              "Keep vaccinations up to date and discuss timing with your MS team before starting or switching treatment.",
              "Driving rules vary by emirate and country; ask your neurologist about your own situation if vision or coordination is affected.",
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
              "What type of MS do I have, and how active is it on my scans?",
              "Do you recommend starting with a highly effective treatment, or a gentler one first, and why for me?",
              "What monitoring will I need, how often, and what are the specific risks of the treatment you are suggesting?",
              "How will we know if the treatment is working, and when would we change it?",
              "What counts as a relapse for me, and who do I call?",
              "How does this affect pregnancy, contraception, or fathering a child?",
              "Which vaccinations should I have before starting, and when?",
              "Can I be referred to physiotherapy and to an MS nurse?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "التصلب المتعدد",
    summary:
      "ما هو التصلب المتعدد، وكيف يُشخّص بالرنين المغناطيسي والبزل القطني، وكيف غيّرت الأدوية المعدِّلة للمرض مآل من يُشخّصون اليوم.",
    category: "التصلب المتعدد",
    metaTitle: "التصلب المتعدد — NeuroCare",
    metaDescription:
      "دليل المريض للتصلب المتعدد: الأعراض الأولى، الرنين المغناطيسي والبزل القطني، علاج الانتكاسة، الأدوية المعدِّلة للمرض، التمارين والحياة اليومية.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء فقرار طبيب الأعصاب الخاص بك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "التصلب المتعدد حالة يهاجم فيها الجهاز المناعي المايلين، وهو الغلاف العازل حول ألياف الأعصاب في الدماغ والحبل الشوكي والأعصاب البصرية. وحيث يتضرر المايلين تتباطأ الإشارات أو تنقطع، ويعتمد العَرَض كلياً على المسار المصاب — البصر من العصب البصري، والتنميل من مسار حسي، والضعف من مسار حركي.",
          },
          {
            type: "paragraph",
            text: "وأهم ما ينبغي معرفته عند التشخيص أن التصلب المتعدد اليوم ليس تصلب ثلاثين عاماً مضت. هناك الآن أكثر من اثني عشر دواءً مرخّصاً معدِّلاً للمرض، عدد منها عالي الفعالية، وتميل الأدلة أكثر فأكثر إلى بدء علاج فعّال مبكراً بدل انتظار تراكم الضرر. ومعظم من يُشخّصون اليوم لن ينتهي بهم الأمر إلى كرسي متحرك.",
          },
          {
            type: "list",
            items: [
              "النمط الانتكاسي الهاجع هو الأشيع عند التشخيص: نوبات تستمر أياماً إلى أسابيع يتبعها تعافٍ جزئي أو كامل.",
              "النمط التقدمي الثانوي مرحلة لاحقة لدى بعض المرضى، تتراكم فيها الإعاقة تدريجياً لا على شكل نوبات.",
              "النمط التقدمي الأولي، نحو واحد من كل عشرة، يتقدّم تدريجياً منذ البداية دون انتكاسات واضحة.",
              "يُشخّص غالباً بين سن 20 و40، وهو أشيع لدى النساء بمرتين إلى ثلاث مرات.",
              "لا يُورَّث بطريقة بسيطة. وجود والد مصاب يرفع خطر الطفل قليلاً، لكن معظم أبناء المصابين لا يصابون به أبداً.",
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
            text: "تتطور الانتكاسة خلال ساعات إلى أيام، ثم تستقر، ثم تتحسّن ببطء خلال أسابيع. أما الأعراض التي تستمر ثوانٍ أو دقائق فقط، أو تتغيّر من ساعة إلى أخرى، فليست انتكاسة عادة. الانتكاسة الحقيقية تستمر 24 ساعة على الأقل في غياب عدوى أو حمى.",
          },
          {
            type: "list",
            items: [
              "التهاب العصب البصري: تشوّش أو فقدان للرؤية في عين واحدة خلال أيام، مع ألم عند تحريك العين وبهتان الألوان وخاصة الأحمر.",
              "تنميل أو وخز أو إحساس بشريط ضاغط حول الجذع أو أحد الأطراف.",
              "ضعف أو ثقل في إحدى الساقين، أو قدم تتعثر أثناء المشي.",
              "ازدواج الرؤية، أو دوار يستمر أياماً.",
              "إلحاح أو تردد في التبول، وتغيّرات في الأمعاء.",
              "إرهاق لا يتناسب مع النشاط — وهو أشيع الأعراض جميعاً وأكثرها استهانة به.",
              "إحساس يشبه الصدمة الكهربائية ينزل على طول العمود الفقري عند ثني الرقبة للأمام.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "عودة أعراض قديمة ليست انتكاسة جديدة عادة",
            items: [
              "الحرارة والحمى والعدوى والجفاف والإرهاق كلها قد تُظهر أعراضاً سابقة مؤقتاً. يُسمى هذا انتكاسة كاذبة.",
              "تزول مع زوال الحرارة أو العدوى، ولا تعني ضرراً جديداً.",
              "التهاب البول أشيع محفّز. اسأل عن فحص البول قبل افتراض وجود انتكاسة.",
              "أما الأعراض الجديدة التي تستمر أكثر من 24 ساعة دون حمى أو عدوى فيجب إبلاغ فريق التصلب المتعدد بها.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "اطلب المساعدة العاجلة في هذه الحالات",
            items: [
              "عجز مفاجئ عن التبول، أو فقدان التحكم في المثانة أو الأمعاء.",
              "ضعف يتفاقم بسرعة في الساقين خلال ساعات.",
              "تنميل حول العانة أو الأرداف أو باطن الفخذين.",
              "أي انحراف مفاجئ في الوجه أو تلعثم أو ضعف في جانب واحد — تعامل معه كسكتة محتملة واتصل بالرقم 998.",
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
            text: "يُشخّص التصلب المتعدد بإثبات ضرر في أكثر من موضع في الجهاز العصبي المركزي، حدث في أكثر من وقت، دون تفسير أفضل. لا يوجد فحص واحد يُثبته — بل يُبنى التشخيص من القصة والفحص والرنين المغناطيسي وغالباً البزل القطني.",
          },
          {
            type: "list",
            items: [
              "رنين مغناطيسي للدماغ والحبل الشوكي، مع الصبغة وبدونها. وهو الفحص المحوري.",
              "بزل قطني للبحث عن الحزم القليلة النسيلة — بروتينات تدل على نشاط مناعي محصور في الجهاز العصبي.",
              "تحاليل دم، أساساً لاستبعاد حالات تشبه التصلب المتعدد، منها نقص فيتامين B12 وأمراض الغدة الدرقية والذئبة وحالات الأجسام المضادة مثل NMOSD ومرض الأجسام المضادة لـ MOG.",
              "الجهود المُثارة البصرية، التي تقيس سرعة انتقال الإشارة في العصب البصري، إذا اشتُبه بضرر غير ظاهر.",
              "تقييم من طبيب العيون، وأحياناً تصوير الشبكية بالتصوير المقطعي البصري.",
              "التفريق بين التصلب المتعدد و NMOSD ومرض MOG مهم فعلاً — فبعض أدوية التصلب المتعدد تزيد تلك الحالات سوءاً.",
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
            text: "الفحصان اللذان يقلقان الناس أكثر — الرنين المغناطيسي والبزل القطني — كلاهما روتيني وآمن. ومعرفة ما يحدث فعلاً تزيل معظم الخوف منهما.",
          },
          {
            type: "list",
            items: [
              "رنين الدماغ والعمود الفقري: توقّع من 45 إلى 75 دقيقة، أطول من رنين الرأس وحده لأن الحبل الشوكي مشمول. تستلقي بلا حركة داخل نفق صوته مرتفع مع واقٍ للأذن وجرس للاستدعاء. بلا إشعاع وبلا ألم، لكن الثبات مهم — فالحركة تُشوّش الصور وقد تعني إعادة جزء من الفحص.",
              "تُعطى صبغة الجادولينيوم في منتصف الفحص عبر قنية في الذراع. تُبرز مناطق الالتهاب النشط مما يساعد على تحديد زمن الضرر. والإحساس بالبرودة في الذراع لثوانٍ طبيعي.",
              "أخبر الفريق عن منظم ضربات القلب أو زراعة القوقعة أو شظايا معدنية أو معادن مزروعة سابقاً أو الحمل أو مشاكل الكلى أو رهاب الأماكن المغلقة قبل الموعد لا في يومه.",
              "البزل القطني: تتكوّر على جانبك أو تنحني فوق طاولة. يلسع المخدر الموضعي ثوانٍ، ثم تمرّ إبرة رفيعة بين فقرات أسفل الظهر، أسفل بكثير من نهاية الحبل الشوكي. يشعر معظم الناس بضغط لا بألم. يستغرق نحو 20 دقيقة.",
              "بعده يصاب نحو واحد من كل عشرة بصداع يسوء عند الجلوس أو الوقوف ويتحسّن بالاستلقاء. يزول عادة خلال أيام مع السوائل والراحة والمسكنات البسيطة. أخبر فريقك إن كان شديداً أو استمر — فهو قابل للعلاج.",
              "الجهود المُثارة: أقطاب صغيرة على فروة الرأس بينما تنظر إلى نمط رقعة شطرنج وامضة. غير مؤلم، نحو 45 دقيقة، وبلا إبر.",
              "تُناقش النتائج عادة في موعد متابعة لا عبر الهاتف، لأن الصورة تحتاج شرحاً متكاملاً.",
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
            text: "لعلاج التصلب المتعدد ثلاثة مسارات منفصلة: علاج الانتكاسة عند حدوثها، وتقليل الانتكاسات والإعاقة المستقبلية بدواء معدِّل للمرض، وإدارة الأعراض المستمرة. تُقرَّر هذه بشكل منفصل، والنجاح في أحدها لا يُغني عن الآخرين.",
          },
          {
            type: "paragraph",
            text: "تُعالَج الانتكاسات التي تؤثر فعلياً على الوظيفة عادة بجرعات عالية من الكورتيزون لفترة قصيرة، فموياً أو بالوريد. الكورتيزون يسرّع التعافي من الانتكاسة لكنه لا يغيّر المسار بعيد المدى، لذا يُستخدم للانتكاسات المعطِّلة لا لكل عَرَض.",
          },
          {
            type: "list",
            items: [
              "العلاجات الحقنية: إنترفيرون بيتا وأسيتات الجلاتيرامر. أطول سجل أمان، وتناسب المرض الأخف والتخطيط للحمل.",
              "العلاجات الفموية: تيريفلونوميد، وفيومارات ثنائي الميثيل وديروكسيميل، ومعدِّلات S1P وهي فينجوليمود وسيبونيمود وأوزانيمود وبونيسيمود. وأقراص الكلادريبين تُعطى كدورات قصيرة على مدى سنتين.",
              "العلاجات عالية الفعالية بالأجسام المضادة: أوكريليزوماب وأوبليتوكسيماب بالتسريب الوريدي، وأوفاتوموماب كحقنة ذاتية شهرية، وناتاليزوماب بالتسريب، وأليمتوزوماب كدورات متباعدة.",
              "أوكريليزوماب مرخّص أيضاً للنمط التقدمي الأولي، وسيبونيمود للنمط التقدمي الثانوي مع نشاط مستمر.",
              "كل هذه تحتاج متابعة — عادة تعداد الدم ووظائف الكبد وفحص العدوى، مع رنين دوري. ويتطلب ناتاليزوماب فحص الأجسام المضادة لفيروس JC بسبب خطر نادر لعدوى دماغية.",
              "ينبغي التخطيط للتطعيمات، بما فيها اللقاحات الحية، قبل بدء معظم هذه العلاجات. اطرح هذا مبكراً.",
            ],
          },
          {
            type: "paragraph",
            text: "علاج الأعراض هو الميدان الذي تُكسب فيه جودة الحياة اليومية عادة، وكثيراً ما يُستخدم أقل مما ينبغي.",
          },
          {
            type: "list",
            items: [
              "التشنج والتيبّس: باكلوفين وتيزانيدين والعلاج الطبيعي. وبخاخ النابيكسيمولس متاح في بعض الدول للتشنج المقاوم.",
              "الإرهاق: تنظيم الجهد والتمارين المتدرجة أولاً؛ ويُجرَّب أحياناً أمانتادين أو مودافينيل. تحقّق دائماً أولاً من فقر الدم واضطراب الغدة الدرقية والاكتئاب وانقطاع النفس النومي.",
              "صعوبة المشي: فامبريدين يفيد أقلية بشكل ملموس، ويُوقف إن لم تظهر فائدة بعد تجربة قصيرة.",
              "أعراض المثانة: التقييم أولاً، ثم مضادات الكولين أو ميرابيجرون أو القسطرة الذاتية المتقطعة. مشاكل المثانة المهملة تسبب العدوى والسقوط.",
              "ألم الأعصاب: جابابنتين أو بريجابالين أو دولوكسيتين أو أميتريبتيلين.",
              "انخفاض المزاج والقلق شائعان وقابلان للعلاج ويستحقان الطرح دون انتظار السؤال.",
              "فيتامين D منخفض كثيراً، خاصة مع قلّة التعرض للشمس، ويُفحص ويُعوَّض عادة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "الحمل وتنظيم الأسرة",
            items: [
              "التصلب المتعدد لا يمنع الحمل، ومعدلات الانتكاس تنخفض عادة أثناء الحمل.",
              "بعض الأدوية المعدِّلة للمرض يجب إيقافها أو تغييرها قبل الحمل بوقت كافٍ، وبعضها يحتاج فترة تخلّص من الدواء.",
              "ناقش خطط الأسرة عند التشخيص لا حين تبدأ المحاولة فعلاً — فهي تؤثر حقاً في اختيار العلاج.",
              "ينطبق هذا على الرجال أيضاً؛ لبعض الأدوية إرشادات خاصة بالآباء.",
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
            text: "كان يُنصح سابقاً بتجنّب الرياضة في التصلب المتعدد. تلك النصيحة كانت خاطئة. التمارين المنتظمة تحسّن القوة والمشي والإرهاق والمزاج وجودة الحياة، ولا تسرّع المرض. والتحفّظ الحقيقي الوحيد هو الحرارة: ارتفاع حرارة الجسم قد يزيد الأعراض مؤقتاً، وهو أمر مزعج لكنه غير ضار.",
          },
          {
            type: "list",
            items: [
              "تمارين هوائية: من 20 إلى 30 دقيقة، مرتين إلى ثلاث أسبوعياً — مشي أو دراجة ثابتة أو سباحة. والسباحة مثالية لأن الماء يبقيك بارداً.",
              "تمارين مقاومة مرتين أسبوعياً للوركين والفخذين والجذع. قوة الساقين أهم عامل منفرد في أمان المشي.",
              "تمارين توازن: الوقوف والقدمان متلاصقتان، ثم كعب أمام إصبع، مع الإمساك بمسند. لا تتقدّم إلا تحت إشراف إن كان التوازن متأثراً.",
              "إطالة يومية لعضلات الساق الخلفية وأوتار الركبة وثنيات الورك إن كان لديك تشنج — هذا ما يمنع تحوّل التيبّس إلى تقصير دائم.",
              "تمارين قاع الحوض تفيد كثيرين ممن لديهم إلحاح بولي، وكثيراً ما تُهمَل.",
              "أدر الحرارة بقصد: تمرّن في تكييف أو في الصباح الباكر، واستخدم منشفة باردة، واشرب سوائل باردة، وتوقف إن تشوّش البصر أو زاد الضعف. الأمر يزول مع التبريد.",
              "نظّم جهدك ولا تُرهق نفسك. في التصلب المتعدد، التمرين حتى الإنهاك يكلّفك اليومين التاليين ولا يكسبك شيئاً.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع التصلب المتعدد",
        blocks: [
          {
            type: "paragraph",
            text: "معظم المصابين بالتصلب المتعدد يعملون ويقودون ويسافرون ويكوّنون أسراً. والأولويات العملية هي الاستمرار على العلاج، واكتشاف العدوى مبكراً، وطلب المساعدة في الإرهاق والمزاج بدل تحمّلهما.",
          },
          {
            type: "list",
            items: [
              "لا توقف الدواء المعدِّل للمرض لأنك تشعر أنك بخير. شعورك بالتحسّن وأنت عليه هو نجاح العلاج.",
              "عالج التهابات البول فوراً — فهي أشيع سبب لتدهور مفاجئ ظاهري.",
              "أقلع عن التدخين. التدخين يسرّع تقدّم المرض بشكل ملموس، والإقلاع من الأمور القليلة التي تتحكم بها وتغيّر المسار.",
              "خطّط حول الحرارة: صيف الخليج عامل حقيقي. التكييف وأوشحة التبريد وتوقيت النشاط الخارجي في الصباح الباكر كلها تساعد.",
              "إدارة الإرهاق تعني تنظيم اليوم حول أفضل ساعاتك لا تجاوز الحدود. اطلب إحالة إلى العلاج الوظيفي.",
              "أخبر جهة عملك بما تحتاجه. ساعات مرنة ومكان عمل بارد أنفع عادة بكثير من إجازة.",
              "أبقِ تطعيماتك محدّثة وناقش توقيتها مع فريقك قبل بدء العلاج أو تغييره.",
              "قواعد القيادة تختلف بين الإمارات والدول؛ اسأل طبيب الأعصاب عن وضعك إن تأثر البصر أو التناسق الحركي.",
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
              "ما نوع التصلب المتعدد لدي، وما مدى نشاطه في صوري؟",
              "هل توصي بالبدء بعلاج عالي الفعالية أم بعلاج أخف أولاً، ولماذا في حالتي؟",
              "ما المتابعة التي سأحتاجها وكم مرة، وما المخاطر المحددة للعلاج الذي تقترحه؟",
              "كيف سنعرف أن العلاج ينجح، ومتى نغيّره؟",
              "ما الذي يُعتبر انتكاسة في حالتي، وبمن أتصل؟",
              "كيف يؤثر هذا على الحمل أو منع الحمل أو الإنجاب؟",
              "ما التطعيمات التي ينبغي أن آخذها قبل البدء، ومتى؟",
              "هل يمكن إحالتي إلى العلاج الطبيعي وإلى ممرض متخصص في التصلب المتعدد؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
