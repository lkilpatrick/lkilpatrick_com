import Image from "next/image";

type CaseStudy = {
  id: number;
  slug: string;
  tag: string;
  tagColor: string;
  company: string;
  title: string;
  subtitle: string;
  status: string;
  year: string;
  role: string;
  screenshot: string | null;
  screenshotAlt: string | null;
  statHighlights: string[] | null;
  sections: { label: string; body: string }[];
  stack: string[];
  link: string | null;
  outcome: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    slug: "tech-challenge-kenya",
    tag: "Flutter App",
    tagColor: "purple",
    company: "Personal / Nonprofit",
    title: "Tech Challenge Kenya Admin Dashboard",
    subtitle: "A production-grade platform managing Kenya's national STEM competition at scale.",
    status: "Production",
    year: "2024",
    role: "Solo Builder",
    screenshot: null,
    screenshotAlt: null,
    statHighlights: ["15 modules", "Multi-role RBAC", "National scale", "Zero to production"],
    sections: [
      {
        label: "The Problem",
        body: "Kenya's national Tech Challenge competition was managing thousands of students, schools, teams, and judges across a fragmented mix of spreadsheets, email, and manual processes. There was no central system, no audit trail, no real-time data, and no way to coordinate the full lifecycle of a national competition.",
      },
      {
        label: "What I Built",
        body: "A full-stack admin platform in Flutter Web backed by Supabase. 15 modules covering the entire competition lifecycle: user auth and RBAC, school and team registration, judge assignment, scoring workflows, survey collection, communications, document management, audit logging, and real-time reporting dashboards.",
      },
      {
        label: "Technical Decisions",
        body: "Flutter Web for a single codebase across web and future mobile. Riverpod for state management. Supabase for auth, database, storage, and real-time subscriptions. RBAC enforced at both UI and database row-level security layers. Audit logs are append-only. Five distinct roles: student, teacher, school admin, judge, national admin.",
      },
      {
        label: "Why It Matters",
        body: "This is what senior builder capability looks like. Complex domain, multiple stakeholder roles, real data at national scale, zero tolerance for errors in a competition context. It was not a proof of concept — it ran the actual competition.",
      },
    ],
    stack: ["Flutter Web", "Supabase", "Riverpod", "PostgreSQL", "RBAC", "Row-Level Security", "Real-time", "15 modules"],
    link: null,
    outcome: "Served thousands of students, schools, teams, and judges across the national competition.",
  },
  {
    id: 2,
    slug: "mpyc-raceday",
    tag: "Flutter + Firebase",
    tagColor: "teal",
    company: "MPYC / Personal",
    title: "MPYC RaceSheet",
    subtitle: "Full-stack race management platform: mobile app + web dashboard for the Monterey Peninsula Yacht Club.",
    status: "Production",
    year: "2025–present",
    role: "Solo Builder",
    screenshot: null,
    screenshotAlt: null,
    statHighlights: ["4 mobile modes", "5 user roles", "57 courses", "11+ weather stations", "25+ Firestore collections", "4 Cloud Functions"],
    sections: [
      {
        label: "The Problem",
        body: "MPYC was running race day on clipboards, paper sign-ins, VHF radio, and post-race spreadsheets. No mobile tool existed for community clubs that handled all roles simultaneously — race committee on the water, skippers at the helm, crew on the rail, and spectators on the dock. Commercial solutions are built for professional regattas, not volunteer-run weekend sailing.",
      },
      {
        label: "What I Built",
        body: "A single Flutter codebase running on Android, iOS, and web. Four mobile modes with fully isolated navigation: Race Committee (6-step guided race flow, start sequence with horn detection, finish recording, GPS tracking, fleet broadcast), Skipper (check-in, race timer synced to RC, GPS tracking, protest filing, results), Crew (race timer, incident reporting, minimal UI), and Onshore/Spectator (live leaderboard, boat positions on map, weather). Plus a full web dashboard with 11+ management pages: season calendar, crew assignment, course builder (57 courses, 13 marks), fleet management, checklists, incidents and protests, maintenance tracking, weather analytics, and Clubspot member sync.",
      },
      {
        label: "Technical Decisions",
        body: "Flutter 3.x with Riverpod 3.x state management and GoRouter for mode-aware shell navigation. Firebase backend: Firestore with 25+ collections, Cloud Functions (weather fetch every 60 seconds from 11 stations, Clubspot daily sync, SMS/email/push notifications via FCM), and Storage. Multi-source weather from NOAA, CO-OPS, Weather Underground, and AmbientWeather with automatic fallback if primary goes stale. Clubspot API integration for member sync and score push. GPS race tracking with 5m distance filter publishing to Firestore every 5 seconds.",
      },
      {
        label: "Why It Matters",
        body: "This is a real production system used by a real community every racing weekend on Monterey Bay. One developer, one codebase, covering a domain that commercial vendors charge thousands per year for. The architecture — multi-role, real-time, offline-tolerant, multi-source data — is the same complexity class as a professional SaaS product.",
      },
    ],
    stack: ["Flutter 3.x", "Firebase / Firestore", "Riverpod 3.x", "GoRouter", "Cloud Functions", "FCM push", "NOAA / WU / Ambient weather", "Clubspot API", "GPS tracking", "Android + iOS + Web"],
    link: "https://github.com/lkilpatrick/mpyc-raceday",
    outcome: "In active use every racing weekend at MPYC. 57 courses, 4 boat classes, 5 roles, real-time across all devices.",
  },
  {
    id: 3,
    slug: "boat-daily-check",
    tag: "AI + Automation",
    tagColor: "teal",
    company: "Personal",
    title: "Boat Daily Check",
    subtitle: "AI-assisted monitoring agent for overnight boat status reporting.",
    status: "Running",
    year: "2024",
    role: "Solo Builder",
    screenshot: "/screenshots/content-ai-agent-boats.jpg",
    screenshotAlt: "Boat Daily Check AI monitoring agent write-up on Pitter Patter Diving",
    statHighlights: null,
    sections: [
      {
        label: "The Problem",
        body: "Two boats on the water in Monterey Bay need regular overnight monitoring — bilge pumps, battery levels, solar charging, shore power. Checking manually every morning is tedious. Commercial solutions require expensive hardware and subscriptions.",
      },
      {
        label: "What I Built",
        body: "A Python agent on a cron schedule that queries the Victron VRM API for live data from both boats — battery state, solar yield, grid status, alarms — formats the results into a readable daily digest, and sends it via email every morning. Also published an open-source reference for the Victron VRM API, which had no official documentation.",
      },
      {
        label: "The Interesting Part",
        body: "The Victron VRM API was undocumented. I reverse-engineered it by inspecting the VRM web app's network traffic, wrote my own reference documentation, and open-sourced the project. The reference has since been picked up by other Victron users in the community.",
      },
      {
        label: "Why It Matters",
        body: "Applied AI that runs without intervention. Not a demo, not a prototype, not a wrapper. A real automation solving a real operational problem, in production every day.",
      },
    ],
    stack: ["Python", "Victron VRM API", "Cron automation", "Email delivery", "Open source", "API reverse engineering"],
    link: "https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/",
    outcome: "Runs every morning without intervention. Open-source API reference adopted by the Victron community.",
  },
  {
    id: 4,
    slug: "mia-kingtide",
    tag: "IP Ecosystem",
    tagColor: "orange",
    company: "Personal",
    title: "Mia Kingtide",
    subtitle: "Original IP across books, games, audiobooks, and ocean education.",
    status: "Live",
    year: "2021–present",
    role: "Author, Builder, Publisher",
    screenshot: "/screenshots/builder-mia-kingtide.jpg",
    screenshotAlt: "Mia Kingtide website and book series",
    statHighlights: null,
    sections: [
      {
        label: "The Problem",
        body: "Ocean conservation content for kids is either dry science or preachy activism. There was a gap for adventure-first storytelling that carries a conservation message without making it the point — IP that could work across formats and prove conservation content can be commercially viable.",
      },
      {
        label: "What I Built",
        body: "4 books in the Mia Kingtide Ocean Adventures series, self-published and distributed through major retail channels. Audiobook versions on Spotify and INaudio. The OceanMatch browser game extending the universe interactively. A YouTube channel with read-aloud videos. 1,300+ copies sold across formats.",
      },
      {
        label: "Content Systems",
        body: "Each format serves a different acquisition channel: books for direct sales and gift-giving, audiobooks for passive consumption, games for interactive engagement, YouTube for discoverability. The Pitter Patter Diving brand acts as the top-of-funnel for the whole ecosystem.",
      },
      {
        label: "Why It Matters",
        body: "Content systems, brand building, and creative execution at scale. Building an audience from zero and converting across formats is the same skill set as building a developer community — just applied to a different domain.",
      },
    ],
    stack: ["4 published books", "Audiobooks (Spotify, INaudio)", "Browser game", "YouTube", "Self-publishing", "Retail distribution"],
    link: "https://miakingtide.com/",
    outcome: "1,300+ copies sold. Audiobooks on major streaming platforms. Active audience across formats.",
  },
  {
    id: 5,
    slug: "pitter-patter-diving",
    tag: "Media Platform",
    tagColor: "green",
    company: "Personal",
    title: "Pitter Patter Diving",
    subtitle: "Ocean media brand, tourism business, and content platform on Monterey Bay.",
    status: "Active",
    year: "2022–present",
    role: "Founder, Builder",
    screenshot: "/screenshots/builder-pitterpatter-blog.jpg",
    screenshotAlt: "Pitter Patter Diving blog and media platform",
    statHighlights: null,
    sections: [
      {
        label: "The Problem",
        body: "The Monterey Peninsula is one of the most biologically rich diving destinations on Earth but has almost no modern content covering it. Most online dive content for the area is outdated and uninspiring. A clear gap existed for authentic, high-quality content about diving, ocean conditions, and marine life.",
      },
      {
        label: "What I Built",
        body: "A full media and commerce platform: a dive blog covering conditions, marine life, and trip reports; a YouTube channel; a TikTok channel grown to 10,000 followers in a single summer; a dive tourism booking business; and an AI monitoring agent for the boats. All built from zero audience.",
      },
      {
        label: "The Growth Story",
        body: "10K TikTok followers in one summer is a content strategy executed consistently. Short-form video, marine life identification, underwater footage, and local conditions created a niche audience with genuine interest. That audience converts across the ecosystem: blog readers, book buyers, tour customers.",
      },
      {
        label: "Why It Matters",
        body: "Audience building from scratch, content-market fit found and validated in the wild. The skills that grow a niche content brand are identical to those that grow a developer ecosystem: understand your audience, produce content they want, show up consistently, measure what works.",
      },
    ],
    stack: ["TikTok (10K)", "YouTube", "Blog (SEO)", "Tourism booking", "AI boat monitoring", "Audience funnel"],
    link: "https://pitterpatterdiving.com/",
    outcome: "10K TikTok followers built in one summer. Active tourism business. Cross-platform content ecosystem.",
  },
];

const TAG_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  purple: { color: "var(--purple)", bg: "var(--purple-glow)", border: "rgba(107,79,187,0.2)" },
  teal:   { color: "var(--teal)",   bg: "var(--teal-glow)",   border: "rgba(11,158,138,0.2)" },
  blue:   { color: "var(--accent)", bg: "var(--accent-glow)", border: "rgba(14,127,192,0.2)" },
  orange: { color: "var(--orange)", bg: "var(--orange-glow)", border: "rgba(196,126,42,0.2)" },
  green:  { color: "var(--green)",  bg: "var(--green-glow)",  border: "rgba(30,138,76,0.2)" },
};

export default function ProjectsCaseStudies() {
  return (
    <>
      {/* Page header */}
      <section className="cs-hero section-body">
        <div className="content-wrap">
          <div className="cs-eyebrow">Projects &amp; Case Studies</div>
          <h1 className="cs-hero-title">Systems I have built.</h1>
          <p className="cs-hero-sub">
            Each entry covers the problem, what was built, the decisions behind it, and why it matters.
            Developer platform and documentation work lives on the{" "}
            <a href="/docs" className="cs-hero-link">Docs &amp; Portals</a> page.
          </p>
          <div className="cs-hero-meta">
            <span className="cs-hero-meta-item">{CASE_STUDIES.length} systems documented</span>
            <span className="cs-hero-meta-sep">·</span>
            <span className="cs-hero-meta-item">2021 to present</span>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="cs-body section-body">
        <div className="content-wrap--wide">
          <div className="cs-list">
            {CASE_STUDIES.map((cs, idx) => {
              const tag = TAG_COLORS[cs.tagColor] ?? TAG_COLORS.blue;
              return (
                <article key={cs.id} className="cs-card" id={cs.slug}>
                  {/* Card header */}
                  <div className="cs-card-header">
                    <div className="cs-card-header-left">
                      <span className="cs-tag" style={{ color: tag.color, background: tag.bg, border: `1px solid ${tag.border}` }}>
                        {cs.tag}
                      </span>
                      <div className="cs-card-meta">
                        <span>{cs.company}</span>
                        <span className="cs-card-meta-sep">·</span>
                        <span>{cs.year}</span>
                        <span className="cs-card-meta-sep">·</span>
                        <span>{cs.role}</span>
                      </div>
                    </div>
                    <div className="cs-card-header-right">
                      <span className="cs-status">{cs.status}</span>
                      <span className="cs-index">0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="cs-card-title">
                    {cs.link ? (
                      <a href={cs.link} target="_blank" rel="noopener noreferrer" className="cs-card-title-link">
                        {cs.title}
                        <svg className="cs-ext-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </a>
                    ) : cs.title}
                  </h2>
                  <p className="cs-card-subtitle">{cs.subtitle}</p>

                  {/* Screenshot or stat highlights */}
                  {cs.screenshot ? (
                    <div className="cs-screenshot-wrap">
                      {cs.link ? (
                        <a href={cs.link} target="_blank" rel="noopener noreferrer">
                          <Image
                            src={cs.screenshot}
                            alt={cs.screenshotAlt ?? cs.title}
                            width={1200}
                            height={630}
                            className="cs-screenshot"
                            style={{ width: "100%", height: "auto", display: "block" }}
                          />
                        </a>
                      ) : (
                        <Image
                          src={cs.screenshot}
                          alt={cs.screenshotAlt ?? cs.title}
                          width={1200}
                          height={630}
                          className="cs-screenshot"
                          style={{ width: "100%", height: "auto", display: "block" }}
                        />
                      )}
                    </div>
                  ) : cs.statHighlights ? (
                    <div className="cs-stat-strip">
                      {cs.statHighlights.map(s => (
                        <div key={s} className="cs-stat-item">{s}</div>
                      ))}
                    </div>
                  ) : null}

                  {/* Sections */}
                  <div className="cs-sections">
                    {cs.sections.map(section => (
                      <div key={section.label} className="cs-section">
                        <div className="cs-section-label">{section.label}</div>
                        <p className="cs-section-body">{section.body}</p>
                      </div>
                    ))}
                  </div>

                  {/* Footer: stack + outcome */}
                  <div className="cs-card-footer">
                    <div className="cs-stack-wrap">
                      <div className="cs-footer-label">Stack &amp; Scope</div>
                      <div className="cs-stack">
                        {cs.stack.map(s => (
                          <span key={s} className="cs-stack-item">{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cs-outcome">
                      <div className="cs-footer-label">Outcome</div>
                      <div className="cs-outcome-text">{cs.outcome}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="cs-see-also">
            <p>Developer platform and documentation work at Nutanix, LinearB, and Harness lives on the</p>
            <a href="/docs" className="cs-see-also-link">Docs &amp; Portals page &rarr;</a>
          </div>
        </div>
      </section>

      <style>{`
        .cs-hero {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .cs-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .cs-hero-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          color: var(--heading);
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .cs-hero-sub {
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 620px;
          margin-bottom: 28px;
        }
        .cs-hero-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid rgba(14,127,192,0.3);
          transition: border-color 0.2s;
        }
        .cs-hero-link:hover { border-bottom-color: var(--accent); }
        .cs-hero-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
        }
        .cs-hero-meta-sep { opacity: 0.4; }

        .cs-body { background: var(--bg-subtle); }
        .cs-list { display: flex; flex-direction: column; gap: 28px; }

        .cs-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 40px;
          box-shadow: var(--shadow-card);
          transition: box-shadow 0.25s ease;
        }
        .cs-card:hover { box-shadow: var(--shadow-card-hover); }

        .cs-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
          gap: 16px;
          flex-wrap: wrap;
        }
        .cs-card-header-left { display: flex; flex-direction: column; gap: 8px; }
        .cs-card-header-right { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }

        .cs-tag {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 600;
          width: fit-content;
        }
        .cs-card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          flex-wrap: wrap;
        }
        .cs-card-meta-sep { opacity: 0.4; }
        .cs-status {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--green);
          background: var(--green-glow);
          border: 1px solid rgba(30,138,76,0.2);
          padding: 3px 10px;
          border-radius: 20px;
        }
        .cs-index {
          font-family: var(--font-mono), monospace;
          font-size: 13px;
          color: var(--text-dim);
          opacity: 0.4;
          font-weight: 700;
        }

        .cs-card-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(22px, 2.5vw, 34px);
          font-weight: 400;
          color: var(--heading);
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin-bottom: 6px;
        }
        .cs-card-title-link {
          color: var(--heading);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
        }
        .cs-card-title-link:hover { color: var(--accent); }
        .cs-ext-icon { flex-shrink: 0; opacity: 0.5; margin-top: 2px; }
        .cs-card-subtitle {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-dim);
          margin-bottom: 28px;
        }

        /* Screenshot */
        .cs-screenshot-wrap {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          margin-bottom: 32px;
          background: var(--bg-card);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .cs-screenshot-wrap:has(a):hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        .cs-screenshot { display: block; width: 100%; height: auto; }

        /* Stat strip (no screenshot) */
        .cs-stat-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
          padding: 20px 24px;
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          border-radius: 10px;
        }
        .cs-stat-item {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          background: var(--accent-glow);
          border: 1px solid rgba(14,127,192,0.2);
          padding: 5px 14px;
          border-radius: 20px;
          letter-spacing: 0.3px;
        }

        /* Sections */
        .cs-sections {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px 40px;
          margin-bottom: 32px;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border);
        }
        .cs-section-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .cs-section-body {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.8;
        }

        /* Footer */
        .cs-card-footer {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        .cs-footer-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 12px;
        }
        .cs-stack { display: flex; flex-wrap: wrap; gap: 6px; }
        .cs-stack-item {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-dim);
          background: var(--bg-subtle);
          border: 1px solid var(--border);
          padding: 4px 10px;
          border-radius: 5px;
        }
        .cs-outcome-text {
          font-size: 14px;
          font-weight: 600;
          color: var(--heading);
          line-height: 1.6;
        }

        /* See also */
        .cs-see-also {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 48px;
          padding: 24px 28px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          flex-wrap: wrap;
        }
        .cs-see-also p {
          font-size: 14px;
          color: var(--text-muted);
        }
        .cs-see-also-link {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid rgba(14,127,192,0.3);
          padding-bottom: 1px;
          white-space: nowrap;
          transition: border-color 0.2s;
        }
        .cs-see-also-link:hover { border-bottom-color: var(--accent); }

        @media (max-width: 860px) {
          .cs-card { padding: 28px 20px; }
          .cs-sections { grid-template-columns: 1fr; gap: 20px; }
          .cs-card-footer { grid-template-columns: 1fr; gap: 24px; }
        }
        @media (max-width: 540px) {
          .cs-card { padding: 20px 16px; }
          .cs-stat-strip { padding: 16px; }
        }
      `}</style>
    </>
  );
}
