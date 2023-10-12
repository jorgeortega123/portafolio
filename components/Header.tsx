import React from "react";
import useScrollTo from "../hooks/useScroll.jsx";
function Header() {
  const scrollToElement = useScrollTo();
  const handleOnClick = (e:string) => { 
    scrollToElement(e)
  }
  return (
    <header id="" className="header">

      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img
              src="./assets/png/john-doe.png"
              alt="Ram Maheshwari Logo Image"
              className="header__logo-img"
            />
          </div>
          <span className="header__logo-sub">Luis Ortega</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper cursor-pointer 
             ">
              <p onClick={()=>handleOnClick("home")} className=" header__link cursor-pointer">
                Inicio
              </p>
            </li>
            <li className="header__link-wrapper">
              <p onClick={()=>handleOnClick("about")}   className="cursor-pinter header__link">
                Acerca de mi
              </p>
            </li>
            <li className="header__link-wrapper">
              <p onClick={()=>handleOnClick("projects")}  className="cursor-pointer header__link">
                Proyectos
              </p>
            </li>
            <li className="header__link-wrapper">
              <p onClick={()=>handleOnClick("contact")} className="cursor-pointer header__link">
                Contacto
              </p>
            </li>
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
