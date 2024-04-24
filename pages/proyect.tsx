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
    <div className="relative bg-gray-600 ">
      {/* <div className="absolute w-[220px] h-[540px] border py-7 px-2 z-[200] top-0 left-0 bg-black">
        <p className="text-[80rem]">Regresar donde estaba</p>
      </div> */}

      <section className=" project-cs-hero   ">
        <div className="project-cs-hero__content flex flex-col   w-max ">
          <h1 className="heading-primary  fondo-bold text-[5.2rem]">
            {project?.title}
          </h1>
          {/* <div className="project-cs-hero__info">
            <p className="text-primary flex ">{project?.about}</p>
          </div> */}
          <div className=" flex justify-start gap-3 text-[2rem]  ">
            <a
              style={{ transition: ".2s all" }}
              href={project?.web}
              className="bg-white transition-custom text-black hover:hover:opacity-70 rounded-[6px] mt-[5rem] px-[5rem] py-[1rem] border  "
              target="_blank"
              rel="noopener noreferrer"
            >
              Link de página
            </a>
            <a
              href={project?.repo}
              className=" hover:opacity-70 rounded-[6px] mt-[5rem] px-[3rem] py-[1rem] border border-white "
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </div>
        </div>
        <div className="main-container">
          <div className="">
            <div className="mt-[80px] p-12 w-full items-center flex justify-center ">
              {/* <Laptop url={"/example.png"}></Laptop> */}
              <img
                src={project?.img}
                alt="Project Image"
                className="project-details__showcase-img max-w-[800px]"
              />
            </div>
            <div className="project-details__content-main text-black/90">
              <div className="project-details__desc inverse full-bleed ">
                <h3 className="project-details__content-title inverse ">
                  Características del proyecto
                </h3>
                <p className="project-details__desc-para inverse opacity-90">
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
                <h3 className="project-details__content-title text-white">
                  Herramientas usadas
                </h3>
                <div className="skills">
                  {project?.tags.map((e, i) => (
                    <div
                      key={`tags-${i}`}
                      className="skills__skill cursor-default text-white/80"
                    >
                      {e}
                    </div>
                  ))}

                  {/* <div className="skills__skill">Shopify</div>
                  <div className="skills__skill">Wordpress</div>
                  <div className="skills__skill">Google ADS</div>
                  <div className="skills__skill">Facebook Ads</div>
                  <div className="skills__skill">Android</div>
                  <div className="skills__skill">IOS</div> */}
                </div>
              </div>
              <div className="project-details__links pb-12">
                <h3 className="project-details__content-title text-white">
                  Mirar el proyecto:
                </h3>
                <a
                  href={project?.web}
                  className="btn btn--med btn--theme project-details__links-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live WEB
                </a>
                <a
                  href={project?.repo}
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
      <section className="project-details"></section>

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
