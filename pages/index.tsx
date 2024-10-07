import About from "@/components/About";
import Contact from "@/components/Contact";
import ContactFormNew from "@/components/contact/Contacto";
import ContactForm from "@/components/ContactNew";

import Estadisticas from "@/components/Estadisticas";
import Experience from "@/components/Experience";

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
import Proyecto from "@/components/Proyecto";
import Testimonials from "@/components/proyectos/ProyectoContainer";
import Tarjetas from "@/components/Tarjetas";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Luis Ortega</title>
        <meta
          name="description"
          content="Conoce más acerca del mejor desarrollador Full Stack en Quito. Mira sus proyectos y conoce su trabajo dentro del mundo de la informática."
        />
      </Head>
      <div className="">
        <Hero />
        <div id="me">
          <About />
        </div>
        <div id="about">
          <Experience />
        </div>
        <div id="tarjetas">
          <Tarjetas />
        </div>
        <Testimonials />
        {/* <Proyecto /> */}
        {/* <div className="bg-white" id="proyectos">
          <Projects />
        </div> */}
        <div className="bg-white">
          <Estadisticas />
        </div>
        {/* <Libraries /> */}
        <div className=" bg-[#efefef]" id="contacto">
          {/* <Contact /> */}
          <ContactFormNew />
        </div>
      </div>
    </>
  );
}
