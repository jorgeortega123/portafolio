import useMainContext from "@/context/useMainContext";
import Icons from "@/style/Icons";
import React, { useEffect, useState } from "react";

export default function Tarjetas() {
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
      icon: "services",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full relative bg-slate-700">
      {datosComponente.map((e, inx) => (
        <Children inx={inx} e={e} />
      ))}
    </div>
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
    
      className={`w-full md:w-1/3  h-auto ${
        open ? ` h-[${altura}px]` : " overflow-hidden relative"
      }  flex items-center justify-center`}
    >
      <div
        style={{
          transform: `${open ? `translateX(-${ancho * inx}px)` : ""} `,
          transition: `transform 2s`,
        }}
        onClick={() => handleClick("no")}
        className={`cursor-pointer w-full h-full ${
          open ? `z-[5]` : "z-[1] "
        }  absolute  flex  items-center justify-center  `}
      >
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
      {open ? (
        <>
          <div
            className={`opacity-0 background-inicio-delay absolute top-0 left-0 bg-slate-700 w-[100%] h-full z-[3]`}
          >
            <div className={`relative  h-full w-full border z-[3] text-[2rem]`}>
              <div
                style={{
                  marginLeft: `${ancho}px`,
                  height: `${altura}px`,
                  width: `${ancho * 2}px`,
                }}
                className={`absolute z-[3] r p-12`}
              >
                <div className="relative s w-full h-full">
                  <h1 className="block">Titulo de ejemplo</h1>
                  <p>He dominado gran </p>
                  <div
                    onClick={() => {
                      setOpen(false)
                    }}
                    className="z-[6] absolute top-0 right-0 p-1 rounded-full hover:bg-white/10"
                  >
                    <Icons className=" stroke-white  " icon="close"></Icons>
                  </div>

                  <div className="absolute bottom-0 flex gap-2">
                    {skills.map((a) => {
                      if (e.type === a.type) {
                        return (
                          <img
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
