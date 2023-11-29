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
  link:string
}

interface Skills {
  id: string;
  link: string;
  type: string;
}
function useMainContext() {
  const { isLoad, proyects, libraries, skills } = useContext(MainContext) as {
    isLoad: boolean;
    proyects: Project[];
    libraries: Library[];
    skills: Skills[];
  };
  return {
    isLoad,
    proyects,
    libraries,
    skills,
  };
}

export default useMainContext;
