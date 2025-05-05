import { image } from "@heroui/theme";
import { Icons } from "@llampukaq/icons";
import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  imagen: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ imagen }) => {
  return (
    <div className="relative w-full   rouneded-full flex items-center justify-center">
      <TransformWrapper initialScale={1} centerOnInit centerZoomedOut smooth>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            {/* Controles de zoom */}
            <div className="absolute top-2 right-2 z-10 flex flex-col space-y-2">
              <button
                className="bg-white text-bittersweet-900 border min-h-[32px] border-gray-400 lg:border-none rounded p-2 px-4 hover:bg-gray-200"
                onClick={() => zoomIn()} // Envuelve la función
              >
                <Icons icon="IconPlus"></Icons>+
              </button>
              <button
                className="bg-white text-bittersweet-900 border min-h-[32px] border-gray-400 lg:border-none rounded p-2 hover:bg-gray-200"
                onClick={() => zoomOut()} // Envuelve la función
              >
                -
              </button>
              <button
                className="bg-white text-bittersweet-900 border min-h-[32px] border-gray-400 lg:border-none rounded p-2 hover:bg-gray-200"
                onClick={() => resetTransform()} // Envuelve la función
              >
                ⟳
              </button>
            </div>

            {/* Imagen con funcionalidad de zoom */}
            <div className="min-w-[400px] min-h-[350px]">
              <TransformComponent>
                <img src={imagen} alt="" />
                {/* {imagesProcesadas?.[selectedIndex]?.src ? (
                  <picture className="min-w-[250px]  w-full object-contain h-full flex items-center justify-center min-h-[250px] max-w-full   mx-auto rounded-[12px] aspect-square ">
                    <source
                      className="object-cover"
                      srcSet={`https://wsrv.nl/?url=${
                        "https://jandrea.art/" +
                        imagesProcesadas[selectedIndex].src
                      }&output=${"webp"}&w=${550}&q=${100}`}
                      media="(min-width: 1024px)"
                    />
                    <img
                      alt={`${producto?.title || "Producto"} imagen`}
                      className=""
                      src={`https://jandrea.pages.dev/${imagesProcesadas[selectedIndex].src}`}
                    />
                  </picture>
                ) : (
                  <p className="text-center text-gray-500">
                    Imagen no disponible
                  </p>
                )} */}
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ZoomableImage;
