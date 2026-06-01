console.log('Akwadra Super Builder Initialized');
console.log('منصة روَاج لإنشاء السير الذاتية جاهزة');

const templates = [
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

templates.forEach((template, index) => {
  template.shape = template.shape || templateShapeStyles[index % templateShapeStyles.length].key;
  template.layout = template.layout || (index % 2 === 0 ? 'stacked' : 'split');
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

const app = document.getElementById('app');
const toast = document.getElementById('toast');
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');

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

function navigate(path) {
  history.pushState({}, '', path);
  render();
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
  const shape = t.shape || 'folio';
  const layout = t.layout || 'stacked';
  return `<article class="template-card reveal">
    <div class="template-preview">
      <div class="template-mini shape-${shape} layout-${layout}" style="--accent:${t.accent}">
        <div class="top"><img class="template-avatar" src="${avatar}" alt="صورة رمزية لقالب ${escapeAttr(t.name)}"></div>
        <div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div>
      </div>
    </div>
    <div class="template-body">
      <div class="template-title-row"><img class="template-card-avatar" src="${avatar}" alt=""><div><h3>${t.name}</h3><small>${t.category} · ${t.tone}</small></div></div>
      <p>${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <div class="action-row">
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
  const selectedTemplate = urlParams.get('template') || defaultResume.template;
  const saved = getSavedResumes();
  const existing = saved.find(r => r.id === editId);
  const data = { ...defaultResume, template: selectedTemplate, ...(existing || {}) };
  return pageShell(`
    <div class="section-head reveal">
      <div><span class="eyebrow">منشئ السيرة</span><h2>${existing ? 'تعديل سيرة محفوظة' : 'أنشئ سيرة ذاتية قابلة للحفظ والتعديل.'}</h2></div>
      <p>أول سيرة ذاتية مجانية، وبعدها يتطلب إنشاء سير إضافية دفعاً آمناً عبر Apple Pay أو بطاقة بنكية.</p>
    </div>
    <div class="billing-alert reveal ${isPaymentActive() ? 'paid' : ''}">
      <strong>${isPaymentActive() ? 'الدفع مفعّل' : hasUsedFreeResume() ? 'تم استخدام السيرة المجانية' : 'السيرة الأولى مجانية'}</strong>
      <span>${isPaymentActive() ? 'يمكنك إنشاء سير إضافية الآن.' : hasUsedFreeResume() ? 'سيتم تحويلك للدفع عند حفظ سيرة جديدة.' : 'احفظ أول سيرة بدون دفع، ثم تصبح السير الإضافية مدفوعة.'}</span>
      ${!isPaymentActive() && hasUsedFreeResume() ? '<a class="mini-btn" href="/checkout" data-link>الدفع الآن</a>' : ''}
    </div>
    <div class="builder-layout">
      <article class="form-card reveal">
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
          <div class="action-row"><button class="primary-btn" type="submit">حفظ السيرة</button><button class="secondary-btn" type="button" id="resetForm">مسح الحقول</button></div>
        </form>
      </article>
      <aside class="resume-preview reveal"><div class="preview-paper" id="resumePreview"></div></aside>
    </div>
  `);
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
              <td><div class="action-row"><button class="mini-btn" data-action="preview-resume" data-id="${r.id}">معاينة</button><button class="mini-btn" data-action="edit-resume" data-id="${r.id}">تعديل</button><button class="mini-btn" data-action="duplicate-resume" data-id="${r.id}">تكرار</button><button class="mini-btn" data-action="delete-resume" data-id="${r.id}">حذف</button></div></td>
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
      <div class="hero-actions"><a class="secondary-btn" href="/builder/${resume.id}" data-link>تعديل السيرة</a><a class="primary-btn" href="/dashboard" data-link>العودة للوحة</a></div>
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

function notFoundPage() {
  return pageShell(`<article class="panel reveal"><span class="eyebrow">404</span><h2>الصفحة غير موجودة</h2><p class="lead">يبدو أن المسار غير متاح في روَاج.</p><a class="primary-btn" href="/" data-link>العودة للرئيسية</a></article>`);
}

function render() {
  const path = location.pathname.replace(/\/$/, '') || '/';
  const parts = path.split('/').filter(Boolean);
  if (path === '/') app.innerHTML = homePage();
  else if (path === '/templates') app.innerHTML = templatesPage();
  else if (parts[0] === 'templates' && parts[1]) app.innerHTML = templateDetailPage(parts[1]);
  else if (path === '/builder') app.innerHTML = builderPage();
  else if (parts[0] === 'builder' && parts[1]) app.innerHTML = builderPage(parts[1]);
  else if (path === '/dashboard') app.innerHTML = dashboardPage();
  else if (parts[0] === 'preview' && parts[1]) app.innerHTML = savedPreviewPage(parts[1]);
  else if (path === '/pricing') app.innerHTML = pricingPage();
  else if (path === '/checkout') app.innerHTML = checkoutPage();
  else if (path === '/receipt') app.innerHTML = paymentReceiptPage();
  else if (path === '/about') app.innerHTML = aboutPage();
  else if (path === '/contact') app.innerHTML = contactPage();
  else app.innerHTML = notFoundPage();

  setActiveNav();
  bindPageEvents();
  revealVisible();
  app.focus({ preventScroll: true });
  navLinks.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
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
    resumeForm.addEventListener('submit', saveResumeFromForm);
    document.getElementById('resetForm')?.addEventListener('click', () => { resumeForm.reset(); updatePreview(); showToast('تم مسح الحقول مؤقتاً'); });
    updatePreview();
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', e => { e.preventDefault(); e.target.reset(); showToast('تم استلام طلبك، سنعود إليك قريباً'); });

  const paymentForm = document.getElementById('paymentForm');
  if (paymentForm) paymentForm.addEventListener('submit', e => { e.preventDefault(); completeCheckout('card'); });
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  const page = Number(event.currentTarget.dataset.page);
  const id = event.currentTarget.dataset.id;
  if (action === 'template-page') { state.templatePage = page; render(); return; }
  if (action === 'dashboard-page') { state.dashboardPage = page; render(); return; }
  if (action === 'payment-method') { state.paymentMethod = event.currentTarget.dataset.method; render(); return; }
  if (action === 'complete-apple-pay') { completeCheckout('apple-pay'); return; }
  if (action === 'send-receipt-email') { sendReceiptByEmail(); return; }
  if (action === 'clear-preview-prompt') { localStorage.removeItem('rawaj_last_saved_resume'); render(); return; }
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

function updatePreview() {
  const form = document.getElementById('resumeForm');
  const preview = document.getElementById('resumePreview');
  if (!form || !preview) return;
  const data = Object.fromEntries(new FormData(form));
  const template = templates.find(t => t.id === data.template) || templates[0];
  preview.style.borderTop = `10px solid ${template.accent}`;
  preview.innerHTML = resumeDocumentHtml(data);
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

document.addEventListener('DOMContentLoaded', render);
