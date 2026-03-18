import Image from "next/image";
import { stats, strategicWork } from "../data/portfolio";
import { SectionHeader, Stat } from "./shared";

const IMPACT_SCREENSHOTS: Record<number, string> = {
  1: "/screenshots/impact-developer-marketing-guide.jpg",
  2: "/screenshots/impact-codegeist.jpg",
  3: "/screenshots/impact-nutanix-dev-launch.jpg",
};

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

function ImpactRow({ item, index }: { item: typeof strategicWork[0]; index: number }) {
  const screenshot = IMPACT_SCREENSHOTS[item.id];
  const isEven = index % 2 === 0;
  const href = item.link ?? "#";
  return (
    <div className={`portal-row ${isEven ? "" : "portal-row--reverse"}`}>
      <a href={href} target="_blank" rel="noopener noreferrer" className="portal-screenshot-wrap">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`Screenshot of ${item.title}`}
            width={600}
            height={380}
            className="portal-screenshot"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className="portal-screenshot-placeholder">
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-dim)" }}>
              {href.replace("https://", "")}
            </span>
          </div>
        )}
      </a>
      <div className="portal-text">
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>
          {item.org}
        </div>
        <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 22, fontWeight: 400, color: "var(--heading)", marginBottom: 14, lineHeight: 1.3 }}>
          <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title} ↗
          </a>
        </h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
          {item.description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--accent)", padding: "8px 16px", border: "1px solid var(--border-accent)", borderRadius: 6, display: "inline-block" }}
        >
          View →
        </a>
      </div>
    </div>
  );
}

export default function StrategicImpact() {
  return (
    <>
      <section className="section-body" id="impact">
        <div className="content-wrap">
          <SectionHeader number="04" title="Strategic Impact" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 36, maxWidth: 600 }}>
            Programs, platforms, and published work that moved the needle — developer ecosystems built from zero, global hackathons, and industry-recognized thought leadership.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 64 }}>
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <div style={{ display: "grid", gap: 72 }}>
            {strategicWork.map((item, i) => (
              <ImpactRow key={item.id} item={item} index={i} />
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
              <a key={chapter.title} href={chapter.file} download={chapter.download} className="chapter-card">
                <div className="chapter-icon">PDF</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                    SlashData — Developer Marketing Essential Guide
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
        .portal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .portal-row--reverse { direction: rtl; }
        .portal-row--reverse > * { direction: ltr; }
        .portal-screenshot-wrap {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s, transform 0.2s;
          background: var(--bg-card);
        }
        .portal-screenshot-wrap:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          transform: translateY(-2px);
        }
        .portal-screenshot { display: block; width: 100%; height: auto; }
        .portal-screenshot-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-card-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .portal-text { direction: ltr; }
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
        @media (max-width: 700px) {
          .portal-row, .portal-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
}
