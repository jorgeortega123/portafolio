import React, { useState } from "react";

export default function Experience() {
  const [isSelected, setIsSelected] = useState(true);

  const trabajos = [
    {
      name: "Trabajo 1",
      date: "2021 - 2022",
      info: "Descripción del Trabajo 1",
    },
    {
      name: "Trabajo 2",
      date: "2019 - 2020",
      info: "Descripción del Trabajo 2",
    },
  ];

  const estudios = [
    {
      name: "Universidad 1",
      date: "2017 - 2021",
      info: "Título obtenido en Universi 1",
    },
    {
      name: "Instituto 2",
      date: "2015 - 2017",
      info: "Título obtenido en Instituto 2",
    },
  ];

  const dataProyects = [
    {
      title: "Libreria 123",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "Libreria 123",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "Libreria 123",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
    {
      title: "Libreria 123",
      fecha: "Diciembre 2021",
      description: "Descripcion de todo",
    },
  ];

  const dataToShow = isSelected ? trabajos : estudios;

  return (
    <section id="experience" className="hidden projects sec-pad">
      <div className=" max-w-[500px]  px-4 py-12 mx-auto">
        <div className="flex flex-col  mx-4 items-center px-[4rem]">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center  mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto   before:dark:bg-[#0062b9]">
              <h2 className="font-[700] pb-0 mb-[0px] text-[2.8rem] ">
                Librerias
              </h2>
              <span className="text-sm font-bold uppercase dark:text-gray-400">
                Vestibulum diam nunc
              </span>
            </div>
          </div>
          <div className="w-full s relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className=" space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-[#0062b9]">
              {dataProyects.map((e,l) => (
                <div key={"experiencia" + l}  className=" rounded-[6px] flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-[#0062b9]">
                  <h3 className="text-[2rem] text-black">{e.title}</h3>
                  <time className="text-[1.2rem] tracki uppercase dark:text-gray-400">
                    {e.fecha}
                  </time>
                  <p className="text-[1.5rem] mt-3 text-[#777] leading-[1.7]">
                    {e.description}
                  </p>
                  <div className="absolute right-0 top-1 flex gap-[0px] items-center">
                    <img
                      className="main-footer__icon brightness-75 "
                      src="./assets/png/github-ico.png"
                      alt="icon"
                    />
                    <p className=""></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="main-container">

// <div className="heading-sec__sexperience  w-full flex flex-col justify-center items-center gap-3 ">
//   <div className="flex gap-4 border bg-[#0062b9] text-white px-7 py-2 rounded-[10px]">
//     <p
//       onClick={() => setIsSelected(true)}
//       className={`btn-experience text-[1.6rem] cursor-pointer font-bold ${
//         isSelected ? "bg-white text-[#0062b9]" : "text-white"
//       }  py-[1.5rem] px-[5rem]  `}
//     >
//       Trabajo
//     </p>
//     <p
//       onClick={() => setIsSelected(false)}
//       className={`btn-experience  text-[1.6rem] cursor-pointer font-bold ${
//         !isSelected ? "bg-white text-[#0062b9]" : "text-white"
//       }   py-[1.5rem] px-[5rem] `}
//     >
//       Estudios
//     </p>
//   </div>
// </div>

// <div className="timeline mt-8 relative">
//   {dataToShow.map((item, index) => (
//     <div
//       className="flex items-center justify-center mb-8 relative "
//       key={index}
//     >
//       <div className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-2/2">
//         {/* Línea del timeline */}
//         <div className="h-full absolute z-[2] w-1 bg-[#0062b9]"></div>
//         {/* Círculo en la línea central */}
//         <div className="h-4 w-4 bg-[#0062b9] rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
//       </div>
//       <div className="w-[40%] pl-6  relative">
//         <div
//           className={`transition-all delay-300 flex flex-col justify-start  ${
//             !isSelected ? " items-end" : "items-start"
//           } `}
//         >
//           {/* Contenido del timeline a la derecha del círculo */}
//           <div className={`border ${isSelected ? "text-right": "text-left"} `}>
//             <h3 className=" text-lg font-bold mb-2">{item.name}</h3>
//             <p className="text-gray-500 mb-1">{item.date}</p>
//             <p className="text-left">{item.info}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
// </div>
