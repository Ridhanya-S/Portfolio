const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Map the problem before designing the solution.",
    tags: ["Process audit", "Impact analysis", "Scope definition"],
  },
  {
    num: "02",
    title: "Architect",
    desc: "Define data flow, components, and contracts upfront.",
    tags: ["System design", "API contracts", "Integration mapping"],
  },
  {
    num: "03",
    title: "Engineer",
    desc: "Build the agent's reasoning, memory, and tool use.",
    tags: ["Prompt design", "Agent logic", "Tool binding"],
  },
  {
    num: "04",
    title: "Implement",
    desc: "Production-grade code, clean APIs, maintainable pipelines.",
    tags: ["Backend APIs", "Service wiring", "Workflow code"],
  },
  {
    num: "05",
    title: "Validate",
    desc: "Test real scenarios, failure modes, and load before release.",
    tags: ["E2E testing", "Load testing", "Failure coverage"],
  },
  {
    num: "06",
    title: "Deploy",
    desc: "Ship, observe, and iterate on live data.",
    tags: ["Live rollout", "Observability", "Continuous tuning"],
  },
];

export default function Process() {
  return (
    <section id="process">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px" }}>

        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "12px",
        }}>
          How I Build
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "24px" }} />

        <h2 style={{
          fontSize: "clamp(22px, 3.5vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "var(--t1)",
          marginBottom: "10px",
        }}>
          The process behind every AI system I ship
        </h2>
        <p style={{ fontSize: "14px", color: "var(--t4)", marginBottom: "64px" }}>
          Discipline in the approach. Precision in the output.
        </p>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* Vertical spine */}
          <div style={{
            position: "absolute",
            left: "15px",
            top: "16px",
            bottom: "16px",
            width: "1px",
            backgroundColor: "var(--border)",
          }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="process-row"
                style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}
              >
                {/* Node */}
                <div style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "var(--bg-3)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "10px",
                  color: "var(--accent)",
                  letterSpacing: "0.06em",
                  position: "relative",
                  zIndex: 1,
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
                className="process-node"
                >
                  {step.num}
                </div>

                {/* Card */}
                <div
                  className="process-card"
                  style={{
                    flex: 1,
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    backgroundColor: "var(--bg-2)",
                    padding: "20px 24px",
                    marginBottom: idx < steps.length - 1 ? "8px" : 0,
                    transition: "border-color 0.2s",
                  }}
                >
                  {/* Header row */}
                  <div style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "12px",
                    marginBottom: "8px",
                  }}>
                    <span style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--t1)",
                      letterSpacing: "-0.01em",
                    }}>
                      {step.title}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-mono), monospace",
                      fontSize: "10px",
                      color: "var(--t6)",
                      letterSpacing: "0.08em",
                    }}>
                      {step.num}
                    </span>
                  </div>

                  <p style={{
                    fontSize: "13px",
                    color: "var(--t3)",
                    lineHeight: 1.65,
                    marginBottom: "14px",
                  }}>
                    {step.desc}
                  </p>

                  {/* Tags inline */}
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {step.tags.map((tag) => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono), monospace",
                        fontSize: "10px",
                        color: "var(--t5)",
                        border: "1px solid var(--border-s)",
                        backgroundColor: "var(--bg)",
                        padding: "3px 8px",
                        borderRadius: "3px",
                        letterSpacing: "0.05em",
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-row:hover .process-node {
          border-color: var(--accent-border);
          background-color: var(--accent-dim);
        }
        .process-row:hover .process-card {
          border-color: var(--border-h);
        }
      `}</style>
    </section>
  );
}
