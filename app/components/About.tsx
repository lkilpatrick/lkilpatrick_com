import { onboardingDocs } from "../data/portfolio";
import { SectionHeader, HighlightCard, Card } from "./shared";

export default function OnboardingDocs() {
  return (
    <section className="section-body" id="onboarding">
      <div className="content-wrap">
        <SectionHeader number="01" title="Developer Onboarding & Documentation" />
        <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 28, maxWidth: 600 }}>
          I build the developer portals, docs, and onboarding paths that let engineers self-serve — no sales call required. This is what I do first at every company.
        </p>

        {onboardingDocs.highlights.map((item) => (
          <HighlightCard key={item.title} item={item} />
        ))}

        <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
          {onboardingDocs.cards.map((card) => (
            <Card key={card.title} item={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
