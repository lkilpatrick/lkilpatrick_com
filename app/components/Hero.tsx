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
        <div className="hero-grid-bg" />

        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              Developer Experience &nbsp;&middot;&nbsp; Product Marketing &nbsp;&middot;&nbsp; Applied AI
            </div>

            <h1 className="hero-headline">
              The hardest part of technology{" "}
              <span className="hero-headline-accent">isn&apos;t building it.</span>
            </h1>
            <h1 className="hero-headline hero-headline-line2">
              It&apos;s getting people to use it.
            </h1>

            <p className="hero-sub">
              I help companies turn complex platforms into products developers understand,
              adopt, and want to use. I build the systems, from docs and onboarding to
              applied AI workflows, that make that possible.
            </p>

            <div className="hero-ctas">
              <a href="#systems" className="btn-primary">
                View My Work
              </a>
              <button className="btn-secondary" onClick={() => setContactOpen(true)}>
                Get In Touch
              </button>
              <a href="/Luke K Director of DevRel -2026.pdf" download="Luke-Kilpatrick-Resume-2026.pdf" className="btn-ghost">
                Resume ↓
              </a>
            </div>

            <div className="hero-meta">
              <span className="hero-meta-item">
                <span className="hero-dot" />
                {personalInfo.location}
              </span>
              <span className="hero-meta-item hero-available">
                <span className="hero-pulse" />
                {personalInfo.availability}
              </span>
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
                width={360}
                height={360}
                priority
                className="hero-photo"
              />
            </div>
            <div className="hero-photo-badge">
              <span className="hero-badge-icon">&#x2726;</span>
              <span>Applied AI</span>
            </div>
          </div>
        </div>

        <div className="hero-stats-strip">
          <div className="hero-stats-inner">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-value">{s.value}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 148px 0 0;
          overflow: hidden;
          background: var(--bg);
        }
        .hero-glow-1 {
          position: absolute;
          top: -60px; right: -100px;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(14,127,192,0.09) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          top: 200px; left: -200px;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(11,158,138,0.06) 0%, transparent 65%);
          pointer-events: none;
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
          padding: 0 32px 72px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 80px;
          align-items: center;
          position: relative;
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
          font-size: clamp(36px, 4.8vw, 58px);
          font-weight: 400;
          line-height: 1.12;
          color: var(--heading);
          margin-bottom: 8px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.15s forwards;
        }
        .hero-headline-line2 {
          margin-bottom: 28px;
          animation-delay: 0.2s;
        }
        .hero-headline-accent {
          background: linear-gradient(135deg, var(--accent) 0%, var(--teal) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 560px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.28s forwards;
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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            text-align: center;
          }
          .hero-eyebrow { justify-content: center; }
          .hero-sub { max-width: 100%; }
          .hero-ctas { justify-content: center; }
          .hero-meta { justify-content: center; }
          .hero-company-strip { justify-content: center; }
          .hero-photo-wrap { justify-self: center; }
          .hero-photo-ring { width: 240px; height: 240px; }
          .hero-photo-badge { right: 0; }
        }
        @media (max-width: 600px) {
          .hero-section { padding-top: 100px; }
          .hero-stats-inner { grid-template-columns: repeat(2, 1fr); }
          .hero-stat:nth-child(2) { border-right: none; }
          .hero-stat:nth-child(3) { border-top: 1px solid var(--border); }
          .hero-stat:nth-child(4) { border-top: 1px solid var(--border); border-right: none; }
        }
      `}</style>
    </>
  );
}
