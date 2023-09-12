import { P } from "@/node_modules/cllk/dist/cllk/index";
import React from "react";

import useImagesContext from "../context/useImagesContext";

const images = [
  {
    title: "frontend",
    data: [
      {
        id: "react",
        text: "React",
        color: "#61dafb",
        crown: false,
      },
      {
        id: "html",
        text: "HTML",
        color: "#ef6228",
      },
      {
        id: "css",
        text: "CSS",
        color: "#35aadd",
        hidden: true,
      },
      {
        id: "javascript",
        text: "Javascript",
        color: "#f7df1e",
      },
      {
        id: "typescript",
        text: "Typescript",
        color: "#227acc",
      },
      {
        id: "sass",
        text: "Sass",
        color: "#d06397",
      },
      {
        id: "tailwindcss",
        text: "Tailwindcss",
        color: "#3ab7d6",
      },
      {
        id: "framer-motion",
        text: "Framer Motion",
        color: "#58519e",
      },
      {
        id: "bootstrap",
        text: "Bootstrap",
        color: "#9000f3",
        hidden: true,
      },
      {
        id: "material-ui",
        text: "Material-UI",
        color: "#2581cb",
        hidden: true,
      },
    ],
  },
  {
    title: "backend",
    data: [
      {
        id: "nodejs",
        text: "NodeJs",
        color: "#78be2b",
      },
      {
        id: "express",
        text: "Express",
        color: "#fff",
      },
      {
        id: "java",
        text: "Java",
        color: "#fbca1f",
      },
      {
        id: "docker",
        text: "Docker",
        color: "#00001a",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        id: "git",
        text: "git",
        color: "#f05033",
      },
      {
        id: "github",
        text: "GitHub",
        color: "#000000",
      },
      {
        id: "figma",
        text: "Figma",
        color: "#3bbcff",
      },
      {
        id: "linux",
        text: "Linux",
        color: "#eca600",
      },
      {
        id: "cloudfare-pages",
        text: "Cloudfare Pages",
        color: "#f59739",
      },
    ],
  },
];

export default function Skills() {
  const { imageMap, isLoaded } = useImagesContext();
  return (
    <div
      id="knowledge"
      className=" min-h-[400px] overflow-hidden relative max-w-[550px] w-full bg-[#0000001a] rounded-[6px] p-4 select-none"
    >
  
      <div className="absolute w-full rounded-[6px] left-0 h-[2px] top-0 useBackgroundMove "></div>
      <div className="absolute w-full rounded-[6px]  left-0 h-[2px] bottom-0 useBackgroundMove rotate-180 "></div>
      {images.map((e) => (
        <div className="relative skills-segment-title">
          <div className="sticky z-[2] w-full bg-transparent flex justify-center text-center  ">
            <P className="title-skills z-[2]  w-max px-2  font-bold text-[18px] capitalize rounded-full">
              {e.title}
            </P>
          </div>
          <div className="line-skills-segment z-[1] absolute left-0 top-[15px] w-full h-[1px] bg-[#0000001a]  animation-delay  "></div>
          <div className="grid grid-cols-4 gap-2 justify-center items-center my-3">
            {e.data.map((e) => {
              if (e.hidden) return;
              return (
                <div
                  className={`h-[86px] relative w-full flex flex-col  text-center items-center skills-container hover:text-white hover:drop-shadow-[13px_13px_17px_${e.color}] `}
                >
                  <P
                    className={`text-skill ${
                      e.crown ? "text-yellow-500" : "text-"
                    }  lg:text-[22px] xl:text-[25px]`}
                  >
                    {e.text}
                  </P>
                  {e.crown && (
                    <img
                      draggable={false}
                      className="absolute top-[-24px] w-8 "
                      src={
                        "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1673546913/crown_gpoase.png"
                      }
                      alt=""
                    />
                  )}
                  <img
                    loading="lazy"
                    draggable={false}
                    className="w-12 h-auto"
                    src={imageMap[e.id]}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 right-5"></div>
    </div>
  );
}
