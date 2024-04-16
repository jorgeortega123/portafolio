import React from 'react';

const ContactForm = () => {
  const submitContactForm = () => {
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, puedes usar fetch() o axios para enviar los datos del formulario al servidor
    // Luego, puedes mostrar un mensaje de éxito o error según la respuesta del servidor
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 px-4">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center">
          <img className="w-24 h-24 mb-4" src="./../assets/images/rocket-8c2d160595b159022d5477600ed1a260a134e7e5d1de59efb892f6612d59d9f2.svg" alt="Rocket" />
          <h3 className="text-lg font-semibold">Get in touch with us.</h3>
          <h6 className="text-sm">Say hi to info@binaryboot.com</h6>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center">
          {/* Heading */}
          <h3 className="text-lg font-semibold mb-4">Have an idea? Let's connect.</h3>

          {/* Form */}
          <div className="w-full md:w-10/12 lg:w-10/12 xl:w-10/12 flex flex-col">
            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Name</label>
              <input type="text" className="form-input mt-1" id="nameField" placeholder="Name" required="" />
            </span>
            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Email</label>
              <input type="email" className="form-input mt-1" id="emailField" placeholder="Email" required="" />
            </span>
            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Skype</label>
              <input type="text" className="form-input mt-1" id="skypeField" placeholder="Skype" />
            </span>

            <div className="mb-4 flex">
              <span className="flex-1 mr-2 flex flex-col">
                <label className="text-sm font-semibold">Country</label>
                <input type="text" className="form-input mt-1" id="countryField" placeholder="Country" required="" />
              </span>

              <span className="flex-1 ml-2 flex flex-col">
                <label className="text-sm font-semibold">Contact</label>
                <input type="number" className="form-input mt-1" id="contactField" placeholder="Contact" required="" />
              </span>
            </div>

            <span className="mb-4 flex flex-col">
              <label className="text-sm font-semibold">Leave a message</label>
              <textarea className="form-textarea mt-1" rows="4" id="messageField" placeholder="Leave a message..." required=""></textarea>
            </span>

            <button className="btn submit-btn" onClick={submitContactForm}>Submit</button>

            <div className="message success">Message sent successfully!</div>
            <div className="message failure">There was an error sending this message. Please write in to info@binaryboot.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
