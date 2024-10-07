import React, { useContext } from "react";
import { MainContext } from "./MainContext";
import { TestimonialsIn } from "@/interface/main";

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
  link: string;
}

interface Skills {
  id: string;
  link: string;
  type: string;
}
function useMainContext() {
  const { isLoad, proyects, libraries, skills, numberCharge, trabajos } =
    useContext(MainContext) as {
      isLoad: boolean;
      proyects: Project[];
      libraries: Library[];
      skills: Skills[];
      trabajos: TestimonialsIn[];
      numberCharge: number;
    };
  return {
    isLoad,
    proyects,
    libraries,
    trabajos,
    skills,
    numberCharge,
  };
}

export default useMainContext;
