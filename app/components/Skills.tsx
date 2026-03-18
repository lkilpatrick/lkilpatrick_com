import { stats, strategicWork } from "../data/portfolio";
import { SectionHeader, Stat, Card } from "./shared";

const BOOK_CHAPTERS = [
  {
    title: "Scaling Down",
    file: "/ScalingDown.pdf",
    download: "Developer-Marketing-Scaling-Down.pdf",
    description: "How developer programs survive and thrive when budgets shrink — strategies for doing more with less.",
  },
  {
    title: "Starting from Scratch Program",
    file: "/Starting from Scratch Program.pdf",
    download: "Developer-Marketing-Starting-From-Scratch.pdf",
    description: "How to build a developer program from zero — the playbook for launching at a company with no DevRel history.",
  },
];

export default function StrategicImpact() {
  return (
    <>
      <section className="section-body" id="impact">
        <div className="content-wrap">
          <SectionHeader number="04" title="Strategic Impact" />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
              marginBottom: 36,
            }}
          >
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {strategicWork.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Book chapters */}
      <section className="section-body" id="book-chapters">
        <div className="content-wrap">
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--accent)", letterSpacing: 1 }}>PDF</span>
            <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 26, color: "var(--heading)", fontWeight: 400 }}>
              Developer Marketing Essential Guide — Chapters
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 28, maxWidth: 600 }}>
            Two chapters I authored in the SlashData-published guide to developer marketing. Free to download.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 16 }}>
            {BOOK_CHAPTERS.map((chapter) => (
              <a
                key={chapter.title}
                href={chapter.file}
                download={chapter.download}
                className="chapter-card"
              >
                <div className="chapter-icon">PDF</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                    SlashData — Developer Marketing Essential Guide
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>
                    {chapter.title}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {chapter.description}
                  </div>
                </div>
                <div style={{ fontSize: 18, color: "var(--text-dim)", flexShrink: 0, alignSelf: "center" }}>↓</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
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
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: var(--accent-glow);
          border: 1px solid var(--border-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
          color: var(--accent);
          flex-shrink: 0;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }
      `}</style>
    </>
  );
}
