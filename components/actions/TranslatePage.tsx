import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { Icons } from "@llampukaq/icons";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

export default function TranslatePageDropDown({ dark }: { dark?: boolean }) {
  const t = useTranslations("home");
  const router = useRouter();
  const { locale } = useRouter();
  const handleChangeLanguage = (lan: string) => {
    // Cambia el locale sin redirigir al inicio
    router.push(
      router.asPath, // Mantiene la ruta actual
      router.asPath, // Opcional: URL limpia (sin locale)
      { locale: lan, scroll: false } // scroll: false evita saltar al inicio
    );
  };

  return (
    <div className={`${dark ? "text-zinc-100" : "text-zinc-900"}`}>
      <Dropdown>
        <DropdownTrigger>
          <div
            className={`${
              dark ? "bg-zinc-700" : "bg-zinc-50"
            } cursor-pointer flex items-center justify-center gap-2 rounded-lg py-1.5 px-3`}
          >
            <Icons
              className={`${
                dark ? "stroke-zinc-100" : "stroke-zinc-800"
              }  min-h-[24px] min-w-[24px]`}
              icon="IconLanguage"
            ></Icons>
            <p>{locale}</p>
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Example with disabled actions"
          disabledKeys={["edit", "delete"]}
        >
          <DropdownItem
            key={"Drop1tem"}
            onClick={() => handleChangeLanguage("en-US")}
          >
            English (en-US)
          </DropdownItem>
          <DropdownItem
            key={"Drop2tem"}
            onClick={() => handleChangeLanguage("es-ES")}
          >
            Español (es-ES)
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
