import React from "react";
import useScrollTo from "../functions/useScroll.jsx";
import { goToUrl } from "../functions/functions";
import Icons from "./Icons";
export default function SocialMedia() {
  const scrollToElement = useScrollTo();
  const handleLinkedInClick = () => {
    console.log("SADASD")
    goToUrl("https://www.linkedin.com/in/luis-ortega-a866a3218/");
  };

  const handleGitHubClick = () => {
    goToUrl("https://github.com/luis030821");
  };

  const handleInstagramClick = () => {
    goToUrl("https://github.com/luis030821");
  };

  const handleContactClick = () => {
    scrollToElement("contact");
  };
  return (
    <div className="gap-3 mt-1 overflow-hidden flex z-[4]">
      <div
        onClick={handleLinkedInClick}
        className="icons-delay w-max cursor-pointer bg-[#0077b5] rounded-[18px] overflow-hidden"
      >
        <span className="absolute z-[-1] opacity-0 ml-1 pt-[2px] my-auto text-center">
          Linkedin
        </span>
        <Icons
          icon="linkedin"
          className="w-9 lg:w-11 h-auto rounded-full"
        ></Icons>
      </div>
      <div className="icons-delay w-max bg-[#000000] rounded-[18px] overflow-hidden">
        <span
          onClick={handleGitHubClick}
          className="absolute z-[-1] opacity-0 ml-2 pt-[2px] my-auto text-center"
        >
          GitHub
        </span>
        <Icons
          icon="github"
          className="w-9 lg:w-11 h-auto rounded-full p-1 bg-[#000000] text-white"
        ></Icons>
      </div>
      <div
        onClick={handleInstagramClick}
        className="icons-delay w-max bg-[#ff3612] rounded-[18px] overflow-hidden"
      >
        <span className="absolute z-[-1] opacity-0 pt-[4px] my-auto text-center text-[19px]">
          Instagram
        </span>
        <div className="w-9 lg:w-11 rounded-full overflow-hidden">
          <Icons
            icon="instagram"
            className="w-9 lg:w-11 h-auto rounded-full fill-[#e65806]"
          ></Icons>
        </div>
      </div>
    </div>
  );
}
