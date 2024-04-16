import React from "react";
import Link from "next/link.js";
function Header() {
  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#me", name: "Acerca de mi" },
    { link: "/#proyectos", name: "proyectos" },
    { link: "/#contacto", name: "contacto" },
  ];
  return (
    <>
      <div className=" w-full top-0 z-[3] flex flex-col items-center px-6 md:px-auto">
        <div className="max-w-[1200px] w-full mt-[2.5%]">
          <div className="flex  justify-between items-center">
            <div className="flex items-center">
              <h2 className="shrink-0  bg-white tracking-wide w-max  text-black px-9 py-4 text-[2rem] rounded-[10px] ">
                Luis Ortega
              </h2>
              <p className="text-[1.5rem] ml-[5.5%] shrink-0 text-[#9ba7b1]">desarrollador full stack</p>
            </div>
            <div className= "transition-colors duration-200 hover:bg-white hover:text-black cursor-pointer text-[1.3rem] px-12 py-5 border  font-medium tracking-[.2rem]">Contactar</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
