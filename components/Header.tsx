import React from "react";
import Link from "next/link.js";
function Header() {
  const links = [
    { link: "/", name: "Inicio" },
    { link: "/#me", name: "Acerca de mi" },
    { link: "/#proyectos", name: "proyectos" },
    { link: "/#contacto", name: "contacto" },
  ];
  return (
    <header id="" className="header">
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="./assets/png/luis.jpg"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub fondo-bold">Luis Ortega</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            {links.map((x, index) => (
              <Link href={x.link} key={index}>
                <li className="header__link-wrapper cursor-pointer" key={index}>
                  <p className=" header__link cursor-pointer">{x.name}</p>
                </li>
              </Link>
            ))}
          </ul>
          <div className="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              className="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              className="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div className="header__sm-menu">
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link">
              <a href="./index.html"> Inicio </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./index.html#about"> Acerca de mi </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./index.html#projects"> Projectos </a>
            </li>
            <li className="header__sm-menu-link">
              <a href="./index.html#contact"> Contacto </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
