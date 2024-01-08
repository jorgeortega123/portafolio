import useScrollTo from "@/hooks/useScroll";
import Icons from "@/style/Icons";
import React from "react";
import Descarga from "./sub/Descarga";

function Hero() {
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
    <section className="home-hero relative border border-[black] overflow-hidden ">
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
        <p className="text-primary absolute bottom-[110%]">Te invito a conocer mi trabajo!</p>
          
          <p onClick={() => handleOnClick("contact")} className="btn btn--bg">
            Proyectos
          </p>
        </div>
      </div>
      <div className="home-hero__socials">
        {sociaMedia.map((e,l) => (
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
