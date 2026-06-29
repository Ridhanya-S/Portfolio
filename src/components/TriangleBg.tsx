"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

interface Pt { x: number; y: number; vx: number; vy: number; }

const N     = 60;
const CONN  = 210;
const SPEED = 0.32;

function dist(a: Pt, b: Pt) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function movePts(pts: Pt[], W: number, H: number) {
  for (const p of pts) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  }
}

function fillTriangle(
  ctx: CanvasRenderingContext2D,
  a: Pt, b: Pt, c: Pt,
  dab: number,
  triColor: string,
  triFill: number,
) {
  const dac = dist(a, c);
  if (dac >= CONN) return;
  const dbc = dist(b, c);
  if (dbc >= CONN) return;
  const proximity = 1 - Math.max(dab, dac, dbc) / CONN;
  const alpha = (proximity * proximity * triFill).toFixed(4);
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.closePath();
  ctx.fillStyle = `rgba(${triColor},${alpha})`;
  ctx.fill();
}

function drawTriangles(
  ctx: CanvasRenderingContext2D,
  pts: Pt[],
  triColor: string,
  triFill: number,
) {
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      const dij = dist(pts[i], pts[j]);
      if (dij >= CONN) continue;
      for (let k = j + 1; k < N; k++) {
        fillTriangle(ctx, pts[i], pts[j], pts[k], dij, triColor, triFill);
      }
    }
  }
}

function drawEdges(
  ctx: CanvasRenderingContext2D,
  pts: Pt[],
  edgeColor: string,
  edgeMax: number,
) {
  ctx.lineWidth = 0.9;
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      const d = dist(pts[i], pts[j]);
      if (d >= CONN) continue;
      const alpha = ((1 - d / CONN) * edgeMax).toFixed(4);
      ctx.beginPath();
      ctx.moveTo(pts[i].x, pts[i].y);
      ctx.lineTo(pts[j].x, pts[j].y);
      ctx.strokeStyle = `rgba(${edgeColor},${alpha})`;
      ctx.stroke();
    }
  }
}

export default function TriangleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;

    const resize = () => {
      W = canvas.width  = globalThis.window.innerWidth;
      H = canvas.height = globalThis.window.innerHeight;
    };
    resize();
    globalThis.window.addEventListener("resize", resize, { passive: true });

    const pts: Pt[] = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * SPEED * 2,
      vy: (Math.random() - 0.5) * SPEED * 2,
    }));

    const dark      = theme === "dark";
    const triColor  = dark ? "0,229,160" : "0,140,97";
    const edgeColor = dark ? "0,229,160" : "0,140,97";
    const triFill   = dark ? 0.1  : 0.07;
    const edgeMax   = dark ? 0.28 : 0.18;

    let raf: number;

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      movePts(pts, W, H);
      drawTriangles(ctx, pts, triColor, triFill);
      drawEdges(ctx, pts, edgeColor, edgeMax);
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      globalThis.window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
