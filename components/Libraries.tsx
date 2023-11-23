import useMainContext from "@/context/useMainContext";
import React from "react";

export default function Libraries() {
  const { libraries } = useMainContext();
  return (
    <section id="libraries" className="sec-pad">
      <div className=" max-w-[660px] lg:max-w-[800px] px-4 mx-auto">
        <div className="flex flex-col  mx-4 items-center px-[4rem] mb-[12rem]">
          <div className="col-span-12 sm:col-span-3  w-full text-left">
            <div className="  mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto   before:dark:bg-transparent -[#0062b9]">
              <h2 className="heading heading-sec mb-[3rem]">
                <span className="heading-sec__main">Librerias</span>
                <span className="heading-sec__sub">
                  Conoce mi pasion materializada con estos proyectos.
                </span>
              </h2>
              {/* <span className="text-sm font-bold uppercase dark:text-gray-400">
                Subida a npm
              </span> */}
            </div>
          </div>
          <div className="w-full s relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className=" space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-[#0062b9]">
              {libraries.map((e) => (
                <div className=" rounded-[6px] flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-[#0062b9]">
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
              <div>
                <div>
                  <p>Ver mas... (+7)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
