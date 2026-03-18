"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CTASection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <section className="cta-section">
        <div className="cta-glow-left" />
        <div className="cta-glow-right" />
        <div className="content-wrap">
          <div className="cta-inner">
            <div className="cta-eyebrow">
              <span className="cta-eyebrow-dot" />
              Available Now
            </div>
            <h2 className="cta-title">
              Let&apos;s build something<br />worth using.
            </h2>
            <p className="cta-sub">
              Whether you need a developer program built from zero, a platform launch strategy,
              a documentation system, or applied AI workflows that actually ship, reach out.
            </p>
            <div className="cta-actions">
              <button className="cta-btn-primary" onClick={() => setContactOpen(true)}>
                Get In Touch
              </button>
              <a href="https://www.linkedin.com/in/lukekilpatrick/" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                Connect on LinkedIn
              </a>
              <a href="/Luke K Director of DevRel -2026.pdf" download="Luke-Kilpatrick-Resume-2026.pdf" className="cta-btn-ghost">
                Download Resume ↓
              </a>
            </div>
            <div className="cta-social">
              {[
                { href: "https://github.com/lkilpatrick", label: "GitHub" },
                { href: "https://www.youtube.com/@LukeKilpatrick", label: "YouTube" },
                { href: "https://www.tiktok.com/@pitterpatterdiving", label: "TikTok" },
                { href: "https://www.instagram.com/lukekilpat/", label: "Instagram" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="cta-social-link">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cta-section {
          position: relative;
          padding: 100px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          overflow: hidden;
        }
        .cta-glow-left {
          position: absolute;
          top: -100px; left: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(14,127,192,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-glow-right {
          position: absolute;
          bottom: -100px; right: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(11,158,138,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-inner {
          text-align: center;
          position: relative;
          max-width: 640px;
          margin: 0 auto;
        }
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--green);
          margin-bottom: 28px;
          padding: 5px 14px;
          background: var(--green-glow);
          border: 1px solid rgba(30,138,76,0.2);
          border-radius: 99px;
        }
        .cta-eyebrow-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 0 rgba(30,138,76,0.5);
          animation: ctaPulse 2.2s infinite;
        }
        @keyframes ctaPulse {
          0% { box-shadow: 0 0 0 0 rgba(30,138,76,0.5); }
          70% { box-shadow: 0 0 0 8px rgba(30,138,76,0); }
          100% { box-shadow: 0 0 0 0 rgba(30,138,76,0); }
        }
        .cta-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .cta-sub {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 40px;
        }
        .cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          padding: 13px 32px;
          background: var(--accent);
          color: #fff;
          font-family: var(--font-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn-primary:hover {
          background: var(--accent-light);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(14,127,192,0.3);
        }
        .cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 13px 28px;
          background: transparent;
          color: var(--text);
          font-family: var(--font-sans), sans-serif;
          font-size: 15px;
          font-weight: 600;
          border-radius: 9px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn-secondary:hover {
          border-color: var(--border-accent);
          color: var(--accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
        }
        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          padding: 13px 20px;
          background: transparent;
          color: var(--text-muted);
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          border-radius: 9px;
          border: 1px solid var(--border);
          transition: all 0.2s;
          text-decoration: none;
        }
        .cta-btn-ghost:hover {
          color: var(--text);
          border-color: var(--border-accent);
        }
        .cta-social {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .cta-social-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          padding: 5px 12px;
          border: 1px solid var(--border);
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-social-link:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }

        @media (max-width: 540px) {
          .cta-actions { flex-direction: column; align-items: center; }
          .cta-btn-primary, .cta-btn-secondary, .cta-btn-ghost { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
