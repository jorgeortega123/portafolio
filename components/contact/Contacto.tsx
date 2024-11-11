import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import H2 from "../html/H2";
import P from "../html/P";
import { Icons } from "@llampukaq/icons";

export default function ContactFormNew() {
  const { register, handleSubmit } = useForm();
  const [sending, setsending] = useState(false);
  const [mostrarMensajer, setmostrarMensajer] = useState(false);
  const onSubmit = (data: any) => {
    handleButton();
  };
  const handleButton = () => {
    if (mostrarMensajer) {
      setmostrarMensajer(false);
    }
    setsending(true);
    setTimeout(() => {
      setmostrarMensajer(true);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="pattern bg-gray-900 min-h-screen flex items-center justify-center "
    >
      <div className=" px-6 py-12 mx-auto max-w-[1200px] w-full">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6">
            <H2 className="text-2xl mb-3.5 font-semibold text-white capitalize lg:text-3xl">
              Hablemos
            </H2>
            <P className="text-white/90">
              Aqui tienes diferentes formas de contactarte conmigo:
            </P>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
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

                <span className="mx-2 text-white truncate w-72">
                  Quito, Pinchincha, Ecuador.
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <Link
                  target="_blank"
                  href="tel: 95 985 9877"
                  className="mx-2 text-white truncate w-72 hover:underline"
                >
                  095 985 9877
                </Link>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-white"
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

                <Link
                  href={"mailto:luisgarrido0987@gmail.com"}
                  className="mx-2 text-white truncate w-72 hover:underline"
                >
                  luisgarrido0987@gmail.com
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6 shadow-lg px-12 py-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex-1">
                <label className="block mb-2 text-sm text-white/90">
                  Nombre
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1 mt-4">
                <label className="block mb-2 text-sm text-white/90">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-white/90">
                  Mensaje
                </label>
                <textarea
                  {...register("message")}
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white  bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                {sending ? (
                  <div className="flex gap-2 justify-center items-center">
                    {mostrarMensajer ? (
                      <>
                        <Icons
                          icon="IconX"
                          className="stroke-white  min-h-[26px]"
                        ></Icons>
                        Hubo un error al enviar los datos
                      </>
                    ) : (
                      <>
                        {" "}
                        <Icons
                          icon="IconLoader"
                          className="stroke-white animate-spin min-h-[26px]"
                        ></Icons>
                        Enviando...
                      </>
                    )}
                  </div>
                ) : (
                  <> Enviar mensaje</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
