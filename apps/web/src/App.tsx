import { useState } from "react";
import { Activity, AudioLines, Clapperboard, FileSearch, Film, FolderOpen, Gauge, Globe2, LayoutDashboard, Plus, Search, Settings2, ShieldCheck, Sparkles, UploadCloud } from "lucide-react";

type Language = "ar-MA" | "ar";

export default function App() {
  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState<Language>("ar-MA");
  const [notice, setNotice] = useState("");

  function startProject() {
    if (!topic.trim()) {
      setNotice("كتب موضوع الخبر أو الوثائقي أولاً.");
      return;
    }
    setNotice("تم تسجيل الموضوع في الواجهة التجريبية. ربط البحث والذكاء الاصطناعي سيأتي في المرحلة التالية.");
  }

  return <div className="app-shell" dir="rtl">
    <aside className="sidebar">
      <div className="brand"><div className="brand-mark"><Clapperboard size={21}/></div><div><strong>DOCU<span>STUDIO</span></strong><small>AI NEWS WORKSPACE</small></div></div>
      <div className="workspace-label">مساحة العمل</div>
      <nav>
        <a className="nav-item active"><LayoutDashboard size={18}/> لوحة التحكم</a>
        <a className="nav-item"><FolderOpen size={18}/> مشاريعي</a>
        <a className="nav-item"><FileSearch size={18}/> البحث والتحقق</a>
        <a className="nav-item"><Film size={18}/> الاستوديو والمونتاج</a>
        <a className="nav-item"><AudioLines size={18}/> التعليق الصوتي</a>
      </nav>
      <div className="sidebar-bottom"><a className="nav-item"><Settings2 size={18}/> الإعدادات</a><div className="user-chip"><div className="avatar">D</div><div><b>مساحة الإنتاج</b><small>الخطة التجريبية</small></div><Activity size={16}/></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="breadcrumb">مساحة العمل <span>/</span> لوحة التحكم</div><div className="top-actions"><span className="status"><i/> النظام جاهز للتجربة</span><button className="icon-btn" aria-label="بحث"><Search size={17}/></button></div></header>
      <section className="welcome"><div><div className="eyebrow"><Sparkles size={14}/> استوديو صناعة الوثائقيات بالذكاء الاصطناعي</div><h1>حوّل أي موضوع إلى <em>قصة وثائقية.</em></h1><p>من الفكرة والبحث والتحقق، إلى السيناريو والمشاهد ثم الفيديو النهائي.</p></div><div className="welcome-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="play-core"><Clapperboard size={38}/></div><span className="art-tag tag-top">RESEARCH</span><span className="art-tag tag-bottom">STORY → FILM</span></div></section>
      <section className="composer card"><div className="section-heading"><div><span className="step">01</span><div><h2>ابدأ مشروعاً جديداً</h2><p>أدخل الموضوع وسنجهّز مراحل الإنتاج.</p></div></div><span className="draft-label">NEW PROJECT</span></div>
        <label className="field-label" htmlFor="topic">ما الموضوع الذي تريد تحويله إلى وثائقي؟</label>
        <textarea id="topic" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="مثال: كواليس قرار رياضي غيّر نتيجة بطولة قارية..." rows={3}/>
        <div className="composer-footer"><div className="language-control"><Globe2 size={16}/><span>لغة السرد</span><select value={language} onChange={e=>setLanguage(e.target.value as Language)}><option value="ar-MA">الدارجة المغربية</option><option value="ar">العربية الفصحى</option></select></div><button className="primary-btn" onClick={startProject}><Plus size={17}/> إنشاء مشروع <span>←</span></button></div>
        {notice && <div className="notice" role="status">{notice}</div>}
      </section>
      <section className="lower-grid"><div className="card pipeline"><div className="section-heading"><div><span className="step">02</span><div><h2>خط إنتاج الوثائقي</h2><p>مراحل المشروع من الفكرة إلى التصدير.</p></div></div><span className="muted">WORKFLOW</span></div><div className="pipeline-list">
        {[["01","البحث وجمع المصادر","بحث متعدد المصادر مع توثيق المعلومات",FileSearch],["02","التحقق من الحقائق","تمييز المؤكد وغير المؤكد والمتضارب",ShieldCheck],["03","كتابة السيناريو","بناء قصة وثائقية بسرد مشوّق",Sparkles],["04","لوحة المشاهد","صور وخرائط ووثائق وحركة كاميرا",Clapperboard],["05","الصوت والمونتاج","تعليق صوتي ومؤثرات وموسيقى",AudioLines],["06","المراجعة والتصدير","موافقتك قبل إخراج MP4",UploadCloud]].map(([n,title,desc,Icon]) => <div className="pipeline-row" key={String(n)}><span className="pipeline-num">{String(n)}</span><div className="pipeline-icon"><Icon size={17}/></div><div className="pipeline-copy"><b>{String(title)}</b><small>{String(desc)}</small></div><span className="locked">قريباً</span></div>)}
      </div></div><div className="side-column"><div className="card format-card"><div className="mini-title"><Gauge size={17}/> إعدادات الفيديو</div><div className="format-preview"><div className="frame"><span>16:9</span><Clapperboard size={28}/><small>DOCUMENTARY</small></div></div><div className="specs"><div><span>الدقة</span><b>1920 × 1080</b></div><div><span>المدة المستهدفة</span><b>5–10 دقائق</b></div><div><span>نوع المحتوى</span><b>جميع المجالات</b></div></div></div><div className="card provider-card"><div className="provider-icon"><Sparkles size={18}/></div><div><b>الذكاء الاصطناعي</b><p>ستتم إضافة مفاتيح الخدمات من إعدادات الخادم بشكل آمن.</p></div></div></div></section>
      <footer>AI DOCUMENTARY NEWS STUDIO <span>•</span> BUILDING STORIES WITH EVIDENCE</footer>
    </main>
  </div>;
}
