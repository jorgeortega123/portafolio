import React from "react";
import useNavigation from "./hooks/useNavigation";
import { dataPage } from "@/context/dataPage";
import { Icons } from "@llampukaq/icons";
import ZoomComponentWithModal from "./layout/ZoomComponentWithModal";
import useMainContext from "@/context/useMainContext";
import Img from "./html/Img";
import { useTranslations } from "next-intl";

export default function ProyectosPersonales() {
  const { skills } = useMainContext();
  const { goToUrl } = useNavigation();
  const t = useTranslations("personalProjects");
  const tProjects = useTranslations("");
  const proyects = (tProjects.raw("proyects") || []) as Array<{
    img: string;
    title: string;
    about: string;
    tags: string[];
    web: string;
    repo: string;
    onGroup: boolean;
  }>;
  return (
    <div id="proyectos" className="py-12 px-4 sm:px-auto  bg-[#111827]">
      <div className="max-w-[1200px] mx-auto w-full">
        <p className="text-xl font-medium text-blue-400">
          {t("subtitle")}
        </p>
        <h1 className="mt-2 mb-2 text-2xl font-semibold text-gray-50  lg:text-3xl">
          {t("title")}
        </h1>{" "}
        <div className="max-w-[750px] mb-12">
          <p className="mt-4 text-gray-200 text-lg xl:mt-6">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[1200px] mx-auto w-full">
        {proyects.map((item, index) => (
          <div className="text-gray-50  relative  w-full rounded-[6px] border-[1px] border-[#0000001a] hover:border-[#0000001a]  bg-[#00000023] px-2 lg:rounded-[12px]">
            <div className=" items-center flex justify-center relative ">
              <div
                className="stroke-zinc-100 text-zinc-100 hover:stroke-zinc-500 hover:text-zinc-950 relative flex items-center mr-[-26px] gap-2 px-[1px] cursor-pointer text-[1.1ren] lg:text-[1.8rem] lg:my-1  container-proyects useTextColor"
                onClick={() => goToUrl(item.web)}
              >
                <p className="font-medium">{item.title}</p>
                <Icons icon="IconLink" className="rotate-[65deg]   "></Icons>
              </div>
            </div>
            <div className="flex-col w-full ">
              <div className="w-12/12   items-center flex justify-center relative  ">
                <ZoomComponentWithModal item={item} />
              </div>
              <div className=" normalText text-[12px] h-full lg:p-3  flex flex-col ">
                <div
                  className="  normalText text-[13px] lg:text-[16px]  leading-5 my-2"
                  dangerouslySetInnerHTML={{ __html: item.about }}
                ></div>

                <div
                  id={"appendp" + index}
                  className=" flex flex-wrap pb-3 pt-1 mb-2 select-none opacity-[75%]"
                ></div>

                <div className="flex gap-2 ">
                  {item.tags.map((tag) => {
                    const skill = skills.find(
                      (skill) => skill.id.toLowerCase() == tag.toLowerCase()
                    );
                    return (
                      <>
                        {skill && (
                          <div className="flex gap-2 pr-3 text-zinc-100 items-center justify-center bg-zinc-800 border border-zinc-700 px-2 rounded-full">
                            {skill.link && (
                              <Img
                                className="max-w-[22px] w-full pl-1 py-1"
                                link
                                src={skill.link}
                                alt={skill.id}
                                q={10}
                              />
                            )}
                            <p>{skill.id}</p>
                          </div>
                        )}
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className=" bottom-0  pb-3 w-full left-0  flex space-x-3 px-2 ">
              <button
                onClick={() => goToUrl(item.web)}
                className=" useTransitionDelay border-[1px] rounded-[6px] px-7 border-[#66ff00] text-[#66ff00]  hover:bg-[#66ff00f1] hover:text-[black]"
              >
                {t("visit")}
              </button>
              <div
                onClick={() => goToUrl(item.repo)}
                className="transition-button-proyect-code useTransitionDelay cursor-pointer flex flex-row-reverse border-[1px] rounded-[6px] px-7 border-gray-600 text-gray-600 hover:border-gray-500 hover:text-gray-500"
              >
                <svg
                  className="my-auto  fill-gray-600 p-[3px]"
                  height="24"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="24"
                  opacity={1}
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <p>{t("code")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
