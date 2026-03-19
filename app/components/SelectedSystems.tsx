const SYSTEMS = [
  {
    id: 1,
    tag: "Flutter App",
    tagColor: "purple",
    title: "Tech Challenge Kenya",
    subtitle: "Admin Dashboard",
    what: "Production platform running Kenya's national STEM competition — students, schools, teams, and judges operating simultaneously across the entire country.",
    built: "15 modules in Flutter Web + Supabase: multi-role auth with RBAC, row-level security, audit logs, survey engine, team management, live scoring, bulk communications, and national reporting. Zero to production, single developer.",
    matters: "Complex domain. National scale. Real stakes. This is what engineering leadership looks like when there is no team to delegate to.",
    stack: ["Flutter Web", "Supabase", "Riverpod", "PostgreSQL RLS", "Multi-role RBAC", "15 modules", "National scale"],
    link: null,
    featured: true,
  },
  {
    id: 2,
    tag: "Race Management",
    tagColor: "teal",
    title: "MPYC RaceDay",
    subtitle: "Real-Time Sailing Race Platform",
    what: "Real-time race management platform for MPYC — 5 user roles, 57 courses, live weather from 11 stations, GPS tracking, and automated scoring published to Clubspot.",
    built: "Flutter + Firebase: 25+ Firestore collections, Cloud Functions fetching weather every 60 seconds, FCM push notifications, GPS race tracking, Clubspot API sync. Android, iOS, and Web from a single codebase.",
    matters: "Production system used every racing weekend on Monterey Bay. One developer. SaaS-class complexity. Built because commercial tools cost thousands per year and still did not do what we needed.",
    stack: ["Flutter 3.x", "Firebase", "Cloud Functions", "GPS tracking", "11 weather stations", "Clubspot API", "5 roles"],
    link: null,
    featured: false,
  },
  {
    id: 3,
    tag: "Developer Platform",
    tagColor: "blue",
    title: "gitStream Docs Platform",
    subtitle: "LinearB — Zero to Full Developer Portal",
    what: "Full developer portal and documentation system for gitStream — LinearB's AI-assisted workflow automation product for engineering teams.",
    built: "Quickstart guides, automation library reference, integration docs, plugin development guides, interactive playground, and full API reference. Designed so developers could activate without a sales call.",
    matters: "Self-serve onboarding that removes humans from the critical path. When documentation is done right, the support queue shrinks and activation improves. Both happened.",
    stack: ["MkDocs", "API reference", "Automation library", "Interactive playground", "Self-serve onboarding"],
    link: "https://docs.gitstream.cm/",
    featured: false,
  },
  {
    id: 4,
    tag: "AI + Automation",
    tagColor: "teal",
    title: "Boat Daily Check",
    subtitle: "Victron Monitoring Agent",
    what: "AI-powered overnight monitoring agent for two boats — queries live telemetry, processes power and battery data, and sends a formatted daily status report before I wake up.",
    built: "Python agent on cron, querying a Victron VRM API I reverse-engineered from network traffic. Wrote the reference documentation myself and open-sourced the project. The reference has since been adopted by the Victron community.",
    matters: "Real AI automation: not a demo, not a wrapper, not a proof of concept. A system that runs every day without intervention and solves a real operational problem.",
    stack: ["Python", "Victron VRM API", "Cron automation", "AI summarisation", "Open source"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    featured: false,
  },
  {
    id: 5,
    tag: "IP + Brand System",
    tagColor: "orange",
    title: "Mia Kingtide",
    subtitle: "Books, Games, Audiobooks, Ocean Education",
    what: "Original children's conservation IP built from zero — reviewed by scientists at MBARI, Hopkins Marine Station, and Moss Landing Marine Labs, featured in Monterey County NOW, and sailed aboard the restored Western Flyer to the Sea of Cortez.",
    built: "4 books, 1,300+ copies sold, audiobooks on Spotify and INaudio, OceanMatch browser game, YouTube and TikTok audience. Full cross-format content system with science credibility built in.",
    matters: "The same discipline that builds a developer ecosystem: understand your audience, earn credibility, produce content worth their time, show up across formats. Applied to conservation fiction.",
    stack: ["4 published books", "Audiobooks", "Browser game", "MBARI reviewed", "Western Flyer", "1,300+ sold"],
    link: "https://miakingtide.com/",
    featured: false,
  },
  {
    id: 6,
    tag: "Browser Game",
    tagColor: "orange",
    title: "OceanMatch",
    subtitle: "Interactive Ocean Education Game",
    what: "Browser-based ocean education game extending the Mia Kingtide universe — species identification, conservation storytelling, and interactive learning in one accessible experience.",
    built: "Standalone web game tied to the Mia Kingtide IP ecosystem. Part of a deliberate cross-format strategy: books → audiobooks → game → YouTube → TikTok. Each format targets a different acquisition channel.",
    matters: "IP that works across formats does not happen by accident. It requires product thinking applied to content: clear audience, clear channel, clear value per format.",
    stack: ["Browser game", "Ocean education", "Cross-format IP", "Accessible design"],
    link: "https://miakingtide.com/",
    featured: false,
  },
  {
    id: 7,
    tag: "Media Platform",
    tagColor: "green",
    title: "Pitter Patter Diving",
    subtitle: "Ocean Media Brand + Tourism + Commerce",
    what: "Full media, tourism, and commerce platform built around ocean adventures on the Monterey Peninsula — blog, YouTube, TikTok, boat rentals, Airbnb, underwater photography, and an AI monitoring agent.",
    built: "10K TikTok followers in a single summer from zero. SEO blog. YouTube channel. Boatsetter boat rental listing. 5-star Airbnb (active since 2015). Underwater photography art store. AI agent monitoring the fleet overnight.",
    matters: "Same skills as building a developer ecosystem — find content-market fit, build the audience, convert across channels. Validated in the wild with real revenue and real community.",
    stack: ["10K TikTok", "Blog + YouTube", "Boat rental", "5-star Airbnb", "AI monitoring", "Art store"],
    link: "https://pitterpatterdiving.com/",
    featured: false,
  },
];

const TAG_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  teal:   { color: "var(--teal)",   bg: "var(--teal-glow)",   border: "rgba(11,158,138,0.2)" },
  blue:   { color: "var(--accent)", bg: "var(--accent-glow)", border: "rgba(14,127,192,0.2)" },
  orange: { color: "var(--orange)", bg: "var(--orange-glow)", border: "rgba(196,126,42,0.2)" },
  green:  { color: "var(--green)",  bg: "var(--green-glow)",  border: "rgba(30,138,76,0.2)" },
  purple: { color: "var(--purple)", bg: "var(--purple-glow)", border: "rgba(107,79,187,0.2)" },
};

const ARROW = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function SelectedSystems() {
  const featured = SYSTEMS.filter(s => s.featured);
  const rest = SYSTEMS.filter(s => !s.featured);

  return (
    <section id="systems" className="sys-section section-body section-alt">
      <div className="content-wrap--wide">
        <div className="sys-header">
          <div className="sys-eyebrow">Systems I&apos;ve Built</div>
          <h2 className="sys-title">Real systems. Real scale. Real use.</h2>
          <p className="sys-subtitle">
            Every item here is in production, used by real people, solving a real problem. What it is, what I built, why it matters.
          </p>
        </div>

        {featured.map(sys => {
          const tag = TAG_STYLES[sys.tagColor] ?? TAG_STYLES.blue;
          return (
            <div key={sys.id} className="sys-featured">
              <div className="sys-featured-left">
                <span className="sys-tag" style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}` }}>
                  {sys.tag}
                </span>
                <h3 className="sys-featured-title">{sys.title}</h3>
                <div className="sys-featured-subtitle">{sys.subtitle}</div>
                <div className="sys-wbm-block">
                  <div className="sys-wbm-row">
                    <span className="sys-wbm-label">What</span>
                    <span className="sys-wbm-text">{sys.what}</span>
                  </div>
                  <div className="sys-wbm-row">
                    <span className="sys-wbm-label">Built</span>
                    <span className="sys-wbm-text">{sys.built}</span>
                  </div>
                  <div className="sys-wbm-row sys-wbm-row--matters">
                    <span className="sys-wbm-label">Why</span>
                    <span className="sys-wbm-text">{sys.matters}</span>
                  </div>
                </div>
              </div>
              <div className="sys-featured-right">
                <div className="sys-featured-stack-label">Stack &amp; Scope</div>
                <div className="sys-featured-stack">
                  {sys.stack.map(s => (
                    <span key={s} className="sys-highlight">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        <div className="sys-grid">
          {rest.map(sys => {
            const tag = TAG_STYLES[sys.tagColor] ?? TAG_STYLES.blue;
            const card = (
              <div className="sys-card">
                <div className="sys-card-top">
                  <span className="sys-tag" style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}` }}>
                    {sys.tag}
                  </span>
                  {sys.link && <span className="sys-link-icon">{ARROW}</span>}
                </div>
                <h3 className="sys-card-title">{sys.title}</h3>
                <div className="sys-card-subtitle">{sys.subtitle}</div>
                <div className="sys-wbm-card">
                  <div className="sys-wbm-card-row">
                    <span className="sys-wbm-label">What</span>
                    <span className="sys-wbm-text">{sys.what}</span>
                  </div>
                  <div className="sys-wbm-card-row">
                    <span className="sys-wbm-label">Built</span>
                    <span className="sys-wbm-text">{sys.built}</span>
                  </div>
                </div>
                <div className="sys-highlights">
                  {sys.stack.map(h => (
                    <span key={h} className="sys-highlight">{h}</span>
                  ))}
                </div>
                <div className="sys-proof">{sys.matters}</div>
              </div>
            );
            return sys.link ? (
              <a key={sys.id} href={sys.link} target="_blank" rel="noopener noreferrer" className="sys-card-link">
                {card}
              </a>
            ) : (
              <div key={sys.id}>{card}</div>
            );
          })}
        </div>

        <div className="sys-footer">
          <p className="sys-footer-note">More systems in progress. Reach out to dig into any of these.</p>
          <a href="https://github.com/lkilpatrick" target="_blank" rel="noopener noreferrer" className="sys-github-btn">
            View GitHub
          </a>
        </div>
      </div>

      <style>{`
        .sys-section { background: var(--bg-subtle); }
        .sys-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .sys-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .sys-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }
        .sys-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Featured card */
        .sys-featured {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 48px;
          margin-bottom: 28px;
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 48px;
          box-shadow: var(--shadow-card);
          position: relative;
          overflow: hidden;
        }
        .sys-featured::before {
          content: "Flagship System";
          position: absolute;
          top: 0; left: 0;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--purple);
          background: var(--purple-glow);
          border-bottom: 1px solid rgba(107,79,187,0.2);
          border-right: 1px solid rgba(107,79,187,0.2);
          padding: 5px 16px;
          border-radius: var(--radius) 0 var(--radius-sm) 0;
        }
        .sys-featured-left { padding-top: 24px; }
        .sys-featured-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(24px, 2.5vw, 34px);
          font-weight: 400;
          color: var(--heading);
          margin: 12px 0 4px;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        .sys-featured-subtitle {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-dim);
          margin-bottom: 28px;
        }
        .sys-featured-right {
          padding-top: 36px;
          border-left: 1px solid var(--border);
          padding-left: 40px;
        }
        .sys-featured-stack-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 14px;
        }
        .sys-featured-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* What / Built / Why block */
        .sys-wbm-block {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sys-wbm-row {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 16px;
          align-items: start;
        }
        .sys-wbm-row--matters .sys-wbm-label { color: var(--accent); }
        .sys-wbm-row--matters .sys-wbm-text { color: var(--text); font-weight: 500; }
        .sys-wbm-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          padding-top: 3px;
        }
        .sys-wbm-text {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        /* Card WBM (compact) */
        .sys-wbm-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .sys-wbm-card-row {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 12px;
          align-items: start;
        }

        /* Grid cards */
        .sys-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        .sys-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .sys-card-link:hover .sys-card {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card-hover), 0 0 0 1px rgba(14,127,192,0.08);
          border-color: var(--border-accent);
          background: linear-gradient(160deg, var(--bg-card) 70%, var(--accent-glow) 100%);
        }
        .sys-card-link:hover .sys-link-icon { color: var(--accent); }
        .sys-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          height: 100%;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
        }
        .sys-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .sys-tag {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
        }
        .sys-link-icon {
          color: var(--text-dim);
          transition: color 0.2s;
          display: flex;
        }
        .sys-card-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 2px;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }
        .sys-card-subtitle {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 18px;
        }
        .sys-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
          margin-top: auto;
        }
        .sys-highlight {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-dim);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          padding: 3px 9px;
          border-radius: 5px;
          letter-spacing: 0.3px;
        }
        .sys-proof {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          padding-top: 14px;
          border-top: 1px solid var(--border);
          line-height: 1.6;
        }

        .sys-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .sys-footer-note {
          font-size: 14px;
          color: var(--text-dim);
        }
        .sys-github-btn {
          display: inline-flex;
          align-items: center;
          padding: 10px 22px;
          background: var(--bg-card);
          color: var(--text);
          font-family: var(--font-sans), sans-serif;
          font-size: 13px;
          font-weight: 600;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
          box-shadow: var(--shadow-card);
        }
        .sys-github-btn:hover {
          border-color: var(--border-accent);
          color: var(--accent);
          transform: translateY(-1px);
          box-shadow: var(--shadow-card-hover);
        }

        @media (max-width: 960px) {
          .sys-featured { grid-template-columns: 1fr; gap: 32px; }
          .sys-featured-right { border-left: none; border-top: 1px solid var(--border); padding-left: 0; padding-top: 24px; }
          .sys-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .sys-featured { padding: 28px 20px; }
          .sys-grid { grid-template-columns: 1fr; }
          .sys-wbm-row, .sys-wbm-card-row { grid-template-columns: 40px 1fr; gap: 10px; }
        }
      `}</style>
    </section>
  );
}
