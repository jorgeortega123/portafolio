import React from "react";
import Img from "../html/Img";
import ContainerComponent from "./ContainerComponent";
import useMainContext from "@/context/useMainContext";
import { dataPage } from "@/context/dataPage";
interface TestimonialsIn {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  link: string;
  img: string;
}
const Testimonials: React.FC = () => {
  return (
    <section className="bg-white pt-[72px]">
      <div className=" px-6 py-10 mx-auto max-w-[1500px] ">
        <p className="text-xl font-medium text-blue-500">Trabajos</p>
        <h1 className="mt-2 mb-2 text-2xl font-semibold text-gray-800  lg:text-3xl">
          Hecho a medida para mis clientes
        </h1>{" "}
        <div className="max-w-[750px]"> 
          <p className="mt-4 text-gray-500 text-lg xl:mt-6">
            Estos proyectos fueron hechos completamente por mi persona, bajo
            contrato con clientes que solicitaron mis servicios
            <span className="block ">
              Tenga en cuenta que por el ajustado presupuesto priorizé el
              apartado MOBILE, para que este luzca lo más amigable con el
              usuario, ya que más del 80% del tráfico en estas páginas son desde
              usuarios mobile
            </span>
          </p>
        </div>
        {/* <p className="mt-4 text-gray-500 text-lg xl:mt-6">
          Ambos proyectos tienen su dominio propio y puedes ir a verlos.
        
          <span className="block">
            En cada footer de estos trabajos podrás ver mi firma digital
          </span>
        </p> */}
        <div className="flex flex-col gap-5">
          {dataPage.trabajos.map((e, index) => (
            <ContainerComponent index={index} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
