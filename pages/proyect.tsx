import useMainContext from "@/context/useMainContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  about: string;
  tags: string[];
  img: string;
  web: string;
  repo: string;
  moreDetails: string;
  id: string;
}

// interface ProjectDetailsProps {
//   proyectos: Project[];
// }

const ProjectDetails = () => {
  const { proyects } = useMainContext();
  const router = useRouter();
  const { id } = router.query; // Obtén el 'id' de la consulta de la URL

  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Busca el proyecto por 'id' cuando la consulta de la URL cambia
    if (id && Array.isArray(proyects)) {
      const foundProject = proyects.find((p) => p.id === id.toString());
      if (foundProject) {
        setProject(foundProject);
      }
    }
  }, [id, proyects]);

  return (
    <div className="relative">
      {/* <div className="absolute w-[220px] h-[540px] border py-7 px-2 z-[200] top-0 left-0 bg-black">
        <p className="text-[80rem]">Regresar donde estaba</p>
      </div> */}

      <section className="project-cs-hero overflow-hidden">
        <div className="project-cs-hero__content flex flex-col ">
          <h1 className="heading-primary  fondo-bold text-[5.2rem]">
            {project?.title}
          </h1>
          {/* <div className="project-cs-hero__info">
            <p className="text-primary flex ">{project?.about}</p>
          </div> */}
          <div className="project-cs-hero__cta flex justify-center  ">
            <a
              href="#"
              className="btn--bg hover:bg-[#ffffff1a] border border-[#00001a] "
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      </section>
      <section className="project-details">
        <div className="main-container">
          <div className="project-details__content">
            <div className="project-details__showcase-img-cont">
              {/* <Laptop url={"/example.png"}></Laptop> */}
              <img
                src={project?.img}
                alt="Project Image"
                className="project-details__showcase-img"
              />
            </div>
            <div className="project-details__content-main">
              <div className="project-details__desc">
                <h3 className="project-details__content-title">
                  Caracteristicas del proyecto
                </h3>
                <p className="project-details__desc-para">
                {project?.about}
                </p>
                {/* <p className="project-details__desc-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  alias tenetur minus quaerat aliquid, aut provident blanditiis,
                  deleniti aspernatur ipsam eaque veniam voluptatem corporis
                  vitae mollitia laborum corrupti ullam rem?
                </p> */}
              </div>
              <div className="project-details__tools-used">
                <h3 className="project-details__content-title">
                  Herramientas usadas
                </h3>
                <div className="skills">
                  <div className="skills__skill">HTML</div>
                  <div className="skills__skill">CSS</div>
                  <div className="skills__skill">JavaScript</div>
                  <div className="skills__skill">React</div>
                  <div className="skills__skill">SASS</div>
                  <div className="skills__skill">GIT</div>
                  {/* <div className="skills__skill">Shopify</div>
                  <div className="skills__skill">Wordpress</div>
                  <div className="skills__skill">Google ADS</div>
                  <div className="skills__skill">Facebook Ads</div>
                  <div className="skills__skill">Android</div>
                  <div className="skills__skill">IOS</div> */}
                </div>
              </div>
              <div className="project-details__links">
                <h3 className="project-details__content-title">
                  Mirar el proyecto:
                </h3>
                <a
                  href="#"
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live WEB
                </a>
                <a
                  href="#"
                  className="btn btn--med btn--theme-inv project-details__links-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link del repositorio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {project ? (
        <div>
          <h1>{project.title}</h1>
          <p>About: {project.about}</p>
          <p>Tags: {project.tags.join(', ')}</p>
          <img src={project.img} alt={project.title} />
          <p>Web: <a href={project.web} target="_blank" rel="noopener noreferrer">{project.web}</a></p>
          <p>Repo: <a href={project.repo} target="_blank" rel="noopener noreferrer">{project.repo}</a></p>
          <p>More Details: <a href={project.moreDetails} target="_blank" rel="noopener noreferrer">{project.moreDetails}</a></p>
        </div>
      ) : (
        <p>Proyecto no encontrado</p>
      )} */}
    </div>
  );
};

export default ProjectDetails;
