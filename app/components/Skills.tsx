import { stats, strategicWork } from "../data/portfolio";
import { SectionHeader, Stat, Card } from "./shared";

export default function StrategicImpact() {
  return (
    <section className="section-body" id="impact">
      <div className="content-wrap">
        <SectionHeader number="04" title="Strategic Impact" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            marginBottom: 36,
          }}
        >
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {strategicWork.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
