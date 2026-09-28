import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface TimelineItem {
  name: string;
  date: string;
  role: string;
  info: string;
}

interface TimelineProps {
  className?: string;
  title?: string;
}

const PRESENT_RE = /presente|present|至今|ahora|current/i;
const YEAR_RE = /\d{4}/g;

export default function Timeline({ className = "", title }: TimelineProps) {
  const t = useTranslations("");
  const items = (t.raw("experience.trabajos") || []) as TimelineItem[];
  const header = t.raw("experience") as { title?: string; eyebrow?: string };

  // Datos derivados de las fechas reales (seguro entre idiomas).
  const years = items
    .flatMap((it) => (it.date.match(YEAR_RE) ?? []).map(Number))
    .filter((y) => Number.isFinite(y));
  const range = years.length
    ? `${Math.min(...years)} — ${Math.max(...years)}`
    : null;
  const count = String(items.length).padStart(2, "0");

  const listRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Línea de progreso ligada al scroll (mutación directa, sin re-render por frame).
  useEffect(() => {
    const list = listRef.current;
    const bar = progressRef.current;
    if (!list || !bar) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = list.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = Math.min(
        1,
        Math.max(0, (vh * 0.7 - r.top) / (r.height + vh * 0.2))
      );
      bar.style.height = `${(p * 100).toFixed(2)}%`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Reveal al entrar en viewport + item "activo" según el centro de la pantalla.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const nodes = Array.from(
      list.querySelectorAll<HTMLElement>("[data-tl-item]")
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("tl-in"));
      return;
    }

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("tl-in");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    nodes.forEach((n) => reveal.observe(n));

    const focus = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setActive(Number((e.target as HTMLElement).dataset.index) || 0);
        }),
      { rootMargin: "-45% 0px -45% 0px" }
    );
    nodes.forEach((n) => focus.observe(n));

    return () => {
      reveal.disconnect();
      focus.disconnect();
    };
  }, [items.length]);

  return (
    <div
      className={`thin-texto antialiased relative py-16 sm:py-20 lg:py-24 2xl:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-[850px] px-4 sm:px-6 lg:max-w-[1200px] lg:px-8 2xl:max-w-[1500px]">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-14 2xl:gap-24">
          {/* Panel izquierdo — calibrado sobre la curva navy de ExperienceShape */}
          {title && (
            <div className="relative mb-12 lg:mb-0 lg:flex lg:w-[38%] lg:shrink-0">
              <div className="relative flex w-full flex-col justify-center px-6 py-10 lg:py-16 lg:pl-12 2xl:pl-16">
                {/* Contador fantasma: número real de posiciones */}
                <span
                  aria-hidden
                  className="fondo-bold pointer-events-none absolute left-6 top-1/2 -z-10 hidden -translate-y-1/2 select-none text-[9rem] leading-none text-white/[0.07] lg:block 2xl:left-10 2xl:text-[11rem]"
                >
                  {count}
                </span>

                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-emerald-400/80" />
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-emerald-600 lg:text-emerald-300">
                    {header.eyebrow ?? "Experiencia"}
                  </p>
                </div>
                <h2 className="mt-4 text-4xl font-semibold text-[#17175a] sm:text-5xl lg:mt-5 lg:text-white 2xl:text-6xl">
                  {header.title}
                </h2>
                {range && (
                  <p className="mt-5 text-sm tracking-[0.25em] text-gray-400 lg:text-white/50">
                    {range}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Timeline */}
          <div className="relative min-w-0 flex-1">
            <div ref={listRef} className="relative">
              {/* Raíl base + línea de progreso */}
              <div
                aria-hidden
                className="absolute bottom-3 left-4 top-3 w-px bg-gray-200"
              />
              <div
                aria-hidden
                ref={progressRef}
                className="absolute left-4 top-3 w-px origin-top bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600"
                style={{ height: "0%" }}
              />

              <ol className="relative space-y-0">
                {items.map((item, i) => {
                  const isPresent = PRESENT_RE.test(item.date);
                  const isActive = i === active;
                  const isPast = i < active;
                  const ghostYear = (item.date.match(YEAR_RE) ?? [])[0];

                  const nodeCls = isPresent
                    ? "bg-emerald-500 ring-4 ring-emerald-500/20"
                    : isPast || isActive
                      ? "bg-emerald-500 ring-4 ring-white"
                      : "bg-gray-300 ring-4 ring-white";

                  return (
                    <li
                      key={item.name + i}
                      data-tl-item
                      data-index={i}
                      className={`group relative pl-10 sm:pl-12 lg:pl-14 ${
                        i > 0
                          ? "mt-8 border-t border-gray-100 pt-10 lg:mt-12 lg:pt-12"
                          : "pb-1"
                      }`}
                    >
                      {/* Nodo */}
                      <span
                        aria-hidden
                        className={`absolute left-4 top-[13px] -translate-x-1/2 transition-transform duration-500 ${
                          isActive ? "scale-125" : "scale-100"
                        }`}
                      >
                        {isPresent && (
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                        )}
                        <span
                          className={`relative inline-flex h-3 w-3 rounded-full transition-colors duration-500 ${nodeCls}`}
                        />
                      </span>

                      {/* Año fantasma (solo pantallas anchas) */}
                      {ghostYear && (
                        <span
                          aria-hidden
                          className={`fondo-bold pointer-events-none absolute -top-4 right-0 hidden select-none text-[5.5rem] leading-none transition-colors duration-700 2xl:block ${
                            isActive
                              ? "text-[#17175a]/[0.13]"
                              : "text-[#17175a]/[0.06]"
                          }`}
                        >
                          {ghostYear}
                        </span>
                      )}

                      {/* Contenido */}
                      <div className="min-w-0 2xl:max-w-[700px] 2xl:pr-44">
                        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-emerald-600/90">
                          {item.date}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold leading-tight text-[#17175a] transition-colors duration-300 group-hover:text-emerald-700 2xl:text-[1.8rem]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-[15px] font-medium text-gray-500">
                          {item.role}
                        </p>
                        {item.info && (
                          <p className="tl-pretty mt-3 text-[15px] leading-[1.85] text-gray-500">
                            {item.info}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
