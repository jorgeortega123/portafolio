import React, { useEffect, useState } from "react";
import Img from "../html/Img";
import { TestimonialsIn } from "@/interface/main";
import Link from "next/link";
import { formatWords } from "@/hooks/FormatWord";

export default function ContainerComponent({
  item,
  index,
}: {
  item: TestimonialsIn;
  index: number;
}) {
  const [fullScreen, setfullScreen] = useState(false);
  const centerDiv = () => {
    const container = document.getElementById(`container-pr-${index}`);
    if (container) {
      var init = () =>
        container.scrollIntoView({
          behavior: "smooth", // Desplazamiento suave
          block: "center", // Centra verticalmente
          inline: "center", // Centra horizontalmente (si es aplicable)
        });
      setTimeout(() => {
        init();
      }, 200);
    }
  };
  const handleButton = () => {
    //   if (!fullScreen) centerDiv();
    //   setfullScreen(!fullScreen);
  };
  return (
    <main
      id={`container-pr-${index}`}
      className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12"
    >
      <div
        className={`absolute w-full md:h-96  transition-all duration-300 ease-linear  bg-blue-600 -z-10  rounded-2xl`}
      ></div>

      <div
        className={`${
          fullScreen ? " h-full min-h-[85vh]" : " "
        } w-full p-6 bg-blue-600     md:items-center ${
          index % 2 == 0 ? "md:flex md:flex-row-reverse " : "md:flex"
        }  rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly"`}
      >
        <Img
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
          src={item.img}
          alt="client photo"
        />
        <div className="">
          <div className="mt-2 md:mx-6 ">
            <div>
              <p className="text-[1.75rem] font-medium tracking-tight text-white">
                {item.title}
              </p>
              <p className="text-blue-200">{item.sub}</p>
            </div>

            <p className="mt-4 text-[1.1rem] leading-relaxed text-white ">
              {item.description}
            </p>

            <div className="flex items-center justify-between mt-6 md:justify-start">
              <Link
                href={{
                  pathname: `/casos/[caso]`,
                  query: {
                    caso: `${formatWords(item.title)}`,
                  },
                }}
                target="_self"
                onClick={handleButton}
                //   title={`"Ver mas sobre ${}`}
                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
              >
                Leer mas
              </Link>

              <button
                title="right arrow"
                className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
              >
                Visitar aplicacion web
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
