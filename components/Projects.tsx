import useMainContext from "@/context/useMainContext";
import Link from "next/link";
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
  const { proyects } = useMainContext();
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
                <Link
                  href={`/proyect?id=${e.id}`}
                  className="btn btn--med btn--theme dynamicBgClr relative flex justify-center items-center"
                >
                  Ver mas
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                    <path d="M11 13l9 -9"></path>
                    <path d="M15 4h5v5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
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
