import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#me", name: "Acerca de mi" },
    { link: "/#proyectos", name: "proyectos" },
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
          ? "z-[13] fixed top-0 opacity-100  border bg-white"
          : "opacity- fixed top-[-110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between  shadow-xl px-6 md:px-12">
        <div className="text-black header__logo-container">
          {/* <div className="header__logo-img-cont">
              <img
                src="./assets/png/luis.jpg"
                alt="Ram Maheshwari Logo Image"
                className="header__logo-img"
              />
            </div> */}
          <Link href={"/"}>
            <p className="shrink-0 border border-blue-500 rounded-[8px] bg-white tracking-wide w-max  text-blue-500 px-9 py-4 text-[2rem] rounded-[10px] hands-font">
              Luis Ortega
            </p>
          </Link>
        </div>
        <div className="flex gap-2 lg:mr-[150px]">
          <ul className="text-black  gap-2  hidden  sm:flex">
            {links.map((x, index) => (
              <Link href={x.link} key={index}>
                <li className=" cursor-pointer" key={index}>
                  <p className=" header__link cursor-pointer hover:underline #121e76 ">
                    {x.name}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
          <div className="m-4  transition-colors duration-200 bg-blue-500 hover:bg-blue-600  cursor-pointer text-[1.3rem] px-12 py-5 border  font-medium tracking-[.2rem]">
            Contactar
          </div>
        </div>
      </div>
    </div>
  );
}
