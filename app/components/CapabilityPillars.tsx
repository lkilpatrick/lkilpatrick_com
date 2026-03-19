import React from "react";

const PILLARS = [
  {
    id: 1,
    icon: "terminal",
    title: "Developer Experience & Onboarding",
    description:
      "Developer portals, onboarding systems, API documentation, and technical content that eliminate friction between a developer's first contact and their first success. The difference between a product developers adopt and one they abandon is almost always the onboarding. Built from zero at Nutanix, LinearB, and Hazelcast.",
    value: "Faster time-to-first-value. Lower support burden. Higher activation and retention.",
    colorKey: "accent",
  },
  {
    id: 2,
    icon: "megaphone",
    title: "Product Marketing",
    description:
      "Launch strategy, positioning, competitive messaging, and release communications for developer-facing products. Technical depth and market narrative at the same time.",
    value: "Clear positioning that converts. Launches that land. Messaging that sticks.",
    colorKey: "teal",
  },
  {
    id: 3,
    icon: "people",
    title: "Developer Relations",
    description:
      "Community programs, ecosystem events, conference speaking, and developer advocacy at scale. Ran Codegeist at Atlassian. Built Nutanix Dev Live. Spoke at DevRelCon.",
    value: "Ecosystems that grow themselves. Communities with real signal.",
    colorKey: "green",
  },
  {
    id: 4,
    icon: "sparkle",
    title: "Applied AI Systems",
    description:
      "Workflow automation, content production pipelines, developer tooling, and operational AI agents built and deployed. AI as a daily multiplier for execution, not a talking point.",
    value: "Real systems. Real automation. Real output. Not demos.",
    colorKey: "purple",
    featured: true,
  },
];

const SVG_ICONS: Record<string, React.ReactElement> = {
  terminal: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  ),
  megaphone: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  ),
  people: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  sparkle: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
    </svg>
  ),
};

const COLOR_MAP: Record<string, { bg: string; icon: string; border: string; glow: string }> = {
  accent: { bg: "var(--accent-glow)", icon: "var(--accent)", border: "rgba(14,127,192,0.18)", glow: "rgba(14,127,192,0.12)" },
  teal:   { bg: "var(--teal-glow)",   icon: "var(--teal)",   border: "rgba(11,158,138,0.18)", glow: "rgba(11,158,138,0.1)" },
  green:  { bg: "var(--green-glow)",  icon: "var(--green)",  border: "rgba(30,138,76,0.18)",  glow: "rgba(30,138,76,0.1)" },
  purple: { bg: "var(--purple-glow)", icon: "var(--purple)", border: "rgba(107,79,187,0.18)", glow: "rgba(107,79,187,0.1)" },
};

export default function CapabilityPillars() {
  return (
    <section id="capabilities" className="cap-section section-body">
      <div className="content-wrap">
        <div className="cap-header">
          <div className="cap-eyebrow">What I Do</div>
          <h2 className="cap-title">Four capabilities. One throughline.</h2>
          <p className="cap-subtitle">
            Every role, every company, every project: making powerful technology
            accessible to the people who need to use it. AI is now woven through all of it.
          </p>
        </div>

        <div className="cap-grid">
          {PILLARS.map(cap => {
            const color = COLOR_MAP[cap.colorKey];
            return (
              <div
                key={cap.id}
                className={`cap-card${cap.featured ? " cap-card--featured" : ""}`}
                style={cap.featured ? { "--featured-border": color.border, "--featured-glow": color.glow } as React.CSSProperties : undefined}
              >
                {cap.featured && <div className="cap-featured-label">AI-Native</div>}
                <div
                  className="cap-icon"
                  style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.icon }}
                >
                  {SVG_ICONS[cap.icon]}
                </div>
                <h3 className="cap-card-title">{cap.title}</h3>
                <p className="cap-card-desc">{cap.description}</p>
                <div className="cap-value" style={{ color: color.icon }}>{cap.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cap-section { background: var(--bg); }
        .cap-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .cap-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .cap-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 3.8vw, 44px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 18px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }
        .cap-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.75;
        }

        .cap-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .cap-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px 26px;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .cap-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
        }
        .cap-card--featured {
          border-color: var(--featured-border);
          background: linear-gradient(160deg, var(--bg-card) 60%, var(--featured-glow) 100%);
        }
        .cap-card--featured:hover {
          border-color: var(--purple);
          box-shadow: 0 8px 32px var(--featured-glow), var(--shadow-card-hover);
        }
        .cap-featured-label {
          position: absolute;
          top: -1px; right: 20px;
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--purple);
          background: var(--purple-glow);
          border: 1px solid rgba(107,79,187,0.25);
          border-top: none;
          padding: 3px 10px 4px;
          border-radius: 0 0 6px 6px;
        }
        .cap-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          flex-shrink: 0;
        }
        .cap-card-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 12px;
          letter-spacing: -0.3px;
        }
        .cap-card-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 24px;
          flex: 1;
        }
        .cap-value {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          line-height: 1.6;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          opacity: 0.85;
        }

        @media (max-width: 960px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .cap-grid { grid-template-columns: 1fr; }
          .cap-header { margin-bottom: 48px; }
        }
      `}</style>
    </section>
  );
}
