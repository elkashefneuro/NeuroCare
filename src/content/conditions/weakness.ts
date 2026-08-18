import type { Condition } from "../schema";

export const weakness = {
  slug: "weakness",
  categoryId: "neuromuscular",
  status: "in-review",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 8,
  sources: [
    {
      label: "National Institute of Neurological Disorders and Stroke — neuromuscular disorders",
      url: "https://www.ninds.nih.gov",
    },
    {
      label: "American Academy of Neurology — clinical guidelines",
      url: "https://www.aan.com/practice/guidelines",
    },
    {
      label: "Muscular Dystrophy Association — neuromuscular disease information",
      url: "https://www.mda.org",
    },
  ],
  en: {
    title: "Weakness",
    summary:
      "Telling true muscle weakness apart from fatigue, what the pattern of weakness reveals about its cause, and which patterns are emergencies.",
    category: "Nerve and muscle",
    metaTitle: "Weakness — NeuroCare",
    metaDescription:
      "Patient guide to weakness: fatigue versus true weakness, causes from stroke to myasthenia, red flags, nerve and muscle tests, treatment and exercise.",
    disclaimer:
      "This page is patient information, not a personal medical opinion. It does not replace assessment by a doctor. Medicine names are given so you can recognise them; which one suits you, at what dose, is a decision for your own doctor. In an emergency, call 998 immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand",
        blocks: [
          {
            type: "paragraph",
            text: "The word weakness is used for two entirely different things. Most people who say they feel weak mean fatigue — a lack of energy, with muscles that still work normally when tested. True neurological weakness means a muscle cannot generate its normal force, however hard you try. Separating these two is the first and most important step, because their causes barely overlap.",
          },
          {
            type: "paragraph",
            text: "Once true weakness is established, the pattern tells the story. Weakness of one side of the body points to the brain. Weakness below a level, in both legs, points to the spinal cord. Weakness worse in the hands and feet points to nerves. Weakness worse close to the trunk — shoulders and hips — points to muscle. And weakness that gets worse the more you use a muscle, and recovers with rest, points to the junction between nerve and muscle.",
          },
          {
            type: "list",
            items: [
              "Brain: sudden one-sided weakness — stroke until proved otherwise. Gradual one-sided weakness needs imaging.",
              "Spinal cord: both legs, often with a sensory level on the trunk and bladder symptoms. Always urgent.",
              "Nerve roots or peripheral nerves: a foot that drops, a hand that cannot grip, following a nerve's territory.",
              "Neuromuscular junction, as in myasthenia gravis: droopy eyelids, double vision, weakness worse in the evening, difficulty chewing towards the end of a meal.",
              "Muscle: difficulty rising from a chair, climbing stairs, or lifting the arms above the head, with normal sensation.",
              "Common medical causes of genuine weakness include thyroid disease, low potassium or calcium, vitamin D deficiency, and statin-related muscle problems.",
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
            text: "What a doctor wants to know is what you can no longer do, in concrete terms. 'I cannot climb the stairs without pulling on the rail' and 'my right hand drops the kettle' are far more useful than 'I feel weak'. Function tells the pattern; the pattern tells the cause.",
          },
          {
            type: "list",
            items: [
              "Proximal weakness: struggling to get out of a low chair or car, climbing stairs, hanging washing, or combing hair. Points towards muscle or inflammation.",
              "Distal weakness: tripping over a foot that catches, difficulty with buttons, keys or opening jars. Points towards nerve.",
              "Fatiguable weakness: fine in the morning, drooping eyelid or double vision by evening, voice fading during a long conversation, jaw tiring while eating. Points towards myasthenia.",
              "One-sided weakness with facial droop or speech difficulty: stroke.",
              "Weakness with muscle pain and dark urine after unusual exertion or a new medication can indicate muscle breakdown and needs urgent testing.",
              "Fatigue without true weakness: everything feels like an effort, but formal muscle testing is normal. Common in anaemia, thyroid disease, sleep apnoea, depression and after viral illness.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Weakness that is an emergency — call 998 or go to hospital",
            items: [
              "Sudden weakness of the face, arm or leg on one side, or sudden speech difficulty — this is a stroke. Call 998 immediately, even if it improves.",
              "Weakness climbing up from both legs over hours to days, with loss of reflexes — this can be Guillain-Barré syndrome.",
              "Any weakness with breathlessness, difficulty swallowing, a weak cough, or a change in voice — breathing muscles may be involved and this is time-critical.",
              "Weakness in both legs with bladder or bowel changes, or numbness around the saddle area — possible spinal cord or cauda equina compression.",
              "Rapidly progressive weakness over hours.",
              "Weakness after a fall or spinal injury.",
              "Severe muscle pain with dark, tea-coloured urine.",
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
            text: "The examination does most of the diagnostic work. By testing individual muscle groups, reflexes, tone and sensation, a neurologist can usually localise the problem to brain, cord, root, nerve, junction or muscle before any test is ordered — and that localisation determines which test is worth doing.",
          },
          {
            type: "list",
            items: [
              "Formal muscle power testing, group by group, comparing sides and comparing proximal with distal.",
              "Reflexes, tone and sensation, which separate central from peripheral causes.",
              "Watching you stand from a chair without using your arms, walk, and walk on heels and toes.",
              "Blood tests: creatine kinase for muscle damage, thyroid function, potassium, calcium, vitamin D, glucose, kidney and liver function, and inflammatory markers.",
              "Antibody tests for myasthenia gravis when fatiguable weakness is suspected.",
              "Nerve conduction studies and EMG, including repetitive stimulation if myasthenia is a possibility.",
              "MRI of the brain or spinal cord when a central cause is suspected.",
              "Muscle biopsy or muscle MRI in selected cases of suspected muscle disease.",
              "A medication review — statins, steroids, some antibiotics, diuretics and chemotherapy can all cause weakness.",
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
            text: "Nerve and muscle testing is the investigation people fear most and the one that most often gives the answer. It is uncomfortable rather than painful, and takes longer than most tests because each nerve and muscle has to be studied separately.",
          },
          {
            type: "list",
            items: [
              "Nerve conduction studies (NCV): sticky electrodes on the skin and brief electrical pulses over each nerve. Each pulse feels like a sharp tap or static shock lasting a fraction of a second, and may make your fingers or toes twitch. Around 30 to 45 minutes.",
              "EMG: a fine needle is placed in several muscles to record their electrical activity, at rest and while you contract gently. There is a sting on insertion and a bruised ache afterwards for a day. Nothing is injected. Expect several muscles to be sampled — this is normal, not a sign that something is wrong.",
              "Repetitive nerve stimulation, if myasthenia is suspected: the same nerve is stimulated several times in a row to see whether the response fades. This is more uncomfortable than standard testing but only lasts a few seconds at a time.",
              "Tell the person doing the test if you take a blood thinner, have a pacemaker or defibrillator, or have lymphoedema.",
              "If you have a suspected myasthenia diagnosis, ask whether to delay your pyridostigmine dose before testing — it can mask the abnormality.",
              "MRI brain or spine: 20 to 40 minutes lying still in a noisy tunnel, no radiation, no pain. Declare implanted metal, pacemakers, pregnancy or claustrophobia beforehand. If weakness makes lying flat or getting on the table difficult, tell the department in advance so they can help.",
              "EEG is not a test for weakness and has no routine role here.",
              "Muscle biopsy, if needed: a small sample taken under local anaesthetic through a cut of one to two centimetres, usually from the thigh. Day case, a few stitches, sore for a few days.",
              "Blood results usually come back within days; antibody and genetic tests can take several weeks.",
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
            text: "There is no single treatment for weakness — treatment follows the diagnosis, and the range is wide. What is common to almost every cause is that physiotherapy and occupational therapy matter as much as medication, and that they are consistently under-prescribed.",
          },
          {
            type: "list",
            items: [
              "Correct the treatable general causes first: thyroid disease, low potassium or calcium, vitamin D deficiency, anaemia and diabetes. Review statins and other medicines that can cause muscle problems.",
              "Stroke: urgent reperfusion treatment in the acute phase, then secondary prevention and intensive rehabilitation.",
              "Myasthenia gravis: pyridostigmine improves symptoms directly. Steroids and steroid-sparing medicines such as azathioprine or mycophenolate control the immune process. Rituximab is used in resistant disease, and newer targeted treatments — efgartigimod, rozanolixizumab, and complement inhibitors such as eculizumab, ravulizumab and zilucoplan — have substantially expanded the options. Removal of the thymus gland helps selected patients.",
              "Guillain-Barré syndrome and CIDP: immunoglobulin infusions or plasma exchange, given in hospital.",
              "Inflammatory muscle disease: steroids plus a steroid-sparing agent, sometimes with immunoglobulin.",
              "Motor neurone disease: riluzole slows progression modestly, and edaravone is available in some countries. Tofersen is licensed for the specific SOD1 genetic form. Multidisciplinary care — respiratory, nutritional, and communication support — makes the greatest difference to quality of life.",
              "Nerve compression causing focal weakness, such as foot drop or a wrist problem, may need decompression surgery.",
              "Practical aids matter: an ankle-foot orthosis for foot drop transforms walking safety, and a rail or a raised chair can restore independence at once.",
              "For fatigue without true weakness, treat the underlying cause and use graded activity rather than rest.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "If you have myasthenia, know your danger signs",
            items: [
              "Increasing breathlessness, especially lying flat, a weak cough, or difficulty clearing secretions needs immediate hospital assessment.",
              "Difficulty swallowing with choking on food or fluids is an emergency.",
              "Several common medicines can severely worsen myasthenia, including certain antibiotics and some heart medicines. Always tell any prescriber that you have myasthenia.",
              "Infections, surgery, pregnancy and heat can all trigger a deterioration. Have a plan agreed with your neurologist.",
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
            text: "The right exercise depends on the cause, and this is one area where general advice can genuinely be harmful. In most neuromuscular conditions, moderate exercise strengthens and protects. In a few — particularly some muscle diseases and motor neurone disease — exercising to exhaustion causes damage. Ask specifically what applies to you before starting.",
          },
          {
            type: "list",
            items: [
              "Get a physiotherapy assessment before starting a programme if you have a diagnosed neuromuscular condition. This is not a formality — the prescription genuinely differs by diagnosis.",
              "Sit-to-stand from a chair without using the arms, ten repetitions, twice daily. The best single test and exercise for hip and thigh strength.",
              "Heel raises and toe raises, ten each, to maintain ankle strength and reduce tripping.",
              "Step-ups onto a low step, holding a rail, building gradually.",
              "Resistance work for the shoulders and hips using light weights or bands, twice a week, if proximal weakness is the problem.",
              "Grip and hand exercises — squeezing a soft ball, pinching putty — for hand weakness.",
              "Aerobic exercise at a moderate level, where you can still hold a conversation. Twenty to thirty minutes, several times a week.",
              "Balance work beside a support, since weakness and falls travel together.",
              "The rule for most conditions: exercise to the point of moderate effort, never to exhaustion. If you are more weak the day after than before, you did too much.",
              "In myasthenia, plan activity for the morning when strength is best, and rest before rather than after you run out.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Living with weakness",
        blocks: [
          {
            type: "paragraph",
            text: "Whatever the cause, the practical priorities are the same: prevent falls, keep as much independence as possible, and get equipment and support early rather than after a crisis. Asking for a walking aid is not giving in — it is what keeps people walking.",
          },
          {
            type: "list",
            items: [
              "Ask for an occupational therapy assessment of your home. Rails, a raised toilet seat, a shower chair and a bed lever are small changes with large effects.",
              "Falls prevention: good lighting, clear floors, well-fitting shoes with a firm heel, and a night light.",
              "Energy management: plan demanding tasks for your strongest hours, break jobs into parts, and sit to do tasks you would normally stand for.",
              "Keep as active as your condition safely allows. Disuse weakness adds to disease weakness and is entirely preventable.",
              "Nutrition matters, particularly protein intake, if you are losing muscle.",
              "Tell your employer what you need. Adjusted duties, parking and flexible hours usually keep people in work.",
              "Ask about driving if a leg or arm is affected, and about adaptations that may allow you to continue.",
              "Take low mood and anxiety seriously and raise them. They are common with progressive weakness and they are treatable.",
              "For progressive conditions, ask about specialist nurse support early. Access is usually better before a crisis.",
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
              "Is this true weakness or fatigue, and how did you tell?",
              "Where in the nervous system do you think the problem is?",
              "Which tests do I need, and what will each one tell us?",
              "Have the treatable general causes — thyroid, vitamin D, potassium, my medicines — been checked?",
              "What is the likely course, and how quickly does it usually change?",
              "What exercise is safe for me specifically, and what should I avoid?",
              "Can I be referred to physiotherapy and occupational therapy?",
              "What symptoms mean I should go to hospital immediately?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "الضعف",
    summary:
      "التفريق بين الضعف العضلي الحقيقي والإرهاق، وما يكشفه نمط الضعف عن سببه، وأي الأنماط حالات طارئة.",
    category: "الأعصاب والعضلات",
    metaTitle: "الضعف — NeuroCare",
    metaDescription:
      "دليل المريض للضعف: الإرهاق مقابل الضعف الحقيقي، الأسباب من السكتة إلى الوهن العضلي، علامات الخطر، فحوصات الأعصاب والعضلات، العلاج والتمارين.",
    disclaimer:
      "هذه الصفحة معلومات للمرضى وليست رأياً طبياً شخصياً، ولا تغني عن تقييم الطبيب. أسماء الأدوية مذكورة لتتعرف عليها فقط؛ أما اختيار الدواء وجرعته فقرار طبيبك. في الطوارئ اتصل بالرقم 998 فوراً.",
    sections: [
      {
        key: "understand",
        heading: "الفهم",
        blocks: [
          {
            type: "paragraph",
            text: "تُستخدم كلمة «ضعف» للدلالة على أمرين مختلفين تماماً. فمعظم من يقول إنه يشعر بالضعف يقصد الإرهاق — نقص الطاقة مع عضلات تعمل بشكل طبيعي عند فحصها. أما الضعف العصبي الحقيقي فيعني أن العضلة لا تستطيع توليد قوتها الطبيعية مهما حاولت. والتفريق بينهما هو الخطوة الأولى والأهم، لأن أسبابهما لا تكاد تتقاطع.",
          },
          {
            type: "paragraph",
            text: "وحين يثبت الضعف الحقيقي، يروي النمط القصة. فالضعف في جانب واحد من الجسم يشير إلى الدماغ، والضعف تحت مستوى معيّن في الساقين معاً يشير إلى الحبل الشوكي، والضعف الأشد في اليدين والقدمين يشير إلى الأعصاب، والضعف الأشد قرب الجذع — الكتفان والوركان — يشير إلى العضلات. أما الضعف الذي يزداد كلما استخدمت العضلة ويتحسّن بالراحة فيشير إلى الوصل بين العصب والعضلة.",
          },
          {
            type: "list",
            items: [
              "الدماغ: ضعف مفاجئ في جانب واحد — سكتة دماغية حتى يثبت العكس. والضعف التدريجي في جانب واحد يحتاج أشعة.",
              "الحبل الشوكي: الساقان معاً، غالباً مع مستوى حسي على الجذع وأعراض بولية. وهو دائماً عاجل.",
              "جذور الأعصاب أو الأعصاب الطرفية: قدم تسقط، أو يد لا تقبض، تتبع منطقة عصب محدد.",
              "الوصل العصبي العضلي، كما في الوهن العضلي الوبيل: تدلّي الجفون وازدواج الرؤية وضعف يسوء مساءً وصعوبة في المضغ قرب نهاية الوجبة.",
              "العضلات: صعوبة النهوض من الكرسي أو صعود الدرج أو رفع الذراعين فوق الرأس، مع إحساس طبيعي.",
              "من الأسباب الطبية الشائعة للضعف الحقيقي أمراض الغدة الدرقية ونقص البوتاسيوم أو الكالسيوم ونقص فيتامين D ومشاكل العضلات المرتبطة بأدوية الكوليسترول.",
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
            text: "ما يريد الطبيب معرفته هو ما لم تعد قادراً على فعله، بعبارات محددة. فعبارة «لا أستطيع صعود الدرج دون شدّ الدرابزين» و«يدي اليمنى تُسقط الإبريق» أنفع بكثير من «أشعر بالضعف». الوظيفة تكشف النمط، والنمط يكشف السبب.",
          },
          {
            type: "list",
            items: [
              "الضعف القريب من الجذع: صعوبة النهوض من كرسي منخفض أو من السيارة، وصعود الدرج، ونشر الغسيل، وتمشيط الشعر. يشير نحو العضلات أو الالتهاب.",
              "الضعف البعيد عن الجذع: التعثر بقدم تتعلق، وصعوبة في الأزرار أو المفاتيح أو فتح البرطمانات. يشير نحو الأعصاب.",
              "الضعف القابل للإجهاد: بخير صباحاً، ثم تدلّي جفن أو ازدواج رؤية مساءً، وصوت يخفت خلال محادثة طويلة، وفك يتعب أثناء الأكل. يشير نحو الوهن العضلي.",
              "ضعف في جانب واحد مع انحراف في الوجه أو صعوبة في الكلام: سكتة دماغية.",
              "ضعف مع ألم عضلي وبول داكن بعد مجهود غير معتاد أو دواء جديد قد يدل على تحلّل العضلات ويحتاج فحصاً عاجلاً.",
              "إرهاق دون ضعف حقيقي: كل شيء يبدو مجهداً، لكن فحص العضلات الرسمي طبيعي. شائع في فقر الدم وأمراض الغدة الدرقية وانقطاع النفس النومي والاكتئاب وبعد الأمراض الفيروسية.",
            ],
          },
          {
            type: "callout",
            tone: "emergency",
            title: "ضعف يُعدّ حالة طارئة — اتصل بالرقم 998 أو اذهب إلى المستشفى",
            items: [
              "ضعف مفاجئ في الوجه أو الذراع أو الساق في جانب واحد، أو صعوبة مفاجئة في الكلام — هذه سكتة دماغية. اتصل بالرقم 998 فوراً حتى لو تحسّن.",
              "ضعف يصعد من الساقين معاً خلال ساعات إلى أيام مع فقدان المنعكسات — قد تكون متلازمة غيلان باريه.",
              "أي ضعف مع ضيق تنفس أو صعوبة بلع أو سعال ضعيف أو تغيّر في الصوت — قد تكون عضلات التنفس متورطة وهذا حساس للوقت.",
              "ضعف في الساقين معاً مع تغيّرات في المثانة أو الأمعاء، أو تنميل حول منطقة السرج — ضغط محتمل على الحبل الشوكي أو ذيل الفرس.",
              "ضعف يتفاقم بسرعة خلال ساعات.",
              "ضعف بعد سقوط أو إصابة في العمود الفقري.",
              "ألم عضلي شديد مع بول داكن بلون الشاي.",
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
            text: "الفحص يؤدي معظم العمل التشخيصي. فبفحص مجموعات العضلات والمنعكسات والتوتر والإحساس، يستطيع طبيب الأعصاب عادة تحديد موقع المشكلة — دماغ أو حبل شوكي أو جذر أو عصب أو وصل أو عضلة — قبل طلب أي فحص، وهذا التحديد هو ما يقرر أي فحص يستحق الإجراء.",
          },
          {
            type: "list",
            items: [
              "فحص رسمي لقوة العضلات مجموعة مجموعة، بمقارنة الجانبين ومقارنة القريب من الجذع بالبعيد عنه.",
              "المنعكسات والتوتر والإحساس، وهي التي تفصل الأسباب المركزية عن الطرفية.",
              "مراقبتك وأنت تنهض من الكرسي دون استخدام ذراعيك، وتمشي، وتمشي على كعبيك وأطراف أصابعك.",
              "تحاليل دم: إنزيم الكرياتين كيناز لضرر العضلات، ووظائف الغدة الدرقية، والبوتاسيوم، والكالسيوم، وفيتامين D، والسكر، ووظائف الكلى والكبد، ودلالات الالتهاب.",
              "فحوص الأجسام المضادة للوهن العضلي الوبيل عند الاشتباه بضعف قابل للإجهاد.",
              "تخطيط الأعصاب والعضلات، بما في ذلك التنبيه المتكرر إن كان الوهن العضلي وارداً.",
              "رنين مغناطيسي للدماغ أو الحبل الشوكي عند الاشتباه بسبب مركزي.",
              "خزعة عضلية أو رنين للعضلات في حالات مختارة يُشتبه فيها بمرض عضلي.",
              "مراجعة الأدوية — فأدوية الكوليسترول والكورتيزون وبعض المضادات الحيوية ومدرات البول والعلاج الكيميائي كلها قد تسبب ضعفاً.",
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
            text: "فحص الأعصاب والعضلات هو أكثر ما يخشاه الناس وأكثر ما يعطي الإجابة. وهو مزعج لا مؤلم، ويستغرق وقتاً أطول من معظم الفحوصات لأن كل عصب وكل عضلة تُدرس على حدة.",
          },
          {
            type: "list",
            items: [
              "تخطيط الأعصاب (NCV): أقطاب لاصقة على الجلد ونبضات كهربائية قصيرة فوق كل عصب. كل نبضة تُحسّ كنقرة حادة أو شحنة ساكنة تستمر جزءاً من الثانية، وقد تجعل أصابعك ترتعش. نحو 30 إلى 45 دقيقة.",
              "تخطيط العضلات بالإبرة: تُوضع إبرة رفيعة في عدة عضلات لتسجيل نشاطها الكهربائي، أثناء الراحة وأثناء انقباض خفيف. هناك لسعة عند الإدخال وألم كالكدمة ليوم. ولا يُحقن شيء. توقّع فحص عدة عضلات — وهذا طبيعي وليس علامة على وجود خطب ما.",
              "التنبيه العصبي المتكرر، عند الاشتباه بالوهن العضلي: يُنبّه العصب نفسه عدة مرات متتالية لمعرفة ما إذا كانت الاستجابة تخفت. أكثر إزعاجاً من الفحص المعتاد لكنه يستمر ثوانٍ في كل مرة.",
              "أخبر من يجري الفحص إن كنت تتناول مميعاً للدم، أو لديك منظم ضربات أو مزيل رجفان، أو وذمة لمفية.",
              "إن كان لديك تشخيص مشتبه بالوهن العضلي، فاسأل عن تأجيل جرعة البيريدوستيغمين قبل الفحص — إذ قد تُخفي الخلل.",
              "رنين الدماغ أو العمود الفقري: من 20 إلى 40 دقيقة بلا حركة داخل نفق صوته مرتفع، بلا إشعاع وبلا ألم. صرّح مسبقاً عن معادن مزروعة أو منظم ضربات أو حمل أو رهاب أماكن مغلقة. وإن كان الضعف يصعّب الاستلقاء أو الصعود إلى الطاولة فأخبر القسم مسبقاً ليساعدوك.",
              "تخطيط الدماغ الكهربائي ليس فحصاً للضعف ولا دور روتيني له هنا.",
              "الخزعة العضلية عند الحاجة: عينة صغيرة تُؤخذ تحت تخدير موضعي عبر شقّ من سنتيمتر إلى سنتيمترين، غالباً من الفخذ. في اليوم نفسه، مع بضع غرز، وألم لأيام قليلة.",
              "تعود نتائج الدم عادة خلال أيام؛ أما فحوص الأجسام المضادة والفحوص الجينية فقد تستغرق أسابيع.",
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
            text: "لا يوجد علاج واحد للضعف — فالعلاج يتبع التشخيص والمدى واسع. والمشترك في كل الأسباب تقريباً أن العلاج الطبيعي والعلاج الوظيفي لا يقلان أهمية عن الدواء، وأنهما يُوصفان باستمرار أقل مما ينبغي.",
          },
          {
            type: "list",
            items: [
              "صحّح الأسباب العامة القابلة للعلاج أولاً: أمراض الغدة الدرقية ونقص البوتاسيوم أو الكالسيوم ونقص فيتامين D وفقر الدم والسكري. وراجع أدوية الكوليسترول وغيرها مما قد يسبب مشاكل عضلية.",
              "السكتة الدماغية: علاج إعادة التروية العاجل في المرحلة الحادة، ثم الوقاية الثانوية والتأهيل المكثّف.",
              "الوهن العضلي الوبيل: البيريدوستيغمين يحسّن الأعراض مباشرة. والكورتيزون والأدوية المُقلّلة للكورتيزون مثل الأزاثيوبرين أو الميكوفينولات تضبط العملية المناعية. ويُستخدم الريتوكسيماب في المرض المقاوم، كما وسّعت علاجات موجّهة أحدث — إيفغارتيجيمود وروزانوليكسيزوماب ومثبطات المتمّمة مثل إيكوليزوماب ورافوليزوماب وزيلوكوبلان — الخيارات بشكل كبير. واستئصال الغدة الزعترية يفيد مرضى مختارين.",
              "متلازمة غيلان باريه واعتلال الأعصاب المزمن: تسريب الغلوبيولين المناعي أو تبادل البلازما، ويُعطى في المستشفى.",
              "مرض العضلات الالتهابي: كورتيزون مع دواء مُقلّل للكورتيزون، وأحياناً مع الغلوبيولين المناعي.",
              "مرض العصبون الحركي: الريلوزول يبطئ التقدّم بشكل متواضع، والإيدارافون متاح في بعض الدول. والتوفيرسين مرخّص للشكل الجيني المحدد SOD1. أما الرعاية متعددة التخصصات — دعم التنفس والتغذية والتواصل — فهي الأكثر تأثيراً في جودة الحياة.",
              "انضغاط العصب المسبب لضعف موضعي، مثل سقوط القدم أو مشكلة في الرسغ، قد يحتاج جراحة تحرير.",
              "الوسائل المساعدة مهمة: جبيرة الكاحل والقدم لسقوط القدم تُحدث فرقاً كبيراً في أمان المشي، ودرابزين أو كرسي مرتفع قد يعيد الاستقلالية فوراً.",
              "للإرهاق دون ضعف حقيقي، عالج السبب الكامن واستخدم النشاط المتدرج بدل الراحة.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "إن كان لديك وهن عضلي، فاعرف علامات الخطر",
            items: [
              "ازدياد ضيق التنفس، خاصة عند الاستلقاء، أو سعال ضعيف، أو صعوبة في إخراج الإفرازات، يحتاج تقييماً فورياً في المستشفى.",
              "صعوبة البلع مع الشرقة بالطعام أو السوائل حالة طارئة.",
              "عدة أدوية شائعة قد تُسوئ الوهن العضلي بشدة، منها مضادات حيوية معينة وبعض أدوية القلب. أخبر دائماً أي طبيب يصف لك دواءً بأن لديك وهناً عضلياً.",
              "العدوى والجراحة والحمل والحرارة كلها قد تُحدث تدهوراً. ليكن لديك خطة متفق عليها مع طبيب الأعصاب.",
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
            text: "التمرين المناسب يعتمد على السبب، وهذا أحد المجالات التي قد تكون فيها النصيحة العامة ضارة فعلاً. ففي معظم الأمراض العصبية العضلية تُقوّي التمارين المعتدلة وتحمي. لكن في قليل منها — خاصة بعض أمراض العضلات ومرض العصبون الحركي — يسبب التمرين حتى الإنهاك ضرراً. اسأل تحديداً عما ينطبق عليك قبل البدء.",
          },
          {
            type: "list",
            items: [
              "احصل على تقييم من أخصائي علاج طبيعي قبل بدء أي برنامج إن كان لديك مرض عصبي عضلي مشخّص. هذا ليس إجراءً شكلياً — فالوصفة تختلف فعلاً باختلاف التشخيص.",
              "النهوض من الكرسي دون استخدام الذراعين، عشر تكرارات، مرتين يومياً. أفضل اختبار وتمرين منفرد لقوة الورك والفخذ.",
              "الوقوف على أطراف الأصابع ثم على الكعبين، عشر مرات لكل منهما، للحفاظ على قوة الكاحل وتقليل التعثر.",
              "الصعود على درجة منخفضة مع الإمساك بدرابزين، والتدرّج تدريجياً.",
              "تمارين مقاومة للكتفين والوركين بأوزان خفيفة أو أشرطة مطاطية، مرتين أسبوعياً، إن كان الضعف قريباً من الجذع.",
              "تمارين القبضة واليد — عصر كرة طرية أو معجون — لضعف اليد.",
              "تمارين هوائية بمستوى معتدل بحيث تستطيع مواصلة الحديث. من عشرين إلى ثلاثين دقيقة، عدة مرات أسبوعياً.",
              "تمارين التوازن بجوار مسند، لأن الضعف والسقوط يسيران معاً.",
              "القاعدة في معظم الحالات: تمرّن حتى مستوى جهد معتدل لا حتى الإنهاك. فإن كنت أضعف في اليوم التالي مما كنت قبله، فقد بالغت.",
              "في الوهن العضلي، خطّط للنشاط في الصباح حين تكون القوة في أفضل حالاتها، واسترح قبل أن تنفد طاقتك لا بعدها.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعايش مع الضعف",
        blocks: [
          {
            type: "paragraph",
            text: "أياً كان السبب، فالأولويات العملية واحدة: منع السقوط، والحفاظ على أكبر قدر من الاستقلالية، والحصول على المعدات والدعم مبكراً لا بعد وقوع أزمة. وطلب وسيلة مساعدة للمشي ليس استسلاماً — بل هو ما يُبقي الناس يمشون.",
          },
          {
            type: "list",
            items: [
              "اطلب تقييماً من أخصائي علاج وظيفي لمنزلك. الدرابزينات ومقعد المرحاض المرتفع وكرسي الاستحمام وذراع السرير تغييرات صغيرة بأثر كبير.",
              "منع السقوط: إضاءة جيدة وأرضيات خالية وحذاء مناسب بكعب ثابت وضوء ليلي.",
              "إدارة الطاقة: خطّط للمهام الشاقة في أقوى ساعاتك، وقسّم الأعمال إلى أجزاء، واجلس لأداء ما تفعله عادة واقفاً.",
              "ابقَ نشطاً بقدر ما تسمح حالتك بأمان. فضعف قلة الاستخدام يُضاف إلى ضعف المرض وهو قابل للمنع تماماً.",
              "التغذية مهمة، خاصة تناول البروتين، إن كنت تفقد كتلة عضلية.",
              "أخبر جهة عملك بما تحتاجه. تعديل المهام ومواقف السيارات والساعات المرنة تُبقي الناس في أعمالهم عادة.",
              "اسأل عن القيادة إن كانت ساق أو ذراع متأثرة، وعن التعديلات التي قد تتيح لك الاستمرار.",
              "خذ انخفاض المزاج والقلق على محمل الجد واطرحهما. فهما شائعان مع الضعف التدريجي وقابلان للعلاج.",
              "في الحالات التقدمية، اسأل عن دعم ممرض متخصص مبكراً. فالوصول إليه أسهل عادة قبل الأزمة.",
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
              "هل هذا ضعف حقيقي أم إرهاق، وكيف عرفت؟",
              "أين تعتقد أن المشكلة في الجهاز العصبي؟",
              "ما الفحوصات التي أحتاجها، وما الذي سيخبرنا به كل منها؟",
              "هل فُحصت الأسباب العامة القابلة للعلاج — الغدة الدرقية وفيتامين D والبوتاسيوم وأدويتي؟",
              "ما المسار المتوقع، وبأي سرعة يتغيّر عادة؟",
              "ما التمارين الآمنة لي تحديداً، وما الذي ينبغي أن أتجنبه؟",
              "هل يمكن إحالتي إلى العلاج الطبيعي والعلاج الوظيفي؟",
              "ما الأعراض التي تعني أن أذهب إلى المستشفى فوراً؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
