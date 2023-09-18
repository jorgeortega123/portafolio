import React from "react";
import Stars from "../stars/Stars";
import { H1, Icons, useT } from "cllk";
import { Parallax } from "react-scroll-parallax";

function Hero() {
  const { t } = useT();
  return (
    <div className="h-screen gradient-initial ">
      <div className="h-full z-[1] flex flex-col items-center justify-center relative">
        <div className="absolute w-full h-full z-[-1] ">
          <Stars></Stars>
        </div>
        <Parallax
          translateY={[30, -30]}
          className="flex flex-col justify-center items-center"
        >
          <H1 span size={"4rem"}>
            Luis Ortega
          </H1>
          <H1 size={"3rem"}>{t("Desarrollo web", "Web Developer")}</H1>
          <H1 size={"2rem"}>{t("Portafolio", "Briefcase")} </H1>
          <div className="flex space-x-5">
            <Icons size={70} icon="IconBrandLinkedin" />
            <Icons size={70} icon="IconBrandGithub" />
            <Icons size={70} icon="IconBrandFacebook" />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default Hero;
