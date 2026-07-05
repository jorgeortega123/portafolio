import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import useNavigation from "./hooks/useNavigation";
import { Icons } from "@llampukaq/icons";
import ZoomableImage from "./layout/ZoomComponenteProduct";
import useMainContext from "@/context/useMainContext";
import Img from "./html/Img";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { slugify } from "@/hooks/slugify";

type Project = {
  img: string;
  title: string;
  about: string;
  tags: string[];
  web: string;
  repo: string;
  onGroup: boolean;
};

export default function ProyectosPersonales() {
  const { skills } = useMainContext();
  const { goToUrl } = useNavigation();
  const t = useTranslations("personalProjects");
  const tProjects = useTranslations("");
  const proyects = (tProjects.raw("proyects") || []) as Project[];

  return (
    <div
      id="proyectos"
      className="thin-texto antialiased py-14 px-4 sm:px-6 lg:px-8 bg-[#111827]"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-10 lg:mb-12">
          <p className="text-sm font-normal tracking-wide text-emerald-400/70">
            {t("subtitle")}
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">
            {t("title")}
          </h1>
          <div className="max-w-[720px]">
            <p className="mt-4 text-gray-300 text-base lg:text-lg leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>

        {/* Bento asimétrico: #01 y #04 anchas (col-span-2), #02 y #03 compactas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(300px,1fr)]">
          {proyects.map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            // Cards anchas (col-span-2) para que el bento cierre sin huecos:
            // el primer proyecto siempre es el destacado; con 4 proyectos
            // también la última (patrón 2 anchas + 2 normales = 6 cols).
            const isWide =
              index === 0 ||
              (proyects.length === 4 && index === proyects.length - 1);
            return (
              <ProyectoCard
                key={"proyecto-" + index}
                item={item}
                num={num}
                isWide={isWide}
                skills={skills}
                goToUrl={goToUrl}
                labels={{
                  seeMore: t("seeMore"),
                  visit: t("visit"),
                  code: t("code"),
                  close: t("close"),
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Card individual del bento: imagen de fondo + overlay + info encima */
/* ------------------------------------------------------------------ */

type Skill = { id: string; link?: string };
type GoToUrl = (url: string) => void;

function ProyectoCard({
  item,
  num,
  isWide,
  skills,
  goToUrl,
  labels,
}: {
  item: Project;
  num: string;
  isWide: boolean;
  skills: Skill[];
  goToUrl: GoToUrl;
  labels: { seeMore: string; visit: string; code: string; close: string };
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imgLoaded, setImgLoaded] = useState(false);

  const matched = item.tags
    .map((tag) => skills.find((s) => s.id.toLowerCase() === tag.toLowerCase()))
    .filter(Boolean) as Skill[];

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-gray-700/40 hover:border-gray-500/60 bg-gray-900 min-h-[300px] flex flex-col justify-end transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 ${
        isWide ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Imagen de fondo (envuelta en div absolute porque <Img> fuerza position:relative) */}
      <div className="absolute inset-0">
        <Img
          link
          width={isWide ? "1200" : "760"}
          src={item.img}
          alt={item.title}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover object-top transition-all duration-700 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-[1.04]`}
        />
      </div>

      {/* Overlay gradiente (legibilidad) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-gray-950/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gray-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

      {/* Botón de zoom (esquina) */}
      <button
        type="button"
        onClick={onOpen}
        aria-label="Ampliar imagen"
        className="absolute top-3 right-3 z-20 grid place-items-center w-9 h-9 rounded-lg bg-gray-950/50 border border-white/10 text-gray-200 backdrop-blur-sm hover:bg-gray-950/70 hover:text-white transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M208 48V16H16v192h32V70.627l160.687 160.686l22.626-22.626L70.627 48H208zm256 256v137.373L299.313 276.687l-22.626 22.626L441.373 464H304v32h192V304h-32z" />
        </svg>
      </button>

      {/* Número de índice */}
      <span className="absolute top-4 left-5 z-20 text-xs tracking-[0.2em] text-emerald-400/80">
        #{num}
      </span>

      {/* Contenido */}
      <div className="relative z-10 p-5 lg:p-6 flex flex-col gap-3">
        {/* Título clicable (va a la web) */}
        <button
          type="button"
          onClick={() => goToUrl(item.web)}
          className="flex items-center gap-2 self-start text-left group/title"
        >
          <h3
            className={`font-semibold text-white leading-tight ${
              isWide ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
            }`}
          >
            {item.title}
          </h3>
          <Icons
            icon="IconLink"
            className="shrink-0 stroke-gray-300 group-hover/title:stroke-white group-hover/title:rotate-90 transition-transform duration-300"
          />
        </button>

        {/* Descripción: completa en anchas, 2 líneas en compactas */}
        {item.about && (
          <div
            className={`normalText text-gray-300/90 leading-relaxed ${
              isWide
                ? "text-sm lg:text-[15px] line-clamp-3"
                : "text-[13px] line-clamp-2"
            }`}
            dangerouslySetInnerHTML={{ __html: item.about }}
          />
        )}

        {/* Tags / tecnologías — iconos sutiles (gris por defecto, color al hover) */}
        {matched.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {matched.map((skill) => (
              <span
                key={skill.id}
                className="group/tag flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300/80 text-xs backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:text-gray-100"
              >
                {skill.link && (
                  <Img
                    className="w-4 h-4 object-contain grayscale opacity-50 transition-all duration-300 group-hover/tag:grayscale-0 group-hover/tag:opacity-100"
                    link
                    src={skill.link}
                    alt={skill.id}
                    q={20}
                  />
                )}
                {skill.id}
              </span>
            ))}
          </div>
        )}

        {/* Acciones */}
        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            href={`/proyecto/${slugify(item.title)}`}
            className="inline-flex items-center rounded-lg bg-emerald-500 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-400 transition-all duration-300 shadow-sm hover:shadow-emerald-500/40"
          >
            {labels.seeMore}
          </Link>
          <button
            type="button"
            onClick={() => goToUrl(item.web)}
            className="inline-flex items-center rounded-lg border border-white/15 text-gray-100 px-4 py-2 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            {labels.visit}
          </button>
          <button
            type="button"
            onClick={() => goToUrl(item.repo)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 text-gray-100 px-4 py-2 text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="fill-current"
              height="16"
              viewBox="0 0 16 16"
              width="16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            {labels.code}
          </button>
        </div>
      </div>

      {/* Modal de zoom (reutiliza ZoomableImage) */}
      <Modal
        className="bg-white rounded-lg"
        size="5xl"
        isOpen={isOpen}
        scrollBehavior="inside"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {item.title}
              </ModalHeader>
              <ModalBody>
                <ZoomableImage imagen={item.img} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  {labels.close}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </article>
  );
}
