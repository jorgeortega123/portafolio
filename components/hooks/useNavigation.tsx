// useNavigation.js
import { useCallback } from "react";

const useNavigation = () => {
  const goToUrl = useCallback((linkOpen: string, method?: string) => {
    const link = document.createElement("a");
    link.href = linkOpen;
    if (method !== "no-external") {
      link.target = "_blank";
      link.rel = "noopener noreferrer"; // Buenas prácticas de seguridad
    }
    link.click();
  }, []);

  return { goToUrl };
};

export default useNavigation;
