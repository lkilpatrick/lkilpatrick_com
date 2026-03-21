const PROOF_POINTS = [
  {
    org: "Nutanix",
    title: "Built the developer portal from scratch.",
    detail: "Still live today. 49+ open-source repos on GitHub. Self-paced labs, API reference, and a Twitch streaming channel.",
    link: "/work#docs",
    linkLabel: "See full case study →",
  },
  {
    org: "Atlassian",
    title: "Ran Atlassian's global developer hackathon.",
    detail: "Codegeist — drove measurable marketplace growth and ecosystem adoption. App Week campaigns with quantifiable ROI.",
    link: null,
    linkLabel: null,
  },
  {
    org: "Developer Marketing Essential Guide",
    title: "Authored two chapters in the Developer Marketing Essential Guide.",
    detail: "\"Starting from Scratch\" defines four types of developer programs — marketplace, API adoption, developer tools, and the Lego brick — and the playbook for building each from zero: hiring order, portal strategy, event formats, and the mistakes that cost real money. \"Scaling Down\" covers how programs survive budget cuts without losing momentum.",
    link: "https://a.co/d/eIgJG8o",
    linkLabel: "Book on Amazon →",
  },
  {
    org: "LinearB",
    title: "Built gitStream docs from zero.",
    detail: "Complete documentation site: quickstarts, automation library, API reference, plugin development guides. Self-serve, no sales call required.",
    link: "/work#docs",
    linkLabel: "See full case study →",
  },
  {
    org: "Harness",
    title: "Shipped CI release notes and product launch video.",
    detail: "Maintained Harness CI release notes for a developer audience tracking breaking changes and migration guides. Scripted and produced the Build Intelligence launch video.",
    link: "/content",
    linkLabel: "See on Content page →",
  },
  {
    org: "DevRelCon",
    title: "Conference speaker — London &amp; San Francisco.",
    detail: "Talks on building developer programs from zero and developer marketing strategy. Representing Nutanix on global DevRel stages.",
    link: "/content#presentations",
    linkLabel: "Watch the talks →",
  },
];

const BOOK_CHAPTERS = [
  {
    title: "Scaling Down",
    file: "/ScalingDown.pdf",
    download: "Developer-Marketing-Scaling-Down.pdf",
    description: "How developer programs survive and thrive when budgets shrink — strategies for doing more with less.",
  },
  {
    title: "Starting from Scratch Program",
    file: "/Starting-from-Scratch-Program.pdf",
    download: "Developer-Marketing-Starting-From-Scratch.pdf",
    description: "How to build a developer program from zero — the playbook for launching at a company with no DevRel history.",
  },
];

export default function StrategicImpact() {
  return (
    <>
      {/* ── Proof Points ── */}
      <section className="section-body section-alt" id="proof-points">
        <div className="content-wrap">
          <div className="pp-header">
            <div className="pp-eyebrow">Proof Points</div>
            <h2 className="pp-title">Shipped. Measured. Still running.</h2>
            <p className="pp-subtitle">
              The concise version. Each entry links to the full case study on Work or Content.
            </p>
          </div>

          <div className="pp-grid">
            {PROOF_POINTS.map((item) => (
              <div key={item.title} className="pp-card">
                <div className="pp-org">{item.org}</div>
                <div className="pp-title-line" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="pp-detail">{item.detail}</p>
                {item.link && (
                  <a href={item.link} className="pp-link">
                    {item.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book chapter PDFs ── */}
      <section className="section-body" id="book-chapters">
        <div className="content-wrap">
          <div className="pp-eyebrow" style={{ marginBottom: 12 }}>Free Download</div>
          <h2 className="pp-title" style={{ marginBottom: 8 }}>Developer Marketing Essential Guide — Chapters</h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 28, maxWidth: 600 }}>
            Two chapters I authored on developer marketing strategy. Free to download.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
            {BOOK_CHAPTERS.map((chapter) => (
              <a key={chapter.title} href={chapter.file} download={chapter.download} className="chapter-card">
                <div className="chapter-icon">PDF</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                    Luke Kilpatrick — Developer Marketing Essential Guide
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>{chapter.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{chapter.description}</div>
                </div>
                <div style={{ fontSize: 18, color: "var(--text-dim)", flexShrink: 0, alignSelf: "center" }}>↓</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Proof Points ── */
        .pp-header { margin-bottom: 52px; }
        .pp-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .pp-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
          letter-spacing: -0.4px;
          line-height: 1.15;
        }
        .pp-subtitle {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 520px;
          line-height: 1.7;
        }
        .pp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .pp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: all 0.2s ease;
        }
        .pp-card:hover {
          border-color: var(--border-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover);
        }
        .pp-org {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
        }
        .pp-title-line {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
          line-height: 1.4;
        }
        .pp-detail {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
          flex: 1;
        }
        .pp-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--border-accent);
          padding-bottom: 1px;
          align-self: flex-start;
          transition: color 0.2s, border-color 0.2s;
          margin-top: 4px;
        }
        .pp-link:hover { color: var(--accent-light); border-bottom-color: var(--accent-light); }

        /* ── PDF download cards ── */
        .chapter-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
          color: inherit;
        }
        .chapter-card:hover {
          border-color: var(--border-accent);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          color: inherit;
        }
        .chapter-card:hover .chapter-icon { background: var(--accent); color: #fff; }
        .chapter-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: var(--accent-glow);
          border: 1px solid var(--border-accent);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono), monospace;
          font-size: 10px; font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }

        @media (max-width: 900px) {
          .pp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .pp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
