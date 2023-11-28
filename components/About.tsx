import useScrollTo from "@/hooks/useScroll";
import React from "react";
import Marquee from "react-fast-marquee";

function About() {
  const skills = [
    {
      id: "react",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686789236/ezgif.com-resize_1_h4svpb.png",
    },
    {
      id: "html",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
    },

    {
      id: "css",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
    },
    {
      id: "javascript",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
    },
    {
      id: "typescript",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
    },
    {
      id: "vuejs",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672891267/vue_pcrlxt.png",
    },
    {
      id: "sass",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
    },
    {
      id: "tailwindcss",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
    },
    {
      id: "framer-motion",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png",
    },
    {
      id: "bootstrap",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805814/bootstrap-logo-shadow_wsyug6.png",
    },
    {
      id: "material-ui",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png",
    },
    {
      id: "nodejs",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805871/node-js-1174925_tubnek.webp",
    },
    {
      id: "express",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805507/6202fcdee5ee8636a145a41b_1234_xvfbkk.png",
    },
    {
      id: "python",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806004/267_Python-512_gt1yds.webp",
    },
    {
      id: "git",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
    },
    {
      id: "github",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806043/2111612_ftyjzh.png",
    },
    {
      id: "figma",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
    },
    {
      id: "linux",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805986/6124995_xpzgrl.png",
    },
    {
      id: "postsgres",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686788736/ezgif.com-resize_jkk1kr.png",
    },
    {
      id: "cloudfare-pages",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
    },
  ];
  const scrollToElement = useScrollTo();
  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };
  return (
    <>
      <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main">Acerca de mi</span>
            <span className="heading-sec__sub">
              Todo mi conocimiento radica en crear proyectos visualmente
              hermosos, pero no solo eso, sino que tambien me encargo de una
              manera eficiente de guardar datos, con el fin de obtimizar bases
              de datos y tener mejor experiencia a usuario.
            </span>
          </h2>
          <div className="about__content items-center">
            <div className="about__content-main items-center flex flex-col">
              <div className="about__content-details">
                <p className="about__content-details-para">
                  ¡Hola! Soy <strong> Luis Ortega </strong>, un apasionado del
                  mundo digital y un apasionado defensor de la libertad
                  creativa. He trabajado bajo la metodología del tipo
                  freelancer, colaborando en proyectos diversos para{" "}
                  <strong> agencias </strong> y <strong> startups</strong> . Mi
                  enfoque se centra en crear{" "}
                  <strong> experiencias digitales</strong> únicas y efectivas.
                </p>
                {/* <p className="about__content-details-para">
                  I'm a bit of a digital product junky. Over the years, I've
                  used hundreds of web and mobile apps in different industries
                  and verticals. Feel free to
                  <strong>contact</strong> me here.
                </p> */}
              </div>
              <p
                onClick={() => handleOnClick("contact")}
                className="btn btn--med btn--theme dynamicBgClr"
              >
                Contact
              </p>
            </div>
            <div className="about__content-skills">
              <h3 className="about__content-title">My Skills</h3>
              <div className="skills">
                {skills.map((e) => (
                  <div className="skills__skill cursor-default">{e.id}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Marquee className="mt-[55px]">
          {skills.map((e) => (
            <img
              draggable={false}
              src={e.link}
              className="gray-img w-[50px] mx-12"
            ></img>
          ))}
        </Marquee>
      </section>
    </>
  );
}

export default About;
