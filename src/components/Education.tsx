import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "32px",
        }}>
          Education
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "32px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {education.map((edu) => (
            <div
              key={edu.institution}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "24px",
                padding: "24px",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                backgroundColor: "var(--bg-2)",
              }}
            >
              <div>
                <div style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "var(--t1)",
                  letterSpacing: "-0.01em",
                  marginBottom: "6px",
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.03em",
                }}>
                  {edu.institution}
                </div>
              </div>
              <div style={{
                fontSize: "11px",
                color: "var(--t5)",
                fontFamily: "var(--font-mono), monospace",
                letterSpacing: "0.06em",
                flexShrink: 0,
              }}>
                {edu.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
