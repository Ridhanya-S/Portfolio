import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px" }}>
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "12px",
        }}>
          Experience
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "24px" }} />
        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--t1)",
          marginBottom: "56px",
        }}>
          Where I&apos;ve worked
        </h2>

        {experience.map((job, idx) => (
          <div
            key={job.company}
            className="exp-row"
            style={{
              paddingBottom: "48px",
              marginBottom: idx < experience.length - 1 ? "48px" : 0,
              borderBottom: idx < experience.length - 1 ? "1px solid var(--border-s)" : "none",
            }}
          >
            {/* Meta */}
            <div className="exp-meta">
              <div style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "11px",
                color: "var(--t5)",
                letterSpacing: "0.08em",
                marginBottom: "6px",
              }}>
                {job.period}
              </div>
              <div style={{ fontSize: "12px", color: "var(--t5)", marginBottom: "16px" }}>
                {job.location}
              </div>

              {/* Award badges */}
              {job.awards && (
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {(Array.isArray(job.awards) ? job.awards : [job.awards]).map((award) => (
                    <div key={award} style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10px",
                      fontFamily: "var(--font-mono), monospace",
                      color: "var(--accent)",
                      backgroundColor: "var(--accent-dim)",
                      border: "1px solid var(--accent-border)",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      letterSpacing: "0.04em",
                      lineHeight: 1.5,
                    }}>
                      ★ {award}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <div style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--t1)",
                letterSpacing: "-0.01em",
                marginBottom: "4px",
              }}>
                {job.role}
              </div>
              <div style={{
                fontSize: "13px",
                color: "var(--accent)",
                marginBottom: "24px",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.04em",
              }}>
                {job.company}
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "11px" }}>
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 40)} style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    fontSize: "14px",
                    color: "var(--t3)",
                    lineHeight: 1.7,
                  }}>
                    <span style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "11px",
                      marginTop: "3px",
                      flexShrink: 0,
                    }}>
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .exp-row  { display: grid; grid-template-columns: 200px 1fr; gap: 40px; }
        .exp-meta { padding-top: 4px; }
        @media (max-width: 640px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}
