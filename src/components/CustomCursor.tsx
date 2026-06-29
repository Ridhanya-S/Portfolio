"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (globalThis.window.matchMedia("(pointer: coarse)").matches) return;

    // Hide native cursor globally
    const styleEl = document.createElement("style");
    styleEl.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(styleEl);

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      setVisible(true);
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);

    // Ring follows with lag
    const loop = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    globalThis.window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    loop();

    return () => {
      globalThis.window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
      styleEl.remove();
    };
  }, []);

  return (
    <>
      {/* Dot - snaps instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "7px",
          height: "7px",
          backgroundColor: "var(--accent)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />

      {/* Ring - lags behind */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "36px",
          height: "36px",
          border: "1px solid var(--accent-border2)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
          willChange: "transform",
        }}
      />
    </>
  );
}
