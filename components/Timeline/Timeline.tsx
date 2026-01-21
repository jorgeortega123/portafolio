import React from "react";
import H2 from "../html/H2";
import { useTranslations } from "next-intl";

interface TimelineItem {
  name: string;
  date: string;
  role: string;
  info: string;
}

// {
//     "name": "Supermercados D'Ley",
//     "date": "Agosto 2025 - Presente",
//     "role": "Desarrollador IUX - Marketing Digital",
//     "info": "Crear diseño para la creación de un supermercado, esto incluyen Mockups, wireframes y la disposición de productos a lo largo de la app sin que saturen la experiencia del usuario. Adicionalmente la creación de Post para redes sociales"
//   },

interface TimelineProps {
  className?: string;
  title?: string;
}

export default function Timeline({ className = "", title }: TimelineProps) {
  const t = useTranslations("");
  const imageGenerator = t.raw("experience.trabajos") as TimelineItem[];
  const header = t.raw("experience") as { title: string };

  return (
    <div
      className={`py-12 px-5 lg:px-12 relative overflow-hidden ${className}`}
    >
      {/* Decoraciones de fondo - olas sutiles */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,200 600,0 900,100 C1050,150 1200,50 1200,100 L1200,580 C1050,530 900,630 600,580 C300,530 150,480 0,530 Z"
            fill="url(#wave1)"
          />
          <path
            d="M0,200 C300,300 600,100 900,200 C1050,250 1200,150 1200,200 L1200,530 C1050,480 900,580 600,530 C300,480 150,430 0,480 Z"
            fill="url(#wave2)"
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Puntos decorativos flotantes */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-15 animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-blue-500 rounded-full opacity-25"></div>
      <div className="absolute bottom-60 right-10 w-2 h-2 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">
        {title && (
          <div className="text-center mb-14">
            <H2 size="medium" className="font-bold mb-4">
              {header.title}
            </H2>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <ol className="relative border-s border-gray-200">
            {imageGenerator.map((item, index) => (
              <li key={item.name} className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <h4 className="text-md font-medium text-blue-600 mb-1">
                  {item.role}
                </h4>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.info}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
