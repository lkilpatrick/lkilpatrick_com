import { builderWork } from "../data/portfolio";
import { SectionHeader, Card } from "./shared";

export default function Builder() {
  return (
    <section className="section-body" id="builder">
      <div className="content-wrap">
        <SectionHeader number="05" title="Builder & Maker" />
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 28, maxWidth: 600 }}>
          I don&apos;t just write about developer tools — I build with them. Current projects spanning data pipelines, AI agents, game development, and open source.
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          {builderWork.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
