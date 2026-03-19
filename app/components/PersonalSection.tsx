export default function PersonalSection() {
  return (
    <section id="personal" className="personal-section section-body">
      <div className="content-wrap">
        <div className="personal-inner">
          <div className="personal-text">
            <div className="section-eyebrow">The Person Behind the Work</div>
            <h2 className="personal-title">Ocean first. Builder always.</h2>
            <p className="personal-desc">
              I live on the Monterey Peninsula, one of the most biologically rich coastlines on
              Earth. The ocean shapes how I think: systems, patience, depth, and the discipline
              to go back again even when conditions are rough.
            </p>
            <p className="personal-desc">
              Outside of work I dive, sail, and write. I am a{" "}
              <strong style={{ color: "var(--heading)" }}>PADI Divemaster</strong>{" "}
              — the first professional level in diving — and I dive Monterey Bay regularly, one of
              the richest and most challenging cold-water dive sites on Earth. I built{" "}
              <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="personal-link">
                Pitter Patter Diving
              </a>{" "}
              as a media, tourism, and commerce business around that: dive blog, underwater
              photography, boat rentals, and the{" "}
              <a href="https://www.airbnb.com/rooms/2685574" target="_blank" rel="noopener noreferrer" className="personal-link">
                Ocean View at Monterey Bay
              </a>{" "}
              Airbnb.
            </p>
            <p className="personal-desc">
              I also authored the{" "}
              <a href="https://miakingtide.com/" target="_blank" rel="noopener noreferrer" className="personal-link">
                Mia Kingtide
              </a>{" "}
              ocean conservation series — reviewed by scientists at MBARI, Hopkins Marine Station,
              and Moss Landing Marine Labs — and race at MPYC, where I built the race management
              system because the existing tools were not good enough.
            </p>
            <div className="personal-links">
              <a href="https://pitterpatterdiving.com/" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Pitter Patter Diving
              </a>
              <a href="https://miakingtide.com/" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Mia Kingtide
              </a>
              <a href="https://www.amazon.com/author/lkilpatrick" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Books on Amazon
              </a>
              <a href="https://pitterpatterdiving.artstorefronts.com/" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Underwater Photography
              </a>
              <a href="https://www.boatsetter.com/boats/vxbfqbx" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Rent the Boat
              </a>
              <a href="https://www.airbnb.com/rooms/2685574" target="_blank" rel="noopener noreferrer" className="personal-pill">
                Ocean View Airbnb
              </a>
              <a href="https://www.tiktok.com/@pitterpatterdiving" target="_blank" rel="noopener noreferrer" className="personal-pill">
                TikTok
              </a>
            </div>
          </div>

          <div className="personal-cards">
            <div className="personal-card personal-card--ocean">
              <div className="personal-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12c2-4 6-4 8 0s6 4 8 0"/>
                  <path d="M2 18c2-4 6-4 8 0s6 4 8 0"/>
                  <path d="M2 6c2-4 6-4 8 0s6 4 8 0"/>
                </svg>
              </div>
              <div className="personal-card-title">PADI Divemaster</div>
              <div className="personal-card-sub">Cold-water diving on Monterey Bay</div>
            </div>
            <div className="personal-card personal-card--books">
              <div className="personal-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <div className="personal-card-title">4 Books Published</div>
              <div className="personal-card-sub">Mia Kingtide Ocean Adventures Series</div>
            </div>
            <div className="personal-card personal-card--sailing">
              <div className="personal-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 19h20L12 2z"/>
                  <path d="M12 2v17"/>
                </svg>
              </div>
              <div className="personal-card-title">MPYC Racing</div>
              <div className="personal-card-sub">Monterey Peninsula Yacht Club</div>
            </div>
            <div className="personal-card personal-card--ai">
              <div className="personal-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div className="personal-card-title">AI Builder</div>
              <div className="personal-card-sub">Agents, automation, and practical systems</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .personal-section {
          background: var(--bg);
        }
        .personal-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .personal-title {
          font-family: var(--font-serif), Georgia, serif;
          font-size: clamp(26px, 3vw, 38px);
          font-weight: 400;
          color: var(--heading);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .personal-desc {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 18px;
        }
        .personal-link {
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid rgba(14,127,192,0.3);
          transition: border-color 0.2s;
        }
        .personal-link:hover {
          border-bottom-color: var(--accent);
        }
        .personal-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }
        .personal-pill {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-muted);
          padding: 6px 14px;
          border: 1px solid var(--border);
          border-radius: 99px;
          text-decoration: none;
          transition: all 0.2s;
          background: var(--bg-card);
        }
        .personal-pill:hover {
          color: var(--accent);
          border-color: var(--border-accent);
          background: var(--accent-glow);
        }

        .personal-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .personal-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          transition: all 0.25s ease;
          box-shadow: var(--shadow-card);
        }
        .personal-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-card-hover);
        }
        .personal-card--ocean:hover { border-color: var(--accent); }
        .personal-card--books:hover { border-color: var(--orange); }
        .personal-card--sailing:hover { border-color: var(--teal); }
        .personal-card--ai:hover { border-color: var(--purple); }

        .personal-card--ocean .personal-card-icon { color: var(--accent); }
        .personal-card--books .personal-card-icon { color: var(--orange); }
        .personal-card--sailing .personal-card-icon { color: var(--teal); }
        .personal-card--ai .personal-card-icon { color: var(--purple); }

        .personal-card-icon {
          margin-bottom: 14px;
        }
        .personal-card-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--heading);
          margin-bottom: 6px;
        }
        .personal-card-sub {
          font-family: var(--font-mono), monospace;
          font-size: 11px;
          color: var(--text-dim);
          line-height: 1.5;
        }

        @media (max-width: 860px) {
          .personal-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 480px) {
          .personal-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
