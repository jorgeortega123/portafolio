import React from "react";
import Img from "../html/Img";
import ContainerComponent from "./ContainerComponent";
import useMainContext from "@/context/useMainContext";
interface TestimonialsIn {
  title: string;
  sub: string;
  description: string;
  tags: string[];
  link: string;
  img: string;
}
const Testimonials: React.FC = () => {
  const { trabajos } = useMainContext();
  return (
    <section className="bg-white pt-[72px]">
      <div className=" px-6 py-10 mx-auto max-w-[1500px] ">
        <p className="text-xl font-medium text-blue-500">Trabajos</p>

        <h1 className="mt-2 mb-2 text-2xl font-semibold text-gray-800  lg:text-3xl">
          Hecho a medida para mis clientes
        </h1>

        <p className="mt-4 text-gray-500 text-lg xl:mt-6">
          Ambos proyectos tienen su dominio propio y puedes ir a verlos.
          <span className="block ">
            El código fuente a petición de mis clientes es privado.
          </span>
          <span className="block">
            En cada footer de estos trabajos podrás ver mi firma digital
          </span>
        </p>

        <div className="flex flex-col gap-5">
          {trabajos.map((e, index) => (
            <ContainerComponent index={index} item={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
