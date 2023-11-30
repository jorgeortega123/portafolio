import Icons from "@/style/Icons";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  text: string;
}

function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSendData, setisSendData] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    text: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendInformation = async (e: any) => {
    e.preventDefault();
    setIsSending(true);
    try {
      var res = await fetch(
        "https://us-east-1.aws.data.mongodb-api.com/app/backend-llkhttp-hropc/endpoint/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log(res);
      if (res.status === 200) {
        setTimeout(() => {
          setIsSuccess(true);
          setIsSending(false);
          setisSendData(true);
          setFormData({
            name: "",
            email: "",
            text: "",
          });
          return;
        }, 2000);
      } else {
        setIsSuccess(false);
        setisSendData(true);
        return;
      }
    } catch (error) {
      setisSendData(true);
      setIsSuccess(false);
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact sec-pad relative  overflow-hidden">
      <div>
        <img
          src="assets/png/backgrounds/patron1.png"
          className="opacity-60 w-full h-auto top-0 absolute z-[0]"
          alt=""
        />
      </div>
      <div className="flex flex-col z-[2]">
        <h2 className="heading heading-sec flex flex-col z-[3] ">
          <span className="heading-sec__main heading-sec__main--lt">
            Contacto
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt px-3">
            Si necesitas asistencia técnica, colaboración en un proyecto o
            simplemente quieres charlar de tu idea, estaré encantado de
            ayudarte. ¡No dudes en contactarme!
          </span>
        </h2>
        <div className="contact__form-container flex flex-col z-[3]">
          <form
            onSubmit={(e) => sendInformation(e)}
            action="#"
            className="contact__form"
          >
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Nombres
              </label>
              <input
                required
                placeholder="Tu nombre"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={formData.name} // Asigna el valor del estado al campo de entrada
                onChange={handleInputChange} // Establece la función de control onChange
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Tu email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={formData.email} // Asigna el valor del estado al campo de entrada
                onChange={handleInputChange}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Mensaje
              </label>
              <textarea
                required
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="text"
                id="text"
                value={formData.text} // Asigna el valor del estado al campo de entrada
                onChange={handleInputChange}
              />
              {isSendData ? (
                <>
                  {isSuccess ? (
                    <div className="flex gap-2 items-center rounded-[6px] border border-[rgb(74_222_128)] max-w-max py-3 px-4">
                      <Icons
                        className="w-7 h-7 fill-[rgb(74_222_128)]"
                        icon="check"
                      ></Icons>
                      <p className=" text-left text-[1.4rem] text-green-400">
                        Se envio tu informacion
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="flex gap-2 items-center rounded-[6px] border border-[rgb(222,74,74)] max-w-max py-3 px-4">
                        <Icons
                          className="w-7 h-7 stroke-[rgb(216,27,27)]"
                          icon="close"
                        ></Icons>
                        <p className=" text-left text-[1.4rem] text-red-400">
                          Error al enviar datos
                        </p>
                      </div>
                      <p className="text-left py-3 text-[1.3rem]">
                        Considera usar estos medios para contactarte:
                        <span className="block">Email: <span className="underline">luisgarrido0987@gmail.com</span> </span>
                        <span>Whatsapp: (+593) 095 985 9877</span>
                      </p>
                    </>
                  )}
                </>
              ) : (
                <></>
              )}
            </div>

            <button
              type="submit"
              className={` ${
                isSending ? "animate-pulse" : ""
              } btn btn--theme contact__btn`}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
