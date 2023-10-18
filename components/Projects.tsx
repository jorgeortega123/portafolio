import React, { FC } from "react";

const ListItem: FC<ListItemProps> = ({ date, title, description }) => (
  <li className="mb-10 ml-4 relative">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {date}
    </time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {description}
    </p>
    <a
      href="#"
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      Learn more
      <svg
        className="w-3 h-3 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </li>
);

export function Projects() {
  const proyects = [
    {
      title: "Example 1",
      about: `Registra tusde manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
      img: "./assets/png/llam.png",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
    },
    {
      title: "Example 2",
      about: `Registra tusde manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
      img: "./assets/png/llam.png",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
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

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec mb-[3rem]">
          <span className="heading-sec__main">Proyectos</span>
          <span className="heading-sec__sub">
            Conoce mi pasion materializada con estos proyectos.
          </span>
        </h2>

        <div className="projects__content">
          {proyects.map((e, l) => (
            <div
              className={`projects__row ${
                l % 2 == 0 ? "grid-flow-row-dense" : ""
              } `}
            >
              <div className="projects__row-img-cont relative flex flex-col items-center justify-center">
                <img
                  src={e.img}
                  alt="Software Screenshot"
                  className="projects__row-img "
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{e.title}</h3>
                <p className="projects__row-content-desc">{e.about}</p>
                <a
                  href="./project-1.html"
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Ver mas
                </a>
              </div>
            </div>
          ))}
        </div>
        <section id="libraries" className="">
          <div className=" max-w-[660px] lg:max-w-[800px] px-4 mx-auto">
            <div className="flex flex-col  mx-4 items-center px-[4rem] mb-[12rem]">
              <div className="col-span-12 sm:col-span-3  w-full text-left">
                <div className="  mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto   before:dark:bg-transparent -[#0062b9]">
                  <h2 className="font-[700] pb-0 mb-[0px] text-[2.8rem] ">
                    Librerias
                  </h2>
                  <span className="text-sm font-bold uppercase dark:text-gray-400">
                    Subida a npm
                  </span>
                </div>
              </div>
              <div className="w-full s relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className=" space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-[#0062b9]">
                  {dataProyects.map((e) => (
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
interface ListItemProps {
  date: string;
  title: string;
  description: string;
}

export const List = () => (
  <ol className="relative border-l border-gray-200 dark:border-gray-700">
    <ListItem
      date="February 2022"
      title="Application UI code in Tailwind CSS"
      description="Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages."
    />
    <ListItem
      date="March 2022"
      title="Marketing UI design in Figma"
      description="All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project."
    />
    <ListItem
      date="April 2022"
      title="E-Commerce UI code in Tailwind CSS"
      description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
    />
  </ol>
);

export default Projects;
