import React, { useState } from "react";
import H2 from "../html/H2";
import P from "../html/P";
import { useTranslations } from "next-intl";
import { Icons } from "@llampukaq/icons";

export default function Aptitudes() {
  const t = useTranslations("about");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAptitude = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16 w-full">
      <div className="text-left mb-8 sm:mb-10 lg:mb-12">
        <H2
          size="medium"
          className="mb-3 sm:mb-4 text-xl sm:text-2xl lg:text-3xl"
        >
          {t("aptitudes.title")}
        </H2>
        <P
          size="medium"
          className="text-gray-600 max-w-full sm:max-w-xl lg:max-w-2xl mx-auto "
        >
          {t("aptitudes.subtitle")}
        </P>
      </div>

      <div className="w-full space-y-3">
        {(
          t.raw("aptitudes.list") as Array<{
            title: string;
            description: string;
          }>
        ).map((aptitud, index) => (
          <div
            key={`aptitud-${index}`}
            className="w-full border border-blue-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Header - Siempre visible */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-blue-50 transition-colors duration-200"
              onClick={() => toggleAptitude(index)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "clamp(2rem, 3vw, 2.5rem)",
                    height: "clamp(2rem, 3vw, 2.5rem)",
                  }}
                >
                  <Icons
                    icon={
                      index === 0
                        ? "IconBulb"
                        : index === 1
                        ? "IconBook2"
                        : index === 2
                        ? "IconEye"
                        : index === 3
                        ? "IconUsers"
                        : "IconClock"
                    }
                    className="stroke-white text-white"
                    style={{
                      width: "clamp(1rem, 2vw, 1.25rem)",
                      height: "clamp(1rem, 2vw, 1.25rem)",
                    }}
                  />
                </div>
                <h3
                  className="font-semibold text-gray-800 leading-tight"
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                  }}
                >
                  {aptitud.title}
                </h3>
              </div>

              {/* Ícono de flecha */}
              <div
                className={`transition-all duration-300 ease-in-out transform ${
                  activeIndex === index
                    ? "rotate-180 text-blue-600"
                    : "rotate-0 text-gray-500"
                }`}
              >
                <Icons
                  icon="IconChevronDown"
                  className="w-5 h-5 stroke-zinc-900 transition-colors duration-300"
                  style={{
                    width: "clamp(1.25rem, 2vw, 1.5rem)",
                    height: "clamp(1.25rem, 2vw, 1.5rem)",
                  }}
                />
              </div>
            </div>

            {/* Contenido desplegable */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 pt-2 bg-gradient-to-br from-blue-50 to-indigo-50">
                <P
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontSize: "clamp(0.825rem, 1.8vw, 0.95rem)",
                    lineHeight: "clamp(1.4, 2vw, 1.6)",
                  }}
                >
                  {aptitud.description}
                </P>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
