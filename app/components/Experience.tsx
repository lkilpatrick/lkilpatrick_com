import { technicalContent } from "../data/portfolio";
import { SectionHeader, Card } from "./shared";

export default function TechnicalContent() {
  return (
    <section className="section-body" id="content">
      <div className="content-wrap">
        <SectionHeader number="02" title="Technical Content" />
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 28, maxWidth: 600 }}>
          Blog posts, tutorials, and technical writing that demonstrate I actually use the products I write about.
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          {technicalContent.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
