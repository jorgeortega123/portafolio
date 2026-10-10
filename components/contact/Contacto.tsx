import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import H2 from "../html/H2";
import P from "../html/P";
import { Icons } from "@llampukaq/icons";
import { FormularioContacto } from "../Form/FormularioContacto";
import { dataPage } from "@/context/dataPage";
import { useTranslations } from "next-intl";
import { useChatAction } from "@/context/ChatActionContext";

export default function ContactFormNew() {
  const t = useTranslations("contact");
  const { setScrollToContact } = useChatAction();

  useEffect(() => {
    setScrollToContact(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }, [setScrollToContact]);
  return (
    <section
      id="contact"
      className="pattern bg-gray-900 min-h-screen flex items-center justify-center "
    >
      <div className=" px-6 py-12 mx-auto max-w-[1200px] w-full">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <H2 className="text-2xl mb-3.5 font-semibold text-white capitalize lg:text-3xl">
              {t("title")}
            </H2>
            <P className="text-white/90">
              {t("subtitle")}
            </P>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-white/90">{t("location")}</span>
              </div>

              <Link
                target="_blank"
                href={`mailto:${dataPage.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="truncate text-white group-hover:underline">{dataPage.email}</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:mx-6">
            <FormularioContacto />
          </div>
        </div>
      </div>
    </section>
  );
}
