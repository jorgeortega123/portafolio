import Link from "next/link";
import React, { useEffect, useState } from "react";
import H2 from "./html/H2";
import P from "./html/P";
import { dataPage } from "@/context/dataPage";
import { Divider } from "@heroui/react";
import TranslatePageDropDown from "./actions/TranslatePage";
import { useTranslations } from "next-intl";

export default function NavBar() {
  const t = useTranslations("nav");
  const links = [
    { link: "/", name: t("home") },
    { link: "/#me", name: t("about") },
    { link: "/#proyectos", name: t("projects") },
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
      className={`anim-delay-nav w-full flex justify-center items-center transition-all duration-300 ${
        showNavbar
          ? "z-[21] fixed top-0 opacity-100 bg-white/95 backdrop-blur-md shadow-lg border-b border-blue-200/30"
          : "opacity-0 fixed top-[-110px]"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-[1200px] mx-auto px-6 md:px-12 py-2">
        <div className="text-zinc-900 flex gap-4 items-center">
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
              className="shrink-0 font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300"
            >
              {dataPage.nombre}
            </H2>
          </Link>
          <TranslatePageDropDown dark />
        </div>
        <div className="flex gap-4 items-center">
          <ul className="text-black gap-6 hidden sm:flex lg:gap-8 w-full items-center">
            {links.map((x, index) => (
              <>
                <Link className="my-auto group" href={x.link} key={index}>
                  <li
                    className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    key={index}
                  >
                    <p className="font-medium text-[1.1rem] cursor-pointer hover:text-blue-600 transition-colors duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full">
                      {x.name}
                    </p>
                  </li>
                </Link>
                {index + 1 < links.length && (
                  <div className="w-px h-6 bg-gray-300/50"></div>
                )}
              </>
            ))}
          </ul>
          <Link
            href={"#contact"}
            className="hidden lg:flex px-6 py-2.5 max-w-max w-max rounded-xl text-white  items-center justify-center font-medium tracking-wide transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}
