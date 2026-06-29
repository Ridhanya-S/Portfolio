"use client";

import { useState } from "react";
import { personal } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (HTTP dev context) - no-op
    }
  };

  return (
    <section id="contact">
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "96px 24px 80px" }}>

        {/* Label */}
        <div style={{
          fontFamily: "var(--font-mono), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "12px",
        }}>
          Contact
        </div>
        <div style={{ width: "40px", height: "2px", backgroundColor: "var(--accent)", marginBottom: "48px" }} />

        {/* Two-column */}
        <div className="contact-grid">

          {/* Left - copy */}
          <div>
            <h2 style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--t1)",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}>
              Let&apos;s talk.
            </h2>

            <p style={{
              fontSize: "15px",
              color: "var(--t3)",
              lineHeight: 1.75,
              marginBottom: "36px",
              maxWidth: "420px",
            }}>
              Whether it&apos;s a project, a role, or just an idea worth exploring -
              I&apos;m always open to a good conversation about AI.
            </p>

            <button
              onClick={handleEmail}
              className="email-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--accent-fg)",
                backgroundColor: "var(--accent)",
                padding: "12px 28px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.04em",
                fontWeight: 600,
                transition: "opacity 0.2s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {copied ? "✓ Copied!" : "Copy email address"}
            </button>
          </div>

          {/* Right - info card */}
          <div style={{
            border: "1px solid var(--border)",
            borderRadius: "10px",
            backgroundColor: "var(--bg-2)",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}>

            {/* Availability */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "11px",
              fontFamily: "var(--font-mono), monospace",
              color: "var(--accent)",
              backgroundColor: "var(--accent-dim)",
              border: "1px solid var(--accent-border)",
              padding: "6px 12px",
              borderRadius: "20px",
              letterSpacing: "0.06em",
              width: "fit-content",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "var(--accent)",
                animation: "statusPulse 2s ease-in-out infinite",
              }} />{" "}
              Open to opportunities
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "var(--border-s)" }} />

            {/* Email row */}
            <div>
              <div style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--t6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}>
                Email
              </div>
              <a
                href={`mailto:${personal.email}`}
                style={{
                  fontSize: "13px",
                  color: "var(--t2)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono), monospace",
                  transition: "color 0.2s",
                }}
                className="info-link"
              >
                {personal.email}
              </a>
            </div>

            {/* Location row */}
            <div>
              <div style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--t6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}>
                Location
              </div>
              <span style={{ fontSize: "13px", color: "var(--t3)", fontFamily: "var(--font-mono), monospace" }}>
                Coimbatore, India
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", backgroundColor: "var(--border-s)" }} />

            {/* Socials */}
            <div>
              <div style={{
                fontSize: "10px",
                fontFamily: "var(--font-mono), monospace",
                color: "var(--t6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                Socials
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    label: "GitHub",
                    href: personal.github,
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                    ),
                  },
                  {
                    label: "LinkedIn",
                    href: personal.linkedin,
                    icon: (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    ),
                  },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                    style={{
                      fontSize: "12px",
                      color: "var(--t4)",
                      textDecoration: "none",
                      fontFamily: "var(--font-mono), monospace",
                      letterSpacing: "0.04em",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                      transition: "color 0.2s",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {l.icon}
                      {l.label}
                    </span>
                    <span style={{ fontSize: "10px" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid var(--border-s)",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}>
        <span style={{ fontSize: "12px", color: "var(--t6)", fontFamily: "var(--font-mono), monospace" }}>
          {personal.name}
        </span>
        <span style={{ fontSize: "11px", color: "var(--t7)", fontFamily: "var(--font-mono), monospace" }}>
          Designed &amp; built by me · {new Date().getFullYear()}
        </span>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 64px;
          align-items: start;
        }
        .email-btn:hover { opacity: 0.82; }
        .info-link:hover { color: var(--accent) !important; }
        .social-link:hover { color: var(--t1) !important; }
        @keyframes statusPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
