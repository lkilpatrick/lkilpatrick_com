import Image from "next/image";
import { onboardingDocs } from "../data/portfolio";
import { SectionHeader } from "./shared";

const PORTAL_SCREENSHOTS: Record<string, string> = {
  "Nutanix.dev — Developer Portal":      "/screenshots/nutanix-dev.jpg",
  "gitStream Documentation Portal":      "/screenshots/gitstream-docs.jpg",
  "Harness CI Release Notes":            "/screenshots/harness-ci.jpg",
};

function PortalRow({ item, screenshot, index }: {
  item: { label: string; title: string; link: string; org: string; description: string; extraLink?: { text: string; href: string } };
  screenshot: string | undefined;
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <div className={`portal-row ${isEven ? "portal-row--normal" : "portal-row--reverse"}`}>
      {/* Screenshot */}
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="portal-screenshot-wrap"
      >
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
              {item.link.replace("https://", "")}
            </span>
          </div>
        )}
      </a>

      {/* Text */}
      <div className="portal-text">
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>
          {item.org}
        </div>
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--text-dim)", marginBottom: 8 }}>
          {item.label}
        </div>
        <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 22, fontWeight: 400, color: "var(--heading)", marginBottom: 14, lineHeight: 1.3 }}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title} ↗
          </a>
        </h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 16 }}>
          {item.description}
        </p>
        {item.extraLink && (
          <a
            href={item.extraLink.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--accent)", borderBottom: "1px solid var(--border-accent)", paddingBottom: 1 }}
          >
            {item.extraLink.text} →
          </a>
        )}
        <div style={{ marginTop: 20 }}>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              color: "var(--accent)",
              padding: "8px 16px",
              border: "1px solid var(--border-accent)",
              borderRadius: 6,
              display: "inline-block",
            }}
          >
            View Live Site →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function OnboardingDocs() {
  const allItems = [
    ...onboardingDocs.highlights,
    ...onboardingDocs.cards.map(c => ({
      label: c.tag,
      title: c.title,
      link: c.link,
      org: c.org,
      description: c.description,
    })),
  ];

  return (
    <>
      <section className="section-body" id="onboarding">
        <div className="content-wrap">
          <SectionHeader number="01" title="Developer Onboarding & Documentation" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 56, maxWidth: 600 }}>
            I build the developer portals, docs, and onboarding paths that let engineers self-serve — no sales call required. This is what I do first at every company.
          </p>

          <div style={{ display: "grid", gap: 72 }}>
            {allItems.map((item, i) => (
              <PortalRow
                key={item.title}
                item={item}
                screenshot={PORTAL_SCREENSHOTS[item.title]}
                index={i}
              />
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
        .portal-row--reverse {
          direction: rtl;
        }
        .portal-row--reverse > * {
          direction: ltr;
        }
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
        .portal-screenshot {
          display: block;
          width: 100%;
          height: auto;
        }
        .portal-screenshot-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-card-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .portal-text {
          direction: ltr;
        }
        @media (max-width: 700px) {
          .portal-row,
          .portal-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
}
