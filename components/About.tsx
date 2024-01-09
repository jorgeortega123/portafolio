import useMainContext from "@/context/useMainContext";
import useScrollTo from "@/hooks/useScroll";
import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./sub/Button";

function About() {
  const { skills } = useMainContext();
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h1 className="heading heading-sec heading-sec__mb-med ">
            <span className="heading-sec__main about__content-title">
              Acerca de mi
            </span>
            {/* <span className="heading-sec__sub">
              Todo mi conocimiento radica en crear proyectos visualmente
              hermosos, pero no solo eso, sino que tambien me encargo de una
              manera eficiente de guardar datos, con el fin de obtimizar bases
              de datos y tener mejor experiencia a usuario.
            </span> */}
          </h1>
          <div className="about__content items-center">
            <div className="about__content-main items-center flex flex-col">
              <div className="about__content-details">
                <p className="about__content-details-para ">
                  ¡Hola! Soy <strong> Luis Ortega</strong>, un apasionado del
                  mundo digital y defensor de la libertad creativa. He trabajado
                  bajo la metodología del tipo freelancer, colaborando en
                  proyectos diversos para <strong> agencias </strong> y{" "}
                  <strong> startups</strong> . Mi enfoque se centra en crear{" "}
                  <strong> experiencias digitales</strong> a traves de
                  Aplicaciones web únicas y efectivas.
                </p>
                {/* <p className="about__content-details-para">
                  I'm a bit of a digital product junky. Over the years, I've
                  used hundreds of web and mobile apps in different industries
                  and verticals. Feel free to
                  <strong>contact</strong> me here.
                </p> */}
              </div>
              <Button
                onClick={() => handleOnClick("contact")}
                buttonName="Contactar"
              ></Button>
            </div>
            <div className="about__content-skills">
              <h2 className="text-[3.2rem] mb-[3rem]">Mis habilidades</h2>
              <div className="skills max-w-[530px] ">
                {skills.map((e, l) => (
                  // <div className="skills__skill cursor-default relative overflow-hidden ">
                  //   <p className="flex z-[12] ml-[6px]">{e.id}</p>
                  //   <img
                  //     className="w-[40px]  filter grayscale absolute z-[0 top-1/2 left-[12px] transform -translate-x-1/2 -translate-y-1/2"
                  //     src={e.link}
                  //     alt=""
                  //   />
                  // </div>
                  <div
                    key={"key-skills" + e.type + l}
                    className="select-none skills__skill cursor-default relative overflow-hidden  "
                  >
                    <p className="sticky z-[12] tracking-wider ">{e.id}</p>
                    <img
                      className="w-[40px] h-auto p-2  filter grayscale absolute z-[0 top-1/2 left-[-55px] transform -translate-x-1/2 -translate-y-1/2"
                      src={e.link}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <Marquee className="mt-[55px]">
          {skills.map((e) => (
            <img
              draggable={false}
              src={e.link}
              className="gray-img w-[50px] mx-12"
            ></img>
          ))}
        </Marquee> */}
      </section>
    </>
  );
}

export default About;
