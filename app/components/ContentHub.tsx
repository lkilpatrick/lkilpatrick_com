"use client";

import Image from "next/image";
import { technicalContent, videos } from "../data/portfolio";

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

// ─── Writing card ─────────────────────────────────────────────────────────────

function WritingCard({ item }: { item: typeof technicalContent[0] }) {
  const screenshot = WRITING_SCREENSHOTS[item.id];
  const tc = TAG_STYLES[item.tagColor] ?? TAG_STYLES.blue;

  return (
    <div className="ch-writing-card">
      {screenshot && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="ch-writing-img-wrap">
          <Image
            src={screenshot}
            alt={item.title}
            width={600} height={340}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </a>
      )}
      <div className="ch-writing-body">
        <div className="ch-writing-top">
          <span className="ch-tag" style={{ color: tc.color, background: tc.bg, border: `1px solid ${tc.border}` }}>
            {item.tag}
          </span>
          <span className="ch-org">{item.org}</span>
        </div>
        <h3 className="ch-writing-title">
          <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title} ↗</a>
        </h3>
        <p className="ch-writing-desc">{item.description}</p>
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

// ─── Main component ───────────────────────────────────────────────────────────

export default function ContentHub() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="ch-hero section-body">
        <div className="content-wrap">
          <div className="ch-eyebrow">Content</div>
          <h1 className="ch-title">Writing, talks, and things worth watching.</h1>
        </div>
      </section>

      {/* ── Two-column layout ── */}
      <section className="section-body section-alt">
        <div className="content-wrap--wide">
          <div className="ch-two-col">

            {/* ── Left: Talks & Presentations ── */}
            <div className="ch-col" id="talks">
              <div className="ch-col-header">
                <div className="ch-col-eyebrow">Talks &amp; Presentations</div>
                <h2 className="ch-col-title">On stage and on camera.</h2>
              </div>
              <div className="ch-video-stack">
                {videos.map(v => <VideoCard key={v.id} video={v} />)}
              </div>
            </div>

            {/* ── Right: Writing ── */}
            <div className="ch-col" id="writing">
              <div className="ch-col-header">
                <div className="ch-col-eyebrow">Writing</div>
                <h2 className="ch-col-title">Articles, tutorials, and guides.</h2>
              </div>
              <div className="ch-writing-stack">
                {technicalContent.map(item => (
                  <WritingCard key={item.id} item={item} />
                ))}
              </div>
              <div className="ch-more-links">
                <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="ch-more-btn">
                  More on the blog →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        /* ── Page header ── */
        .ch-hero { background: var(--color-bg); }
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

        /* ── Two-column layout ── */
        .ch-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .ch-col-header {
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--color-border);
        }
        .ch-col-eyebrow {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-primary);
          margin-bottom: 8px;
        }
        .ch-col-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 400;
          color: var(--heading);
          letter-spacing: -0.3px;
          line-height: 1.2;
        }

        /* ── Video stack ── */
        .ch-video-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
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

        /* ── Writing stack ── */
        .ch-writing-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ch-writing-card {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border-light);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .ch-writing-card:hover {
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-2px);
        }
        .ch-writing-img-wrap {
          display: block;
          overflow: hidden;
        }
        .ch-writing-img-wrap img {
          transition: transform 0.3s ease;
        }
        .ch-writing-img-wrap:hover img {
          transform: scale(1.02);
        }
        .ch-writing-body {
          padding: 20px 24px;
        }
        .ch-writing-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .ch-writing-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 17px;
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 10px;
          line-height: 1.35;
        }
        .ch-writing-title a { color: var(--heading); text-decoration: none; }
        .ch-writing-title a:hover { color: var(--color-primary); }
        .ch-writing-desc {
          font-size: 13px;
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: 16px;
        }

        /* ── Shared ── */
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
        .ch-row-btn {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--color-primary);
          padding: 7px 14px;
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
        .ch-more-links {
          margin-top: 24px;
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

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .ch-two-col {
            grid-template-columns: 1fr;
            gap: 56px;
          }
        }
      `}</style>
    </>
  );
}
