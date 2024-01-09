import useScrollTo from "@/hooks/useScroll";
import Icons from "@/style/Icons";
import React from "react";
import Descarga from "./sub/Descarga";
import useMainContext from "@/context/useMainContext";

function Hero() {
  const { isLoad,numberCharge } = useMainContext();
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };

  const sociaMedia = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/luis-ortega-a866a3218",
      icon: "./assets/png/linkedin-ico.png",
    },
    {
      name: "git hub",
      url: "https://github.com/luis030821",
      icon: "./assets/png/github-ico.png",
    },
  ];
  return (
    <section className="home-hero relative overflow-hidden ">
      {!isLoad && (
        <div className="absolute z-[3]  border border-blue-800/60 bottom-5 rounded-[22px] left-5">
          <div className="relative flex w-full px-12 py-2 gap-2 items-center  rounded-[22px] overflow-hidden justify-center text-white/70">
            <Icons
              className="w-12 fill-black"
              stroke="#cbdade"
              icon="loading"
            ></Icons>
            <p className="lg:text-[1.4rem]">Cargando recursos...</p>
            <div className={`absolute transition-loading z-[-1] left-0 h-full w-[${numberCharge}%] bg-blue-400`}></div>
          </div>
        </div>
      )}

      <img
        draggable={false}
        src="/assets/png/backgrounds/hexagonal.png"
        className="absolute  top-0 left-0 object-cover md:w-full h-[110%] "
        alt=""
      />
      <div className="home-hero__content tracking-wide ">
        <h1 className="heading-primary">
          Hey! me llamo <span className="font-bold">Luis Ortega</span>
        </h1>
        <div className="home-hero__info text-left pb-7">
          <p className="text-primary text-white/90  ">
            Soy un apasionado programador con amplios conocimientos en frontend
            y backend usando typescript con experiencia en el desarrollo de
            aplicaciones web innovadoras y escalables donde la creatividad es lo
            primero.
          </p>
        </div>
        <div className="home-hero__cta cursor-pointer relative">
          <p className="text-primary absolute bottom-[110%]">
            Te invito a conocer mi trabajo!
          </p>

          <p onClick={() => handleOnClick("contact")} className="btn btn--bg">
            Proyectos
          </p>
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
              <img src={e.icon} alt="icon" className="home-hero__social-icon" />
            </a>
          </div>
        ))}

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
        </div>
      </div>
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse" />
      </div>
      <Descarga />
    </section>
  );
}

export default Hero;
