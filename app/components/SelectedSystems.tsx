const SYSTEMS = [
  {
    id: 1,
    tag: "Flutter App",
    tagColor: "purple",
    title: "Tech Challenge Kenya",
    subtitle: "Admin Dashboard",
    what: "A production-grade web platform serving thousands of students, schools, teams, and judges across Kenya's national STEM competition.",
    built: "15 modules in Flutter Web backed by Supabase: auth, RBAC, audit logs, surveys, team management, scoring, communications, and reporting. Built from zero to production.",
    matters: "This is what senior builder capability looks like. Complex domain, real scale, shipped.",
    stack: ["Flutter Web", "Supabase", "Riverpod", "RBAC", "Multi-role", "15 modules"],
    link: null,
    featured: true,
  },
  {
    id: 2,
    tag: "Race Management",
    tagColor: "teal",
    title: "MPYC RaceDay",
    subtitle: "Real-Time Sailing Race Platform",
    what: "A role-based web platform for real-time race management at the Monterey Peninsula Yacht Club.",
    built: "Live scoring, weather integration, race day coordination across multiple simultaneous roles. Mobile-first, built for a real community that actually uses it every weekend.",
    matters: "I built this because the existing tools were not good enough. That is usually why I build things.",
    stack: ["Role-based design", "Live data", "Mobile-first", "Race scoring"],
    link: null,
    featured: false,
  },
  {
    id: 3,
    tag: "Developer Platform",
    tagColor: "blue",
    title: "gitStream Docs Platform",
    subtitle: "LinearB — Zero to Full Developer Portal",
    what: "The complete documentation system for gitStream, LinearB's workflow automation product.",
    built: "Quickstart guides, automation library, integration docs, plugin development guides, interactive playground, and full API reference. Zero-touch developer onboarding.",
    matters: "Developers could activate without a sales call. That is the point.",
    stack: ["MkDocs", "API reference", "Automation library", "Self-serve"],
    link: "https://docs.gitstream.cm/",
    featured: false,
  },
  {
    id: 4,
    tag: "AI + Automation",
    tagColor: "teal",
    title: "Boat Daily Check",
    subtitle: "Victron Monitoring Agent",
    what: "An AI-assisted monitoring agent that checks my boats overnight and sends a daily status report.",
    built: "Python agent querying the Victron VRM API on a cron schedule. Reverse-engineered an undocumented API, published the reference docs, and open-sourced the project.",
    matters: "Applied AI that runs without intervention. A real system solving a real problem.",
    stack: ["Python", "Victron VRM API", "Cron automation", "Open source"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    featured: false,
  },
  {
    id: 5,
    tag: "IP + Brand System",
    tagColor: "orange",
    title: "Mia Kingtide",
    subtitle: "Books, Games, Audiobooks, Ocean Education",
    what: "An original IP built from zero across books, interactive games, audiobooks, and a content ecosystem.",
    built: "4 books published, 1,300+ copies sold, audiobooks on Spotify and INaudio, OceanMatch browser game, TikTok and YouTube audience built around ocean storytelling.",
    matters: "Content systems. Brand building. Creative execution at scale.",
    stack: ["4 published books", "Browser game", "Audiobooks", "Audience building"],
    link: "https://miakingtide.com/",
    featured: false,
  },
  {
    id: 6,
    tag: "Browser Game",
    tagColor: "orange",
    title: "OceanMatch",
    subtitle: "Interactive Ocean Education Game",
    what: "A browser-based matching game built around the Mia Kingtide ocean conservation universe.",
    built: "Accessible interactive experience connecting ocean species, characters, and educational content. Part of a cross-format IP strategy designed to extend reach beyond books.",
    matters: "Product thinking applied to content. Accessible design. IP that works across formats.",
    stack: ["Browser game", "Ocean education", "Interactive", "IP extension"],
    link: "https://miakingtide.com/",
    featured: false,
  },
  {
    id: 7,
    tag: "Media Platform",
    tagColor: "green",
    title: "Pitter Patter Diving",
    subtitle: "Ocean Media Brand + Tourism + Commerce",
    what: "A full media and commerce brand built around ocean adventures on the Monterey Peninsula.",
    built: "Blog, YouTube, TikTok channel grown to 10K followers in a single summer, dive tourism business, and an AI agent monitoring the boats. Built from zero audience.",
    matters: "Audience building from scratch. Content-market fit found and validated in the wild.",
    stack: ["10K TikTok", "Blog + YouTube", "Tourism business", "AI monitoring"],
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
          <div className="sys-eyebrow">Selected Systems</div>
          <h2 className="sys-title">What I build when the problem is real.</h2>
          <p className="sys-subtitle">
            Each of these is a system, not a project. What it is, what I built, why it matters.
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
          padding: 40px;
          margin-bottom: 24px;
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
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
        }
        .sys-card-link:hover .sys-link-icon { color: var(--accent); }
        .sys-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
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
