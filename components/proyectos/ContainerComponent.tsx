import React, { useEffect, useState } from "react";
import Img from "../html/Img";
import { TestimonialsIn } from "@/interface/main";
import Link from "next/link";
import { formatWords } from "@/hooks/FormatWord";
import useMainContext from "@/context/useMainContext";
import P from "../html/P";
import { Alert, Button, Tooltip } from "@heroui/react";
import { Icons } from "@llampukaq/icons";

export default function ContainerComponent({
  item,
  index,
}: {
  item: TestimonialsIn;
  index: number;
}) {
  const { skills } = useMainContext();
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
      className="relative z-[8] w-full mt-8 md:flex md:items-center xl:mt-12"
    >
      <div
        className={`absolute z-1 w-full md:h-96  transition-all duration-300 ease-linear  bg-blue-600 -z-10  rounded-2xl`}
      ></div>

      <div
        className={`${
          fullScreen ? " h-full min-h-[85vh]" : " "
        } w-full p-6 bg-blue-600     md:items-center ${
          index % 2 == 0 ? "md:flex md:flex-row-reverse " : "md:flex"
        }  rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly"`}
      >
        <Img
          link
          width="500"
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
          src={item.img}
          alt="client photo"
        />
        <div className="">
          <div className="mt-2 md:mx-6 ">
            <div className="flex gap-2 items-center ">
              <div className="min-w-max">
                <p className="text-[1.75rem] font-medium tracking-tight text-white">
                  {item.title}
                </p>
                <p className="text-blue-200">{item.sub}</p>
              </div>
            </div>

            <p className="my-1 text-[1.1rem] leading-relaxed text-white font-medium">
              {item.description}
              <strong>{item.update}</strong>
            </p>

            {/* {item?.update && <Alert variant="flat" description={item.update} />} */}
            <div className="flex flex-wrap gap-3 py-2">
              {item.tags.map((tag) => {
                const skill = skills.find(
                  (skill) => skill.id.toLowerCase() == tag.toLowerCase()
                );
                return (
                  <>
                    {skill && (
                      <div className="flex  gap-2 pr-3 items-center justify-center bg-zinc-800/60 border border-zinc-800 text-zinc-50 px-2 rounded-full">
                        <Img
                          className="max-w-[26px] w-full p-1"
                          link
                          src={skill.link}
                          alt={skill.id}
                          q={10}
                        />
                        <p>{skill.id}</p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>

            <div className="flex items-center justify-between mt-6 md:justify-start">
              {/* <Link
                href={{
                  pathname: `/casos/[caso]`,
                  query: {
                    caso: `${formatWords(item.title)}`,
                  },
                }}
                target="_self"
                onClick={handleButton}
               
                className="p-2 text-white transition-colors duration-300 border rounded-lg rtl:-scale-x-100 hover:bg-blue-400"
              >
                Leer más
              </Link> */}

              <Link
                href={item.link}
                target="_blank"
                title={item.title}
                className="p-2 text-white flex gap-2 items-center px-1.5 transition-colors duration-300 border rounded-lg rtl:-scale-x-100  hover:bg-blue-400"
              >
                Visitar aplicación web
                <Icons
                  className="stroke-zinc-200"
                  icon="IconExternalLink"
                ></Icons>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
