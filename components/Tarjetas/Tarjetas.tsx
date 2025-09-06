import useMainContext from "@/context/useMainContext";

import { Icons, ICONS } from "@llampukaq/icons";
import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import H2 from "../html/H2";
interface tarjeta {
  title: string;
  description: string;
  icon: ICONS;
  type: string;
}

export default function TarjetasNew() {
  const { skills } = useMainContext();
  const t = useTranslations("cards");
  const data: tarjeta[] = [
    {
      title: t("frontend.title"),
      description: t("frontend.description"),
      icon: "IconBrandTinder",
      type: "fr",
    },
    {
      title: t("backend.title"),
      description: t("backend.description"),
      icon: "IconDeviceDesktop",
      type: "ba",
    },
    {
      title: t("services.title"),
      description: t("services.description"),
      icon: "IconBrandCodepen",
      type: "se",
    },
  ];
  return (
    <>
      <section className="bg-white">
        <div className="container px-6 py-10 max-w-[1500px] mx-auto">
          <H2 className="text-2xl  font-semibold text-gray-800 capitalize lg:text-3xl">
            {t("title")} <br />
            <span className="underline decoration-blue-500 pt-3">
              {t("title_split")}
            </span>
          </H2>

          <p className="mt-4 text-gray-500 xl:mt-6 text-lg">{t("subtitle")}</p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {data.map((e) => (
              <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
                <span className="inline-block text-blue-500 bg-blue-100 p-2 rounded-full">
                  <Icons
                    stroke={2}
                    className="stroke-blue-500"
                    size={24}
                    icon={e.icon}
                  />
                </span>
                <div className="flex gap02 items-center justify-start">
                  {" "}
                  <h1 className="text-xl font-semibold text-gray-700 capitalize">
                    {e.title}
                  </h1>{" "}
                  <div className=" rounded-full  p-1 w-max">
                    <Icons
                      className="stroke-blue-500 "
                      icon="IconCheck"
                    ></Icons>
                  </div>
                </div>

                <p className="text-gray-500">{e.description}</p>

                {/* <Marquee
                  speed={20}
                  gradient
                  gradientColor="white"
                  gradientWidth={"250"}
                  className="block z-[99] max-w-[710px]"
                  direction="right"
                >
                  <div className="flex flex-wrap gap-0 ">
                    {skills.map((a, l) => {
                      if (e.type === a.type) {
                        return (
                          <div className="flex border select-none border-white/60  rounded-[5px] items-center justify-center gap-3">
                            <img
                              key={"imagen" + l}
                              draggable={false}
                              src={a.link}
                              className=" w-[25px] h-auto "
                            ></img>
                            <p className="cursor-default text-white/85">
                              {a.id}
                            </p>
                          </div>
                        );
                      }
                    })}
                  </div>{" "}
                </Marquee> */}

                {/* <a
                  href="#"
                  className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
