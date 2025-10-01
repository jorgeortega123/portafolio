import type { GetStaticPropsContext } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About/About";
import Experience from "@/components/Experience";
import TarjetasNew from "@/components/Tarjetas/Tarjetas";
import Testimonials from "@/components/proyectos/ProyectoContainer";
import ProyectosPersonales from "@/components/ProyectosPersonales";
import ContactFormNew from "@/components/contact/Contacto";
import Timeline from "@/components/Timeline/Timeline";
import { dataPage } from "@/context/dataPage";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
      locale,
      dataPageProps: dataPage,
    },
  };
}

export default function Home({ dataPageProps }: any) {

  return (
    <>
      <Head>
        <title>{`${dataPageProps.nombre} | Inicio`}</title>
        <meta
          name="description"
          content="Conoce más acerca del mejor desarrollador Full Stack en Quito. Mira sus proyectos y conoce su trabajo dentro del mundo de la informática."
        />
      </Head>
      <div className="bg-white">
        <Hero />
        <div className="px-5 lg:px-12 lg:py-12 2xl:px-0">
          <div id="me">
            <About />
          </div>
          <div id="about">
            <Experience />
          </div>
        </div>
        <div id="timeline">
          <Timeline title="Mi Trayectoria" />
        </div>
        <div id="tarjetas">
          <TarjetasNew />
        </div>
        <Testimonials />
        <ProyectosPersonales />
        <div className=" bg-[#efefef]" id="contacto">
          <ContactFormNew />
        </div>
      </div>
    </>
  );
}
