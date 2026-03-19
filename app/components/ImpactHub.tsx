"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

// ─── Four DevRel Program Types ────────────────────────────────────────────────
// Based on Luke's SlashData chapters and career pattern across 5 companies.

const PROGRAMS = [
  {
    id: 1,
    number: "01",
    type: "Developer Portal & DX",
    headline: "Building the infrastructure developers need to self-serve.",
    description:
      "Before you can grow a developer ecosystem, developers need somewhere to land. A portal with real docs, real quickstarts, and a path from zero to working in under an hour. I have built this from scratch at three companies — each time inheriting nothing and shipping something developers actually use.",
    companies: ["Nutanix", "LinearB", "Hazelcast"],
    evidence: [
      {
        label: "Nutanix.dev",
        detail: "Built from zero. 49+ open-source repos. Self-paced labs, API reference, Twitch live coding. Still live.",
        link: "/work#docs",
        external: false,
      },
      {
        label: "gitStream Docs",
        detail: "Complete docs for LinearB's workflow automation product. Quickstarts, automation library, API reference, plugin dev guides.",
        link: "https://docs.gitstream.cm/",
        external: true,
      },
      {
        label: "Hazelcast Developer Program",
        detail: "Rebuilt developer presence and onboarding for a distributed computing platform entering a competitive market.",
        link: "/content#talks",
        external: false,
      },
    ],
    color: "ocean",
    accentHex: "#0C4A6E",
    bgHex: "rgba(12,74,110,0.06)",
    borderHex: "rgba(12,74,110,0.18)",
  },
  {
    id: 2,
    number: "02",
    type: "Community & Ecosystem",
    headline: "Events, advocacy, and ecosystems that grow themselves.",
    description:
      "Developer communities are not built by posting on Twitter. They are built by showing up — at conferences, at hackathons, in forums, on stages. I ran Codegeist at Atlassian, built the Nutanix Dev Live Twitch channel, spoke at DevRelCon London and San Francisco, and published the industry guide on how to do it at scale.",
    companies: ["Atlassian", "Nutanix", "DevRelCon"],
    evidence: [
      {
        label: "Codegeist — Atlassian Global Hackathon",
        detail: "Ran Atlassian's global developer hackathon. Drove measurable Marketplace growth and ecosystem adoption across the partner ecosystem.",
        link: null,
        external: false,
      },
      {
        label: "DevRelCon Speaker — London & San Francisco",
        detail: "Two conference talks: building developer programs from zero, and developer marketing strategy. Representing Nutanix on global DevRel stages.",
        link: "/content",
        external: false,
      },
      {
        label: "SlashData Developer Marketing Guide",
        detail: "Authored two chapters: 'Scaling Down' (programs under budget constraints) and 'Starting from Scratch Program' (zero-to-one playbook). Published by SlashData.",
        link: "https://a.co/d/eIgJG8o",
        external: true,
      },
      {
        label: "Nutanix Dev Live — Twitch",
        detail: "Launched and ran live coding channel as part of the Nutanix developer program. Community content that scaled reach beyond traditional channels.",
        link: null,
        external: false,
      },
    ],
    color: "teal",
    accentHex: "#0369A1",
    bgHex: "rgba(3,105,161,0.06)",
    borderHex: "rgba(3,105,161,0.18)",
  },
  {
    id: 3,
    number: "03",
    type: "Product Launch & GTM",
    headline: "Launches that land with developer audiences.",
    description:
      "Getting a developer tool to market is not the same as getting any other product to market. The narrative has to be technically credible. The content has to be genuinely useful. The messaging has to survive contact with an audience that will immediately call out anything that is not true. I have shipped launches at Harness, Nutanix, and Sencha — and the videos, release notes, and positioning documents are still out there.",
    companies: ["Harness", "Nutanix", "Sencha"],
    evidence: [
      {
        label: "Harness Build Intelligence — Launch Video",
        detail: "Scripted, produced, and shipped. Product launch video for Harness CI's Build Intelligence feature.",
        link: "/content",
        external: false,
      },
      {
        label: "Harness CI Release Notes",
        detail: "Wrote and maintained release notes for Harness CI — precise technical communication for developers tracking breaking changes and migration paths.",
        link: "https://developer.harness.io/release-notes/continuous-integration/#version-141",
        external: true,
      },
      {
        label: "Sencha Product Video — 246K Views",
        detail: "Wrote, filmed, and edited. One of the highest-performing developer product videos of its era. Still on Vimeo.",
        link: "https://vimeo.com/55486684",
        external: true,
      },
      {
        label: "Azure DevOps → Harness Migration",
        detail: "Technical walkthrough video for platform migration. Step-by-step content that drives adoption by reducing friction at the switching point.",
        link: "https://www.youtube.com/watch?v=zsmYoojBQig",
        external: true,
      },
    ],
    color: "amber",
    accentHex: "#D97706",
    bgHex: "rgba(217,119,6,0.06)",
    borderHex: "rgba(217,119,6,0.18)",
  },
  {
    id: 4,
    number: "04",
    type: "Starting from Scratch",
    headline: "No program, no docs, no community. Here is what I do first.",
    description:
      "The hardest version of this job is when there is nothing. No portal, no docs, no community, no process, no headcount. I have done this three times. I wrote the industry playbook on how to do it — literally published by SlashData as a chapter in the Developer Marketing Essential Guide. The pattern is consistent: audit what exists, ship something developers can use in week one, build the infrastructure that lets you scale.",
    companies: ["Nutanix", "LinearB", "Hazelcast"],
    evidence: [
      {
        label: "SlashData Chapter: 'Starting from Scratch Program'",
        detail: "The zero-to-one playbook for developer programs. How to launch a program at a company with no DevRel history, no budget baseline, and no community. Free to download.",
        link: "/Starting-from-Scratch-Program.pdf",
        external: false,
        download: true,
        downloadName: "Developer-Marketing-Starting-From-Scratch.pdf",
      },
      {
        label: "SlashData Chapter: 'Scaling Down'",
        detail: "How developer programs survive and grow under budget constraints. Written from experience running programs that had to do more with less.",
        link: "/ScalingDown.pdf",
        external: false,
        download: true,
        downloadName: "Developer-Marketing-Scaling-Down.pdf",
      },
      {
        label: "Hazelcast Developer Program Presentation",
        detail: "Conference talk documenting the zero-to-one journey: how to build and scale a developer program from nothing for a distributed computing platform.",
        link: "https://youtu.be/rkpZpmwnjew?t=326",
        external: true,
      },
    ],
    color: "green",
    accentHex: "#059669",
    bgHex: "rgba(5,150,105,0.06)",
    borderHex: "rgba(5,150,105,0.18)",
  },
];

// ─── Numbers that mean something ─────────────────────────────────────────────

const PROOF_NUMBERS = [
  { value: "3×", label: "Developer programs built from zero", sub: "Nutanix · LinearB · Hazelcast", link: "/work#docs" },
  { value: "49+", label: "Open-source repos shipped", sub: "Nutanix GitHub org — still live", link: "https://github.com/nutanix" },
  { value: "50+", label: "Events & conference appearances", sub: "Four continents", link: "/content" },
  { value: "246K", label: "Views on a single product video", sub: "Sencha — written, filmed, edited", link: "https://vimeo.com/55486684" },
  { value: "10K", label: "TikTok followers", sub: "Zero to 10K in one summer", link: "https://www.tiktok.com/@pitterpatterdiving" },
  { value: "1,300+", label: "Books sold", sub: "Mia Kingtide ocean science series", link: "https://www.amazon.com/s?k=mia+kingtide" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ImpactHub() {
  const [contactOpen, setContactOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState(1);

  const program = PROGRAMS.find(p => p.id === activeProgram)!;

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ── Page header ── */}
      <section className="ih-hero section-body">
        <div className="content-wrap">
          <div className="ih-eyebrow">Impact</div>
          <h1 className="ih-title">Four types of developer programs.<br />Built at five companies. Here is the evidence.</h1>
          <p className="ih-sub">
            Not a list of responsibilities. Each entry links to something real — a portal still live, a talk on YouTube, a chapter you can download.
          </p>
        </div>
      </section>

      {/* ── Four program types (tab + detail) ── */}
      <section className="section-body section-alt" id="programs">
        <div className="content-wrap">
          <div className="ih-prog-eyebrow">Four Program Types</div>

          {/* Tab strip */}
          <div className="ih-tabs">
            {PROGRAMS.map(p => (
              <button
                key={p.id}
                className={`ih-tab${activeProgram === p.id ? " ih-tab--active" : ""}`}
                style={activeProgram === p.id ? {
                  color: p.accentHex,
                  borderColor: p.accentHex,
                  background: p.bgHex,
                } : {}}
                onClick={() => setActiveProgram(p.id)}
              >
                <span className="ih-tab-num">{p.number}</span>
                <span className="ih-tab-label">{p.type}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="ih-panel" style={{ borderColor: program.borderHex }}>
            <div className="ih-panel-left">
              <div className="ih-panel-companies">
                {program.companies.map(c => (
                  <span key={c} className="ih-company-chip" style={{ color: program.accentHex, background: program.bgHex, borderColor: program.borderHex }}>{c}</span>
                ))}
              </div>
              <h2 className="ih-panel-headline">{program.headline}</h2>
              <p className="ih-panel-desc">{program.description}</p>
            </div>
            <div className="ih-panel-right">
              <div className="ih-evidence-label">Evidence</div>
              <div className="ih-evidence-list">
                {program.evidence.map(e => (
                  <div key={e.label} className="ih-evidence-item">
                    <div className="ih-evidence-header">
                      <span className="ih-evidence-dot" style={{ background: program.accentHex }} />
                      {e.link ? (
                        <a
                          href={e.link}
                          target={e.external ? "_blank" : undefined}
                          rel={e.external ? "noopener noreferrer" : undefined}
                          download={(e as { download?: boolean; downloadName?: string }).download ? (e as { downloadName?: string }).downloadName : undefined}
                          className="ih-evidence-title"
                          style={{ color: program.accentHex }}
                        >
                          {e.label} {e.external ? "↗" : (e as { download?: boolean }).download ? "↓" : "→"}
                        </a>
                      ) : (
                        <span className="ih-evidence-title-plain">{e.label}</span>
                      )}
                    </div>
                    <p className="ih-evidence-detail">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Numbers that mean something ── */}
      <section className="section-body" id="numbers">
        <div className="content-wrap">
          <div className="ih-eyebrow" style={{ marginBottom: 12 }}>By the numbers</div>
          <h2 className="ih-section-title">Data points with receipts.</h2>
          <p className="ih-section-sub">Every number links to the thing it is measuring.</p>

          <div className="ih-numbers-grid">
            {PROOF_NUMBERS.map(n => (
              <a key={n.label} href={n.link} target={n.link.startsWith("http") ? "_blank" : undefined} rel={n.link.startsWith("http") ? "noopener noreferrer" : undefined} className="ih-number-card">
                <span className="ih-number-value">{n.value}</span>
                <span className="ih-number-label">{n.label}</span>
                <span className="ih-number-sub">{n.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Downloads ── */}
      <section className="section-body section-alt" id="downloads">
        <div className="content-wrap">
          <div className="ih-eyebrow" style={{ marginBottom: 12 }}>SlashData — Free Download</div>
          <h2 className="ih-section-title">The playbooks. In writing.</h2>
          <p className="ih-section-sub" style={{ marginBottom: 36 }}>
            Two chapters I authored in the SlashData Developer Marketing Essential Guide. The actual frameworks, not a summary.
          </p>
          <div className="ih-downloads">
            {[
              {
                title: "Starting from Scratch Program",
                file: "/Starting-from-Scratch-Program.pdf",
                download: "Developer-Marketing-Starting-From-Scratch.pdf",
                desc: "How to build a developer program from zero — the playbook for launching at a company with no DevRel history, no budget baseline, and no community.",
              },
              {
                title: "Scaling Down",
                file: "/ScalingDown.pdf",
                download: "Developer-Marketing-Scaling-Down.pdf",
                desc: "How developer programs survive and thrive when budgets shrink. Strategies for doing more with less without killing the things that actually matter.",
              },
            ].map(ch => (
              <a key={ch.title} href={ch.file} download={ch.download} className="ih-download-card">
                <div className="ih-download-icon">PDF</div>
                <div className="ih-download-body">
                  <div className="ih-download-pub">SlashData — Developer Marketing Essential Guide</div>
                  <div className="ih-download-title">{ch.title}</div>
                  <div className="ih-download-desc">{ch.desc}</div>
                </div>
                <div className="ih-download-arrow">↓</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-body" id="contact">
        <div className="content-wrap">
          <div className="ih-cta-inner">
            <h2 className="ih-cta-title">If you need a developer program built, I have done it before.</h2>
            <p className="ih-cta-sub">
              Three times from zero. Playbooks published. Portals still live. If the scenario fits, let&apos;s talk.
            </p>
            <button className="ih-cta-btn" onClick={() => setContactOpen(true)}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .ih-hero { background: var(--color-bg); padding-bottom: 0 !important; border-bottom: none !important; }
        .ih-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .ih-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 3.8vw, 48px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .ih-sub {
          font-size: 17px;
          color: var(--color-text-secondary);
          line-height: 1.75;
          max-width: 580px;
        }

        /* ── Program tabs ── */
        .ih-prog-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 24px;
        }
        .ih-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 32px;
        }
        .ih-tab {
          background: var(--color-bg-card);
          border: 1.5px solid var(--color-border-light);
          border-radius: 10px;
          padding: 16px 18px;
          cursor: pointer;
          text-align: left;
          transition: all 0.18s;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ih-tab:hover {
          border-color: var(--color-primary);
          background: rgba(12,74,110,0.04);
        }
        .ih-tab--active {
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        }
        .ih-tab-num {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--color-text-muted);
          letter-spacing: 1px;
        }
        .ih-tab-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--heading);
          line-height: 1.3;
        }
        .ih-tab--active .ih-tab-label { color: inherit; }

        /* ── Detail panel ── */
        .ih-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          border: 1.5px solid var(--color-border-light);
          border-radius: 14px;
          padding: 40px 48px;
          background: var(--color-bg-card);
          box-shadow: var(--shadow-card);
          transition: border-color 0.2s;
        }
        .ih-panel-companies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }
        .ih-company-chip {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid;
        }
        .ih-panel-headline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 400;
          color: var(--heading);
          line-height: 1.25;
          margin-bottom: 18px;
          letter-spacing: -0.3px;
        }
        .ih-panel-desc {
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.8;
        }

        /* ── Evidence list ── */
        .ih-evidence-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--color-border-light);
        }
        .ih-evidence-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ih-evidence-item {}
        .ih-evidence-header {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 5px;
        }
        .ih-evidence-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .ih-evidence-title {
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          line-height: 1.4;
          transition: opacity 0.15s;
        }
        .ih-evidence-title:hover { opacity: 0.75; }
        .ih-evidence-title-plain {
          font-size: 13px;
          font-weight: 700;
          color: var(--heading);
          line-height: 1.4;
        }
        .ih-evidence-detail {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          line-height: 1.65;
          padding-left: 16px;
          margin: 0;
        }

        /* ── Numbers grid ── */
        .ih-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.4px;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .ih-section-sub {
          font-size: 15px;
          color: var(--color-text-secondary);
          margin-bottom: 40px;
        }
        .ih-numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .ih-number-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: 12px;
          padding: 28px 24px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transition: all 0.2s;
          box-shadow: var(--shadow-card);
        }
        .ih-number-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-primary-light);
          box-shadow: var(--shadow-card-hover);
        }
        .ih-number-value {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 42px;
          font-weight: 400;
          color: var(--color-primary);
          line-height: 1;
        }
        .ih-number-label {
          font-size: 14px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.35;
        }
        .ih-number-sub {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--color-text-muted);
          letter-spacing: 0.5px;
        }

        /* ── Downloads ── */
        .ih-downloads {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .ih-download-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 22px 24px;
          background: var(--color-bg-card);
          border: 1.5px solid var(--color-border-light);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }
        .ih-download-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover);
          color: inherit;
        }
        .ih-download-card:hover .ih-download-icon {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        .ih-download-icon {
          width: 44px;
          height: 44px;
          border-radius: 8px;
          background: rgba(12,74,110,0.07);
          border: 1px solid rgba(12,74,110,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
          color: var(--color-primary);
          flex-shrink: 0;
          transition: all 0.2s;
          letter-spacing: 0.5px;
        }
        .ih-download-body { flex: 1; }
        .ih-download-pub {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .ih-download-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 6px;
        }
        .ih-download-desc {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
        .ih-download-arrow {
          font-size: 20px;
          color: var(--color-text-muted);
          flex-shrink: 0;
          align-self: center;
        }

        /* ── CTA ── */
        .ih-cta-inner {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .ih-cta-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.2vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.2;
          letter-spacing: -0.4px;
        }
        .ih-cta-sub {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .ih-cta-btn {
          background: var(--color-accent);
          color: #fff;
          font-family: var(--font-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 13px 32px;
          border: 2px solid var(--color-accent);
          border-radius: 9px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .ih-cta-btn:hover {
          background: var(--color-accent-hover);
          border-color: var(--color-accent-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217,119,6,0.25);
        }

        /* ── Responsive ── */
        @media (max-width: 1000px) {
          .ih-tabs { grid-template-columns: repeat(2, 1fr); }
          .ih-panel { grid-template-columns: 1fr; gap: 36px; padding: 32px; }
        }
        @media (max-width: 700px) {
          .ih-tabs { grid-template-columns: 1fr 1fr; }
          .ih-numbers-grid { grid-template-columns: repeat(2, 1fr); }
          .ih-downloads { grid-template-columns: 1fr; }
          .ih-panel { padding: 24px; }
        }
        @media (max-width: 480px) {
          .ih-tabs { grid-template-columns: 1fr; }
          .ih-numbers-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
