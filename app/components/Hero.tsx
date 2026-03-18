"use client";

import { useState } from "react";
import Image from "next/image";
import { personalInfo, stats } from "../data/portfolio";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <section id="home" className="hero-section">
        {/* Background radial glow */}
        <div className="hero-glow" />

        <div className="hero-inner">
          {/* Left: text */}
          <div className="hero-text">
            <div className="hero-eyebrow">Developer Experience &amp; Product Marketing</div>

            <h1 className="hero-name">{personalInfo.name}</h1>

            <p className="hero-intro">
              The hardest part of technology isn&apos;t building it. It&apos;s getting people to use it.
            </p>
            <p className="hero-intro">
              I design the systems that make that happen across developer experience, product marketing,
              and community, turning powerful ideas into widely adopted products.
            </p>
            <p className="hero-intro">
              Over the past <strong>20+ years</strong>, I have led this work at{" "}
              <a href="https://www.atlassian.com/" target="_blank" rel="noopener noreferrer" className="hero-link">Atlassian</a>,{" "}
              <a href="https://www.nutanix.com/" target="_blank" rel="noopener noreferrer" className="hero-link">Nutanix</a>,{" "}
              <a href="https://hazelcast.com/" target="_blank" rel="noopener noreferrer" className="hero-link">Hazelcast</a>,{" "}
              <a href="https://linearb.io/" target="_blank" rel="noopener noreferrer" className="hero-link">LinearB</a>, and{" "}
              <a href="https://www.harness.io/" target="_blank" rel="noopener noreferrer" className="hero-link">Harness</a>.
              {" "}I am also the author of the{" "}
              <a href="https://miakingtide.com/" target="_blank" rel="noopener noreferrer" className="hero-link">Mia Kingtide</a>{" "}
              series, making complex systems understandable, engaging, and worth exploring.
            </p>

            {/* Meta */}
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

            {/* CTAs */}
            <div className="hero-ctas">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View LinkedIn
              </a>
              <a href="/Luke K Director of DevRel -2026.pdf" download="Luke-Kilpatrick-Resume-2026.pdf" className="btn-secondary">
                Download Resume ↓
              </a>
              <button className="btn-secondary" onClick={() => setContactOpen(true)}>
                Get In Touch
              </button>
            </div>

            {/* Social row */}
            <div className="hero-social">
              {[
                { href: personalInfo.github,   label: "GitHub" },
                { href: personalInfo.youtube,  label: "YouTube" },
                { href: personalInfo.linkedin, label: "LinkedIn" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="hero-photo-wrap">
            <div className="hero-photo-ring">
              <Image
                src="/profile.jpg"
                alt="Luke Kilpatrick"
                width={340}
                height={340}
                priority
                className="hero-photo"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          {stats.map(s => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .hero-section {
          position: relative;
          padding: 140px 0 0;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .hero-glow {
          position: absolute;
          top: -120px; right: -80px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(74,158,229,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px 56px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 64px;
          align-items: center;
        }
        .hero-text { max-width: 580px; }

        .hero-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.05s forwards;
        }
        .hero-name {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(40px, 5.5vw, 60px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--heading);
          margin-bottom: 22px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.15s forwards;
        }
        .hero-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid rgba(74,158,229,0.35);
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-link:hover {
          color: #6BB5F0;
          border-bottom-color: #6BB5F0;
        }
        .hero-intro {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.25s forwards;
        }
        .hero-intro strong { color: var(--text); font-weight: 600; }

        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 32px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.35s forwards;
        }
        .hero-meta-item {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .hero-dot {
          width: 6px; height: 6px;
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
          box-shadow: 0 0 0 0 rgba(60,179,113,0.4);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(60,179,113,0.4); }
          70% { box-shadow: 0 0 0 8px rgba(60,179,113,0); }
          100% { box-shadow: 0 0 0 0 rgba(60,179,113,0); }
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.45s forwards;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 11px 24px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: #6BB5F0;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(74,158,229,0.35);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 11px 24px;
          background: transparent;
          color: var(--text);
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn-secondary:hover {
          border-color: var(--border-accent);
          color: var(--accent);
          background: var(--accent-glow);
          transform: translateY(-1px);
        }

        .hero-social {
          display: flex;
          gap: 8px;
          opacity: 0;
          animation: fadeUp 0.6s ease 0.55s forwards;
        }
        .social-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.5px;
          color: var(--text-dim);
          padding: 5px 12px;
          border: 1px solid var(--border);
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-link:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }

        /* Photo */
        .hero-photo-wrap {
          flex-shrink: 0;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.3s forwards;
        }
        .hero-photo-ring {
          width: 280px; height: 280px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, var(--accent) 0%, rgba(74,158,229,0.2) 100%);
          box-shadow: 0 0 60px rgba(74,158,229,0.2);
        }
        .hero-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        /* Stats strip */
        .hero-stats {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border);
        }
        .hero-stat {
          padding: 24px 20px;
          text-align: center;
          border-right: 1px solid var(--border);
          transition: background 0.2s;
        }
        .hero-stat:last-child { border-right: none; }
        .hero-stat:hover { background: var(--bg-card); }
        .hero-stat-value {
          display: block;
          font-family: var(--font-serif), Georgia, serif;
          font-size: 30px;
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
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 760px) {
          .hero-section { padding-top: 100px; }
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
          .hero-text { max-width: 100%; }
          .hero-meta { justify-content: center; }
          .hero-ctas { justify-content: center; }
          .hero-social { justify-content: center; }
          .hero-photo-wrap { justify-self: center; }
          .hero-photo-ring { width: 200px; height: 200px; }
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
          .hero-stat:nth-child(2) { border-right: none; }
        }
      `}</style>
    </>
  );
}
