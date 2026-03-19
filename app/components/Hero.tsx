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
              Developer Platforms &nbsp;&middot;&nbsp; Product Marketing &nbsp;&middot;&nbsp; <strong style={{color:"var(--purple)"}}>Applied AI</strong>
            </div>

            <h1 className="hero-headline">
              The hardest part of technology<br />
              is not building it.
            </h1>
            <h2 className="hero-subheadline">
              It is getting people to use it.
            </h2>

            <p className="hero-sub">
              I build the systems that make that happen &mdash; developer portals, onboarding
              systems, product launches, and AI-powered workflows that actually ship.
              Complex systems into products developers adopt.
            </p>

            <div className="hero-ctas">
              <a href="/work" className="btn-primary">
                See What I&apos;ve Built
              </a>
              <button className="btn-secondary" onClick={() => setContactOpen(true)}>
                Get In Touch
              </button>
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
              <a href="/Luke-Kilpatrick-Director-DevRel-2026.pdf" download="Luke-Kilpatrick-Director-DevRel-2026.pdf" className="hero-resume-link">
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
              <span>AI-native builder</span>
            </div>
          </div>
        </div>

        <div className="hero-stats-strip">
          <div className="hero-stats-inner">
            {stats.map(s => (
              s.link ? (
                <a key={s.label} href={s.link} target="_blank" rel="noopener noreferrer" className="hero-stat hero-stat--link">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </a>
              ) : (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 172px 0 0;
          overflow: hidden;
          background: var(--bg);
        }
        .hero-glow-1 {
          position: absolute;
          top: -80px; right: -120px;
          width: 800px; height: 800px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(14,127,192,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          top: 220px; left: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(11,158,138,0.08) 0%, transparent 65%);
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
          align-items: center;
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
          color: var(--accent);
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.05s forwards;
          background: var(--accent-glow);
          border: 1px solid rgba(14,127,192,0.2);
          padding: 6px 14px;
          border-radius: 99px;
        }
        .hero-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        .hero-headline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(46px, 6vw, 76px);
          font-weight: 400;
          line-height: 1.06;
          color: var(--heading);
          margin-bottom: 10px;
          letter-spacing: -1.5px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.15s forwards;
        }
        .hero-subheadline {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(40px, 5.5vw, 70px);
          font-weight: 400;
          line-height: 1.06;
          letter-spacing: -1.5px;
          margin-bottom: 36px;
          background: linear-gradient(135deg, var(--accent) 0%, var(--teal) 60%, var(--purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.22s forwards;
        }

        .hero-sub {
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 40px;
          max-width: 560px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.30s forwards;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.38s forwards;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 9px;
          transition: all 0.2s;
          text-decoration: none;
          border: none;
          cursor: pointer;
          letter-spacing: 0.1px;
        }
        .btn-primary:hover {
          background: var(--accent-light);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(14,127,192,0.3);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 12px 28px;
          background: var(--bg-card);
          color: var(--text);
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 9px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
          cursor: pointer;
          box-shadow: var(--shadow-card);
        }
        .btn-secondary:hover {
          border-color: var(--border-accent);
          color: var(--accent);
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover);
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
          margin-bottom: 32px;
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
          background: linear-gradient(135deg, var(--accent) 0%, var(--teal) 100%);
          box-shadow: 0 0 80px rgba(14,127,192,0.18), 0 0 40px rgba(11,158,138,0.12);
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
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 99px;
          padding: 7px 16px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: var(--shadow-card);
          white-space: nowrap;
        }
        .hero-badge-icon { font-size: 10px; }

        /* Stats */
        .hero-stats-strip {
          border-top: 1px solid var(--border);
          background: var(--bg-card);
        }
        .hero-stats-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 32px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .hero-stat {
          padding: 26px 20px;
          text-align: center;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: var(--bg-card-hover); }
        .hero-stat--link { text-decoration: none; color: inherit; cursor: pointer; }
        .hero-stat--link:hover { background: var(--bg-card-hover); color: inherit; }
        .hero-stat--link .hero-stat-value { transition: color 0.2s; }
        .hero-stat--link:hover .hero-stat-value { color: var(--accent); }
        .hero-stat-value {
          display: block;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 32px;
          color: var(--heading);
          line-height: 1;
          margin-bottom: 6px;
        }
        .hero-stat-label {
          display: block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
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
          .hero-section { padding-top: 100px; }
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
