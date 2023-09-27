import Contact from "@/components/Contact";
import About from "@/components/page/About";
import Comunity from "@/components/page/Comunity";
import Hero from "@/components/page/Hero";
import Knowledge from "@/components/page/Knowledge";
import RecentlyWork from "@/components/page/RecentlyWork";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="space-y-10 overflow-x-hidden mx-auto max-w-[1000px]">
        <About />
        <Knowledge />
        <RecentlyWork />
        <Comunity />
        <Contact />
      </div>
    </>
  );
}
