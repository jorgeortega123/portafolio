const About = dynamic(import("@/components/page/About"));
const Comunity = dynamic(import("@/components/page/Comunity"));
const Hero = dynamic(import("@/components/page/Hero"));
const Knowledge = dynamic(import("@/components/page/Knowledge"));
const RecentlyWork = dynamic(import("@/components/page/RecentlyWork"));
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

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
