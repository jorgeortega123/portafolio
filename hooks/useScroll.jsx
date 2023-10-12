import React, { useEffect } from "react";

const useScrollTo = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);

    if (element) {
      const topOffset = element.getBoundingClientRect().top;
      const scrollOptions = {
        behavior: "smooth",
        top: window.pageYOffset + (topOffset - 20),
      };
      window.scrollTo(scrollOptions);
    }
  };
  return scrollToElement;
};

export default useScrollTo;
