import useMainContext from "@/context/useMainContext";
import useScrollTo from "@/hooks/useScroll";
import React from "react";
import Marquee from "react-fast-marquee";
import H2 from "../html/H2";
import P from "../html/P";
import { Icons } from "@llampukaq/icons";
import { dataPage } from "@/context/dataPage";
import { useTranslations } from "next-intl";
import Img from "../html/Img";
import Aptitudes from "./Aptitudes";
import { Button } from "@heroui/react";

function About() {
  const t = useTranslations("about");
  const { skills } = useMainContext();
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };

  return (
    <>
      <section
        id="about"
        className="bg-white z-[3]  min-h-[90vh] flex items-center justify-center"
      >
        <div className="max-w-[1500px] w-full px-6">
          <div className="flex flex-col lg:flex-row lg:gap-6 h-full items-start justify-center w-full">
            <div className="flex flex-col w-full sm:items-end lg:items-start  lg:max-w-1/2 lg:pr-12 ">
              <H2 size="medium" className=" mb-4 ">
                {t("title")}
              </H2>
              <P
                size="medium"
                className="h-auto leading-7 max-w-[420px] text-black/90"
              >
                <div className="mb-2">
                  {t("greeting")}
                  <strong className="mb-2">{t("name")}</strong>
                  {t("text")}
                  <span className="block my-2">{t("secondaryText")}</span>
                </div>

                {/* <span className="mb-3 block">
                  Hola, Soy <strong>{dataPage.nombre}</strong>, programador con
                  más de 3 años de experiencia estos incluyen trabajos como
                  programador en empresas y como vendedor de servicios web
                </span>
                <span className="mb-5 block">
                  ¡Bienvenido a mi portafolio! Descubre los proyectos que he
                  desarrollado y aprende más sobre mi trayectoria profesional.
                </span> */}
              </P>
              <Button
                size="lg"
                color="success"
                startContent={
                  <Icons
                    className="stroke-white/90"
                    icon="IconPhoneCall"
                  ></Icons>
                }
                className="max-w-max w-full px-6 py-3 rounded-xl text-white/90 bg-blue-500 flex items-center justify-center gap-3"
                onClick={() => handleOnClick("contact")}
              >
                {t("contact")}
              </Button>
              <Aptitudes />
            </div>
            <div className="w-full lg:max-w-1/2">
              <H2 size="medium" className="pt-6 lg:pt-0 mb-3 lg:mb-[3rem]">
                {t("skills")}
              </H2>

              {/* Plus Conocimiento - IA Integration Container */}
              <div className="relative mb-8 p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-blue-500/30 shadow-2xl overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-yellow-400/10"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon container */}
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500 to-yellow-500 shadow-lg">
                    <Icons
                      className="stroke-white"
                      icon="IconSparkles"
                      size={28}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text mb-2">
                      Plus Conocimiento
                    </h3>
                    <p className="text-gray-300 text-md leading-relaxed">
                      Especializado en la{" "}
                      <span className="text-blue-400 font-medium">
                        implementación de APIs de IA
                      </span>{" "}
                      en aplicaciones existentes, integrando servicios de{" "}
                      <span className="text-yellow-400 font-medium">
                        OpenAI, Google AI, Claude
                      </span>{" "}
                      y otros proveedores para potenciar funcionalidades
                      {/* mediante{" "}
                      <span className="text-blue-400 font-medium">
                        procesamiento de lenguaje natural
                      </span>{" "}
                      y
                      <span className="text-yellow-400 font-medium">
                        {" "}
                        automatización inteligente
                      </span> */}
                      .
                    </p>
                  </div>

                  {/* Animated pulse dot */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-yellow-500"></div>
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-full">
                {skills.map((e, l) => {
                  if (!e.link) return;
                  return (
                    <div
                      key={"key-skills" + e.type + l}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                      style={{
                        padding: "clamp(0.75rem, 2vw, 1rem)",
                        minHeight: "clamp(80px, 10vh, 100px)",
                      }}
                    >
                      {/* Fondo decorativo */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-2">
                        {/* Contenedor de imagen con efecto B&N a color */}
                        <div className="relative flex-shrink-0">
                          <Img
                            link
                            loading="lazy"
                            width="36"
                            className="w-9 h-9 sm:w-10 sm:h-10 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:brightness-110"
                            src={e.link}
                            alt={e.id}
                            style={{
                              width: "clamp(2rem, 3vw, 2.5rem)",
                              height: "clamp(2rem, 3vw, 2.5rem)",
                            }}
                          />

                          {/* Efecto de brillo al hacer hover */}
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                        </div>

                        {/* Texto del skill */}
                        <P
                          className="text-center font-medium text-gray-700 group-hover:text-blue-700 transition-colors duration-300 leading-tight"
                          style={{
                            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                          }}
                        >
                          {e.id}
                        </P>
                      </div>

                      {/* Efecto de partículas/brillo opcional */}
                      <div className="absolute top-0 right-0 w-6 h-6 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transform translate-x-2 -translate-y-2 group-hover:animate-bounce transition-all duration-500 delay-100" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sección de Aptitudes */}
        </div>
      </section>
    </>
  );
}

export default About;
