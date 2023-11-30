import React from "react";

function Footer() {
  const currentDate: Date = new Date();

  // Get the full year
  const fullYear: number = currentDate.getFullYear();
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/luis-ortega-a866a3218"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/luis030821">
                <img
                  className="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/luis030821">
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h4 className="heading heading-sm text-lt">Luis Ortega</h4>
            <p className="main-footer__short-desc">
              Desarrollador Full Stack especializado en frontend con bases
              firmes en el funcionamiento de Backend y servicios en la nube.
            </p>
            <p className="main-footer__short-desc">
              <span className="block">
                Email:{" "}
                <span className="underline">luisgarrido0987@gmail.com</span>
              </span>
              <span className="block">
                Teléfono: <span>(+593) 095 985 9877</span>
              </span>
            </p>
          </div>
        </div>
        {/* If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) */}
        <div className="main-footer__lower">
          © Copyright {fullYear}. Hecho por
          <a rel="noreferrer" target="_blank" href="">
            Luis Ortega
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
