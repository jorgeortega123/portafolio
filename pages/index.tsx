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
      <div id="home">

        <Hero />
        <About />
        <Experience />
        <Projects />
        <Libraries />
        <Contact />

      </div>
    </>
  );
}
