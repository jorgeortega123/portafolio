import About from "@/components/About";
import Contact from "@/components/Contact";

import Estadisticas from "@/components/Estadisticas";
import Experience from "@/components/Experience";

import Hero from "@/components/Hero";

import Projects from "@/components/Projects";
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
      <div className="min-h-[calc(100vh_+_250px)]">
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
        <div className="bg-white" id="proyectos">
          <Projects />
        </div>
        <div className="bg-white">
          <Estadisticas />
        </div>
        {/* <Libraries /> */}
        <div className="mb-[450px]" id="contacto">
          <Contact />
          {/* <ContactForm/> */}
        </div>
      </div>
    </>
  );
}
