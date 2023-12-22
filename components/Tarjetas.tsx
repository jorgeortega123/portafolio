import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React, { useEffect, useState } from "react";

type SkillDescription = {
  title: string;
  icon: string;
  content: string;
};

interface FrontendSkill {
  title: string;
  description: string;
  image: string;
  icon: string;
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

const Servicios_tajeta = (data: SkillDescription) => {
  return <div>{data.content}</div>;
};

export default function Tarjetas() {
  const datosComponente: FrontendSkill[] = [
    {
      title: "Frontend",
      description:
        "Creativo al momento de crear interfaces web con frameworks y librerias del momento.",
      image: "/assets/png/backgrounds/rose.png",
      icon: "/assets/png/frontend.png",
      type: "fr",
      s_title: "Habilidades Frontend",
      s_description: [
        {
          title: "",
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
      image: "/assets/png/backgrounds/blue.png",
      type: "ba",
      icon: "/assets/png/backend.png",
      s_title: "Desarrollo Backend",
      s_description: [
        {
          title: "",
          icon: "",
          content:
            "Con experiencia avanzada en el desarrollo backend, me especializo en el manejo eficiente de servidores, procesamiento en la nube y la gestión de bases de datos tanto SQL como NoSQL. Capaz de diseñar arquitecturas robustas que garantizan el rendimiento, la escalabilidad y la seguridad de las aplicaciones. Comprometido con la entrega de soluciones backend sólidas y de alta calidad.",
        },
      ],
    },
    {
      title: "Servicios",
      description: "Dominio de plataformas como Azure y mongo Atlas.",
      image: "/assets/png/backgrounds/red.png",
      type: "se",
      icon: "/assets/png/services.png",
      s_title: "Gestión de Plataformas",
      s_description: [
        {
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
      <div className="flex flex-col md:flex-row w-full relative bg-slate-700">
        {datosComponente.map((e, inx) => (
          <Children key={"datos" + inx} inx={inx} e={e} />
        ))}
      </div>
    </section>
  );
}

const Children = ({ e, inx }: any) => {
  const { skills } = useMainContext();
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
      className={`w-full md:w-1/3   h-auto ${
        open ? ` h-[${altura}px]` : " overflow-hidden relative"
      }  flex items-center justify-center`}
    >
      <div
        style={{
          transform: `${open ? `translateX(-${ancho * inx}px)` : ""} `,
          transition: `transform 2s  cubic-bezier(0.2, 0.81, 0.42, 1);`,
        }}
        onClick={() => handleClick("no")}
        className={` w-full h-full  ${
          open ? `z-[5]` : "z-[1] bg-black/50 hover:bg-black/10 cursor-pointer "
        }  absolute  flex  items-center justify-center  `}
      >
        <img
          style={{
            transition: `transform 2s`,
          }}
          className={`w-full ${open ? " max-w-[250px]" : "max-w-[150px]"}`}
          src={e.icon}
          alt=""
        />
        {/* <Icons
          className="stroke-white w-[130px] h-auto md:w-[70px] lg:w-[130px]"
          icon={e.icon}
        ></Icons> */}
        <div className="ml-6">
          <h1 className=" fondo-bold text-[3.2rem] md:text-[2rem] lg:text-[3.2rem] text-white">
            {e.title}
          </h1>
          <p className=" inline-block text-[1.4rem] md:text-[1rem] lg:text-[1.4rem] max-w-[180px] text-[#ccc] ">
            {e.description}
          </p>
        </div>
      </div>
      {open ? (
        <>
          <div
            className={`opacity-0 background-inicio-delay absolute top-0 left-0 bg-slate-700 w-[100%] h-full z-[3]`}
          >
            <div className={`relative  h-full w-full  z-[3] text-[2rem]`}>
              <div
                style={{
                  marginLeft: `${ancho}px`,
                  height: `${altura}px`,
                  width: `${ancho * 2}px`,
                }}
                className={`absolute z-[3] r p-12`}
              >
                <div className="relative s w-full h-full text-white">
                  <h1 className="block text-[2rem] ">{e.s_title}</h1>
                  <div className="text-[#f1f1f1] text-[1.5rem] tracking-tight max-w-[450px]">
                    <Servicios_tajeta data={e.s_description} />
                  </div>
                  <div
                    onClick={() => {
                      setOpen(false);
                    }}
                    className="z-[6] cursor-pointer absolute top-0 right-0 p-1 rounded-full "
                  >
                    <Icons className=" stroke-white  " icon="close"></Icons>
                  </div>

                  <div className="absolute bottom-0 flex gap-2">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <img className="" src={e.image} alt="" />
      )}

      <div className="absolute z-[6] top-2 left-2 flex gap-1"></div>
    </div>
  );
};
