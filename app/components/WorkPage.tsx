"use client";

import Image from "next/image";
import { aiCoursework, aiLeadership, onboardingDocs } from "../data/portfolio";

// ─── Projects Section ────────────────────────────────────────────────────────

type StatusType = "production" | "development";

type Project = {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  context: string;
  what: string;
  built: string;
  matters: string;
  stack: string[];
  link: string | null;
  featured?: boolean;
  status: StatusType;
  screenshot?: string;
  roadmap?: {
    architecture?: string;
    evaluationMetrics?: string;
    retrieval?: string;
    documentIngestion?: string;
    auditLogging?: string;
    deployment?: string;
    productization?: string;
  };
};

const PROJECTS: Project[] = [
  {
    id: 2,
    tag: "Flutter App",
    tagColor: "purple",
    title: "Tech Challenge Kenya",
    subtitle: "National STEM Competition Platform",
    context: "The Tech Interactive · 2023–present · Lead Developer",
    what: "Full-stack platform built for Kenya's national STEM competition — students, schools, teams, and judges across the entire country. Built for The Tech Interactive.",
    built: "15 modules in Flutter Web + Supabase: multi-role auth with RBAC, row-level security, audit logs, survey engine, team management, live scoring, bulk communications, and national reporting. Zero to production-grade, single developer.",
    matters: "Complex domain. National scale. Real stakes. 15 modules, 5 RBAC roles, row-level security, append-only audit logging — production-grade architecture built by a single developer.",
    stack: ["Flutter Web", "Supabase", "Riverpod", "PostgreSQL RLS", "Multi-role RBAC", "15 modules"],
    link: null,
    featured: true,
    status: "development",
  },
  {
    id: 4,
    tag: "Full-Stack SaaS",
    tagColor: "teal",
    title: "OpenSTR",
    subtitle: "Short-Term Rental Operations Platform",
    context: "Personal · 2024–present · Solo Builder",
    what: "Full-stack platform that handles the real operational workflow between checkout and guest-ready. Scheduling, checklists, photo verification, and cleaner coordination across properties — built from the problems I ran into operating my own Airbnb.",
    built: "TypeScript and Express API, React admin panel, Flutter mobile app, PostgreSQL. Marketing site on Firebase. Core platform designed to run locally on a home server for full data control and security. Includes a MkDocs-based developer portal with API reference and self-hosting guides.",
    matters: "Running on a real property, solving a real operational gap. Full-stack depth across web, mobile, backend, and docs — built from a problem I actually had.",
    stack: ["TypeScript", "Express", "React", "Flutter", "PostgreSQL", "Firebase", "MkDocs", "Self-hosted"],
    link: "https://openstr.dev",
    featured: true,
    status: "production",
  },
  {
    id: 1,
    tag: "AI + Data Engineering",
    tagColor: "green",
    title: "Monterey Bay Morning Report",
    subtitle: "Daily Ocean Intelligence System",
    context: "Personal · 2024–present · Solo Builder",
    what: "A daily intelligence email aggregating live data from 8+ sources across Monterey Bay — tides, surf conditions, NOAA buoys, weather forecasts, fishing regulations, marine species, and boat telemetry — delivered every morning before sunrise.",
    built: "Modular Python system on the OpenClaw agent framework, orchestrated by cron. Each data source is independently testable and deployable. Sources include NOAA, NDBC, NWS, Surfline, Victron VRM, iNaturalist, CDFW regulations, and an AI-generated fishing brief using 250+ GPS waypoints.",
    matters: "A real data engineering system running in production every day. Integrates 8+ live sources — several undocumented or non-standard — into one useful product.",
    stack: ["Python", "OpenClaw", "Cron", "NOAA APIs", "NDBC Buoys", "Victron VRM", "iNaturalist", "GPX Parsing", "Email Delivery"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    featured: true,
    status: "production",
  },
  {
    id: 3,
    tag: "Race Management",
    tagColor: "teal",
    title: "MPYC RaceDay",
    subtitle: "Real-Time Sailing Race Platform",
    context: "Monterey Peninsula Yacht Club · 2023–present · Solo Builder",
    what: "Real-time race management platform for MPYC — 5 user roles, 57 courses, live weather from 11 stations, GPS tracking, and automated scoring published to Clubspot.",
    built: "Flutter + Firebase: 25+ Firestore collections, Cloud Functions fetching weather every 60 seconds, FCM push notifications, GPS race tracking, Clubspot API sync. Android, iOS, and Web from a single codebase.",
    matters: "One developer. SaaS-class complexity. Built for a real club solving a real problem because commercial tools cost thousands per year and still did not do what we needed.",
    stack: ["Flutter 3.x", "Firebase", "Cloud Functions", "GPS tracking", "11 weather stations", "Clubspot API"],
    link: null,
    status: "development",
  },
  {
    id: 5,
    tag: "Civic AI",
    tagColor: "orange",
    title: "SANDI",
    subtitle: "AI-Assisted Municipal Planning",
    context: "Independent Prototype · In Development",
    what: "An AI-assisted planning submission system designed for resource-constrained municipalities. SANDI evaluates submission completeness against jurisdiction-specific source material, provides source-linked feedback, and preserves professional planning judgment for discretionary decisions.",
    built: "Product concept · Architecture · AI engineering · Full-stack development. The implementation is in development; architecture, evaluation, retrieval, ingestion, audit logging, and deployment details will be added as they are validated.",
    matters: "Independently developed. Not a City of Sand City system or City-sponsored project.",
    stack: ["AI-assisted review", "Source-linked retrieval", "Document ingestion", "Auditability", "Human judgment"],
    link: null,
    status: "development",
    roadmap: {},
  },
];

// ─── Docs Section ─────────────────────────────────────────────────────────────

const PORTAL_SCREENSHOTS: Record<string, string> = {
  "Sanctuary Cruises":               "/screenshots/work-sanctuary-cruises.jpg",
  "Mise & Co.":                      "/screenshots/work-mise-and-co.jpg",
  "Nutanix.dev — Developer Portal":  "/screenshots/nutanix-dev.jpg",
  "gitStream Documentation Portal":  "/screenshots/gitstream-docs.jpg",
  "Harness CI Release Notes":        "/screenshots/harness-ci.jpg",
  "OpenSTR":                         "/screenshots/openstr.jpg",
  "Pitter Patter Diving":            "/screenshots/builder-pitterpatter-blog.jpg",
};

const TAG_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  purple: { color: "var(--color-primary)",       bg: "rgba(12,74,110,0.07)",    border: "rgba(12,74,110,0.2)" },
  teal:   { color: "var(--color-primary-light)", bg: "rgba(3,105,161,0.07)",    border: "rgba(3,105,161,0.2)" },
  blue:   { color: "var(--color-primary-light)", bg: "rgba(3,105,161,0.07)",    border: "rgba(3,105,161,0.2)" },
  orange: { color: "var(--color-accent)",        bg: "rgba(217,119,6,0.08)",    border: "rgba(217,119,6,0.2)" },
  green:  { color: "var(--color-success)",       bg: "rgba(5,150,105,0.08)",    border: "rgba(5,150,105,0.2)" },
};

function StatusBadge({ status }: { status: StatusType }) {
  if (status === "production") {
    return <span className="wp-status-badge wp-status-production">● In Production</span>;
  }
  return <span className="wp-status-badge wp-status-development">○ In Development</span>;
}

function ProjectCard({ project, isFeatured }: { project: Project; isFeatured: boolean }) {
  const tc = TAG_COLORS[project.tagColor] ?? TAG_COLORS.blue;

  if (isFeatured) {
    const hasScreenshot = project.screenshot;
    return (
      <div className="wp-featured">
        <div className={`wp-featured-inner${hasScreenshot ? " wp-featured-inner--with-screenshot" : ""}`}>
          <div className="wp-featured-left">
            <div className="wp-featured-toprow">
              <span className="wp-tag" style={{ color: tc.color, background: tc.bg, border: `1px solid ${tc.border}` }}>
                {project.tag}
              </span>
              <StatusBadge status={project.status} />
            </div>
            <h3 className="wp-featured-title">{project.title}</h3>
            <div className="wp-featured-sub">{project.subtitle}</div>
            <div className="wp-featured-context">{project.context}</div>
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
            {hasScreenshot ? (
              <div className="wp-featured-screenshot">
                <Image
                  src={project.screenshot!}
                  alt={`Screenshot of ${project.title}`}
                  width={400}
                  height={250}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px" }}
                />
                <div className="wp-stack-label" style={{ marginTop: "20px" }}>Stack &amp; Scope</div>
                <div className="wp-stack">
                  {project.stack.map(s => <span key={s} className="wp-chip">{s}</span>)}
                </div>
              </div>
            ) : (
              <>
                <div className="wp-stack-label">Stack &amp; Scope</div>
                <div className="wp-stack">
                  {project.stack.map(s => <span key={s} className="wp-chip">{s}</span>)}
                </div>
              </>
            )}
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
        <StatusBadge status={project.status} />
      </div>
      <h3 className="wp-card-title">{project.title}</h3>
      <div className="wp-card-sub">{project.subtitle}</div>
      <div className="wp-card-context">{project.context}</div>
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
  item: { label: string; title: string; link: string; org: string; description: string; primaryLinkText?: string; extraLink?: { text: string; href: string }; secondaryLink?: { text: string; href: string } };
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
        <div className="wp-portal-ctas">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="wp-portal-btn">
            {item.primaryLinkText ?? "View Site"} →
          </a>
          {item.secondaryLink && (
            <a href={item.secondaryLink.href} target="_blank" rel="noopener noreferrer" className="wp-portal-btn wp-portal-btn--secondary">
              {item.secondaryLink.text} →
            </a>
          )}
        </div>
        {item.extraLink && (
          <a href={item.extraLink.href} target="_blank" rel="noopener noreferrer" className="wp-portal-extra">
            {item.extraLink.text} →
          </a>
        )}
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
      <section className="section-body" id="projects">
        <div className="content-wrap--wide">
          <div className="wp-page-header">
            <div className="wp-hero-eyebrow">Work</div>
            <h1 className="wp-hero-title">I still build.</h1>
          </div>
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Production Systems &amp; Applied AI</div>
            <h2 className="wp-section-title">Build → architecture → product → adoption.</h2>
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

      <section className="section-body section-alt" id="ai-cto-coursework">
        <div className="content-wrap">
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Executive AI Leadership</div>
            <h2 className="wp-section-title">University of Waterloo AI-CTO coursework.</h2>
            <p className="wp-section-intro">
              {aiLeadership.description} These selected course artifacts show the analysis behind the credential: architecture choices, governance, financial discipline, operating models, and production scaling.
            </p>
          </div>
          <div className="wp-coursework-grid">
            {aiCoursework.map(item => (
              <a key={item.file} href={item.file} download={item.download} className="wp-coursework-card">
                <div className="wp-coursework-icon">PDF</div>
                <div className="wp-coursework-body">
                  <div className="wp-coursework-meta">{item.module} · {item.pages} pages</div>
                  <h3 className="wp-coursework-title">{item.title}</h3>
                  <p className="wp-coursework-desc">{item.description}</p>
                  <span className="wp-coursework-download">Download class work ↓</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-body" id="docs">
        <div className="content-wrap">
          <div className="wp-section-header">
            <div className="wp-section-eyebrow">Developer Platforms &amp; Adoption</div>
            <h2 className="wp-section-title">The systems that let developers self-serve.</h2>
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
        /* ── Page header ── */
        .wp-page-header {
          margin-bottom: 48px;
        }
        .wp-hero-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .wp-hero-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.12;
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
          color: var(--color-primary);
          margin-bottom: 12px;
        }
        .wp-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.15;
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
        .wp-status-badge {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          white-space: nowrap;
        }
        .wp-status-production {
          background: #ECFDF5;
          color: var(--color-success);
          border: 1px solid #A7F3D0;
        }
        .wp-status-development {
          background: var(--color-accent-light);
          color: var(--color-accent-hover);
          border: 1px solid #FDE68A;
        }
        .wp-featured {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          margin-bottom: 28px;
          box-shadow: var(--shadow-card);
          position: relative;
          overflow: hidden;
        }
        .wp-featured-toprow {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }
        .wp-featured-inner {
          display: grid;
          grid-template-columns: 1fr 260px;
          gap: 48px;
          padding: 40px 48px 48px;
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
        .wp-featured-context {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }
        .wp-card-context {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--color-text-muted);
          margin-bottom: 12px;
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
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--color-primary-light);
        }
        .wp-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
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
          border-top: 1px solid var(--color-border-light);
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          line-height: 1.5;
        }

        .wp-section-intro {
          max-width: 760px;
          margin-top: 18px;
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.75;
        }
        .wp-coursework-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .wp-coursework-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 26px;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius);
          box-shadow: var(--shadow-card);
          color: inherit;
          text-decoration: none;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .wp-coursework-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-primary-light);
          box-shadow: var(--shadow-card-hover);
        }
        .wp-coursework-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 8px;
          background: rgba(12,74,110,0.07);
          border: 1px solid rgba(12,74,110,0.2);
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 700;
        }
        .wp-coursework-body { min-width: 0; }
        .wp-coursework-meta {
          margin-bottom: 7px;
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .wp-coursework-title {
          margin-bottom: 10px;
          color: var(--heading);
          font-family: var(--font-serif), Georgia, serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.3;
        }
        .wp-coursework-desc {
          margin-bottom: 16px;
          color: var(--text-muted);
          font-size: 13px;
          line-height: 1.65;
        }
        .wp-coursework-download {
          color: var(--color-primary);
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          font-weight: 600;
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
          color: var(--color-primary);
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
          color: var(--color-primary-light);
          border-bottom: 1px solid var(--color-primary-light);
          padding-bottom: 1px;
          display: block;
          margin-bottom: 16px;
        }
        .wp-portal-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
          margin-bottom: 12px;
        }
        .wp-portal-btn {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          padding: 8px 16px;
          border: 1.5px solid var(--color-primary);
          border-radius: 6px;
          display: inline-block;
          text-decoration: none;
          transition: all 0.2s;
        }
        .wp-portal-btn:hover {
          background: var(--color-primary);
          color: #fff;
          border-color: var(--color-primary);
        }
        .wp-portal-btn--secondary {
          color: var(--color-success);
          border-color: var(--color-success);
        }
        .wp-portal-btn--secondary:hover {
          background: var(--color-success);
          color: #fff;
          border-color: var(--color-success);
        }

        /* ── Featured screenshot ── */
        .wp-featured-inner--with-screenshot {
          grid-template-columns: 1fr 400px;
        }
        .wp-featured-screenshot {
          display: flex;
          flex-direction: column;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .wp-coursework-grid { grid-template-columns: 1fr; }
          .wp-featured-inner { grid-template-columns: 1fr; }
          .wp-featured-inner--with-screenshot { grid-template-columns: 1fr; }
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
          .wp-featured-inner--with-screenshot { padding: 24px; }
        }
      `}</style>
    </>
  );
}
