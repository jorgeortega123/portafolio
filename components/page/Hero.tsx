import React from "react";
import { H1, Icons, useIsDesktop, useT } from "cllk";
import Star from "../stars/Star";

function Hero() {
  const { t } = useT();
  const { isDesktop } = useIsDesktop();
  return (
    <div className="h-screen">
      <div className="h-full z-[1] flex flex-col items-center justify-center relative">
        <div className="absolute w-full h-full z-[-1] ">
          <Star />
        </div>
        <div className="flex flex-col justify-center items-center">
          <H1 span size={isDesktop ? "9em" : "4em"}>
            Luis Ortega
          </H1>
          <H1 size={isDesktop ? "4em" : "2em"}>
            {t("Desarrollo web", "Web Developer")}
          </H1>
          <H1 size={isDesktop ? "3em" : "2em"}>
            {t("Portafolio", "Briefcase")}{" "}
          </H1>
          <div className="flex space-x-5">
            <div
              className="w-min"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/luis-ortega-a866a3218/"
                );
              }}
            >
              <Icons size={70} icon="IconBrandLinkedin" />
            </div>
            <div
              className="w-min"
              onClick={() => {
                window.open("https://github.com/luis030821");
              }}
            >
              <Icons size={70} icon="IconBrandGithub" />
            </div>
            <div
              className="w-min"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/profile.php?id=100018408583124"
                );
              }}
            >
              <Icons size={70} icon="IconBrandFacebook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
