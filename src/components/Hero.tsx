"use client";

import { useEffect, useRef } from "react";
import { personal, stats } from "@/data/portfolio";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cursorRef.current)
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === "0" ? "1" : "0";
    }, 530);
    return () => clearInterval(interval);
  }, []);

  const [line1, line2] = personal.tagline.split("\n");

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px",
        paddingTop: "80px",
      }}
    >
      {/* Status pill */}
      <div style={{ marginBottom: "32px" }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "var(--t3)",
            fontFamily: "var(--font-mono), monospace",
            border: "1px solid var(--border)",
            padding: "6px 12px",
            borderRadius: "100px",
            letterSpacing: "0.05em",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "var(--accent)",
              display: "inline-block",
              boxShadow: "0 0 6px var(--accent)",
              animation: "statusPulse 2s ease-in-out infinite",
            }}
          />{" "}
          Open to opportunities
        </span>
      </div>

      {/* Role label */}
      <div style={{ marginBottom: "16px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "13px",
            color: "var(--accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {personal.role}
        </span>
      </div>

      {/* Name */}
      <h1
        style={{
          fontSize: "clamp(36px, 7vw, 72px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--t1)",
          marginBottom: "40px",
        }}
      >
        {personal.name}
        <span ref={cursorRef} style={{ color: "var(--accent)", transition: "opacity 0.1s" }}>
          _
        </span>
      </h1>

      {/* Tagline */}
      <div
        style={{
          borderLeft: "2px solid var(--accent)",
          paddingLeft: "20px",
          marginBottom: "48px",
          maxWidth: "680px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--t1)",
            fontWeight: 500,
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            marginBottom: "10px",
          }}
        >
          {line1}
          <br />
          {line2}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "var(--t4)",
            lineHeight: 1.65,
            fontStyle: "italic",
          }}
        >
          {personal.subTagline}
        </p>
      </div>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "80px" }}>
        <a
          href="#projects"
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-mono), monospace",
            color: "var(--accent-fg)",
            backgroundColor: "var(--accent)",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            fontWeight: 600,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-mono), monospace",
            color: "var(--t3)",
            border: "1px solid var(--border)",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.04em",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--t1)";
            e.currentTarget.style.borderColor = "var(--border-h)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--t3)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          Get in Touch
        </a>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          backgroundColor: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              backgroundColor: "var(--bg-2)",
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                color: "var(--t1)",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-mono), monospace",
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: "11px", color: "var(--t5)", marginTop: "4px", letterSpacing: "0.05em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginTop: "64px",
          background: "none",
          border: "none",
          padding: "8px",
          cursor: "pointer",
        }}
      >
        <span style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--t6)",
        }}>
          scroll to explore
        </span>
        {/* Chevron arrows that pulse down */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRight: "1.5px solid var(--accent)",
                borderBottom: "1.5px solid var(--accent)",
                transform: "rotate(45deg)",
                animation: `chevronPulse 1.4s ease-in-out ${i * 0.2}s infinite`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      </button>

      <style>{`
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes chevronPulse {
          0%   { opacity: 0; transform: rotate(45deg) translateY(-4px); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: rotate(45deg) translateY(4px); }
        }
        @media (max-width: 640px) {
          #hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
