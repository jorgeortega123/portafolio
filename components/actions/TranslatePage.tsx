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
              dark ? "bg-zinc-800" : "bg-zinc-50"
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
          aria-label="Language selection"
          selectedKeys={locale ? new Set([locale]) : new Set()}
          selectionMode="single"
        >
          <DropdownItem
            key="en-US"
            onClick={() => handleChangeLanguage("en-US")}
            endContent={
              locale === "en-US" ? (
                <Icons icon="IconCheck" className="w-4 h-4" />
              ) : null
            }
          >
            English (en-US)
          </DropdownItem>
          <DropdownItem
            key="es-ES"
            onClick={() => handleChangeLanguage("es-ES")}
            endContent={
              locale === "es-ES" ? (
                <Icons icon="IconCheck" className="w-4 h-4" />
              ) : null
            }
          >
            Español (es-ES)
          </DropdownItem>
          <DropdownItem
            key="zh-CN"
            onClick={() => handleChangeLanguage("zh-CN")}
            endContent={
              locale === "zh-CN" ? (
                <Icons icon="IconCheck" className="w-4 h-4" />
              ) : null
            }
          >
            Chinese (zh-CN)
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
