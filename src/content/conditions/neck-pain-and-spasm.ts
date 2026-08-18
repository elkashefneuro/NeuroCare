import type { Condition } from "../schema";

export const neckPainAndSpasm = {
  slug: "neck-pain-and-spasm",
  categoryId: "spine",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 7,
  sources: [
    {
      label: "NICE clinical knowledge summaries — Neck pain",
      url: "https://cks.nice.org.uk/topics/neck-pain-cervical-radiculopathy",
    },
    {
      label: "American Academy of Neurology — clinical guidelines",
      url: "https://www.aan.com/practice/guidelines",
    },
  ],
  en: {
    title: "Neck pain and muscle spasm",
    summary:
      "Ordinary neck pain, trapped-nerve pain down the arm, and the warning signs of cord compression — with the exercises that actually reduce recurrence.",
    category: "Neck and back",
    metaTitle: "Neck pain and muscle spasm — NeuroCare",
    metaDescription:
      "Patient guide to neck pain: common causes, cervical radiculopathy, red flags, when MRI or nerve tests help, treatment and neck exercises.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "The neck carries a five-kilogram head on seven small vertebrae, balanced by muscles that must stay active all day. Most neck pain comes from those muscles and the joints they control being loaded in one position for too long — not from anything torn, slipped or crumbling.",
          },
          {
            type: "paragraph",
            text: "This matters because the language used about necks frightens people unnecessarily. Reports describing degeneration, wear and tear, or disc bulges sound alarming, but these findings are present in most people over 40 who have no pain at all. They are the spinal equivalent of grey hair. Pain and imaging findings correlate poorly, and treating the scan rather than the person is how ordinary neck pain becomes a chronic problem.",
          },
          {
            type: "list",
            items: [
              "Mechanical neck pain: the great majority. Muscle and joint pain, often with spasm, settling within days to a few weeks.",
              "Cervical radiculopathy: a nerve root irritated where it leaves the spine, giving pain, numbness or weakness down one arm in a defined strip.",
              "Cervical myelopathy: pressure on the spinal cord itself. Uncommon, but the one pattern that must not be missed.",
              "Neck pain is also a very common part of migraine and tension-type headache, not always a separate problem.",
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
            text: "Typical neck pain is a stiff, aching, one-sided or central pain that is worse on turning the head, often with a hard knot of muscle spasm across the top of the shoulder. It frequently starts after a long drive, a night in an awkward position, or a stretch of intensive laptop work — sometimes with no clear trigger at all.",
          },
          {
            type: "list",
            items: [
              "Stiffness and reduced turning, usually worse in the morning and after long static postures.",
              "A tight painful band across the upper shoulder, tender to press.",
              "Pain referred up to the back of the head, sometimes producing headache.",
              "Movement helps and rest stiffens — the opposite of what most people expect.",
              "With a trapped nerve: sharp or burning pain travelling below the elbow, with pins and needles in specific fingers, often worse at night and eased by resting the hand on top of the head.",
              "Most episodes improve substantially within two to six weeks, and recurrence is common but not a sign of damage.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Neck symptoms that need urgent assessment",
            items: [
              "Clumsy hands — dropping things, difficulty with buttons or handwriting — with unsteady walking. This suggests cord compression and needs urgent review.",
              "Numbness or weakness in both arms, both legs, or all four limbs.",
              "New bladder or bowel problems with neck pain.",
              "Neck pain after a significant fall, road accident or blow to the head — do not move the neck and call 998.",
              "Neck pain with fever, night sweats, unexplained weight loss, or a history of cancer.",
              "Sudden severe neck pain with headache, especially after neck manipulation or a sudden movement, with dizziness or visual change — call 998.",
              "Progressive arm weakness rather than pain alone.",
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
            text: "For ordinary neck pain, examination is the diagnosis and imaging adds nothing. The purpose of assessment is to identify the small minority who have a trapped nerve, cord compression, or a cause outside the neck altogether.",
          },
          {
            type: "list",
            items: [
              "History: onset, pattern, what eases and worsens it, whether pain travels below the elbow, and any red-flag features.",
              "Examination of neck movement, muscle tenderness, arm power, reflexes and sensation.",
              "Specific tests for nerve root irritation and for cord signs — brisk reflexes, a positive Hoffmann sign, and an unsteady heel-to-toe walk.",
              "Checking the shoulder, because shoulder problems very often present as neck pain.",
              "Blood tests only when infection, inflammatory disease or cancer is a genuine possibility.",
              "Imaging is not routine. It is indicated for red flags, progressive weakness, or radiculopathy that is not improving after six to eight weeks and where surgery or injection is being considered.",
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
            text: "If a scan or nerve test is arranged, it is to answer a specific question — which nerve, how badly, and does it need intervention. It is worth knowing in advance that scans of the neck almost always report some degenerative change, and that this is expected rather than bad news.",
          },
          {
            type: "list",
            items: [
              "MRI of the neck: 20 to 30 minutes lying flat and still inside a noisy tunnel, with ear protection and a call buzzer. No radiation, no pain. Contrast is not usually needed. Tell staff in advance about pacemakers, implanted metal, pregnancy or claustrophobia.",
              "Lying flat with the neck supported can be uncomfortable if you are in spasm. Ask about taking a painkiller an hour beforehand — it is a common and reasonable request.",
              "X-ray of the neck: quick, but shows only bones. It cannot show discs or nerves and rarely changes management.",
              "Nerve conduction studies (NCV): small electrodes on the skin deliver brief electric pulses that feel like a sharp tap or a static shock. Uncomfortable for a second at a time, never dangerous. Takes 30 to 45 minutes.",
              "EMG, usually done at the same visit, uses a fine needle in a few muscles to listen to their electrical activity. There is a brief sting on insertion and a mild ache afterwards. It tells the doctor which nerve root is affected and how long it has been affected.",
              "Nerve tests can be normal in the first two to three weeks after a nerve is trapped, which is why timing them matters.",
              "Tell the person doing the nerve test if you take a blood thinner or have a pacemaker or implanted defibrillator.",
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
            text: "The evidence in neck pain points consistently in one direction: keep moving, keep working if you can, use medication briefly to make movement possible, and put the effort into exercise rather than into passive treatments. Collars, prolonged rest and long courses of painkillers all make outcomes worse.",
          },
          {
            type: "list",
            items: [
              "Stay active and continue normal activities as far as pain allows. This is treatment, not stoicism.",
              "Heat is usually more helpful than ice for muscle spasm. A warm shower before exercises works well.",
              "Anti-inflammatory medicines such as ibuprofen or naproxen, at the lowest useful dose for the shortest time, with food, and with caution if you have stomach, kidney or heart problems. Topical anti-inflammatory gel is a good option with fewer risks.",
              "Paracetamol is a reasonable addition but is weak on its own for neck pain.",
              "Muscle relaxants can help a severe spasm for a few days only. They cause drowsiness, they must not be combined with driving, and they have no place in long-term use.",
              "Avoid opioids and codeine-containing tablets. They do not improve neck pain outcomes and carry real risks of dependence.",
              "Physiotherapy is the single most useful referral, particularly for repeated episodes or a trapped nerve.",
              "For radiculopathy: neuropathic pain medicines such as amitriptyline, duloxetine, gabapentin or pregabalin may be tried. A nerve root injection is an option if pain is severe and not settling.",
              "Surgery is considered for progressive weakness, cord compression, or arm pain that has failed several months of proper conservative treatment — not for neck pain alone.",
              "A soft collar should be avoided beyond the first day or two after injury; it weakens the muscles that protect the neck.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Before neck manipulation",
            items: [
              "Discuss any planned high-velocity neck manipulation with your doctor first, particularly if you have dizziness, high blood pressure or a connective tissue condition.",
              "Rare but serious artery injuries have been reported after forceful neck manipulation.",
              "Mobilisation, massage and exercise-based physiotherapy do not carry this concern.",
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
            text: "Exercise is the only treatment shown to reduce how often neck pain comes back. Start gently within a comfortable range while pain is acute, then progress to strengthening. Mild discomfort during exercise is acceptable; sharp pain, or pain travelling down the arm, means stop and reduce the range.",
          },
          {
            type: "list",
            items: [
              "Chin tucks: sit tall, draw the chin straight back without tilting, hold five seconds, ten repetitions, two or three times daily. The foundation exercise for the deep neck flexors.",
              "Neck rotation: turn slowly to look over each shoulder within a comfortable range, five each way, several times a day.",
              "Side bends: ear towards shoulder, gently, holding 15 to 20 seconds each side.",
              "Upper trapezius stretch: one hand under the thigh to anchor the shoulder, tilt the head away, hold 20 to 30 seconds, twice each side.",
              "Scapular retraction: squeeze the shoulder blades together and down, hold five seconds, ten repetitions. This offloads the neck by getting the shoulder girdle to do its share.",
              "Wall angels or resistance-band rows twice a week, once acute pain has settled, to build lasting upper-back strength.",
              "Set your screen so the top of it is at eye level, keep the mouse close, and change position every 30 to 40 minutes. Frequent movement beats any single perfect posture.",
              "For sleep: one supportive pillow keeping the neck in line with the spine. Sleeping on the front, with the head turned all night, is the most common self-inflicted cause of morning neck pain.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with recurring neck pain",
        blocks: [
          {
            type: "paragraph",
            text: "Recurring neck pain is frustrating but not a sign of progressive damage. The people who do best are those who keep exercising between episodes rather than only during them, and who avoid the trap of steadily narrowing their activity.",
          },
          {
            type: "list",
            items: [
              "Keep doing the exercises when you feel well. Almost everyone stops once the pain settles, and that is why it returns.",
              "Adjust the workstation properly once rather than repeatedly enduring it — screen height, chair support, and a laptop stand with a separate keyboard.",
              "Watch phone posture. Long periods looking down at a phone load the neck heavily.",
              "Manage stress and sleep. Both raise muscle tension measurably and both are treatable.",
              "Stay in work if possible, with modified duties if needed. Long absence worsens outcomes rather than protecting the neck.",
              "If pain persists beyond six weeks despite proper exercise, go back to your doctor rather than escalating painkillers.",
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
              "Is this muscular neck pain, or is a nerve involved?",
              "Do I have any of the warning signs that would need a scan?",
              "If my scan shows degeneration, does that explain my pain or is it an incidental finding?",
              "What can I safely take, for how long, and what should I avoid?",
              "Can I be referred to physiotherapy?",
              "Which exercises should I do, and what level of discomfort is acceptable?",
              "What should make me come back sooner?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "ألم الرقبة وتشنج العضلات",
    summary:
      "ألم الرقبة العادي، وألم العصب المضغوط النازل في الذراع، وعلامات الإنذار لضغط الحبل الشوكي — مع التمارين التي تقلل التكرار فعلاً.",
    category: "الرقبة والظهر",
    metaTitle: "ألم الرقبة وتشنج العضلات — NeuroCare",
    metaDescription:
      "دليل المريض لألم الرقبة: الأسباب الشائعة، اعتلال الجذور العنقية، علامات الخطر، متى يفيد الرنين أو تخطيط الأعصاب، العلاج والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "تحمل الرقبة رأساً وزنه نحو خمسة كيلوغرامات على سبع فقرات صغيرة، تتوازن بعضلات يجب أن تبقى عاملة طوال اليوم. ومعظم ألم الرقبة يأتي من تحميل هذه العضلات والمفاصل التي تتحكم بها في وضع واحد لفترة طويلة — لا من شيء ممزّق أو منزلق أو متآكل.",
          },
          {
            type: "paragraph",
            text: "وهذا مهم لأن اللغة المستخدمة في وصف الرقبة تخيف الناس بلا داعٍ. التقارير التي تصف التنكّس أو «الاحتكاك» أو انتفاخ الديسك تبدو مقلقة، لكن هذه النتائج موجودة لدى معظم من تجاوزوا الأربعين ولا ألم لديهم إطلاقاً. هي مكافئ الشيب في العمود الفقري. العلاقة بين الألم ونتائج الأشعة ضعيفة، وعلاج الصورة بدل المريض هو ما يحوّل ألم الرقبة العادي إلى مشكلة مزمنة.",
          },
          {
            type: "list",
            items: [
              "ألم الرقبة الميكانيكي: الغالبية العظمى. ألم عضلي ومفصلي غالباً مع تشنج، يزول خلال أيام إلى أسابيع قليلة.",
              "اعتلال الجذر العنقي: تهيّج جذر عصبي عند خروجه من العمود الفقري، يسبب ألماً أو تنميلاً أو ضعفاً في ذراع واحدة ضمن شريط محدد.",
              "اعتلال النخاع العنقي: ضغط على الحبل الشوكي نفسه. غير شائع، لكنه النمط الذي لا يجوز إغفاله.",
              "ألم الرقبة أيضاً جزء شائع جداً من الصداع النصفي وصداع التوتر، وليس دائماً مشكلة منفصلة.",
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
            text: "ألم الرقبة النموذجي ألم متيبّس في جانب واحد أو في المنتصف، يزداد عند إدارة الرأس، وغالباً مع عقدة صلبة من التشنج العضلي أعلى الكتف. ويبدأ كثيراً بعد قيادة طويلة أو ليلة في وضع غير مريح أو فترة عمل مكثّف على الحاسوب المحمول — وأحياناً دون محفّز واضح إطلاقاً.",
          },
          {
            type: "list",
            items: [
              "تيبّس ونقص في مدى الالتفات، أسوأ عادة في الصباح وبعد أوضاع ثابتة طويلة.",
              "شريط مشدود ومؤلم أعلى الكتف، مؤلم عند الضغط عليه.",
              "ألم ينتشر إلى مؤخرة الرأس، وقد يسبب صداعاً.",
              "الحركة تخفف والراحة تزيد التيبّس — عكس ما يتوقعه معظم الناس.",
              "مع العصب المضغوط: ألم حاد أو حارق ينزل تحت المرفق، مع وخز في أصابع محددة، غالباً أسوأ ليلاً ويخف بوضع اليد فوق الرأس.",
              "معظم النوبات تتحسّن كثيراً خلال أسبوعين إلى ستة أسابيع، والتكرار شائع لكنه ليس علامة ضرر.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "أعراض رقبة تحتاج تقييماً عاجلاً",
            items: [
              "خرق في اليدين — إسقاط الأشياء وصعوبة في الأزرار أو الكتابة — مع عدم ثبات في المشي. هذا يوحي بضغط على الحبل الشوكي ويحتاج مراجعة عاجلة.",
              "تنميل أو ضعف في الذراعين معاً أو الساقين معاً أو الأطراف الأربعة.",
              "مشاكل جديدة في المثانة أو الأمعاء مع ألم الرقبة.",
              "ألم رقبة بعد سقوط كبير أو حادث سير أو ضربة على الرأس — لا تحرّك الرقبة واتصل بالرقم 998.",
              "ألم رقبة مع حمى أو تعرّق ليلي أو نقص وزن غير مفسّر أو تاريخ سرطان.",
              "ألم رقبة شديد مفاجئ مع صداع، خاصة بعد تدليك عنيف للرقبة أو حركة مفاجئة، مع دوخة أو تغيّر في البصر — اتصل بالرقم 998.",
              "ضعف متزايد في الذراع لا مجرد ألم.",
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
            text: "في ألم الرقبة العادي، الفحص هو التشخيص والأشعة لا تضيف شيئاً. والغرض من التقييم هو تحديد الأقلية الصغيرة التي لديها عصب مضغوط أو ضغط على الحبل الشوكي أو سبب خارج الرقبة أصلاً.",
          },
          {
            type: "list",
            items: [
              "القصة: كيف بدأ، ونمطه، وما يخففه ويزيده، وهل ينزل الألم تحت المرفق، وأي علامات خطر.",
              "فحص حركة الرقبة وإيلام العضلات وقوة الذراع والمنعكسات والإحساس.",
              "اختبارات محددة لتهيّج جذر العصب ولعلامات الحبل الشوكي — منعكسات نشطة وعلامة هوفمان الإيجابية ومشي غير ثابت كعباً أمام إصبع.",
              "فحص الكتف، لأن مشاكل الكتف كثيراً ما تظهر على شكل ألم رقبة.",
              "تحاليل دم فقط حين تكون العدوى أو مرض التهابي أو السرطان احتمالاً حقيقياً.",
              "الأشعة ليست روتينية. تُطلب عند علامات الخطر أو ضعف متزايد أو اعتلال جذر لا يتحسّن بعد ستة إلى ثمانية أسابيع ويُدرس فيه التدخل الجراحي أو الحقن.",
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
            text: "إن طُلبت أشعة أو تخطيط أعصاب فذلك للإجابة عن سؤال محدد — أي عصب، وبأي شدة، وهل يحتاج تدخلاً. ومن المفيد أن تعرف مسبقاً أن أشعة الرقبة تُظهر دائماً تقريباً بعض التغيّر التنكّسي، وأن هذا متوقّع وليس خبراً سيئاً.",
          },
          {
            type: "list",
            items: [
              "رنين مغناطيسي للرقبة: من 20 إلى 30 دقيقة مستلقياً بلا حركة داخل نفق صوته مرتفع، مع واقٍ للأذن وجرس للاستدعاء. بلا إشعاع وبلا ألم. والصبغة غير لازمة عادة. أخبر الفريق مسبقاً عن منظم ضربات القلب أو معادن مزروعة أو حمل أو رهاب أماكن مغلقة.",
              "الاستلقاء مع دعم الرقبة قد يكون غير مريح إن كنت في تشنج. اسأل عن تناول مسكّن قبل الموعد بساعة — طلب شائع ومعقول.",
              "أشعة سينية للرقبة: سريعة لكنها تُظهر العظام فقط. لا تُظهر الأقراص ولا الأعصاب ونادراً ما تغيّر الخطة.",
              "تخطيط الأعصاب (NCV): أقطاب صغيرة على الجلد تُرسل نبضات كهربائية قصيرة تُحسّ كنقرة حادة أو شحنة ساكنة. غير مريحة لثانية في كل مرة، لكنها غير خطرة أبداً. تستغرق من 30 إلى 45 دقيقة.",
              "تخطيط العضلات بالإبرة، ويُجرى عادة في الزيارة نفسها، يستخدم إبرة رفيعة في بضع عضلات للاستماع إلى نشاطها الكهربائي. هناك لسعة قصيرة عند الإدخال وألم خفيف بعدها. يخبر الطبيب أي جذر عصبي متأثر ومنذ متى.",
              "قد يكون تخطيط الأعصاب طبيعياً في أول أسبوعين إلى ثلاثة بعد انضغاط العصب، ولهذا يهم توقيته.",
              "أخبر من يجري تخطيط الأعصاب إن كنت تتناول مميعاً للدم أو لديك منظم ضربات أو مزيل رجفان مزروع.",
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
            text: "تشير الأدلة في ألم الرقبة باتجاه واحد باستمرار: استمر في الحركة، واستمر في العمل إن استطعت، واستخدم الدواء لفترة قصيرة لتمكين الحركة، واصرف الجهد على التمارين لا على العلاجات السلبية. الياقات الطبية والراحة المطوّلة ودورات المسكنات الطويلة كلها تُسوئ النتيجة.",
          },
          {
            type: "list",
            items: [
              "ابقَ نشطاً وواصل نشاطاتك المعتادة بقدر ما يسمح الألم. هذا علاج وليس تجلّداً.",
              "الحرارة أنفع عادة من الثلج لتشنج العضلات. الاستحمام بماء دافئ قبل التمارين فعّال.",
              "مضادات الالتهاب مثل الإيبوبروفين أو النابروكسين، بأقل جرعة مفيدة ولأقصر مدة، مع الطعام، وبحذر إن كان لديك مشاكل في المعدة أو الكلى أو القلب. والجل الموضعي المضاد للالتهاب خيار جيد بمخاطر أقل.",
              "الباراسيتامول إضافة معقولة لكنه ضعيف وحده في ألم الرقبة.",
              "مرخيات العضلات قد تفيد في تشنج شديد لأيام قليلة فقط. تسبب نعاساً، ويجب ألا تُجمع مع القيادة، ولا مكان لها في الاستخدام طويل الأمد.",
              "تجنّب المشتقات الأفيونية والأقراص المحتوية على كودايين. لا تحسّن نتائج ألم الرقبة وتحمل مخاطر اعتماد حقيقية.",
              "العلاج الطبيعي هو أنفع إحالة على الإطلاق، خاصة للنوبات المتكررة أو العصب المضغوط.",
              "لاعتلال الجذر: قد تُجرَّب أدوية ألم الأعصاب مثل الأميتريبتيلين أو الدولوكسيتين أو الجابابنتين أو البريجابالين. وحقن جذر العصب خيار إن كان الألم شديداً ولا يهدأ.",
              "تُدرس الجراحة عند الضعف المتزايد أو ضغط الحبل الشوكي أو ألم ذراع فشل بعد أشهر من العلاج التحفظي الصحيح — لا لألم الرقبة وحده.",
              "ينبغي تجنّب الياقة الطبية بعد اليوم الأول أو الثاني من الإصابة؛ فهي تُضعف العضلات التي تحمي الرقبة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "قبل تدليك الرقبة العنيف",
            items: [
              "ناقش أي تدليك عنيف مخطط للرقبة مع طبيبك أولاً، خاصة إن كان لديك دوخة أو ارتفاع ضغط أو مرض في النسيج الضام.",
              "أُبلغ عن إصابات شريانية نادرة لكنها خطيرة بعد تدليك عنيف للرقبة.",
              "أما التحريك اللطيف والتدليك والعلاج الطبيعي القائم على التمارين فلا تحمل هذا القلق.",
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
            text: "التمارين هي العلاج الوحيد الذي ثبت أنه يقلل تكرار ألم الرقبة. ابدأ برفق ضمن مدى مريح أثناء الألم الحاد، ثم تدرّج نحو التقوية. الانزعاج الخفيف أثناء التمرين مقبول؛ أما الألم الحاد أو النازل في الذراع فيعني التوقف وتقليل المدى.",
          },
          {
            type: "list",
            items: [
              "سحب الذقن: اجلس معتدلاً، اسحب الذقن مستقيماً للخلف دون إمالة، اثبت خمس ثوانٍ، عشر تكرارات، مرتين أو ثلاثاً يومياً. التمرين الأساس لعضلات الرقبة العميقة.",
              "إدارة الرقبة: التفت ببطء للنظر فوق كل كتف ضمن مدى مريح، خمس مرات لكل جهة، عدة مرات يومياً.",
              "الميل الجانبي: الأذن نحو الكتف برفق، مع الثبات 15 إلى 20 ثانية لكل جانب.",
              "إطالة العضلة شبه المنحرفة العلوية: ضع يداً تحت الفخذ لتثبيت الكتف، ثم أمِل الرأس بعيداً، اثبت 20 إلى 30 ثانية، مرتين لكل جانب.",
              "سحب لوحي الكتف: قرّبهما من بعضهما وللأسفل، اثبت خمس ثوانٍ، عشر تكرارات. هذا يخفف الحمل عن الرقبة بجعل حزام الكتف يؤدي دوره.",
              "تمارين «ملائكة الجدار» أو سحب بشريط مطاطي مرتين أسبوعياً، بعد هدوء الألم الحاد، لبناء قوة دائمة في أعلى الظهر.",
              "اضبط الشاشة بحيث يكون أعلاها بمستوى العين، وأبقِ الفأرة قريبة، وغيّر وضعيتك كل 30 إلى 40 دقيقة. الحركة المتكررة أفضل من أي وضعية مثالية واحدة.",
              "للنوم: وسادة داعمة واحدة تُبقي الرقبة بمحاذاة العمود الفقري. النوم على البطن مع إدارة الرأس طوال الليل أشيع سبب ذاتي لألم الرقبة الصباحي.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع ألم الرقبة المتكرر",
        blocks: [
          {
            type: "paragraph",
            text: "ألم الرقبة المتكرر مُحبط لكنه ليس علامة ضرر متزايد. وأفضل النتائج لمن يواصلون التمارين بين النوبات لا أثناءها فقط، ولمن يتجنبون فخ التضييق التدريجي لنشاطهم.",
          },
          {
            type: "list",
            items: [
              "واصل التمارين وأنت بخير. يتوقف الجميع تقريباً بعد زوال الألم، ولهذا يعود.",
              "اضبط محطة عملك مرة واحدة بشكل صحيح بدل تحمّلها مراراً — ارتفاع الشاشة ودعم الكرسي وحامل للحاسوب المحمول مع لوحة مفاتيح منفصلة.",
              "انتبه لوضعية الهاتف. فترات النظر الطويلة إلى الهاتف تُحمّل الرقبة كثيراً.",
              "أدر التوتر والنوم. كلاهما يرفع شدّ العضلات بشكل ملموس وكلاهما قابل للعلاج.",
              "ابقَ في عملك إن أمكن، مع تعديل المهام عند الحاجة. الغياب الطويل يُسوئ النتيجة ولا يحمي الرقبة.",
              "إن استمر الألم أكثر من ستة أسابيع رغم التمارين الصحيحة، ارجع إلى طبيبك بدل زيادة المسكنات.",
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
              "هل هذا ألم عضلي في الرقبة أم أن هناك عصباً متورطاً؟",
              "هل لديّ أي من علامات الإنذار التي تستدعي أشعة؟",
              "إن أظهرت صوري تنكّساً، فهل يفسّر ألمي أم أنه اكتشاف عرضي؟",
              "ما الذي يمكنني تناوله بأمان، ولكم من الوقت، وما الذي أتجنبه؟",
              "هل يمكن إحالتي إلى العلاج الطبيعي؟",
              "أي التمارين ينبغي أن أمارس، وما مستوى الانزعاج المقبول؟",
              "ما الذي يجعلني أعود إليك أبكر؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
