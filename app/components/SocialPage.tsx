"use client";

import { useEffect } from "react";
import { socialAccounts } from "../data/portfolio";
import { SectionHeader } from "./shared";

const PLATFORM_ICONS: Record<string, string> = {
  YouTube:   "▶",
  TikTok:    "♪",
  Instagram: "◈",
  LinkedIn:  "in",
};

const PLATFORM_COLORS: Record<string, string> = {
  YouTube:   "#FF0000",
  TikTok:    "#69C9D0",
  Instagram: "#E1306C",
  LinkedIn:  "#0A66C2",
};

function TikTokEmbed() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (!existing) {
      const s = document.createElement("script");
      s.src = "https://www.tiktok.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else {
      // Re-process if script already loaded
      // @ts-expect-error tiktok embed script
      if (window.tiktok) window.tiktok.reload?.();
    }
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@pitterpatterdiving"
        data-unique-id="pitterpatterdiving"
        data-embed-type="creator"
        style={{ maxWidth: 780, minWidth: 288, width: "100%" }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@pitterpatterdiving?refer=creator_embed"
          >
            @pitterpatterdiving
          </a>
        </section>
      </blockquote>
    </div>
  );
}

function SocialProfileCard({ account }: { account: typeof socialAccounts[0] }) {
  const color = PLATFORM_COLORS[account.platform] ?? "var(--accent)";
  const icon  = PLATFORM_ICONS[account.platform] ?? "→";

  return (
    <a
      href={account.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-profile-card"
      style={{ "--platform-color": color } as React.CSSProperties}
    >
      <div className="spc-icon" style={{ background: color }}>
        {icon}
      </div>
      <div className="spc-body">
        <div className="spc-platform">{account.platform}</div>
        <div className="spc-handle">{account.handle}</div>
        <div className="spc-desc">{account.description}</div>
      </div>
      <div className="spc-arrow">→</div>
    </a>
  );
}

export default function SocialPageSection() {
  return (
    <>
      <section className="section-body" id="social">
        <div className="content-wrap">
          <SectionHeader number="06" title="Social & Channels" />
          <p style={{ fontSize: 15, color: "var(--text-muted)", marginTop: -20, marginBottom: 40, maxWidth: 600 }}>
            Where I build in public — developer content, ocean life, and audience experiments.
          </p>

          {/* Profile link cards */}
          <div style={{ display: "grid", gap: 12, marginBottom: 56 }}>
            {socialAccounts.map(account => (
              <SocialProfileCard key={account.id} account={account} />
            ))}
          </div>

          {/* TikTok creator embed */}
          <div style={{ marginBottom: 20 }}>
            <div style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 20,
            }}>
              ★ TikTok Channel — @pitterpatterdiving
            </div>
            <TikTokEmbed />
          </div>
        </div>
      </section>

      <style>{`
        .social-profile-card {
          display: grid;
          grid-template-columns: 56px 1fr auto;
          align-items: center;
          gap: 20px;
          padding: 20px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s ease;
          color: inherit;
        }
        .social-profile-card:hover {
          border-color: var(--platform-color, var(--border-accent));
          background: var(--bg-card-hover);
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          color: inherit;
        }
        .spc-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
          font-family: var(--font-mono), monospace;
        }
        .spc-platform {
          font-family: var(--font-mono), monospace;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .spc-handle {
          font-size: 16px;
          font-weight: 600;
          color: var(--heading);
          margin-bottom: 4px;
        }
        .spc-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }
        .spc-arrow {
          font-size: 20px;
          color: var(--text-dim);
          transition: transform 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .social-profile-card:hover .spc-arrow {
          transform: translateX(4px);
          color: var(--accent);
        }
        @media (max-width: 560px) {
          .social-profile-card {
            grid-template-columns: 48px 1fr;
          }
          .spc-arrow { display: none; }
        }
      `}</style>
    </>
  );
}
