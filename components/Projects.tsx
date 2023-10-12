import React from "react";

function Projects() {
  const proyects = [
    {
      title: "Example 1",
      about: `Registra tusde manera visual y motivadora, Con esta aplicación, podrás <span class="text-bold">pintar</span>  un cuadro por cada interacción que realices, viendo así tu progreso y logros de forma tangible`,
      tags: ["NextJs", "React", "TypeScript", "PostgreeSQL"],
      img: "./assets/jpeg/project-mockup-example.jpeg",
      web: "https://jetmatch.pages.dev",
      repo: "https://github.com/jorgeortega123/JetMatch",
      moreDetails: "/proyect-1",
    },
  ];

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
          <span className="heading-sec__sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora explicabo quae quod deserunt eius sapiente
          </span>
        </h2>
        <div className="projects__content">
          {proyects.map((e) => (
            <div className="projects__row">
              <div className="projects__row-img-cont">
                <img
                  src={e.img}
                  alt="Software Screenshot"
                  className="projects__row-img"
                  loading="lazy"
                />
              </div>
              <div className="projects__row-content">
                <h3 className="projects__row-content-title">{e.title}</h3>
                <p className="projects__row-content-desc">
                  {e.about}
                </p>
                <a
                  href="./project-1.html"
                  className="btn btn--med btn--theme dynamicBgClr"
                  target="_blank"
                >
                  Ver mas
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
