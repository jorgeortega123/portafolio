import useScrollTo from "@/hooks/useScroll";

import React, { useState, useEffect } from "react";
import Descarga from "./sub/Descarga";
import useMainContext from "@/context/useMainContext";
import Header from "./Header";
import HandwritingAnimation from "./TypeEfecto/HandwritingAnimation";
import NavBar from "./NavBar";
import { dataPage } from "@/context/dataPage";
import { ICONS, Icons } from "@llampukaq/icons";
import { useTranslations } from "next-intl";
import { Wand2, Loader2 } from "lucide-react";

function Hero() {
  const { isLoad, numberCharge } = useMainContext();
  const scrollToElement = useScrollTo();
  const [backgroundPrompt, setBackgroundPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    'url("https://api.llampukaq.com/v1/images?url=https://jandrea-backend.llampukaq.workers.dev/images/image/415dd9e0-3e5c-434f-8122-5cc6f0bdc586&output=webp&w=1950&q=90")'
  );
  const defaultBackgroundImage =
    'url("https://api.llampukaq.com/v1/images?url=https://jandrea-backend.llampukaq.workers.dev/images/image/415dd9e0-3e5c-434f-8122-5cc6f0bdc586&output=webp&w=1950&q=90")';
  const [showInitialAnimation, setShowInitialAnimation] = useState(true);

  const handleOnClick = (e: string) => {
    scrollToElement(e);
  };

  const prompts = [
    "un 'hola mundo' escrito  con con nubes en un cielo estrellado de noche con caligrafica de letra escrita",
    "Montañas nevadas con aurora boreal en el cielo nocturno",
    "el logo de star wars remaked en graffiti en una pared urbana",
  
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialAnimation(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const generateBackground = async (prompt: string) => {
    setIsGenerating(true);
    try {
      // Primero obtenemos la imagen de la URL
      const imageResponse = await fetch(
        "https://api.llampukaq.com/v1/images?url=https://jandrea-backend.llampukaq.workers.dev/images/image/bb15c4d9-d12e-44a0-ae34-d30a5cd47f90&output=webp&w=1950&q=90"
      );
      const imageBlob = await imageResponse.blob();

      // Convertimos a base64
      const imageBase64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(",")[1];
          resolve(base64);
        };
        reader.readAsDataURL(imageBlob);
      });

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateContent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-client": "google-genai-sdk/1.16.0 gl-node/web",
            "x-goog-api-key": process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `De la imagen adjunta, mantén la relación de aspecto y quiero que "${prompt.trim()}" recubre toda la imagen adjunta. Devuelve la respuesta como una imagen`,
                  },
                  {
                    inlineData: {
                      mimeType: imageBlob.type,
                      data: imageBase64,
                    },
                  },
                ],
              },
            ],
          }),
        }
      );

      const result = await response.json();
      console.log("Background generated:", result);

      if (
        result.candidates &&
        result.candidates[0] &&
        result.candidates[0].content
      ) {
        const parts = result.candidates[0].content.parts;

        // Buscar si hay una imagen en la respuesta
        const imagePart = parts.find((part: any) => part.inlineData);

        if (imagePart && imagePart.inlineData) {
          // Si hay una imagen, convertirla a URL y establecerla como fondo
          const imageUrl = `data:${imagePart.inlineData.mimeType};base64,${imagePart.inlineData.data}`;
          setBackgroundImage(`url("${imageUrl}")`);
        } else {
          // Si solo hay texto, mostrar mensaje
          console.log("Respuesta de Gemini:", parts[0].text);
          if (prompt !== prompts[0]) {
            alert("¡Fondo generado! Descripción: " + parts[0].text);
          }
        }
      }
    } catch (error) {
      console.error("Error generating background:", error);
      // Si hay error, volver al fondo por defecto
      setBackgroundImage(defaultBackgroundImage);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateBackground = async () => {
    if (!backgroundPrompt.trim()) return;

    await generateBackground(backgroundPrompt);
    setBackgroundPrompt("");
    setShowInput(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleGenerateBackground();
    }
    if (e.key === "Escape") {
      setShowInput(false);
      setBackgroundPrompt("");
    }
  };

  const sociaMedia = [
    {
      name: "linkedin",
      url: dataPage.social.linkedin,
      icon: "IconBrandLinkedin" as ICONS,
    },
    {
      name: "git hub",
      url: dataPage.social.github,
      icon: "IconBrandGithub" as ICONS,
    },
  ];
  const carBrands = ["Toyota", "Honda", "BMW", "Tesla", "Ford"];
  const t = useTranslations("");
  const services = t.raw("services") as string[];
  return (
    <div
      id="main-div"
      style={{
        backgroundImage: backgroundImage,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="home-hero relative overflow-hidden pattern bg-gray-900 "
    >
      <NavBar />
      <div className="bg-[#00000040] w-full min-h-[100vh] h-full relative flex flex-col justify-between">
        <Header />
        {!isLoad && (
          <div
            className={`fixed transition-all duration-300 top-0 z-[3] h-[5px] opacity-30  left-0 bg-blue-400 w-full max-w-[${numberCharge}%]`}
          >
            {/* <div className="relative flex w-full px-12 py-2 gap-2 items-center  rounded-[14px] overflow-hidden justify-center text-white/70">
              <Icons
                className="w-12 fill-black"
                stroke="#cbdade"
                icon="loading"
              ></Icons>
              <p className="lg:text-[1.4rem]">Cargando recursos...</p>
              <div
                className={`absolute transition-loading z-[-1] left-0 h-full w-[${numberCharge}%] bg-blue-400`}
              ></div>
            </div> */}
          </div>
        )}
        <div className="flex justify-start items-center mb-[28px] px-7 md:px-auto md:mb-[5.5%] md:ml-[8.5%] h-full md:h-auto">
          <HandwritingAnimation words={services} />
          <div className="absolute opacity-0 md:opacity-100 md:left-auto bot md:right-[18.7%] md:bottom-[10%]">
            <div className="mouse" />
          </div>
        </div>
        <div className="home-hero__socials">
          {sociaMedia.map((e, l) => (
            <div key={"social" + l} className="home-hero__social">
              <a
                href={e.url}
                target="_blank"
                className="home-hero__social-icon-link"
              >
                <Icons size={28} icon={e.icon} className="stroke-gray-200" />
              </a>
            </div>
          ))}
          {/*
          <div className="home-hero__social">
            <a
              target="_blank"
              href="https://github.com/luis030821"
              className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
            >
              <img
                src="./assets/png/insta-ico.png"
                alt="icon"
                className="home-hero__social-icon"
              />
            </a>
          </div> */}
        </div>

        {/* AI Background Changer */}
        <div className="absolute bottom-4 right-4 z-50 flex items-center gap-3">
          {!showInput && (
            <p
              onClick={() => setShowInput(true)}
              className="text-gray-400 cursor-pointer  text-sm font-medium  py-2 "
            >
              ¿Y si... cambiamos el fondo de pantalla?
            </p>
          )}
          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="relative bg-gray-900 border border-gray-700 rounded-lg p-3 text-gray-100 hover:bg-gray-800 transition-colors flex items-center space-x-2 shadow-lg overflow-hidden"
              disabled={isGenerating}
            >
              {showInitialAnimation && (
                <div
                  className="absolute inset-0 animate-spin"
                  style={{
                    background:
                      "conic-gradient(from 0deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
                    borderRadius: "8px",
                  }}
                />
              )}
              {showInitialAnimation && (
                <div className="absolute inset-[2px] bg-gray-900 rounded-md z-10" />
              )}
              <div className="relative z-20 flex items-center space-x-2">
                {isGenerating ? (
                  <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />
                ) : (
                  <Wand2 className="h-5 w-5 text-blue-400" />
                )}
                <span className="text-sm">Cambiar fondo con IA</span>
              </div>
            </button>
          ) : (
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 w-80 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-100 flex items-center">
                  <Wand2 className="h-4 w-4 mr-2 text-blue-400" />
                  Cambiar fondo a través de la IA
                </h3>
                <button
                  onClick={() => {
                    setShowInput(false);
                    setBackgroundPrompt("");
                  }}
                  className="text-gray-400 hover:text-gray-200 transition-colors"
                  disabled={isGenerating}
                >
                  ×
                </button>
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <input
                    type="text"
                    value={backgroundPrompt}
                    onChange={(e) => setBackgroundPrompt(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe el fondo que quieres generar..."
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    autoFocus
                    disabled={isGenerating}
                  />

                  {/* Sugerencias predefinidas */}
                  <div className="flex flex-wrap gap-1">
                    {prompts.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setBackgroundPrompt(suggestion)}
                        disabled={isGenerating}
                        className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md transition-colors disabled:opacity-50"
                      >
                        {suggestion.length > 40
                          ? suggestion.substring(0, 40) + "..."
                          : suggestion}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400">
                    Presiona Enter para generar o Escape para cancelar
                  </p>
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {
                      setShowInput(false);
                      setBackgroundPrompt("");
                    }}
                    disabled={isGenerating}
                    className="px-3 py-1.5 text-sm text-gray-300 hover:text-gray-100 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleGenerateBackground}
                    disabled={!backgroundPrompt.trim() || isGenerating}
                    className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="h-3 w-3 animate-spin" />
                        <span>Generando...</span>
                      </>
                    ) : (
                      <span>Generar nuevo fondo</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <Descarga /> */}
      </div>
    </div>
  );
}

export default Hero;
