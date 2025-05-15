import useScrollTo from "@/hooks/useScroll";

import React from "react";
import Descarga from "./sub/Descarga";
import useMainContext from "@/context/useMainContext";
import Header from "./Header";
import HandwritingAnimation from "./TypeEfecto/HandwritingAnimation";
import NavBar from "./NavBar";
import { dataPage } from "@/context/dataPage";
import { ICONS, Icons } from "@llampukaq/icons";
import { useTranslations } from "next-intl";

function Hero() {
  const { isLoad, numberCharge } = useMainContext();
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };

  const sociaMedia = [
    {
      name: "linkedin",
      url: dataPage.social.linkedin,
      icon: "IconBrandLinkedin" as ICONS,
    },
    {
      name: "git hub",
      url: dataPage.social.github,
      icon: "IconBrandGithub" as ICONS,
    },
  ];
  const carBrands = ["Toyota", "Honda", "BMW", "Tesla", "Ford"];
  const t = useTranslations("");
  const services = t.raw("services") as string[];
  return (
    <div
      id="main-div"
      style={{
        backgroundImage: `url("/assets/svg/fondo.svg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="home-hero relative overflow-hidden pattern bg-gray-900 "
    >
      <NavBar />
      <div className="bg-[#00000040] w-full min-h-[100vh] h-full relative flex flex-col justify-between">
        <Header />
        {!isLoad && (
          <div
            className={`fixed transition-all duration-300 top-0 z-[3] h-[5px] opacity-30  left-0 bg-blue-400 w-full max-w-[${numberCharge}%]`}
          >
            {/* <div className="relative flex w-full px-12 py-2 gap-2 items-center  rounded-[14px] overflow-hidden justify-center text-white/70">
              <Icons
                className="w-12 fill-black"
                stroke="#cbdade"
                icon="loading"
              ></Icons>
              <p className="lg:text-[1.4rem]">Cargando recursos...</p>
              <div
                className={`absolute transition-loading z-[-1] left-0 h-full w-[${numberCharge}%] bg-blue-400`}
              ></div>
            </div> */}
          </div>
        )}
        <div className="flex justify-start items-center mb-[28px] px-7 md:px-auto md:mb-[5.5%] md:ml-[8.5%] h-full md:h-auto">
          <HandwritingAnimation words={services} />
          <div className="absolute opacity-0 md:opacity-100 md:left-auto bot md:right-[18.7%] md:bottom-[10%]">
            <div className="mouse" />
          </div>
        </div>
        <div className="home-hero__socials">
          {sociaMedia.map((e, l) => (
            <div key={"social" + l} className="home-hero__social">
              <a
                href={e.url}
                target="_blank"
                className="home-hero__social-icon-link"
              >
                <Icons size={28} icon={e.icon} className="stroke-gray-200" />
              </a>
            </div>
          ))}
          {/* 
          <div className="home-hero__social">
            <a
              target="_blank"
              href="https://github.com/luis030821"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="./assets/png/insta-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
        </div>

        {/* <Descarga /> */}
      </div>
    </div>
  );
}

export default Hero;
