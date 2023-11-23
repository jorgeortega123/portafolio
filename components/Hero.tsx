import useScrollTo from "@/hooks/useScroll";
import Icons from "@/style/Icons";
import React from "react";

function Hero() {
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };

  const sociaMedia = [
 
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/luis-ortega-a866a3218",
      icon: "./assets/png/linkedin-ico.png"
    },
    {
      name: "git hub",
      url: "https://github.com/luis030821",
      icon: "./assets/png/github-ico.png"
    },
  ];
  return (
    <section className="home-hero">
      <div className="home-hero__content">
        <h1 className="heading-primary">
          Hey, me llamo <span className="font-bold">Luis Ortega</span>{" "}
        </h1>
        <div className="home-hero__info">
          <p className="text-primary">
            Soy un apasionado programador full stack con experiencia en el
            desarrollo de aplicaciones web innovadoras y escalables.
          </p>
        </div>
        <div className="home-hero__cta">
          <p onClick={() => handleOnClick("contact")} className="btn btn--bg">
            Proyectos
          </p>
        </div>
      </div>
      <div className="home-hero__socials">
      {sociaMedia.map((e) => (
          <div className="home-hero__social">
            <a href={e.url} target="_blank" className="home-hero__social-icon-link">
              <img
                src={e.icon}
                alt="icon"
                className="home-hero__social-icon"
              />
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
      <div className="absolute bottom-6 right-6 cursor-pointer">
        <div className="p-2 gap-2 flex justify-center items-center border rounded-[6px] px-6">
          <Icons className="w-7 h-7" icon="download"></Icons>
          <p className="text-[1.6rem] font-bold">Descargar CV</p>
        </div>


      </div>
    </section>
  );
}

export default Hero;
