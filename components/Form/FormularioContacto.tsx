import { useForm } from "react-hook-form";
import {
  DatosFormulario,
  RespuestaFormulario,
  enviarDatosFormulario,
} from "../../db/ServerBack4app";
import { useState } from "react";
import { Alert } from "@heroui/react";

export const FormularioContacto = () => {
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
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre ejemplo"
            {...register("name", {
              required: "El nombre es obligatorio",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Ingresa un nombre válido",
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
            Email
          </label>
          <input
            placeholder="ejemplo123@email.com"
            id="email"
            type="email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email no válido",
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
            Mensaje
          </label>
          <textarea
            placeholder="Hola, me gustaría saber más información."
            id="message"
            {...register("message", {
              required: "El mensaje es obligatorio",
              validate: (value) =>
                value.trim().split(/\s+/).length >= 3 || "Amplia tu mensaje",
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
          Enviar
        </button>
        {/* {JSON.stringify(respuestaServidor)} */}
        {respuestaServidor?.success && (
          <Alert
          className="mt-4"
            color="success"
            description={"Recibirás una respuesta lo antes posible"}
            title={respuestaServidor.message}
            variant="faded"
          />
          // <Alert className="mt-4" color="success" title={} />
        )}
        {respuestaServidor?.success == false && (
          <Alert className="mt-4" color="danger" title={respuestaServidor.message} />
        )}
      </form>
    </>
  );
};
