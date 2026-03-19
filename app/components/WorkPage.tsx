"use client";

import Image from "next/image";
import { onboardingDocs } from "../data/portfolio";

// ─── Projects Section ────────────────────────────────────────────────────────

type Project = {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  what: string;
  built: string;
  matters: string;
  stack: string[];
  link: string | null;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    tag: "Flutter App",
    tagColor: "purple",
    title: "Tech Challenge Kenya",
    subtitle: "National STEM Competition Platform",
    what: "Production platform running Kenya's national STEM competition — students, schools, teams, and judges operating simultaneously across the entire country.",
    built: "15 modules in Flutter Web + Supabase: multi-role auth with RBAC, row-level security, audit logs, survey engine, team management, live scoring, bulk communications, and national reporting. Zero to production, single developer.",
    matters: "Complex domain. National scale. Real stakes. This is what engineering leadership looks like when there is no team to delegate to.",
    stack: ["Flutter Web", "Supabase", "Riverpod", "PostgreSQL RLS", "Multi-role RBAC", "15 modules"],
    link: null,
    featured: true,
  },
  {
    id: 2,
    tag: "Race Management",
    tagColor: "teal",
    title: "MPYC RaceDay",
    subtitle: "Real-Time Sailing Race Platform",
    what: "Real-time race management platform for MPYC — 5 user roles, 57 courses, live weather from 11 stations, GPS tracking, and automated scoring published to Clubspot.",
    built: "Flutter + Firebase: 25+ Firestore collections, Cloud Functions fetching weather every 60 seconds, FCM push notifications, GPS race tracking, Clubspot API sync. Android, iOS, and Web from a single codebase.",
    matters: "Production system used every racing weekend on Monterey Bay. One developer. SaaS-class complexity. Built because commercial tools cost thousands per year and still did not do what we needed.",
    stack: ["Flutter 3.x", "Firebase", "Cloud Functions", "GPS tracking", "11 weather stations", "Clubspot API"],
    link: null,
  },
  {
    id: 3,
    tag: "AI + Automation",
    tagColor: "teal",
    title: "Boat Daily Check",
    subtitle: "Victron VRM Monitoring Agent",
    what: "AI-powered overnight monitoring agent for two boats — queries live telemetry, processes power and battery data, and sends a formatted daily status report before I wake up.",
    built: "Python agent on cron, querying a Victron VRM API I reverse-engineered from network traffic. Wrote the reference documentation myself and open-sourced the project. The reference has since been adopted by the Victron community.",
    matters: "Real AI automation: not a demo, not a wrapper, not a proof of concept. A system that runs every day without intervention and solves a real operational problem.",
    stack: ["Python", "Victron VRM API", "Cron automation", "AI summarisation", "Open source"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
  },
];

// ─── Docs Section ─────────────────────────────────────────────────────────────

const PORTAL_SCREENSHOTS: Record<string, string> = {
  "Nutanix.dev — Developer Portal": "/screenshots/nutanix-dev.jpg",
  "gitStream Documentation Portal": "/screenshots/gitstream-docs.jpg",
  "Harness CI Release Notes":       "/screenshots/harness-ci.jpg",
};

const TAG_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  purple: { color: "var(--purple)", bg: "var(--purple-glow)", border: "rgba(107,79,187,0.2)" },
  teal:   { color: "var(--teal)",   bg: "var(--teal-glow)",   border: "rgba(11,158,138,0.2)" },
  blue:   { color: "var(--accent)", bg: "var(--accent-glow)", border: "rgba(14,127,192,0.2)" },
  orange: { color: "var(--orange)", bg: "var(--orange-glow)", border: "rgba(196,126,42,0.2)" },
  green:  { color: "var(--green)",  bg: "var(--green-glow)",  border: "rgba(30,138,76,0.2)" },
};

function ProjectCard({ project, isFeatured }: { project: Project; isFeatured: boolean }) {
  const tc = TAG_COLORS[project.tagColor] ?? TAG_COLORS.blue;

  if (isFeatured) {
    return (
      <div className="wp-featured">
        <div className="wp-featured-badge">Flagship Project</div>
        <div className="wp-featured-inner">
          <div className="wp-featured-left">
            <span className="wp-tag" style={{ color: tc.color, background: tc.bg, border: `1px solid ${tc.border}` }}>
              {project.tag}
            </span>
            <h3 className="wp-featured-title">{project.title}</h3>
            <div className="wp-featured-sub">{project.subtitle}</div>
            <div className="wp-wbm">
              <div className="wp-wbm-row">
                <span className="wp-wbm-label">What</span>
                <span className="wp-wbm-text">{project.what}</span>
              </div>
              <div className="wp-wbm-row">
                <span className="wp-wbm-label">Built</span>
                <span className="wp-wbm-text">{project.built}</span>
              </div>
              <div className="wp-wbm-row wp-wbm-row--matters">
                <span className="wp-wbm-label">Why</span>
                <span className="wp-wbm-text">{project.matters}</span>
              </div>
            </div>
          </div>
          <div className="wp-featured-right">
            <div className="wp-stack-label">Stack &amp; Scope</div>
            <div className="wp-stack">
              {project.stack.map(s => <span key={s} className="wp-chip">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const card = (
    <div className="wp-card">
      <div className="wp-card-top">
        <span className="wp-tag" style={{ color: tc.color, background: tc.bg, border: `1px solid ${tc.border}` }}>
          {project.tag}
        </span>
        {project.link && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-dim)" }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        )}
      </div>
      <h3 className="wp-card-title">{project.title}</h3>
      <div className="wp-card-sub">{project.subtitle}</div>
      <div className="wp-wbm-card">
        <div className="wp-wbm-card-row">
          <span className="wp-wbm-label">What</span>
          <span className="wp-wbm-text">{project.what}</span>
        </div>
        <div className="wp-wbm-card-row">
          <span className="wp-wbm-label">Built</span>
          <span className="wp-wbm-text">{project.built}</span>
        </div>
      </div>
      <div className="wp-stack" style={{ marginTop: "auto", paddingTop: 16 }}>
        {project.stack.map(s => <span key={s} className="wp-chip">{s}</span>)}
      </div>
      <div className="wp-proof">{project.matters}</div>
    </div>
  );

  return project.link ? (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="wp-card-link">
      {card}
    </a>
  ) : <div>{card}</div>;
}

function PortalRow({ item, screenshot, index }: {
  item: { label: string; title: string; link: string; org: string; description: string; extraLink?: { text: string; href: string } };
  screenshot: string | undefined;
  index: number;
}) {
  const isEven = index % 2 === 0;
  return (
    <div className={`wp-portal-row${isEven ? "" : " wp-portal-row--reverse"}`}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="wp-portal-img-wrap">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`Screenshot of ${item.title}`}
            width={600} height={380}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className="wp-portal-placeholder">
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-dim)" }}>
              {item.link.replace("https://", "")}
            </span>
          </div>
        )}
      </a>
      <div className="wp-portal-text">
        <div className="wp-portal-org">{item.org}</div>
        <div className="wp-portal-label">{item.label}</div>
        <h3 className="wp-portal-title">
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title} ↗
          </a>
        </h3>
        <p className="wp-portal-desc">{item.description}</p>
        {item.extraLink && (
          <a href={item.extraLink.href} target="_blank" rel="noopener noreferrer" className="wp-portal-extra">
            {item.extraLink.text} →
          </a>
        )}
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="wp-portal-btn">
          View Live Site →
        </a>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest     = PROJECTS.filter(p => !p.featured);

  const allDocs = [
    ...onboardingDocs.highlights,
    ...onboardingDocs.cards.map(c => ({
      label: c.tag,
      title: c.title,
      link: c.link,
      org: c.org,
      description: c.description,
    })),
  ];

  return (
    <>
      {/* ── Page header ── */}
      <section className="wp-hero section-body">
        <div className="content-wrap">
          <div className="wp-hero-eyebrow">Work</div>
          <h1 className="wp-hero-title">Systems I&apos;ve built. Problems I&apos;ve solved.</h1>
          <p className="wp-hero-sub">
            Production systems, developer platforms, and documentation sites — built from zero, used by real people.
            Each entry is a finished thing, not a proposal.
          </p>
        </div>
      </section>

      {/* ── Section 1: Projects & Systems ── */}
      <section className="section-body section-alt" id="projects">
        <div className="content-wrap--wide">
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Section 01</div>
            <h2 className="wp-section-title">Projects &amp; Systems</h2>
            <p className="wp-section-sub">
              Production systems with real users, real data, and real constraints. Built independently or as lead developer.
            </p>
          </div>

          {featured.map(p => (
            <ProjectCard key={p.id} project={p} isFeatured={true} />
          ))}

          <div className="wp-grid">
            {rest.map(p => (
              <ProjectCard key={p.id} project={p} isFeatured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Developer Portals & Documentation ── */}
      <section className="section-body" id="docs">
        <div className="content-wrap">
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Section 02</div>
            <h2 className="wp-section-title">Developer Portals &amp; Documentation</h2>
            <p className="wp-section-sub">
              The portals, docs, and onboarding systems that let developers self-serve — no sales call required.
              This is what I do first at every company.
            </p>
          </div>

          <div style={{ display: "grid", gap: 72 }}>
            {allDocs.map((item, i) => (
              <PortalRow
                key={item.title}
                item={item}
                screenshot={PORTAL_SCREENSHOTS[item.title]}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .wp-hero { background: var(--bg); padding-bottom: 0 !important; }
        .wp-hero-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .wp-hero-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.12;
          margin-bottom: 20px;
        }
        .wp-hero-sub {
          font-size: 17px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 600px;
        }

        /* ── Section headers ── */
        .wp-section-header {
          margin-bottom: 56px;
        }
        .wp-section-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .wp-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
          line-height: 1.15;
        }
        .wp-section-sub {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 540px;
          line-height: 1.7;
        }

        /* ── Tags / chips ── */
        .wp-tag {
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
        }
        .wp-chip {
          display: inline-block;
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-muted);
          background: var(--bg-card-hover);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3px 8px;
        }

        /* ── What/Built/Why rows ── */
        .wp-wbm {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }
        .wp-wbm-row {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 16px;
          align-items: start;
        }
        .wp-wbm-row--matters .wp-wbm-label { color: var(--accent); }
        .wp-wbm-row--matters .wp-wbm-text  { color: var(--text); font-weight: 500; }
        .wp-wbm-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          padding-top: 3px;
        }
        .wp-wbm-text {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
        }
        .wp-wbm-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .wp-wbm-card-row {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 12px;
          align-items: start;
        }

        /* ── Featured card ── */
        .wp-featured {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          margin-bottom: 28px;
          box-shadow: var(--shadow-card);
          position: relative;
          overflow: hidden;
        }
        .wp-featured-badge {
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--purple);
          background: var(--purple-glow);
          border-bottom: 1px solid rgba(107,79,187,0.2);
          border-right: 1px solid rgba(107,79,187,0.2);
          padding: 5px 16px;
          display: inline-block;
          border-radius: var(--radius) 0 var(--radius-sm) 0;
        }
        .wp-featured-inner {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 48px;
          padding: 32px 48px 48px;
        }
        .wp-featured-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 2.5vw, 32px);
          font-weight: 400;
          color: var(--heading);
          margin: 12px 0 4px;
          letter-spacing: -0.5px;
        }
        .wp-featured-sub {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-dim);
          margin-bottom: 4px;
        }
        .wp-featured-right {
          padding-top: 48px;
          border-left: 1px solid var(--border);
          padding-left: 40px;
        }
        .wp-stack-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 14px;
        }
        .wp-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* ── Card grid ── */
        .wp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 0;
        }
        .wp-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }
        .wp-card-link:hover .wp-card {
          transform: translateY(-5px);
          box-shadow: var(--shadow-card-hover), 0 0 0 1px rgba(14,127,192,0.08);
          border-color: var(--border-accent);
        }
        .wp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          height: 100%;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
        }
        .wp-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .wp-card-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }
        .wp-card-sub {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 16px;
        }
        .wp-proof {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border);
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          line-height: 1.5;
        }

        /* ── Portal rows ── */
        .wp-portal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .wp-portal-row--reverse { direction: rtl; }
        .wp-portal-row--reverse > * { direction: ltr; }
        .wp-portal-img-wrap {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s, transform 0.2s;
          background: var(--bg-card);
        }
        .wp-portal-img-wrap:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          transform: translateY(-2px);
        }
        .wp-portal-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-card-hover);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wp-portal-text { direction: ltr; }
        .wp-portal-org {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 6px;
        }
        .wp-portal-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-bottom: 8px;
        }
        .wp-portal-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
          line-height: 1.3;
        }
        .wp-portal-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .wp-portal-extra {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          border-bottom: 1px solid var(--border-accent);
          padding-bottom: 1px;
          display: block;
          margin-bottom: 16px;
        }
        .wp-portal-btn {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          padding: 8px 16px;
          border: 1px solid var(--border-accent);
          border-radius: 6px;
          display: inline-block;
          text-decoration: none;
          transition: all 0.2s;
          margin-top: 4px;
        }
        .wp-portal-btn:hover {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .wp-featured-inner { grid-template-columns: 1fr; }
          .wp-featured-right { border-left: none; border-top: 1px solid var(--border); padding-left: 0; padding-top: 24px; }
          .wp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .wp-portal-row, .wp-portal-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
          .wp-featured-inner { padding: 24px; }
        }
      `}</style>
    </>
  );
}
