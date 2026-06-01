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

const plans = [
  { name: 'البداية', price: 'مجاني', desc: 'لإنشاء أول سيرة ذاتية بشكل سريع.', items: ['قالبان احترافيان', 'حفظ 3 سير ذاتية', 'تعديل غير محدود', 'تصدير نص منسق'] },
  { name: 'المحترف', price: '49 ر.س', desc: 'للجادين في التقديم على فرص أفضل.', items: ['كل القوالب', 'حفظ 25 سيرة', 'مراجعة ذكية للنص', 'نسخ مخصصة لكل وظيفة'], featured: true },
  { name: 'الشركات', price: '199 ر.س', desc: 'لفرق التوظيف ومراكز التدريب.', items: ['حسابات متعددة', 'مكتبة قوالب موحدة', 'لوحة متابعة المتدربين', 'دعم محتوى مهني'] }
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
  dashboardSort: 'updated'
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
          <div class="metric-card"><strong>9+</strong><span>قوالب مهنية متنوعة</span></div>
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
  return `<article class="template-card reveal">
    <div class="template-preview"><div class="template-mini" style="--accent:${t.accent}"><div class="top"></div><div class="row"></div><div class="row"></div><div class="row"></div><div class="row"></div></div></div>
    <div class="template-body">
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <div class="tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      <div class="action-row">
        <a class="mini-btn" href="/templates/${t.id}" data-link>تفاصيل القالب</a>
        <a class="mini-btn" href="/builder?template=${t.id}" data-link>استخدامه</a>
      </div>
    </div>
  </article>`;
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
      <p>املأ الحقول وشاهد معاينة حية بتصميم ثلاثي العمق. عند الحفظ ستظهر السيرة في لوحة السير مع إجراءات كاملة.</p>
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
  let resumes = getSavedResumes();
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
    <div class="filters reveal" style="grid-template-columns:minmax(220px,1fr) 220px">
      <input class="control" id="dashboardSearch" placeholder="ابحث بالاسم أو المسمى أو الحالة..." value="${state.dashboardSearch}">
      <select class="control" id="dashboardSort"><option value="updated" ${state.dashboardSort==='updated'?'selected':''}>الأحدث تعديلاً</option><option value="name" ${state.dashboardSort==='name'?'selected':''}>حسب الاسم</option></select>
    </div>
    <article class="table-card reveal">
      <div class="table-wrap">
        <table>
          <thead><tr><th>الاسم</th><th>المسمى</th><th>القالب</th><th>الحالة</th><th>آخر تعديل</th><th>إجراءات CRUD</th></tr></thead>
          <tbody>
            ${paged.map(r => `<tr>
              <td><strong>${escapeHtml(r.name)}</strong></td>
              <td>${escapeHtml(r.role)}</td>
              <td>${templates.find(t=>t.id===r.template)?.name || 'قالب روَاج'}</td>
              <td><span class="status-pill ${r.status==='مسودة'?'draft':''}">${r.status}</span></td>
              <td>${formatDate(r.updatedAt)}</td>
              <td><div class="action-row"><button class="mini-btn" data-action="edit-resume" data-id="${r.id}">تعديل</button><button class="mini-btn" data-action="duplicate-resume" data-id="${r.id}">تكرار</button><button class="mini-btn" data-action="delete-resume" data-id="${r.id}">حذف</button></div></td>
            </tr>`).join('') || `<tr><td colspan="6"><div class="empty-state">لا توجد سير محفوظة مطابقة. أنشئ سيرة جديدة لتظهر هنا.</div></td></tr>`}
          </tbody>
        </table>
      </div>
      ${pagination(pages, state.dashboardPage, 'dashboard-page')}
    </article>
  `);
}

function pricingPage() {
  return pageShell(`
    <div class="section-head reveal"><div><span class="eyebrow">خطط مرنة</span><h2>ابدأ مجاناً ثم وسّع حضورك المهني.</h2></div><p>اختر الخطة التي تناسب عدد السير، مستوى التخصيص، واحتياجك لمراجعة المحتوى.</p></div>
    <div class="grid-3">${plans.map(plan => `<article class="plan-card reveal ${plan.featured?'featured':''}"><h3>${plan.name}</h3><p>${plan.desc}</p><div class="price">${plan.price}</div><ul>${plan.items.map(i=>`<li>${i}</li>`).join('')}</ul><a class="${plan.featured?'secondary-btn':'primary-btn'}" href="/builder" data-link>اختيار الخطة</a></article>`).join('')}</div>
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
  else if (path === '/pricing') app.innerHTML = pricingPage();
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
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  const page = Number(event.currentTarget.dataset.page);
  const id = event.currentTarget.dataset.id;
  if (action === 'template-page') { state.templatePage = page; render(); return; }
  if (action === 'dashboard-page') { state.dashboardPage = page; render(); return; }
  if (action === 'edit-resume') { navigate(`/builder/${id}`); return; }
  const resumes = getSavedResumes();
  const resume = resumes.find(r => r.id === id);
  if (!resume) return;
  if (action === 'duplicate-resume') {
    resumes.unshift({ ...resume, id: cryptoId(), name: `${resume.name} - نسخة`, status: 'مسودة', updatedAt: Date.now() });
    saveResumes(resumes);
    showToast('تم تكرار السيرة بنجاح');
    render();
  }
  if (action === 'delete-resume') {
    const ok = confirm('هل تريد حذف هذه السيرة من لوحة روَاج؟');
    if (!ok) return;
    saveResumes(resumes.filter(r => r.id !== id));
    showToast('تم حذف السيرة');
    render();
  }
}

function updatePreview() {
  const form = document.getElementById('resumeForm');
  const preview = document.getElementById('resumePreview');
  if (!form || !preview) return;
  const data = Object.fromEntries(new FormData(form));
  const skills = (data.skills || '').split('،').join(',').split(',').map(s => s.trim()).filter(Boolean);
  const template = templates.find(t => t.id === data.template) || templates[0];
  preview.style.borderTop = `10px solid ${template.accent}`;
  preview.innerHTML = `
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
  const id = data.id || cryptoId();
  const record = { ...data, id, updatedAt: Date.now() };
  const index = resumes.findIndex(r => r.id === id);
  if (index >= 0) resumes[index] = record;
  else resumes.unshift(record);
  saveResumes(resumes);
  showToast('تم حفظ السيرة في لوحة روَاج');
  navigate('/dashboard');
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
