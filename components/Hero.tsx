import useScrollTo from "@/hooks/useScroll";
import Icons from "@/style/Icons";
import React from "react";
import Descarga from "./sub/Descarga";
import useMainContext from "@/context/useMainContext";
import Header from "./Header";
import HandwritingAnimation from "./TypeEfecto/HandwritingAnimation";
import NavBar from "./NavBar";

function Hero() {
  const { isLoad, numberCharge } = useMainContext();
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
  const carBrands = ["Toyota", "Honda", "BMW", "Tesla", "Ford"];
  const services = [
    "Diseño y creación de bases de datos SQL y NoSQL",
    "Integración de sistemas y APIs",
    "Despliegue y administración de aplicaciones en la nube",
    "Optimización y mantenimiento de aplicaciones existentes",
  ];
  return (
    <div
      id="main-div"
      style={{
        backgroundImage: `url("/assets/svg/fondo.svg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="home-hero relative overflow-hidden "
    >
      <NavBar />
      <div className="bg-[#00000040] w-full min-h-[80vh] h-full relative flex flex-col justify-between">
        <Header />
        {!isLoad && (
          <div className="absolute z-[3] opacity-50  border border-blue-800/60 bottom-5 rounded-[14px] left-5">
            <div className="relative flex w-full px-12 py-2 gap-2 items-center  rounded-[14px] overflow-hidden justify-center text-white/70">
              <Icons
                className="w-12 fill-black"
                stroke="#cbdade"
                icon="loading"
              ></Icons>
              <p className="lg:text-[1.4rem]">Cargando recursos...</p>
              <div
                className={`absolute transition-loading z-[-1] left-0 h-full w-[${numberCharge}%] bg-blue-400`}
              ></div>
            </div>
          </div>
        )}
        <div className="flex justify-start items-center  mb-[10.5%] ml-[10.5%] h-full md:h-auto">
          <HandwritingAnimation words={services} />
          <div className="absolute right-[18.7%] bottom-[10%]">
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

        {/* <Descarga /> */}
      </div>
    </div>
  );
}

export default Hero;
{
  /* <img
        draggable={false}
        src="/assets/png/backgrounds/hexagonal.png"
        className="absolute  top-0 left-0 object-cover md:w-full h-[110%] "
        alt=""
      /> */
}
{
  /* <div className="home-hero__content tracking-wide  ">
          <h1 className="heading-primary">
            Hey! me llamo <span className="font-bold">Luis Ortega</span>
          </h1>
          <div className="home-hero__info text-left pb-7">
            <p className="text-primary text-white/90  ">
              Soy un apasionado programador con amplios conocimientos en
              frontend y backend usando typescript con experiencia en el
              desarrollo de aplicaciones web innovadoras y escalables donde la
              creatividad es lo primero.
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
        </div> */
}
