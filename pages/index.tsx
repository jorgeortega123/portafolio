const About = dynamic(import("@/components/page/About"));
const Comunity = dynamic(import("@/components/page/Comunity"));
const Hero = dynamic(import("@/components/page/Hero"));
const Knowledge = dynamic(import("@/components/page/Knowledge"));
const RecentlyWork = dynamic(import("@/components/page/RecentlyWork"));
import { DropSettingTheme, Dropdown } from "cllk";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <div className="space-y-10 max-w-[390px] mx-auto">
        <Hero />
        <About />
        <Knowledge />
        <RecentlyWork />
        <Comunity />
        <Dropdown nav={[{ icon: "", title: "si" }]}>
          <DropSettingTheme i={0} />
        </Dropdown>
      </div>
    </>
  );
}
