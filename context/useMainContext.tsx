import React, { useContext } from "react";
import { MainContext } from "./MainContext";

interface Project {
  title: string;
  about: string;
  tags: string[];
  img: string;
  web: string;
  repo: string;
  moreDetails: string;
  id: string;
}

interface Library {
  title: string;
  fecha: string;
  description: string;
}

function useMainContext() {
  const { isLoad, proyects, libraries } = useContext(MainContext) as {
    isLoad: boolean;
    proyects: Project[];
    libraries: Library[];
  };
  return {
    isLoad,
    proyects,
    libraries,
  };
}

export default useMainContext;
