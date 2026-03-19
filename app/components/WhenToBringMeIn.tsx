"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

const SCENARIOS = [
  {
    id: 1,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    trigger: "Launching a developer platform",
    description: "You have infrastructure, APIs, or tooling that developers need to adopt. You need the portal, docs, onboarding system, and go-to-market strategy that make it actually happen.",
    colorKey: "accent",
  },
  {
    id: 2,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    trigger: "Adoption is broken",
    description: "Developers sign up but do not activate. The docs are incomplete, the onboarding is confusing, and the support queue is full of questions that should never have been asked.",
    colorKey: "teal",
  },
  {
    id: 3,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
      </svg>
    ),
    trigger: "Building AI-powered workflows",
    description: "You need AI woven into content production, developer tooling, or operational systems. Not a ChatGPT wrapper. Actual automation that ships and runs without babysitting.",
    colorKey: "purple",
  },
  {
    id: 4,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
      </svg>
    ),
    trigger: "Complex product, unclear story",
    description: "Your product does something powerful but the positioning is muddy, the messaging is too technical, and no one outside engineering can explain what it actually does.",
    colorKey: "green",
  },
  {
    id: 5,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    trigger: "Shipping a major launch",
    description: "New product, new feature, new category. You need the full launch stack: narrative, release content, developer comms, video, and coordinated go-to-market execution.",
    colorKey: "orange",
  },
  {
    id: 6,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12c2-4 6-4 8 0s6 4 8 0"/>
        <path d="M2 18c2-4 6-4 8 0s6 4 8 0"/>
      </svg>
    ),
    trigger: "Building something from scratch",
    description: "No program, no community, no documentation. You need someone who has done it before and can move fast. Nutanix developer portal, gitStream docs, Hazelcast program: all started at zero.",
    colorKey: "teal",
  },
];

const COLOR_MAP: Record<string, { icon: string; border: string; bg: string }> = {
  accent: { icon: "var(--accent)", border: "rgba(14,127,192,0.2)",  bg: "var(--accent-glow)" },
  teal:   { icon: "var(--teal)",   border: "rgba(11,158,138,0.2)",  bg: "var(--teal-glow)" },
  green:  { icon: "var(--green)",  border: "rgba(30,138,76,0.2)",   bg: "var(--green-glow)" },
  orange: { icon: "var(--orange)", border: "rgba(196,126,42,0.2)",  bg: "var(--orange-glow)" },
  purple: { icon: "var(--purple)", border: "rgba(107,79,187,0.2)",  bg: "var(--purple-glow)" },
};

import React from "react";

export default function WhenToBringMeIn() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
    <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    <section id="when" className="when-section section-body">
      <div className="content-wrap--wide">
        <div className="when-header">
          <div className="when-eyebrow">When Teams Bring Me In</div>
          <h2 className="when-title">You have a complex system.<br/>Someone needs to make it usable.</h2>
          <p className="when-subtitle">
            Developer platform launches. Broken onboarding. AI workflows that need to actually ship. These are the problems I solve.
          </p>
        </div>

        <div className="when-grid">
          {SCENARIOS.map(s => {
            const c = COLOR_MAP[s.colorKey] ?? COLOR_MAP.accent;
            return (
              <div key={s.id} className="when-card" style={{ "--when-border": c.border, "--when-icon": c.icon, "--when-bg": c.bg } as React.CSSProperties}>
                <div className="when-card-icon">{s.icon}</div>
                <div className="when-card-trigger">{s.trigger}</div>
                <p className="when-card-desc">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="when-footer">
          <p className="when-footer-text">Sound familiar?</p>
          <button onClick={() => setContactOpen(true)} className="when-cta" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Let&apos;s talk &rarr;</button>
        </div>
      </div>

      <style>{`
        .when-section { background: var(--bg); }
        .when-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .when-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .when-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.2;
          letter-spacing: -0.5px;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        }
        .when-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .when-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 52px;
        }
        .when-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          cursor: default;
        }
        .when-card:hover {
          border-color: var(--when-border);
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          background: linear-gradient(160deg, var(--bg-card) 70%, var(--when-bg) 100%);
        }
        .when-card-icon {
          color: var(--when-icon);
          margin-bottom: 16px;
          display: flex;
        }
        .when-card-trigger {
          font-size: 16px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 10px;
          letter-spacing: -0.2px;
          line-height: 1.3;
        }
        .when-card-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
        }

        .when-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        .when-footer-text {
          font-size: 15px;
          color: var(--text-muted);
        }
        .when-cta {
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid rgba(14,127,192,0.35);
          padding-bottom: 2px;
          transition: all 0.2s;
        }
        .when-cta:hover {
          border-bottom-color: var(--accent);
          color: var(--accent-light);
        }

        @media (max-width: 960px) {
          .when-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .when-grid { grid-template-columns: 1fr; }
          .when-header { margin-bottom: 48px; }
        }
      `}</style>
    </section>
    </>
  );
}
