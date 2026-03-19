"use client";

import Image from "next/image";
import { useState } from "react";
import { technicalContent, videos, localVideos } from "../data/portfolio";

// ─── Screenshots map ─────────────────────────────────────────────────────────

const WRITING_SCREENSHOTS: Record<number, string> = {
  1: "/screenshots/content-ai-agent-boats.jpg",
  6: "/screenshots/content-ai-agent-boats.jpg",
  2: "/screenshots/content-duplocloud-prompts.webp",
  3: "/screenshots/content-duplocloud-paas.webp",
  4: "/screenshots/content-linearb-hacktoberfest.jpg",
  5: "/screenshots/content-linearb-continuous-merge.jpg",
};

const TAG_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  green: { color: "var(--color-success)",       bg: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.2)" },
  blue:  { color: "var(--color-primary-light)", bg: "rgba(3,105,161,0.07)", border: "rgba(3,105,161,0.2)" },
};

// ─── Sub-nav ─────────────────────────────────────────────────────────────────

const TABS = [
  { id: "writing",  label: "Writing" },
  { id: "talks",    label: "Talks & Presentations" },
  { id: "videos",   label: "Atlassian Videos" },
];

// ─── Writing row ─────────────────────────────────────────────────────────────

function WritingRow({ item, index }: { item: typeof technicalContent[0]; index: number }) {
  const screenshot = WRITING_SCREENSHOTS[item.id];
  const tc = TAG_STYLES[item.tagColor] ?? TAG_STYLES.blue;
  const isEven = index % 2 === 0;

  return (
    <div className={`ch-row${isEven ? "" : " ch-row--reverse"}`}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="ch-img-wrap">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={item.title}
            width={600} height={380}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className="ch-img-placeholder">
            <span>{item.link.replace("https://", "")}</span>
          </div>
        )}
      </a>
      <div className="ch-row-text">
        <div className="ch-row-top">
          <span className="ch-tag" style={{ color: tc.color, background: tc.bg, border: `1px solid ${tc.border}` }}>
            {item.tag}
          </span>
          <span className="ch-org">{item.org}</span>
        </div>
        <h3 className="ch-row-title">
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title} ↗</a>
        </h3>
        <p className="ch-row-desc">{item.description}</p>
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="ch-row-btn">
          Read →
        </a>
      </div>
    </div>
  );
}

// ─── Video card ──────────────────────────────────────────────────────────────

function getEmbedSrc(type: string, id: string) {
  if (type === "youtube") return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  if (type === "vimeo")   return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;
  return null;
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const src = getEmbedSrc(video.embedType, video.embedId);
  return (
    <div className="ch-video-card">
      {src ? (
        <div className="ch-video-embed">
          <iframe
            src={src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      ) : (
        <div className="ch-video-link-placeholder">
          <a href={video.link} target="_blank" rel="noopener noreferrer" className="ch-row-btn">
            ▶ Watch / Listen →
          </a>
        </div>
      )}
      <div className="ch-video-meta">
        <div className="ch-org">{video.org}</div>
        <div className="ch-video-title">
          <a href={video.link} target="_blank" rel="noopener noreferrer">{video.title}</a>
        </div>
        <div className="ch-video-desc">{video.description}</div>
      </div>
    </div>
  );
}

function LocalVideoCard({ video }: { video: typeof localVideos[0] }) {
  return (
    <div className="ch-video-card">
      <video controls preload="metadata" style={{ width: "100%", display: "block", background: "#000" }}>
        <source src={video.file} type="video/mp4" />
      </video>
      <div className="ch-video-meta">
        <div className="ch-org">{video.org}</div>
        <div className="ch-video-title">{video.title}</div>
        <div className="ch-video-desc">{video.description}</div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContentHub() {
  const [activeTab, setActiveTab] = useState("writing");

  return (
    <>
      {/* ── Page header ── */}
      <section className="ch-hero section-body">
        <div className="content-wrap">
          <div className="ch-eyebrow">Content</div>
          <h1 className="ch-title">Writing, talks, and things worth watching.</h1>
        </div>
      </section>

      {/* ── Sticky sub-nav ── */}
      <div className="ch-subnav-wrap">
        <div className="content-wrap">
          <nav className="ch-subnav">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`ch-subnav-btn${activeTab === tab.id ? " ch-subnav-btn--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Writing ── */}
      {activeTab === "writing" && (
        <section className="section-body" id="writing">
          <div className="content-wrap">
            <div style={{ display: "grid", gap: 72 }}>
              {technicalContent.map((item, i) => (
                <WritingRow key={item.id} item={item} index={i} />
              ))}
            </div>
            <div className="ch-more-links">
              <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="ch-more-btn">
                More on the blog →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── Talks & Presentations ── */}
      {activeTab === "talks" && (
        <section className="section-body" id="talks">
          <div className="content-wrap">
            <div className="ch-video-grid">
              {videos.map(v => <VideoCard key={v.id} video={v} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Atlassian Videos ── */}
      {activeTab === "videos" && (
        <section className="section-body" id="videos">
          <div className="content-wrap">
            <div className="ch-video-grid">
              {localVideos.map(v => <LocalVideoCard key={v.id} video={v} />)}
            </div>
          </div>
        </section>
      )}

      <style>{`
        /* ── Page header ── */
        .ch-hero { background: var(--color-bg); padding-bottom: 0 !important; border-bottom: none !important; }
        .ch-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 14px;
        }
        .ch-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.5px;
          line-height: 1.12;
        }

        /* ── Sub-nav ── */
        .ch-subnav-wrap {
          position: sticky;
          top: 64px;
          z-index: 100;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .ch-subnav {
          display: flex;
          gap: 0;
          padding: 0;
        }
        .ch-subnav-btn {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          cursor: pointer;
          font-family: var(--font-sans), sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-secondary);
          padding: 14px 20px;
          transition: color 0.15s, border-color 0.15s;
          white-space: nowrap;
        }
        .ch-subnav-btn:hover { color: var(--color-primary); }
        .ch-subnav-btn--active {
          color: var(--color-primary);
          font-weight: 700;
          border-bottom-color: var(--color-primary);
        }

        /* ── Writing rows (same pattern as portal rows) ── */
        .ch-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .ch-row--reverse { direction: rtl; }
        .ch-row--reverse > * { direction: ltr; }
        .ch-img-wrap {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: box-shadow 0.2s, transform 0.2s;
          background: var(--color-bg-card);
        }
        .ch-img-wrap:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
          transform: translateY(-2px);
        }
        .ch-img-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--color-bg-alt);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-img-placeholder span {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--color-text-muted);
        }
        .ch-row-text { direction: ltr; }
        .ch-row-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .ch-tag {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
          font-weight: 600;
        }
        .ch-org {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
        }
        .ch-row-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 14px;
          line-height: 1.3;
        }
        .ch-row-title a { color: var(--heading); text-decoration: none; }
        .ch-row-title a:hover { color: var(--color-primary); }
        .ch-row-desc {
          font-size: 14px;
          color: var(--color-text-secondary);
          line-height: 1.75;
          margin-bottom: 20px;
        }
        .ch-row-btn {
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
        .ch-row-btn:hover {
          background: var(--color-primary);
          color: #fff;
        }

        /* ── More links ── */
        .ch-more-links {
          margin-top: 56px;
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .ch-more-btn {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--color-text-secondary);
          text-decoration: none;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 2px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ch-more-btn:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
        }

        /* ── Video grid ── */
        .ch-video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .ch-video-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }
        .ch-video-embed {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          background: #000;
        }
        .ch-video-link-placeholder {
          height: 120px;
          background: var(--color-bg-alt);
          border-bottom: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ch-video-meta {
          padding: 16px 20px;
        }
        .ch-video-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--heading);
          margin: 4px 0;
          line-height: 1.4;
        }
        .ch-video-title a { color: var(--heading); text-decoration: none; }
        .ch-video-title a:hover { color: var(--color-primary); }
        .ch-video-desc {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          line-height: 1.55;
          margin-top: 4px;
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .ch-row, .ch-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
          .ch-video-grid { grid-template-columns: 1fr; }
          .ch-subnav { overflow-x: auto; }
        }
      `}</style>
    </>
  );
}
