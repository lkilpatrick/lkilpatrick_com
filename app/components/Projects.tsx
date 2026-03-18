import { videos } from "../data/portfolio";
import { SectionHeader } from "./shared";

function getEmbedSrc(type: string, id: string) {
  if (type === "youtube") return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  if (type === "vimeo")   return `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`;
  return null;
}

export default function Presentations() {
  return (
    <section className="section-body" id="presentations">
      <div className="content-wrap">
        <SectionHeader number="03" title="Presentations & Video" />
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 36, maxWidth: 600 }}>
          Conference talks, product launches, and developer program presentations — delivered on stages across four continents.
        </p>

        <div style={{ display: "grid", gap: 32 }}>
          {videos.map((video) => {
            const src = getEmbedSrc(video.embedType, video.embedId);
            return (
              <div key={video.id} style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden" }}>
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
                  <div style={{
                    height: 120,
                    background: "var(--bg-card-hover)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "1px solid var(--border)",
                  }}>
                    <a href={video.link} target="_blank" rel="noopener noreferrer" style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: 13,
                      color: "var(--accent)",
                      padding: "10px 20px",
                      border: "1px solid var(--border-accent)",
                      borderRadius: 6,
                    }}>
                      ▶ Listen / Watch →
                    </a>
                  </div>
                )}
                <div style={{ padding: "16px 20px" }}>
                  <div style={{ fontFamily: "var(--font-mono), monospace", fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--accent)", marginBottom: 4 }}>
                    {video.org}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 4 }}>
                    <a href={video.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
                      {video.title}
                    </a>
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>
                    {video.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
