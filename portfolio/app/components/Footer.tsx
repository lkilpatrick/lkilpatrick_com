import { personalInfo } from "../data/portfolio";

const links = [
  { href: personalInfo.linkedin, label: "LinkedIn" },
  { href: personalInfo.github, label: "GitHub" },
  { href: personalInfo.youtube, label: "YouTube" },
  { href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ padding: "48px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "var(--text-dim)" }}>
          &copy; 2026 Luke Kilpatrick. Built with code, coffee, and salt water.
        </p>
      </div>
    </footer>
  );
}
