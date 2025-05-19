import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import H2 from "./html/H2";
import P from "./html/P";

const Contributions = () => {
  const { libraries } = useMainContext();
  return (
    <div className="">
      <p>
        Subidas a <span className="fondo-bold">NPM</span> se ecuentran las
        librerias con su respectiva documentacion a forma de contribuir a la
        comunidad.
      </p>
      <ol className="" type="a">
        {libraries.map((e, l) => (
          <a key={"contribuciones" + l} href={e.link} target="_blank">
            <li className="cursor pointer rounded-[6px] flex flex-col relative before:absolute before:top-3 before:w-2 before:h-2 before:rounded-full before:left-0 before:z-[1] before:bg-[black]">
              <h3 className="hover:underline ml-3 text-[#0062b9] capitalize">
                {e.title}
              </h3>
              {/* <time className="text-[1.2rem] tracki uppercase dark:text-gray-400">
              {e.fecha}
            </time> */}
            </li>
          </a>
        ))}
      </ol>
    </div>
  );
};
const Experience_text = () => {
  return (
    <div>
      <p className="block">
        {" "}
        Trabajando como desarrollador en llampukaq (LLK).
        {/* <a
          target="_blank"
          href="https://www.llampukaq.com/team?focus=luis_ortega"
          className="underline"
        ></a> */}
      </p>
    </div>
  );
};

export default function Estadisticas() {
  const { libraries } = useMainContext();
  const datosComponente = [
    {
      bold: 3,
      title: "Años de experiencia",
      icon: "",
      info: <Experience_text />,
    },
    {
      bold: 89,
      title: "Líneas de código",
      icon: "",
      info: "Datos basados desde el repositorio de GitHub.",
    },
    {
      bold: libraries.length,
      title: "Contribuciones comunidad",
      icon: "",
      info: <Contributions />,
    },
  ];

  return (
    <div className=" py-[116px] flex items-center justify-center">
      <section className=" items-start justify-center flex flex-col md:flex-row gap-12 w-full max-w-[760px]">
        {datosComponente.map((e, l) => (
          <Children key={"acontribuciones" + l} e={e} />
        ))}
      </section>
    </div>
  );
}
const Children = ({ e }: any) => {
  const contenedorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReset, setHasReset] = useState(false);

  useEffect(() => {
    // const handleScroll = () => {
    //   if (contenedorRef.current) {
    //     const contenedorRect = contenedorRef.current?.getBoundingClientRect();
    //     const windowHeight = window.innerHeight;
    //     const contenedorEnPantalla =
    //       contenedorRect.top < windowHeight && contenedorRect.bottom >= 0;
    //     if (contenedorEnPantalla && !isVisible) {
    //       setIsVisible(true);
    //       setHasReset(false);
    //     } else if (!contenedorEnPantalla && isVisible) {
    //       setHasReset(true);
    //     }
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [isVisible]);
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      ref={contenedorRef}
      className="select-none cursor-pointer w-full md:w-1/3  flex flex-col items-center  relative"
    >
      <div className="flex justify-center items-center">
        {isVisible && (
          <H2>
            <CountUp
              delay={0.3}
              duration={3}
              start={99}
              className=" block"
              end={e.bold}
            />
          </H2>
        )}

        {e.bold === 89 ? <H2 className="">k</H2> : ""}
        <H2 className="">+</H2>
      </div>

      <P size="medium" className="text-[1.8rem] mt-[-12px] opacity-80">
        {e.title}
      </P>
      <div className="w-full py-5 estadistica-animacion-hover  max-w-[300px] cursor-pointer mt-[12px]  flex gap-2 items-center">
        <Icons
          className={`svg-custom transition-custom  ${
            open ? "rotate-90 fill-[#0a233c]" : "fill-[#ccc]"
          }`}
          icon="left"
        ></Icons>
        <p
          className={` text-[1.4rem] font-[500] text-[#272727d3] text-estadistica ${
            open ? "text-black" : ""
          }`}
        >
          Ver más
        </p>
      </div>
      <div
        className={`w-full  justify-start transition-custom overflow-hidden  ${
          open ? "max-h-[300px]" : "max-h-[0px]"
        }`}
      >
        <div className="max-w-[300px] text-estadistica text-[1.6rem] flex flex-col mx-auto text-[#0a233c]">
          {e.info}
        </div>
      </div>
    </div>
  );
};
