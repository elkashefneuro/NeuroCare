import type { Condition } from "../schema";

export const numbnessAndTingling = {
  slug: "numbness-and-tingling",
  categoryId: "neuromuscular",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 8,
  sources: [
    {
      label:
        "NICE clinical guideline CG173 — Neuropathic pain in adults: pharmacological management",
      url: "https://www.nice.org.uk/guidance/cg173",
    },
    {
      label: "National Institute of Neurological Disorders and Stroke — peripheral neuropathy",
      url: "https://www.ninds.nih.gov",
    },
  ],
  en: {
    title: "Numbness and tingling",
    summary:
      "Where numbness comes from, why the pattern matters more than the sensation, and what nerve conduction studies can and cannot tell you.",
    category: "Nerve and muscle",
    metaTitle: "Numbness and tingling — NeuroCare",
    metaDescription:
      "Patient guide to numbness and tingling: causes from carpal tunnel to neuropathy, red flags, nerve conduction studies and EMG, treatment and exercises.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "Numbness, tingling and pins and needles all mean the same thing physiologically: sensory nerve fibres are firing abnormally or not firing at all. What decides the cause is not how it feels but where it is, how it started, and what came with it. A neurologist listens to the map more than the description.",
          },
          {
            type: "paragraph",
            text: "The nervous system is arranged so that damage at each level produces a recognisable pattern. A squashed nerve at the wrist affects specific fingers. A trapped nerve root in the neck or back affects a strip running down a limb. A generalised neuropathy affects both feet first, symmetrically, then creeps upwards. Damage in the spinal cord or brain affects a whole side or everything below a level. This is why the first question is always 'exactly where?'",
          },
          {
            type: "list",
            items: [
              "Carpal tunnel syndrome: the median nerve compressed at the wrist. Thumb, index, middle and half the ring finger. Very common, and treatable.",
              "Ulnar neuropathy at the elbow: little finger and half the ring finger, often after leaning on the elbow.",
              "Radiculopathy: a nerve root pinched in the neck or lower back, giving a strip of numbness down the arm or leg.",
              "Peripheral neuropathy: both feet, symmetrical, glove-and-stocking pattern, creeping up over months to years. Diabetes is the commonest cause worldwide; B12 deficiency, thyroid disease, alcohol and some medicines also cause it.",
              "Central causes — spinal cord or brain — are less common but the most urgent to identify.",
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
            text: "The most common story is either a hand that goes numb at night and wakes you, or feet that have gradually become numb, burning or 'as though walking on cotton wool'. Both are worth investigating, and both are far more treatable when addressed early.",
          },
          {
            type: "list",
            items: [
              "Carpal tunnel: numbness and tingling waking you at night, relieved by shaking the hand out of the bed; worse when driving or holding a phone; later, dropping small objects and weakness of the thumb.",
              "Peripheral neuropathy: symmetrical numbness or burning starting in the toes and both feet, worse at night, sometimes with a sense of imbalance in the dark.",
              "Radiculopathy: a defined strip of numbness with pain travelling below the elbow or knee, often with neck or back pain.",
              "Nerve pain has a distinctive quality: burning, electric, shooting, or an intense response to light touch such as a bedsheet.",
              "Balance worsening in the dark or with eyes closed is a useful sign that sensation from the feet is genuinely reduced.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Numbness that needs emergency assessment",
            items: [
              "Sudden numbness of the face, arm or leg on one side, especially with weakness or speech difficulty — this is a stroke. Call 998.",
              "Numbness around the back passage, genitals or inner thighs, with difficulty passing urine or loss of control — possible cauda equina. Go to hospital now.",
              "Numbness and weakness climbing up from both feet over hours to days, with unsteadiness — this can be Guillain-Barré syndrome and needs urgent hospital assessment.",
              "A band of numbness around the chest or abdomen, with leg weakness — this suggests a spinal cord problem.",
              "Numbness after significant trauma to the neck or back.",
              "Rapidly spreading numbness with breathlessness or difficulty swallowing.",
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
            text: "Assessment starts with mapping exactly which area is affected, because that alone narrows the cause enormously. Blood tests follow, because a substantial proportion of neuropathy has a treatable metabolic or nutritional cause that no scan will reveal.",
          },
          {
            type: "list",
            items: [
              "Detailed examination of sensation, power, reflexes and coordination, mapping the affected territory precisely.",
              "Blood glucose and HbA1c — diabetes and pre-diabetes are the commonest identifiable causes.",
              "Vitamin B12 and folate. B12 deficiency is common, easily missed, and causes damage that becomes permanent if left too long.",
              "Thyroid function, kidney and liver function, and inflammatory markers.",
              "Serum protein electrophoresis, looking for an abnormal protein that can cause neuropathy.",
              "A review of medicines and alcohol intake — chemotherapy agents, some antibiotics and long-term alcohol use are all recognised causes.",
              "Nerve conduction studies and EMG when the pattern is unclear, when a specific trapped nerve needs confirming before surgery, or when weakness is present.",
              "MRI of the neck or spine when a root or the spinal cord is suspected, not for numbness in general.",
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
            text: "Nerve conduction studies are the test people most often ask about, and the one most often described inaccurately by friends. It is uncomfortable rather than painful, entirely safe, and needs no preparation beyond warm hands.",
          },
          {
            type: "list",
            items: [
              "Nerve conduction studies (NCV): small sticky electrodes are placed on the skin, and a stimulator delivers brief electrical pulses over the nerve. Each pulse feels like a sharp tap, a static shock or a flick of a rubber band, and lasts a fraction of a second. Your fingers or toes may twitch — that is expected and means the nerve is responding.",
              "It usually takes 30 to 45 minutes for one or two limbs. There are no after-effects and you can drive home.",
              "Cold limbs slow nerve conduction and can distort the result, so the limb is warmed first. Arrive with warm hands and avoid putting cream or oil on the skin that day.",
              "EMG, usually done in the same appointment: a very fine needle is inserted into a few muscles to listen to their electrical activity. There is a brief sting on insertion and a mild bruised ache for a day. It is not the same as an injection and nothing is injected.",
              "Tell the person doing the test if you take a blood thinner, have a pacemaker or implanted defibrillator, or have lymphoedema in a limb.",
              "What these tests can show: which nerve is affected, whether the problem is compression at a specific point or a generalised neuropathy, whether the insulation or the fibre itself is damaged, and roughly how long it has been going on.",
              "What they cannot show: small-fibre neuropathy, which causes burning pain with completely normal nerve conduction studies. A normal test does not mean your symptoms are imagined.",
              "MRI of the neck or spine, if arranged: 20 to 30 minutes lying still in a noisy tunnel, no radiation, no pain. Declare implanted metal, pacemakers, pregnancy or claustrophobia beforehand.",
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
            text: "There are two separate goals: correct the cause where one can be found, and control the symptoms while nerves recover. Nerves regenerate slowly — roughly a millimetre a day — so improvement is measured in months, and expecting a quick answer leads people to abandon treatments that would have worked.",
          },
          {
            type: "list",
            items: [
              "Treat the cause first. Good glucose control in diabetes slows progression and is the single most effective intervention. Replacing B12, correcting thyroid function, stopping alcohol or changing a causative medicine can each halt or reverse damage.",
              "Carpal tunnel: a wrist splint worn at night is genuinely effective for mild to moderate cases and should be tried first. A steroid injection gives relief for many. Surgical release is a short, effective day-case procedure with a high success rate when symptoms are persistent or the nerve is significantly affected.",
              "Ulnar neuropathy at the elbow: avoiding leaning on the elbow and using an elbow pad or a night splint that stops full bending helps many people.",
              "For nerve pain, first-line options are amitriptyline, duloxetine, gabapentin or pregabalin. Any one of these can be tried, and if the first fails, switching to another is standard — around half of people need to try more than one.",
              "These medicines need building up slowly, and take two to four weeks at an adequate dose to show benefit. Drowsiness, dizziness and dry mouth are common at first and often settle.",
              "Capsaicin cream or a high-strength capsaicin patch can help localised nerve pain when tablets are unsuitable.",
              "Opioids and tramadol are not recommended for long-term nerve pain — they perform poorly and carry real risks.",
              "Physiotherapy and occupational therapy help with balance, walking safety and hand function, and are under-used.",
              "Realistic goal-setting matters: a 30 to 50 per cent reduction in pain is a good result with these medicines. Complete abolition is uncommon.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Protecting numb feet",
            items: [
              "If you cannot feel your feet properly, you will not feel an injury either. Check both feet daily, including between the toes and the soles.",
              "Never walk barefoot, including indoors and on hot surfaces — burns from hot sand and tiles are a real hazard here.",
              "Test bath water with your hand or elbow, not your foot.",
              "Have well-fitting shoes and see a podiatrist regularly if you have diabetes.",
              "Report any cut, blister, redness or ulcer promptly rather than waiting to see if it heals.",
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
            text: "Exercise helps numbness in two distinct ways: aerobic exercise improves glucose control and blood supply to the nerves themselves, and balance training compensates for the sensory information the feet can no longer supply. Both have evidence behind them and neither requires equipment.",
          },
          {
            type: "list",
            items: [
              "Aerobic exercise 30 minutes, five times a week — walking, cycling or swimming. In diabetic neuropathy this both slows progression and reduces pain.",
              "Balance training daily: stand with feet together for 30 seconds, then heel-to-toe, then on one leg — always beside a kitchen counter or wall you can grab. Progress only when the previous level is easy.",
              "Heel raises and toe raises, ten each, twice daily, to maintain ankle strength and reduce trip risk.",
              "Ankle circles and calf stretches to keep the ankle mobile.",
              "Carpal tunnel: nerve gliding exercises — moving the wrist and fingers through a sequence of positions that lets the median nerve slide freely. Ask a physiotherapist to show you; done wrongly they aggravate symptoms.",
              "Take regular breaks from repetitive gripping, typing or vibrating tools, and keep the wrist in a neutral position rather than bent.",
              "Resistance training twice a week for legs and hands, since neuropathy causes gradual weakness alongside the numbness.",
              "Tai chi has good evidence for reducing falls in people with reduced foot sensation.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with numbness",
        blocks: [
          {
            type: "paragraph",
            text: "Numbness that has an identified and treated cause often stabilises or improves. Where no cause is found — which happens in a meaningful minority — the focus shifts to protecting the feet, preventing falls and controlling pain, and that combination works well.",
          },
          {
            type: "list",
            items: [
              "Falls are the main practical risk. Good lighting, removing loose rugs, a night light on the route to the bathroom, and handrails all matter more than they sound.",
              "Sleep is often the worst-affected part of life. Nerve pain medicines taken at night can address both problems at once — mention this to your doctor.",
              "Alcohol worsens neuropathy directly and independently of any other cause.",
              "If you have diabetes, glucose control is not just about the long term — it measurably affects nerve pain now.",
              "Ask about driving if sensation in your feet is significantly reduced.",
              "Persistent nerve pain commonly brings low mood and anxiety with it. Treating those improves the pain, and is not a suggestion that the pain is psychological.",
              "Keep a simple record of what helps and what does not; treatment here is a sequence of trials and the record shortens it.",
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
              "Which nerve or nerves do you think are affected, and at what level?",
              "Have we checked for the treatable causes — diabetes, B12, thyroid, and my medicines?",
              "Do I need nerve conduction studies, and what question will they answer?",
              "If my nerve test is normal but I still have symptoms, what next?",
              "Which medicine would you start for the pain, and how long before I judge it?",
              "What can I do to stop this getting worse?",
              "Should I see a podiatrist or a physiotherapist?",
              "What symptoms mean I should come back urgently?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "التنميل والوخز",
    summary:
      "من أين يأتي التنميل، ولماذا يهمّ النمط أكثر من الإحساس نفسه، وما الذي يستطيع تخطيط الأعصاب إخبارك به وما لا يستطيع.",
    category: "الأعصاب والعضلات",
    metaTitle: "التنميل والوخز — NeuroCare",
    metaDescription:
      "دليل المريض للتنميل والوخز: الأسباب من نفق الرسغ إلى اعتلال الأعصاب، علامات الخطر، تخطيط الأعصاب والعضلات، العلاج والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "التنميل والوخز والإحساس بالنمل كلها تعني الشيء نفسه فسيولوجياً: ألياف عصبية حسية تُطلق إشارات بشكل غير طبيعي أو لا تُطلق إطلاقاً. والذي يحدد السبب ليس شكل الإحساس بل موضعه وكيف بدأ وما رافقه. طبيب الأعصاب يصغي إلى الخريطة أكثر من الوصف.",
          },
          {
            type: "paragraph",
            text: "الجهاز العصبي مرتّب بحيث يُنتج الضرر في كل مستوى نمطاً يمكن التعرف عليه. فالعصب المضغوط عند الرسغ يصيب أصابع محددة، والجذر العصبي المنحبس في الرقبة أو الظهر يصيب شريطاً ينزل في الطرف، واعتلال الأعصاب المعمّم يصيب القدمين أولاً بتناظر ثم يزحف صعوداً، والضرر في الحبل الشوكي أو الدماغ يصيب جانباً كاملاً أو كل ما تحت مستوى معين. لهذا يكون السؤال الأول دائماً: أين بالضبط؟",
          },
          {
            type: "list",
            items: [
              "متلازمة نفق الرسغ: انضغاط العصب المتوسط عند الرسغ. الإبهام والسبابة والوسطى ونصف البنصر. شائعة جداً وقابلة للعلاج.",
              "اعتلال العصب الزندي عند المرفق: الخنصر ونصف البنصر، غالباً بعد الاتكاء على المرفق.",
              "اعتلال الجذر: جذر عصبي منحبس في الرقبة أو أسفل الظهر يعطي شريطاً من التنميل ينزل في الذراع أو الساق.",
              "اعتلال الأعصاب الطرفية: القدمان معاً، متناظر، بنمط «القفاز والجورب»، يزحف صعوداً خلال أشهر إلى سنوات. السكري أشيع سبب عالمياً؛ ونقص B12 وأمراض الغدة الدرقية والكحول وبعض الأدوية تسببه أيضاً.",
              "الأسباب المركزية — الحبل الشوكي أو الدماغ — أقل شيوعاً لكنها الأكثر إلحاحاً في التعرّف عليها.",
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
            text: "أشيع قصة إما يد تخدر ليلاً فتوقظك، أو قدمان خدرتا تدريجياً أو صارتا تحرقان أو «كأنك تمشي على قطن». وكلاهما يستحق الفحص، وكلاهما أكثر قابلية للعلاج حين يُعالج مبكراً.",
          },
          {
            type: "list",
            items: [
              "نفق الرسغ: تنميل ووخز يوقظك ليلاً ويخف برجّ اليد خارج السرير؛ يسوء أثناء القيادة أو حمل الهاتف؛ ولاحقاً إسقاط الأشياء الصغيرة وضعف الإبهام.",
              "اعتلال الأعصاب الطرفية: تنميل أو حرقان متناظر يبدأ في أصابع القدمين والقدمين معاً، أسوأ ليلاً، وأحياناً مع شعور بعدم التوازن في الظلام.",
              "اعتلال الجذر: شريط محدد من التنميل مع ألم ينزل تحت المرفق أو الركبة، غالباً مع ألم في الرقبة أو الظهر.",
              "لألم الأعصاب صفة مميزة: حارق أو كهربائي أو كالطعنات، أو استجابة مفرطة للمس الخفيف مثل ملامسة الغطاء.",
              "تدهور التوازن في الظلام أو عند إغماض العينين علامة مفيدة على أن الإحساس القادم من القدمين قد ضعف فعلاً.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "تنميل يحتاج تقييماً طارئاً",
            items: [
              "تنميل مفاجئ في الوجه أو الذراع أو الساق في جانب واحد، خاصة مع ضعف أو صعوبة في الكلام — هذه سكتة دماغية. اتصل بالرقم 998.",
              "تنميل حول فتحة الشرج أو الأعضاء التناسلية أو باطن الفخذين، مع صعوبة في التبول أو فقدان التحكم — متلازمة ذيل الفرس المحتملة. اذهب إلى المستشفى الآن.",
              "تنميل وضعف يصعدان من القدمين معاً خلال ساعات إلى أيام مع عدم ثبات — قد تكون متلازمة غيلان باريه وتحتاج تقييماً عاجلاً في المستشفى.",
              "شريط من التنميل حول الصدر أو البطن مع ضعف في الساقين — يوحي بمشكلة في الحبل الشوكي.",
              "تنميل بعد إصابة كبيرة في الرقبة أو الظهر.",
              "تنميل ينتشر بسرعة مع ضيق تنفس أو صعوبة بلع.",
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
            text: "يبدأ التقييم برسم خريطة دقيقة للمنطقة المصابة، لأن ذلك وحده يضيّق دائرة الأسباب كثيراً. ثم تأتي تحاليل الدم، لأن نسبة كبيرة من اعتلال الأعصاب لها سبب استقلابي أو غذائي قابل للعلاج لن تكشفه أي أشعة.",
          },
          {
            type: "list",
            items: [
              "فحص مفصّل للإحساس والقوة والمنعكسات والتناسق، مع تحديد المنطقة المصابة بدقة.",
              "سكر الدم والسكر التراكمي — فالسكري وما قبل السكري أشيع الأسباب التي يمكن تحديدها.",
              "فيتامين B12 وحمض الفوليك. نقص B12 شائع ويُغفل بسهولة ويسبب ضرراً يصبح دائماً إن تُرك طويلاً.",
              "وظائف الغدة الدرقية والكلى والكبد، ودلالات الالتهاب.",
              "الفصل الكهربائي لبروتينات المصل، بحثاً عن بروتين غير طبيعي قد يسبب اعتلال الأعصاب.",
              "مراجعة الأدوية وتناول الكحول — فأدوية العلاج الكيميائي وبعض المضادات الحيوية وتناول الكحول المزمن كلها أسباب معروفة.",
              "تخطيط الأعصاب والعضلات حين يكون النمط غير واضح، أو لتأكيد انحباس عصب محدد قبل الجراحة، أو عند وجود ضعف.",
              "رنين مغناطيسي للرقبة أو العمود الفقري عند الاشتباه بجذر أو بالحبل الشوكي، لا للتنميل عموماً.",
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
            text: "تخطيط الأعصاب هو الفحص الذي يسأل عنه الناس أكثر، والأكثر وصفاً غير دقيق من الأصدقاء. وهو مزعج لا مؤلم، وآمن تماماً، ولا يحتاج تحضيراً سوى دفء اليدين.",
          },
          {
            type: "list",
            items: [
              "تخطيط الأعصاب (NCV): تُوضع أقطاب لاصقة صغيرة على الجلد، ويُرسل محفّز نبضات كهربائية قصيرة فوق العصب. كل نبضة تُحسّ كنقرة حادة أو شحنة ساكنة أو ضربة شريط مطاطي، وتستمر جزءاً من الثانية. قد ترتعش أصابعك — وهذا متوقّع ويعني أن العصب يستجيب.",
              "يستغرق عادة من 30 إلى 45 دقيقة لطرف أو طرفين. لا آثار بعده ويمكنك القيادة عائداً.",
              "برودة الطرف تُبطئ التوصيل العصبي وقد تشوّه النتيجة، لذا يُدفّأ الطرف أولاً. احضر ويداك دافئتان وتجنّب وضع كريم أو زيت على الجلد ذلك اليوم.",
              "تخطيط العضلات بالإبرة، ويُجرى عادة في الموعد نفسه: تُدخَل إبرة رفيعة جداً في بضع عضلات للاستماع إلى نشاطها الكهربائي. هناك لسعة قصيرة عند الإدخال وألم خفيف كالكدمة ليوم. وهو ليس حقنة ولا يُحقن فيه شيء.",
              "أخبر من يجري الفحص إن كنت تتناول مميعاً للدم، أو لديك منظم ضربات أو مزيل رجفان مزروع، أو وذمة لمفية في طرف.",
              "ما يمكن أن يُظهره هذان الفحصان: أي عصب متأثر، وهل المشكلة انضغاط في نقطة محددة أم اعتلال أعصاب معمّم، وهل الضرر في العزل أم في الليفة نفسها، وكم مضى على المشكلة تقريباً.",
              "ما لا يمكن أن يُظهراه: اعتلال الألياف الصغيرة، الذي يسبب ألماً حارقاً مع تخطيط أعصاب طبيعي تماماً. النتيجة الطبيعية لا تعني أن أعراضك متخيّلة.",
              "رنين الرقبة أو العمود الفقري إن طُلب: من 20 إلى 30 دقيقة بلا حركة داخل نفق صوته مرتفع، بلا إشعاع وبلا ألم. صرّح مسبقاً عن أي معدن مزروع أو منظم ضربات أو حمل أو رهاب أماكن مغلقة.",
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
            text: "هناك هدفان منفصلان: تصحيح السبب حين يمكن إيجاده، والسيطرة على الأعراض بينما تتعافى الأعصاب. والأعصاب تتجدد ببطء — نحو ملّيمتر يومياً — لذا يُقاس التحسّن بالأشهر، وتوقّع نتيجة سريعة يدفع الناس إلى ترك علاجات كانت ستنجح.",
          },
          {
            type: "list",
            items: [
              "عالج السبب أولاً. ضبط السكر جيداً في السكري يبطئ التقدّم وهو أنجع تدخل منفرد. وتعويض B12 وتصحيح الغدة الدرقية وإيقاف الكحول أو تغيير دواء مسبب، كل منها قد يوقف الضرر أو يعكسه.",
              "نفق الرسغ: جبيرة رسغ تُلبس ليلاً فعّالة فعلاً في الحالات الخفيفة إلى المتوسطة وينبغي تجربتها أولاً. وحقنة الكورتيزون تريح كثيرين. وجراحة التحرير إجراء قصير في اليوم نفسه بنسبة نجاح عالية حين تستمر الأعراض أو يتأثر العصب بشكل ملحوظ.",
              "اعتلال العصب الزندي عند المرفق: تجنّب الاتكاء على المرفق واستخدام واقٍ للمرفق أو جبيرة ليلية تمنع الثني الكامل يفيد كثيرين.",
              "لألم الأعصاب، خيارات الخط الأول هي أميتريبتيلين أو دولوكسيتين أو جابابنتين أو بريجابالين. يمكن تجربة أيّها، وإن فشل الأول فالتحوّل إلى آخر هو المعتاد — إذ يحتاج نحو نصف المرضى إلى تجربة أكثر من دواء.",
              "تحتاج هذه الأدوية إلى رفع تدريجي للجرعة، وتستغرق أسبوعين إلى أربعة بجرعة كافية لإظهار الفائدة. والنعاس والدوخة وجفاف الفم شائعة في البداية وغالباً تهدأ.",
              "كريم الكابسايسين أو لصقة الكابسايسين عالية التركيز قد تفيد في ألم عصبي موضعي حين لا تناسب الأقراص.",
              "المشتقات الأفيونية والترامادول غير موصى بها لألم الأعصاب طويل الأمد — أداؤها ضعيف ومخاطرها حقيقية.",
              "العلاج الطبيعي والوظيفي يساعدان في التوازن وأمان المشي ووظيفة اليد، وهما مستخدمان أقل مما ينبغي.",
              "وضع أهداف واقعية مهم: تقليل الألم بنسبة 30 إلى 50 بالمئة نتيجة جيدة مع هذه الأدوية. أما الزوال الكامل فغير شائع.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "حماية القدمين الخدرتين",
            items: [
              "إن كنت لا تشعر بقدميك جيداً فلن تشعر بالإصابة أيضاً. افحص كلتا القدمين يومياً، بما في ذلك بين الأصابع وباطن القدم.",
              "لا تمشِ حافياً أبداً، بما في ذلك داخل المنزل وعلى الأسطح الساخنة — فحروق الرمل والبلاط الساخن خطر حقيقي هنا.",
              "اختبر ماء الاستحمام بيدك أو مرفقك لا بقدمك.",
              "احرص على حذاء مناسب المقاس وراجع أخصائي قدم بانتظام إن كنت مصاباً بالسكري.",
              "أبلغ فوراً عن أي جرح أو فقاعة أو احمرار أو قرحة بدل انتظار ما إذا كانت ستُشفى.",
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
            text: "تساعد التمارين في التنميل بطريقتين مختلفتين: التمارين الهوائية تحسّن ضبط السكر والتروية الدموية للأعصاب نفسها، وتمارين التوازن تعوّض المعلومات الحسية التي لم تعد القدمان قادرتين على توفيرها. وكلاهما تسنده أدلة ولا يحتاج أي منهما معدات.",
          },
          {
            type: "list",
            items: [
              "تمارين هوائية 30 دقيقة، خمس مرات أسبوعياً — مشي أو دراجة أو سباحة. في اعتلال الأعصاب السكري تبطئ التقدّم وتقلل الألم معاً.",
              "تمارين توازن يومياً: قف والقدمان متلاصقتان 30 ثانية، ثم كعب أمام إصبع، ثم على ساق واحدة — دائماً بجوار سطح مطبخ أو جدار يمكنك الإمساك به. لا تتقدّم إلا حين يصبح المستوى السابق سهلاً.",
              "الوقوف على أطراف الأصابع ثم على الكعبين، عشر مرات لكل منهما، مرتين يومياً، للحفاظ على قوة الكاحل وتقليل خطر التعثر.",
              "تدوير الكاحل وإطالة عضلة الساق الخلفية للحفاظ على مرونة الكاحل.",
              "نفق الرسغ: تمارين انزلاق العصب — تحريك الرسغ والأصابع عبر تسلسل من الأوضاع يتيح للعصب المتوسط الانزلاق بحرية. اطلب من أخصائي العلاج الطبيعي أن يريك إياها؛ فأداؤها الخاطئ يزيد الأعراض.",
              "خذ استراحات منتظمة من القبض المتكرر أو الطباعة أو الأدوات الاهتزازية، وأبقِ الرسغ في وضع محايد لا مثنياً.",
              "تمارين مقاومة مرتين أسبوعياً للساقين واليدين، لأن اعتلال الأعصاب يسبب ضعفاً تدريجياً إلى جانب التنميل.",
              "لتاي تشي أدلة جيدة في تقليل السقوط لدى من ضعف إحساس قدميهم.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع التنميل",
        blocks: [
          {
            type: "paragraph",
            text: "التنميل الذي عُرف سببه وعُولج غالباً يستقر أو يتحسّن. وحين لا يُعثر على سبب — وهذا يحدث لأقلية معتبرة — ينتقل التركيز إلى حماية القدمين ومنع السقوط وضبط الألم، وهذه التوليفة تعمل جيداً.",
          },
          {
            type: "list",
            items: [
              "السقوط هو الخطر العملي الأكبر. الإضاءة الجيدة وإزالة السجاد المتحرك وضوء ليلي على طريق الحمام والدرابزينات كلها أهم مما تبدو.",
              "النوم غالباً أكثر جوانب الحياة تضرراً. أدوية ألم الأعصاب المأخوذة ليلاً قد تعالج المشكلتين معاً — اذكر هذا لطبيبك.",
              "الكحول يزيد اعتلال الأعصاب سوءاً مباشرة وبشكل مستقل عن أي سبب آخر.",
              "إن كنت مصاباً بالسكري فضبط السكر ليس أمراً بعيد المدى فقط — بل يؤثر بشكل ملموس في ألم الأعصاب الآن.",
              "اسأل عن القيادة إن كان إحساس قدميك ضعيفاً بشكل ملحوظ.",
              "ألم الأعصاب المستمر يجلب معه عادة انخفاض المزاج والقلق. علاجهما يحسّن الألم، وليس تلميحاً إلى أن الألم نفسي.",
              "احتفظ بسجل بسيط لما ينفع وما لا ينفع؛ فالعلاج هنا سلسلة تجارب والسجل يختصرها.",
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
              "أي عصب أو أعصاب تعتقد أنها متأثرة، وعند أي مستوى؟",
              "هل فحصنا الأسباب القابلة للعلاج — السكري وB12 والغدة الدرقية وأدويتي؟",
              "هل أحتاج تخطيط أعصاب، وعن أي سؤال سيجيب؟",
              "إن كان تخطيط الأعصاب طبيعياً ولا تزال لديّ أعراض، فماذا بعد؟",
              "بأي دواء ستبدأ للألم، وكم من الوقت قبل أن أحكم عليه؟",
              "ما الذي يمكنني فعله لمنع تفاقم هذا؟",
              "هل ينبغي أن أراجع أخصائي قدم أو أخصائي علاج طبيعي؟",
              "ما الأعراض التي تعني أن أعود إليك بشكل عاجل؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
