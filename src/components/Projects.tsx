"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px" }}>
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "12px",
        }}>
          Projects
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "24px" }} />
        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--t1)",
          marginBottom: "56px",
        }}>
          Featured Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {projects.map((project, idx) => (
            <div key={project.title} className="project-card">
              {/* Header */}
              <div style={{
                padding: "24px 24px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "16px",
              }}>
                <div>
                  <div style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "10px",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                    marginBottom: "6px",
                  }}>
                    PROJECT {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: "var(--t1)", letterSpacing: "-0.01em" }}>
                    {project.title}
                  </h3>
                </div>

                <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="proj-link proj-link-accent">
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "18px 24px 24px" }}>
                <p style={{ fontSize: "14px", color: "var(--t3)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
                    gap: "1px",
                    backgroundColor: "var(--border-s)",
                    borderRadius: "6px",
                    overflow: "hidden",
                    marginBottom: "18px",
                    border: "1px solid var(--border-s)",
                  }}
                >
                  {project.metrics.map((m) => (
                    <div key={m.label} style={{ backgroundColor: "var(--bg-3)", padding: "14px 12px", textAlign: "center" }}>
                      <div style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--t1)",
                        letterSpacing: "-0.02em",
                      }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: "10px", color: "var(--t5)", marginTop: "3px", letterSpacing: "0.06em" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stack */}
                <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          border: 1px solid var(--border);
          border-radius: 8px;
          background-color: var(--bg-4);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .project-card:hover { border-color: var(--border-h); }

        .proj-link {
          font-size: 11px;
          color: var(--t4);
          text-decoration: none;
          font-family: var(--font-mono), monospace;
          letter-spacing: 0.06em;
          border: 1px solid var(--border);
          padding: 5px 10px;
          border-radius: 4px;
          transition: color 0.2s, border-color 0.2s;
        }
        .proj-link:hover { color: var(--t1); border-color: var(--border-h); }

        .proj-link-accent { color: var(--accent); border-color: var(--accent-border); }
        .proj-link-accent:hover { color: var(--accent) !important; background-color: var(--accent-dim2); }

        .stack-tag {
          font-size: 10px;
          font-family: var(--font-mono), monospace;
          color: var(--t5);
          border: 1px solid var(--border-s);
          background-color: var(--bg-2);
          padding: 3px 8px;
          border-radius: 3px;
          letter-spacing: 0.06em;
        }
      `}</style>
    </section>
  );
}
