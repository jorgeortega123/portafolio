import { useContext } from "react";
import { ImageContext } from "./ImagesContext";

function useImagesContext(): {
  imageMap: object;
  isLoaded: boolean;
} {
  const res = useContext(ImageContext) as {
    imageMap: object;
    isLoaded: boolean;
  };
  return res;
}

export default useImagesContext;
