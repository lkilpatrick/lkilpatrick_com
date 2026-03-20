const CREDENTIALS: { label: string; sub: string; link?: string }[] = [
  { label: "3 Developer Programs", sub: "Built from Zero" },
  { label: "DevRelCon Speaker", sub: "London + San Francisco" },
  { label: "SlashData Author", sub: "4 Program Types Framework" },
  { label: "49+ Open Source Repos", sub: "Nutanix GitHub Org" },
  { label: "10K TikTok", sub: "Zero to 10K in One Summer" },
  { label: "12+ Books Published", sub: "Mia Kingtide Series", link: "https://www.amazon.com/stores/Luke-Kilpatrick/author/B0DNBNF2ZK" },
];

const COMPANIES = [
  { name: "Atlassian", url: "https://www.atlassian.com/" },
  { name: "Nutanix", url: "https://www.nutanix.com/" },
  { name: "Hazelcast", url: "https://hazelcast.com/" },
  { name: "LinearB", url: "https://linearb.io/" },
  { name: "Harness", url: "https://www.harness.io/" },
];

export default function CredibilityBar() {
  return (
    <section className="cred-section section-body">
      <div className="content-wrap">
        <div className="cred-companies">
          <div className="cred-companies-label">Worked with</div>
          <div className="cred-logos">
            {COMPANIES.map(c => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="cred-logo">
                {c.name}
              </a>
            ))}
          </div>
        </div>

        <div className="cred-divider" />

        <div className="cred-grid">
          {CREDENTIALS.map(c => c.link ? (
            <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer" className="cred-item cred-item--link">
              <div className="cred-item-label">{c.label}</div>
              <div className="cred-item-sub">{c.sub}</div>
            </a>
          ) : (
            <div key={c.label} className="cred-item">
              <div className="cred-item-label">{c.label}</div>
              <div className="cred-item-sub">{c.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cred-section {
          background: var(--bg);
        }
        .cred-companies {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .cred-companies-label {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-dim);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cred-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
        }
        .cred-logo {
          font-family: var(--font-serif), Georgia, serif;
          font-size: 18px;
          color: var(--text-dim);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: -0.3px;
          opacity: 0.6;
          padding: 4px 0;
        }
        .cred-logo:hover {
          color: var(--heading);
          opacity: 1;
        }
        .cred-divider {
          height: 1px;
          background: var(--border);
          margin-bottom: 40px;
        }
        .cred-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 24px;
        }
        .cred-item {
          text-align: center;
          padding: 20px 12px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          transition: all 0.2s;
        }
        .cred-item:hover {
          border-color: var(--border-accent);
          transform: translateY(-2px);
          box-shadow: var(--shadow-card);
        }
        .cred-item--link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        .cred-item-label {
          font-size: 13px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .cred-item-sub {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-dim);
          letter-spacing: 0.3px;
        }

        @media (max-width: 900px) {
          .cred-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 540px) {
          .cred-grid { grid-template-columns: repeat(2, 1fr); }
          .cred-companies { justify-content: center; text-align: center; }
          .cred-logos { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
