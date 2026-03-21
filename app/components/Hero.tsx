"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo, stats } from "../data/portfolio";
import ContactModal from "./ContactModal";

const COMPANIES = [
  { label: "Atlassian", href: "https://www.atlassian.com/" },
  { label: "Nutanix", href: "https://www.nutanix.com/" },
  { label: "Hazelcast", href: "https://hazelcast.com/" },
  { label: "LinearB", href: "https://linearb.io/" },
  { label: "Harness", href: "https://www.harness.io/" },
];

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <section id="home" className="hero-section">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-glow-3" />
        <div className="hero-grid-bg" />

        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Developer Relations &nbsp;&middot;&nbsp; Developer Marketing &nbsp;&middot;&nbsp; <strong style={{color:"var(--color-primary)"}}>Builder</strong>
            </div>

            <h1 className="hero-headline">
              The hardest part of technology<br />
              is not building it.
            </h1>
            <h2 className="hero-subheadline">
              It is getting people to use it.
            </h2>

            <div className="hero-byline">— <a href="/about" className="hero-byline-link">Luke Kilpatrick</a></div>

            <p className="hero-sub">
              15 years building developer programs at{" "}
              <a href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>Atlassian</a>,{" "}
              <a href="https://www.nutanix.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>Nutanix</a>, and{" "}
              <a href="https://hazelcast.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>Hazelcast</a>.
              I wrote the{" "}
              <a href="https://a.co/d/eIgJG8o" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>SlashData framework</a>{" "}
              for identifying which type of developer program a company needs before building it.
              Outside work: a{" "}
              <a href="https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>daily ocean intelligence system</a>{" "}
              built on live marine data, and a{" "}<a href="https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-primary-light)" }}>middle-grade book series with 1,300+ copies sold</a>{" "}
              reviewed by scientists at MBARI and Hopkins Marine Station.
            </p>

            <div className="hero-proof-chips">
              <a href="/impact#four-types" className="hero-chip hero-chip--blue">4 Program Types Framework</a>
              <a href="/work" className="hero-chip hero-chip--blue">3 Developer Portals Built</a>
              <a href="/content#talks" className="hero-chip hero-chip--bold">15K+ People Presented To</a>
              <a href="https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK" target="_blank" rel="noopener noreferrer" className="hero-chip hero-chip--amber">12+ Books Published</a>
            </div>

            <div className="hero-ctas">
              <a href="/work" className="btn-primary">
                See What I&apos;ve Built
              </a>
            </div>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <span className="hero-dot" />
                {personalInfo.location}
              </span>
              {personalInfo.availableForWork && (
                <span className="hero-meta-item hero-available">
                  <span className="hero-pulse" />
                  {personalInfo.availability}
                </span>
              )}
              <a href="/ResumeLukeKilpatrickDevRel2026.pdf" download="ResumeLukeKilpatrickDevRel2026.pdf" className="hero-resume-link">
                Resume ↓
              </a>
            </div>

            <div className="hero-company-strip">
              <span className="hero-company-label">Experience at</span>
              {COMPANIES.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="hero-company-tag">
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <Image
                src="/profile.jpg"
                alt="Luke Kilpatrick"
                width={400}
                height={400}
                priority
                className="hero-photo"
              />
            </div>
            <div className="hero-photo-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/></svg>
              <span>Builder &middot; Diver &middot; Author</span>
            </div>
          </div>
        </div>

      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 100px 0 80px;
          overflow: hidden;
          background: var(--bg);
        }
        .hero-glow-1 {
          position: absolute;
          top: -80px; right: -120px;
          width: 800px; height: 800px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(12,74,110,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          top: 220px; left: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(217,119,6,0.05) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-3 {
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 100%; height: 200px;
          background: linear-gradient(to top, var(--bg) 0%, transparent 100%);
          pointer-events: none;
          z-index: 1;
        }
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.3;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%);
        }

        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px 96px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 80px;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.05s forwards;
          background: var(--color-bg-alt);
          border: 1px solid var(--color-border);
          padding: 6px 14px;
          border-radius: 99px;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--color-primary);
          flex-shrink: 0;
        }

        .hero-headline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--heading);
          margin-bottom: 6px;
          letter-spacing: -0.5px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.15s forwards;
        }
        .hero-subheadline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 28px;
          color: var(--color-primary);
          opacity: 0;
          animation: fadeUp 0.6s ease 0.22s forwards;
        }

        .hero-byline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 15px;
          color: var(--color-primary);
          font-style: italic;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.26s forwards;
          letter-spacing: 0.2px;
          text-align: right;
          max-width: 560px;
        }
        .hero-byline-link {
          color: var(--color-primary);
          text-decoration: none;
          font-style: italic;
          border-bottom: 1px solid rgba(12,74,110,0.3);
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-byline-link:hover {
          color: var(--color-accent);
          border-bottom-color: var(--color-accent);
        }

        .hero-sub {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 20px;
          max-width: 560px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.30s forwards;
        }

        .hero-proof-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.34s forwards;
        }
        .hero-chip {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 5px 12px;
          border-radius: 99px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .hero-chip--blue {
          color: var(--color-primary);
          background: rgba(12,74,110,0.07);
          border: 1px solid rgba(12,74,110,0.2);
        }
        .hero-chip--blue:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        .hero-chip--amber {
          color: var(--color-accent-hover);
          background: var(--color-accent-light);
          border: 1px solid rgba(217,119,6,0.3);
        }
        .hero-chip--amber:hover {
          background: var(--color-accent);
          color: #fff;
          border-color: var(--color-accent);
        }
        .hero-chip--bold {
          color: #fff;
          background: #0C4A6E;
          border: 1px solid #0C4A6E;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1px;
        }
        .hero-chip--bold:hover {
          background: #082F49;
          border-color: #082F49;
          color: #fff;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.42s forwards;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: var(--color-accent);
          color: #fff;
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 9px;
          transition: all 0.2s;
          text-decoration: none;
          border: 2px solid var(--color-accent);
          cursor: pointer;
          letter-spacing: 0.1px;
        }
        .btn-primary:hover {
          background: var(--color-accent-hover);
          border-color: var(--color-accent-hover);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(217,119,6,0.3);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: transparent;
          color: var(--color-primary);
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 9px;
          border: 2px solid var(--color-primary);
          transition: all 0.2s;
          text-decoration: none;
          cursor: pointer;
        }
        .btn-secondary:hover {
          background: var(--color-primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(12,74,110,0.2);
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 12px 20px;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          font-weight: 500;
          border-radius: 9px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
          letter-spacing: 0.3px;
        }
        .btn-ghost:hover {
          color: var(--text);
          border-color: var(--border-accent);
          background: var(--bg-card);
        }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.48s forwards;
        }
        .hero-meta-item {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .hero-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--border-accent);
          flex-shrink: 0;
        }
        .hero-available { color: var(--green); }
        .hero-pulse {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green);
          flex-shrink: 0;
          box-shadow: 0 0 0 0 rgba(30,138,76,0.5);
          animation: pulse 2.2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(30,138,76,0.5); }
          70% { box-shadow: 0 0 0 9px rgba(30,138,76,0); }
          100% { box-shadow: 0 0 0 0 rgba(30,138,76,0); }
        }

        .hero-company-strip {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: 0;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.56s forwards;
        }
        .hero-company-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-right: 4px;
        }
        .hero-company-tag {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-muted);
          padding: 4px 12px;
          border: 1px solid var(--border);
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.2s;
          background: var(--bg-card);
        }
        .hero-company-tag:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }

        /* Photo */
        .hero-photo-wrap {
          position: relative;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.3s forwards;
          align-self: center;
        }
        .hero-photo-ring {
          width: 320px; height: 320px;
          border-radius: 50%;
          padding: 3px;
          background: var(--color-primary);
          box-shadow: 0 0 60px rgba(12,74,110,0.2);
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }
        .hero-photo-badge {
          position: absolute;
          bottom: 16px; right: -16px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 99px;
          padding: 7px 16px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-card);
          white-space: nowrap;
        }
        .hero-badge-icon { font-size: 10px; }

        /* Stats */
        .hero-stats-strip {
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
          background: #fff;
        }
        .hero-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .hero-stat {
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid var(--color-border);
          transition: background 0.2s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: rgba(12,74,110,0.04); }
        .hero-stat--link { text-decoration: none; color: inherit; cursor: pointer; }
        .hero-stat--link:hover { background: rgba(12,74,110,0.04); color: inherit; }
        .hero-stat--link .hero-stat-value { transition: color 0.2s; }
        .hero-stat--link:hover .hero-stat-value { color: var(--color-accent); }
        .hero-stat--link .hero-stat-label::after { content: " ↗"; opacity: 0.4; font-size: 10px; }
        .hero-stat-value {
          display: block;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 38px;
          color: #0F172A;
          line-height: 1;
          margin-bottom: 8px;
          font-weight: 400;
        }
        .hero-stat-label {
          display: block;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #475569;
          font-weight: 500;
        }

        .hero-resume-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.2s;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1px;
        }
        .hero-resume-link:hover { color: var(--accent); border-bottom-color: var(--accent); }
        @media (max-width: 680px) {
          .hero-resume-link {
            display: inline-block;
            padding: 10px 20px;
            border: 1.5px solid var(--color-primary);
            border-radius: 8px;
            color: var(--color-primary);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            background: transparent;
          }
          .hero-resume-link:hover {
            background: var(--color-primary);
            color: #fff;
            border-color: var(--color-primary);
          }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 960px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 56px;
            text-align: center;
          }
          .hero-eyebrow { justify-content: center; }
          .hero-sub { max-width: 100%; }
          .hero-ctas { justify-content: center; }
          .hero-meta { justify-content: center; }
          .hero-company-strip { justify-content: center; }
          .hero-photo-wrap { justify-self: center; order: -1; }
          .hero-photo-ring { width: 220px; height: 220px; }
          .hero-photo-badge { right: 0; bottom: 8px; }
          .hero-text { order: 1; }
        }
        @media (max-width: 600px) {
          .hero-section { padding-top: 80px; }
          .hero-inner { padding: 0 20px 56px; }
          .hero-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(3) { border-top: 1px solid var(--border); }
          .hero-stat:nth-child(4) { border-top: 1px solid var(--border); border-right: none; }
        }
      `}</style>
    </>
  );
}
