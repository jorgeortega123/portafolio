import useMainContext from "@/context/useMainContext";
import useScrollTo from "@/hooks/useScroll";
import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./sub/Button";
import H2 from "./html/H2";
import P from "./html/P";
import { Icons } from "@llampukaq/icons";
import { dataPage } from "@/context/dataPage";
import { useTranslations } from "next-intl";
import Img from "./html/Img";

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
        <div className="max-w-[1500px] w-full">
          <div className="flex flex-col lg:flex-row lg:gap-6 h-full items-start justify-center w-full">
            <div className="flex flex-col w-full  lg:max-w-1/2 ">
              <H2 size="medium" className="lg:mb-12 pt-6 mb-4">
                Acerca de mi
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
              <button className="max-w-max w-full px-6 py-3 rounded-xl text-white/90 bg-blue-500 flex items-center justify-center gap-3">
                <Icons className="stroke-white/90" icon="IconPhoneCall"></Icons>
                Contactar
              </button>
            </div>
            <div className="w-full lg:max-w-1/2">
              <H2 size="medium" className="pt-6 lg:pt-0 mb-3 lg:mb-[3rem]">
                Mis habilidades
              </H2>
              <div className="flex flex-wrap max-w-[530px] gap-5 ">
                {skills.map((e, l) => {
                  if (!e.link) return;
                  return (
                    <div
                      key={"key-skills" + e.type + l}
                      className="select-none cursor-default relative overflow-hidden flex gap-3 rounded-[9px] items-center bg-blue-500/10 px-4 py-2"
                    >
                      <Img
                        link
                        loading="lazy"
                        width="40"
                        className="w-[40px] max-w-[40px]"
                        src={e.link}
                        alt=""
                      />
                      <P className="sticky z-[12] ">{e.id}</P>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
