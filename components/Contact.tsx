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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    text: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendInformation = (e:any) => {
    e.preventDefault()
    console.table(formData)
    setIsSending(true);
    setTimeout(() => {
      setIsSuccess(true)
      setIsSending(false)
      setFormData({
        name: "",
        email: "",
        text: ""
      });
    }, 2000);
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Contacto
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Si necesitas asistencia técnica, colaboración en un proyecto o
            simplemente quieres charlar de tu idea, estaré encantado de
            ayudarte. ¡No dudes en contactarme!
          </span>
        </h2>
        <div className="contact__form-container">
          <form onSubmit={(e)=>sendInformation(e)} action="#" className="contact__form">
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
              {isSuccess ? (
                <div className="flex gap-2 items-center rounded-[6px] border border-[rgb(74_222_128)] max-w-max py-3 px-4">
                 <Icons className="w-7 h-7 fill-[rgb(74_222_128)]" icon="check"></Icons>
                  <p className=" text-left text-[1.4rem] text-green-400">
                    Se envio tu informacion
                  </p>
                </div>
              ) : (
                ""
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
