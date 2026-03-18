import Image from "next/image";
import { builderWork } from "../data/portfolio";
import { SectionHeader } from "./shared";

const BUILDER_SCREENSHOTS: Record<number, string> = {
  1: "/screenshots/builder-pitterpatter-blog.jpg",
  2: "/screenshots/builder-mia-kingtide.jpg",
  3: "/screenshots/builder-tiktok.jpg",
  4: "/screenshots/builder-redbubble.jpg",
};

function BuilderRow({ item, index }: { item: typeof builderWork[0]; index: number }) {
  const screenshot = BUILDER_SCREENSHOTS[item.id];
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
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
              {item.title} ↗
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
          {item.description}
        </p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--accent)", padding: "8px 16px", border: "1px solid var(--border-accent)", borderRadius: 6, display: "inline-block" }}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

export default function Builder() {
  return (
    <>
      <section className="section-body" id="builder">
        <div className="content-wrap">
          <SectionHeader number="05" title="Builder & Maker" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 56, maxWidth: 600 }}>
            I don&apos;t just write about developer tools — I build with them. Projects spanning data pipelines, AI agents, books, and audience building.
          </p>
          <div style={{ display: "grid", gap: 72 }}>
            {builderWork.map((item, i) => (
              <BuilderRow key={item.id} item={item} index={i} />
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
