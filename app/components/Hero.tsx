import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <header
      style={{
        padding: "80px 0 60px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
            animation: "fadeUp 0.6s ease forwards",
          }}
        >
          Developer Relations &amp; Developer Marketing
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "var(--heading)",
            marginBottom: 20,
            animation: "fadeUp 0.6s ease 0.1s both",
          }}
        >
          {personalInfo.name}
        </h1>

        <p
          style={{
            fontSize: 17,
            color: "var(--text-muted)",
            maxWidth: 640,
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        >
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>15+ years</strong> building
          developer programs, documentation, and communities at{" "}
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>
            Atlassian, Nutanix, Hazelcast, LinearB,
          </strong>{" "}
          and <strong style={{ color: "var(--text)", fontWeight: 500 }}>Harness</strong>.{" "}
          {personalInfo.intro}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            marginTop: 28,
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          {[
            { icon: "◆", text: personalInfo.location },
            { icon: "◆", text: personalInfo.availability },
          ].map((item) => (
            <div
              key={item.text}
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: 12,
                color: "var(--text-dim)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ color: "var(--accent)", fontSize: 8 }}>{item.icon}</span>
              <span style={{ color: "var(--text-muted)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
