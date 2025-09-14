import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import H2 from "./html/H2";

type SkillDescription = {
  needContrast?: boolean;
  title: string;
  icon: string;
  content: string;
};

interface FrontendSkill {
  title: string;
  description: string;
  image: string;
  icon: string;
  banner: string;
  type: string;
  s_title: string;
  s_description: SkillDescription[];
}

// const Frontend_tajeta = () => {
//   return (
//     <div></div>
//   )
// }
// const Backend_tajeta = () => {
//   return (
//     <div></div>
//   )
// }

export default function Tarjetas() {
  const datosComponente: FrontendSkill[] = [
    {
      title: "Frontend",
      description:
        "Creativo al momento de crear interfaces web con frameworks y librerias del momento.",
      image: "/assets/png/backgrounds/primero.png",
      icon: "/assets/png/frontend.png",
      banner: "/assets/png/backgrounds/banner_1.png",
      type: "fr",
      s_title: "Habilidades Frontend",
      s_description: [
        {
          title:
            "Manejo adecuado en el aspecto visual tanto en Pc/Tables/Movile",
          icon: "",
          content:
            "Apasionado por el diseño y la creación de experiencias visuales cautivadoras. Experto en la implementación de interfaces web atractivas mediante el uso de los últimos frameworks y librerías del momento. Capaz de traducir ideas creativas en código funcional que mejora la interacción del usuario y la usabilidad del sitio.",
        },
      ],
    },
    {
      title: "Backend",
      description:
        "Alto nivel de manejo al trabajar con procesamiento en la Nube y base de datos (SQL y no SQL).",
      image: "/assets/png/backgrounds/segundo.png",
      type: "ba",
      icon: "/assets/png/backend.png",
      banner: "/assets/png/backgrounds/banner_2.png",
      s_title: "Desarrollo Backend",
      s_description: [
        {
          title: "Ejemplo",
          icon: "",
          content:
            "Experiencia avanzada en el desarrollo backend, conocimiento en el manejo eficiente de servidores, procesamiento en la nube y la gestión de bases de datos tanto SQL como NoSQL.",
        },
        {
          title: "Ejemplo",
          icon: "",
          content:
            "Experiencia avanzada en el desarrollo backend, conocimiento en el manejo eficiente de servidores, procesamiento en la nube y la gestión de bases de datos tanto SQL como NoSQL.",
        },
      ],
    },
    {
      title: "Servicios",
      description: "Dominio de plataformas como Azure y mongo Atlas.",
      image: "/assets/png/backgrounds/tercero.png",
      type: "se",
      icon: "/assets/png/services.png",
      banner: "/assets/png/backgrounds/banner_3.png",
      s_title: "Gestión de Plataformas",
      s_description: [
        {
          needContrast: true,
          title: "",
          icon: "",
          content:
            "Especializado en la gestión de plataformas en la nube, poseo un sólido conocimiento en el dominio de servicios en plataformas como Azure y MongoDB Atlas. Desde la implementación hasta la optimización, tengo experiencia en garantizar que las plataformas sean eficientes, seguras y cumplan con los requisitos del proyecto. Enfocado en la entrega de soluciones tecnológicas que impulsen el éxito del negocio.",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row w-full relative ">
        {datosComponente.map((e, inx) => (
          <Children key={"datos" + inx} inx={inx} e={e} />
        ))}
      </div>
    </section>
  );
}

const Children = ({ e, inx }: any) => {
  const [open, setOpen] = useState(false);
  const [altura, setaltura] = useState<number | undefined>();
  const [ancho, setancho] = useState<number | undefined>();
  const [isValidAnim, setisValidAnim] = useState(true);
  const handleResize = () => {
    const width = window.innerWidth;
    setaltura(document.getElementById("container-must")?.clientHeight);
    setancho(document.getElementById("container-must")?.clientWidth);
    if (width < 768) {
      setOpen(false);
      setisValidAnim(false);
    } else if (width >= 768 && width < 1024) {
      setOpen(false);

      setisValidAnim(false);
    } else {
      setisValidAnim(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleClick = (sa?: string) => {
    // if (sa === "si") {
    //   console.log("SE DEBIO HABER CERRADO");
    //   setOpen(false);
    //   return
    // }
    if (isValidAnim) {
      setOpen(true);
    }

    return;
  };

  return (
    <div
      id="container-must"
      className={`w-full md:w-1/3 bg-[#111827]   h-auto ${
        open ? ` h-[${altura}px]` : " overflow-hidden relative"
      }  flex items-center justify-center`}
    >
      <div
        style={{
          transform: `${open ? `translateX(-${ancho ?? 0 * inx}px)` : ""} `,
          transition: `transform 1.3s `,
        }}
        onClick={() => handleClick("no")}
        className={`  h-full  ${
          open ? `z-[5]` : "z-[1] cursor-pointer "
        }  absolute   flex  items-center justify-center  `}
      >
        <img
          style={{
            transition: `all 1s`,
          }}
          className={`w-full max-w-[160px] sm:max-w-[90px]  ${
            open ? " lg:max-w-[250px]" : "lg:max-w-[150px]"
          }`}
          src={e.icon}
          alt=""
        />
        {/* <Icons
          className="stroke-white w-[130px] h-auto md:w-[70px] lg:w-[130px]"
          icon={e.icon}
        ></Icons> */}
        <div className="ml-6">
          <H2
            size="small"
            className=" fondo-bold text-[3.2rem] md:text-[2rem] lg:text-[3.2rem] text-white"
          >
            {e.title}
          </H2>
          <p className=" inline-block text-[1.4rem] md:text-[1rem] lg:text-[1.4rem] max-w-[180px] text-gray-200 ">
            {e.description}
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${e.banner})` }}
        className={`overflow-hidden ${
          open
            ? " w-[0%] background-inicio-delay absolute top-0 right-[50%] bg-gray-800  h-full z-[3]"
            : ""
        }`}
      >
        {open ? (
          <>
            <div className={`relative  h-full w-full  z-[3] text-[2rem]`}>
              <div
                style={{
                  marginLeft: `${ancho}px`,
                  height: `${altura}px`,
                  width: `${ancho ?? 0 * 2}px`,
                }}
                className={`absolute z-[3] r p-12`}
              >
                <div className="relative flex w-full h-full text-white">
                  {/* <h1 className="block text-[2rem] ">{e.s_title}</h1> */}
                  <div className=" flex flex-col items-center justify-center tracking-tight ">
                    <Servicios_tajeta data={e} />
                  </div>
                  <div
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="z-[6] bg-gray-700 hover:bg-gray-600 cursor-pointer absolute top-0 right-0 p-2 rounded-full shadow-lg border border-gray-500 "
                  >
                    <Icons className=" stroke-white  " icon="close"></Icons>
                  </div>

                  {/* <div className="absolute top-0 border  flex gap-2">
                    <Marquee  className="absolute" direction="left">
                      {skills.map((a, l) => {
                        if (e.type === a.type) {
                          return (
                            <img
                              key={"imagen" + l}
                              draggable={false}
                              src={a.link}
                              className=" w-[22px] h-auto "
                            ></img>
                          );
                        }
                      })}
                    </Marquee>
                  </div> */}
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <img className="" src={e.image} alt="" />
      {/* <div className="absolute z-[6] top-2 left-2 flex gap-1"></div> */}
    </div>
  );
};

const color = ["#ff8400", "#f316b0", "#00c4c2"];
const Servicios_tajeta = ({ data }: { data: FrontendSkill }) => {
  const { skills } = useMainContext();
  console.log(data);
  return (
    <div
      className={`mb-[100px] ${
        data.s_description[0]?.needContrast ? "rounded-[12px] bg-black/40 p-6" : ""
      } flex flex-wrap max-w-full gap-5 text-white text-[1.8rem]`}
    >
      <h1 className=" text-[3rem] font-[900] text-left w-full text-white">{data.title}</h1>
      <p className="w-10/12 ">{data.s_description[0].content}</p>
      <div className="flex flex-col gap-5 absolute bottom-0">
        <p className="text-gray-200">Tecnologías en este ámbito:</p>
        <Marquee
          speed={20}
          gradient
          gradientColor="red"
          gradientWidth={"250"}
          className="block z-[99] max-w-[710px]"
          direction="right"
        >
          <div className="flex flex-wrap gap-3 pl-3 ">
            {skills.map((a, l) => {
              if (data.type === a.type) {
                return (
                  <div className="flex border select-none border-gray-200/80 bg-gray-700/60 p-4 rounded-[5px] items-center justify-center gap-3">
                    <img
                      key={"imagen" + l}
                      draggable={false}
                      src={a.link}
                      className=" w-[25px] h-auto "
                    ></img>
                    <p className="cursor-default text-white">{a.id}</p>
                  </div>
                );
              }
            })}
          </div>{" "}
        </Marquee>
      </div>

      {/* {data.map((e, index) => (
        <div
          key={"colorBorder" + index}
          className="overflow-hidden bg-[#2b2b2b5e] rounded-[6px]  relative px-4 py-2"
        >
          <div
            className={`absolute z-[7] bg-[${color[index]}] h-full w-[3px] top-0 left-0`}
          ></div>
          <h1 className="my-2 font-bold tracking-wide text-[1.6rem]">
            {e.title}
          </h1>
          <p>{e.content}</p>
        </div>
      ))} */}
    </div>
  );
};
