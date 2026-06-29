"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { personal } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
// Education is intentionally not in the nav - it flows inline between Experience and Projects

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background-color 0.3s, border-color 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono), monospace",
            fontSize: "14px",
            color: "var(--t1)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          {personal.name.split(" ")[0]}
          <span style={{ color: "var(--accent)" }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex" style={{ gap: "28px", alignItems: "center" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{
                fontSize: "13px",
                color: "var(--t3)",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "6px 8px",
              cursor: "pointer",
              color: "var(--t3)",
              display: "flex",
              alignItems: "center",
              transition: "all 0.2s",
              lineHeight: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent-border2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--t3)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "12px",
              color: "var(--accent)",
              border: "1px solid var(--accent-border2)",
              padding: "6px 14px",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "var(--font-mono), monospace",
              letterSpacing: "0.05em",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--accent-dim2)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            Resume
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex sm:hidden" style={{ gap: "12px", alignItems: "center" }}>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--t3)",
              display: "flex",
              alignItems: "center",
              padding: "4px",
            }}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => {
              const barTransforms = [
                "rotate(45deg) translate(4.5px, 4.5px)",
                "scaleX(0)",
                "rotate(-45deg) translate(4.5px, -4.5px)",
              ];
              const transform = menuOpen ? barTransforms[i] : "none";
              return (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "22px",
                    height: "1.5px",
                    backgroundColor: "var(--t3)",
                    transition: "all 0.2s",
                    transformOrigin: "center",
                    transform,
                  }}
                />
              );
            })}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "60px",
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: "var(--nav-full)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
          className="nav-mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "14px", color: "var(--t2)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "12px",
              color: "var(--accent)",
              textDecoration: "none",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            Resume ↗
          </a>
        </div>
      )}

      <style>{`
        .nav-link:hover { color: var(--t1) !important; }
      `}</style>
    </>
  );
}
