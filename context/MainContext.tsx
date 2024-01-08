import React, { ReactNode, createContext, useEffect, useState } from "react";
import { cargarFuentes } from "./Loads/FontsLoader";
export const MainContext = createContext({});

function MainContextComponent({ children }: { children: ReactNode }) {
  const [isLoad, setisLoad] = useState(false);
  useEffect(() => {
    const logicaDeCarga = async () => {
      var res = await cargarFuentes();
      if (res) {
        setisLoad(true);
      }
    };
    logicaDeCarga();
  }, []);
  const skills = [
    {
      type: "fr",
      id: "HTML",
      link: "/assets/png/skills/html.png",
    },

    {
      type: "fr",
      id: "CSS",
      link: "/assets/png/skills/css.png",
    },
    {
      type: "fr",
      id: "Javascript",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
    },
    {
      type: "fr",
      id: "React",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686789236/ezgif.com-resize_1_h4svpb.png",
    },
    {
      type: "fr",
      id: "Typescript",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
    },
    {
      type: "fr",
      id: "Tailwindcss",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
    },
    {
      type: "ba",
      id: "MongoDb",
      link: "/assets/png/skills/mongodb.png",
    },
    {
      type: "ba",
      id: "PostgreSQL",
      link: "/assets/png/skills/postgree.png",
    },
    {
      type: "ba",
      id: "Mongo Atlas",
      link: "/assets/png/skills/mongodb.png",
    },
    {
      type: "ba",
      id: "NodeJs",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805871/node-js-1174925_tubnek.webp",
    },
    {
      type: "ba",
      id: "Express",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805507/6202fcdee5ee8636a145a41b_1234_xvfbkk.png",
    },

    {
      type: "ba",
      id: "Docker",
      link: "/assets/png/skills/docker.png",
    },
    {
      type: "se",
      id: "GIT",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
    },
    {
      type: "se",
      id: "GitHub",
      link: "/assets/png/skills/github.png",
    },
    {
      type: "se",
      id: "Figma",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
    },
    {
      type: "se",
      id: "Microsoft Azure",
      link: "/assets/png/skills/azure.png",
    },
    {
      type: "se",
      id: "Cloudflare workers pages",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
    },
  ];
  const proyects = [
    {
      title: "Llampukaq Technology",
      about: `En el marco de este proyecto, la gestión del frontend y el backend fue encomendada en gran parte a mi persona. Se emplearon diversas tecnologías con la finalidad de mejorar el rendimiento, adoptando una estrategia específica. Respecto al frontend, se optó por la utilización de React y Next.js, eligiendo SSG (Generación de Sitios Estáticos) para optimizar el rendimiento. En lo que respecta al backend, se seleccionó un servicio Backend-as-a-Service (BaaS), siendo Mongo Realm la elección para nuestro caso. Además, se llevó a cabo el desarrollo y la liberación de una porción de nuestro código como open source, respondiendo de manera efectiva a las solicitudes de la empresa. Estas tareas se llevaron a cabo en el contexto de un proyecto con un enfoque centrado en la experiencia.`,
      tags: ["NextJs", "React", "TypeScript", "Workers"],
      img: "/llampukaq.png",
      web: "https://www.llampukaq.com/",
      repo: "https://github.com/orgs/Llampukaq-Labs/dashboard",
      moreDetails: "/proyect-1",
      id: "llampukaq",
    },
    {
      title: "Native Translator",
      about: `Un proyecto simple que permite escribir frases y una IA las traduce al inglés, sin importar el idioma en el que se escriban. Este proyecto funciona de manera estática y utiliza Cloudflare Worker para la comunicación con la API de OpenAI.`,
      tags: ["NextJs", "React", "TypeScript", "Workers"],
      img: "/mac.png",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
      id: "example-1",
    },
  ];
  const libraries = [
    {
      title: "@llampukaq/icons",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
      link: "https://github.com/Llampukaq-Labs/icons",
    },
    {
      title: "@llampukaq/realm",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
      link: "https://github.com/Llampukaq-Labs/realm",
    },
    {
      title: "react-scroll-video",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
      link: "https://github.com/Llampukaq-Labs/react-scroll-video",
    },
    {
      title: "react-cache-state",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
      link: "https://github.com/Llampukaq-Labs/react-cache-state",
    },
  ];

  return (
    <MainContext.Provider
      value={{
        isLoad: isLoad,
        proyects: proyects,
        libraries: libraries,
        skills: skills,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
