import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React, { useState } from "react";
import CountUp from "react-countup";

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
        {libraries.map((e) => (
          <a href={e.link}>
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
        Trabajando como Frontend Developer en <span>LLK.</span>
      </p>
      <p>
        Mi rol ha sido componetizar y encapsular piezas de código para optimizar
        el funcionamiento de aplicaciones web.
      </p>
    </div>
  );
};

export default function Estadisticas() {
  const datosComponente = [
    {
      bold: 2,
      title: "Años de experiencia",
      icon: "",
      info: <Experience_text />,
    },
    {
      bold: 8,
      title: "Líneas de código",
      icon: "",
      info: "Datos basados desde el repositorio de GitHub, esta cifra incluye proyectos no asociados a la plataforma.",
    },
    {
      bold: 7,
      title: "Contribuciones comunidad",
      icon: "",
      info: <Contributions />,
    },
  ];

  return (
    <div className=" mb-[116px] flex items-center justify-center">
      <section className=" items-start justify-center flex flex-col md:flex-row gap-12 w-full max-w-[760px]">
        {datosComponente.map((e) => (
          <Children e={e} />
        ))}
      </section>
    </div>
  );
}
const Children = ({ e }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full md:w-1/3  flex flex-col items-center  relative">
      <div className="flex justify-center items-center">
        <p className="fondo-bold text-[8rem] block">+</p>
        <CountUp className="fondo-bold text-[8rem] block" end={e.bold} />
        {e.bold === 8 ? <p className="fondo-bold text-[8rem]">k</p> : ""}
      </div>

      <p className="text-[1.8rem] mt-[-12px]">{e.title}</p>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="w-full py-5 estadistica-animacion-hover  max-w-[300px] cursor-pointer mt-[12px]  flex gap-2 items-center"
      >
        <Icons
          className={`svg-custom transition-custom  ${
            open ? "rotate-90 fill-[#0a233c]" : "fill-[#ccc]"
          }`}
          icon="left"
        ></Icons>
        <p
          className={` text-[1.4rem] text-[#272727d3] text-estadistica ${
            open ? "text-black" : ""
          }`}
        >
          Ver más
        </p>
      </div>
      <div
        className={`w-full justify-start transition-custom overflow-clip  ${
          open ? "h-[195px]" : "h-[0px]"
        }`}
      >
        <div className="max-w-[300px] text-estadistica text-[1.5rem] flex flex-col mx-auto text-[#0a233c]">
          {e.info}
        </div>
      </div>
    </div>
  );
};
