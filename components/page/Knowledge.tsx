import { H1, Icons, useCss, useT } from "cllk";
import React from "react";

function Knowledge() {
  useCss(`.gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(var(--gw, 200px), 1fr));
        }`);
  const frontend = [
    { icons: "IconBrandReact", name: "React" },
    { icons: "IconBrandHtml5", name: "Html" },
    { icons: "IconBrandJavascript", name: "Javascript" },
    { icons: "IconBrandTypescript", name: "Typescript" },
    { icons: "IconBrandSass", name: "Sass" },
    { icons: "IconBrandTailwind", name: "Tailwind" },
    { icons: "IconBrandCss3", name: "Css3" },
    { icons: "IconBrandFramerMotion", name: "Motion" },
  ];
  const backend = [
    { icons: "IconBrandDeno", name: "Deno" },
    { icons: "IconBrandMongodb", name: "Mongodb" },
  ];
  const tools = [
    { icons: "IconBrandNpm", name: "Npm" },
    { icons: "IconBrandGit", name: "Git " },
    { icons: "IconBrandGithub", name: "Github" },
    { icons: "IconBrandDocker", name: "Docker" },
    { icons: "IconBrandFigma", name: "Figma" },
    { icons: "IconBrandCloudflare", name: "Cloudflare" },
  ];
  const { t } = useT();
  return (
    <div className="space-y-10">
      <H1 size={"2rem"}>{t("Conocimiento", "Knowledge")} </H1>
      <div>
        <H1 size={"1rem"}>{t("Frontend", "Frontend")} </H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "100px" }}>
          {frontend.map((index, key) => (
            <div
              key={key}
              className="mx-auto w-min flex flex-col items-center justify-center"
            >
              <Icons size={60} icon={index.icons as any} />
              <H1>{index.name}</H1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <H1 size={"1rem"}>{t("Backend", "Backend")} </H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "150px" }}>
          {backend.map((index, key) => (
            <div
              key={key}
              className="mx-auto w-min flex flex-col justify-center items-center"
            >
              <Icons size={60} icon={index.icons as any} />
              <H1>{index.name}</H1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <H1 size={"1rem"}>{t("Herramientas","Tools")} </H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "100px" }}>
          {tools.map((index, key) => (
            <div
              key={key}
              className="mx-auto w-min flex flex-col justify-center items-center"
            >
              <Icons size={60} icon={index.icons as any} />
              <H1>{index.name}</H1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
