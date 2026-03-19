import { videos, personalVideos, localVideos } from "../data/portfolio";
import { SectionHeader } from "./shared";

function getEmbedSrc(type: string, id: string) {
  if (type === "youtube") return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  if (type === "vimeo")   return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;
  return null;
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const src = getEmbedSrc(video.embedType, video.embedId);
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
      {src ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
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
        <div style={{ height: 100, background: "var(--bg-card-hover)", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--border)" }}>
          <a href={video.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 13, color: "var(--accent)", padding: "10px 20px", border: "1px solid var(--border-accent)", borderRadius: 6 }}>
            ▶ Listen / Watch →
          </a>
        </div>
      )}
      <div style={{ padding: "14px 18px" }}>
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 3 }}>
          {video.org}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)", marginBottom: 4 }}>
          <a href={video.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>{video.title}</a>
        </div>
        <div style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.5 }}>{video.description}</div>
      </div>
    </div>
  );
}

export default function VideoContent() {
  return (
    <>
      {/* ── Section 2: Talks & Presentations ── */}
      <section className="section-body" id="presentations">
        <div className="content-wrap">
          <SectionHeader number="02" title="Talks & Presentations" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 36, maxWidth: 600 }}>
            Conference talks, product launches, and developer program presentations delivered on stages across four continents.
          </p>
          <div className="video-grid-2col">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Atlassian event videos ── */}
      <section className="section-body section-alt" id="atlassian-videos">
        <div className="content-wrap">
          <SectionHeader number="03" title="Atlassian — Event & Program Videos" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 36, maxWidth: 600 }}>
            Developer community activations, hackathons, and program events — produced and shot during my time at Atlassian.
          </p>
          <div className="video-grid-2col">
            {localVideos.map((video) => (
              <div key={video.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", boxShadow: "var(--shadow-card)" }}>
                <video controls preload="metadata" style={{ width: "100%", display: "block", background: "#000" }}>
                  <source src={video.file} type="video/mp4" />
                </video>
                <div style={{ padding: "14px 18px" }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 3 }}>{video.org}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)", marginBottom: 4 }}>{video.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.5 }}>{video.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earlier Work (collapsed) ── */}
      <section className="section-body" id="earlier-work">
        <div className="content-wrap">
          <details className="earlier-work-details">
            <summary className="earlier-work-summary">
              <span className="earlier-work-label">Earlier Work</span>
              <span className="earlier-work-sub">Event videos, ocean adventures, and early production work — closed by default</span>
              <span className="earlier-work-arrow">▸</span>
            </summary>
            <div style={{ paddingTop: 32 }}>
              <div className="video-grid-2col">
                {personalVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>

      <style>{`
        .video-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 700px) {
          .video-grid-2col { grid-template-columns: 1fr; }
        }

        /* ── Earlier Work accordion ── */
        .earlier-work-details {
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg-card);
          overflow: hidden;
        }
        .earlier-work-details[open] .earlier-work-arrow { transform: rotate(90deg); }
        .earlier-work-summary {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 28px;
          cursor: pointer;
          list-style: none;
          user-select: none;
          transition: background 0.2s;
        }
        .earlier-work-summary::-webkit-details-marker { display: none; }
        .earlier-work-summary:hover { background: var(--bg-card-hover); }
        .earlier-work-label {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 600;
          flex-shrink: 0;
        }
        .earlier-work-sub {
          font-size: 13px;
          color: var(--text-dim);
          flex: 1;
        }
        .earlier-work-arrow {
          font-size: 14px;
          color: var(--text-dim);
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        @media (max-width: 560px) {
          .earlier-work-sub { display: none; }
        }
      `}</style>
    </>
  );
}
