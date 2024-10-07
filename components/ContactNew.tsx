import Icons from "@/style/Icons";
import React, { useState } from "react";

const ContactFormNew = () => {
  const [showSms, setshowSms] = useState(false);
  const submitContactForm = () => {
    setshowSms(true);
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, puedes usar fetch() o axios para enviar los datos del formulario al servidor
    // Luego, puedes mostrar un mensaje de éxito o error según la respuesta del servidor
  };

  return (
    <div
      id="contact"
      className="flex justify-center min-h-screen items-center z-[1] w-full"
    >
      <div className="bg-white p-8 flex flex-col lg:flex-row gap-2 items-center w-full max-w-[1200px] rounded-[10px] shadow-md">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-start items-center">
          <img
            className=" mb-4 max-w-[250px]"
            src="./assets/svg/rocket.svg"
            alt="Rocket"
          />
          <h2 className="text-[3rem] font-semibold">Contacto</h2>
          <p className="text-[1.5rem]">
            <span className="flex gap-2 items-center">
              <Icons icon="mail"></Icons>
              <a href="mailto:luisgarrido0987@gmail.com" className="underline">
                luisgarrido0987@gmail.com
              </a>
            </span>

            <a
              href="tel:+593959859877"
              className="justify-center mt-1 text-center flex gap-2"
            >
              <Icons icon="phone"></Icons>
              <span>
                (+593) <span className="underline"> 095 985 9877</span>
              </span>
            </a>
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2  flex flex-col justify-center items-center pr-[66px]">
          {/* Heading */}
          <h2 className="text-[2.5rem] font-semibold mb-12">
            ¿Tienes alguna idea ? Comunícala ahora
          </h2>

          {/* Form */}

          <div className="w-full flex flex-col gap-9">
            <div className="relative z-0 w-full">
              <input
                type="text"
                className="block py-2.5 w-full px-3 bg-paleta-300 pb-3 rounded-[6px] text-[1.6rem] text-gray-900 bg-transparent border-[1px] border-paleta-300 appearance-none border-paleta-500/30 focus:border-paleta-200 focus:outline-none focus:ring-0  peer"
                placeholder=" "
                // value={usernameOrEmail}
                // onChange={handleUsernameOrEmailChange}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="z-[-1] left-3 top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 scale-[.80]   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Nombre
              </label>
            </div>
            <div className="relative z-0 w-full">
              <input
                type="text"
                className="block py-2.5 w-full px-3 bg-paleta-300 pb-3 rounded-[6px] text-[1.7rem] text-gray-900 bg-transparent border-[1px] border-paleta-300 appearance-none border-paleta-500/30 focus:border-paleta-200 focus:outline-none focus:ring-0  peer"
                placeholder=" "
                // value={usernameOrEmail}
                // onChange={handleUsernameOrEmailChange}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="z-[-1] left-3 top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 scale-[.80]   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Mail
              </label>
            </div>
            <div className="relative z-0 w-full">
              <textarea
                className="block py-2.5 w-full px-3 bg-paleta-300 pb-3 rounded-[6px] text-[1.6rem] text-gray-900 bg-transparent border-[1px] border-paleta-300 appearance-none border-paleta-500/30 focus:border-paleta-200 focus:outline-none focus:ring-0  peer"
                placeholder=" "
                // value={usernameOrEmail}
                // onChange={handleUsernameOrEmailChange}
                required
              />
              <label
                htmlFor="floating_first_name"
                className="z-[-1] left-3 top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.7rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-12 scale-[.80]   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Deja tu mensaje aqui
              </label>
            </div>
          </div>
          {showSms && (
            <div className="text-red-500 text-[1.5rem] w-full text-left mt-3">
              Error al enviar datos
              <span className="block text-gray-700">
                Considera comunicarte a través del correo o número de teléfono
                proporcionados en la izquierda
              </span>
            </div>
          )}
          {/*       


            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Leave a message</label>
              <textarea className="form-textarea mt-1" rows="4" id="messageField" placeholder="Leave a message..." required=""></textarea>
            </span> */}

          <button
            className="tracking-wider my-5 px-6 py-2 text-[1.5rem] border rounded-[6px] bg-blue-500 text-white"
            onClick={submitContactForm}
          >
            Enviar
          </button>

          {/* <div className="message success">Message sent successfully!</div>
            <div className="message failure">There was an error sending this message. Please write in to info@binaryboot.com</div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactFormNew;
