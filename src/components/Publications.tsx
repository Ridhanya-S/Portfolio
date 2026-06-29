import { publications } from "@/data/portfolio";

export default function Publications() {
  return (
    <section id="publications">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "72px 24px" }}>
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "32px",
        }}>
          Publications
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "32px" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {publications.map((p) => (
            <div
              key={p.short}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "24px",
                alignItems: "start",
                padding: "22px 24px",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                backgroundColor: "var(--bg-2)",
              }}
            >
              <div>
                <div style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--t1)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.45,
                  marginBottom: "8px",
                }}>
                  {p.title}
                </div>
                <div style={{
                  fontSize: "12px",
                  color: "var(--t4)",
                  lineHeight: 1.5,
                }}>
                  {p.venue}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px", flexShrink: 0 }}>
                <span style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-mono), monospace",
                  color: "var(--accent)",
                  backgroundColor: "var(--accent-dim)",
                  border: "1px solid var(--accent-border)",
                  padding: "3px 9px",
                  borderRadius: "4px",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}>
                  {p.type}
                </span>
                <span style={{
                  fontSize: "11px",
                  fontFamily: "var(--font-mono), monospace",
                  color: "var(--t5)",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                }}>
                  {p.short}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
