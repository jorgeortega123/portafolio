import useMainContext from "@/context/useMainContext";
import Link from "next/link";
import React, { FC } from "react";

function truncateText(text: any, maxLines = 3, maxLength = 250) {
  const lines = text.split("\n").slice(0, maxLines).join("\n");
  return lines.length > maxLength
    ? lines.substring(0, maxLength) + "..."
    : lines;
}
export default function Projects() {
  const { proyects } = useMainContext();
  return (
    <section id="projects" className="projects sec-pad ">
      <div className="">
        <h1 className="heading heading-sec mb-[12rem]">
          <span className="heading-sec__main">Proyectos</span>
          <span className="heading-sec__sub">
          Conoce mi pasion materializada con estos proyectos.
        </span>
        </h1>
      

        <div className="">
          {proyects.map((e, l) => (
            <div
              key={"proyectos" + l}
              className={`w-full bg-[#efefef] flex ${
                l % 2 === 0
                  ? "flex-col md:flex-row"
                  : "flex-col md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 h-auto bg-slate-800">
                <img draggable={false} src={e.img} alt="" />
              </div>
              <div
                className={`w-full md:w-1/2 flex p-8 lg:p-auto border relative flex-col  ${
                  l % 2 === 0
                    ? "items-center lg:pr-[80px]"
                    : "items-center lg:pl-[80px]"
                } justify-center `}
              >
                <div
                  className={`triangulo absolute ${
                    l % 2 === 0
                      ? "rotate-[270deg] bottom-[92%] md:bottom-auto  md:rotate-180 md:right-[100%] "
                      : "rotate-[270deg] bottom-[92%] md:bottom-auto  md:left-[100%] md:rotate-0"
                  }`}
                ></div>

                <div className="px-4 lg:px-0 h-[340px] mt-[50px] md:mt-0 md:h-auto flex flex-col  items-center max-w-[500px]">
                  <h1
                    className={`w-full fondo-bold text-[4rem] leading-none py-4 text-[#0a233c]`}
                  >
                    {e.title}
                  </h1>
                  <p className="text-[1.8rem] w-full">
                    {truncateText(e.about)}
                  </p>
                  <div className="w-full my-7 lg:my-4">
                    <div className="md:my-5 ml-0 border-3 w-max rounded-[6px] cursor-pointer">
                      <Link
                        target="_blank"
                        href={`/proyect?id=${e.id}`}
                        className="rounded-[6px] text-[#efefef]  btn--theme text-[1.4rem] lg:text-[1.6rem] dynamicBgClr py-[1.2rem] px-[3.4rem] relative flex justify-center items-center"
                      >
                        Ver más
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute top-0 right-0 stroke-slate-200"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                          <path d="M11 13l9 -9"></path>
                          <path d="M15 4h5v5"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
