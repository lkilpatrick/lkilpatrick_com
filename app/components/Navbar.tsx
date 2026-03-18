"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#home",          label: "Home" },
  { href: "#onboarding",    label: "Docs & Portals" },
  { href: "#content",       label: "Content" },
  { href: "#presentations", label: "Video" },
  { href: "#impact",        label: "Impact" },
  { href: "#builder",       label: "Builder" },
];

export default function Navbar() {
  const [theme, setTheme]     = useState<"dark" | "light">("dark");
  const [active, setActive]   = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map(l => document.querySelector(l.href));
      let current = "#home";
      sections.forEach((el) => {
        if (el && el.getBoundingClientRect().top <= 100) {
          current = `#${el.id}`;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo / Name */}
          <button className="nav-logo" onClick={() => scrollTo("#home")}>
            LK
          </button>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  className={`nav-link${active === link.href ? " nav-link--active" : ""}`}
                  onClick={() => scrollTo(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-controls">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? "☀" : "☽"}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                className={`mobile-link${active === link.href ? " mobile-link--active" : ""}`}
                onClick={() => scrollTo(link.href)}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        .site-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          background: transparent;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
          border-bottom: 1px solid transparent;
        }
        .site-nav--scrolled {
          background: var(--bg);
          border-color: var(--border);
          box-shadow: 0 1px 24px rgba(0,0,0,0.18);
        }
        .nav-inner {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 24px;
          height: 64px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-logo {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          color: var(--heading);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          letter-spacing: 1px;
          flex-shrink: 0;
          transition: color 0.2s;
        }
        .nav-logo:hover { color: var(--accent); }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 4px;
          flex: 1;
        }
        .nav-link {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--text);
          background: var(--bg-card);
        }
        .nav-link--active {
          color: var(--accent) !important;
          background: var(--accent-glow) !important;
        }
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .theme-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .theme-btn:hover {
          border-color: var(--border-accent);
          color: var(--accent);
        }
        .hamburger {
          display: none;
          width: 36px; height: 36px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          cursor: pointer;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: var(--text-muted);
          transition: all 0.2s;
        }
        .hamburger:hover { border-color: var(--border-accent); color: var(--accent); }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--border);
          background: var(--bg);
          padding: 8px 0 12px;
        }
        .mobile-link {
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: var(--font-sans), sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          padding: 10px 24px;
          transition: color 0.2s, background 0.2s;
        }
        .mobile-link:hover { color: var(--text); background: var(--bg-card); }
        .mobile-link--active { color: var(--accent); }
        @media (max-width: 680px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}
