"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/",        label: "Home" },
  { href: "/work",    label: "Work" },
  { href: "/content", label: "Content" },
  { href: "/impact",  label: "Impact" },
  { href: "/about",   label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">LK</Link>

          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link${isActive(link.href) ? " nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-controls">
            <a href="/Luke-Kilpatrick-DevRel2026updated.pdf" download="Luke-Kilpatrick-DevRel2026updated.pdf" className="resume-btn">Resume ↓</a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-link${isActive(link.href) ? " mobile-link--active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Luke-Kilpatrick-DevRel2026updated.pdf"
              download="Luke-Kilpatrick-DevRel2026updated.pdf"
              className="mobile-resume-btn"
            >
              📄 Download Resume
            </a>
          </div>
        )}
      </nav>

      <style>{`
        .site-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 500;
          background: rgba(255,255,255,0.97);
          border-bottom: 1px solid var(--color-border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .site-nav--scrolled {
          box-shadow: 0 1px 16px rgba(0,0,0,0.08);
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
        .nav-logo:hover { color: var(--color-primary); }
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
          color: var(--color-text-secondary);
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .nav-link--active {
          color: var(--color-primary) !important;
          font-weight: 700 !important;
          border-bottom: 2px solid var(--color-primary);
          border-radius: 0;
          padding-bottom: 4px;
          background: none !important;
        }
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .resume-btn {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--color-primary);
          padding: 6px 12px;
          border: 1.5px solid var(--color-primary);
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s;
          background: transparent;
        }
        .resume-btn:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        @media (max-width: 680px) { .resume-btn { display: none; } }
        .mobile-resume-btn {
          display: block;
          margin: 8px 16px 16px;
          padding: 12px 20px;
          background: var(--color-primary);
          color: #fff;
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
          transition: background 0.2s;
        }
        .mobile-resume-btn:hover { background: var(--color-primary-dark); color: #fff; }
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
        .hamburger:hover { border-color: var(--color-primary); color: var(--color-primary); }
        .mobile-menu {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--color-border);
          background: var(--color-bg);
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
          color: var(--color-text-secondary);
          padding: 10px 24px;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--color-primary); }
        .mobile-link--active { color: var(--color-primary); font-weight: 700; }
        @media (max-width: 680px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>
    </>
  );
}
