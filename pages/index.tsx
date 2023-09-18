import About from "@/components/page/About";
import Comunity from "@/components/page/Comunity";
import Hero from "@/components/page/Hero";
import Knowledge from "@/components/page/Knowledge";
import RecentlyWork from "@/components/page/RecentlyWork";
import { DropSettingTheme, Dropdown, H1, Input } from "cllk";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <ParallaxProvider>
      <div className="space-y-10 max-w-[400px]">
        <Hero />
        <About />
        <Knowledge />
        <RecentlyWork />
        <Comunity />
        <Dropdown nav={[{ icon: "", title: "si" }]}>
          <DropSettingTheme i={0} />
        </Dropdown>
      </div>
    </ParallaxProvider>
  );
}
