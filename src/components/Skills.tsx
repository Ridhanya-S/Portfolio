"use client";

import { skills } from "@/data/portfolio";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px" }}>
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "12px",
        }}>
          Skills
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "24px" }} />
        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--t1)",
          marginBottom: "56px",
        }}>
          Tech stack
        </h2>

        <div className="skills-grid">
          {categories.map(([category, items]) => (
            <div key={category}>
              <div style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                marginBottom: "16px",
                paddingBottom: "8px",
                borderBottom: "1px solid var(--border-s)",
              }}>
                {category.toUpperCase()}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }

        .skill-tag {
          font-size: 12px;
          color: var(--t3);
          background-color: var(--bg-2);
          border: 1px solid var(--border);
          padding: 5px 12px;
          border-radius: 4px;
          font-family: var(--font-mono), monospace;
          letter-spacing: 0.04em;
          transition: color 0.2s, border-color 0.2s;
        }
        .skill-tag:hover { color: var(--t1); border-color: var(--border-h); }

        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
