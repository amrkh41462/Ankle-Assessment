// ============================================
// Ankle 101 Assessment — Internationalization
// Bilingual: Arabic (default) + English
// ============================================

const I18n = {
  currentLang: 'ar',

  strings: {
    // ==========================================
    // Welcome Screen
    // ==========================================
    'welcome.badge': {
      ar: 'ANKLE ASSESSMENT',
      en: 'ANKLE ASSESSMENT'
    },
    'welcome.title': {
      ar: 'هل كاحلك... ثابت <em>فعلاً؟</em>',
      en: 'How Stable Is Your Ankle, <em>Really?</em>'
    },
    'welcome.subtitle': {
      ar: 'أداة فحص شاملة مصممة للرياضيين. اكتشف مشاكل الثبات الخفية، واختبر القدرة الوظيفية الحقيقية لكاحلك، واحصل على خطوات عملية لاستعادة ثقتك.',
      en: 'A comprehensive screening tool built for athletes. Identify hidden instability, test your ankle\'s true functional capacity, and get actionable steps to rebuild confidence.'
    },
    'welcome.feature1.title': {
      ar: 'الفحص الذاتي',
      en: 'Subjective Screen'
    },
    'welcome.feature1.desc': {
      ar: 'التاريخ المرضي، الثقة والجاهزية النفسية',
      en: 'History, confidence & psychological readiness'
    },
    'welcome.feature2.title': {
      ar: 'اختبارات الإجهاد البدني',
      en: 'Physical Stress Tests'
    },
    'welcome.feature2.desc': {
      ar: 'التوازن، التحمل والقوة الانفجارية',
      en: 'Balance, endurance & power'
    },
    'welcome.feature3.title': {
      ar: 'نتائج مخصصة',
      en: 'Personalized Results'
    },
    'welcome.feature3.desc': {
      ar: 'مستوى الثبات، خريطة العجز وخطوات عملية',
      en: 'Stability tier, deficit map & actionable steps'
    },
    'welcome.startBtn': {
      ar: 'ابدأ التقييم',
      en: 'Start Assessment'
    },
    'welcome.time': {
      ar: 'يستغرق تقريباً ٥ دقائق',
      en: 'Takes approximately 5 minutes'
    },

    // ==========================================
    // Progress Labels
    // ==========================================
    'progress.phase1': {
      ar: 'المرحلة ١',
      en: 'Phase 1'
    },
    'progress.phase2': {
      ar: 'المرحلة ٢',
      en: 'Phase 2'
    },
    'progress.results': {
      ar: 'النتائج',
      en: 'Results'
    },

    // ==========================================
    // Sport Selection
    // ==========================================
    'sport.title': {
      ar: 'ما هي رياضتك؟',
      en: 'What sport do you play?'
    },
    'sport.subtitle': {
      ar: 'اختر الرياضة الرئيسية التي تمارسها.',
      en: 'Select the main sport you play.'
    },
    'sport.opt1.label': {
      ar: 'كرة القدم',
      en: 'Football'
    },
    'sport.opt2.label': {
      ar: 'كرة السلة',
      en: 'Basketball'
    },
    'sport.opt3.label': {
      ar: 'كرة الطائرة / كرة اليد',
      en: 'Volleyball / Handball'
    },
    'sport.opt4.label': {
      ar: 'التنس / البادل',
      en: 'Tennis / Padel'
    },
    'sport.opt5.label': {
      ar: 'أخرى',
      en: 'Other'
    },

    // ==========================================
    // Phase 1 — Instability History
    // ==========================================
    'phase1.label': {
      ar: 'المرحلة ١ — تاريخ عدم الثبات',
      en: 'Phase 1 — Instability History'
    },

    // Q1 — Sprain Count
    'q1.title': {
      ar: 'كم مرة التوى كاحلك؟',
      en: 'How many times have you sprained this ankle?'
    },
    'q1.subtitle': {
      ar: 'اشمل أي مرة انثنى أو التفّ أو انخلع بشكل ملحوظ.',
      en: 'Include any time it rolled, twisted, or gave way significantly.'
    },
    'q1.opt1.label': {
      ar: 'أبداً',
      en: 'Never'
    },
    'q1.opt1.desc': {
      ar: 'لا يوجد تاريخ لالتواء الكاحل',
      en: 'No history of ankle sprains'
    },
    'q1.opt2.label': {
      ar: 'مرة واحدة',
      en: 'Once'
    },
    'q1.opt2.desc': {
      ar: 'حادثة منفردة واحدة',
      en: 'A single isolated incident'
    },
    'q1.opt3.label': {
      ar: '٢–٣ مرات',
      en: '2–3 times'
    },
    'q1.opt3.desc': {
      ar: 'التواءات متعددة على مر الوقت',
      en: 'Multiple sprains over time'
    },
    'q1.opt4.label': {
      ar: '٤ مرات أو أكثر',
      en: '4+ times'
    },
    'q1.opt4.desc': {
      ar: 'التواءات متكررة ومتتالية',
      en: 'Recurring, repeated sprains'
    },

    // Q2 — Last Sprain
    'q2.title': {
      ar: 'متى كانت آخر مرة التوى أو انخلع فيها كاحلك؟',
      en: 'How recently was your last sprain or giving-way episode?'
    },
    'q2.subtitle': {
      ar: 'فكّر في آخر مرة شعرت فيها بعدم ثبات كاحلك أو انثنى.',
      en: 'Think about the last time your ankle felt unstable or rolled.'
    },
    'q2.opt1.label': {
      ar: 'أكثر من سنة',
      en: 'Over a year ago'
    },
    'q2.opt1.desc': {
      ar: 'مضى أكثر من ١٢ شهراً على آخر حادثة',
      en: 'More than 12 months since last episode'
    },
    'q2.opt2.label': {
      ar: '٦–١٢ شهراً',
      en: '6–12 months ago'
    },
    'q2.opt2.desc': {
      ar: 'خلال السنة الماضية',
      en: 'Within the past year'
    },
    'q2.opt3.label': {
      ar: '١–٦ أشهر',
      en: '1–6 months ago'
    },
    'q2.opt3.desc': {
      ar: 'حادثة حديثة نسبياً',
      en: 'Relatively recent episode'
    },
    'q2.opt4.label': {
      ar: 'خلال الشهر الماضي',
      en: 'Within the last month'
    },
    'q2.opt4.desc': {
      ar: 'حديث جداً — لا يزال في مرحلة التعافي',
      en: 'Very recent — still recovering'
    },

    // Q3 — Giving Way
    'q3.title': {
      ar: 'كم مرة ينخلع كاحلك أو تشعر أنه قد ينثني؟',
      en: 'How often does your ankle "give way" or feel like it might roll?'
    },
    'q3.subtitle': {
      ar: 'أثناء الرياضة، المشي على أرض غير مستوية، أو الأنشطة اليومية.',
      en: 'During sport, walking on uneven ground, or daily activities.'
    },
    'q3.opt1.label': {
      ar: 'أبداً',
      en: 'Never'
    },
    'q3.opt1.desc': {
      ar: 'يبدو ثابتاً تماماً في كل الأوقات',
      en: 'Feels completely stable at all times'
    },
    'q3.opt2.label': {
      ar: 'نادراً',
      en: 'Rarely'
    },
    'q3.opt2.desc': {
      ar: 'فقط في المواقف القصوى أو عند الإرهاق الشديد',
      en: 'Only in extreme situations or high fatigue'
    },
    'q3.opt3.label': {
      ar: 'أحياناً',
      en: 'Sometimes'
    },
    'q3.opt3.desc': {
      ar: 'أثناء الرياضة أو على أرض غير مستوية',
      en: 'During sport or on uneven ground'
    },
    'q3.opt4.label': {
      ar: 'كثيراً',
      en: 'Frequently'
    },
    'q3.opt4.desc': {
      ar: 'حتى أثناء الأنشطة اليومية العادية',
      en: 'Even during everyday activities'
    },

    // ==========================================
    // Phase 1 — Psychological Confidence
    // ==========================================
    'confidence.label': {
      ar: 'المرحلة ١ — الثقة النفسية',
      en: 'Phase 1 — Psychological Confidence'
    },
    'confidence.q1.title': {
      ar: 'ما مدى ثقتك في كاحلك أثناء تغيير الاتجاه، القفز، أو الهبوط؟',
      en: 'How confident do you feel in your ankle during cutting, jumping, or landing?'
    },
    'confidence.q1.subtitle': {
      ar: 'فكّر في الحركات العالية الشدة وغير المتوقعة في رياضتك.',
      en: 'Think about high-intensity, unpredictable movements in your sport.'
    },
    'confidence.slider.low': {
      ar: 'لا ثقة',
      en: 'No confidence'
    },
    'confidence.slider.high': {
      ar: 'ثقة كاملة',
      en: 'Full confidence'
    },
    'confidence.q2.title': {
      ar: 'ما مدى تأثير الخوف من الإصابة مجدداً على أدائك؟',
      en: 'How much does fear of re-injury affect your performance?'
    },
    'confidence.q2.subtitle': {
      ar: 'هل القلق بشأن كاحلك يعيقك أثناء التدريب أو المنافسة؟',
      en: 'Does worry about your ankle hold you back during training or competition?'
    },
    'confidence.fear.low': {
      ar: 'يعيقني باستمرار',
      en: 'Constantly holds me back'
    },
    'confidence.fear.high': {
      ar: 'لا خوف على الإطلاق',
      en: 'No fear at all'
    },
    'confidence.next': {
      ar: 'متابعة',
      en: 'Continue'
    },

    // Confidence slider labels
    'confidence.level.1': { ar: 'لا ثقة على الإطلاق', en: 'No confidence at all' },
    'confidence.level.2': { ar: 'ثقة منخفضة جداً', en: 'Very low confidence' },
    'confidence.level.3': { ar: 'ثقة منخفضة', en: 'Low confidence' },
    'confidence.level.4': { ar: 'أقل من المتوسط', en: 'Below average' },
    'confidence.level.5': { ar: 'ثقة متوسطة', en: 'Moderate confidence' },
    'confidence.level.6': { ar: 'ثقة لا بأس بها', en: 'Fairly confident' },
    'confidence.level.7': { ar: 'ثقة جيدة', en: 'Good confidence' },
    'confidence.level.8': { ar: 'ثقة عالية', en: 'High confidence' },
    'confidence.level.9': { ar: 'ثقة عالية جداً', en: 'Very high confidence' },
    'confidence.level.10': { ar: 'ثقة كاملة', en: 'Full confidence' },

    // Fear slider labels
    'fear.level.1': { ar: 'يعيقني باستمرار', en: 'Constantly holds me back' },
    'fear.level.2': { ar: 'عائق كبير', en: 'Major limitation' },
    'fear.level.3': { ar: 'خوف ملحوظ', en: 'Significant fear' },
    'fear.level.4': { ar: 'خوف واضح', en: 'Noticeable fear' },
    'fear.level.5': { ar: 'تأثير متوسط', en: 'Moderate impact' },
    'fear.level.6': { ar: 'قلق بسيط', en: 'Minor concern' },
    'fear.level.7': { ar: 'نادراً ما يكون مشكلة', en: 'Rarely an issue' },
    'fear.level.8': { ar: 'شبه معدوم', en: 'Almost no fear' },
    'fear.level.9': { ar: 'تأثير ضئيل', en: 'Minimal impact' },
    'fear.level.10': { ar: 'لا خوف على الإطلاق', en: 'No fear at all' },

    // ==========================================
    // Phase 2 — Transition
    // ==========================================
    'phase2.transition.icon': {
      ar: '⚡',
      en: '⚡'
    },
    'phase2.transition.label': {
      ar: 'المرحلة ٢',
      en: 'Phase 2'
    },
    'phase2.transition.title': {
      ar: 'اختبارات الإجهاد البدني',
      en: 'Physical Stress Tests'
    },
    'phase2.transition.desc': {
      ar: 'الآن سنختبر القدرة الوظيفية الحقيقية لكاحلك. ستقوم بإجراء ٣ اختبارات بدنية سريعة لتقييم التوازن والتحمل والقوة الانفجارية.',
      en: 'Now let\'s test your ankle\'s real functional capacity. You\'ll perform 3 quick physical tests to assess balance, endurance, and explosive power.'
    },
    'phase2.transition.start': {
      ar: 'ابدأ الاختبارات',
      en: 'Begin Tests'
    },

    // ==========================================
    // Balance Test
    // ==========================================
    'balance.label': {
      ar: 'المرحلة ٢ — التحكم بالتوازن',
      en: 'Phase 2 — Balance Control'
    },
    'balance.title': {
      ar: 'اختبار التوازن على رجل واحدة بعينين مغلقتين',
      en: 'Single-Leg Balance Hold — Eyes Closed'
    },
    'balance.purpose': {
      ar: 'تقييم الحس العميق والتحكم العصبي العضلي.',
      en: 'Assessing proprioception and neuromuscular control.'
    },
    'balance.instructions.title': {
      ar: 'التعليمات',
      en: 'Instructions'
    },
    'balance.step1': {
      ar: 'قف على رجلك المصابة',
      en: 'Stand on your affected leg'
    },
    'balance.step2': {
      ar: 'ارفع قدمك الأخرى عن الأرض',
      en: 'Lift your opposite foot off the ground'
    },
    'balance.step3': {
      ar: 'أغمض عينيك وأبقِ ذراعيك مسترخيتين',
      en: 'Close your eyes and keep your arms relaxed'
    },
    'balance.step4': {
      ar: 'استمر أطول مدة ممكنة (حد أقصى ٣٠ ثانية)',
      en: 'Hold as long as you can (max 30 seconds)'
    },
    'balance.step5': {
      ar: 'اضغط "فقدت توازني" عندما لا تستطيع الاستمرار',
      en: 'Tap "I Lost Balance" when you can\'t hold it'
    },
    'balance.timer.unit': {
      ar: 'ثانية',
      en: 'seconds'
    },
    'balance.start': {
      ar: 'ابدأ المؤقت',
      en: 'Start Timer'
    },
    'balance.stop': {
      ar: 'فقدت توازني',
      en: 'I Lost Balance'
    },

    // ==========================================
    // Calf Raise Test
    // ==========================================
    'calf.label': {
      ar: 'المرحلة ٢ — تحمل عضلة الساق',
      en: 'Phase 2 — Calf Endurance'
    },
    'calf.title': {
      ar: 'اختبار تحمل رفع الكعب على رجل واحدة',
      en: 'Single-Leg Calf Raise Endurance'
    },
    'calf.purpose': {
      ar: 'قياس تحمل عضلات الساق وقدرة امتصاص القوة.',
      en: 'Measuring plantar flexor endurance and force-absorption capacity.'
    },
    'calf.instructions.title': {
      ar: 'التعليمات',
      en: 'Instructions'
    },
    'calf.step1': {
      ar: 'قف على رجلك المصابة بالقرب من حائط للاستناد الخفيف',
      en: 'Stand on your affected leg near a wall for light support'
    },
    'calf.step2': {
      ar: 'ارتفع على أصابع قدمك لأعلى ما يمكن',
      en: 'Rise up onto your toes as high as possible'
    },
    'calf.step3': {
      ar: 'انزل للأسفل بتحكم',
      en: 'Lower back down with control'
    },
    'calf.step4': {
      ar: 'اضغط الزر أدناه لكل تكرار مكتمل',
      en: 'Tap the button below for each completed rep'
    },
    'calf.step5': {
      ar: 'توقف عندما لا تستطيع الوصول للارتفاع الكامل',
      en: 'Stop when you can no longer reach full height'
    },
    'calf.counter.label': {
      ar: 'تكرارات مكتملة',
      en: 'reps completed'
    },
    'calf.tapBtn': {
      ar: 'اضغط لكل تكرار',
      en: 'Tap For Each Rep'
    },
    'calf.doneBtn': {
      ar: 'انتهيت — لا أستطيع المزيد',
      en: 'Done — Can\'t Do More'
    },

    // ==========================================
    // Side Hop Test
    // ==========================================
    'sidehop.label': {
      ar: 'المرحلة ٢ — القوة والانفجارية',
      en: 'Phase 2 — Power & Explosiveness'
    },
    'sidehop.title': {
      ar: 'اختبار القفز الجانبي',
      en: 'Side Hop Test'
    },
    'sidehop.purpose': {
      ar: 'تقييم القوة الانفجارية والتحكم الديناميكي والثبات أثناء الحركة المتكررة.',
      en: 'Assessing explosive power, dynamic control, and stability during repetitive movement.'
    },
    'sidehop.instructions.title': {
      ar: 'التعليمات',
      en: 'Instructions'
    },
    'sidehop.step1': {
      ar: 'ضع شريطاً لاصقاً أو حدد خطاً على الأرض بعرض ٣٠ سم تقريباً',
      en: 'Place tape or mark a line on the ground approximately 30cm (12 in) wide'
    },
    'sidehop.step2': {
      ar: 'قف على رجلك المصابة بجانب الخط',
      en: 'Stand on your affected leg beside the line'
    },
    'sidehop.step3': {
      ar: 'اقفز جانبياً ذهاباً وإياباً فوق الخط بأسرع ما يمكن',
      en: 'Hop side-to-side over the line as quickly as you can'
    },
    'sidehop.step4': {
      ar: 'استمر لمدة ٣٠ ثانية مع الحفاظ على التحكم والتوازن',
      en: 'Continue for 30 seconds while maintaining control and balance'
    },
    'sidehop.step5': {
      ar: 'ركز على الهبوط بخفة وثبات في كل قفزة',
      en: 'Focus on landing softly and staying stable with each hop'
    },
    'sidehop.step6': {
      ar: 'قيّم تجربتك بصدق أدناه',
      en: 'Rate your experience honestly below'
    },
    'sidehop.opt1.label': {
      ar: 'أكملت بسلاسة تامة',
      en: 'Completed smoothly'
    },
    'sidehop.opt1.desc': {
      ar: '٣٠ ثانية كاملة بتحكم وإيقاع ثابت بدون ألم أو تردد',
      en: 'Full 30 seconds with steady rhythm, full control, and no pain or hesitation'
    },
    'sidehop.opt2.label': {
      ar: 'أكملت مع انزعاج بسيط',
      en: 'Completed with mild discomfort'
    },
    'sidehop.opt2.desc': {
      ar: 'أنهيت الـ ٣٠ ثانية لكن لاحظت عدم استقرار خفيف أو انزعاج بسيط قرب النهاية',
      en: 'Finished the 30 seconds but noticed mild instability or slight discomfort toward the end'
    },
    'sidehop.opt3.label': {
      ar: 'أكملت جزئياً',
      en: 'Partially completed'
    },
    'sidehop.opt3.desc': {
      ar: 'اضطررت للتبطيء بشكل ملحوظ أو التوقف مؤقتاً بسبب عدم الاستقرار أو الانزعاج',
      en: 'Had to slow down significantly or pause due to instability, hesitation, or moderate discomfort'
    },
    'sidehop.opt4.label': {
      ar: 'لم أستطع الإكمال',
      en: 'Unable to complete'
    },
    'sidehop.opt4.desc': {
      ar: 'توقفت مبكراً بسبب الألم أو الخوف أو فقدان التوازن',
      en: 'Stopped early due to pain, apprehension, or loss of balance'
    },

    // ==========================================
    // Calculating
    // ==========================================
    'calculating.text': {
      ar: 'جارٍ تحليل نتائجك…',
      en: 'Analyzing your results…'
    },

    // ==========================================
    // Results
    // ==========================================
    'results.header': {
      ar: 'نتائج تقييمك',
      en: 'Your Assessment Results'
    },
    'results.scoreTotal': {
      ar: '/ ١٠٠',
      en: '/ 100'
    },
    'results.acuteWarning.title': {
      ar: '⚠️ تنبيه مهم',
      en: '⚠️ Important Advisory'
    },
    'results.acuteWarning.text': {
      ar: 'بناءً على إجاباتك، قد تكون إصابتك لا تزال في المرحلة الحادة. ننصح بمراجعة أخصائي طب رياضي قبل البدء بأي برنامج تأهيل. التوصيات أدناه لا تزال ذات صلة لكن يجب مناقشتها مع مقدم الرعاية الصحية أولاً.',
      en: 'Based on your responses, your injury may still be in the acute phase. We recommend seeing a sports medicine professional before beginning any rehab protocol. The recommendations below are still relevant but should be discussed with your healthcare provider first.'
    },
    'results.insights.title': {
      ar: '🧠 ماذا يعني هذا',
      en: '🧠 What This Means'
    },
    'results.actionSteps.title': {
      ar: 'خطواتك القادمة',
      en: 'Your Next Steps'
    },
    'results.cta.title': {
      ar: 'مستعد للنظام الكامل؟',
      en: 'Ready for the Complete System?'
    },
    'results.cta.button': {
      ar: 'احصل على النظام الكامل ←',
      en: 'Get The Full System →'
    },
    'results.retake': {
      ar: 'إعادة التقييم',
      en: 'Retake Assessment'
    },

    // ==========================================
    // Email Gateway
    // ==========================================
    'emailGate.title': {
      ar: 'نتائجك جاهزة تقريباً!',
      en: 'Your Results Are Almost Ready!'
    },
    'emailGate.desc': {
      ar: 'أدخل بريدك الإلكتروني لعرض تقرير تقييمك المفصل.',
      en: 'Enter your email to view your detailed assessment report.'
    },
    'emailGate.placeholder': {
      ar: 'بريدك الإلكتروني',
      en: 'Your email address'
    },
    'emailGate.submit': {
      ar: 'عرض النتائج',
      en: 'View My Results'
    },
    'emailGate.error': {
      ar: 'يرجى إدخال بريد إلكتروني صالح',
      en: 'Please enter a valid email address'
    },

    // ==========================================
    // Tier Labels
    // ==========================================
    'tier.severe.label': { ar: 'عدم ثبات شديد', en: 'Severe Instability' },
    'tier.severe.sublabel': { ar: 'خطورة عالية', en: 'High Risk' },
    'tier.moderate.label': { ar: 'عدم ثبات مزمن متوسط', en: 'Moderate CAI' },
    'tier.moderate.sublabel': { ar: 'خطورة مرتفعة', en: 'Elevated Risk' },
    'tier.mild.label': { ar: 'عدم ثبات خفيف', en: 'Mild Instability' },
    'tier.mild.sublabel': { ar: 'يحتاج متابعة', en: 'Monitoring Needed' },
    'tier.optimal.label': { ar: 'مستوى ممتاز', en: 'Optimal Baseline' },
    'tier.optimal.sublabel': { ar: 'خطورة منخفضة', en: 'Low Risk' },

    // ==========================================
    // Category Labels (for bars + radar chart)
    // ==========================================
    'cat.history': { ar: 'تاريخ عدم الثبات', en: 'Instability History' },
    'cat.confidence': { ar: 'الثقة', en: 'Confidence' },
    'cat.balance': { ar: 'التحكم بالتوازن', en: 'Balance Control' },
    'cat.endurance': { ar: 'تحمل عضلة الساق', en: 'Calf Endurance' },
    'cat.power': { ar: 'القوة والانفجارية', en: 'Power & Explosiveness' },

    // ==========================================
    // Insights per tier
    // ==========================================
    'insight.severe': {
      ar: 'تشير نتائجك إلى عدم ثبات ملحوظ في عدة مجالات. قدرة كاحلك على الاستجابة والتثبيت وامتصاص القوة أقل بكثير مما هو مطلوب للأداء الرياضي الآمن.\n\nهذا لا يتعلق بالقوة — جهازك العصبي فقد قدرته على حماية المفصل أثناء الحركات غير المتوقعة. النمط هنا يتوافق مع عدم ثبات الكاحل المزمن المتقدم، حيث تعرض المفصل لصدمات متكررة وتضررت آليات الحماية في الجسم.\n\nالرياضيون في هذا المستوى معرضون بشكل كبير لإصابات إضافية إذا عادوا للرياضة بدون برنامج إعادة بناء منظم.',
      en: 'Your results indicate significant instability across multiple areas. Your ankle\'s ability to react, stabilize, and absorb force is well below what\'s needed for safe athletic performance.\n\nThis isn\'t about strength — your nervous system has lost its ability to protect the joint during unpredictable movements. The pattern here is consistent with advanced Chronic Ankle Instability, where the joint has been through repeated trauma and the body\'s protective mechanisms have been compromised.\n\nAthletes at this level are at high risk for further injury if they return to sport without a structured rebuilding protocol.'
    },
    'insight.moderate': {
      ar: 'التحكم بالتوازن لديك ضمن نطاق معقول، لكن ثبات الاستجابة وثقة الهبوط تشير إلى أن كاحلك قد يواجه صعوبة أثناء القطع أو تغيير الاتجاه غير المتوقع.\n\nهذا النمط يتوافق مع عدم ثبات الكاحل المزمن — حيث شُفي المفصل هيكلياً لكن الجهاز العصبي لم يتعلم بالكامل كيفية حمايته.\n\nالرياضيون في هذا المستوى غالباً يشعرون بأنهم "بخير" أثناء الحركة المستقيمة لكن يلاحظون عدم الثبات أثناء المتطلبات الرياضية. الخطر ليس فورياً — إنه تراكمي. كل حلقة من عدم الثبات تعزز النمط.',
      en: 'Your balance control is within a reasonable range, but your reactive stability and landing confidence suggest your ankle may struggle during unpredictable cutting or direction changes.\n\nThis pattern is consistent with Chronic Ankle Instability — where the joint has healed structurally but the nervous system hasn\'t fully re-learned how to protect it.\n\nAthletes at this level often feel "fine" during straight-line movement but notice instability during sport-specific demands. The risk isn\'t immediate — it\'s cumulative. Each episode of instability reinforces the pattern.'
    },
    'insight.mild': {
      ar: 'يُظهر كاحلك أساساً جيداً، لكن هناك عجز دقيق قد يصبح مقيّداً تحت المتطلبات الرياضية عالية الشدة.\n\nالمجالات التي سجلت فيها أقل تشير إلى أن قدرة مفصلك الاستجابية — قدرته على التعامل مع غير المتوقع — لم تلحق بالكامل بقوتك. كثير من الرياضيين في هذا المستوى يؤدون بشكل جيد في التدريب لكن يواجهون مشاكل أثناء المنافسة عندما يزداد الإرهاق وعدم القدرة على التنبؤ.\n\nهذه هي المرحلة الأكثر شيوعاً حيث يتوقف الرياضيون — يشعرون بأنهم "جيدون بما يكفي" لكن لا يحصّنون المفصل بالكامل.',
      en: 'Your ankle shows a solid baseline, but there are subtle deficits that could become limiting under high-intensity athletic demands.\n\nThe areas where you scored lower suggest your joint\'s reactive capacity — its ability to handle the unexpected — hasn\'t fully caught up with your strength. Many athletes at this level perform well in practice but experience issues during competition when fatigue and unpredictability increase.\n\nThis is the most common stage where athletes plateau — feeling "good enough" but never fully bulletproofing the joint.'
    },
    'insight.optimal': {
      ar: 'يُظهر كاحلك أداءً قوياً في جميع المجالات المختبرة. ثباتك وثقتك وقدرتك البدنية متوافقة بشكل جيد مع المتطلبات الرياضية.\n\nهذا لا يعني أن الصيانة يجب أن تتوقف — الرياضيون الذين يبقون خالين من الإصابات هم الذين يستمرون في تدريب الثبات الاستجابي كجزء من روتينهم. جهازك العصبي يتكيف بسرعة، لكنه أيضاً يفقد التكيف بسرعة بدون تحفيز مستمر.\n\nاستمر في تحدي كاحلك بمتطلبات تقدمية ومحددة للرياضة للحفاظ على هذا المستوى.',
      en: 'Your ankle shows strong performance across all tested areas. Your stability, confidence, and physical capacity are well-aligned for athletic demands.\n\nThis doesn\'t mean maintenance should stop — the athletes who stay injury-free are the ones who continue training reactive stability as part of their routine. Your nervous system adapts quickly, but it also de-adapts quickly without consistent stimulus.\n\nKeep challenging your ankle with progressive, sport-specific demands to maintain this baseline.'
    },
    'insight.weakest': {
      ar: '\n\nأكبر عجز لديك هو في {label} ({pct}٪). يجب أن يكون هذا مجال تركيزك الأساسي.',
      en: '\n\nYour most significant deficit is in {label} ({pct}%). This should be your primary focus area.'
    },

    // ==========================================
    // Action Steps per tier
    // ==========================================
    'action.severe.1.title': { ar: 'تدريب التوازن اليومي', en: 'Daily Balance Training' },
    'action.severe.1.desc': {
      ar: 'قف على رجلك المصابة لمدة ٢ دقيقة يومياً — بعيون مفتوحة أولاً، ثم تقدم لعيون مغلقة. هذا يعيد بناء الاتصال الحسي العميق الأساسي الذي فقده كاحلك.',
      en: 'Stand on your affected leg for 2 minutes daily — eyes open first, then progress to eyes closed. This rebuilds the foundational proprioceptive connection your ankle has lost.'
    },
    'action.severe.2.title': { ar: 'رفع الكعب المتحكم', en: 'Controlled Calf Raises' },
    'action.severe.2.desc': {
      ar: 'أدِّ ٣ مجموعات من ٨ رفعات كعب على رجل واحدة مع تثبيت ٣ ثوانٍ في الأعلى. ركّز على الثبات وليس السرعة. هذا يعيد بناء نظام امتصاص القوة.',
      en: 'Perform 3 sets of 8 single-leg calf raises with a 3-second hold at the top. Focus on stability, not speed. This rebuilds the force-absorption system.'
    },
    'action.severe.3.title': { ar: 'تجنب التدريب الارتدادي — حالياً', en: 'Avoid Reactive Training — For Now' },
    'action.severe.3.desc': {
      ar: 'لا تحاول القطع أو القفز أو الحركات الانفجارية حتى تثبت تمارين التوازن على رجل واحدة لأكثر من ٣٠ ثانية باستمرار. ابنِ الأساس أولاً.',
      en: 'Do not attempt cutting, jumping, or explosive movements until basic single-leg stability holds for 30+ seconds consistently. Build the foundation first.'
    },
    'action.moderate.1.title': { ar: 'التوازن على سطح غير مستقر', en: 'Unstable Surface Balance' },
    'action.moderate.1.desc': {
      ar: 'تدرّب على التوازن على رجل واحدة على وسادة أو لوح إسفنجي — ٣ مجموعات من ٣٠ ثانية. هذا يتحدى نظامك الحسي العميق بما يتجاوز أساسيات الأرض المستوية.',
      en: 'Train single-leg balance on a pillow or foam pad — 3 sets of 30 seconds. This challenges your proprioceptive system beyond flat-ground basics.'
    },
    'action.moderate.2.title': { ar: 'تدريب الاضطراب', en: 'Perturbation Training' },
    'action.moderate.2.desc': {
      ar: 'أثناء الوقوف على رجل واحدة، اطلب من شخص أن يدفعك بخفة عند الكتف أو الورك. كاحلك يجب أن يتعلم الاستجابة لقوى غير متوقعة — ليس فقط الثبات.',
      en: 'During single-leg stance, have someone lightly push your shoulder or hip. Your ankle must learn to react to unexpected forces — not just hold still.'
    },
    'action.moderate.3.title': { ar: 'تمارين ارتدادية منخفضة المستوى', en: 'Low-Level Reactive Drills' },
    'action.moderate.3.desc': {
      ar: 'ابدأ بقفزات وتثبيت على رجل واحدة. ابدأ بقفزات أمامية، ثم تقدم لجانبية. ثبّت كل هبوط لمدة ٣ ثوانٍ بدون أي اهتزاز قبل التقدم.',
      en: 'Begin single-leg hop-and-stick landings. Start with forward hops, progress to lateral. Hold each landing for 3 seconds with zero wobble before progressing.'
    },
    'action.mild.1.title': { ar: 'سلسلة القفز متعددة الاتجاهات', en: 'Multi-Directional Hop Series' },
    'action.mild.1.desc': {
      ar: 'تقدم لقفزات على رجل واحدة في جميع الاتجاهات — أمامي، جانبي، قُطري، دوراني. كل هبوط يجب أن يكون متحكماً لمدة ٢ ثانية قبل التالي.',
      en: 'Progress to single-leg hops in all directions — forward, lateral, diagonal, rotational. Each landing must be controlled for 2 seconds before the next.'
    },
    'action.mild.2.title': { ar: 'تباطؤ محدد للرياضة', en: 'Sport-Specific Deceleration' },
    'action.mild.2.desc': {
      ar: 'أدرج تمارين القطع والتوقف بشدة ٧٠٪. ركّز على التباطؤ المتحكم — اللحظة التي يكون فيها كاحلك أكثر عرضة أثناء الرياضة.',
      en: 'Incorporate cutting and stopping drills at 70% intensity. Focus on controlled deceleration — the moment your ankle is most vulnerable during sport.'
    },
    'action.mild.3.title': { ar: 'معيار الهبوط من الصندوق', en: 'The Box Drop Benchmark' },
    'action.mild.3.desc': {
      ar: 'هل تستطيع تثبيت هبوط على رجل واحدة من ارتفاع ٢٠ سم بدون أي اهتزاز؟ استخدم هذا كمعيارك. عندما تستطيع فعله ١٠/١٠ مرات، أنت تقترب من الجاهزية.',
      en: 'Can you stick a single-leg landing from an 8-inch drop with zero wobble? Use this as your benchmark. When you can do it 10/10 times, you\'re approaching readiness.'
    },
    'action.optimal.1.title': { ar: 'حافظ على التدريب الارتدادي', en: 'Maintain Reactive Training' },
    'action.optimal.1.desc': {
      ar: 'أبقِ تمارين التوازن الارتدادي في إحمائك ٢–٣ مرات أسبوعياً. ٥ دقائق كافية. جهازك العصبي يتكيف بسرعة، لكنه أيضاً يفقد التكيف بسرعة.',
      en: 'Keep reactive balance work in your warm-up 2-3× per week. 5 minutes is enough. Your nervous system adapts fast, but it also loses adaptation fast.'
    },
    'action.optimal.2.title': { ar: 'تمارين بليومترية عالية المستوى', en: 'High-Level Plyometrics' },
    'action.optimal.2.desc': {
      ar: 'تقدم لقفزات العمق والوثبات الجانبية والقفزات متعددة الاتجاهات تحت الإرهاق. الهدف هو الأداء تحت الضغط، وليس فقط في ظروف متحكمة.',
      en: 'Progress to depth jumps, lateral bounds, and multi-directional hops under fatigue. The goal is performance under stress, not just controlled conditions.'
    },
    'action.optimal.3.title': { ar: 'إعادة اختبار دورية', en: 'Periodic Retesting' },
    'action.optimal.3.desc': {
      ar: 'أعد هذا التقييم كل ٤–٦ أسابيع. اكتشاف التراجع مبكراً — قبل أن يصبح عدم ثبات — هو ما يفصل الرياضيين المرنين عن المصابين.',
      en: 'Retake this assessment every 4–6 weeks. Catching regression early — before it becomes instability — is what separates resilient athletes from injured ones.'
    },

    // ==========================================
    // CTA Copy per tier
    // ==========================================
    'cta.severe': {
      ar: 'في مستواك الحالي، محاولة برمجة تدريب ارتدادي بنفسك تحمل مخاطر حقيقية. نظام Ankle Bulletproof يوفر التقدم الدقيق مرحلة بمرحلة المصمم للرياضيين الذين يبدؤون من عدم ثبات ملحوظ — لتعيد البناء بشكل منهجي وليس عشوائي.',
      en: 'At your current level, attempting to self-program reactive training carries real risk. The Ankle Bulletproof System provides the exact phase-by-phase progression designed for athletes starting from significant instability — so you rebuild systematically, not randomly.'
    },
    'cta.moderate': {
      ar: 'هذه الخطوات ستساعد — لكنها مجرد نقطة البداية. نظام Ankle Bulletproof هو التقدم الكامل والمرحلي المصمم للرياضيين في مستواك بالضبط من عدم الثبات. ينقلك من حيث أنت الآن إلى الثقة الكاملة بالعودة للرياضة.',
      en: 'These steps will help — but they\'re only the starting point. The Ankle Bulletproof System is the complete, phased progression built for athletes at your exact level of instability. It takes you from where you are now to full return-to-sport confidence.'
    },
    'cta.mild': {
      ar: 'أنت قريب — لكن "قريب" هو حيث يبقى معظم الرياضيين للأبد. نظام Ankle Bulletproof يوفر التقدم المنظم والبروتوكولات المحددة للرياضة لسد الفجوة بين "جيد بما يكفي" وحصين فعلاً.',
      en: 'You\'re close — but "close" is where most athletes stay forever. The Ankle Bulletproof System provides the structured progression and sport-specific protocols to close the gap between "good enough" and genuinely bulletproof.'
    },
    'cta.optimal': {
      ar: 'لقد بنيت أساساً قوياً. نظام Ankle Bulletproof يتضمن بروتوكولات صيانة متقدمة وتدريب ارتدادي على مستوى الأداء ليبقيك عند هذا المستوى — ويدفعك لما هو أبعد.',
      en: 'You\'ve built a strong foundation. The Ankle Bulletproof System includes advanced maintenance protocols and performance-level reactive training to keep you at this baseline — and push beyond it.'
    },

    // ==========================================
    // Language Toggle
    // ==========================================
    'lang.toggle.ar': { ar: 'EN', en: 'EN' },
    'lang.toggle.en': { ar: 'عربي', en: 'عربي' }
  },

  // ------------------------------------------
  // Get a translated string
  // ------------------------------------------
  t(key) {
    const entry = this.strings[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['en'] || key;
  },

  // ------------------------------------------
  // Get a specific language's string
  // ------------------------------------------
  get(lang, key) {
    const entry = this.strings[key];
    if (!entry) return key;
    return entry[lang] || entry['en'] || key;
  },

  // ------------------------------------------
  // Switch language
  // ------------------------------------------
  setLang(lang) {
    this.currentLang = lang;
    const isRTL = lang === 'ar';

    // Update document direction and language
    document.documentElement.dir  = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = I18n.t(key);
      if (el.tagName === 'INPUT' && el.type !== 'range') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });

    // Update toggle button text
    var toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      var svgIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
      toggleBtn.innerHTML = isRTL
        ? '<span class="lang-toggle-icon">' + svgIcon + '</span> EN'
        : '<span class="lang-toggle-icon">' + svgIcon + '</span> عربي';
    }

    // Persist
    try {
      localStorage.setItem('ankle101_lang', lang);
    } catch (_) {}
  },

  // ------------------------------------------
  // Initialize — check stored preference
  // ------------------------------------------
  init() {
    try {
      var stored = localStorage.getItem('ankle101_lang');
      if (stored === 'en' || stored === 'ar') {
        this.currentLang = stored;
      }
    } catch (_) {}

    this.setLang(this.currentLang);
  }
};
