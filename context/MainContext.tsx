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

  const proyects = [
    {
      title: "Example 1",
      about: `Registra tusde manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
      img: "./assets/png/llam.png",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
      id: "example-1",
    },
    {
      title: "Example 2",
      about: `Registra tusde manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
      img: "./assets/png/llam.png",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
      id: "example-2",
    },
  ];
  const libraries = [
    {
      title: "@llampukaq/icons",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "@llampukaq/realm",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "react-scroll-video",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "react-cache-state",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
  ];


  return (
    <MainContext.Provider
      value={{
        isLoad: isLoad,
        proyects: proyects,
        libraries: libraries
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainContextComponent;
