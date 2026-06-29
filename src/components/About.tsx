"use client";

import { personal } from "@/data/portfolio";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const links = [
  { label: "GitHub", href: personal.github, icon: <GithubIcon /> },
  { label: "LinkedIn", href: personal.linkedin, icon: <LinkedInIcon /> },
];

const principles = [
  { label: "Evaluation first", desc: "You can't improve what you don't measure" },
  { label: "Failure is data", desc: "Edge cases are the product, not the exception" },
  { label: "Latency is UX", desc: "P99 matters as much as accuracy" },
  { label: "Ship, then iterate", desc: "Working code beats perfect architecture" },
];

export default function About() {
  return (
    <section id="about">
      <div className="about-grid" style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px" }}>
        {/* Left */}
        <div>
          <div style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "12px",
          }}>
            About
          </div>
          <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "32px" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="about-link"
                style={{
                  fontSize: "12px",
                  color: "var(--t5)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.04em",
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {l.icon}
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <h2 style={{
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "var(--t1)",
            marginBottom: "24px",
            lineHeight: 1.2,
          }}>
            Building systems that work<br />
            <span style={{ color: "var(--t4)" }}>when it matters.</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {personal.bio.map((para) => (
              <p key={para.slice(0, 40)} style={{ fontSize: "15px", color: "var(--t3)", lineHeight: 1.75 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Philosophy cards - hover via CSS, not JS handlers */}
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {principles.map((p) => (
              <div key={p.label} className="principle-card">
                <div style={{ fontSize: "12px", color: "var(--t1)", fontWeight: 600, marginBottom: "4px", letterSpacing: "-0.01em" }}>
                  {p.label}
                </div>
                <div style={{ fontSize: "11px", color: "var(--t5)", lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 64px; align-items: start; }
        .about-link:hover { color: var(--accent) !important; text-decoration-color: var(--accent) !important; }
        .principle-card {
          padding: 16px;
          border: 1px solid var(--border);
          border-radius: 6px;
          background-color: var(--bg-2);
          transition: border-color 0.2s;
        }
        .principle-card:hover { border-color: var(--border-h); }
        @media (max-width: 640px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
