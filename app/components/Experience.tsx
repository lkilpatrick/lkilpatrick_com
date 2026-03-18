import { technicalContent } from "../data/portfolio";
import { SectionHeader, Card } from "./shared";

export default function TechnicalContent() {
  return (
    <section style={{ padding: "56px 0", borderBottom: "1px solid var(--border)" }} id="content">
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
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
