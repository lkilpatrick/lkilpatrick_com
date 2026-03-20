"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolio";
import ContactModal from "./ContactModal";

const EXT_LINKS = [
  { href: personalInfo.linkedin, label: "LinkedIn" },
  { href: personalInfo.github, label: "GitHub" },
  { href: personalInfo.youtube, label: "YouTube" },
];

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <footer style={{ background: "var(--color-bg-footer)", padding: "48px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", gap: 0, marginBottom: 20 }}>
            {EXT_LINKS.map((link, i) => (
              <span key={link.label} style={{ display: "inline-flex", alignItems: "center" }}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {link.label}
                </a>
                <span style={{ color: "rgba(255,255,255,0.2)", padding: "0 8px", fontSize: 12, userSelect: "none" }}>·</span>
              </span>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="footer-link"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}
            >
              luke@lukek.ca
            </button>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 8 }}>
            &copy; 2026 Luke Kilpatrick &nbsp;·&nbsp; Built with code, sugar free red bull, and salt water.
          </p>
        </div>
      </footer>
    </>
  );
}
