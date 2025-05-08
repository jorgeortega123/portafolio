// Your Parse initialization configuration goes here
// @ts-ignore
import Parse from "parse/dist/parse.min.js";

const PARSE_APPLICATION_ID = process.env.NEXT_PUBLIC_APPLICATION_ID ?? "";
const PARSE_HOST_URL = "https://parseapi.back4app.com";
const PARSE_JAVASCRIPT_KEY = process.env.NEXT_PUBLIC_JS_KEY;
// console.log(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export interface DatosFormulario {
  name: string;
  message: string;
  email: string;
}

export interface RespuestaFormulario {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export const enviarDatosFormulario = async (
  datos: DatosFormulario
): Promise<RespuestaFormulario> => {
  const { name, email, message } = datos;
  try {
    const errors: Partial<DatosFormulario> = {};

    // Validaciones (ejemplo simplificado)
    if (!/^[A-Za-z\s]+$/.test(datos.name)) {
      errors.name = "El nombre solo puede contener letras";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
      errors.email = "Email no válido";
    }

    if (datos.message.split(" ").length < 3)
      errors.message = "Mínimo 3 palabras";

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Error de validación",
        errors,
      };
    }
    const newMessage = new Parse.Object("Mensajes");
    newMessage.set("email", email);
    newMessage.set("message", message);
    newMessage.set("name", name);

    try {
      const result = await newMessage.save();
      return {
        success: true,
        message: `Se registró tu mensaje. ID:${result.id}.`,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error al enviar el formulario",
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
