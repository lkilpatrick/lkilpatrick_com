import React, { CSSProperties } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

export type TagColor = "blue" | "green" | "orange";

export interface CardItem {
  org: string;
  title: string;
  link?: string | null;
  description: string;
  tag?: string;
  tagColor?: TagColor;
}

export interface HighlightItem {
  label: string;
  title: string;
  link?: string | null;
  org: string;
  description: string;
  accent?: boolean;
}

// ── Helpers ────────────────────────────────────────────────────────────────

export function cardTag(color: TagColor = "blue"): CSSProperties {
  const map: Record<TagColor, CSSProperties> = {
    blue: {
      background: "rgba(74,158,229,0.08)",
      color: "var(--accent)",
      border: "1px solid rgba(74,158,229,0.15)",
    },
    green: {
      background: "rgba(60,179,113,0.08)",
      color: "var(--green)",
      border: "1px solid rgba(60,179,113,0.15)",
    },
    orange: {
      background: "rgba(232,155,62,0.08)",
      color: "var(--orange)",
      border: "1px solid rgba(232,155,62,0.15)",
    },
  };
  return {
    fontFamily: "var(--font-mono), monospace",
    fontSize: 10.5,
    padding: "4px 10px",
    borderRadius: 4,
    whiteSpace: "nowrap",
    alignSelf: "center",
    ...map[color],
  };
}

// ── SectionHeader ──────────────────────────────────────────────────────────

export function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 32 }}>
      <span
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 12,
          color: "var(--accent)",
          letterSpacing: 1,
        }}
      >
        {number}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 26,
          color: "var(--heading)",
          fontWeight: 400,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ── HighlightCard ──────────────────────────────────────────────────────────

export function HighlightCard({ item, plain }: { item: HighlightItem; plain?: boolean }) {
  const style: CSSProperties = plain
    ? {
        padding: "28px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        marginBottom: 16,
      }
    : {
        padding: "28px",
        background: "linear-gradient(135deg, rgba(74,158,229,0.06), rgba(74,158,229,0.02))",
        border: "1px solid var(--border-accent)",
        borderRadius: 12,
        marginBottom: 16,
      };

  return (
    <div style={style}>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: 10,
        }}
      >
        ★ {item.label}
      </div>
      <div style={{ fontSize: 17, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>
        {item.link ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          letterSpacing: 0.5,
          color: "var(--accent)",
          marginBottom: 6,
        }}
      >
        {item.org}
      </div>
      <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.55 }}>
        {item.description}
      </div>
    </div>
  );
}

// ── Card ───────────────────────────────────────────────────────────────────

export function Card({ item }: { item: CardItem }) {
  return (
    <div
      className="card-hover"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "start",
        gap: 16,
        padding: "20px 24px",
        borderRadius: 10,
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: 11,
            letterSpacing: 0.5,
            color: "var(--accent)",
            marginBottom: 4,
          }}
        >
          {item.org}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </div>
        <div style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.55 }}>
          {item.description}
        </div>
      </div>
      {item.tag && (
        <span style={cardTag(item.tagColor ?? "blue")}>{item.tag}</span>
      )}
    </div>
  );
}

// ── VideoCard ──────────────────────────────────────────────────────────────

export function VideoCard({ item }: { item: { org: string; title: string; link: string; description: string } }) {
  return (
    <div
      className="video-card-hover"
      style={{
        padding: "20px 24px",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 11,
          letterSpacing: 0.5,
          color: "var(--accent)",
          marginBottom: 4,
        }}
      >
        {item.org}
      </div>
      <div style={{ fontSize: 14, fontWeight: 600, color: "var(--heading)", marginBottom: 6 }}>
        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "var(--heading)" }}>
          {item.title}
        </a>
      </div>
      <div style={{ fontSize: 12.5, color: "var(--text-muted)", lineHeight: 1.55 }}>
        {item.description}
      </div>
    </div>
  );
}

// ── Stat ───────────────────────────────────────────────────────────────────

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        padding: 20,
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: 28,
          color: "var(--heading)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: 10.5,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: "var(--text-dim)",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}
