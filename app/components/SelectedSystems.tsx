import { selectedSystems } from "../data/portfolio";

const TAG_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  teal:   { color: "var(--teal)",   bg: "var(--teal-glow)",   border: "rgba(11,158,138,0.2)" },
  blue:   { color: "var(--accent)", bg: "var(--accent-glow)", border: "rgba(14,127,192,0.2)" },
  orange: { color: "var(--orange)", bg: "var(--orange-glow)", border: "rgba(196,126,42,0.2)" },
  green:  { color: "var(--green)",  bg: "var(--green-glow)",  border: "rgba(30,138,76,0.2)" },
  purple: { color: "var(--purple)", bg: "var(--purple-glow)", border: "rgba(107,79,187,0.2)" },
};

export default function SelectedSystems() {
  return (
    <section id="systems" className="sys-section section-body section-alt">
      <div className="content-wrap--wide">
        <div className="sys-header">
          <div className="section-eyebrow">Selected Systems</div>
          <h2 className="sys-title">Things I&apos;ve built.</h2>
          <p className="sys-subtitle">
            Not a portfolio grid. A curated set of systems that show how I think,
            what I ship, and the range of problems I solve.
          </p>
        </div>

        <div className="sys-grid">
          {selectedSystems.map(sys => {
            const tagStyle = TAG_STYLES[sys.tagColor] ?? TAG_STYLES.blue;
            const Inner = (
              <div key={sys.id} className="sys-card">
                <div className="sys-card-top">
                  <span
                    className="sys-tag"
                    style={{ color: tagStyle.color, background: tagStyle.bg, border: `1px solid ${tagStyle.border}` }}
                  >
                    {sys.tag}
                  </span>
                  {sys.link && (
                    <span className="sys-link-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </span>
                  )}
                </div>

                <h3 className="sys-card-title">{sys.title}</h3>
                <div className="sys-card-subtitle">{sys.subtitle}</div>
                <p className="sys-card-desc">{sys.description}</p>

                <div className="sys-highlights">
                  {sys.highlights.map(h => (
                    <span key={h} className="sys-highlight">{h}</span>
                  ))}
                </div>

                <div className="sys-proof">{sys.proof}</div>
              </div>
            );

            if (sys.link) {
              return (
                <a key={sys.id} href={sys.link} target="_blank" rel="noopener noreferrer" className="sys-card-link">
                  {Inner}
                </a>
              );
            }
            return <div key={sys.id}>{Inner}</div>;
          })}
        </div>

        <div className="sys-footer">
          <p className="sys-footer-note">
            More systems in progress. Reach out if you want to dig into any of these.
          </p>
          <a href="https://github.com/lkilpatrick" target="_blank" rel="noopener noreferrer" className="btn-secondary sys-github-btn">
            View GitHub
          </a>
        </div>
      </div>

      <style>{`
        .sys-section {
          background: var(--bg-subtle);
        }
        .sys-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .sys-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .sys-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

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
        .sys-card-link:hover .sys-link-icon {
          color: var(--accent);
        }
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
          font-family: var(--font-sans), sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 4px;
          letter-spacing: -0.3px;
          line-height: 1.3;
        }
        .sys-card-subtitle {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 16px;
          letter-spacing: 0.2px;
        }
        .sys-card-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 20px;
          flex: 1;
        }
        .sys-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
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
          padding-top: 16px;
          border-top: 1px solid var(--border);
          line-height: 1.5;
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

        @media (max-width: 1000px) {
          .sys-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .sys-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
