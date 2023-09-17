import React from "react";
import Stars from "../stars/Stars";
import { H1, Icons } from "cllk";

function Hero() {
  return (
    <div className="h-screen gradient-initial ">
      <div className="h-full z-[1] flex flex-col items-center justify-center relative ">
        <div className="absolute w-full h-full z-[-1] ">
          <Stars></Stars>
        </div>
        <H1 span size={"4rem"}>
          Luis Ortega
        </H1>
        <H1 size={"3rem"}>Web Developer</H1>
        <H1 size={"2rem"}>Portafolio</H1>
        <div className="flex space-x-5">
          <Icons size={70} icon="IconBrandLinkedin" />
          <Icons size={70} icon="IconBrandGithub" />
          <Icons size={70} icon="IconBrandFacebook" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
