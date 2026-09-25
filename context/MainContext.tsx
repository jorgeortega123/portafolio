import React, { ReactNode, createContext, useEffect, useState } from "react";
import { cargarFuentes } from "./Loads/FontsLoader";
export const MainContext = createContext({});

const data = [{ id: "hero", link: "/assets/png/backgrounds/hexagonal.png" }];

function MainContextComponent({ children }: { children: ReactNode }) {
  const [imageMap, setImageMap] = useState({});
  const [isLoad, setisLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [numberCharge, setnumberCharge] = useState<number>(0);
  useEffect(() => {
    logicaDeCarga();
  }, []);

  const logicaDeCarga = async () => {
    var res = await cargarFuentes();
    setnumberCharge(28);
    console.log(res);
    if (res) {
      loadImages();
    }
  };
  const loadImages = async () => {
    let num = 0;
    try {
      const map = {};

      for (const item of data) {
        setnumberCharge(++num * 1 * 2);

        const response = await fetch(item.link);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        //@ts-ignore
        map[item.id] = url;
      }

      setImageMap(map);
      setnumberCharge(100);
      setTimeout(() => {
        setisLoad(true);
      }, 720);
    } catch (error) {
      console.log("Error loading images:", error);
      setnumberCharge(100);
      setTimeout(() => {
        setisLoad(true);
      }, 220);
    }
  };
  const skills = [
    // Frontend
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
      type: "fr",
      id: "python",
      link: "/assets/webp/python.webp",
    },
    {
      type: "ba",
      id: "batch",
      link: "/assets/webp/batch.webp",
    },

    // Backend
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
      id: "HonoJs",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/efc002c1-58a4-4e38-b954-de2c2dd445c9",
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
      id: "SQLite",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/ad727278-3d4e-4e9e-b658-c74e36023131",
    },
    {
      type: "ba",
      id: "GraphQL",
      link: "/assets/png/skills/graphql.png",
    },
    {
      type: "ba",
      id: "Prisma",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/466f27c3-e32c-45cd-910b-d03c6c0e9926",
    },
    {
      type: "ba",
      id: "Docker",
      link: "/assets/png/skills/docker.png",
    },
    {
      type: "ba",
      id: "RabbitMQ",
      link: "/assets/png/skills/rabbitmq.png",
    },
    {
      type: "ba",
      id: "Redis",
      link: "/assets/png/skills/redis.png",
    },

    // Herramientas de IA
    {
      type: "ai",
      id: "Claude",
      link: "/assets/png/skills/claude.png",
    },
    {
      type: "ai",
      id: "Z.ai",
      link: "/assets/png/skills/zai.png",
    },
    {
      type: "ai",
      id: "Crush OpenCode skills",
      link: "/assets/png/skills/crush-opencode.png",
    },
    {
      type: "ai",
      id: "Vertex",
      link: "/assets/png/skills/vertex.png",
    },
    {
      type: "ai",
      id: "Cloudflare AI",
      link: "/assets/png/skills/cloudflare-ai-gateway.png",
    },
    {
      type: "ai",
      id: "OpenRouter",
      link: "/assets/png/skills/openrouter.png",
    },
    {
      type: "ai",
      id: "Hermes",
      link: "/assets/png/skills/hermes.png",
    },
    {
      type: "ai",
      id: "OMP",
      link: "/assets/png/skills/omp.png",
    },

    // Herramientas
    {
      type: "tools",
      id: "GIT",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/c3906b22-4996-4513-a85e-223becb96727",
    },
    {
      type: "tools",
      id: "GitHub",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/8b130dfc-2c42-4ede-9ae5-16233d742bd0",
    },
    {
      type: "tools",
      id: "VsCode",
      link: "/assets/png/skills/vsCode.png",
    },
    {
      type: "tools",
      id: "MicrosoftAzure",
      link: "/assets/png/skills/azure.png",
    },
    {
      type: "tools",
      id: "Cloudflare workers pages",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
    },
    {
      type: "tools",
      id: "Firebase",
      link: "/assets/png/skills/firebase.png",
    },
    {
      type: "tools",
      id: "Docker Hub",
      link: "/assets/png/skills/dockerhub.png",
    },
    {
      type: "tools",
      id: "n8n",
      link: "/assets/png/skills/n8n.png",
    },
    {
      type: "tools",
      id: "Chatwoot",
      link: "/assets/png/skills/chatwoot.png",
    },
    {
      type: "tools",
      id: "Erpnext",
      link: "/assets/png/skills/erpnext.png",
    },
    {
      type: "tools",
      id: "Console Cloud",
      link: "/assets/png/skills/console-cloud.png",
    },
    {
      type: "tools",
      id: "Zed",
      link: "/assets/png/skills/zed.png",
    },
    {
      type: "tools",
      id: "WordPress",
      link: "/assets/png/skills/wordpress.png",
    },
    {
      type: "tools",
      id: "Postiz",
      link: "/assets/png/skills/postiz.png",
    },

    // Diseño Gráfico
    {
      type: "design",
      id: "Figma",
      link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
    },
    {
      type: "design",
      id: "Canva",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/43455880-fc20-4270-a118-16898368bddf",
    },
    {
      type: "design",
      id: "CapCut",
      link: "https://jandrea-backend.llampukaq.workers.dev/images/image/acfc7fbd-b3d1-4683-b9f2-f33f4282e495",
    },
  ];

  const proyects = [
    {
      title: "Llampukaq Technology",
      about: `En el marco de este proyecto, la gestión del frontend y el backend fue encomendada en gran parte a mi persona. Se emplearon diversas tecnologías con la finalidad de mejorar el rendimiento, adoptando una estrategia específica. Respecto al frontend, se optó por la utilización de React y Next.js, eligiendo SSG (Generación de Sitios Estáticos) para optimizar el rendimiento. En lo que respecta al backend, se seleccionó un servicio Backend-as-a-Service (BaaS), siendo Mongo Realm la elección para nuestro caso. Además, se llevó a cabo el desarrollo y la liberación de una porción de nuestro código como open source, respondiendo de manera efectiva a las solicitudes de la empresa. Estas tareas se llevaron a cabo en el contexto de un proyecto con un enfoque centrado en la experiencia.`,
      tags: ["NextJs", "React", "TypeScript", "Workers"],
      img: "/assets/cases/llam.png",
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
      web: "https://nativetranslator.pages.dev/",
      repo: "https://nativetranslator.pages.dev/",
      moreDetails: "/proyect-1",
      id: "example-1",
    },
  ];
  const libraries = [
    // {
    //   title: "@llampukaq/icons",
    //   fecha: "Diciembre 2021",
    //   description: "Descripcion de todo",
    //   link: "https://github.com/Llampukaq-Labs/icons",
    // },
    // {
    //   title: "@llampukaq/realm",
    //   fecha: "Diciembre 2021",
    //   description: "Descripcion de todo",
    //   link: "https://github.com/Llampukaq-Labs/realm",
    // },
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

        numberCharge: numberCharge,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
