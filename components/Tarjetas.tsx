import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React from "react";

export default function Tarjetas() {
  const { skills } = useMainContext();

  const datosComponente = [
    {
      title: "Frontend",
      description:
        "Creativo al momento de crear interfaces web con frameworks y librerias del momento.",
      image: "/assets/png/backgrounds/rose.png",
      icon: "frontend",
      type: "fr",
    },
    {
      title: "Backend",
      description:
        "Alto nivel de manejo al trabajar con procesamiento en la Nube y base de datos (SQL y no SQL).",
      image: "/assets/png/backgrounds/blue.png",
      type: "ba",
      icon: "backend",
    },
    {
      title: "Servicios",
      description: "Dominio de plataformas como Azure y mongo Atlas.",
      image: "/assets/png/backgrounds/red.png",
      type: "se",
      icon: "seo",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full">
      {datosComponente.map((e) => (
        <div className="w-full md:w-1/3 relative flex items-center justify-center">
          <div className="w-full h-full bg-[#00000040] absolute z-[2] flex  items-center justify-center ">
            <Icons
              className="stroke-white w-[130px] h-auto md:w-[70px] lg:w-[130px]"
              icon={e.icon}
            ></Icons>
            <div>
              <p className=" fondo-bold text-[3.2rem] md:text-[2rem] lg:text-[3.2rem] text-white">
                {e.title}
              </p>
              <p className=" inline-block text-[1.4rem] md:text-[1rem] lg:text-[1.4rem] max-w-[180px] text-[#ccc] ">
                {e.description}
              </p>
            </div>
          </div>
          <img className="" src={e.image} alt="" />
          <div className="absolute top-2 left-2 flex gap-1">
            {/* {skills.map((a) => {
              if (e.type === a.type) {
                console.log(e.type, a.type)
                return (
                  <img
                    draggable={false}
                    src={a.link}
                    className="gray-img w-[20px] h-auto "
                  ></img>
                );
              }
            })} */}
          </div>
        </div>
      ))}
    </div>
  );
}
