import Image from "next/image";
import { technicalContent, videos, personalVideos, localVideos } from "../data/portfolio";
import { SectionHeader } from "./shared";

const CONTENT_SCREENSHOTS: Record<number, string> = {
  1: "/screenshots/content-ai-agent-boats.jpg",
  2: "https://duplocloud.com/wp-content/uploads/2025/09/devops-1024x682.webp",
  3: "https://duplocloud.com/wp-content/uploads/2025/09/PaaSisPasseHeade2064-1080-1024x540.webp",
  4: "/screenshots/content-linearb-hacktoberfest.jpg",
  5: "/screenshots/content-linearb-continuous-merge.jpg",
};

function ContentRow({ item, index }: { item: typeof technicalContent[0]; index: number }) {
  const screenshot = CONTENT_SCREENSHOTS[item.id];
  const isEven = index % 2 === 0;
  return (
    <div className={`portal-row ${isEven ? "" : "portal-row--reverse"}`}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="portal-screenshot-wrap">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`Screenshot of ${item.title}`}
            width={600}
            height={380}
            className="portal-screenshot"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <div className="portal-screenshot-placeholder">
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--text-dim)" }}>
              {item.link.replace("https://", "")}
            </span>
          </div>
        )}
      </a>
      <div className="portal-text">
        <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>
          {item.org}
        </div>
        <h3 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 22, fontWeight: 400, color: "var(--heading)", marginBottom: 14, lineHeight: 1.3 }}>
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title} ↗
          </a>
        </h3>
        <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
          {item.description}
        </p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--accent)", padding: "8px 16px", border: "1px solid var(--border-accent)", borderRadius: 6, display: "inline-block" }}
        >
          Read Article →
        </a>
      </div>
    </div>
  );
}

function getEmbedSrc(type: string, id: string) {
  if (type === "youtube") return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  if (type === "vimeo")   return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;
  return null;
}

function VideoCard({ video }: { video: typeof videos[0] }) {
  const src = getEmbedSrc(video.embedType, video.embedId);
  return (
    <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
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

export default function Presentations() {
  return (
    <>
      {/* Written content — portal-row layout */}
      <section className="section-body" id="content">
        <div className="content-wrap">
          <SectionHeader number="02" title="Technical Content & Writing" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 56, maxWidth: 600 }}>
            Blog posts, tutorials, and technical articles — developer-first content that drives product adoption and community growth.
          </p>
          <div style={{ display: "grid", gap: 72 }}>
            {technicalContent.map((item, i) => (
              <ContentRow key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Presentations / video */}
      <section className="section-body" id="presentations">
        <div className="content-wrap">
          <SectionHeader number="03" title="Presentations & Video" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 36, maxWidth: 600 }}>
            Conference talks, product launches, and developer program presentations — delivered on stages across four continents.
          </p>
          <div className="video-grid-2col">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal / channel videos */}
      <section className="section-body" id="personal-videos">
        <div className="content-wrap">
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--accent)", letterSpacing: 1 }}>CH</span>
            <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 26, color: "var(--heading)", fontWeight: 400 }}>Personal & Channel Videos</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 36, maxWidth: 600 }}>
            Event production, ocean adventures, and early creative work — demonstrating a video production practice that predates the DevRel career.
          </p>
          <div className="video-grid-2col">
            {personalVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Atlassian local MP4 videos */}
      <section className="section-body" id="atlassian-videos">
        <div className="content-wrap">
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--accent)", letterSpacing: 1 }}>AT</span>
            <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 26, color: "var(--heading)", fontWeight: 400 }}>Atlassian — Event & Program Videos</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 36, maxWidth: 600 }}>
            Developer community activations, hackathons, and program events — produced and shot during my time at Atlassian.
          </p>
          <div className="video-grid-2col">
            {localVideos.map((video) => (
              <div key={video.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
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

      {/* @LukeKilpatrick YouTube channel */}
      <section className="section-body" id="yt-channel">
        <div className="content-wrap">
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "var(--accent)", letterSpacing: 1 }}>CH</span>
            <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 26, color: "var(--heading)", fontWeight: 400 }}>YouTube Channel — @LukeKilpatrick</h2>
          </div>
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 28, maxWidth: 600 }}>
            Mia Kingtide Ocean Adventures — audiobook chapters and read-aloud videos from the middle-grade ocean conservation series. 4 books published, 1,000+ copies sold.
          </p>
          <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
              <iframe
                src="https://www.youtube.com/embed/GoIaxXyRIlo?rel=0&modestbranding=1"
                title="Mia Kingtide: The Octopus' Gift — Chapter 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <div style={{ padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 3 }}>@LukeKilpatrick · Mia Kingtide Ocean Adventures</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)" }}>The Octopus&apos; Gift — Chapter 1</div>
              </div>
              <a href="https://www.youtube.com/@LukeKilpatrick" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-mono), monospace", fontSize: 11, color: "var(--accent)", padding: "6px 14px", border: "1px solid var(--border-accent)", borderRadius: 6, whiteSpace: "nowrap" }}>
                View Full Channel →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .portal-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .portal-row--reverse {
          direction: rtl;
        }
        .portal-row--reverse > * {
          direction: ltr;
        }
        .portal-screenshot-wrap {
          display: block;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s, transform 0.2s;
          background: var(--bg-card);
        }
        .portal-screenshot-wrap:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          transform: translateY(-2px);
        }
        .portal-screenshot { display: block; width: 100%; height: auto; }
        .portal-screenshot-placeholder {
          width: 100%;
          aspect-ratio: 16/10;
          background: var(--bg-card-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        .portal-text { direction: ltr; }
        .video-grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        @media (max-width: 700px) {
          .portal-row, .portal-row--reverse {
            grid-template-columns: 1fr;
            direction: ltr;
            gap: 24px;
          }
          .video-grid-2col { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
