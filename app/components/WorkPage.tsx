"use client";

import Image from "next/image";
import { onboardingDocs } from "../data/portfolio";

// ─── Docs Section ─────────────────────────────────────────────────────────────

const PORTAL_SCREENSHOTS: Record<string, string> = {
  "Sanctuary Cruises":               "/screenshots/work-sanctuary-cruises.png",
  "Mise & Co.":                      "/screenshots/work-mise-and-co.jpg",
  "Mia Kingtide":                    "/screenshots/work-mia-kingtide.png",
  "Kilpatrick for Sand City Council": "/screenshots/work-sand-city-council.png",
  "Nutanix.dev — Developer Portal":  "/screenshots/nutanix-dev.jpg",
  "gitStream Documentation Portal":  "/screenshots/gitstream-docs.jpg",
  "Harness CI Release Notes":        "/screenshots/harness-ci.jpg",
  "OpenSTR":                         "/screenshots/openstr.jpg",
};

function PortalRow({ item, screenshot, index }: {
  item: { label: string; title: string; link: string; org: string; description: string; primaryLinkText?: string; extraLink?: { text: string; href: string }; secondaryLink?: { text: string; href: string } };
  screenshot: string | undefined;
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <div className={`wp-portal-row${isEven ? "" : " wp-portal-row--reverse"}`}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="wp-portal-img-wrap">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`Screenshot of ${item.title}`}
            width={600} height={380}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className="wp-portal-placeholder">
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-dim)" }}>
              {item.link.replace("https://", "")}
            </span>
          </div>
        )}
      </a>
      <div className="wp-portal-text">
        <div className="wp-portal-org">{item.org}</div>
        <div className="wp-portal-label">{item.label}</div>
        <h3 className="wp-portal-title">
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title} ↗
          </a>
        </h3>
        <p className="wp-portal-desc">{item.description}</p>
        <div className="wp-portal-ctas">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="wp-portal-btn">
            {item.primaryLinkText ?? "View Site"} →
          </a>
          {item.secondaryLink && (
            <a href={item.secondaryLink.href} target="_blank" rel="noopener noreferrer" className="wp-portal-btn wp-portal-btn--secondary">
              {item.secondaryLink.text} →
            </a>
          )}
        </div>
        {item.extraLink && (
          <a href={item.extraLink.href} target="_blank" rel="noopener noreferrer" className="wp-portal-extra">
            {item.extraLink.text} →
          </a>
        )}
      </div>
    </div>
  );
}

export default function WorkPage() {
  const latestWebsites = onboardingDocs.highlights.slice(0, 4);
  const allDocs = [
    ...onboardingDocs.highlights.slice(4).filter(item => item.title !== "Pitter Patter Diving"),
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
      <section className="section-body" id="latest-websites">
        <div className="content-wrap">
          <div className="wp-page-header">
            <div className="wp-hero-eyebrow">Work</div>
            <h1 className="wp-hero-title">Products, platforms, and adoption.</h1>
          </div>
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Recent Work &amp; Independent Builds</div>
            <h2 className="wp-section-title">What I built, who it serves, and why it matters.</h2>
          </div>
          <div style={{ display: "grid", gap: 52 }}>
            {latestWebsites.map((item, i) => (
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

      <section className="section-body section-alt" id="docs">
        <div className="content-wrap">
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Developer Platforms &amp; Adoption</div>
            <h2 className="wp-section-title">The systems that let developers self-serve.</h2>
          </div>

          <div style={{ display: "grid", gap: 72 }}>
            {allDocs.map((item, i) => (
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
        /* ── Page header ── */
        .wp-page-header {
          margin-bottom: 48px;
        }
        .wp-hero-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .wp-hero-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        /* ── Section headers ── */
        .wp-section-header {
          margin-bottom: 56px;
        }
        .wp-section-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .wp-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.15;
        }

        /* ── Tags / chips ── */
        .wp-tag {
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
        }
        .wp-chip {
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-muted);
          background: var(--bg-card-hover);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3px 8px;
        }

        /* ── What/Built/Why rows ── */
        .wp-wbm {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }
        .wp-wbm-row {
          display: grid;
          grid-template-columns: 66px 1fr;
          gap: 16px;
          align-items: start;
        }
        .wp-wbm-row--matters .wp-wbm-label { color: var(--accent); }
        .wp-wbm-row--matters .wp-wbm-text  { color: var(--text); font-weight: 500; }
        .wp-wbm-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          padding-top: 3px;
        }
        .wp-wbm-text {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
        }
        .wp-wbm-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .wp-wbm-card-row {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 12px;
          align-items: start;
        }

        /* ── Featured card ── */
        .wp-status-badge {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .wp-status-production {
          background: #ECFDF5;
          color: var(--color-success);
          border: 1px solid #A7F3D0;
        }
        .wp-status-development {
          background: var(--color-accent-light);
          color: var(--color-accent-hover);
          border: 1px solid #FDE68A;
        }
        .wp-featured {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          margin-bottom: 28px;
          box-shadow: var(--shadow-card);
          position: relative;
          overflow: hidden;
        }
        .wp-featured-toprow {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }
        .wp-featured-inner {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 48px;
          padding: 40px 48px 48px;
        }
        .wp-featured-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 400;
          color: var(--heading);
          margin: 12px 0 4px;
          letter-spacing: -0.5px;
        }
        .wp-featured-sub {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-dim);
          margin-bottom: 4px;
        }
        .wp-featured-context {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }
        .wp-card-context {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }
        .wp-featured-right {
          padding-top: 48px;
          border-left: 1px solid var(--border);
          padding-left: 40px;
        }
        .wp-stack-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 14px;
        }
        .wp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── Card grid ── */
        .wp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 0;
        }
        .wp-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .wp-card-link:hover .wp-card {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-primary-light);
        }
        .wp-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          padding: 32px;
          height: 100%;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
        }
        .wp-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .wp-card-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }
        .wp-card-sub {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 16px;
        }
        .wp-proof {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--color-border-light);
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          line-height: 1.5;
        }

        .wp-section-intro {
          max-width: 760px;
          margin-top: 18px;
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.75;
        }
        .wp-coursework-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .wp-coursework-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 26px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          box-shadow: var(--shadow-card);
          color: inherit;
          text-decoration: none;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .wp-coursework-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-primary-light);
          box-shadow: var(--shadow-card-hover);
        }
        .wp-coursework-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 8px;
          background: rgba(12,74,110,0.07);
          border: 1px solid rgba(12,74,110,0.2);
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
        }
        .wp-coursework-body { min-width: 0; }
        .wp-coursework-meta {
          margin-bottom: 7px;
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .wp-coursework-title {
          margin-bottom: 10px;
          color: var(--heading);
          font-family: var(--font-serif), Georgia, serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3;
        }
        .wp-coursework-desc {
          margin-bottom: 16px;
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.65;
        }
        .wp-coursework-download {
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
        }

        /* ── Portal rows ── */
        .wp-portal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .wp-portal-row--reverse { direction: rtl; }
        .wp-portal-row--reverse > * { direction: ltr; }
        .wp-portal-img-wrap {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s, transform 0.2s;
          background: var(--bg-card);
        }
        .wp-portal-img-wrap:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          transform: translateY(-2px);
        }
        .wp-portal-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-card-hover);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wp-portal-text { direction: ltr; }
        .wp-portal-org {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 6px;
        }
        .wp-portal-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 8px;
        }
        .wp-portal-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
          line-height: 1.3;
        }
        .wp-portal-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .wp-portal-extra {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary-light);
          border-bottom: 1px solid var(--color-primary-light);
          padding-bottom: 1px;
          display: block;
          margin-bottom: 16px;
        }
        .wp-portal-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
          margin-bottom: 12px;
        }
        .wp-portal-btn {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          padding: 8px 16px;
          border: 1.5px solid var(--color-primary);
          border-radius: 6px;
          display: inline-block;
          text-decoration: none;
          transition: all 0.2s;
        }
        .wp-portal-btn:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        .wp-portal-btn--secondary {
          color: var(--color-success);
          border-color: var(--color-success);
        }
        .wp-portal-btn--secondary:hover {
          background: var(--color-success);
          color: #fff;
          border-color: var(--color-success);
        }

        /* ── Featured screenshot ── */
        .wp-featured-inner--with-screenshot {
          grid-template-columns: 1fr 400px;
        }
        .wp-featured-screenshot {
          display: flex;
          flex-direction: column;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .wp-coursework-grid { grid-template-columns: 1fr; }
          .wp-featured-inner { grid-template-columns: 1fr; }
          .wp-featured-inner--with-screenshot { grid-template-columns: 1fr; }
          .wp-featured-right { border-left: none; border-top: 1px solid var(--border); padding-left: 0; padding-top: 24px; }
          .wp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .wp-portal-row, .wp-portal-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
          .wp-featured-inner { padding: 24px; }
          .wp-featured-inner--with-screenshot { padding: 24px; }
        }
      `}</style>
    </>
  );
}
