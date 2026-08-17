import type { Condition } from "../schema";

export const stroke = {
  slug: "stroke-and-tia",
  categoryId: "vascular",
  status: "published",
  author: "Dr Mohamed Ismaiel, Neurologist, Dubai",
  reviewedDate: "2026-08-18",
  nextReviewDate: "2027-08-18",
  readTimeMinutes: 11,
  sources: [
    {
      label: "AHA/ASA — 2026 guideline for early management of acute ischaemic stroke",
      url: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000513",
    },
    {
      label: "NICE NG128 — Stroke and transient ischaemic attack",
      url: "https://www.nice.org.uk/guidance/ng128",
    },
    {
      label: "Mayo Clinic — Stroke: symptoms and causes",
      url: "https://www.mayoclinic.org/diseases-conditions/stroke/symptoms-causes/syc-20350113",
    },
    {
      label: "Mayo Clinic — Stroke: diagnosis and treatment",
      url: "https://www.mayoclinic.org/diseases-conditions/stroke/diagnosis-treatment/drc-20350119",
    },
    {
      label: "Cleveland Clinic — Transient ischaemic attack (TIA)",
      url: "https://my.clevelandclinic.org/health/diseases/14173-transient-ischemic-attack-tia-or-mini-stroke",
    },
    {
      label: "World Stroke Organization — Stroke resources",
      url: "https://www.world-stroke.org/world-stroke-day-campaign/about-stroke",
    },
  ],
  en: {
    title: "Stroke and TIA",
    summary:
      "A practical guide to recognising stroke with BE-FAST, acting safely in the first minutes, and understanding hospital treatment, prevention and recovery.",
    keyPoints: [
      "A new BE-FAST sign is a medical emergency — call 998 in the UAE, even if it improves.",
      "Record when the person was last known to be well; do not give food, drink, aspirin or other medicine.",
      "Urgent brain and blood-vessel imaging guides time-sensitive treatment.",
      "Prevention and rehabilitation are tailored to the cause and the person’s needs.",
    ],
    category: "Stroke care",
    metaTitle: "Stroke and TIA: symptoms, treatment and recovery | NeuroCare",
    metaDescription:
      "Clear bilingual patient guide to stroke and TIA: BE-FAST warning signs, UAE emergency action, hospital tests, modern treatment, prevention and recovery.",
    disclaimer:
      "This guide provides general patient education and cannot diagnose a stroke or replace individual medical care. If symptoms are new or sudden, call 998 in the UAE immediately.",
    sections: [
      {
        key: "understand",
        heading: "Understand stroke and TIA",
        blocks: [
          {
            type: "paragraph",
            text: "A stroke is a sudden injury to the brain’s blood supply. Most strokes are ischaemic, meaning a clot blocks an artery. Haemorrhagic stroke happens when a blood vessel ruptures and bleeds into or around the brain. Both can damage brain cells quickly, so treatment begins before every detail of the cause is known.",
          },
          {
            type: "paragraph",
            text: "A transient ischaemic attack (TIA) causes stroke-like symptoms that resolve. The recovery does not make it harmless: a TIA can be an early warning of a completed stroke, with the greatest risk often in the following hours and days. It needs urgent same-day assessment.",
          },
          {
            type: "list",
            items: [
              "Common causes include disease in a neck or brain artery, a clot travelling from the heart, or damage to very small vessels.",
              "High blood pressure is the leading modifiable risk; atrial fibrillation, diabetes, high cholesterol and smoking also matter.",
              "Stroke can occur at any age, although risk rises with age and with previous stroke or TIA.",
              "The symptoms depend on which brain area loses blood supply, not on how fit or healthy the person appears.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "Recognise the warning signs",
        blocks: [
          {
            type: "paragraph",
            text: "Use BE-FAST. A single sign that starts suddenly is enough to treat the situation as a possible stroke.",
          },
          {
            type: "list",
            items: [
              "B — Balance: sudden unsteadiness, loss of coordination, severe dizziness or an unexplained fall.",
              "E — Eyes: sudden loss or blurring of vision, double vision, or loss of one side of the visual field.",
              "F — Face: one side droops or feels numb; the smile becomes uneven.",
              "A — Arms: sudden weakness, heaviness or numbness in an arm or leg, usually on one side.",
              "S — Speech: slurred or absent speech, confused words, or difficulty understanding a simple sentence.",
              "T — Time: note when the person was last known to be well and call emergency services now.",
            ],
          },
          {
            type: "paragraph",
            text: "Other sudden symptoms can include a severe unexplained headache, new confusion, difficulty swallowing, loss of sensation, or collapse. Stroke is often painless. Do not dismiss symptoms because the person is young, the signs are mild, or they begin to improve.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "Act now: call 998 in the UAE",
            items: [
              "Ask for an ambulance; do not drive the person yourself unless emergency services direct you to.",
              "Write down the exact start time, or the last time the person was seen without symptoms.",
              "Keep the person safe and supported. If unconscious but breathing, place them on their side.",
              "Give nothing by mouth — no food, drink, aspirin or regular medicine — until swallowing and the stroke type are assessed.",
              "If the symptoms disappear, still go for urgent assessment. A possible TIA is not a routine clinic appointment.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "Assessment in hospital",
        blocks: [
          {
            type: "paragraph",
            text: "The stroke team works quickly to establish the time of onset, the neurological deficit and whether imaging shows a blocked artery or bleeding. A non-contrast CT scan is commonly the first test. CT angiography may be added immediately to look for a large-vessel blockage; MRI or perfusion imaging is useful in selected cases.",
          },
          {
            type: "list",
            items: [
              "A focused neurological examination and a blood-glucose check.",
              "Urgent CT or MRI of the brain, often with imaging of the head and neck arteries.",
              "Blood tests for blood count, clotting, kidney function, glucose and other treatment-relevant results.",
              "ECG and heart-rhythm monitoring to look for atrial fibrillation or another cardiac source.",
              "A swallow screen before food, drink or tablets to reduce the risk of aspiration.",
              "Later tests may include an echocardiogram, carotid ultrasound and longer heart monitoring, depending on the suspected cause.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "Information that helps the team",
            items: [
              "The last-known-well time and how the symptoms evolved.",
              "A current medicine list, especially blood thinners, and the time of the last dose.",
              "Recent surgery, bleeding, head injury, pregnancy or major illness.",
              "The person’s usual level of independence and any previous stroke symptoms.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "Treatment",
        blocks: [
          {
            type: "paragraph",
            text: "For eligible ischaemic stroke, intravenous thrombolysis can dissolve a clot. Current guidance supports alteplase or tenecteplase for suitable patients within 4.5 hours, and advanced imaging can identify selected people who may benefit later or when the exact onset is unknown. The team balances expected benefit against bleeding risk; mild-looking but disabling symptoms still require rapid specialist assessment.",
          },
          {
            type: "paragraph",
            text: "Mechanical thrombectomy removes a large clot through a catheter. It is offered to selected patients with an accessible large-vessel blockage, sometimes up to 24 hours after they were last known well when imaging shows brain tissue that may still be saved. Transfer to a comprehensive stroke centre may be required.",
          },
          {
            type: "paragraph",
            text: "Haemorrhagic stroke is treated differently. Priorities may include reversing blood-thinning medicine, careful blood-pressure management, controlling pressure in the skull and neurosurgical or endovascular treatment. This is why aspirin must not be given before brain imaging.",
          },
          {
            type: "list",
            items: [
              "Early care also covers oxygen when needed, temperature and glucose control, hydration, swallowing and prevention of complications.",
              "Secondary prevention is based on the cause: an antiplatelet for many non-cardioembolic strokes, or anticoagulation when atrial fibrillation is responsible.",
              "Blood-pressure, cholesterol and diabetes management, smoking cessation and physical activity reduce future risk.",
              "Significant carotid narrowing may need urgent surgery or, in selected situations, a stent.",
              "Do not start, stop or combine aspirin, clopidogrel or an anticoagulant without the treating clinician’s plan.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "Recovery and life after stroke",
        blocks: [
          {
            type: "paragraph",
            text: "Rehabilitation starts as soon as it is medically safe and may continue for months or longer. Physiotherapy addresses movement and balance; occupational therapy supports daily activities; speech and language therapy helps communication and swallowing. Goals should be meaningful to the person and reviewed as recovery changes.",
          },
          {
            type: "paragraph",
            text: "Fatigue, low mood, anxiety, pain, muscle stiffness, memory problems and changes in concentration are common after stroke and deserve active treatment. Family members may also need guidance and respite. Ask for help rather than assuming these problems are an unavoidable part of recovery.",
          },
          {
            type: "list",
            items: [
              "Take prevention medicines consistently and discuss side effects before stopping anything.",
              "Know your blood-pressure, cholesterol and glucose plan, and attend follow-up appointments.",
              "Build activity gradually with the rehabilitation team and use recommended mobility or home-safety aids.",
              "Ask about driving, work, air travel, fasting and exercise; the advice depends on deficits, seizures, treatment and UAE regulations.",
              "Treat any new BE-FAST symptom as another emergency, even if previous symptoms resolved.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "Questions for your appointment",
        blocks: [
          {
            type: "paragraph",
            text: "Bring your medicine list and, if possible, someone who knows what happened. These questions can help you leave with a clear plan.",
          },
          {
            type: "list",
            items: [
              "Was this an ischaemic stroke, a haemorrhage or a TIA, and what is the likely cause?",
              "Which tests are still needed to look for atrial fibrillation, artery disease or another source?",
              "Which medicine prevents another stroke, how long will I take it, and what should I do if I miss a dose?",
              "What are my individual targets for blood pressure, cholesterol and diabetes?",
              "Which rehabilitation therapies do I need and how will progress be measured?",
              "What symptoms or medicine side effects require urgent help?",
              "When can I safely drive, return to work, travel, fast and exercise?",
              "Who should I contact if recovery, mood, memory or caring at home becomes difficult?",
            ],
          },
        ],
      },
    ],
  },
  ar: {
    title: "السكتة الدماغية والنوبة الإقفارية العابرة",
    summary:
      "دليل عملي للتعرّف إلى السكتة باستخدام BE-FAST، والتصرف الآمن في الدقائق الأولى، وفهم العلاج والوقاية والتعافي.",
    keyPoints: [
      "ظهور أي علامة جديدة من BE-FAST حالة طارئة — اتصل بالرقم 998 في الإمارات حتى لو تحسنت الأعراض.",
      "سجّل آخر وقت كان فيه الشخص طبيعياً، ولا تعطِه طعاماً أو شراباً أو أسبرين أو أي دواء.",
      "يساعد التصوير العاجل للدماغ والشرايين على اختيار العلاج المناسب في الوقت المناسب.",
      "تُحدَّد الوقاية وإعادة التأهيل وفق سبب السكتة واحتياجات كل شخص.",
    ],
    category: "رعاية السكتة الدماغية",
    metaTitle: "السكتة الدماغية والنوبة العابرة: الأعراض والعلاج | NeuroCare",
    metaDescription:
      "دليل واضح عن السكتة الدماغية والنوبة العابرة: علامات BE-FAST، طوارئ الإمارات، الفحوص والعلاج الحديث والوقاية والتعافي.",
    disclaimer:
      "يقدم هذا الدليل معلومات عامة للمرضى، ولا يمكنه تشخيص السكتة أو استبدال الرعاية الطبية الفردية. عند ظهور أعراض جديدة أو مفاجئة اتصل بالرقم 998 في الإمارات فوراً.",
    sections: [
      {
        key: "understand",
        heading: "فهم السكتة والنوبة العابرة",
        blocks: [
          {
            type: "paragraph",
            text: "السكتة الدماغية إصابة مفاجئة تنتج من اضطراب تدفق الدم إلى الدماغ. معظم السكتات إقفارية بسبب جلطة تسد شرياناً، بينما تحدث السكتة النزفية عند تمزق وعاء دموي وتسرب الدم داخل الدماغ أو حوله. وفي الحالتين قد تتضرر خلايا الدماغ سريعاً، لذلك يبدأ التقييم والعلاج دون تأخير.",
          },
          {
            type: "paragraph",
            text: "تسبب النوبة الإقفارية العابرة أعراضاً تشبه السكتة ثم تزول. اختفاء الأعراض لا يعني أن الأمر بسيط؛ فقد تكون النوبة إنذاراً مبكراً لسكتة مكتملة، ويكون الخطر مرتفعاً خصوصاً خلال الساعات والأيام التالية. ولهذا تحتاج إلى تقييم عاجل في اليوم نفسه.",
          },
          {
            type: "list",
            items: [
              "قد يكون السبب مرضاً في أحد شرايين الرقبة أو الدماغ، أو جلطة انتقلت من القلب، أو تلف الأوعية الصغيرة.",
              "ارتفاع ضغط الدم أهم عامل يمكن تعديله، كما يزيد الخطر مع الرجفان الأذيني والسكري وارتفاع الكوليسترول والتدخين.",
              "يمكن أن تحدث السكتة في أي عمر، لكن الخطر يزداد مع التقدم في السن وبعد سكتة أو نوبة عابرة سابقة.",
              "تختلف الأعراض بحسب المنطقة التي انقطع عنها الدم، ولا علاقة لخطورتها بمظهر الشخص أو مستوى لياقته.",
            ],
          },
        ],
      },
      {
        key: "recognise",
        heading: "التعرّف إلى علامات الإنذار",
        blocks: [
          {
            type: "paragraph",
            text: "استخدم قاعدة BE-FAST. ظهور علامة واحدة بشكل مفاجئ يكفي للتعامل مع الحالة على أنها سكتة محتملة.",
          },
          {
            type: "list",
            items: [
              "B — التوازن: ترنح مفاجئ أو فقدان التناسق أو دوار شديد أو سقوط غير مفسر.",
              "E — العينان: فقدان أو تشوش مفاجئ في الرؤية، أو ازدواجها، أو فقدان جانب من مجال الإبصار.",
              "F — الوجه: تدلي جانب من الوجه أو تنميله، أو عدم تماثل الابتسامة.",
              "A — الذراعان: ضعف أو ثقل أو تنميل مفاجئ في ذراع أو ساق، غالباً في جهة واحدة.",
              "S — الكلام: تداخل الكلام أو غيابه، استخدام كلمات غير مناسبة، أو صعوبة فهم جملة بسيطة.",
              "T — الوقت: سجّل آخر وقت كان فيه الشخص طبيعياً واتصل بالطوارئ فوراً.",
            ],
          },
          {
            type: "paragraph",
            text: "قد تظهر أيضاً أعراض مفاجئة مثل صداع شديد غير معتاد، أو ارتباك جديد، أو صعوبة في البلع، أو فقدان الإحساس، أو انهيار مفاجئ. كثير من السكتات لا يسبب ألماً. لا تستبعد السكتة بسبب صغر السن أو خفة الأعراض أو بدء تحسنها.",
          },
          {
            type: "callout",
            tone: "emergency",
            title: "تصرف الآن: اتصل بالرقم 998 في الإمارات",
            items: [
              "اطلب سيارة إسعاف، ولا تنقل الشخص بسيارتك إلا إذا طلبت منك خدمات الطوارئ ذلك.",
              "دوّن وقت بدء الأعراض بدقة، أو آخر وقت شوهد فيه الشخص من دون أعراض.",
              "حافظ على سلامته وابقَ بجواره. إذا كان فاقد الوعي ويتنفس، ضعه على جانبه.",
              "لا تعطِه أي شيء عن طريق الفم — لا طعاماً أو شراباً أو أسبرين أو دواءه المعتاد — حتى يُقيَّم البلع ويُحدَّد نوع السكتة.",
              "إذا اختفت الأعراض، توجّه أيضاً للتقييم العاجل؛ فالنوبة العابرة المحتملة ليست موعداً روتينياً في العيادة.",
            ],
          },
        ],
      },
      {
        key: "assess",
        heading: "التقييم في المستشفى",
        blocks: [
          {
            type: "paragraph",
            text: "يعمل فريق السكتة بسرعة لتحديد وقت بدء الأعراض وشدتها وما إذا كان التصوير يُظهر انسداداً أو نزيفاً. غالباً تكون الأشعة المقطعية من دون صبغة هي الفحص الأول، وقد يُضاف تصوير الشرايين فوراً للبحث عن انسداد وعاء كبير. ويُستخدم الرنين المغناطيسي أو تصوير التروية في حالات مختارة.",
          },
          {
            type: "list",
            items: [
              "فحص عصبي مركز وقياس سريع لسكر الدم.",
              "تصوير عاجل للدماغ بالأشعة المقطعية أو الرنين، وغالباً تصوير شرايين الرأس والرقبة.",
              "تحاليل تشمل صورة الدم والتخثر ووظائف الكلى والسكر وغيرها مما يؤثر في قرار العلاج.",
              "تخطيط القلب ومراقبة النظم للبحث عن الرجفان الأذيني أو مصدر قلبي آخر.",
              "اختبار البلع قبل الطعام أو الشراب أو الأقراص لتقليل خطر دخولها إلى مجرى التنفس.",
              "قد تُطلب لاحقاً موجات صوتية على القلب أو الشرايين السباتية أو مراقبة أطول للقلب بحسب السبب المحتمل.",
            ],
          },
          {
            type: "callout",
            tone: "note",
            title: "معلومات تساعد الفريق",
            items: [
              "آخر وقت كان فيه الشخص طبيعياً وكيف تطورت الأعراض.",
              "قائمة الأدوية الحالية، وخصوصاً مميعات الدم، ووقت آخر جرعة.",
              "أي جراحة أو نزيف أو إصابة رأس حديثة، والحمل أو مرض شديد.",
              "مستوى الاستقلال المعتاد وأي أعراض سكتة سابقة.",
            ],
          },
        ],
      },
      {
        key: "treat",
        heading: "العلاج",
        blocks: [
          {
            type: "paragraph",
            text: "يمكن إذابة الجلطة بدواء وريدي لدى مرضى السكتة الإقفارية المؤهلين. تسمح الإرشادات الحالية باستخدام ألتيبلاز أو تينيكتيبلاز للحالات المناسبة خلال 4.5 ساعات، وقد يحدد التصوير المتقدم بعض من قد يستفيدون بعد ذلك أو عندما يكون وقت البداية غير معروف. يوازن الفريق بين الفائدة المتوقعة وخطر النزف، وحتى الأعراض التي تبدو خفيفة قد تكون معطِّلة وتحتاج إلى تقييم سريع.",
          },
          {
            type: "paragraph",
            text: "يُستخدم سحب الجلطة بالقسطرة لإزالة جلطة كبيرة من شريان مناسب. وقد يستفيد مرضى مختارون حتى 24 ساعة من آخر وقت كانوا فيه طبيعيين إذا أظهر التصوير وجود نسيج دماغي ما زال قابلاً للإنقاذ. وقد يتطلب ذلك النقل إلى مركز شامل لعلاج السكتات.",
          },
          {
            type: "paragraph",
            text: "تُعالج السكتة النزفية بطريقة مختلفة. وقد تشمل الأولويات عكس تأثير مميعات الدم، وضبط الضغط بعناية، وعلاج ارتفاع الضغط داخل الجمجمة، وإجراء تدخل جراحي أو بالقسطرة. ولهذا لا ينبغي إعطاء الأسبرين قبل تصوير الدماغ.",
          },
          {
            type: "list",
            items: [
              "تشمل الرعاية المبكرة الأكسجين عند الحاجة، وضبط الحرارة والسكر والسوائل، وتقييم البلع والوقاية من المضاعفات.",
              "تُبنى الوقاية الثانوية على السبب: مضاد للصفيحات في كثير من السكتات غير القلبية، أو مضاد للتخثر عندما يكون الرجفان الأذيني هو السبب.",
              "يساعد علاج الضغط والكوليسترول والسكري، والإقلاع عن التدخين، والنشاط البدني على خفض خطر التكرار.",
              "قد يحتاج التضيق الشديد في الشريان السباتي إلى جراحة عاجلة أو دعامة في حالات مختارة.",
              "لا تبدأ أو توقف أو تجمع بين الأسبرين أو كلوبيدوغريل أو مميعات الدم من دون خطة الطبيب المعالج.",
            ],
          },
        ],
      },
      {
        key: "live",
        heading: "التعافي والحياة بعد السكتة",
        blocks: [
          {
            type: "paragraph",
            text: "تبدأ إعادة التأهيل متى أصبحت الحالة مستقرة طبياً، وقد تستمر أشهراً أو أكثر. يعالج العلاج الطبيعي الحركة والتوازن، ويدعم العلاج الوظيفي أنشطة الحياة اليومية، ويساعد علاج النطق واللغة في التواصل والبلع. وينبغي أن تكون الأهداف مهمة للمريض وأن تُراجع مع تغير قدراته.",
          },
          {
            type: "paragraph",
            text: "الإرهاق وتدني المزاج والقلق والألم وتيبس العضلات ومشكلات الذاكرة والتركيز شائعة بعد السكتة وتستحق علاجاً فعالاً. وقد تحتاج الأسرة أيضاً إلى إرشاد ودعم. اطلب المساعدة ولا تفترض أن هذه الصعوبات جزء لا يمكن تغييره من التعافي.",
          },
          {
            type: "list",
            items: [
              "التزم بالأدوية الوقائية وناقش أي أثر جانبي قبل إيقاف دواء.",
              "اعرف خطة ضغط الدم والكوليسترول والسكر، وواظب على المتابعة.",
              "زد النشاط تدريجياً بالتعاون مع فريق التأهيل واستخدم وسائل الحركة أو أمان المنزل الموصى بها.",
              "اسأل عن القيادة والعمل والسفر جواً والصيام والرياضة؛ فالنصيحة تعتمد على الأعراض والنوبات والعلاج وقوانين الإمارات.",
              "تعامل مع أي علامة جديدة من BE-FAST كحالة طارئة أخرى، حتى لو زالت الأعراض السابقة.",
            ],
          },
        ],
      },
      {
        key: "ask",
        heading: "أسئلة للطبيب",
        blocks: [
          {
            type: "paragraph",
            text: "أحضر قائمة أدويتك، ويفضل أن يصحبك شخص يعرف ما حدث. تساعدك الأسئلة التالية على الخروج بخطة واضحة.",
          },
          {
            type: "list",
            items: [
              "هل كانت الحالة سكتة إقفارية أم نزفية أم نوبة عابرة، وما السبب المرجح؟",
              "ما الفحوص المتبقية للبحث عن الرجفان الأذيني أو مرض الشرايين أو مصدر آخر؟",
              "أي دواء يمنع سكتة أخرى، وكم سأستمر عليه، وماذا أفعل إذا نسيت جرعة؟",
              "ما أهداف ضغط الدم والكوليسترول والسكري المناسبة لي؟",
              "ما أنواع التأهيل التي أحتاجها وكيف سنقيس التقدم؟",
              "ما الأعراض أو الآثار الجانبية التي تستدعي مساعدة عاجلة؟",
              "متى أستطيع القيادة والعودة إلى العمل والسفر والصيام والرياضة بأمان؟",
              "بمن أتصل إذا أصبحت الحركة أو المزاج أو الذاكرة أو الرعاية المنزلية صعبة؟",
            ],
          },
        ],
      },
    ],
  },
} satisfies Condition;
