import React from "react";

function Contact() {
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
          <form action="#" className="contact__form">
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
                name="message"
                id="message"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
