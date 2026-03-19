"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function CTASection() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <section id="cta" className="cta-section">
        <div className="cta-glow-left" />
        <div className="cta-glow-right" />
        <div className="content-wrap">
          <div className="cta-inner">
            <h2 className="cta-title">
              Let&apos;s build something<br />worth using.
            </h2>
            <p className="cta-sub">
              Whether you need a developer program built from zero, a platform launch strategy,
              a documentation system, or applied AI workflows that actually ship, reach out.
            </p>
            <button className="cta-btn-primary" onClick={() => setContactOpen(true)}>
              Get In Touch
            </button>
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
        @media (max-width: 540px) {
          .cta-btn-primary { width: 100%; justify-content: center; }
        }
      `}</style>
    </>
  );
}
