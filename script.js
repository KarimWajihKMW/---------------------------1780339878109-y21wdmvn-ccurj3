console.log('Akwadra Super Builder Initialized');
console.log('منصة روَاج لإنشاء السير الذاتية جاهزة');

const uploadedTemplateAssets = {
  modernBlueSystemsAnalyst: 'assets/cv-templates/modern-blue-systems-analyst.png',
  professionalBlueGraphicDesigner: 'assets/cv-templates/professional-blue-graphic-designer.png',
  brownBlueGraphicDesigner: 'assets/cv-templates/brown-blue-graphic-designer.png',
  brownBeigeGraphicDesigner: 'assets/cv-templates/brown-beige-graphic-designer.png'
};

const templates = [
  { id: 'uploaded-blue-systems-analyst', name: 'أزرق محلل نظم', category: 'تحليل نظم', tone: 'حديث', popularity: 100, accent: '#294b7d', accent2: '#5ca2df', pages: 'صفحة واحدة', desc: 'قالب عربي أزرق بمسار زمني واضح وصورة شخصية بارزة لمحللي النظم والوظائف التقنية.', tags: ['ملف مرفوع', 'تحليل نظم', 'أزرق'], image: uploadedTemplateAssets.modernBlueSystemsAnalyst },
  { id: 'uploaded-blue-graphic-designer', name: 'أزرق مصمم جرافيك', category: 'تصميم', tone: 'احترافي', popularity: 99, accent: '#123d58', accent2: '#f8fafc', pages: 'صفحة واحدة', desc: 'تصميم أزرق احترافي بمساحة جانبية منظمة للمهارات والتواصل، مناسب للمصممين والمبدعين.', tags: ['ملف مرفوع', 'تصميم', 'أزرق'], image: uploadedTemplateAssets.professionalBlueGraphicDesigner },
  { id: 'uploaded-brown-blue-designer', name: 'Brown Blue Graphic Designer', category: 'تصميم', tone: 'إبداعي', popularity: 98, accent: '#4a3740', accent2: '#9b9084', pages: 'صفحة واحدة', desc: 'قالب إنجليزي أنيق بدرجات بني وأزرق وتوازن واضح بين الشريط الجانبي والخبرة المهنية.', tags: ['Uploaded', 'Graphic Design', 'Sidebar'], image: uploadedTemplateAssets.brownBlueGraphicDesigner },
  { id: 'uploaded-brown-beige-designer', name: 'بني وبيج مصمم جرافيك', category: 'تصميم', tone: 'راقي', popularity: 97, accent: '#5a403e', accent2: '#ded6c9', pages: 'صفحة واحدة', desc: 'قالب عربي بني وبيج بتكوين هندسي حديث، مناسب لعرض الخبرات الإبداعية بصورة هادئة وفاخرة.', tags: ['ملف مرفوع', 'بيج', 'مصمم جرافيك'], image: uploadedTemplateAssets.brownBeigeGraphicDesigner },
  { id: 'executive-atlas', name: 'أطلس التنفيذي', category: 'إداري', tone: 'رسمي', popularity: 98, accent: '#0d5d56', pages: 'صفحتان', desc: 'قالب قيادي بكتل إنجازات واضحة مناسب للمدراء والاستشاريين.', tags: ['قيادة', 'إنجازات', 'ATS'] },
  { id: 'creative-pulse', name: 'نبض الإبداع', category: 'إبداعي', tone: 'جريء', popularity: 94, accent: '#b95748', pages: 'صفحة واحدة', desc: 'تكوين بصري لافت للمصممين والمسوقين وصناع المحتوى.', tags: ['إبداع', 'ألوان', 'Portfolio'] },
  { id: 'tech-orbit', name: 'مدار التقنية', category: 'تقني', tone: 'حديث', popularity: 96, accent: '#1f6feb', pages: 'صفحتان', desc: 'يركز على المشاريع، المهارات التقنية، وروابط GitHub وLinkedIn.', tags: ['تقنية', 'مشاريع', 'مهارات'] },
  { id: 'graduate-seed', name: 'بذرة الخريج', category: 'خريجين', tone: 'ودود', popularity: 88, accent: '#566a2d', pages: 'صفحة واحدة', desc: 'يعوض قلة الخبرة بإبراز التدريب، الأنشطة، والدورات.', tags: ['تدريب', 'تعليم', 'بداية'] },
  { id: 'finance-vault', name: 'خزنة المال', category: 'مالي', tone: 'موثوق', popularity: 91, accent: '#153d52', pages: 'صفحتان', desc: 'لغة محافظة، أرقام دقيقة، ومساحة قوية للشهادات المالية.', tags: ['مالية', 'أرقام', 'ثقة'] },
  { id: 'medical-calm', name: 'هدوء الرعاية', category: 'طبي', tone: 'هادئ', popularity: 89, accent: '#2c9c94', pages: 'صفحة واحدة', desc: 'مناسب للأطباء والممارسين الصحيين مع ترتيب واضح للتراخيص.', tags: ['صحة', 'تراخيص', 'خبرة'] },
  { id: 'sales-flare', name: 'وميض المبيعات', category: 'مبيعات', tone: 'مقنع', popularity: 93, accent: '#d4841f', pages: 'صفحتان', desc: 'مصمم لإظهار نسب النمو، الصفقات، ومؤشرات الأداء.', tags: ['مبيعات', 'نمو', 'KPIs'] },
  { id: 'minimal-nakheel', name: 'نخيل مختصر', category: 'عام', tone: 'Minimal', popularity: 86, accent: '#6f371c', pages: 'صفحة واحدة', desc: 'بساطة راقية للمهن المتنوعة مع قراءة سريعة ومريحة.', tags: ['مختصر', 'راقي', 'سريع'] },
  { id: 'academic-minaret', name: 'مئذنة الأكاديمي', category: 'أكاديمي', tone: 'منظم', popularity: 84, accent: '#5b4c9a', pages: 'صفحتان', desc: 'يعرض الأبحاث، المنشورات، والمؤتمرات بهرمية علمية.', tags: ['أبحاث', 'تعليم', 'منشورات'] }
];

templates.push(
  { id: 'legal-crest', name: 'شعار القانون', category: 'قانوني', tone: 'رسمي', popularity: 86, accent: '#3f2f5f', pages: 'صفحتان', desc: 'هيكلة دقيقة للمحامين والمستشارين مع إبراز القضايا والتراخيص.', tags: ['قانون', 'تراخيص', 'استشارات'] },
  { id: 'engineering-grid', name: 'شبكة المهندس', category: 'هندسي', tone: 'تقني', popularity: 92, accent: '#425466', pages: 'صفحتان', desc: 'يعرض المشاريع الهندسية والأدوات والمخططات بترتيب واضح.', tags: ['مشاريع', 'تصميم', 'سلامة'] },
  { id: 'teacher-lantern', name: 'فانوس المعلّم', category: 'تعليم', tone: 'ودود', popularity: 85, accent: '#c27a25', pages: 'صفحة واحدة', desc: 'قالب دافئ للمعلمين والمدربين يركز على الأثر التعليمي.', tags: ['تعليم', 'طلاب', 'مناهج'] },
  { id: 'hospitality-oasis', name: 'واحة الضيافة', category: 'ضيافة', tone: 'راقي', popularity: 83, accent: '#0f766e', pages: 'صفحة واحدة', desc: 'مثالي للفنادق والمطاعم وخدمة العملاء مع إبراز معايير الخدمة.', tags: ['خدمة', 'فنادق', 'تجربة'] },
  { id: 'hr-compass', name: 'بوصلة الموارد', category: 'موارد بشرية', tone: 'منظم', popularity: 90, accent: '#8b5cf6', pages: 'صفحتان', desc: 'يعرض التوظيف، التطوير، وسياسات الموارد البشرية بشكل مهني.', tags: ['توظيف', 'تطوير', 'سياسات'] }
);

templates.push(
  { id: 'marketing-spark', name: 'شرارة التسويق', category: 'تسويق', tone: 'جريء', popularity: 96, accent: '#e11d48', pages: 'صفحة واحدة', desc: 'قالب ديناميكي للحملات والنمو وقنوات التسويق الرقمي.', tags: ['حملات', 'نمو', 'محتوى'] },
  { id: 'operations-flow', name: 'تدفق العمليات', category: 'عمليات', tone: 'عملي', popularity: 89, accent: '#2563eb', pages: 'صفحتان', desc: 'يبرز تحسين العمليات، سلاسل الإمداد، ورفع الكفاءة.', tags: ['تشغيل', 'كفاءة', 'إمداد'] },
  { id: 'project-radar', name: 'رادار المشاريع', category: 'إدارة مشاريع', tone: 'منظم', popularity: 93, accent: '#7c3aed', pages: 'صفحتان', desc: 'للمديرين ومالكي المنتجات مع محاور للميزانيات والمخاطر والنتائج.', tags: ['PMO', 'مخاطر', 'نتائج'] },
  { id: 'ux-canvas', name: 'لوحة تجربة المستخدم', category: 'تصميم', tone: 'إبداعي', popularity: 91, accent: '#db2777', pages: 'صفحة واحدة', desc: 'يوازن بين البحث، النماذج الأولية، وقياس تجربة المستخدم.', tags: ['UX', 'بحث', 'نماذج'] },
  { id: 'data-lighthouse', name: 'منارة البيانات', category: 'بيانات', tone: 'تحليلي', popularity: 95, accent: '#0891b2', pages: 'صفحتان', desc: 'يركز على لوحات المؤشرات، النمذجة، والقرارات المدفوعة بالبيانات.', tags: ['BI', 'تحليل', 'نمذجة'] }
);

templates.push(
  { id: 'security-shield', name: 'درع الأمن السيبراني', category: 'أمن سيبراني', tone: 'حازم', popularity: 94, accent: '#111827', pages: 'صفحتان', desc: 'قالب قوي لشهادات الأمن، الاستجابة للحوادث، وإدارة المخاطر.', tags: ['SOC', 'حماية', 'مخاطر'] },
  { id: 'product-nova', name: 'نوفا المنتج', category: 'منتجات', tone: 'حديث', popularity: 96, accent: '#f97316', pages: 'صفحتان', desc: 'مصمم لمديري المنتجات مع مساحة للرؤية، المقاييس، وخارطة الطريق.', tags: ['منتج', 'Roadmap', 'مقاييس'] },
  { id: 'customer-heart', name: 'قلب العملاء', category: 'خدمة العملاء', tone: 'ودود', popularity: 84, accent: '#16a34a', pages: 'صفحة واحدة', desc: 'يعرض رضا العملاء، حل المشكلات، وتجارب الدعم متعددة القنوات.', tags: ['دعم', 'رضا', 'حلول'] },
  { id: 'media-studio', name: 'استوديو الإعلام', category: 'إعلام', tone: 'إبداعي', popularity: 88, accent: '#9333ea', pages: 'صفحة واحدة', desc: 'للمذيعين والمحررين وصناع الفيديو مع إبراز الأعمال المنشورة.', tags: ['إنتاج', 'تحرير', 'ظهور'] },
  { id: 'ngo-impact', name: 'أثر المبادرات', category: 'غير ربحي', tone: 'إنساني', popularity: 82, accent: '#65a30d', pages: 'صفحتان', desc: 'يركز على الأثر المجتمعي، الشراكات، وإدارة المتطوعين.', tags: ['أثر', 'تطوع', 'شراكات'] }
);

templates.push(
  { id: 'real-estate-tower', name: 'برج العقار', category: 'عقاري', tone: 'موثوق', popularity: 85, accent: '#92400e', pages: 'صفحة واحدة', desc: 'يناسب المبيعات العقارية وإدارة الأملاك وتطوير المحافظ.', tags: ['عقار', 'محافظ', 'مبيعات'] },
  { id: 'logistics-route', name: 'مسار اللوجستيات', category: 'لوجستيات', tone: 'عملي', popularity: 87, accent: '#0369a1', pages: 'صفحتان', desc: 'قالب لسلاسل التوريد، النقل، التخطيط، وخفض التكاليف.', tags: ['نقل', 'توريد', 'تكلفة'] },
  { id: 'retail-shelf', name: 'رف التجزئة', category: 'تجزئة', tone: 'نشط', popularity: 83, accent: '#be123c', pages: 'صفحة واحدة', desc: 'يعرض إدارة الفروع، المبيعات، المخزون، وتجربة المتسوق.', tags: ['متاجر', 'مخزون', 'مبيعات'] },
  { id: 'chef-signature', name: 'توقيع الشيف', category: 'طهي', tone: 'راقي', popularity: 80, accent: '#b45309', pages: 'صفحة واحدة', desc: 'قالب بصري للطهاة وفِرق المطابخ مع قوائم الإنجازات والمطابخ.', tags: ['مطابخ', 'قوائم', 'جودة'] },
  { id: 'aviation-wing', name: 'جناح الطيران', category: 'طيران', tone: 'دقيق', popularity: 81, accent: '#0284c7', pages: 'صفحتان', desc: 'للمضيفين والطيارين وعمليات الطيران مع إبراز السلامة والاعتمادات.', tags: ['سلامة', 'اعتمادات', 'رحلات'] }
);

templates.push(
  { id: 'energy-horizon', name: 'أفق الطاقة', category: 'طاقة', tone: 'مستقبلي', popularity: 86, accent: '#ca8a04', pages: 'صفحتان', desc: 'مصمم للطاقة المتجددة والنفط والغاز مع مؤشرات الأداء البيئي.', tags: ['طاقة', 'استدامة', 'مشاريع'] },
  { id: 'architecture-line', name: 'خط المعمار', category: 'عمارة', tone: 'فني', popularity: 90, accent: '#64748b', pages: 'صفحة واحدة', desc: 'قالب أنيق للمعماريين يعرض البرامج، المشاريع، والجوائز.', tags: ['تصميم', 'مشاريع', 'جوائز'] },
  { id: 'pharma-lab', name: 'مختبر الدواء', category: 'صيدلة', tone: 'دقيق', popularity: 84, accent: '#0e7490', pages: 'صفحتان', desc: 'يرتب الخبرة الصيدلانية، الاعتمادات، والأبحاث السريرية.', tags: ['صيدلة', 'مختبر', 'أبحاث'] },
  { id: 'nursing-care', name: 'رعاية التمريض', category: 'تمريض', tone: 'هادئ', popularity: 88, accent: '#14b8a6', pages: 'صفحة واحدة', desc: 'يعرض الرعاية السريرية، المناوبات، المهارات، والتراخيص الصحية.', tags: ['تمريض', 'رعاية', 'ترخيص'] },
  { id: 'lab-scientist', name: 'العالم الباحث', category: 'بحث علمي', tone: 'أكاديمي', popularity: 82, accent: '#4f46e5', pages: 'صفحتان', desc: 'للباحثين مع أقسام للمنح، المنشورات، والمنهجيات.', tags: ['منح', 'منشورات', 'منهجية'] }
);

templates.push(
  { id: 'sports-coach', name: 'مدرب الأداء', category: 'رياضة', tone: 'حماسي', popularity: 79, accent: '#dc2626', pages: 'صفحة واحدة', desc: 'للمدربين واللاعبين مع إبراز البطولات وخطط الأداء.', tags: ['رياضة', 'بطولات', 'أداء'] },
  { id: 'translation-bridge', name: 'جسر الترجمة', category: 'ترجمة', tone: 'دقيق', popularity: 78, accent: '#7c2d12', pages: 'صفحة واحدة', desc: 'يعرض اللغات، التخصصات، أدوات الترجمة، وعينات العمل.', tags: ['لغات', 'تحرير', 'CAT'] },
  { id: 'admin-pearl', name: 'لؤلؤة الإدارة', category: 'إداري', tone: 'منظم', popularity: 86, accent: '#7f1d1d', pages: 'صفحة واحدة', desc: 'قالب للإداريين والمساعدين التنفيذيين مع تنظيم للمهام والإنجازات.', tags: ['تنسيق', 'مكاتب', 'متابعة'] },
  { id: 'startup-rocket', name: 'صاروخ الشركات الناشئة', category: 'ريادة أعمال', tone: 'جريء', popularity: 92, accent: '#ea580c', pages: 'صفحتان', desc: 'يعرض بناء الفرق، جذب العملاء، والنتائج في بيئات سريعة النمو.', tags: ['Startup', 'نمو', 'تمويل'] },
  { id: 'consulting-matrix', name: 'مصفوفة الاستشارات', category: 'استشارات', tone: 'رسمي', popularity: 93, accent: '#334155', pages: 'صفحتان', desc: 'قالب للاستشاريين يبرز القطاعات، الأطر التحليلية، وأثر المشاريع.', tags: ['تحليل', 'قطاعات', 'أثر'] }
);

templates.push(
  { id: 'banking-marble', name: 'رخام المصرفية', category: 'مصرفي', tone: 'فاخر', popularity: 89, accent: '#1e3a8a', pages: 'صفحتان', desc: 'للمصرفيين ومديري العلاقات مع إبراز الامتثال والمحافظ.', tags: ['مصرفية', 'امتثال', 'محافظ'] },
  { id: 'insurance-anchor', name: 'مرساة التأمين', category: 'تأمين', tone: 'موثوق', popularity: 80, accent: '#0f4c5c', pages: 'صفحة واحدة', desc: 'يركز على المطالبات، الاكتتاب، وإدارة علاقات العملاء.', tags: ['مطالبات', 'اكتتاب', 'عملاء'] },
  { id: 'qa-prism', name: 'منشور الجودة', category: 'جودة', tone: 'دقيق', popularity: 87, accent: '#6d28d9', pages: 'صفحتان', desc: 'لضمان الجودة والاختبار مع مؤشرات العيوب والتحسين المستمر.', tags: ['QA', 'اختبار', 'تحسين'] },
  { id: 'devops-cloud', name: 'سحابة DevOps', category: 'تقني', tone: 'حديث', popularity: 94, accent: '#0ea5e9', pages: 'صفحتان', desc: 'يعرض البنية السحابية، الأتمتة، CI/CD، والمراقبة.', tags: ['Cloud', 'CI/CD', 'أتمتة'] },
  { id: 'ai-lattice', name: 'نسيج الذكاء الاصطناعي', category: 'ذكاء اصطناعي', tone: 'مستقبلي', popularity: 95, accent: '#a855f7', pages: 'صفحتان', desc: 'قالب لمهندسي التعلم الآلي وعلوم البيانات مع إبراز النماذج والنتائج.', tags: ['AI', 'ML', 'نماذج'] }
);

templates.push(
  { id: 'ecommerce-market', name: 'سوق التجارة الرقمية', category: 'تجارة إلكترونية', tone: 'نشط', popularity: 90, accent: '#f59e0b', pages: 'صفحة واحدة', desc: 'يعرض المتاجر، التحويل، الحملات، وإدارة المنتجات الرقمية.', tags: ['متجر', 'تحويل', 'منتجات'] },
  { id: 'social-campaign', name: 'حملة التواصل', category: 'تواصل اجتماعي', tone: 'جريء', popularity: 88, accent: '#ec4899', pages: 'صفحة واحدة', desc: 'مناسب لمديري الحسابات والمؤثرين مع مساحة للنتائج والمجتمعات.', tags: ['Social', 'مجتمع', 'نتائج'] },
  { id: 'event-majlis', name: 'مجلس الفعاليات', category: 'فعاليات', tone: 'راقي', popularity: 82, accent: '#a16207', pages: 'صفحتان', desc: 'ينظم الخبرات في تخطيط الفعاليات، الموردين، والميزانيات.', tags: ['فعاليات', 'موردين', 'ميزانيات'] },
  { id: 'interior-harmony', name: 'تناغم الديكور', category: 'تصميم داخلي', tone: 'فني', popularity: 81, accent: '#9a3412', pages: 'صفحة واحدة', desc: 'قالب للمصممين الداخليين يعرض الأسلوب، البرامج، والمشاريع.', tags: ['ديكور', '3D', 'مشاريع'] },
  { id: 'public-sector-seal', name: 'ختم القطاع العام', category: 'حكومي', tone: 'رسمي', popularity: 85, accent: '#14532d', pages: 'صفحتان', desc: 'مصمم للقطاع العام مع إبراز المبادرات، الحوكمة، والامتثال.', tags: ['حوكمة', 'مبادرات', 'امتثال'] }
);

templates.push(
  { id: 'manufacturing-line', name: 'خط التصنيع', category: 'تصنيع', tone: 'عملي', popularity: 84, accent: '#475569', pages: 'صفحتان', desc: 'يركز على الإنتاجية، السلامة، الصيانة، وتقليل الهدر.', tags: ['إنتاج', 'سلامة', 'صيانة'] }
);

const canvaInspiredTemplates = [
  { id: 'canva-golden-portfolio', name: 'بورتفوليو ذهبي', category: 'كانفا', tone: 'فاخر', popularity: 99, accent: '#b8860b', accent2: '#111827', pages: 'صفحة واحدة', desc: 'قالب بصري بلمسات ذهبية ومساحات صور كبيرة مناسب للمبدعين والملفات التعريفية.', tags: ['Canva', 'ذهبي', 'Portfolio'], avatarText: 'ذه', shape: 'canvas', layout: 'poster', canvasStyle: 'gold' },
  { id: 'canva-wave-profile', name: 'ملف موج البحر', category: 'كانفا', tone: 'حديث', popularity: 98, accent: '#0891b2', accent2: '#0f766e', pages: 'صفحة واحدة', desc: 'تدرجات بحرية وخطوط منحنية تمنح السيرة حضوراً عصرياً واضحاً وسريع القراءة.', tags: ['Canva', 'موجات', 'حديث'], avatarText: 'مو', shape: 'canvas', layout: 'poster', canvasStyle: 'wave' },
  { id: 'canva-rose-editorial', name: 'تحرير وردي', category: 'كانفا', tone: 'إبداعي', popularity: 97, accent: '#e11d48', accent2: '#f97316', pages: 'صفحة واحدة', desc: 'تكوين تحريري جريء للمسوقين وصناع المحتوى مع بطاقات إنجازات لافتة.', tags: ['Canva', 'تحريري', 'ألوان'], avatarText: 'ور', shape: 'canvas', layout: 'split', canvasStyle: 'rose' },
  { id: 'canva-minimal-beige', name: 'بيج مينيمال', category: 'كانفا', tone: 'هادئ', popularity: 96, accent: '#9a6b3f', accent2: '#d6b48a', pages: 'صفحتان', desc: 'تصميم هادئ بألوان طبيعية ومسافات بيضاء واسعة يناسب التقديم الرسمي الأنيق.', tags: ['Canva', 'Minimal', 'راقي'], avatarText: 'بي', shape: 'canvas', layout: 'split', canvasStyle: 'beige' },
  { id: 'canva-neon-tech', name: 'تقني نيون', category: 'كانفا', tone: 'مستقبلي', popularity: 98, accent: '#7c3aed', accent2: '#06b6d4', pages: 'صفحتان', desc: 'أسلوب تقني داكن مع أضواء نيون لإبراز المشاريع والمهارات الرقمية.', tags: ['Canva', 'Neon', 'Tech'], avatarText: 'ني', shape: 'canvas', layout: 'poster', canvasStyle: 'neon' },
  { id: 'canva-grid-agency', name: 'شبكة الوكالة', category: 'كانفا', tone: 'منظم', popularity: 95, accent: '#2563eb', accent2: '#f59e0b', pages: 'صفحة واحدة', desc: 'شبكة بطاقات عملية للوكالات والاستشاريين تعرض الخدمات والنتائج بطريقة منظمة.', tags: ['Canva', 'شبكة', 'Agency'], avatarText: 'وك', shape: 'canvas', layout: 'grid', canvasStyle: 'grid' },
  { id: 'canva-organic-coach', name: 'عضوي للمدربين', category: 'كانفا', tone: 'ودود', popularity: 94, accent: '#65a30d', accent2: '#f4b23c', pages: 'صفحة واحدة', desc: 'أشكال عضوية دافئة للمدربين والمستشارين مع إبراز البرامج والأثر.', tags: ['Canva', 'عضوي', 'تدريب'], avatarText: 'عض', shape: 'canvas', layout: 'poster', canvasStyle: 'organic' },
  { id: 'canva-monochrome-pro', name: 'أبيض وأسود احترافي', category: 'كانفا', tone: 'رسمي', popularity: 97, accent: '#111827', accent2: '#6b7280', pages: 'صفحتان', desc: 'قالب عالي التباين بأسلوب مجلات الأعمال للمناصب القيادية والاستشارية.', tags: ['Canva', 'Monochrome', 'رسمي'], avatarText: 'BW', shape: 'canvas', layout: 'split', canvasStyle: 'mono' }
];

templates.push(...canvaInspiredTemplates);

const templateShapeStyles = [
  { key: 'folio', label: 'ورقي', tone: 'رسمي', pages: 'صفحة واحدة' },
  { key: 'arch', label: 'قوسي', tone: 'راقي', pages: 'صفحتان' },
  { key: 'diagonal', label: 'مائل', tone: 'جريء', pages: 'صفحة واحدة' },
  { key: 'sidebar', label: 'شريط جانبي', tone: 'منظم', pages: 'صفحتان' },
  { key: 'capsule', label: 'كبسولي', tone: 'حديث', pages: 'صفحة واحدة' }
];

const templateExpansionGroups = [
  { slug: 'accounting', name: 'المحاسبة', category: 'محاسبة', accent: '#0f766e', tags: ['دفاتر', 'تقارير', 'تدقيق'], symbol: 'مح', desc: 'للمحاسبين ومراجعي الحسابات مع إبراز التقارير والدقة المالية.' },
  { slug: 'procurement', name: 'المشتريات', category: 'مشتريات', accent: '#a16207', tags: ['توريد', 'تفاوض', 'عقود'], symbol: 'مش', desc: 'يعرض إدارة الموردين والتفاوض وخفض التكلفة بوضوح.' },
  { slug: 'call-center', name: 'مركز الاتصال', category: 'خدمة العملاء', accent: '#0284c7', tags: ['اتصال', 'رضا', 'SLA'], symbol: 'ات', desc: 'يركز على سرعة الاستجابة ورضا العملاء ومؤشرات الخدمة.' },
  { slug: 'content', name: 'صناعة المحتوى', category: 'محتوى', accent: '#db2777', tags: ['كتابة', 'منصات', 'هوية'], symbol: 'حت', desc: 'قالب لكتّاب المحتوى ومديري التحرير مع مساحة للأعمال المنشورة.' },
  { slug: 'photography', name: 'التصوير', category: 'تصوير', accent: '#7c2d12', tags: ['إضاءة', 'معرض', 'تحرير'], symbol: 'صو', desc: 'يعرض البورتفوليو والخبرات البصرية والبرامج المستخدمة.' },
  { slug: 'game-dev', name: 'تطوير الألعاب', category: 'ألعاب', accent: '#6d28d9', tags: ['Unity', 'تجربة', 'محركات'], symbol: 'لع', desc: 'لمطوري الألعاب مع إبراز المشاريع والمحركات وتجربة اللاعب.' },
  { slug: 'mobile-dev', name: 'تطبيقات الجوال', category: 'تقني', accent: '#2563eb', tags: ['iOS', 'Android', 'إطلاق'], symbol: 'جو', desc: 'يرتب التطبيقات المنشورة والمكتبات ونتائج الأداء.' },
  { slug: 'frontend', name: 'واجهات الويب', category: 'تقني', accent: '#0891b2', tags: ['React', 'UI', 'أداء'], symbol: 'وب', desc: 'يوازن بين تجربة المستخدم وجودة الواجهة وسرعة التحميل.' },
  { slug: 'backend', name: 'الخدمات الخلفية', category: 'تقني', accent: '#334155', tags: ['API', 'قواعد بيانات', 'أمان'], symbol: 'خل', desc: 'يركز على المعمارية والأنظمة الموزعة وقابلية التوسع.' },
  { slug: 'agriculture', name: 'الزراعة', category: 'زراعة', accent: '#65a30d', tags: ['محاصيل', 'استدامة', 'ري'], symbol: 'زر', desc: 'للمهندسين الزراعيين وإدارة الإنتاج والاستدامة.' },
  { slug: 'veterinary', name: 'الطب البيطري', category: 'بيطري', accent: '#16a34a', tags: ['رعاية', 'تشخيص', 'عيادات'], symbol: 'بي', desc: 'يعرض الخبرة السريرية والتراخيص ورعاية الحيوانات.' },
  { slug: 'therapy', name: 'العلاج والتأهيل', category: 'صحي', accent: '#14b8a6', tags: ['تأهيل', 'خطط', 'متابعة'], symbol: 'عل', desc: 'للمعالجين الفيزيائيين والمهنيين مع إبراز خطط العلاج.' },
  { slug: 'journalism', name: 'الصحافة', category: 'إعلام', accent: '#be123c', tags: ['تحقيق', 'تحرير', 'مصادر'], symbol: 'صح', desc: 'يناسب الصحفيين والمحررين مع مساحة للقصص والتحقيقات.' },
  { slug: 'tourism', name: 'السياحة', category: 'سياحة', accent: '#f97316', tags: ['رحلات', 'ضيوف', 'وجهات'], symbol: 'سي', desc: 'لقطاع السفر والإرشاد السياحي وخدمة الزوار.' },
  { slug: 'training', name: 'التدريب المهني', category: 'تدريب', accent: '#8b5cf6', tags: ['ورش', 'مهارات', 'قياس'], symbol: 'در', desc: 'للمدربين مع إبراز المناهج ونتائج المتدربين.' }
];

templateExpansionGroups.forEach((group, groupIndex) => {
  templateShapeStyles.forEach((style, styleIndex) => {
    const popularity = 78 + ((groupIndex * 5 + styleIndex) % 20);
    templates.push({
      id: `${group.slug}-${style.key}`,
      name: `${style.label} ${group.name}`,
      category: group.category,
      tone: style.tone,
      popularity,
      accent: group.accent,
      pages: style.pages,
      desc: `${group.desc} بتصميم ${style.label} متنوع الألوان ومناسب للفرز السريع.`,
      tags: [...group.tags, style.label],
      avatarText: group.symbol,
      shape: style.key,
      layout: styleIndex % 2 === 0 ? 'stacked' : 'split'
    });
  });
});

const canvaDesignStyles = ['gold', 'wave', 'rose', 'beige', 'neon', 'grid', 'organic', 'mono', 'duotone', 'sunset', 'mint', 'royal'];
const canvaLayouts = ['poster', 'split', 'grid', 'stacked'];
const canvaColorPairs = [
  ['#b8860b', '#111827'],
  ['#0891b2', '#0f766e'],
  ['#e11d48', '#f97316'],
  ['#9a6b3f', '#d6b48a'],
  ['#7c3aed', '#06b6d4'],
  ['#2563eb', '#f59e0b'],
  ['#65a30d', '#f4b23c'],
  ['#111827', '#6b7280'],
  ['#db2777', '#8b5cf6'],
  ['#ea580c', '#facc15'],
  ['#0f766e', '#99f6e4'],
  ['#4338ca', '#c084fc']
];

templates.forEach((template, index) => {
  const [primary, secondary] = canvaColorPairs[index % canvaColorPairs.length];
  template.shape = 'canvas';
  template.layout = template.layout || canvaLayouts[index % canvaLayouts.length];
  template.canvasStyle = template.canvasStyle || canvaDesignStyles[index % canvaDesignStyles.length];
  template.accent = template.accent || primary;
  template.accent2 = template.accent2 || secondary;
  template.avatarText = template.avatarText || template.name.replace(/^(ال|أ|إ|آ)/, '').slice(0, 2);
  template.avatar = template.avatar || createTemplateAvatar(template, index);
});

const plans = [
  { name: 'التجربة الأولى', price: 'مجاني', desc: 'أول سيرة ذاتية مجانية بالكامل لتبدأ بثقة.', items: ['سيرة ذاتية واحدة مجاناً', 'قالبان احترافيان', 'تعديل غير محدود على السيرة الأولى', 'تصدير نص منسق'] },
  { name: 'المحترف', price: '49 ر.س', desc: 'بعد السيرة الأولى، أنشئ سيراً إضافية عبر دفع آمن.', items: ['كل القوالب', 'سير إضافية مدفوعة', 'مراجعة ذكية للنص', 'الدفع عبر Apple Pay أو البطاقة'], featured: true },
  { name: 'الشركات', price: '199 ر.س', desc: 'لفرق التوظيف ومراكز التدريب.', items: ['حسابات متعددة', 'مكتبة قوالب موحدة', 'لوحة متابعة المتدربين', 'دفع مؤسسي بالبطاقات'] }
];

const paymentMethods = [
  { id: 'apple-pay', name: 'Apple Pay', icon: '', desc: 'دفع سريع وآمن من أجهزة Apple المدعومة.' },
  { id: 'card', name: 'بطاقة بنكية', icon: '▣', desc: 'أضف بطاقة مدى، فيزا، أو ماستركارد لإكمال الدفع.' }
];

const socialAuthProviders = [
  { id: 'google', name: 'Google', icon: 'G', desc: 'تابع بحساب Google واحفظ بياناتك بسرعة.' },
  { id: 'apple', name: 'Apple', icon: '', desc: 'تابع بحساب Apple مع تجربة تسجيل مختصرة.' }
];

const defaultResume = {
  id: '',
  name: 'كريم واجيه',
  role: 'مدير منتجات رقمية',
  email: 'karim@example.com',
  phone: '+966 55 000 0000',
  city: 'الرياض',
  template: 'executive-atlas',
  summary: 'أقود بناء منتجات رقمية تربط بين أهداف العمل واحتياجات المستخدم، مع خبرة في إطلاق حلول قابلة للنمو وقياس أثرها.',
  experience: 'قيادة فريق متعدد التخصصات لإطلاق منصة SaaS رفعت معدل التحويل 34% خلال 6 أشهر. تحسين رحلة التسجيل وخفض وقت الإعداد من 3 أيام إلى 45 دقيقة.',
  education: 'بكالوريوس نظم معلومات إدارية - جامعة الملك سعود',
  skills: 'إدارة المنتجات، تحليل البيانات، تجربة المستخدم، خرائط الطريق، قيادة الفرق',
  status: 'جاهزة'
};

const state = {
  templatePage: 1,
  templateSearch: '',
  templateCategory: 'الكل',
  templateTone: 'الكل',
  templateSort: 'popular',
  dashboardPage: 1,
  dashboardSearch: '',
  dashboardSort: 'updated',
  paymentMethod: 'apple-pay'
};

const themePalettes = [
  { id: 'classic', label: 'النحاسي' },
  { id: 'emerald', label: 'الزمردي' },
  { id: 'royal', label: 'الملكي' },
  { id: 'rose', label: 'الوردي' }
];

const app = document.getElementById('app');
const toast = document.getElementById('toast');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const themeToggleLabel = document.getElementById('themeToggleLabel');
const authNavLink = document.getElementById('authNavLink');

applyTheme(getSavedTheme(), false);

function getCurrentUser() {
  const saved = localStorage.getItem('rawaj_current_user');
  return saved ? JSON.parse(saved) : null;
}

function saveCurrentUser(user) {
  const users = JSON.parse(localStorage.getItem('rawaj_users') || '[]');
  const existingIndex = users.findIndex(item => item.email === user.email && item.provider === user.provider);
  if (existingIndex >= 0) users[existingIndex] = { ...users[existingIndex], ...user, updatedAt: Date.now() };
  else users.unshift({ ...user, createdAt: Date.now(), updatedAt: Date.now() });
  localStorage.setItem('rawaj_users', JSON.stringify(users));
  localStorage.setItem('rawaj_current_user', JSON.stringify({ ...user, updatedAt: Date.now() }));
}

function logoutCurrentUser() {
  localStorage.removeItem('rawaj_current_user');
  showToast('تم تسجيل الخروج من حساب روَاج');
  render();
}

function getAccountSettings() {
  const user = getCurrentUser();
  const defaults = {
    displayName: user?.name || '',
    email: user?.email || '',
    phone: '',
    city: defaultResume.city,
    preferredTemplate: localStorage.getItem('rawaj_selected_resume_template') || defaultResume.template,
    emailUpdates: 'weekly',
    profileVisibility: 'private',
    language: 'ar'
  };
  const saved = localStorage.getItem('rawaj_account_settings');
  return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
}

function saveAccountSettings(settings) {
  localStorage.setItem('rawaj_account_settings', JSON.stringify({ ...settings, updatedAt: Date.now() }));
  if (settings.preferredTemplate) localStorage.setItem('rawaj_selected_resume_template', settings.preferredTemplate);
}

function updateAuthNavState() {
  const user = getCurrentUser();
  if (!authNavLink) return;
  authNavLink.textContent = user ? 'حسابي' : 'تسجيل';
  authNavLink.setAttribute('aria-label', user ? `حساب ${user.name || user.email}` : 'تسجيل مستخدم جديد');
}

function getSavedResumes() {
  const saved = localStorage.getItem('rawaj_resumes');
  if (saved) return JSON.parse(saved);
  const seed = [
    { ...defaultResume, id: cryptoId(), name: 'سارة العتيبي', role: 'محللة بيانات', template: 'tech-orbit', status: 'مسودة', updatedAt: Date.now() - 86400000 },
    { ...defaultResume, id: cryptoId(), name: 'أحمد منصور', role: 'مدير مبيعات إقليمي', template: 'sales-flare', status: 'جاهزة', updatedAt: Date.now() - 3600000 }
  ];
  localStorage.setItem('rawaj_resumes', JSON.stringify(seed));
  return seed;
}

function saveResumes(resumes) {
  localStorage.setItem('rawaj_resumes', JSON.stringify(resumes));
}

function getFavoriteTemplates() {
  const saved = localStorage.getItem('rawaj_favorite_templates');
  return saved ? JSON.parse(saved) : [];
}

function saveFavoriteTemplates(favorites) {
  localStorage.setItem('rawaj_favorite_templates', JSON.stringify(favorites));
}

function isTemplateFavorite(templateId) {
  return getFavoriteTemplates().includes(templateId);
}

function toggleTemplateFavorite(templateId) {
  const favorites = getFavoriteTemplates();
  const isFavorite = favorites.includes(templateId);
  const nextFavorites = isFavorite ? favorites.filter(id => id !== templateId) : [...favorites, templateId];
  saveFavoriteTemplates(nextFavorites);
  return !isFavorite;
}

function isPaymentActive() {
  return localStorage.getItem('rawaj_payment_status') === 'paid';
}

function hasUsedFreeResume() {
  return localStorage.getItem('rawaj_free_resume_used') === 'true';
}

function shouldChargeForNewResume() {
  return hasUsedFreeResume() && !isPaymentActive();
}

function markFreeResumeUsed() {
  localStorage.setItem('rawaj_free_resume_used', 'true');
}

function cryptoId() {
  return `cv-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem('rawaj_theme_palette') || 'classic';
  return themePalettes.some(theme => theme.id === savedTheme) ? savedTheme : 'classic';
}

function applyTheme(themeId, shouldSave = true) {
  const theme = themePalettes.find(item => item.id === themeId) || themePalettes[0];
  document.body.dataset.theme = theme.id;
  if (themeToggleLabel) themeToggleLabel.textContent = `ألوان ${theme.label}`;
  themeToggle?.setAttribute('aria-label', `تغيير ألوان القالب - الحالي ${theme.label}`);
  if (shouldSave) localStorage.setItem('rawaj_theme_palette', theme.id);
  return theme;
}

function toggleThemePalette() {
  const currentTheme = getSavedTheme();
  const currentIndex = themePalettes.findIndex(theme => theme.id === currentTheme);
  const nextTheme = themePalettes[(currentIndex + 1) % themePalettes.length];
  applyTheme(nextTheme.id);
  showToast(`تم تطبيق ألوان ${nextTheme.label}`);
}

function navigate(path) {
  const targetUrl = new URL(path, location.origin);
  if (isProtectedPath(targetUrl.pathname) && !getCurrentUser()) {
    localStorage.setItem('rawaj_auth_redirect', `${targetUrl.pathname}${targetUrl.search}`);
    showToast('سجّل الدخول أولاً للوصول إلى لوحة السير أو منشئ السيرة الذاتية');
    history.pushState({}, '', '/auth');
    render();
    return;
  }
  history.pushState({}, '', path);
  render();
}

function isBuilderPath(path) {
  return path === '/builder' || path.startsWith('/builder/');
}

function isDashboardPath(path) {
  return path === '/dashboard';
}

function isSettingsPath(path) {
  return path === '/settings';
}

function isProtectedPath(path) {
  return isBuilderPath(path) || isDashboardPath(path) || isSettingsPath(path);
}

function consumeAuthRedirect() {
  const redirect = localStorage.getItem('rawaj_auth_redirect');
  localStorage.removeItem('rawaj_auth_redirect');
  return redirect && isProtectedPath(new URL(redirect, location.origin).pathname) ? redirect : '';
}

function accountSettingsPage() {
  const user = getCurrentUser();
  if (!user) return loginRequiredPage();
  const settings = getAccountSettings();
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">إعدادات الحساب</span><h2>تحكم ببياناتك وتفضيلات تجربة روَاج.</h2></div>
      <p>صفحة إعدادات محلية لإدارة الملف الشخصي، تفضيلات القوالب، التنبيهات، وخيارات أمان الحساب على هذا المتصفح.</p>
    </div>
    <div class="settings-layout">
      <article class="form-card reveal">
        <form class="account-settings-form" id="accountSettingsForm">
          <h3>الملف الشخصي</h3>
          <p class="settings-note">حدّث الاسم والبريد والمدينة التي تظهر في تجربة الحساب والسير الجديدة.</p>
          <div class="form-grid">
            <label>الاسم الظاهر<input required name="displayName" value="${escapeAttr(settings.displayName || user.name || '')}" autocomplete="name"></label>
            <label>البريد الإلكتروني<input required type="email" name="email" value="${escapeAttr(settings.email || user.email || '')}" autocomplete="email"></label>
            <label>رقم الهاتف<input name="phone" value="${escapeAttr(settings.phone)}" placeholder="+966 55 000 0000" autocomplete="tel"></label>
            <label>المدينة<input name="city" value="${escapeAttr(settings.city)}" autocomplete="address-level2"></label>
          </div>
          <h3>تفضيلات المنصة</h3>
          <div class="form-grid">
            <label>القالب الافتراضي<select name="preferredTemplate">${templates.map(t => `<option value="${t.id}" ${t.id===settings.preferredTemplate?'selected':''}>${t.name}</option>`).join('')}</select></label>
            <label>تنبيهات البريد<select name="emailUpdates"><option value="weekly" ${settings.emailUpdates==='weekly'?'selected':''}>ملخص أسبوعي</option><option value="important" ${settings.emailUpdates==='important'?'selected':''}>التحديثات المهمة فقط</option><option value="off" ${settings.emailUpdates==='off'?'selected':''}>إيقاف التنبيهات</option></select></label>
            <label>خصوصية الملف<select name="profileVisibility"><option value="private" ${settings.profileVisibility==='private'?'selected':''}>خاص بي فقط</option><option value="link" ${settings.profileVisibility==='link'?'selected':''}>متاح عبر روابط المشاركة</option></select></label>
            <label>لغة الواجهة<select name="language"><option value="ar" ${settings.language==='ar'?'selected':''}>العربية</option><option value="en" ${settings.language==='en'?'selected':''}>English لاحقاً</option></select></label>
          </div>
          <div class="action-row"><button class="primary-btn" type="submit">حفظ الإعدادات</button><button class="secondary-btn" type="button" data-action="reset-account-settings">استعادة الافتراضيات</button></div>
        </form>
      </article>
      <aside class="settings-side reveal">
        <article class="panel">
          <span class="eyebrow">ملخص الحساب</span>
          <div class="account-summary">
            <div><span>طريقة التسجيل</span><strong>${escapeHtml(user.providerLabel || 'البريد الإلكتروني')}</strong></div>
            <div><span>حالة الدفع</span><strong>${isPaymentActive() ? 'مفعّل للسير الإضافية' : 'الخطة المجانية'}</strong></div>
            <div><span>آخر تحديث</span><strong>${formatDate(settings.updatedAt)}</strong></div>
          </div>
          <a class="secondary-btn" href="/dashboard" data-link>فتح لوحة السير</a>
        </article>
        <article class="panel settings-security">
          <h3>الأمان وكلمة المرور</h3>
          <p class="settings-note">يمكن تحديث كلمة مرور تجريبية محفوظة محلياً لحساب البريد الإلكتروني.</p>
          <form class="account-settings-form" id="accountSecurityForm">
            <label>كلمة مرور جديدة<input type="password" name="newPassword" minlength="6" placeholder="6 أحرف على الأقل" autocomplete="new-password"></label>
            <label>تأكيد كلمة المرور<input type="password" name="confirmPassword" minlength="6" placeholder="أعد كتابة كلمة المرور" autocomplete="new-password"></label>
            <button class="ghost-btn" type="submit">تحديث كلمة المرور</button>
          </form>
        </article>
        <article class="panel settings-danger">
          <h3>منطقة حساسة</h3>
          <p>حذف الحساب يزيل جلسة الدخول وإعدادات الحساب من هذا المتصفح فقط.</p>
          <div class="action-row"><button class="ghost-btn" type="button" data-action="auth-logout">تسجيل الخروج</button><button class="mini-btn" type="button" data-action="delete-account-data">حذف بيانات الحساب</button></div>
        </article>
      </aside>
    </div>
  `);
}

function routeLink(html) {
  return html;
}

function setActiveNav() {
  document.querySelectorAll('[data-link]').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === location.pathname || (href !== '/' && location.pathname.startsWith(href)));
  });
}

function pageShell(content) {
  return `<section class="page">${content}</section>`;
}

function heroDepth() {
  return `
    <div class="depth-stage parallax-card" data-depth="16">
      <div class="cv-stack">
        <div class="cv-back-two"></div>
        <div class="cv-back-one"></div>
        <div class="floating-chip chip-one">تحليل كلمات الوظيفة</div>
        <div class="floating-chip chip-two">حفظ وتعديل مستمر</div>
        <div class="floating-chip chip-three">قوالب عربية احترافية</div>
        <article class="cv-sheet">
          <div class="cv-name">
            <div>
              <div class="cv-line med"></div>
              <div class="cv-line short"></div>
            </div>
            <div class="avatar">ر</div>
          </div>
          <div class="cv-line"></div><div class="cv-line med"></div><div class="cv-line short"></div>
          <div class="cv-bars">
            <div class="cv-bar" style="--w:88%"></div>
            <div class="cv-bar" style="--w:72%"></div>
            <div class="cv-bar" style="--w:94%"></div>
          </div>
          <div class="cv-line"></div><div class="cv-line med"></div><div class="cv-line"></div>
        </article>
      </div>
    </div>`;
}

function authPage() {
  const user = getCurrentUser();
  if (user) {
    return pageShell(`
      <div class="auth-layout">
        <article class="auth-card reveal">
          <span class="eyebrow">حساب روَاج</span>
          <h2>مرحباً ${escapeHtml(user.name || 'بك')}.</h2>
          <p class="lead">أنت مسجل حالياً عبر ${escapeHtml(user.providerLabel)} ويمكنك متابعة إنشاء السير المحفوظة وإدارة القوالب من لوحة روَاج.</p>
          <div class="account-summary">
            <div><span>الاسم</span><strong>${escapeHtml(user.name || 'مستخدم روَاج')}</strong></div>
            <div><span>البريد الإلكتروني</span><strong>${escapeHtml(user.email || 'غير محدد')}</strong></div>
            <div><span>طريقة التسجيل</span><strong>${escapeHtml(user.providerLabel)}</strong></div>
          </div>
          <div class="hero-actions"><a class="primary-btn" href="/dashboard" data-link>الانتقال للوحة السير</a><a class="secondary-btn" href="/settings" data-link>إعدادات الحساب</a><button class="secondary-btn" type="button" data-action="auth-logout">تسجيل الخروج</button></div>
        </article>
        <aside class="auth-benefits reveal">
          ${featureCard('✓','حفظ بيانات الحساب','احتفظ باسمك وبريدك لاستخدامهما في السير والإيصالات لاحقاً.')}
          ${featureCard('◈','تسجيل اجتماعي سريع','اختر Google أو Apple لتجربة دخول مختصرة على هذا الموقع الثابت.')}
        </aside>
      </div>
    `);
  }

  return pageShell(`
    <div class="auth-layout">
      <article class="form-card auth-card reveal">
        <span class="eyebrow">تسجيل مستخدم جديد</span>
        <h2>أنشئ حسابك بالبريد أو تابع عبر Google وApple.</h2>
        <p class="lead">نموذج تسجيل محلي يحفظ بيانات الحساب على هذا المتصفح، مع أزرار متابعة اجتماعية جاهزة للربط بمزود OAuth عند توفر الخادم.</p>
        <div class="social-auth-grid">
          ${socialAuthProviders.map(provider => `<button class="social-auth-btn" type="button" data-action="auth-social" data-provider="${provider.id}"><span>${provider.icon}</span><strong>التسجيل عبر ${provider.name}</strong><small>${provider.desc}</small></button>`).join('')}
        </div>
        <div class="auth-divider"><span>أو بالبريد الإلكتروني</span></div>
        <form class="auth-form" id="authForm">
          <div class="form-grid">
            <label>الاسم الكامل<input required name="name" placeholder="اسمك الكامل" autocomplete="name"></label>
            <label>البريد الإلكتروني<input required type="email" name="email" placeholder="you@example.com" autocomplete="email"></label>
          </div>
          <label>كلمة المرور<input required type="password" name="password" minlength="6" placeholder="6 أحرف على الأقل" autocomplete="new-password"></label>
          <label class="check-line"><input required type="checkbox" name="terms"> <span>أوافق على حفظ بيانات الحساب محلياً لاستخدام تجربة روَاج.</span></label>
          <button class="primary-btn" type="submit">إنشاء حساب بالبريد</button>
        </form>
      </article>
      <aside class="panel auth-side reveal">
        <h3>ماذا ستحصل عليه؟</h3>
        <div class="roadmap">
          <div class="step-card"><div class="step-num">1</div><div><h3>حساب شخصي</h3><p>اسم وبريد وطريقة تسجيل محفوظة في المتصفح.</p></div></div>
          <div class="step-card"><div class="step-num">2</div><div><h3>وصول سريع</h3><p>أزرار Google وApple تحاكي التسجيل الاجتماعي لحين ربط مزود فعلي.</p></div></div>
          <div class="step-card"><div class="step-num">3</div><div><h3>لوحة السير</h3><p>انتقال مباشر للوحة إدارة السير بعد إنشاء الحساب.</p></div></div>
        </div>
      </aside>
    </div>
  `);
}

function homePage() {
  return pageShell(`
    <section class="hero">
      <div class="reveal">
        <span class="eyebrow">منصة عربية لبناء سيرة تقنع قبل المقابلة</span>
        <h1>اجعل خبرتك تتحرك بعمق نحو الفرصة.</h1>
        <p class="lead">روَاج يمنحك منشئ سيرة ذاتية احترافي بقوالب متعددة، حفظ تلقائي، وتعديل مستمر؛ لتبني نسخة دقيقة لكل وظيفة دون أن تبدأ من الصفر.</p>
        <div class="hero-actions">
          <a class="primary-btn" href="/builder" data-link>أنشئ سيرتك الآن</a>
          <a class="secondary-btn" href="/templates" data-link>استعرض القوالب</a>
        </div>
        <div class="hero-metrics">
          <div class="metric-card"><strong>${templates.length}+</strong><span>قالباً مهنياً متنوعاً</span></div>
          <div class="metric-card"><strong>3D</strong><span>تجربة تفاعلية عميقة</span></div>
          <div class="metric-card"><strong>24/7</strong><span>حفظ وتعديل من أي مكان</span></div>
        </div>
      </div>
      ${heroDepth()}
    </section>

    <section class="reveal" style="margin-top:54px">
      <div class="section-head">
        <div><span class="eyebrow">لماذا روَاج؟</span><h2>كل قسم في سيرتك له وظيفة واضحة.</h2></div>
        <p>نبتعد عن القوالب الجامدة ونبني تجربة تقودك لصياغة ملخص مهني، إنجازات قابلة للقياس، ومهارات مرتبة حسب المجال.</p>
      </div>
      <div class="grid-3">
        ${featureCard('✦','كتابة موجهة للفرص','حقول ذكية تساعدك على تحويل المهام اليومية إلى إنجازات مهنية قابلة للقراءة والفرز.')}
        ${featureCard('◈','قوالب متعددة قابلة للتبديل','غيّر القالب دون فقدان المحتوى، واصنع نسخة رسمية أو إبداعية أو تقنية حسب جهة التقديم.')}
        ${featureCard('⇄','حفظ وتعديل وسجل نسخ','كل سيرة محفوظة في لوحة خاصة مع إجراءات تعديل، تكرار، حذف، وتجهيز للتصدير.')}
      </div>
    </section>

    <section class="reveal" style="margin-top:70px">
      <div class="section-head">
        <div><span class="eyebrow">رحلة إنشاء سلسة</span><h2>من مسودة مبعثرة إلى وثيقة جاهزة.</h2></div>
      </div>
      <div class="roadmap">
        ${stepCard('01','اختر القالب','ابدأ من قالب يناسب مجالك وخبرتك بدل صفحة بيضاء.')}
        ${stepCard('02','اكتب المحتوى','أدخل بياناتك وخبراتك ومهاراتك وشاهد المعاينة تتشكل فورياً.')}
        ${stepCard('03','احفظ نسخة لكل وظيفة','احتفظ بنسخ متعددة وعدّل عليها من لوحة السير المحفوظة.')}
      </div>
    </section>

    <section class="reveal" style="margin-top:70px">
      <div class="section-head">
        <div><span class="eyebrow">نماذج مميزة</span><h2>قوالب لها شخصية، وليست مجرد ورق.</h2></div>
        <a class="ghost-btn" href="/templates" data-link>كل القوالب</a>
      </div>
      <div class="grid-3">${templates.slice(0,3).map(templateCard).join('')}</div>
    </section>
  `);
}

function featureCard(icon, title, text) {
  return `<article class="feature-card reveal"><div class="feature-icon">${icon}</div><h3>${title}</h3><p>${text}</p></article>`;
}
function stepCard(num, title, text) {
  return `<article class="step-card reveal"><div class="step-num">${num}</div><div><h3>${title}</h3><p>${text}</p></div></article>`;
}

function templateCard(t) {
  const avatar = t.avatar || createTemplateAvatar(t);
  const cardAvatar = t.image || avatar;
  const shape = t.shape || 'folio';
  const layout = t.layout || 'stacked';
  const favorite = isTemplateFavorite(t.id);
  const isCanvasTemplate = Boolean(t.canvasStyle);
  const hasRealTemplateImage = Boolean(t.image);
  const previewVisual = hasRealTemplateImage
    ? `<img class="template-real-image" src="${t.image}" alt="معاينة كاملة لقالب ${escapeAttr(t.name)}" loading="lazy">`
    : `<div class="template-mini shape-${shape} layout-${layout} ${isCanvasTemplate ? `canvas-style canvas-${t.canvasStyle}` : ''}" style="--accent:${t.accent}; --accent-2:${t.accent2 || t.accent}">
        <div class="top"><img class="template-avatar" src="${avatar}" alt="صورة رمزية لقالب ${escapeAttr(t.name)}"></div>
        ${isCanvasTemplate ? '<span class="canvas-dot dot-one"></span><span class="canvas-dot dot-two"></span><span class="canvas-ribbon"></span><div class="canvas-photo"></div>' : ''}
        <div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div>
      </div>`;
  return `<article class="template-card reveal ${isCanvasTemplate ? 'canva-template-card' : ''} ${hasRealTemplateImage ? 'template-card-real' : ''}">
    <div class="template-preview ${isCanvasTemplate ? 'canva-template-preview' : ''} ${hasRealTemplateImage ? 'template-preview-real' : ''}" style="--accent:${t.accent}; --accent-2:${t.accent2 || t.accent}">
      ${previewVisual}
    </div>
    <div class="template-body">
      <div class="template-title-row"><img class="template-card-avatar" src="${cardAvatar}" alt=""><div><h3>${t.name}</h3><small>${t.category} · ${t.tone}</small></div></div>
      <p>${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <div class="action-row">
        <button class="mini-btn favorite-btn ${favorite ? 'active' : ''}" type="button" data-action="toggle-template-favorite" data-template-id="${t.id}" aria-pressed="${favorite}" aria-label="${favorite ? 'إزالة قالب ' + escapeAttr(t.name) + ' من المفضلة' : 'إضافة قالب ' + escapeAttr(t.name) + ' إلى المفضلة'}">
          <span aria-hidden="true">${favorite ? '♥' : '♡'}</span>
          <span>${favorite ? 'في المفضلة' : 'مفضلة'}</span>
        </button>
        <a class="mini-btn" href="/templates/${t.id}" data-link>تفاصيل القالب</a>
        <a class="mini-btn" href="/builder?template=${t.id}" data-link>استخدامه</a>
      </div>
    </div>
  </article>`;
}

function createTemplateAvatar(template, index = 0) {
  const initials = escapeHtml(template.avatarText || template.name.slice(0, 2));
  const accent = template.accent || '#0d5d56';
  const shape = template.shape || templateShapeStyles[index % templateShapeStyles.length]?.key || 'folio';
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1"><stop stop-color="${accent}"/><stop offset="1" stop-color="#f4b23c"/></linearGradient>
      </defs>
      <rect width="128" height="128" rx="34" fill="#fffaf0"/>
      <path d="M18 26 C36 8 86 10 108 32 L108 102 C82 118 42 118 18 98 Z" fill="url(#g)" opacity=".95"/>
      <circle cx="96" cy="28" r="14" fill="#fffaf0" opacity=".78"/>
      <path d="${shape === 'arch' ? 'M34 96V50a30 30 0 0 1 60 0v46Z' : shape === 'diagonal' ? 'M28 88 92 28l12 12-64 60Z' : shape === 'sidebar' ? 'M28 28h22v72H28zM60 34h42v12H60zM60 58h34v10H60zM60 80h26v10H60z' : shape === 'capsule' ? 'M34 36h60a18 18 0 0 1 0 36H34a18 18 0 0 1 0-36Z' : 'M32 30h64v72H32z'}" fill="#fffaf0" opacity=".33"/>
      <text x="64" y="76" text-anchor="middle" font-size="30" font-family="Arial, sans-serif" font-weight="700" fill="#fffaf0">${initials}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function templatesPage() {
  const categories = ['الكل', ...new Set(templates.map(t => t.category))];
  const tones = ['الكل', ...new Set(templates.map(t => t.tone))];
  let items = templates.filter(t =>
    (state.templateCategory === 'الكل' || t.category === state.templateCategory) &&
    (state.templateTone === 'الكل' || t.tone === state.templateTone) &&
    (`${t.name} ${t.desc} ${t.tags.join(' ')}`.includes(state.templateSearch))
  );
  items.sort((a,b) => state.templateSort === 'name' ? a.name.localeCompare(b.name, 'ar') : b.popularity - a.popularity);
  const perPage = 6;
  const pages = Math.max(1, Math.ceil(items.length / perPage));
  state.templatePage = Math.min(state.templatePage, pages);
  const paged = items.slice((state.templatePage - 1) * perPage, state.templatePage * perPage);
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">مكتبة القوالب</span><h2>اختر قالباً يروي مسارك المهني بوضوح.</h2></div>
      <p>صفحة خاصة بالقوالب مع بحث، فلترة، ترتيب، وتصفح صفحات لتصل بسرعة للقالب المناسب لمجالك.</p>
    </div>
    <div class="filters reveal">
      <input class="control" id="templateSearch" placeholder="ابحث عن قالب أو مجال..." value="${state.templateSearch}">
      <select class="control" id="templateCategory">${categories.map(c => `<option ${c===state.templateCategory?'selected':''}>${c}</option>`).join('')}</select>
      <select class="control" id="templateTone">${tones.map(t => `<option ${t===state.templateTone?'selected':''}>${t}</option>`).join('')}</select>
      <select class="control" id="templateSort"><option value="popular" ${state.templateSort==='popular'?'selected':''}>الأكثر رواجاً</option><option value="name" ${state.templateSort==='name'?'selected':''}>حسب الاسم</option></select>
    </div>
    <div class="grid-3">${paged.map(templateCard).join('') || '<div class="empty-state panel">لا توجد قوالب مطابقة للبحث الحالي.</div>'}</div>
    ${pagination(pages, state.templatePage, 'template-page')}
  `);
}

function templateDetailPage(id) {
  const t = templates.find(item => item.id === id) || templates[0];
  return pageShell(`
    <div class="grid-2">
      ${templateCard(t)}
      <article class="panel reveal">
        <span class="eyebrow">تفاصيل القالب</span>
        <h2>${t.name}</h2>
        <p class="lead">${t.desc}</p>
        <div class="values-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
          <div class="value-card"><strong>المجال</strong><p>${t.category}</p></div>
          <div class="value-card"><strong>النبرة</strong><p>${t.tone}</p></div>
          <div class="value-card"><strong>الرواج</strong><p>${t.popularity}%</p></div>
          <div class="value-card"><strong>الصفحات</strong><p>${t.pages}</p></div>
        </div>
        <div class="hero-actions"><a class="primary-btn" href="/builder?template=${t.id}" data-link>استخدم هذا القالب</a><a class="secondary-btn" href="/templates" data-link>عودة للقوالب</a></div>
      </article>
    </div>
  `);
}

function pagination(pages, current, action) {
  if (pages <= 1) return '';
  return `<div class="pagination reveal">${Array.from({ length: pages }, (_, i) => `<button data-action="${action}" data-page="${i+1}" class="${current===i+1?'active':''}">${i+1}</button>`).join('')}</div>`;
}

function builderPage(editId = '') {
  const urlParams = new URLSearchParams(location.search);
  const savedTemplate = localStorage.getItem('rawaj_selected_resume_template');
  const selectedTemplate = urlParams.get('template') || savedTemplate || defaultResume.template;
  const saved = getSavedResumes();
  const existing = saved.find(r => r.id === editId);
  const data = { ...defaultResume, template: selectedTemplate, ...(existing || {}) };
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">منشئ السيرة</span><h2>${existing ? 'تعديل قالب سيرة محفوظة' : 'اختر قالب السيرة الذاتية واحفظ القالب فقط.'}</h2></div>
      <p>خيار الحفظ هنا يحفظ القالب المختار فقط في المفضلة ولا يحفظ بيانات السيرة أو يستهلك السيرة المجانية.</p>
    </div>
    <div class="billing-alert reveal ${isPaymentActive() ? 'paid' : ''}">
      <strong>حفظ القالب فقط</strong>
      <span>سيتم حفظ اختيار القالب دون تخزين الاسم أو الخبرات أو أي بيانات شخصية من النموذج.</span>
    </div>
    <div class="builder-layout">
      <article class="form-card reveal">
        ${aiAssistantBuilderCard()}
        <form class="builder-form" id="resumeForm">
          <input type="hidden" name="id" value="${data.id}">
          <div class="form-grid">
            ${field('الاسم الكامل','name',data.name)}
            ${field('المسمى المهني','role',data.role)}
            ${field('البريد الإلكتروني','email',data.email,'email')}
            ${field('رقم الهاتف','phone',data.phone)}
            ${field('المدينة','city',data.city)}
            <label>القالب<select name="template">${templates.map(t => `<option value="${t.id}" ${t.id===data.template?'selected':''}>${t.name}</option>`).join('')}</select></label>
          </div>
          ${textarea('الملخص المهني','summary',data.summary)}
          ${textarea('الخبرات والإنجازات','experience',data.experience)}
          ${textarea('التعليم والشهادات','education',data.education)}
          ${textarea('المهارات - افصل بينها بفواصل','skills',data.skills)}
          <label>حالة السيرة<select name="status"><option ${data.status==='جاهزة'?'selected':''}>جاهزة</option><option ${data.status==='مسودة'?'selected':''}>مسودة</option></select></label>
          <div class="action-row"><button class="primary-btn" type="button" data-action="save-current-template">حفظ قالب السيرة فقط</button><button class="secondary-btn" type="button" data-action="download-current-pdf">تصدير PDF</button><button class="secondary-btn" type="button" id="resetForm">مسح الحقول</button></div>
        </form>
      </article>
      <aside class="resume-preview reveal"><div class="preview-paper" id="resumePreview"></div></aside>
    </div>
  `);
}

function aiAssistantBuilderCard() {
  return `
    <div class="ai-assistant-card">
      <div class="ai-assistant-head">
        <span class="ai-badge">AI</span>
        <div>
          <strong>مساعد روَاج الذكي</strong>
          <small>يصيغ ملخصاً وإنجازات ومهارات مقترحة من بياناتك الحالية.</small>
        </div>
      </div>
      <div class="ai-actions">
        <button class="mini-btn" type="button" data-action="ai-write-summary">اقتراح ملخص</button>
        <button class="mini-btn" type="button" data-action="ai-write-experience">تحسين الخبرات</button>
        <button class="mini-btn" type="button" data-action="ai-write-skills">اقتراح مهارات</button>
        <button class="mini-btn ai-primary" type="button" data-action="ai-improve-all">تحسين الكل</button>
      </div>
      <div class="ai-output" id="aiAssistantOutput">املأ الاسم والمسمى وبعض الخبرات، ثم استخدم الذكاء الاصطناعي لتوليد نسخة مهنية قابلة للتعديل.</div>
    </div>
  `;
}

function field(label, name, value, type = 'text') {
  return `<label>${label}<input name="${name}" type="${type}" value="${escapeAttr(value)}" required></label>`;
}
function textarea(label, name, value) {
  return `<label>${label}<textarea name="${name}" required>${escapeHtml(value)}</textarea></label>`;
}

function dashboardPage() {
  const allResumes = getSavedResumes();
  const previewPromptId = localStorage.getItem('rawaj_last_saved_resume');
  const previewPromptResume = allResumes.find(r => r.id === previewPromptId);
  let resumes = allResumes;
  resumes = resumes.filter(r => `${r.name} ${r.role} ${r.status}`.includes(state.dashboardSearch));
  resumes.sort((a,b) => state.dashboardSort === 'name' ? a.name.localeCompare(b.name, 'ar') : (b.updatedAt || 0) - (a.updatedAt || 0));
  const perPage = 5;
  const pages = Math.max(1, Math.ceil(resumes.length / perPage));
  state.dashboardPage = Math.min(state.dashboardPage, pages);
  const paged = resumes.slice((state.dashboardPage - 1) * perPage, state.dashboardPage * perPage);
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">لوحة السير المحفوظة</span><h2>إدارة كاملة لكل نسخ سيرتك الذاتية.</h2></div>
      <a class="primary-btn" href="/builder" data-link>إنشاء سيرة جديدة</a>
    </div>
    ${previewPromptResume ? `<div class="save-preview-banner reveal">
      <div><strong>تم حفظ السيرة بنجاح</strong><span>يمكنك الآن تمكين المعاينة الاحترافية لسيرة ${escapeHtml(previewPromptResume.name)} قبل التعديل أو التصدير.</span></div>
      <div class="action-row"><button class="primary-btn" data-action="preview-resume" data-id="${previewPromptResume.id}">تمكين المعاينة</button><button class="ghost-btn" data-action="clear-preview-prompt">لاحقاً</button></div>
    </div>` : ''}
    <div class="filters reveal" style="grid-template-columns:minmax(220px,1fr) 220px">
      <input class="control" id="dashboardSearch" placeholder="ابحث بالاسم أو المسمى أو الحالة..." value="${state.dashboardSearch}">
      <select class="control" id="dashboardSort"><option value="updated" ${state.dashboardSort==='updated'?'selected':''}>الأحدث تعديلاً</option><option value="name" ${state.dashboardSort==='name'?'selected':''}>حسب الاسم</option></select>
    </div>
    <article class="table-card reveal">
      <div class="table-wrap">
        <table>
          <thead><tr><th>الاسم</th><th>المسمى</th><th>القالب</th><th>الحالة</th><th>آخر تعديل</th><th>إجراءات CRUD والمعاينة</th></tr></thead>
          <tbody>
            ${paged.map(r => `<tr>
              <td><strong>${escapeHtml(r.name)}</strong></td>
              <td>${escapeHtml(r.role)}</td>
              <td>${templates.find(t=>t.id===r.template)?.name || 'قالب روَاج'}</td>
              <td><span class="status-pill ${r.status==='مسودة'?'draft':''}">${r.status}</span></td>
              <td>${formatDate(r.updatedAt)}</td>
              <td><div class="action-row"><button class="mini-btn" data-action="preview-resume" data-id="${r.id}">معاينة</button><button class="mini-btn" data-action="download-resume-pdf" data-id="${r.id}">تصدير PDF</button><button class="mini-btn" data-action="share-resume-link" data-id="${r.id}">مشاركة الرابط</button><button class="mini-btn" data-action="edit-resume" data-id="${r.id}">تعديل</button><button class="mini-btn" data-action="duplicate-resume" data-id="${r.id}">تكرار</button><button class="mini-btn" data-action="delete-resume" data-id="${r.id}">حذف</button></div></td>
            </tr>`).join('') || `<tr><td colspan="6"><div class="empty-state">لا توجد سير محفوظة مطابقة. أنشئ سيرة جديدة لتظهر هنا.</div></td></tr>`}
          </tbody>
        </table>
      </div>
      ${pagination(pages, state.dashboardPage, 'dashboard-page')}
    </article>
  `);
}

function savedPreviewPage(id) {
  const resume = getSavedResumes().find(r => r.id === id);
  if (!resume) return notFoundPage();
  const template = templates.find(t => t.id === resume.template) || templates[0];
  localStorage.removeItem('rawaj_last_saved_resume');
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">معاينة السيرة المحفوظة</span><h2>${escapeHtml(resume.name)}</h2></div>
      <div class="hero-actions"><button class="secondary-btn" type="button" data-action="download-resume-pdf" data-id="${resume.id}">تصدير PDF</button><button class="secondary-btn" type="button" data-action="share-resume-link" data-id="${resume.id}">مشاركة رابط السيرة</button><a class="secondary-btn" href="/builder/${resume.id}" data-link>تعديل السيرة</a><a class="primary-btn" href="/dashboard" data-link>العودة للوحة</a></div>
    </div>
    <div class="saved-preview-layout">
      <article class="resume-preview-page reveal" style="--accent:${template.accent}">
        <div class="preview-paper saved-paper">${resumeDocumentHtml(resume)}</div>
      </article>
      <aside class="panel reveal">
        <span class="eyebrow">القالب المفعّل</span>
        <h3>${template.name}</h3>
        <p class="lead">${template.desc}</p>
        <div class="values-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
          <div class="value-card"><strong>المجال</strong><p>${template.category}</p></div>
          <div class="value-card"><strong>النبرة</strong><p>${template.tone}</p></div>
          <div class="value-card"><strong>الرواج</strong><p>${template.popularity}%</p></div>
          <div class="value-card"><strong>الصفحات</strong><p>${template.pages}</p></div>
        </div>
      </aside>
    </div>
  `);
}

function aiPage() {
  return pageShell(`
    <section class="ai-hero reveal">
      <div>
        <span class="eyebrow">ذكاء اصطناعي عربي للسيرة الذاتية</span>
        <h2>حوّل بياناتك إلى صياغة مهنية جاهزة للتخصيص.</h2>
        <p class="lead">يدعمك مساعد روَاج الذكي داخل منشئ السيرة باقتراح ملخص احترافي، تحويل الخبرات إلى إنجازات قابلة للقياس، وترتيب المهارات حسب المسمى الوظيفي.</p>
        <div class="hero-actions"><a class="primary-btn" href="/builder" data-link>جرّب المساعد في المنشئ</a><a class="secondary-btn" href="/templates" data-link>اختر قالباً أولاً</a></div>
      </div>
      <div class="ai-console parallax-card" data-depth="10">
        <div class="ai-console-top"><span></span><span></span><span></span></div>
        <div class="ai-line wide"></div><div class="ai-line"></div><div class="ai-line short"></div>
        <div class="ai-suggestion"><strong>اقتراح ذكي</strong><p>قُد مشاريعك بصياغة تبرز الأثر، الأرقام، والكلمات المفتاحية المناسبة لأنظمة الفرز.</p></div>
      </div>
    </section>
    <section class="reveal" style="margin-top:60px">
      <div class="section-head"><div><span class="eyebrow">ما الذي يفعله؟</span><h2>مساعدة فورية دون مغادرة صفحة الإنشاء.</h2></div></div>
      <div class="grid-3">
        ${featureCard('🧠','صياغة الملخص','يبني ملخصاً مختصراً يربط المسمى والخبرة بالقيمة التي تقدمها لصاحب العمل.')}
        ${featureCard('📈','تحويل المهام إلى إنجازات','يعيد كتابة الخبرات بنبرة إنجازات قابلة للقياس ومناسبة للفرز السريع.')}
        ${featureCard('🎯','مهارات وكلمات مفتاحية','يقترح مهارات مرتبطة بالمجال لتقوية ظهور السيرة أمام مسؤولي التوظيف.')}
      </div>
    </section>
  `);
}

function pricingPage() {
  return pageShell(`
    <div class="section-head reveal"><div><span class="eyebrow">خطط مرنة</span><h2>ابدأ مجاناً ثم وسّع حضورك المهني.</h2></div><p>السيرة الأولى مجانية بالكامل، وبعدها يمكنك الدفع بأمان عبر Apple Pay أو إضافة بطاقة بنكية.</p></div>
    <div class="grid-3">${plans.map((plan, index) => `<article class="plan-card reveal ${plan.featured?'featured':''}"><h3>${plan.name}</h3><p>${plan.desc}</p><div class="price">${plan.price}</div><ul>${plan.items.map(i=>`<li>${i}</li>`).join('')}</ul><a class="${plan.featured?'secondary-btn':'primary-btn'}" href="${index === 0 ? '/builder' : '/checkout'}" data-link>${index === 0 ? 'ابدأ مجاناً' : 'الدفع الآن'}</a></article>`).join('')}</div>
  `);
}

function checkoutPage() {
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">الدفع الآمن</span><h2>أكمل إنشاء السير الإضافية.</h2></div>
      <p>بعد أول سيرة مجانية، فعّل الدفع مرة واحدة لاستخدام القوالب وحفظ سير إضافية عبر Apple Pay أو البطاقة.</p>
    </div>
    <div class="checkout-layout">
      <article class="panel reveal">
        <h3>اختر طريقة الدفع</h3>
        <div class="payment-methods">
          ${paymentMethods.map(method => `<button type="button" class="payment-method ${state.paymentMethod === method.id ? 'active' : ''}" data-action="payment-method" data-method="${method.id}"><span>${method.icon}</span><strong>${method.name}</strong><small>${method.desc}</small></button>`).join('')}
        </div>
        <div class="billing-summary">
          <span>سيرة أولى</span><strong>مجانية</strong>
          <span>السير الإضافية</span><strong>49 ر.س</strong>
          <span>الحالة</span><strong>${isPaymentActive() ? 'مدفوع' : 'بانتظار الدفع'}</strong>
        </div>
      </article>
      <article class="form-card reveal">
        <form class="payment-form" id="paymentForm">
          <h3>${state.paymentMethod === 'apple-pay' ? 'الدفع عبر Apple Pay' : 'إضافة بطاقة بنكية'}</h3>
          ${state.paymentMethod === 'apple-pay' ? '<button class="apple-pay-btn" type="button" data-action="complete-apple-pay"> Pay</button><p class="payment-note">سيظهر إيصال الدفع مباشرة بعد تأكيد العملية مع حفظ السيرة المعلقة تلقائياً.</p>' : '<div class="form-grid"><label>اسم حامل البطاقة<input required name="cardName" placeholder="الاسم كما يظهر على البطاقة"></label><label>رقم البطاقة<input required inputmode="numeric" maxlength="19" placeholder="0000 0000 0000 0000"></label><label>تاريخ الانتهاء<input required placeholder="MM/YY"></label><label>CVV<input required inputmode="numeric" maxlength="4" placeholder="123"></label></div><button class="primary-btn" type="submit">دفع 49 ر.س واستلام الإيصال</button>'}
        </form>
      </article>
    </div>
  `);
}

function paymentReceiptPage() {
  const receipt = getLastPaymentReceipt();
  if (!receipt) {
    return pageShell(`
      <article class="panel reveal receipt-empty">
        <span class="eyebrow">إيصال الدفع</span>
        <h2>لا يوجد إيصال محفوظ حالياً.</h2>
        <p class="lead">أكمل عملية الدفع أولاً ليظهر إيصال العملية هنا تلقائياً.</p>
        <a class="primary-btn" href="/checkout" data-link>الذهاب للدفع</a>
      </article>
    `);
  }
  return pageShell(`
    <div class="receipt-layout">
      <article class="payment-receipt reveal">
        <div class="receipt-top">
          <div>
            <span class="eyebrow">إيصال دفع</span>
            <h2>تم إكمال العملية بنجاح</h2>
            <p>احتفظ بهذا الإيصال كمرجع لتفعيل إنشاء السير الإضافية في روَاج.</p>
          </div>
          <div class="receipt-status">مدفوع</div>
        </div>
        <div class="receipt-number">${escapeHtml(receipt.id)}</div>
        <div class="receipt-grid">
          <div><span>المبلغ</span><strong>${escapeHtml(receipt.amount)}</strong></div>
          <div><span>طريقة الدفع</span><strong>${escapeHtml(formatReceiptMethod(receipt.method))}</strong></div>
          <div><span>تاريخ العملية</span><strong>${escapeHtml(formatDate(receipt.createdAt))}</strong></div>
          <div><span>الخطة</span><strong>${escapeHtml(receipt.plan)}</strong></div>
          <div><span>السيرة المرتبطة</span><strong>${escapeHtml(receipt.resumeName || 'تفعيل عام للحساب')}</strong></div>
          <div><span>الحالة</span><strong>${escapeHtml(receipt.status)}</strong></div>
        </div>
        <div class="receipt-actions">
          <a class="primary-btn" href="/dashboard" data-link>العودة للوحة السير</a>
          <a class="secondary-btn" href="/builder" data-link>إنشاء سيرة أخرى</a>
        </div>
      </article>
      <aside class="panel reveal receipt-note">
        <h3>ماذا بعد الدفع؟</h3>
        <p>تم تفعيل الدفع على هذا المتصفح، ويمكنك الآن حفظ السير الإضافية أو متابعة تعديل السيرة التي كانت معلقة قبل الدفع.</p>
        <div class="billing-summary">
          <span>رقم المرجع</span><strong>${escapeHtml(receipt.id)}</strong>
          <span>حالة الحساب</span><strong>مفعّل</strong>
          ${receipt.sentTo ? `<span>أُرسل إلى</span><strong>${escapeHtml(receipt.sentTo)}</strong>` : ''}
        </div>
        <div class="receipt-email-box">
          <h3>إرسال الإيصال بالبريد</h3>
          <p>أدخل بريدك ليتم تجهيز رسالة تحتوي على تفاصيل الإيصال ورقم المرجع.</p>
          <div class="receipt-email-form">
            <input id="receiptEmail" type="email" placeholder="you@example.com" value="${escapeAttr(receipt.customerEmail || receipt.sentTo || '')}" aria-label="البريد الإلكتروني لاستلام الإيصال">
            <button class="primary-btn" type="button" data-action="send-receipt-email">إرسال الإيصال</button>
          </div>
        </div>
      </aside>
    </div>
  `);
}

function aboutPage() {
  return pageShell(`
    <div class="grid-2">
      <article class="story-card reveal"><span class="eyebrow">عن روَاج</span><h2>نصمم السيرة كما يصمم المنتج: هدف، جمهور، أثر.</h2><p>روَاج منصة عربية تساعد الباحثين عن عمل على تحويل مسارهم المهني إلى وثيقة مقنعة. نؤمن أن السيرة ليست قائمة وظائف، بل تجربة قراءة تقود مسؤول التوظيف إلى قرار واضح.</p></article>
      <article class="story-card reveal"><h3>الفكرة البصرية</h3><p>اعتمدنا مشهد أوراق ثلاثي العمق يتحرك مع التمرير والماوس ليعكس انتقال السيرة من وثيقة ثابتة إلى أداة مهنية حية قابلة للتعديل والتطور.</p></article>
    </div>
    <div class="values-grid reveal">
      <div class="value-card"><strong>وضوح</strong><p>هيكلة الأقسام حسب ما يبحث عنه مسؤول التوظيف.</p></div>
      <div class="value-card"><strong>رواج</strong><p>لغة مهنية تبرز القيمة لا الوصف العام.</p></div>
      <div class="value-card"><strong>مرونة</strong><p>نسخ متعددة لكل فرصة عمل أو مجال.</p></div>
      <div class="value-card"><strong>هوية عربية</strong><p>تجربة RTL مصممة بعناية وليست ترجمة سطحية.</p></div>
    </div>
  `);
}

function contactPage() {
  return pageShell(`
    <div class="contact-layout">
      <article class="panel reveal"><span class="eyebrow">تواصل معنا</span><h2>هل تريد مراجعة سيرتك أو قالباً خاصاً؟</h2><p class="lead">أرسل لنا احتياجك وسنقترح طريقة بناء نسخة مهنية متوافقة مع مجال عملك ومستوى خبرتك.</p><div class="roadmap"><div class="step-card"><div class="step-num">@</div><div><h3>support@rawaj.cv</h3><p>رد خلال يوم عمل</p></div></div><div class="step-card"><div class="step-num">☎</div><div><h3>+966 55 123 4567</h3><p>استشارات محتوى وقوالب للشركات</p></div></div></div></article>
      <article class="form-card reveal"><form class="contact-form" id="contactForm"><div class="form-grid"><label>الاسم<input required name="name" placeholder="اسمك الكامل"></label><label>البريد<input required type="email" name="email" placeholder="you@example.com"></label></div><label>نوع الطلب<select name="type"><option>مراجعة سيرة</option><option>قالب مخصص</option><option>اشتراك شركة</option></select></label><label>الرسالة<textarea required name="message" placeholder="اكتب تفاصيل احتياجك المهني..."></textarea></label><button class="primary-btn" type="submit">إرسال الطلب</button></form></article>
    </div>
  `);
}

function loginRequiredPage() {
  const redirectPath = `${location.pathname}${location.search}`;
  localStorage.setItem('rawaj_auth_redirect', redirectPath);
  const isDashboard = isDashboardPath(location.pathname);
  const isSettings = isSettingsPath(location.pathname);
  const title = isDashboard ? 'سجّل دخولك قبل فتح لوحة السير.' : isSettings ? 'سجّل دخولك قبل إدارة إعدادات الحساب.' : 'سجّل دخولك قبل إنشاء السيرة الذاتية.';
  const message = isDashboard
    ? 'لوحة السير تحتوي على سيرك المحفوظة وإجراءات التعديل والمعاينة، لذلك يجب تسجيل الدخول قبل الوصول إليها.'
    : isSettings
      ? 'إعدادات الحساب تحتوي على بياناتك وتفضيلاتك الشخصية، لذلك يجب تسجيل الدخول قبل تعديلها.'
      : 'حماية إنشاء السير تضمن حفظ بياناتك وقوالبك داخل حساب روَاج، ثم يمكنك العودة مباشرة إلى منشئ السيرة بعد التسجيل.';
  return pageShell(`
    <article class="panel reveal" style="max-width:760px;margin:auto;text-align:center">
      <span class="eyebrow">تسجيل الدخول مطلوب</span>
      <h2>${title}</h2>
      <p class="lead" style="margin-inline:auto">${message}</p>
      <div class="hero-actions" style="justify-content:center">
        <a class="primary-btn" href="/auth" data-link>تسجيل الدخول أو إنشاء حساب</a>
        <a class="secondary-btn" href="/templates" data-link>استعراض القوالب أولاً</a>
      </div>
    </article>
  `);
}

function notFoundPage() {
  return pageShell(`<article class="panel reveal"><span class="eyebrow">404</span><h2>الصفحة غير موجودة</h2><p class="lead">يبدو أن المسار غير متاح في روَاج.</p><a class="primary-btn" href="/" data-link>العودة للرئيسية</a></article>`);
}

function render() {
  const path = location.pathname.replace(/\/$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (path === '/') app.innerHTML = homePage();
  else if (path === '/templates') app.innerHTML = templatesPage();
  else if (parts[0] === 'templates' && parts[1]) app.innerHTML = templateDetailPage(parts[1]);
  else if (path === '/builder') app.innerHTML = getCurrentUser() ? builderPage() : loginRequiredPage();
  else if (parts[0] === 'builder' && parts[1]) app.innerHTML = getCurrentUser() ? builderPage(parts[1]) : loginRequiredPage();
  else if (path === '/dashboard') app.innerHTML = getCurrentUser() ? dashboardPage() : loginRequiredPage();
  else if (path === '/settings') app.innerHTML = getCurrentUser() ? accountSettingsPage() : loginRequiredPage();
  else if (parts[0] === 'preview' && parts[1]) app.innerHTML = savedPreviewPage(parts[1]);
  else if (path === '/ai') app.innerHTML = aiPage();
  else if (path === '/pricing') app.innerHTML = pricingPage();
  else if (path === '/checkout') app.innerHTML = checkoutPage();
  else if (path === '/receipt') app.innerHTML = paymentReceiptPage();
  else if (path === '/auth') app.innerHTML = authPage();
  else if (path === '/about') app.innerHTML = aboutPage();
  else if (path === '/contact') app.innerHTML = contactPage();
  else app.innerHTML = notFoundPage();

  setActiveNav();
  updateAuthNavState();
  bindPageEvents();
  revealVisible();
  printPendingResumePdf();
  app.focus({ preventScroll: true });
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}

function printPendingResumePdf() {
  const pendingPdfId = localStorage.getItem('rawaj_pending_pdf_resume');
  if (!pendingPdfId || location.pathname !== `/preview/${pendingPdfId}`) return;
  const resume = getSavedResumes().find(r => r.id === pendingPdfId);
  localStorage.removeItem('rawaj_pending_pdf_resume');
  if (resume) setTimeout(() => printResumePdf(resume.name || 'سيرة روَاج'), 180);
}

function bindPageEvents() {
  document.querySelectorAll('a[data-link]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http')) return;
      event.preventDefault();
      navigate(href);
    });
  });

  const templateSearch = document.getElementById('templateSearch');
  if (templateSearch) templateSearch.addEventListener('input', e => { state.templateSearch = e.target.value; state.templatePage = 1; render(); });
  const templateCategory = document.getElementById('templateCategory');
  if (templateCategory) templateCategory.addEventListener('change', e => { state.templateCategory = e.target.value; state.templatePage = 1; render(); });
  const templateTone = document.getElementById('templateTone');
  if (templateTone) templateTone.addEventListener('change', e => { state.templateTone = e.target.value; state.templatePage = 1; render(); });
  const templateSort = document.getElementById('templateSort');
  if (templateSort) templateSort.addEventListener('change', e => { state.templateSort = e.target.value; render(); });

  const dashboardSearch = document.getElementById('dashboardSearch');
  if (dashboardSearch) dashboardSearch.addEventListener('input', e => { state.dashboardSearch = e.target.value; state.dashboardPage = 1; render(); });
  const dashboardSort = document.getElementById('dashboardSort');
  if (dashboardSort) dashboardSort.addEventListener('change', e => { state.dashboardSort = e.target.value; render(); });

  document.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', handleAction));

  const resumeForm = document.getElementById('resumeForm');
  if (resumeForm) {
    resumeForm.addEventListener('input', updatePreview);
    resumeForm.addEventListener('submit', saveCurrentResumeTemplate);
    document.getElementById('resetForm')?.addEventListener('click', () => { resumeForm.reset(); updatePreview(); showToast('تم مسح الحقول مؤقتاً'); });
    updatePreview();
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', e => { e.preventDefault(); e.target.reset(); showToast('تم استلام طلبك، سنعود إليك قريباً'); });

  const paymentForm = document.getElementById('paymentForm');
  if (paymentForm) paymentForm.addEventListener('submit', e => { e.preventDefault(); completeCheckout('card'); });

  const authForm = document.getElementById('authForm');
  if (authForm) authForm.addEventListener('submit', handleEmailRegistration);

  const accountSettingsForm = document.getElementById('accountSettingsForm');
  if (accountSettingsForm) accountSettingsForm.addEventListener('submit', handleAccountSettingsSubmit);

  const accountSecurityForm = document.getElementById('accountSecurityForm');
  if (accountSecurityForm) accountSecurityForm.addEventListener('submit', handleAccountSecuritySubmit);
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  const page = Number(event.currentTarget.dataset.page);
  const id = event.currentTarget.dataset.id;
  if (action === 'auth-social') { completeSocialRegistration(event.currentTarget.dataset.provider); return; }
  if (action === 'auth-logout') { logoutCurrentUser(); return; }
  if (action === 'reset-account-settings') { resetAccountSettings(); return; }
  if (action === 'delete-account-data') { deleteAccountData(); return; }
  if (action === 'ai-write-summary') { suggestResumeContent('summary'); return; }
  if (action === 'ai-write-experience') { suggestResumeContent('experience'); return; }
  if (action === 'ai-write-skills') { suggestResumeContent('skills'); return; }
  if (action === 'ai-improve-all') { suggestResumeContent('all'); return; }
  if (action === 'toggle-template-favorite') {
    const templateId = event.currentTarget.dataset.templateId;
    const isFavorite = toggleTemplateFavorite(templateId);
    showToast(isFavorite ? 'تمت إضافة القالب إلى المفضلة' : 'تمت إزالة القالب من المفضلة');
    render();
    return;
  }
  if (action === 'save-current-template') { saveCurrentResumeTemplate(event); return; }
  if (action === 'template-page') { state.templatePage = page; render(); return; }
  if (action === 'dashboard-page') { state.dashboardPage = page; render(); return; }
  if (action === 'payment-method') { state.paymentMethod = event.currentTarget.dataset.method; render(); return; }
  if (action === 'complete-apple-pay') { completeCheckout('apple-pay'); return; }
  if (action === 'send-receipt-email') { sendReceiptByEmail(); return; }
  if (action === 'clear-preview-prompt') { localStorage.removeItem('rawaj_last_saved_resume'); render(); return; }
  if (action === 'download-current-pdf') { downloadCurrentResumePdf(); return; }
  if (action === 'download-resume-pdf') { downloadSavedResumePdf(id); return; }
  if (action === 'share-resume-link') { shareResumeLink(id); return; }
  if (action === 'preview-resume') { navigate(`/preview/${id}`); return; }
  if (action === 'edit-resume') { navigate(`/builder/${id}`); return; }
  const resumes = getSavedResumes();
  const resume = resumes.find(r => r.id === id);
  if (!resume) return;
  if (action === 'duplicate-resume') {
    const duplicate = { ...resume, id: cryptoId(), name: `${resume.name} - نسخة`, status: 'مسودة', updatedAt: Date.now() };
    if (shouldChargeForNewResume()) {
      localStorage.setItem('rawaj_pending_resume', JSON.stringify(duplicate));
      showToast('تكرار السير بعد الأولى يتطلب الدفع');
      navigate('/checkout');
      return;
    }
    resumes.unshift(duplicate);
    if (!isPaymentActive()) markFreeResumeUsed();
    saveResumes(resumes);
    showToast('تم تكرار السيرة بنجاح');
    render();
  }
  if (action === 'delete-resume') {
    const ok = confirm('هل تريد حذف هذه السيرة من لوحة روَاج؟');
    if (!ok) return;
    saveResumes(resumes.filter(r => r.id !== id));
    if (localStorage.getItem('rawaj_last_saved_resume') === id) localStorage.removeItem('rawaj_last_saved_resume');
    showToast('تم حذف السيرة');
    render();
  }
}

function handleAccountSettingsSubmit(event) {
  event.preventDefault();
  const user = getCurrentUser();
  if (!user) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const settings = {
    displayName: (data.displayName || '').trim(),
    email: (data.email || '').trim().toLowerCase(),
    phone: (data.phone || '').trim(),
    city: (data.city || '').trim(),
    preferredTemplate: data.preferredTemplate || defaultResume.template,
    emailUpdates: data.emailUpdates || 'weekly',
    profileVisibility: data.profileVisibility || 'private',
    language: data.language || 'ar'
  };
  if (!settings.displayName || !settings.email) {
    showToast('أدخل الاسم والبريد الإلكتروني قبل الحفظ');
    return;
  }
  saveAccountSettings(settings);
  saveCurrentUser({ ...user, name: settings.displayName, email: settings.email });
  showToast('تم حفظ إعدادات الحساب');
  render();
}

function handleAccountSecuritySubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  if (!data.newPassword || data.newPassword.length < 6 || data.newPassword !== data.confirmPassword) {
    showToast('أدخل كلمة مرور متطابقة من 6 أحرف على الأقل');
    return;
  }
  localStorage.setItem('rawaj_account_password_updated_at', String(Date.now()));
  form.reset();
  showToast('تم تحديث كلمة المرور التجريبية محلياً');
}

function resetAccountSettings() {
  localStorage.removeItem('rawaj_account_settings');
  showToast('تمت استعادة إعدادات الحساب الافتراضية');
  render();
}

function deleteAccountData() {
  const ok = confirm('هل تريد حذف بيانات الحساب من هذا المتصفح؟');
  if (!ok) return;
  localStorage.removeItem('rawaj_current_user');
  localStorage.removeItem('rawaj_account_settings');
  localStorage.removeItem('rawaj_auth_redirect');
  showToast('تم حذف بيانات الحساب المحلية');
  navigate('/auth');
}

function handleEmailRegistration(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  const email = (data.email || '').trim().toLowerCase();
  const name = (data.name || '').trim();
  const password = data.password || '';
  if (!email || !name || password.length < 6) {
    showToast('أكمل الاسم والبريد وكلمة مرور من 6 أحرف على الأقل');
    return;
  }
  saveCurrentUser({ id: `user-${Date.now()}`, name, email, provider: 'email', providerLabel: 'البريد الإلكتروني' });
  showToast('تم إنشاء حسابك بالبريد الإلكتروني');
  navigate(consumeAuthRedirect() || '/dashboard');
}

function completeSocialRegistration(providerId) {
  const provider = socialAuthProviders.find(item => item.id === providerId) || socialAuthProviders[0];
  const storedEmail = localStorage.getItem('rawaj_receipt_email') || defaultResume.email;
  saveCurrentUser({
    id: `${provider.id}-${Date.now()}`,
    name: provider.id === 'apple' ? 'مستخدم Apple' : 'مستخدم Google',
    email: provider.id === 'apple' ? `apple.user.${Date.now()}@privaterelay.appleid.com` : storedEmail,
    provider: provider.id,
    providerLabel: provider.name
  });
  showToast(`تم التسجيل عبر ${provider.name}`);
  navigate(consumeAuthRedirect() || '/dashboard');
}

function suggestResumeContent(type) {
  const form = document.getElementById('resumeForm');
  const output = document.getElementById('aiAssistantOutput');
  if (!form) return;
  const data = Object.fromEntries(new FormData(form));
  const draft = buildAiResumeDraft(data);
  const applyField = (name, value) => {
    const field = form.elements[name];
    if (!field) return;
    field.value = value;
    field.dispatchEvent(new Event('input', { bubbles: true }));
  };

  if (type === 'summary' || type === 'all') applyField('summary', draft.summary);
  if (type === 'experience' || type === 'all') applyField('experience', draft.experience);
  if (type === 'skills' || type === 'all') applyField('skills', draft.skills);

  updatePreview();
  if (output) {
    const label = type === 'summary' ? 'الملخص المهني' : type === 'experience' ? 'الخبرات' : type === 'skills' ? 'المهارات' : 'كل الأقسام';
    output.innerHTML = `<strong>تم تحسين ${label}.</strong><span> راجع النص المقترح وعدّله ليطابق أرقامك وخبرتك الفعلية.</span>`;
  }
  showToast('تم توليد اقتراح ذكي قابل للتعديل');
}

function buildAiResumeDraft(data) {
  const name = (data.name || 'المرشح').trim();
  const role = (data.role || 'محترف طموح').trim();
  const city = (data.city || 'السوق المحلي').trim();
  const baseExperience = (data.experience || '').trim();
  const baseSkills = (data.skills || '').trim();
  const profile = getAiRoleProfile(role, `${role} ${baseExperience} ${baseSkills}`);
  const currentExperience = baseExperience || `إدارة مبادرات مرتبطة بمجال ${role}، تنسيق أصحاب المصلحة، وتحسين جودة المخرجات ضمن مواعيد واضحة.`;

  return {
    summary: `${name}، ${role} في ${city}، يمتلك قدرة على ${profile.value} مع تركيز على تحويل الأهداف إلى نتائج قابلة للقياس. يجمع بين ${profile.traits} ويبحث عن فرصة يساهم فيها في رفع جودة الأداء وتسريع النمو.`,
    experience: `• ${profile.action} بما يدعم تحقيق مؤشرات الأداء ورفع كفاءة العمل.\n• ${currentExperience}\n• التعاون مع الفرق المعنية لتحليل المتطلبات، ترتيب الأولويات، وتقديم حلول عملية قابلة للتنفيذ.\n• توثيق النتائج والدروس المستفادة وتحويلها إلى تحسينات مستمرة في سير العمل.`,
    skills: mergeSkillSuggestions(baseSkills, profile.skills).join('، ')
  };
}

function getAiRoleProfile(role, text) {
  const content = text.toLowerCase();
  if (/بيانات|data|تحليل|analyst|ذكاء|ai|machine/.test(content)) {
    return { value: 'تحليل البيانات واستخراج مؤشرات تساعد على اتخاذ القرار', traits: 'التفكير التحليلي، الدقة، وبناء لوحات مؤشرات واضحة', action: 'تحليل مصادر بيانات متعددة واستخلاص فرص تحسين قابلة للتطبيق', skills: ['تحليل البيانات', 'Excel', 'Power BI', 'SQL', 'تصور البيانات', 'حل المشكلات'] };
  }
  if (/منتج|product|مشروع|project|scrum/.test(content)) {
    return { value: 'قيادة المنتجات والمشاريع من الفكرة حتى الإطلاق', traits: 'فهم المستخدم، إدارة الأولويات، وقياس الأثر', action: 'تنسيق خارطة طريق واضحة وربط متطلبات المستخدم بأهداف العمل', skills: ['إدارة المنتجات', 'خرائط الطريق', 'Agile', 'تحليل المتطلبات', 'تجربة المستخدم', 'قياس الأداء'] };
  }
  if (/مبيعات|sales|عملاء|customer/.test(content)) {
    return { value: 'بناء علاقات عملاء وتحويل الفرص إلى نتائج تجارية', traits: 'التفاوض، المتابعة الدقيقة، وفهم احتياجات السوق', action: 'إدارة مسار المبيعات وتحسين تجربة العميل من أول تواصل حتى الإغلاق', skills: ['إدارة العلاقات', 'التفاوض', 'CRM', 'تحليل السوق', 'خدمة العملاء', 'تحقيق الأهداف'] };
  }
  if (/تصميم|designer|ux|ui|جرافيك|graphic/.test(content)) {
    return { value: 'تصميم تجارب ومواد بصرية تخدم الهوية والهدف التجاري', traits: 'الحس البصري، التفكير الإبداعي، والاهتمام بالتفاصيل', action: 'تطوير تصاميم وتجارب مستخدم متناسقة مع الهوية واحتياجات الجمهور', skills: ['تصميم بصري', 'تجربة المستخدم', 'Figma', 'Adobe Creative Suite', 'هوية بصرية', 'نمذجة أولية'] };
  }
  if (/تسويق|marketing|محتوى|social|حملات/.test(content)) {
    return { value: 'تخطيط حملات ومحتوى يزيد الوصول والتحويل', traits: 'الإبداع، قراءة البيانات، وفهم سلوك الجمهور', action: 'إطلاق حملات متعددة القنوات وتحسين الرسائل وفق مؤشرات الأداء', skills: ['التسويق الرقمي', 'كتابة المحتوى', 'SEO', 'إدارة الحملات', 'تحليل الأداء', 'وسائل التواصل'] };
  }
  if (/تقنية|developer|برمج|frontend|backend|devops|software/.test(content)) {
    return { value: 'بناء حلول تقنية مستقرة وقابلة للتوسع', traits: 'حل المشكلات، جودة الكود، والتعلم المستمر', action: 'تطوير مكونات تقنية وتحسين الأداء والاعتمادية بالتعاون مع فرق المنتج', skills: ['JavaScript', 'واجهات برمجة التطبيقات', 'Git', 'اختبار البرمجيات', 'تحسين الأداء', 'أمان التطبيقات'] };
  }
  return { value: `تنظيم العمل وتقديم قيمة واضحة في مجال ${role}`, traits: 'التواصل الفعال، المبادرة، والانضباط المهني', action: 'تحسين الإجراءات اليومية وتحويل المهام إلى نتائج واضحة', skills: ['التواصل الفعال', 'إدارة الوقت', 'حل المشكلات', 'العمل الجماعي', 'التخطيط', 'التعلم السريع'] };
}

function mergeSkillSuggestions(existingSkills, suggestedSkills) {
  const existing = existingSkills.split('،').join(',').split(',').map(skill => skill.trim()).filter(Boolean);
  return [...new Set([...suggestedSkills, ...existing])].slice(0, 10);
}

function updatePreview() {
  const form = document.getElementById('resumeForm');
  const preview = document.getElementById('resumePreview');
  if (!form || !preview) return;
  const data = Object.fromEntries(new FormData(form));
  const template = templates.find(t => t.id === data.template) || templates[0];
  preview.style.borderTop = `10px solid ${template.accent}`;
  preview.innerHTML = resumeDocumentHtml(data);
}

function saveCurrentResumeTemplate(event) {
  event?.preventDefault();
  const form = document.getElementById('resumeForm');
  if (!form) return;
  const data = Object.fromEntries(new FormData(form));
  const template = templates.find(t => t.id === data.template) || templates[0];
  const favorites = getFavoriteTemplates();
  if (!favorites.includes(template.id)) saveFavoriteTemplates([...favorites, template.id]);
  localStorage.setItem('rawaj_selected_resume_template', template.id);
  updatePreview();
  showToast(`تم حفظ قالب "${template.name}" فقط دون حفظ بيانات السيرة`);
}

function downloadCurrentResumePdf() {
  const form = document.getElementById('resumeForm');
  const preview = document.getElementById('resumePreview');
  if (!form || !preview) return;
  updatePreview();
  const data = Object.fromEntries(new FormData(form));
  printResumePdf(data.name || 'سيرة روَاج');
}

function downloadSavedResumePdf(id) {
  const resume = getSavedResumes().find(r => r.id === id);
  if (!resume) return;
  const previewPaper = document.querySelector('.preview-paper');
  if (previewPaper && location.pathname === `/preview/${id}`) {
    printResumePdf(resume.name || 'سيرة روَاج');
    return;
  }
  localStorage.setItem('rawaj_pending_pdf_resume', id);
  navigate(`/preview/${id}`);
}

async function shareResumeLink(id) {
  const resume = getSavedResumes().find(r => r.id === id);
  if (!resume) return;
  const url = `${location.origin}/preview/${id}`;
  const title = `سيرة ${resume.name || 'روَاج'}`;
  const text = `رابط سيرة ${resume.name || 'ذاتية'} على روَاج`;

  try {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      showToast('تم فتح خيارات مشاركة رابط السيرة');
      return;
    }
    await navigator.clipboard.writeText(url);
    showToast('تم نسخ رابط السيرة للمشاركة');
  } catch (error) {
    const fallback = prompt('انسخ رابط السيرة:', url);
    if (fallback !== null) showToast('رابط السيرة جاهز للمشاركة');
  }
}

function printResumePdf(title) {
  const resumePaper = document.querySelector('.preview-paper');
  if (!resumePaper) return;

  const printFrame = document.createElement('iframe');
  printFrame.title = `${title} - روَاج PDF`;
  printFrame.setAttribute('aria-hidden', 'true');
  printFrame.style.position = 'fixed';
  printFrame.style.left = '-10000px';
  printFrame.style.top = '0';
  printFrame.style.width = '1px';
  printFrame.style.height = '1px';
  printFrame.style.border = '0';

  const paperClone = resumePaper.cloneNode(true);
  const paperStyle = getComputedStyle(resumePaper);
  paperClone.style.borderTop = `${paperStyle.borderTopWidth} solid ${paperStyle.borderTopColor}`;

  const removePrintFrame = () => {
    setTimeout(() => printFrame.remove(), 250);
  };

  document.body.appendChild(printFrame);
  const printDocument = printFrame.contentDocument || printFrame.contentWindow?.document;
  if (!printDocument) {
    printFrame.remove();
    return;
  }

  printDocument.open();
  printDocument.write(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>${escapeHtml(title)} - روَاج PDF</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Reem+Kufi:wght@500;600;700&display=swap" rel="stylesheet">
      <style>${resumePrintDocumentCss()}</style>
    </head>
    <body>
      <main class="print-template-only"></main>
    </body>
    </html>
  `);
  printDocument.close();
  printDocument.querySelector('.print-template-only')?.appendChild(paperClone);

  showToast('سيتم طباعة القالب فقط، ويمكنك اختيار "حفظ كملف PDF"');
  setTimeout(() => {
    printFrame.contentWindow?.focus();
    printFrame.contentWindow?.addEventListener('afterprint', removePrintFrame, { once: true });
    printFrame.contentWindow?.print();
    setTimeout(removePrintFrame, 1400);
  }, 250);
}

function resumePrintDocumentCss() {
  return `
    @page { size: A4; margin: 12mm; }
    :root {
      --ink: #17120b;
      --muted: #786b59;
      --paper: #fffaf0;
      --teal: #0d5d56;
      --copper: #b5632a;
      --font-body: 'IBM Plex Sans Arabic', Arial, sans-serif;
      --font-display: 'Reem Kufi', 'IBM Plex Sans Arabic', Arial, sans-serif;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; min-height: 100%; background: #ffffff; color: var(--ink); font-family: var(--font-body); direction: rtl; }
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .print-template-only { width: 100%; }
    .preview-paper {
      width: 100%;
      min-height: auto;
      margin: 0;
      padding: 18mm;
      border-radius: 0;
      background: #ffffff;
      color: var(--ink);
      box-shadow: none;
      font-family: var(--font-body);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .preview-paper h3 {
      margin: 0 0 6px;
      color: var(--teal);
      font-family: var(--font-display);
      font-size: 30px;
      line-height: 1.2;
    }
    .preview-paper p { margin: 8px 0; color: #4e4131; line-height: 1.85; white-space: pre-line; }
    .preview-role { color: var(--copper); font-weight: 900; margin-bottom: 8px; }
    .preview-section { margin-top: 18px; padding-top: 14px; border-top: 1px solid rgba(111,55,28,.16); page-break-inside: avoid; }
    .preview-section strong { display: block; color: var(--teal); margin-bottom: 8px; font-weight: 900; }
    .skill-pills { display: flex; gap: 8px; flex-wrap: wrap; }
    .skill-pills span { background: rgba(13,93,86,.08); color: var(--teal); padding: 6px 10px; border-radius: 999px; font-weight: 800; font-size: 12px; }
    @media print {
      html, body { width: 210mm; }
      .preview-paper { padding: 0; }
    }
  `;
}

function resumeDocumentHtml(data) {
  const skills = (data.skills || '').split('،').join(',').split(',').map(s => s.trim()).filter(Boolean);
  return `
    <h3>${escapeHtml(data.name || 'اسمك الكامل')}</h3>
    <div class="preview-role">${escapeHtml(data.role || 'مسمى وظيفي')}</div>
    <p>${escapeHtml(data.email || '')} · ${escapeHtml(data.phone || '')} · ${escapeHtml(data.city || '')}</p>
    <div class="preview-section"><strong>ملخص مهني</strong><p>${escapeHtml(data.summary || '')}</p></div>
    <div class="preview-section"><strong>الخبرات والإنجازات</strong><p>${escapeHtml(data.experience || '')}</p></div>
    <div class="preview-section"><strong>التعليم</strong><p>${escapeHtml(data.education || '')}</p></div>
    <div class="preview-section"><strong>المهارات</strong><div class="skill-pills">${skills.map(s=>`<span>${escapeHtml(s)}</span>`).join('')}</div></div>
  `;
}

function saveResumeFromForm(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  const resumes = getSavedResumes();
  const isNewResume = !data.id;
  const id = data.id || cryptoId();
  const record = { ...data, id, updatedAt: Date.now() };
  if (isNewResume && shouldChargeForNewResume()) {
    localStorage.setItem('rawaj_pending_resume', JSON.stringify(record));
    showToast('السيرة الأولى مجانية؛ السير الإضافية تتطلب الدفع');
    navigate('/checkout');
    return;
  }
  const index = resumes.findIndex(r => r.id === id);
  if (index >= 0) resumes[index] = record;
  else resumes.unshift(record);
  if (isNewResume && !isPaymentActive()) markFreeResumeUsed();
  saveResumes(resumes);
  localStorage.setItem('rawaj_last_saved_resume', id);
  showToast(isNewResume && !isPaymentActive() ? 'تم حفظ سيرتك المجانية الأولى — المعاينة متاحة الآن' : 'تم حفظ السيرة — يمكنك تمكين المعاينة الآن');
  navigate('/dashboard');
}

function completeCheckout(method) {
  localStorage.setItem('rawaj_payment_status', 'paid');
  const pending = localStorage.getItem('rawaj_pending_resume');
  if (pending) {
    const resumes = getSavedResumes();
    const record = JSON.parse(pending);
    const index = resumes.findIndex(r => r.id === record.id);
    if (index >= 0) resumes[index] = record;
    else resumes.unshift(record);
    saveResumes(resumes);
    localStorage.setItem('rawaj_last_saved_resume', record.id);
    localStorage.removeItem('rawaj_pending_resume');
    createPaymentReceipt(method, record);
    showToast(`تم الدفع عبر ${method === 'apple-pay' ? 'Apple Pay' : 'البطاقة'} وحفظ السيرة؛ الإيصال جاهز الآن`);
    navigate('/receipt');
    return;
  }
  createPaymentReceipt(method);
  showToast(`تم تفعيل الدفع عبر ${method === 'apple-pay' ? 'Apple Pay' : 'البطاقة'}؛ الإيصال جاهز الآن`);
  navigate('/receipt');
}

function createPaymentReceipt(method, resume = null) {
  const receipt = {
    id: `RAWAJ-${Date.now().toString(36).toUpperCase()}`,
    method,
    amount: '49 ر.س',
    plan: 'المحترف - سير إضافية',
    status: 'مدفوع بنجاح',
    resumeId: resume?.id || '',
    resumeName: resume?.name || '',
    customerEmail: resume?.email || localStorage.getItem('rawaj_receipt_email') || '',
    sentTo: '',
    createdAt: Date.now()
  };
  localStorage.setItem('rawaj_last_payment_receipt', JSON.stringify(receipt));
  return receipt;
}

function sendReceiptByEmail() {
  const receipt = getLastPaymentReceipt();
  const emailInput = document.getElementById('receiptEmail');
  const email = emailInput?.value.trim() || '';
  if (!receipt || !email) {
    showToast('أدخل بريداً إلكترونياً صالحاً لإرسال الإيصال');
    emailInput?.focus();
    return;
  }
  if (!emailInput.checkValidity()) {
    showToast('صيغة البريد الإلكتروني غير صحيحة');
    emailInput.focus();
    return;
  }

  const updatedReceipt = { ...receipt, customerEmail: email, sentTo: email };
  localStorage.setItem('rawaj_receipt_email', email);
  localStorage.setItem('rawaj_last_payment_receipt', JSON.stringify(updatedReceipt));

  const subject = `إيصال دفع روَاج ${receipt.id}`;
  const body = [
    'مرحباً،',
    '',
    'هذا إيصال دفعك في منصة روَاج:',
    `رقم المرجع: ${receipt.id}`,
    `المبلغ: ${receipt.amount}`,
    `طريقة الدفع: ${formatReceiptMethod(receipt.method)}`,
    `الخطة: ${receipt.plan}`,
    `السيرة المرتبطة: ${receipt.resumeName || 'تفعيل عام للحساب'}`,
    `تاريخ العملية: ${formatDate(receipt.createdAt)}`,
    `الحالة: ${receipt.status}`,
    '',
    'شكراً لاستخدامك روَاج.'
  ].join('\n');

  window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  showToast('تم تجهيز رسالة الإيصال في تطبيق البريد');
  render();
}

function getLastPaymentReceipt() {
  const receipt = localStorage.getItem('rawaj_last_payment_receipt');
  return receipt ? JSON.parse(receipt) : null;
}

function formatReceiptMethod(method) {
  return method === 'apple-pay' ? 'Apple Pay' : 'بطاقة بنكية';
}

function formatDate(timestamp) {
  if (!timestamp) return 'الآن';
  return new Intl.DateTimeFormat('ar-SA', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(timestamp));
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}
function escapeAttr(value = '') { return escapeHtml(value); }

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.14 });

function revealVisible() {
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
    observer.observe(el);
  });
}

function moveDepth(event) {
  const cards = document.querySelectorAll('.parallax-card');
  const x = (event.clientX / window.innerWidth - .5) * 2;
  const y = (event.clientY / window.innerHeight - .5) * 2;
  cards.forEach(card => {
    const depth = Number(card.dataset.depth || 10);
    card.style.transform = `rotateX(${y * -depth / 3}deg) rotateY(${x * depth / 3}deg) translate3d(${x * depth}px, ${y * depth}px, 0)`;
  });
}

window.addEventListener('mousemove', moveDepth);
window.addEventListener('scroll', () => {
  document.getElementById('siteHeader').classList.toggle('is-scrolled', scrollY > 20);
  document.documentElement.style.setProperty('--scrollY', scrollY);
});
window.addEventListener('popstate', render);
menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
themeToggle?.addEventListener('click', toggleThemePalette);

document.addEventListener('DOMContentLoaded', render);
