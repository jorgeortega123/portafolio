import { useForm } from "react-hook-form";
import {
  DatosFormulario,
  RespuestaFormulario,
  enviarDatosFormulario,
} from "../../db/ServerBack4app";
import { useState } from "react";
import { Alert } from "@heroui/react";
import { useTranslations } from "next-intl";

export const FormularioContacto = () => {
  const t = useTranslations("contact.form");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DatosFormulario>();

  const [respuestaServidor, setrespuestaServidor] =
    useState<RespuestaFormulario>();

  const onSubmit = async (data: DatosFormulario) => {
    const respuesta: RespuestaFormulario = await enviarDatosFormulario(data);
    if (respuesta.success) {
      setrespuestaServidor(respuesta);
      alert;
      reset();
    } else {
      setrespuestaServidor(respuesta);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:max-w-md w-full mx-auto p-6 bg-gray-950/90 rounded-lg shadow-md "
      >
        {/* Campo Nombre */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-50 font-bold mb-2">
            {t("name.label")}
          </label>
          <input
            id="name"
            type="text"
            placeholder={t("name.placeholder")}
            {...register("name", {
              required: t("name.required"),
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: t("name.invalid"),
              },
            })}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.name ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Campo Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-50 font-bold mb-2">
            {t("email.label")}
          </label>
          <input
            placeholder={t("email.placeholder")}
            id="email"
            type="email"
            {...register("email", {
              required: t("email.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("email.invalid"),
              },
            })}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Campo Mensaje */}
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-50 font-bold mb-2"
          >
            {t("message.label")}
          </label>
          <textarea
            placeholder={t("message.placeholder")}
            id="message"
            {...register("message", {
              required: t("message.required"),
              validate: (value) =>
                value.trim().split(/\s+/).length >= 3 || t("message.tooShort"),
            })}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md ${
              errors.message ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
        >
          {t("submit")}
        </button>
        {/* {JSON.stringify(respuestaServidor)} */}
        {respuestaServidor?.success && (
          <Alert
            className="mt-4"
            color="success"
            description={t("success.description")}
            title={t("success.title")}
            variant="faded"
          />
        )}
        {respuestaServidor?.success == false && (
          <Alert className="mt-4" color="danger" title={respuestaServidor.message} />
        )}
      </form>
    </>
  );
};
