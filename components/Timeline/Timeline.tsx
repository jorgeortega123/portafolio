import React from "react";
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

export default function Timeline({ className = "", title }: TimelineProps) {
  const t = useTranslations("");
  const items = (t.raw("experience.trabajos") || []) as TimelineItem[];
  const header = t.raw("experience") as { title: string };

  return (
    <div
      className={`thin-texto antialiased py-14 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-[850px] mx-auto">
        {/* Header */}
        {title && (
          <div className="mb-10 lg:mb-12">
            <p className="text-sm font-normal tracking-wide text-emerald-600/80">
              Experiencia
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-gray-900 lg:text-3xl">
              {header.title}
            </h2>
          </div>
        )}

        {/* Timeline vertical */}
        <div className="relative">
          {/* Línea vertical */}
          <div
            aria-hidden
            className="absolute top-2 bottom-2 left-3 sm:left-4 w-px bg-gray-200"
          />
          <ol className="space-y-9">
            {items.map((item, i) => {
              const isPresent = PRESENT_RE.test(item.date);
              return (
                <li key={item.name + i} className="relative pl-8 sm:pl-10">
                  {/* Nodo */}
                  <span
                    className={`absolute left-3 sm:left-4 -translate-x-1/2 top-1 grid place-items-center w-5 h-5 rounded-full ring-4 ring-white ${
                      isPresent
                        ? "bg-emerald-500"
                        : "bg-emerald-500/25 ring-emerald-50"
                    }`}
                  >
                    {isPresent && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </span>

                  {/* Contenido */}
                  <div className="min-w-0">
                    <time className="block text-xs font-medium text-emerald-600/80 mb-1">
                      {item.date}
                    </time>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                        {item.name}
                      </h3>
                      {isPresent && (
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                          Actual
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-600 mt-0.5">
                      {item.role}
                    </p>
                    {item.info && (
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">
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
  );
}
