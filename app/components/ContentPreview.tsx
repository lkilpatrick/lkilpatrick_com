import { contentPreviews } from "../data/portfolio";

const TYPE_STYLES: Record<string, { color: string; bg: string }> = {
  Article: { color: "var(--accent)",  bg: "var(--accent-glow)" },
  Talk:    { color: "var(--teal)",    bg: "var(--teal-glow)" },
  Book:    { color: "var(--orange)",  bg: "var(--orange-glow)" },
  Video:   { color: "var(--purple)",  bg: "var(--purple-glow)" },
};

export default function ContentPreview() {
  return (
    <section id="writing" className="content-prev-section section-body section-alt">
      <div className="content-wrap">
        <div className="cp-header">
          <div className="section-eyebrow">Writing, Talks &amp; Media</div>
          <h2 className="cp-title">Saying things worth reading.</h2>
          <p className="cp-subtitle">
            Technical articles, conference talks, published books, and product launch videos.
            Content that actually helps developers, not content for the sake of it.
          </p>
        </div>

        <div className="cp-grid">
          {contentPreviews.map(item => {
            const style = TYPE_STYLES[item.type] ?? TYPE_STYLES.Article;
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cp-card"
              >
                <div className="cp-card-top">
                  <span className="cp-type" style={{ color: style.color, background: style.bg }}>
                    {item.type}
                  </span>
                  <span className="cp-org">{item.org}</span>
                </div>
                <h3 className="cp-card-title">{item.title}</h3>
                <p className="cp-card-desc">{item.description}</p>
                <div className="cp-read">
                  Read &rarr;
                </div>
              </a>
            );
          })}
        </div>

        <div className="cp-footer">
          <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="cp-more-link">
            More on the blog &rarr;
          </a>
          <a href="https://www.youtube.com/@LukeKilpatrick" target="_blank" rel="noopener noreferrer" className="cp-more-link">
            YouTube channel &rarr;
          </a>
          <a href="https://a.co/d/eIgJG8o" target="_blank" rel="noopener noreferrer" className="cp-more-link">
            Books on Amazon &rarr;
          </a>
        </div>
      </div>

      <style>{`
        .content-prev-section {
          background: var(--bg-subtle);
        }
        .cp-header {
          text-align: center;
          margin-bottom: 52px;
        }
        .cp-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .cp-subtitle {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 40px;
        }
        .cp-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
        }
        .cp-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-card-hover);
          border-color: var(--border-accent);
          color: inherit;
        }
        .cp-card-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .cp-type {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 5px;
          font-weight: 600;
        }
        .cp-org {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          color: var(--text-dim);
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .cp-card-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 10px;
          line-height: 1.4;
          letter-spacing: -0.2px;
        }
        .cp-card-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.7;
          flex: 1;
          margin-bottom: 16px;
        }
        .cp-read {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--accent);
          margin-top: auto;
        }

        .cp-footer {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 24px;
        }
        .cp-more-link {
          font-family: var(--font-mono), monospace;
          font-size: 12px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.3px;
        }
        .cp-more-link:hover {
          color: var(--accent);
        }

        @media (max-width: 900px) {
          .cp-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .cp-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
