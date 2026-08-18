import type { Condition } from "../schema";

export const tensionAndDailyHeadache = {
  slug: "tension-and-daily-headache",
  categoryId: "headache",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 7,
  sources: [
    {
      label: "NICE clinical guideline CG150 — Headaches in over 12s: diagnosis and management",
      url: "https://www.nice.org.uk/guidance/cg150",
    },
    {
      label: "International Headache Society — ICHD-3 classification",
      url: "https://ichd-3.org",
    },
  ],
  en: {
    title: "Headache and daily headache",
    summary:
      "Tension-type headache, headache that has become daily, and the medication-overuse trap — how to tell them apart and how each is actually treated.",
    category: "Headache",
    metaTitle: "Headache and daily headache — NeuroCare",
    metaDescription:
      "Patient guide to tension-type and chronic daily headache: presentation, red flags, when scans help, medication overuse, treatment and neck exercises.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Most headache that is not migraine is tension-type headache: a pressing, band-like ache across both sides of the head, without the nausea and light sensitivity that mark a migraine. It is the most common headache in the world, and for most people it is occasional and unremarkable.",
          },
          {
            type: "paragraph",
            text: "The problem worth understanding is what happens when headache becomes frequent. A pain system that fires often becomes easier to fire — the nerves that carry head and neck pain lower their threshold. Poor sleep, low mood, neck strain and, very commonly, regular painkiller use all push in the same direction. This is why daily headache is rarely explained by one cause and rarely fixed by one tablet.",
          },
          {
            type: "list",
            items: [
              "Tension-type headache: pressing or tightening, both sides, mild to moderate, not made worse by ordinary activity.",
              "Chronic daily headache means headache on 15 or more days a month for more than three months.",
              "Many people with daily headache actually have migraine that has become chronic, sometimes with tension-type headache on top.",
              "Medication-overuse headache is the single most common reversible cause of daily headache, and the most frequently missed.",
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
            text: "Tension-type headache typically builds through the day, feels like a tight band or a weight on the head, and involves both sides. People describe pressure rather than throbbing, and they can usually carry on working through it — which is the clearest difference from migraine.",
          },
          {
            type: "list",
            items: [
              "Pressing, tightening or band-like pain across the forehead, temples or back of the head.",
              "Both sides, mild to moderate, lasting from 30 minutes to several days.",
              "Not worsened by walking or climbing stairs; usually no vomiting.",
              "Tender, tight muscles at the back of the neck and across the shoulders.",
              "Often worse late in the day, after screen work, driving, or a period of stress or poor sleep.",
              "If you also get attacks that are one-sided, throbbing, with nausea or light sensitivity, you probably have migraine as well — and that changes the treatment.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Headache that needs urgent assessment",
            items: [
              "The worst headache of your life, peaking within a minute. Call 998.",
              "Headache with fever, neck stiffness, rash or confusion.",
              "Headache with new weakness, facial droop, slurred speech or visual loss — call 998.",
              "New headache after age 50, or new headache with scalp tenderness and jaw ache on chewing.",
              "Headache that is steadily worsening over weeks, worse on lying flat, coughing or straining, or waking you from sleep.",
              "New headache in pregnancy or just after delivery, or with cancer or a weakened immune system.",
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
            text: "Diagnosis is clinical. The most valuable part of the assessment is an honest account of how many days a month you have headache and how many days a month you take something for it — those two numbers change the plan more than any test.",
          },
          {
            type: "list",
            items: [
              "A headache diary for at least four weeks, recording headache days and every painkiller taken.",
              "Neurological examination, blood pressure, and examination of the neck and jaw.",
              "Checking the back of the eye for raised pressure inside the head.",
              "Blood tests when the picture suggests another cause — including inflammatory markers if giant cell arteritis is a possibility over 50.",
              "Assessment of sleep, mood, caffeine intake and screen or driving posture, all of which drive frequency.",
              "Imaging when there are red flags, an abnormal examination, or a genuinely new or changed pattern.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "The painkiller trap",
            items: [
              "Simple painkillers on 15 or more days a month, or triptans, codeine or combination tablets on 10 or more days a month, can convert episodic headache into daily headache.",
              "The headache it causes feels like the original headache, so taking more seems logical. That is the trap.",
              "Codeine and other opioid-containing tablets do this fastest and are the least suitable painkillers for headache.",
              "It reverses — but only after the overused medicine is stopped, which usually means a few worse weeks before improvement.",
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
            text: "A scan is not part of diagnosing tension-type headache. When one is arranged it is to exclude something specific, and a normal scan is genuinely reassuring rather than a dead end.",
          },
          {
            type: "list",
            items: [
              "MRI brain: 20 to 40 minutes lying still in a noisy tunnel-shaped magnet, with ear protection and a call buzzer. No radiation, no pain. Tell staff about any implanted metal, pacemaker, pregnancy or claustrophobia in advance.",
              "CT head: under a minute, mainly used in emergencies. It answers 'is there bleeding or a mass' quickly, but shows far less detail than MRI.",
              "Neck X-ray or MRI of the neck is only useful if there are neck-related signs; degenerative changes are found in most adults over 40 and rarely explain headache on their own.",
              "EEG has no role in headache diagnosis, and nerve conduction studies have none either.",
              "If giant cell arteritis is suspected over the age of 50, blood tests are urgent and treatment may start before any scan or biopsy — this is one headache where waiting risks sight.",
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
            text: "For occasional tension-type headache, simple treatment is the right treatment. For frequent or daily headache, the priority order is almost always: withdraw any overused painkiller first, treat any underlying migraine properly, then add a preventive if headache remains.",
          },
          {
            type: "list",
            items: [
              "Occasional attacks: paracetamol, aspirin or ibuprofen, taken early and infrequently. Keep total use under 15 days a month, and under 10 for anything containing codeine or caffeine.",
              "Avoid opioids and codeine-containing combinations entirely for headache. They work briefly, cause dependence and drive daily headache faster than anything else.",
              "Frequent tension-type headache: low-dose amitriptyline at night is the best-evidenced preventive. It is used here for pain, not depression, and the dose is far lower than an antidepressant dose. Expect a dry mouth and drowsiness at first, and give it six to eight weeks.",
              "If migraine features are present, the guide to migraine treatment applies — including preventives and the newer CGRP medicines.",
              "Medication-overuse headache: stopping the overused medicine is the treatment. Expect a worse week or two, then steady improvement over four to twelve weeks. Your doctor may cover the withdrawal period with a preventive or a short bridging plan.",
              "Treating sleep, mood, caffeine and neck posture is not an afterthought here — in frequent headache it is often the part that actually works.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Give any change a fair trial",
            items: [
              "A preventive needs six to twelve weeks at an adequate dose before you can judge it.",
              "Withdrawal from an overused painkiller gets worse before it gets better; stopping the withdrawal early is why most attempts fail.",
              "Judge progress by headache days per month in a diary, not by how the last few days felt.",
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
            text: "Neck and shoulder exercise has better evidence in frequent tension-type headache than most people expect, and general aerobic exercise helps through sleep, mood and stress. Both need to be regular and unspectacular rather than intense.",
          },
          {
            type: "list",
            items: [
              "Chin tucks: sitting tall, draw the chin gently back to make a double chin, hold five seconds, repeat ten times. Twice a day. This strengthens the deep neck muscles that hold the head over the shoulders.",
              "Shoulder blade squeezes: draw the shoulder blades together and down, hold five seconds, ten repetitions.",
              "Upper trapezius and levator scapulae stretches: ear towards shoulder, and chin towards the opposite armpit, 20 to 30 seconds each side, twice daily. Gentle stretch, never pain.",
              "Aerobic exercise — brisk walking, swimming, cycling — 30 minutes three times a week.",
              "A screen-break rhythm: every 30 to 40 minutes, look away, roll the shoulders, and reset your posture. Frequency matters more than duration.",
              "Set the top of your screen at eye level. Looking down at a laptop for hours is the commonest correctable driver of daily neck-related headache.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with frequent headache",
        blocks: [
          {
            type: "paragraph",
            text: "Frequent headache responds to boring consistency. The changes that help are the ones you can keep doing in a busy month, not the ones that require a perfect week.",
          },
          {
            type: "list",
            items: [
              "Fixed sleep and waking times. Poor and irregular sleep is one of the strongest drivers of daily headache.",
              "Keep caffeine steady and modest, or stop it — but taper over two weeks rather than stopping suddenly.",
              "Track headache days and painkiller days in a diary or phone app. Without numbers, neither you nor your doctor can tell whether anything is working.",
              "Address stress deliberately rather than hoping it passes. Brief daily relaxation or breathing practice has real, if modest, evidence.",
              "Drink enough water, particularly in the Gulf summer and in strongly air-conditioned offices.",
              "Tell your doctor about low mood or anxiety. Treating them often reduces headache frequency, and untreated they blunt every other treatment.",
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
              "Is this tension-type headache, migraine, or both?",
              "How many painkiller days am I having, and am I in medication overuse?",
              "If I need to stop a painkiller, how do we do it and what should I expect?",
              "Would a preventive help me, and which would you choose?",
              "How long before we know whether it is working?",
              "Do I need a scan, and if not, what would change your mind?",
              "Could my sleep, mood, neck or caffeine be driving this, and how do we tackle that?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الصداع والصداع اليومي",
    summary:
      "صداع التوتر، والصداع الذي أصبح يومياً، وفخ الإفراط في المسكنات — كيف تميّز بينها وكيف يُعالج كل منها فعلياً.",
    category: "الصداع",
    metaTitle: "الصداع والصداع اليومي — NeuroCare",
    metaDescription:
      "دليل المريض لصداع التوتر والصداع اليومي المزمن: الأعراض، علامات الخطر، متى تفيد الأشعة، الإفراط الدوائي، العلاج وتمارين الرقبة.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "معظم الصداع الذي ليس نصفياً هو صداع التوتر: ألم ضاغط يشبه الشريط حول الرأس من الجانبين، دون الغثيان وحساسية الضوء المميزة للصداع النصفي. وهو أكثر أنواع الصداع شيوعاً في العالم، وعند معظم الناس عارض وغير مقلق.",
          },
          {
            type: "paragraph",
            text: "الأمر الجدير بالفهم هو ما يحدث حين يصبح الصداع متكرراً. نظام الألم الذي يعمل كثيراً يصبح أسهل في الاشتعال — تنخفض عتبة الأعصاب التي تنقل ألم الرأس والرقبة. وسوء النوم وانخفاض المزاج وإجهاد الرقبة، وكثيراً جداً تناول المسكنات بانتظام، كلها تدفع في الاتجاه نفسه. لهذا نادراً ما يُفسَّر الصداع اليومي بسبب واحد ونادراً ما يُصلَح بقرص واحد.",
          },
          {
            type: "list",
            items: [
              "صداع التوتر: ضاغط أو شادّ، في الجانبين، خفيف إلى متوسط، لا يزداد مع النشاط العادي.",
              "الصداع اليومي المزمن يعني صداعاً في 15 يوماً أو أكثر شهرياً لمدة تتجاوز ثلاثة أشهر.",
              "كثير ممن لديهم صداع يومي لديهم في الحقيقة صداع نصفي أصبح مزمناً، وأحياناً مع صداع توتر فوقه.",
              "صداع الإفراط الدوائي أشيع سبب قابل للعكس للصداع اليومي، وأكثرها إغفالاً.",
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
            text: "يتصاعد صداع التوتر عادة خلال اليوم، ويُحسّ كشريط ضاغط أو ثقل على الرأس، ويشمل الجانبين. يصفه الناس بالضغط لا بالنبض، ويستطيعون عادة متابعة العمل معه — وهذا أوضح فرق عن الصداع النصفي.",
          },
          {
            type: "list",
            items: [
              "ألم ضاغط أو شادّ أو يشبه الشريط في الجبهة أو الصدغين أو مؤخرة الرأس.",
              "في الجانبين، خفيف إلى متوسط، يستمر من 30 دقيقة إلى عدة أيام.",
              "لا يزداد بالمشي أو صعود الدرج، وعادة بلا قيء.",
              "عضلات مشدودة ومؤلمة عند الضغط في مؤخرة الرقبة وعبر الكتفين.",
              "غالباً أسوأ في آخر اليوم، بعد العمل على الشاشة أو القيادة أو فترة توتر أو نوم سيئ.",
              "إذا كانت تأتيك أيضاً نوبات في جانب واحد، نابضة، مع غثيان أو حساسية للضوء، فغالباً لديك صداع نصفي أيضاً — وهذا يغيّر العلاج.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "صداع يحتاج تقييماً عاجلاً",
            items: [
              "أشد صداع في حياتك يبلغ ذروته خلال دقيقة. اتصل بالرقم 998.",
              "صداع مع حمى أو تيبّس رقبة أو طفح أو تشوّش.",
              "صداع مع ضعف جديد أو انحراف في الوجه أو تلعثم أو فقدان بصر — اتصل بالرقم 998.",
              "صداع جديد بعد سن الخمسين، أو صداع جديد مع ألم عند لمس فروة الرأس وألم في الفك عند المضغ.",
              "صداع يزداد سوءاً على مدى أسابيع، أو يسوء عند الاستلقاء أو السعال أو الإجهاد، أو يوقظك من النوم.",
              "صداع جديد في الحمل أو بعد الولادة مباشرة، أو مع وجود سرطان أو ضعف في المناعة.",
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
            text: "التشخيص إكلينيكي. وأثمن جزء في التقييم هو حساب صادق لعدد أيام الصداع شهرياً وعدد الأيام التي تتناول فيها شيئاً له — هذان الرقمان يغيّران الخطة أكثر من أي فحص.",
          },
          {
            type: "list",
            items: [
              "مفكرة صداع لأربعة أسابيع على الأقل، تسجّل أيام الصداع وكل مسكّن يُتناول.",
              "فحص عصبي وقياس ضغط الدم وفحص الرقبة والفك.",
              "فحص قاع العين للبحث عن ارتفاع الضغط داخل الرأس.",
              "تحاليل دم حين تشير الصورة إلى سبب آخر — بما فيها دلالات الالتهاب إذا كان التهاب الشرايين الصدغية وارداً فوق الخمسين.",
              "تقييم النوم والمزاج والكافيين ووضعية الجلوس أمام الشاشة أو أثناء القيادة، وكلها ترفع التكرار.",
              "الأشعة عند وجود علامات خطر أو فحص غير طبيعي أو نمط جديد أو متغيّر فعلاً.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "فخ المسكنات",
            items: [
              "المسكنات البسيطة 15 يوماً أو أكثر شهرياً، أو التريبتانات أو الكودايين أو الأقراص المركّبة 10 أيام أو أكثر شهرياً، قد تحوّل الصداع النوبي إلى يومي.",
              "الصداع الناتج يشبه الصداع الأصلي، فيبدو تناول المزيد منطقياً. هذا هو الفخ.",
              "الكودايين والأقراص التي تحتوي على مشتقات أفيونية تفعل ذلك أسرع، وهي أقل المسكنات ملاءمة للصداع.",
              "الحالة قابلة للعكس — لكن بعد إيقاف الدواء المُفرَط فيه فقط، وهو ما يعني عادة أسابيع أسوأ قبل التحسّن.",
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
            text: "الأشعة ليست جزءاً من تشخيص صداع التوتر. وحين تُطلب فذلك لاستبعاد شيء محدد، والنتيجة الطبيعية مطمئنة فعلاً وليست طريقاً مسدوداً.",
          },
          {
            type: "list",
            items: [
              "الرنين المغناطيسي للدماغ: من 20 إلى 40 دقيقة بلا حركة داخل مغناطيس على شكل نفق وصوته مرتفع، مع واقٍ للأذن وجرس للاستدعاء. بلا إشعاع وبلا ألم. أخبر الفريق مسبقاً عن أي معدن مزروع أو منظم ضربات أو حمل أو رهاب أماكن مغلقة.",
              "الأشعة المقطعية للرأس: أقل من دقيقة، وتُستخدم في الطوارئ أساساً. تجيب بسرعة عن سؤال «هل يوجد نزيف أو كتلة» لكن تفاصيلها أقل بكثير من الرنين.",
              "أشعة أو رنين الرقبة مفيدان فقط عند وجود علامات تخص الرقبة؛ فالتغيرات التنكسية تُوجد لدى معظم البالغين فوق الأربعين ونادراً ما تفسّر الصداع وحدها.",
              "لا دور لتخطيط الدماغ الكهربائي في تشخيص الصداع، ولا لتخطيط الأعصاب.",
              "إذا اشتُبه بالتهاب الشرايين الصدغية فوق سن الخمسين فتحاليل الدم عاجلة وقد يبدأ العلاج قبل أي أشعة أو خزعة — هذا صداع يهدّد الانتظار فيه البصر.",
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
            text: "لصداع التوتر العارض، العلاج البسيط هو العلاج الصحيح. أما للصداع المتكرر أو اليومي فترتيب الأولويات يكاد يكون دائماً: إيقاف أي مسكّن مُفرَط فيه أولاً، ثم علاج أي صداع نصفي كامن علاجاً صحيحاً، ثم إضافة دواء وقائي إن بقي الصداع.",
          },
          {
            type: "list",
            items: [
              "النوبات العارضة: باراسيتامول أو أسبرين أو إيبوبروفين، مبكراً وبتباعد. أبقِ الاستخدام الكلي أقل من 15 يوماً شهرياً، وأقل من 10 لأي دواء يحتوي كودايين أو كافيين.",
              "تجنّب تماماً المشتقات الأفيونية والأقراص المركّبة مع الكودايين للصداع. تعمل لفترة قصيرة وتسبب اعتماداً وتدفع نحو الصداع اليومي أسرع من أي شيء آخر.",
              "صداع التوتر المتكرر: أميتريبتيلين بجرعة منخفضة ليلاً هو الوقائي الأقوى دليلاً. يُستخدم هنا للألم لا للاكتئاب، والجرعة أقل بكثير من جرعة مضادات الاكتئاب. توقّع جفاف الفم والنعاس في البداية، وأعطه ستة إلى ثمانية أسابيع.",
              "إذا وُجدت سمات الصداع النصفي فينطبق دليل علاج الصداع النصفي — بما فيه الوقائيات وأدوية CGRP الأحدث.",
              "صداع الإفراط الدوائي: إيقاف الدواء المُفرَط فيه هو العلاج. توقّع أسبوعاً أو أسبوعين أسوأ ثم تحسّناً مطّرداً خلال أربعة إلى اثني عشر أسبوعاً. وقد يغطي طبيبك فترة الإيقاف بدواء وقائي أو خطة انتقالية قصيرة.",
              "علاج النوم والمزاج والكافيين ووضعية الرقبة ليس أمراً ثانوياً هنا — ففي الصداع المتكرر هو غالباً الجزء الذي ينجح فعلاً.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "أعطِ أي تغيير فرصة عادلة",
            items: [
              "الدواء الوقائي يحتاج ستة إلى اثني عشر أسبوعاً بجرعة كافية قبل الحكم عليه.",
              "الانسحاب من مسكّن مُفرَط فيه يسوء قبل أن يتحسّن؛ والتوقف المبكر عن الانسحاب هو سبب فشل معظم المحاولات.",
              "احكم على التقدّم بعدد أيام الصداع شهرياً في مفكرة، لا بشعورك في الأيام القليلة الماضية.",
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
            text: "لتمارين الرقبة والكتف أدلة في صداع التوتر المتكرر أفضل مما يتوقع معظم الناس، والتمارين الهوائية العامة تفيد عبر النوم والمزاج والتوتر. وكلاهما يحتاج انتظاماً وبساطة لا شدة.",
          },
          {
            type: "list",
            items: [
              "سحب الذقن: اجلس معتدلاً، اسحب الذقن للخلف برفق حتى يتكوّن «ذقن مزدوج»، اثبت خمس ثوانٍ، كرّر عشر مرات، مرتين يومياً. يقوّي عضلات الرقبة العميقة التي تحمل الرأس فوق الكتفين.",
              "ضغط لوحي الكتف: قرّب لوحي الكتف من بعضهما وللأسفل، اثبت خمس ثوانٍ، عشر تكرارات.",
              "إطالة العضلة شبه المنحرفة العلوية ورافعة الكتف: الأذن نحو الكتف، والذقن نحو الإبط المقابل، من 20 إلى 30 ثانية لكل جانب، مرتين يومياً. شدّ لطيف لا ألم.",
              "تمارين هوائية — مشي سريع أو سباحة أو دراجة — 30 دقيقة ثلاث مرات أسبوعياً.",
              "إيقاع استراحة من الشاشة: كل 30 إلى 40 دقيقة انظر بعيداً، وحرّك كتفيك، واضبط جلستك. التكرار أهم من المدة.",
              "اجعل أعلى الشاشة بمستوى العين. النظر لأسفل إلى حاسوب محمول لساعات هو أشيع سبب قابل للتصحيح للصداع اليومي المرتبط بالرقبة.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع الصداع المتكرر",
        blocks: [
          {
            type: "paragraph",
            text: "يستجيب الصداع المتكرر للثبات الممل. التغييرات التي تنفع هي التي يمكنك الاستمرار عليها في شهر مزدحم، لا التي تحتاج أسبوعاً مثالياً.",
          },
          {
            type: "list",
            items: [
              "مواعيد نوم واستيقاظ ثابتة. النوم السيئ وغير المنتظم من أقوى دوافع الصداع اليومي.",
              "أبقِ الكافيين ثابتاً ومعتدلاً أو أوقفه — لكن تدريجياً خلال أسبوعين لا فجأة.",
              "سجّل أيام الصداع وأيام المسكنات في مفكرة أو تطبيق. بلا أرقام لا تستطيع أنت ولا طبيبك معرفة ما إذا كان شيء ينجح.",
              "تعامل مع التوتر بقصد لا بالانتظار حتى يزول. لممارسة استرخاء أو تنفس يومية قصيرة أدلة حقيقية وإن كانت متواضعة.",
              "اشرب ماءً كافياً، خاصة في صيف الخليج وفي المكاتب شديدة التكييف.",
              "أخبر طبيبك عن انخفاض المزاج أو القلق. علاجهما يقلل غالباً تكرار الصداع، وإهمالهما يُضعف أثر كل علاج آخر.",
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
              "هل هذا صداع توتر أم صداع نصفي أم كلاهما؟",
              "كم عدد أيام المسكنات لدي؟ وهل أنا في إفراط دوائي؟",
              "إن كان عليّ إيقاف مسكّن، فكيف نفعل ذلك وما الذي أتوقعه؟",
              "هل يفيدني دواء وقائي، وأيّها ستختار؟",
              "كم من الوقت قبل أن نعرف إن كان ينجح؟",
              "هل أحتاج أشعة، وإن لم أكن أحتاجها فما الذي يغيّر رأيك؟",
              "هل قد يكون نومي أو مزاجي أو رقبتي أو الكافيين هو الدافع، وكيف نعالج ذلك؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
