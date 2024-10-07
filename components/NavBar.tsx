import Link from "next/link";
import React, { useEffect, useState } from "react";
import H2 from "./html/H2";
import P from "./html/P";

export default function NavBar() {
  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#me", name: "Acerca de mi" },
    // { link: "/#proyectos", name: "proyectos" },
    // { link: "/#contacto", name: "contacto" },
  ];

  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const specificDiv = document.getElementById("main-div");
      if (specificDiv) {
        const { bottom } = specificDiv.getBoundingClientRect();
        console.log(bottom);
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
          ? "z-[55] fixed top-0 opacity-100  border bg-white shadow-md"
          : "opacity- fixed top-[-110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-[1200px] mx-auto  px-6 md:px-12">
        <div className="text-black header__logo-container">
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
              Luis Ortega
            </H2>
          </Link>
        </div>
        <div className="flex gap-2 lg:mr-[150px]">
          <ul className="text-black  gap-2  hidden  sm:flex">
            {links.map((x, index) => (
              <Link href={x.link} key={index}>
                <li className=" cursor-pointer" key={index}>
                  <P
                    size="medium"
                    className=" header__link cursor-pointer hover:underline #121e76 "
                  >
                    {x.name}
                  </P>
                </li>
              </Link>
            ))}
          </ul>
          <Link
            href={"#contact"}
            className="m-4 text-white flex items-center justify-center tracking-widest font-bold transition-colors duration-200 bg-blue-500 hover:bg-blue-600  cursor-pointer px-7"
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
