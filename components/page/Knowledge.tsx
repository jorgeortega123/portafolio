import { Container, H1, Icons, useCss, useT } from "cllk";
import React from "react";

function Knowledge() {
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
      <H1 size={"2em"}>{t("Conocimiento", "Knowledge")} </H1>
      <div className="flex flex-wrap gap-5">
        <Container gradient="bg-gradient-to-r from-green-600 to-green-700">
          <H1 size={"2em"}>{t("Frontend", "Frontend")} </H1>

          <div className="flex flex-wrap gap-2">
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
        </Container>
        <Container
          gradient="bg-gradient-to-r from-red-500 to-red-700"
          className="max-w-[600px]"
        >
          <H1 size={"2em"}>{t("Herramientas", "Tools")} </H1>

          <div className="flex flex-wrap gap-2">
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
        </Container>
        <Container gradient="bg-gradient-to-r from-purple-500 to-purple-800 max-w-[400px]">
          <H1 size={"2em"}>{t("Backend", "Backend")} </H1>
          <div className="flex flex-wrap gap-2">
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
        </Container>
      </div>
    </div>
  );
}

export default Knowledge;
