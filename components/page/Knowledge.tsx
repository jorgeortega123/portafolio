import { H1, Icons, useCss } from "cllk";
import React from "react";

function Knowledge() {
  useCss(`.gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(var(--gw, 200px), 1fr));
        }`);
  const frontend = [
    "IconBrandReact",
    "IconBrandHtml5",
    "IconBrandJavascript",
    "IconBrandTypescript",
    "IconBrandSass",
    "IconBrandTailwind",
    "IconBrandCss3",
    "IconBrandFramerMotion",
  ];
  const backend = ["IconBrandDeno", "IconBrandMongodb"];
  const tools = [
    "IconBrandNpm",
    "IconBrandGit",
    "IconBrandGithub",
    "IconBrandDocker",
    "IconBrandFigma",
    "IconBrandCloudflare",
  ];

  return (
    <div className="space-y-10">
      <H1 size={"2rem"}>Knowledge</H1>
      <div>
        <H1 size={"1rem"}>Frontend</H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "100px" }}>
          {frontend.map((index, key) => (
            <div key={key} className="mx-auto w-min">
              <Icons size={60} icon={index as any} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {" "}
        <H1 size={"1rem"}>Backend</H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "150px" }}>
          {backend.map((index, key) => (
            <div key={key} className="mx-auto w-min">
              <Icons size={60} icon={index as any} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {" "}
        <H1 size={"1rem"}>Tools</H1>
        {/* @ts-ignore */}
        <div className="gallery gap-5 mx-auto" style={{ "--gw": "100px" }}>
          {tools.map((index, key) => (
            <div key={key} className="w-min mx-auto">
              <Icons size={60} icon={index as any} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
