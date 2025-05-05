import React from "react";
import H2 from "./html/H2";
import P from "./html/P";
import { dataPage } from "@/context/dataPage";

function Footer() {
  const currentDate: Date = new Date();

  // Get the full year
  const fullYear: number = currentDate.getFullYear();
  return (
    <footer className="main-footer fixed bottom-0 w-full z-[-1]">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h1 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h1>
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
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luis030821"
              >
                <img
                  className="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/luis030821"
              >
                <img
                  className="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/insta-ico.png"
                  alt="icon"
                />
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <H2 size="medium" className="heading heading-sm text-lt">
              {dataPage.nombre}
            </H2>
            <P size="medium" className="main-footer__short-desc leading-8">
              Desarrollador Full Stack en Quito especializado en frontend con
              bases firmes en el funcionamiento de Backend y servicios en la
              nube.
            </P>
            <P size="medium" className="main-footer__short-desc leading-8">
              <a href={`mailto:${dataPage.email}`} className="block">
                Email: <span className="underline">{dataPage.email}</span>
              </a>
              <a href={`tel:+593${dataPage.telefono}`} className="block">
                Teléfono: <span>(+593) {dataPage.telefono}</span>
              </a>
            </P>
          </div>
        </div>
        {/* If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) */}
        <div className="main-footer__lower">
          © Copyright {fullYear}. Hecho por
          <a rel="noreferrer" target="_blank" href="">
            {dataPage.nombre}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
