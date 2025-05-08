import Link from "next/link";
import React, { useEffect, useState } from "react";
import H2 from "./html/H2";
import P from "./html/P";
import { dataPage } from "@/context/dataPage";
import { Divider } from "@heroui/react";

export default function NavBar() {
  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#me", name: "Acerca de mi" },
    { link: "/#proyectos", name: "Proyectos" },
    // { link: "/#contacto", name: "contacto" },
  ];

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const specificDiv = document.getElementById("main-div");
      if (specificDiv) {
        const { bottom } = specificDiv.getBoundingClientRect();

        if (bottom < 0) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`anim-delay-nav w-full flex justify-center items-center ${
        showNavbar
          ? "z-[21] fixed top-0 opacity-100  border bg-white shadow-md"
          : "opacity-0   fixed top-[-110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-[1200px] mx-auto  px-6 md:px-12">
        <div className="text-black">
          {/* <div className="header__logo-img-cont">
              <img
                src="./assets/png/luis.jpg"
                alt="Ram Maheshwari Logo Image"
                className="header__logo-img"
              />
            </div> */}
          <Link href={"/"}>
            <H2
              size="small"
              className="shrink-0 font-normal border border-blue-500  bg-white tracking-wide w-max  text-blue-500 px-9 py-4  rounded-[10px]"
            >
              {dataPage.nombre}
            </H2>
          </Link>
        </div>
        <div className="flex gap-2   ">
          <ul className="text-black  gap-5  hidden  sm:flex lg:gap-5 w-full lg:pr-5">
            {links.map((x, index) => (
              <>
                <Link className="my-auto" href={x.link} key={index}>
                  <li className=" cursor-pointer" key={index}>
                    <p className="font-medium text-[1.2rem] cursor-pointer hover:underline  ">
                      {x.name}
                    </p>
                  </li>
                </Link>
                {index + 1 < links.length && <Divider orientation="vertical" />}
              </>
            ))}
          </ul>
          <Link
            href={"#contact"}
            className="p-2 rounded-lg text-white flex items-center  justify-center tracking-widest  transition-colors duration-200 bg-blue-500 hover:bg-blue-600  cursor-pointer px-7"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
