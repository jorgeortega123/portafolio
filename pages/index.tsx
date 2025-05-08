import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactFormNew from "@/components/contact/Contacto";
import ContactForm from "@/components/ContactNew";

import Estadisticas from "@/components/Estadisticas";
import Experience from "@/components/Experience";
import { FormularioContacto } from "@/components/Form/FormularioContacto";

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Proyecto from "@/components/Proyecto";
import Testimonials from "@/components/proyectos/ProyectoContainer";
import ProyectosPersonales from "@/components/ProyectosPersonales";
import Tarjetas from "@/components/Tarjetas";
import TarjetasNew from "@/components/Tarjetas/Tarjetas";
import { dataPage } from "@/context/dataPage";
import Head from "next/head";
export const getStaticProps = async () => {
  const dataPageProps = dataPage; // Tu función para obtener datos
  return { props: { dataPageProps } };
};

export default function Home({ dataPageProps }: any) {
  return (
    <>
      <Head>
        <title>{dataPageProps.nombre} | Inicio</title>
        <meta
          name="description"
          content="Conoce más acerca del mejor desarrollador Full Stack en Quito. Mira sus proyectos y conoce su trabajo dentro del mundo de la informática."
        />
      </Head>
      <div className="bg-white">
        <Hero />
        <div className="px-4 2xl:px-0">
          <div id="me">
            <About />
          </div>
          <div id="about">
            <Experience />
          </div>
        </div>

        <div id="tarjetas">
          <TarjetasNew />
          {/* <Tarjetas /> */}
        </div>
        <Testimonials />
        {/* <Proyecto /> */}
        {/* <div className="bg-white" id="proyectos">
          <Projects />
        </div> */}
        <ProyectosPersonales />
        {/* <div className="bg-white">
          <Estadisticas />
        </div> */}
        {/* <Libraries /> */}
        <div className=" bg-[#efefef]" id="contacto">
          {/* <Contact /> */}
          <ContactFormNew />
        </div>
      </div>
    </>
  );
}
