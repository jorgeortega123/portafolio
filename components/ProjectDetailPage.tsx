import React from "react";
import Link from "next/link";
import Head from "next/head";
import Img from "./html/Img";
import useMainContext from "@/context/useMainContext";
import { useTranslations } from "next-intl";
import ZoomComponentWithModal from "./layout/ZoomComponentWithModal";

const rgbBorderStyle = `
  @keyframes rgb-border {
    0% { border-color: #ff0000; }
    8.33% { border-color: #ff8000; }
    16.66% { border-color: #ffff00; }
    25% { border-color: #80ff00; }
    33.33% { border-color: #00ff00; }
    41.66% { border-color: #00ff80; }
    50% { border-color: #00ffff; }
    58.33% { border-color: #0080ff; }
    66.66% { border-color: #0000ff; }
    75% { border-color: #8000ff; }
    83.33% { border-color: #ff00ff; }
    91.66% { border-color: #ff0080; }
    100% { border-color: #ff0000; }
  }
`;

interface ProjectDetailPageProps {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  img: string;
  web: string;
  repo?: string;
  update?: string;
}

export default function ProjectDetailPage({
  title,
  subtitle,
  description,
  tags,
  img,
  web,
  repo,
  update,
}: ProjectDetailPageProps) {
  const { skills } = useMainContext();
  const t = useTranslations("projectDetail");

  return (
    <>
      <style jsx>{rgbBorderStyle}</style>
      <Head>
        <title>{`${title} | Jorge Ortega`}</title>
        <meta name="description" content={description?.replace(/<[^>]*>/g, "")} />
      </Head>

      <div className="min-h-screen bg-[#111827]">
        {/* Hero banner con imagen de fondo */}
        <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-[#111827]/60 to-[#111827] z-10" />
          <Img
            link
            src={img}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-end max-w-[1400px] mx-auto px-6 pb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 w-fit group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              {t("back")}
            </Link>
            <p className="text-blue-400 text-sm font-medium uppercase tracking-widest mb-3">
              Proyecto
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-none tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-white/60 mt-4 max-w-2xl">{subtitle}</p>
            )}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-[1400px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna izquierda — descripción */}
            <div className="lg:col-span-2 space-y-10">
              {/* Preview imagen con zoom */}
              <div className="group relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700/40 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-10" />
                <div className="p-4">
                  <ZoomComponentWithModal item={{ img }} />
                </div>
              </div>

              {/* Descripción */}
              <div className="bg-gradient-to-br from-gray-800/30 via-gray-800/40 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/40 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t("about")}
                </h2>
                <div
                  className="text-gray-300 text-lg leading-relaxed space-y-4 [&_span.text-bold]:text-white [&_span.text-bold]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>

              {/* Update alert */}
              {update && (
                <div className="relative overflow-hidden bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
                  <p className="text-amber-200 ml-3">{update}</p>
                </div>
              )}
            </div>

            {/* Columna derecha — sidebar */}
            <div className="space-y-8">
              {/* Links de acción */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="relative z-10 space-y-4">
                  <a
                    href={web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white text-blue-700 px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {t("visit")}
                  </a>
                  {repo && (
                    <a
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold w-full backdrop-blur-sm"
                    >
                      <svg className="fill-white" height="20" viewBox="0 0 16 16" width="20">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      {t("code")}
                    </a>
                  )}
                </div>
              </div>

              {/* Tecnologías */}
              <div className="bg-gradient-to-br from-gray-800/30 via-gray-800/40 to-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-700/40 p-6">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  {t("technologies")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => {
                    const skill = skills.find(
                      (s) => s.id.toLowerCase() === tag.toLowerCase()
                    );
                    return (
                      <div
                        key={`tag-${i}`}
                        className="group/tag relative flex gap-2 items-center bg-zinc-800/40 border border-zinc-700/30 text-zinc-200 px-2.5 py-1.5 rounded-lg transition-all duration-300 hover:bg-zinc-700/50"
                      >
                        <div className="absolute inset-0 rounded-lg border-2 border-transparent opacity-0 group-hover/tag:opacity-100 group-hover/tag:animate-[rgb-border_2s_linear_infinite] transition-opacity duration-300" />
                        {skill?.link && (
                          <Img
                            className="max-w-[22px] w-full p-0.5 transition-transform duration-200 group-hover/tag:scale-105"
                            link
                            src={skill.link}
                            alt={skill.id}
                            q={10}
                          />
                        )}
                        <span className="text-xs font-medium group-hover/tag:text-zinc-100 transition-colors duration-200">
                          {skill?.id || tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Volver */}
              <Link
                href="/#projects"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-full border border-gray-700 group-hover:border-gray-500 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </div>
                <span className="text-sm font-medium">{t("backToProjects")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
