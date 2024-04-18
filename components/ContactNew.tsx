import React from "react";

const ContactForm = () => {
  const submitContactForm = () => {
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, puedes usar fetch() o axios para enviar los datos del formulario al servidor
    // Luego, puedes mostrar un mensaje de éxito o error según la respuesta del servidor
  };

  return (
    <div className="flex justify-center min-h-screen items-center z-[1] w-full">
      <div className="bg-white p-8 flex gap-2 items-center w-full max-w-[1200px] rounded-[10px] shadow-md">
        {/* Left Side */}
        <div className="w-1/2 h-full flex flex-col justify-start items-center">
          <img
            className=" mb-4 max-w-[250px]"
            src="./assets/svg/rocket.svg"
            alt="Rocket"
          />
          <h3 className="text-[3rem] font-semibold">Ponte en contacto</h3>
          <h6 className="text-[1.5rem]">
            Escribe un mail a{" "}
            <span className="underline">luisgarrido0987@gmail.com</span>
          </h6>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center items-center pr-[66px]">
          {/* Heading */}
          <h3 className="text-[2.5rem] font-semibold mb-12">
            Tienes alguna idea ? Comunicala ahora
       
          </h3>

          {/* Form */}

          <div className="w-full flex flex-col gap-7">
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
                className="z-[-1] top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.5rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Nombre
              </label>
            </div>
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
                className="z-[-1] top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.5rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Mail
              </label>
            </div>
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
                className="z-[-1] top-3 bg-white peer-focus:font-medium px-2 absolute text-[1.5rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75   origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-10"
              >
                Deja tu mensaje aqui
              </label>
            </div>
          </div>
          {/*       


            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Leave a message</label>
              <textarea className="form-textarea mt-1" rows="4" id="messageField" placeholder="Leave a message..." required=""></textarea>
            </span> */}

          <button className="btn submit-btn" onClick={submitContactForm}>
            Submit
          </button>

          {/* <div className="message success">Message sent successfully!</div>
            <div className="message failure">There was an error sending this message. Please write in to info@binaryboot.com</div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
