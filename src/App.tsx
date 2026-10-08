import { useState, type ReactNode } from "react";
import marhabanCardSource from "./assets/marhaban-card-source.jpg";
import marhabanLogo from "./assets/marhaban-logo.png";
import marhabanMedallions from "./assets/marhaban-medallions.png";

type IconName =
  | "arrow"
  | "building"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "globe"
  | "id"
  | "link"
  | "location"
  | "menu"
  | "message"
  | "nfc"
  | "play"
  | "qr"
  | "shield"
  | "spark"
  | "ticket"
  | "users";

type Solution = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: IconName;
  features: { icon: IconName; label: string; detail: string }[];
};

const solutions: Solution[] = [
  {
    id: "personal",
    eyebrow: "الطوارئ وأمان العائلة",
    title: "الأمان يبقى دائماً بالقرب ممن تحب.",
    description:
      "امنح عائلتك وسيلة فورية لمشاركة المعلومات الأساسية والموقع المباشر عند الطوارئ، دون الحاجة إلى تطبيق أو تسجيل دخول.",
    icon: "shield",
    features: [
      {
        icon: "nfc",
        label: "لمسة أو مسح سريع",
        detail: "تعمل تقنيات NFC وQR على جميع الهواتف الحديثة.",
      },
      {
        icon: "location",
        label: "مشاركة موقع آمن",
        detail: "يمكن لمن يعثر على البطاقة إرسال موقعه إلى جهات موثوقة.",
      },
      {
        icon: "users",
        label: "مصممة لمن تحب",
        detail: "مثالية للأطفال وكبار السن وأصحاب الهمم.",
      },
    ],
  },
  {
    id: "professional",
    eyebrow: "الهوية المهنية للأفراد",
    title: "حضورك المهني في بطاقة واحدة.",
    description:
      "بطاقة شخصية ذكية لرواد ورائدات الأعمال والمؤثرين والمهنيين، تجمع نبذتك وبيانات التواصل وحساباتك في ملف أنيق واحد.",
    icon: "id",
    features: [
      {
        icon: "id",
        label: "ملف مهني متكامل",
        detail: "اعرض تخصصك ونبذتك المهنية وأبرز بياناتك.",
      },
      {
        icon: "message",
        label: "كل وسائل التواصل",
        detail: "واتساب، سناب شات، إنستغرام، وفيسبوك في لمسة.",
      },
      {
        icon: "location",
        label: "بيانات قابلة للتحديث",
        detail: "عدّل أرقامك وبريدك وموقعك دون تغيير البطاقة.",
      },
    ],
  },
  {
    id: "events",
    eyebrow: "إدارة الفعاليات والحشود",
    title: "كل ضيف في المكان المناسب.",
    description:
      "اصنع رحلة رقمية متكاملة من الدعوة حتى الدخول، مع تفاصيل الفعالية والاتجاهات والصلاحيات المخصصة وروابط التواصل.",
    icon: "ticket",
    features: [
      {
        icon: "calendar",
        label: "تفاصيل الفعالية",
        detail: "اجمع المواعيد وإرشادات الموقع والتحديثات في رابط واحد.",
      },
      {
        icon: "ticket",
        label: "تذاكر حسب الدور",
        detail: "صلاحيات مخصصة للرعاة والمشاركين والزوار.",
      },
      {
        icon: "globe",
        label: "تجربة مترابطة",
        detail: "شارك حسابات التواصل ووسائل الدعم فوراً.",
      },
    ],
  },
  {
    id: "gifts",
    eyebrow: "الهدايا والذكريات التفاعلية",
    title: "هدية تُشاهد وتُسمع وتبقى.",
    description:
      "حوّل أجمل اللحظات إلى لوحات وميداليات أكريليك تفاعلية تفتح مقطع فيديو أو أغنية بلمسة NFC أو مسح رمز QR.",
    icon: "spark",
    features: [
      {
        icon: "play",
        label: "فيديو أو أغنية خاصة",
        detail: "أهدِ محتوى شخصياً يحمل معنى لا يُنسى.",
      },
      {
        icon: "nfc",
        label: "تفاعل بلمسة أو مسح",
        detail: "وصول فوري للمحتوى عبر NFC أو QR.",
      },
      {
        icon: "link",
        label: "تحديث في أي وقت",
        detail: "غيّر الفيديو أو الأغنية مع بقاء الهدية نفسها.",
      },
    ],
  },
];

function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M9 21v-4h6v4M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z" />
      </>
    ),
    id: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c.7-1.5 1.7-2 3-2s2.3.5 3 2M14 10h4M14 14h3" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1" />
        <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    message: (
      <>
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9 9.5c.4 1.8 1.8 3.2 3.5 3.5l1.2-1 2.3 1.1v2c0 .6-.5 1-1 1-4.7 0-8.5-3.8-8.5-8.5 0-.6.4-1 1-1h2L10.6 9 9 9.5Z" />
      </>
    ),
    nfc: (
      <>
        <path d="M8.5 8.5a5 5 0 0 1 0 7M5.5 5.5a9 9 0 0 1 0 13M15.5 8.5a5 5 0 0 0 0 7M18.5 5.5a9 9 0 0 0 0 13" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    qr: (
      <>
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v4h-2zM14 18h4v2h-4z" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.4 5.6L19 9l-5.6 1.4L12 16l-1.4-5.6L5 9l5.6-1.4L12 2Z" />
        <path d="m19 16 .6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z" />
      </>
    ),
    ticket: (
      <>
        <path d="M3 8a2 2 0 0 0 0 4v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0 0-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Z" />
        <path d="M13 7v2M13 12v2M13 17v0" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="العودة إلى الصفحة الرئيسية">
      <img src={marhabanLogo} alt="شعار مرحباً" />
      <span>
        Marhaban<strong>ID</strong>
      </span>
    </a>
  );
}

function App() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solution = solutions[activeSolution];

  return (
    <main id="top" dir="rtl">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <div className="shell nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="التنقل الرئيسي">
            <a href="#solutions" onClick={() => setMenuOpen(false)}>
              الحلول
            </a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              كيف تعمل
            </a>
            <a href="#security" onClick={() => setMenuOpen(false)}>
              الأمان
            </a>
          </nav>
          <a
            className="nav-cta"
            href="https://marhabanid.com"
            rel="noreferrer"
            target="_blank"
          >
            فعّل بطاقتك <Icon name="arrow" size={16} />
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="فتح قائمة التنقل"
            className="menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      <div className="mode-bar">
        <div className="shell mode-tabs" aria-label="التبديل بين أوضاع مرحباً">
          {[
            ["shield", "الطوارئ", "أمان العائلة"],
            ["id", "الأعمال", "الهوية المهنية"],
            ["ticket", "الفعاليات", "إدارة الحشود"],
            ["spark", "الهدايا", "ذكريات تفاعلية"],
          ].map(([icon, title, detail], index) => (
            <button
              aria-pressed={activeSolution === index}
              className={activeSolution === index ? "mode-tab is-active" : "mode-tab"}
              key={title}
              onClick={() => {
                setActiveSolution(index);
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
              }}
              type="button"
            >
              <span className="mode-tab-icon">
                <Icon name={icon as IconName} size={19} />
              </span>
              <span>
                <strong>{title}</strong>
                <small>{detail}</small>
              </span>
              <Icon name="chevron" size={15} />
            </button>
          ))}
        </div>
      </div>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            هوية ذكية لاتصال أكثر أماناً
          </div>
          <h1>
            هويتك الذكية.
            <br />
            <em>تبدأ بلمسة واحدة.</em>
          </h1>
          <p className="hero-lede">
            تحوّل MarhabanID البطاقة البسيطة إلى اتصال رقمي آمن، لحماية العائلة، وتعزيز حضورك
            المهني، وصناعة هدايا تفاعلية، وتنظيم الفعاليات بكل سلاسة.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://wa.me/966500816798?text=مرحباً%20MarhabanID،%20أرغب%20في%20طلب%20بطاقة."
              rel="noreferrer"
              target="_blank"
            >
              <span className="whatsapp-icon">
                <Icon name="message" size={19} />
              </span>
              اطلب عبر الواتساب
              <Icon name="arrow" size={18} />
            </a>
            <a
              className="button button-secondary"
              href="https://marhabanid.com"
              rel="noreferrer"
              target="_blank"
            >
              تفعيل بطاقتك
            </a>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true">
              <span>AM</span>
              <span>SK</span>
              <span>RH</span>
            </div>
            <p>
              يثق بنا أكثر من <strong>+2,000</strong> مستخدم متصل
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="عرض توضيحي لمنتج مرحباً">
          <div className="visual-grid" />
          <div className="product-showcase">
            <div className="medallion-photo">
              <img src={marhabanMedallions} alt="ميداليات مرحباً الذكية بتقنية NFC" />
              <span>ميدالية NFC الذكية</span>
            </div>
            <div className="card-photo-shell">
              <div className="card-photo-window">
                <img src={marhabanCardSource} alt="بطاقة مرحباً السوداء والذهبية مع رمز QR" />
              </div>
              <div className="card-photo-label">
                <span>
                  <Icon name="qr" size={14} />
                </span>
                <div>
                  <small>بطاقة الهوية الذكية</small>
                  <strong>مسح سريع واتصال فوري</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="signal-card signal-top">
            <span className="signal-icon">
              <Icon name="check" size={16} />
            </span>
            <div>
              <small>تم التحقق من الهوية</small>
              <strong>تم الاتصال بالملف</strong>
            </div>
          </div>
          <div className="signal-card signal-bottom">
            <span className="signal-icon">
              <Icon name="location" size={16} />
            </span>
            <div>
              <small>تمت مشاركة الموقع</small>
              <strong>الموقع جاهز للإرسال</strong>
            </div>
          </div>
          <button
            className="demo-play"
            onClick={() => setIsDemoPlaying((playing) => !playing)}
            type="button"
            aria-label={isDemoPlaying ? "إيقاف العرض التوضيحي" : "تشغيل العرض التوضيحي"}
          >
            <span className={isDemoPlaying ? "playing" : ""}>
              <Icon name="play" size={22} />
            </span>
            <span>{isDemoPlaying ? "العرض قيد التشغيل" : "شاهد كيف تعمل"}</span>
          </button>
          {isDemoPlaying && (
            <div className="demo-progress" aria-hidden="true">
              <span />
            </div>
          )}
        </div>
      </section>

      <section className="proof-strip" aria-label="مزايا المنتج">
        <div className="shell proof-grid">
          {[
            ["nfc", "وصول فوري", "يدعم NFC وQR"],
            ["shield", "الخصوصية أولاً", "بياناتك تحت سيطرتك"],
            ["spark", "بدون تطبيق", "يعمل على كل هاتف"],
            ["clock", "متاح دائماً", "تحديث لحظي"],
          ].map(([icon, title, detail]) => (
            <div className="proof-item" key={title}>
              <span>
                <Icon name={icon as IconName} />
              </span>
              <div>
                <strong>{title}</strong>
                <small>{detail}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="solutions-section shell" id="solutions">
        <div className="section-heading">
          <div>
            <span className="kicker">منصة ذكية واحدة</span>
            <h2>مصممة لكل اتصال مهم.</h2>
          </div>
          <p>
            تجارب مدروسة للأشخاص والفرق واللحظات التي تعني لك الكثير.
          </p>
        </div>

        <div className="solution-tabs" role="tablist" aria-label="حلول مرحباً">
          {solutions.map((item, index) => (
            <button
              aria-controls={`panel-${item.id}`}
              aria-selected={activeSolution === index}
              className={activeSolution === index ? "solution-tab is-active" : "solution-tab"}
              id={`tab-${item.id}`}
              key={item.id}
              onClick={() => setActiveSolution(index)}
              role="tab"
              type="button"
            >
              <span>
                <Icon name={item.icon} />
              </span>
              {item.eyebrow}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`tab-${solution.id}`}
          className="solution-panel"
          id={`panel-${solution.id}`}
          key={solution.id}
          role="tabpanel"
        >
          <div className="solution-copy">
            <span className="kicker">{solution.eyebrow}</span>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <div className="feature-list">
              {solution.features.map((feature) => (
                <div className="feature-row" key={feature.label}>
                  <span className="feature-icon">
                    <Icon name={feature.icon} />
                  </span>
                  <div>
                    <strong>{feature.label}</strong>
                    <small>{feature.detail}</small>
                  </div>
                </div>
              ))}
            </div>
            <a className="text-link" href="#activate">
              اكتشف هذا الحل <Icon name="arrow" size={17} />
            </a>
          </div>

          <div className={`solution-preview preview-${solution.id}`}>
            {solution.id === "personal" && <PersonalPreview />}
            {solution.id === "professional" && <ProfessionalPreview />}
            {solution.id === "events" && <EventPreview />}
            {solution.id === "gifts" && <GiftsPreview />}
          </div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="shell how-inner">
          <div className="section-heading compact">
            <div>
              <span className="kicker">بساطة بلا مجهود</span>
              <h2>المس. اتصل. تم.</h2>
            </div>
            <p>ملفك جاهز خلال دقائق، ويمكنك تحديثه بسهولة في أي وقت.</p>
          </div>
          <div className="steps-grid">
            {[
              ["01", "اختر هويتك", "حدّد البطاقة أو الحل الأنسب لاحتياجاتك."],
              ["02", "خصّصها لك", "أضف التفاصيل والروابط وجهات الاتصال التي تريد مشاركتها."],
              ["03", "اتصل فوراً", "لمسة أو مسح واحد يفتح ملفك الرقمي الآمن."],
            ].map(([number, title, description]) => (
              <article className="step-card" key={number}>
                <span className="step-number">{number}</span>
                <div className="step-line" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-section shell" id="security">
        <div className="security-card">
          <div className="security-art">
            <div className="shield-ring ring-one" />
            <div className="shield-ring ring-two" />
            <span className="security-shield">
              <Icon name="shield" size={54} strokeWidth={1.3} />
            </span>
          </div>
          <div className="security-copy">
            <span className="kicker">الأمان أساس التصميم</span>
            <h2>بياناتك تبقى ملكك.</h2>
            <p>
              شارك فقط ما تختاره. تمنحك MarhabanID تحكماً كاملاً في معلوماتك، مع ملفات آمنة وتحديثات
              فورية.
            </p>
            <div className="security-points">
              <span>
                <Icon name="check" size={15} /> تحكم كامل بالمعلومات
              </span>
              <span>
                <Icon name="check" size={15} /> ملفات سحابية آمنة
              </span>
              <span>
                <Icon name="check" size={15} /> إيقاف البطاقة في أي وقت
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section shell" id="activate">
        <div className="cta-card">
          <div className="cta-glow" />
          <span className="kicker">جاهزون عندما تكون جاهزاً</span>
          <h2>اجعل كل تعارف بداية ذات قيمة.</h2>
          <p>فعّل بطاقتك اليوم، أو تحدّث مع فريقنا للحصول على حل مصمم خصيصاً لك.</p>
          <div className="hero-actions centered">
            <a
              className="button button-primary"
              href="https://wa.me/966500816798?text=مرحباً%20MarhabanID،%20أرغب%20في%20البدء."
              rel="noreferrer"
              target="_blank"
            >
              <span className="whatsapp-icon">
                <Icon name="message" size={19} />
              </span>
              تحدث معنا
              <Icon name="arrow" size={18} />
            </a>
            <a className="button button-secondary" href="mailto:hello@marhabanid.com">
              تفعيل بطاقتك
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Logo />
          <p>هوية ذكية لاتصالات أكثر أماناً وبساطة.</p>
          <div className="footer-links">
            <a href="#solutions">الحلول</a>
            <a href="#security">الخصوصية</a>
            <a href="mailto:hello@marhabanid.com">تواصل معنا</a>
          </div>
          <small>© {new Date().getFullYear()} MarhabanID. جميع الحقوق محفوظة.</small>
        </div>
      </footer>
    </main>
  );
}

function PersonalPreview() {
  return (
    <div className="phone-frame">
      <div className="phone-header">
        <span className="phone-logo">M</span>
        <span>ملف الطوارئ</span>
        <span className="secure-pill">
          <Icon name="shield" size={11} /> آمن
        </span>
      </div>
      <div className="profile-head">
        <div className="profile-avatar">ي أ</div>
        <div>
          <small>هوية مرحباً</small>
          <strong>يوسف أحمد</strong>
          <span>معلومات الطوارئ متاحة</span>
        </div>
      </div>
      <div className="emergency-data">
        <div>
          <small>رقم البطاقة</small>
          <strong>MRH-240184</strong>
        </div>
        <div>
          <small>تاريخ الميلاد</small>
          <strong>12 مايو 2015</strong>
        </div>
        <div className="blood-type">
          <small>فصيلة الدم</small>
          <strong>+A</strong>
        </div>
      </div>
      <div className="alert-banner">
        <span>
          <Icon name="location" size={21} />
        </span>
        <div>
          <strong>ساعد يوسف على العودة بأمان</strong>
          <small>شارك موقعك الحالي مع ولي أمره.</small>
        </div>
      </div>
      <button className="location-button sos-button" type="button">
        <span>SOS</span>
        <span>
          <strong>إرسال موقع الطوارئ</strong>
          <small>مشاركة الموقع الحالي فوراً</small>
        </span>
        <Icon name="location" size={18} />
      </button>
      <div className="contact-row">
        <span>
          <Icon name="message" size={18} />
        </span>
        <div>
          <small>جهة الاتصال في الطوارئ</small>
          <strong>أحمد المنصوري</strong>
          <span>+971 50 123 4567</span>
        </div>
        <Icon name="chevron" size={17} />
      </div>
    </div>
  );
}

function ProfessionalPreview() {
  return (
    <div className="professional-profile">
      <div className="professional-cover">
        <span className="mini-mark">M</span>
        <span>
          <Icon name="nfc" size={17} /> بطاقة مهنية ذكية
        </span>
      </div>
      <div className="professional-identity">
        <div className="professional-avatar">ن س</div>
        <div>
          <small>رائدة أعمال ومستشارة علامات تجارية</small>
          <strong>نورة السالم</strong>
          <span>أساعد المشاريع الطموحة على بناء حضور مؤثر وهوية لا تُنسى.</span>
        </div>
      </div>
      <div className="professional-details">
        <a href="tel:+966501234567">
          <span>
            <Icon name="message" size={15} />
          </span>
          <div>
            <small>رقم التواصل</small>
            <strong dir="ltr">+966 50 123 4567</strong>
          </div>
        </a>
        <a href="mailto:noura@example.com">
          <span>
            <Icon name="link" size={15} />
          </span>
          <div>
            <small>البريد الإلكتروني</small>
            <strong>noura@example.com</strong>
          </div>
        </a>
        <a href="https://maps.google.com" rel="noreferrer" target="_blank">
          <span>
            <Icon name="location" size={15} />
          </span>
          <div>
            <small>الموقع الجغرافي</small>
            <strong>الرياض، المملكة العربية السعودية</strong>
          </div>
        </a>
      </div>
      <div className="professional-socials">
        {[
          ["message", "واتساب", "https://wa.me/966500816798"],
          ["spark", "سناب شات", "https://snapchat.com"],
          ["globe", "إنستغرام", "https://instagram.com"],
          ["users", "فيسبوك", "https://facebook.com"],
        ].map(([icon, label, url]) => (
          <a
            href={url}
            key={label}
            aria-label={label}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name={icon as IconName} size={17} />
            <span>{label}</span>
          </a>
        ))}
      </div>
      <button className="save-professional-contact" type="button">
        <Icon name="users" size={16} /> حفظ جهة الاتصال
      </button>
    </div>
  );
}

function GiftsPreview() {
  return (
    <div className="gift-stage">
      <div className="gift-glow" />
      <div className="acrylic-plaque">
        <div className="plaque-photo">
          <span className="plaque-play">
            <Icon name="play" size={24} />
          </span>
          <div className="plaque-memory">
            <small>إلى أجمل ذكرى</small>
            <strong>لحظاتنا لا تُنسى</strong>
          </div>
        </div>
        <div className="plaque-player">
          <span className="player-cover">
            <Icon name="spark" size={18} />
          </span>
          <div>
            <strong>أغنيتنا المفضلة</strong>
            <small>هدية خاصة لك</small>
          </div>
          <span className="sound-wave">
            <i />
            <i />
            <i />
            <i />
          </span>
        </div>
      </div>
      <div className="gift-medallion">
        <div className="gift-medallion-ring" />
        <div className="gift-medallion-face">
          <img src={marhabanLogo} alt="ميدالية أكريليك تفاعلية" />
          <span>
            <Icon name="nfc" size={16} />
          </span>
        </div>
      </div>
      <div className="gift-qr-card">
        <Icon name="qr" size={48} />
        <div>
          <small>امسح لتشاهد الذكرى</small>
          <strong>محتوى قابل للتحديث دائماً</strong>
        </div>
      </div>
    </div>
  );
}

function EventPreview() {
  return (
    <div className="event-ticket">
      <div className="participant-profile">
        <div className="participant-avatar">س م</div>
        <div>
          <small>بيانات المشارك</small>
          <strong>سارة محمد الكتبي</strong>
          <span>مشارك</span>
        </div>
        <button type="button">
          <Icon name="users" size={14} /> حفظ جهة الاتصال
        </button>
      </div>
      <div className="event-top">
        <div className="event-date">
          <small>نوفمبر</small>
          <strong>24</strong>
        </div>
        <div>
          <span className="event-type">فعالية مرحباً المميزة</span>
          <h4>تواصل المستقبل</h4>
          <p>الابتكار، والناس، والروابط الهادفة.</p>
        </div>
      </div>
      <div className="event-meta">
        <span>
          <Icon name="clock" size={16} /> 6:00 مساءً — 10:00 مساءً
        </span>
        <span>
          <Icon name="location" size={16} /> حي دبي للتصميم
        </span>
      </div>
      <div className="map-preview">
        <svg aria-hidden="true" viewBox="0 0 480 120" preserveAspectRatio="none">
          <path d="M-20 65C45 45 70 92 135 66s102-5 145 8 91 2 112-22 58-20 108-4" />
          <path d="M30 0c10 30-8 51-3 80s35 32 62 40M190 0c2 39 38 42 35 75s-16 32-10 45M375 0c-8 24 13 40 6 67s-33 33-31 53" />
          <circle cx="324" cy="55" r="7" />
        </svg>
        <span className="map-pin">
          <Icon name="location" size={18} />
        </span>
      </div>
      <div className="event-links">
        <a href="#activate">
          <Icon name="ticket" size={15} /> عرض تذكرة الدخول
        </a>
        <div className="social-actions" aria-label="روابط التواصل الاجتماعي">
          <a href="https://instagram.com" rel="noreferrer" target="_blank" aria-label="إنستغرام">
            <Icon name="spark" size={14} /> إنستغرام
          </a>
          <a href="https://x.com" rel="noreferrer" target="_blank" aria-label="إكس">
            <Icon name="link" size={14} /> إكس
          </a>
          <a href="mailto:events@marhabanid.com" aria-label="البريد الإلكتروني">
            <Icon name="message" size={14} /> تواصل
          </a>
        </div>
      </div>
      <div className="ticket-bottom">
        <div>
          <small>دخول فرد واحد</small>
          <strong>مشارك</strong>
        </div>
        <div className="role-pills">
          <span>راعي</span>
          <span className="selected">مشارك</span>
          <span>زائر</span>
        </div>
        <Icon name="qr" size={42} />
      </div>
    </div>
  );
}

export default App;
