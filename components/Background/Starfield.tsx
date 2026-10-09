import React, { useEffect, useRef } from "react";

interface StarfieldProps {
  className?: string;
}

interface Star {
  x: number;
  y: number;
  r: number;
  base: number;
  amp: number;
  speed: number;
  phase: number;
  lavender: boolean;
}

interface Meteor {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  trail: number;
}

const METEOR_MIN_DELAY = 5000;
const METEOR_MAX_DELAY = 9000;

/**
 * Fondo de estrellas con estrellas fugaces ocasionales.
 * Canvas transparente: se coloca absoluto sobre el fondo de la sección
 * y detrás del contenido (z-0). Pausa fuera de viewport y respeta
 * prefers-reduced-motion (dibuja un cuadro estático, sin fugaces).
 */
export default function Starfield({ className = "" }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteors: Meteor[] = [];
    let nextMeteorAt = 0;

    const seed = () => {
      const count = Math.round((width * height) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + Math.random() * 1.1,
        base: 0.22 + Math.random() * 0.45,
        amp: 0.08 + Math.random() * 0.25,
        speed: 0.0004 + Math.random() * 0.0012,
        phase: Math.random() * Math.PI * 2,
        lavender: Math.random() < 0.22,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) drawStatic();
    };

    const spawnMeteor = (now: number) => {
      const dir = Math.random() < 0.5 ? 1 : -1;
      const angle = (0.44 + Math.random() * 0.35) * (Math.PI / 2); // 40°–70° respecto a horizontal
      const speed = 312 + Math.random() * 192; // 40% más lento (antes 520–840 px/s)
      meteors.push({
        x: width * (0.15 + Math.random() * 0.7),
        y: height * (0.05 + Math.random() * 0.45),
        vx: Math.cos(angle) * speed * dir,
        vy: Math.sin(angle) * speed,
        life: 0,
        ttl: 700 + Math.random() * 400,
        trail: 90 + Math.random() * 60,
      });
      nextMeteorAt = now + METEOR_MIN_DELAY + Math.random() * (METEOR_MAX_DELAY - METEOR_MIN_DELAY);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const alpha = Math.min(1, Math.max(0.06, s.base + s.amp * Math.sin(t * s.speed + s.phase)));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.lavender
          ? `rgba(161, 161, 216, ${alpha.toFixed(3)})`
          : `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.life += 16.7;
        const p = m.life / m.ttl;
        if (p >= 1) {
          meteors.splice(i, 1);
          continue;
        }
        m.x += (m.vx * 16.7) / 1000;
        m.y += (m.vy * 16.7) / 1000;

        const fade = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
        const nx = m.vx / Math.hypot(m.vx, m.vy);
        const ny = m.vy / Math.hypot(m.vx, m.vy);
        const tx = m.x - nx * m.trail;
        const ty = m.y - ny * m.trail;

        const grad = ctx.createLinearGradient(tx, ty, m.x, m.y);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.7, `rgba(218,218,244,${(0.5 * fade).toFixed(3)})`);
        grad.addColorStop(1, `rgba(255,255,255,${(0.95 * fade).toFixed(3)})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(0.9 * fade).toFixed(3)})`;
        ctx.fill();
      }

      if (t >= nextMeteorAt && meteors.length < 2) spawnMeteor(t);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.lavender
          ? `rgba(161, 161, 216, ${s.base.toFixed(3)})`
          : `rgba(255, 255, 255, ${s.base.toFixed(3)})`;
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      nextMeteorAt = performance.now() + 2500 + Math.random() * 3000;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.02 }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    resize();
    if (reduced) drawStatic();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
