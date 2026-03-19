"use client";

import { useEffect } from "react";
import { socialAccounts } from "../data/portfolio";

const PLATFORM_ICONS: Record<string, string> = {
  YouTube:   "▶",
  TikTok:    "♪",
  Instagram: "◈",
  LinkedIn:  "in",
  GitHub:    "</>",
};

const PLATFORM_COLORS: Record<string, string> = {
  YouTube:   "#FF0000",
  TikTok:    "#69C9D0",
  Instagram: "#E1306C",
  LinkedIn:  "#0A66C2",
  GitHub:    "#333",
};

function TikTokEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // @ts-expect-error tiktok embed script
      if (window.tiktok) window.tiktok.reload?.();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@pitterpatterdiving"
        data-unique-id="pitterpatterdiving"
        data-embed-type="creator"
        style={{ maxWidth: 780, minWidth: 288, width: "100%" }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@pitterpatterdiving?refer=creator_embed">
            @pitterpatterdiving
          </a>
        </section>
      </blockquote>
    </div>
  );
}

function SocialCard({ account }: { account: typeof socialAccounts[0] }) {
  const color = PLATFORM_COLORS[account.platform] ?? "var(--accent)";
  const icon  = PLATFORM_ICONS[account.platform] ?? "→";
  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="about-social-card"
      style={{ "--platform-color": color } as React.CSSProperties}
    >
      <div className="about-spc-icon" style={{ background: color }}>{icon}</div>
      <div className="about-spc-body">
        <div className="about-spc-platform">{account.platform}</div>
        <div className="about-spc-handle">{account.handle}</div>
        <div className="about-spc-desc">{account.description}</div>
      </div>
      <div className="about-spc-arrow">→</div>
    </a>
  );
}

export default function AboutPage() {
  const githubAccount = {
    id: 99,
    platform: "GitHub",
    handle: "lkilpatrick",
    url: "https://github.com/lkilpatrick",
    description: "Open-source projects, Victron VRM API reference, Flutter apps, and AI agent code.",
    embedType: "linkedin" as const,
  };
  const allAccounts = [...socialAccounts, githubAccount];

  return (
    <>
      {/* ── Section 1: Personal Story ── */}
      <section className="about-hero section-body">
        <div className="about-hero-inner content-wrap">
          <div className="about-hero-text">
            <div className="about-eyebrow">About</div>
            <h1 className="about-title">Ocean first. Builder always.</h1>
            <p className="about-desc">
              I live in Sand City on the Monterey Peninsula — one of the most biologically rich
              coastlines on Earth, twenty minutes from the Monterey Bay Aquarium, steps from the
              coastal trail, and a short drive from the best cold-water diving in California.
              The ocean shapes how I think: systems, patience, depth, and the discipline to go
              back again even when conditions are rough.
            </p>
            <p className="about-desc">
              I am a <strong style={{ color: "var(--heading)" }}>PADI Divemaster</strong> — the
              first professional level in diving — and I dive Monterey Bay regularly. I own two
              boats: <em>Pitter Patter</em>, a Shamrock 260 express cruiser, and <em>Pegasus</em>,
              a CHB 34 motor cruiser. I race at MPYC on Wednesday evenings and weekends. I built
              the race management platform because the tools that existed were not good enough.
            </p>
            <p className="about-desc">
              The same instinct — see a problem, build the solution — runs through everything here.
              Developer portals, monitoring agents, race systems, book series. If something is worth
              doing, it is worth building properly.
            </p>
            <div className="about-stat-row">
              <div className="about-stat">
                <div className="about-stat-value">PADI</div>
                <div className="about-stat-label">Divemaster</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">2</div>
                <div className="about-stat-label">Boats</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">15+</div>
                <div className="about-stat-label">Years Building</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">Sand City</div>
                <div className="about-stat-label">Monterey Peninsula</div>
              </div>
            </div>
          </div>

          <div className="about-hero-cards">
            <div className="about-card about-card--ocean">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c2-4 6-4 8 0s6 4 8 0"/>
                  <path d="M2 18c2-4 6-4 8 0s6 4 8 0"/>
                  <path d="M2 6c2-4 6-4 8 0s6 4 8 0"/>
                </svg>
              </div>
              <div className="about-card-title">PADI Divemaster</div>
              <div className="about-card-sub">Cold-water diving on Monterey Bay</div>
            </div>
            <div className="about-card about-card--sailing">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 19h20L12 2z"/><path d="M12 2v17"/>
                </svg>
              </div>
              <div className="about-card-title">MPYC Racing</div>
              <div className="about-card-sub">Monterey Peninsula Yacht Club</div>
            </div>
            <div className="about-card about-card--books">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <div className="about-card-title">4 Books Published</div>
              <div className="about-card-sub">Mia Kingtide Ocean Adventures</div>
            </div>
            <div className="about-card about-card--ai">
              <div className="about-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div className="about-card-title">AI Builder</div>
              <div className="about-card-sub">Agents, automation, real systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Mia Kingtide ── */}
      <section className="about-mia section-body section-alt" id="mia-kingtide">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Books &amp; IP</div>
          <h2 className="about-section-title">Mia Kingtide Ocean Adventures</h2>
          <p className="about-section-intro">
            An original children&apos;s conservation IP built from zero — reviewed by scientists at three of the
            world&apos;s leading marine research institutions, sailed aboard the restored Western Flyer to the Sea
            of Cortez, and featured in Monterey County NOW.
          </p>

          <div className="about-mia-grid">
            <div className="about-mia-text">
              <p className="about-desc">
                The Mia Kingtide series tackles climate change, overfishing, and habitat destruction
                through adventure-first storytelling with a deliberately hopeful framing. Scientists
                at <strong>MBARI</strong>, <strong>Hopkins Marine Station</strong>, and{" "}
                <strong>Moss Landing Marine Labs</strong> reviewed the books for scientific accuracy.
                That credibility is not decorative — it is what separates this from generic ocean-themed
                kids content.
              </p>
              <p className="about-desc">
                The books sailed aboard the <strong>Western Flyer</strong> — the legendary vessel from
                John Steinbeck and Ed Ricketts&apos; Sea of Cortez expedition — during its restored journey
                back to the Sea of Cortez. Featured in <strong>Monterey County NOW</strong>.
              </p>

              <div className="about-mia-stats">
                <div className="about-mini-stat"><strong>4</strong> books published</div>
                <div className="about-mini-stat"><strong>1,300+</strong> copies sold</div>
                <div className="about-mini-stat"><strong>Spotify &amp; INaudio</strong> audiobooks</div>
                <div className="about-mini-stat"><strong>OceanMatch</strong> browser game</div>
              </div>

              <div className="about-mia-links">
                <a href="https://miakingtide.com/" target="_blank" rel="noopener noreferrer" className="about-pill-primary">
                  miakingtide.com ↗
                </a>
                <a href="https://www.amazon.com/author/lkilpatrick" target="_blank" rel="noopener noreferrer" className="about-pill">
                  Books on Amazon
                </a>
                <a href="https://www.montereycountynow.com/entertainment/literature/first-time-author-crafts-a-series-of-environmental-adventures-for-young-readers/article_74462bff-0388-481b-8ebb-9613d75aa11b.html" target="_blank" rel="noopener noreferrer" className="about-pill">
                  Monterey County NOW
                </a>
              </div>
            </div>

            <div className="about-mia-video">
              <div className="about-video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/GoIaxXyRIlo?rel=0&modestbranding=1"
                  title="Mia Kingtide: The Octopus' Gift — Chapter 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
              <div className="about-video-label">The Octopus&apos; Gift — Read Aloud Chapter 1</div>
              <a href="https://www.youtube.com/@LukeKilpatrick" target="_blank" rel="noopener noreferrer" className="about-pill" style={{ marginTop: 12, display: "inline-block" }}>
                Full YouTube Channel →
              </a>
            </div>
          </div>

          <div className="about-science-bar">
            <div className="about-science-label">Scientifically reviewed by</div>
            <div className="about-science-chips">
              <span className="about-science-chip">MBARI</span>
              <span className="about-science-chip">Hopkins Marine Station</span>
              <span className="about-science-chip">Moss Landing Marine Labs</span>
              <span className="about-science-chip">Western Flyer Foundation</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Pitter Patter Ecosystem ── */}
      <section className="about-ppd section-body" id="pitter-patter">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Pitter Patter Diving</div>
          <h2 className="about-section-title">Pitter Patter Diving Ecosystem</h2>
          <p className="about-section-intro">
            A full media, tourism, and commerce platform built around the thing I care about most.
            Same discipline as building a developer ecosystem: find content-market fit, build the audience,
            convert across channels. Validated in the wild with real revenue and real community.
          </p>

          <div className="about-ppd-grid">
            <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">✍</div>
              <div className="about-ppd-label">Dive Blog &amp; Content</div>
              <div className="about-ppd-desc">pitterpatterdiving.com — technical articles, ocean stories, AI build tutorials, and Monterey Bay guides.</div>
              <div className="about-ppd-link">pitterpatterdiving.com →</div>
            </a>
            <a href="https://www.tiktok.com/@pitterpatterdiving" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">♪</div>
              <div className="about-ppd-label">TikTok — 10K Followers</div>
              <div className="about-ppd-desc">10K followers in a single summer from zero. Proof of rapid audience growth through consistency and content-market fit.</div>
              <div className="about-ppd-link">@pitterpatterdiving →</div>
            </a>
            <a href="https://www.boatsetter.com/boats/vxbfqbx" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">⛵</div>
              <div className="about-ppd-label">Boat Rental</div>
              <div className="about-ppd-desc">Charter and dive tour operator on Monterey Bay. Pitter Patter — a Shamrock 260 express cruiser — listed on Boatsetter for half-day and full-day trips.</div>
              <div className="about-ppd-link">Boatsetter listing →</div>
            </a>
            <a href="https://www.airbnb.com/rooms/2685574" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">🏠</div>
              <div className="about-ppd-label">Ocean View Airbnb</div>
              <div className="about-ppd-desc">5-star guest suite in Sand City — ocean views, hot tub, king bed. Active since 2015. Consistently top-rated on Monterey Peninsula.</div>
              <div className="about-ppd-link">Airbnb listing →</div>
            </a>
            <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">📷</div>
              <div className="about-ppd-label">Underwater Photography</div>
              <div className="about-ppd-desc">Fine art prints from Monterey Bay — nudibranchs, sea otters, kelp forests, and the creatures of the California coast.</div>
              <div className="about-ppd-link">Art store →</div>
            </a>
            <a href="https://pitterpatterdiving.com/i-built-an-ai-agent-that-monitors-my-boats-while-i-sleep-and-you-can-use-it-too/" target="_blank" rel="noopener noreferrer" className="about-ppd-card">
              <div className="about-ppd-icon">🤖</div>
              <div className="about-ppd-label">AI Boat Monitoring Agent</div>
              <div className="about-ppd-desc">Python + Victron VRM API. Queries live telemetry overnight and sends a daily status report. Open-source. See Work page for technical depth.</div>
              <div className="about-ppd-link">Read the build →</div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 4: Community & Civic ── */}
      <section className="about-civic section-body section-alt" id="community">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Community &amp; Civic</div>
          <h2 className="about-section-title">Community &amp; Civic</h2>
          <p className="about-section-intro">
            The peninsula is not just where I live — it is where I show up.
          </p>

          <div className="about-civic-grid">
            <div className="about-civic-card">
              <div className="about-civic-tag">Yacht Club</div>
              <h3 className="about-civic-title">MPYC Racing</h3>
              <p className="about-civic-desc">
                I race at the Monterey Peninsula Yacht Club on Wednesday evenings and weekends. When the
                race management software wasn&apos;t good enough, I built a replacement.
                Flutter + Firebase, 5 roles, 57 courses, live weather from 11 stations, GPS tracking,
                and Clubspot sync. Built for race season.
              </p>
              <a href="/work#projects" className="about-civic-link">See the build on Work →</a>
            </div>
            <div className="about-civic-card">
              <div className="about-civic-tag">Local Government</div>
              <h3 className="about-civic-title">Sand City Council</h3>
              <p className="about-civic-desc">
                Ran for Sand City City Council in 2024. Lost by 3 votes. Endorsed by Monterey County NOW.
                The same instinct that drives building developer communities — show up, do the work, earn
                the trust — applies to civic participation. Running for Mayor in November 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Social Channels ── */}
      <section className="about-social section-body" id="channels">
        <div className="content-wrap">
          <div className="about-section-eyebrow">Section 05</div>
          <h2 className="about-section-title">Social &amp; Channels</h2>
          <p className="about-section-intro">
            Where I build in public — developer content, ocean life, and audience experiments.
          </p>

          <div style={{ display: "grid", gap: 12, marginBottom: 56 }}>
            {allAccounts.map(account => (
              <SocialCard key={account.id} account={account} />
            ))}
          </div>

          <div style={{ marginBottom: 16 }}>
            <div className="about-tiktok-label">★ TikTok Channel — @pitterpatterdiving</div>
            <TikTokEmbed />
          </div>
        </div>
      </section>

      <style>{`
        /* ── Hero ── */
        .about-hero { background: var(--bg); }
        .about-hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .about-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 24px;
        }
        .about-desc {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 18px;
        }
        .about-stat-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--border);
        }
        .about-stat-value {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          color: var(--heading);
          margin-bottom: 4px;
        }
        .about-stat-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* ── Personal cards ── */
        .about-hero-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-self: center;
        }
        .about-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
        }
        .about-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-card-hover); }
        .about-card--ocean:hover { border-color: var(--accent); }
        .about-card--sailing:hover { border-color: var(--teal); }
        .about-card--books:hover { border-color: var(--orange); }
        .about-card--ai:hover { border-color: var(--purple); }
        .about-card--ocean .about-card-icon { color: var(--accent); }
        .about-card--sailing .about-card-icon { color: var(--teal); }
        .about-card--books .about-card-icon { color: var(--orange); }
        .about-card--ai .about-card-icon { color: var(--purple); }
        .about-card-icon { margin-bottom: 14px; }
        .about-card-title { font-size: 15px; font-weight: 700; color: var(--heading); margin-bottom: 6px; }
        .about-card-sub {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          line-height: 1.5;
        }

        /* ── Section headers ── */
        .about-section-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .about-section-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .about-section-intro {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 640px;
          margin-bottom: 48px;
        }

        /* ── Mia Kingtide ── */
        .about-mia { background: var(--bg-subtle); }
        .about-mia-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          margin-bottom: 40px;
        }
        .about-mia-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 24px 0;
        }
        .about-mini-stat {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-muted);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 6px 12px;
        }
        .about-mini-stat strong { color: var(--heading); }
        .about-mia-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .about-pill-primary {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: #fff;
          background: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 99px;
          padding: 8px 18px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-pill-primary:hover { background: var(--accent-light); border-color: var(--accent-light); }
        .about-pill {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-muted);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 99px;
          padding: 7px 16px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .about-pill:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }
        .about-mia-video { }
        .about-video-wrap {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          background: #000;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-card);
        }
        .about-video-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          margin-top: 10px;
          margin-bottom: 8px;
        }
        .about-science-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
        }
        .about-science-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          flex-shrink: 0;
        }
        .about-science-chips { display: flex; flex-wrap: wrap; gap: 8px; }
        .about-science-chip {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--teal);
          background: var(--teal-glow);
          border: 1px solid rgba(11,158,138,0.2);
          border-radius: 4px;
          padding: 4px 10px;
        }

        /* ── Pitter Patter Grid ── */
        .about-ppd { background: var(--bg); }
        .about-ppd-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .about-ppd-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 24px;
          text-decoration: none;
          color: inherit;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .about-ppd-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
          color: inherit;
        }
        .about-ppd-icon { font-size: 28px; margin-bottom: 4px; }
        .about-ppd-label {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
        }
        .about-ppd-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.6;
          flex: 1;
        }
        .about-ppd-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          margin-top: 8px;
        }

        /* ── Civic ── */
        .about-civic { background: var(--bg-subtle); }
        .about-civic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .about-civic-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          box-shadow: var(--shadow-card);
        }
        .about-civic-tag {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .about-civic-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
        }
        .about-civic-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 16px;
        }
        .about-civic-link {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--border-accent);
          padding-bottom: 1px;
        }

        /* ── Social ── */
        .about-social { background: var(--bg); }
        .about-social-card {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
          color: inherit;
        }
        .about-social-card:hover {
          border-color: var(--platform-color, var(--border-accent));
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          color: inherit;
        }
        .about-spc-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 18px; font-weight: 700;
          flex-shrink: 0;
          font-family: var(--font-mono), monospace;
        }
        .about-spc-platform {
          font-family: var(--font-mono), monospace;
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          color: var(--text-dim); margin-bottom: 2px;
        }
        .about-spc-handle { font-size: 16px; font-weight: 600; color: var(--heading); margin-bottom: 4px; }
        .about-spc-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; }
        .about-spc-arrow {
          font-size: 20px; color: var(--text-dim);
          transition: transform 0.2s, color 0.2s; flex-shrink: 0;
        }
        .about-social-card:hover .about-spc-arrow { transform: translateX(4px); color: var(--accent); }
        .about-tiktok-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--accent); margin-bottom: 20px;
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .about-hero-inner { grid-template-columns: 1fr; gap: 48px; }
          .about-stat-row { grid-template-columns: repeat(2, 1fr); }
          .about-mia-grid { grid-template-columns: 1fr; }
          .about-ppd-grid { grid-template-columns: repeat(2, 1fr); }
          .about-civic-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .about-hero-cards { grid-template-columns: 1fr; }
          .about-ppd-grid { grid-template-columns: 1fr; }
          .about-stat-row { grid-template-columns: repeat(2, 1fr); }
          .about-social-card { grid-template-columns: 48px 1fr; }
          .about-spc-arrow { display: none; }
        }
      `}</style>
    </>
  );
}
