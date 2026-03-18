import { videos } from "../data/portfolio";
import { SectionHeader, VideoCard } from "./shared";

export default function Presentations() {
  return (
    <section style={{ padding: "56px 0", borderBottom: "1px solid var(--border)" }} id="presentations">
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <SectionHeader number="03" title="Presentations & Video" />
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 28, maxWidth: 600 }}>
          Conference talks, product launches, and developer program presentations — I&apos;ve delivered these on stages across four continents.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 12,
          }}
        >
          {videos.map((video) => (
            <VideoCard key={video.id} item={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
