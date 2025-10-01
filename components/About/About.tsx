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
import SkillsSection from "./SkillsSection";
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
              {/* <Aptitudes /> */}
            </div>
            <SkillsSection />
          </div>

          {/* Sección de Aptitudes */}
        </div>
      </section>
    </>
  );
}

export default About;
