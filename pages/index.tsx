import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Libraries from "@/components/Libraries";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <div id="me">
          <About />
        </div>
        <div id="about">
          <Experience />
        </div>
        <div id="proyectos">
          <Projects />
        </div>
        <Libraries />
        <div id="contacto">
          <Contact />
        </div>
      </div>
    </>
  );
}
