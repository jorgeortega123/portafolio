import React from "react";
import Link from "next/link.js";
import H2 from "./html/H2";
import P from "./html/P";
import { dataPage } from "@/context/dataPage";
import { Icons } from "@llampukaq/icons";
import { useRouter } from "next/router";

import { useTranslations } from "next-intl";
import TranslatePageDropDown from "./actions/TranslatePage";

function Header() {
  const t = useTranslations("home");
  const router = useRouter();
  const { locale } = useRouter();
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
              <H2
                size="small"
                className="shrink-0  bg-white tracking-wide w-max  text-black px-2 sm:px-9 py-2 sm:py-4 rounded-[10px] "
              >
                {dataPage.nombre}
              </H2>
              <P
                size="medium"
                className="text-sm hidden lg:flex lg:text-[1.5rem] ml-[5.5%] shrink-0 text-zinc-400"
              >
                {t("subInfo")}
              </P>
            </div>
            <TranslatePageDropDown />

            <Link
              href={"#contact"}
              className="text-sm hidden lg:flex  transition-colors rounded-[9px] text-white duration-200 hover:bg-white hover:text-black cursor-pointer px-3 sm:px-8 py-2 border  "
            >
              <H2 size="small">{t("contact")}</H2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
