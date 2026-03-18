import { capabilities } from "../data/portfolio";

const ICONS: Record<string, string> = {
  terminal: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
  megaphone: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  people: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  sparkle: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>`,
};

const COLORS: Record<string, { bg: string; icon: string; border: string }> = {
  terminal: { bg: "var(--accent-glow)", icon: "var(--accent)", border: "rgba(14,127,192,0.15)" },
  megaphone: { bg: "var(--teal-glow)", icon: "var(--teal)", border: "rgba(11,158,138,0.15)" },
  people: { bg: "var(--green-glow)", icon: "var(--green)", border: "rgba(30,138,76,0.15)" },
  sparkle: { bg: "var(--purple-glow)", icon: "var(--purple)", border: "rgba(107,79,187,0.15)" },
};

export default function CapabilityPillars() {
  return (
    <section id="capabilities" className="cap-section section-body">
      <div className="content-wrap">
        <div className="cap-header">
          <div className="section-eyebrow">What I Do</div>
          <h2 className="cap-title">Four capabilities. One throughline.</h2>
          <p className="cap-subtitle">
            Every role, every company, every project has been about the same thing: making
            powerful technology accessible to the people who need to use it.
          </p>
        </div>

        <div className="cap-grid">
          {capabilities.map(cap => {
            const color = COLORS[cap.icon];
            return (
              <div key={cap.id} className="cap-card">
                <div
                  className="cap-icon"
                  style={{ background: color.bg, border: `1px solid ${color.border}` }}
                  dangerouslySetInnerHTML={{ __html: ICONS[cap.icon] }}
                  data-color={color.icon}
                />
                <h3 className="cap-card-title">{cap.title}</h3>
                <p className="cap-card-desc">{cap.description}</p>
                <div className="cap-value">{cap.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cap-section {
          background: var(--bg);
        }
        .cap-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .cap-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .cap-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
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
          padding: 28px 24px;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
        }
        .cap-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
        }
        .cap-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .cap-icon svg {
          color: inherit;
        }
        .cap-card-title {
          font-family: var(--font-sans), sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }
        .cap-card-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .cap-value {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          line-height: 1.6;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }

        @media (max-width: 900px) {
          .cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .cap-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
