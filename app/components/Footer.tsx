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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 20,
            }}
          >
            {EXT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="footer-link"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}
            >
              Email
            </button>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            &copy; 2026 Luke Kilpatrick. Built with code, sugar free red bull, and salt water.
          </p>
        </div>
      </footer>
    </>
  );
}
