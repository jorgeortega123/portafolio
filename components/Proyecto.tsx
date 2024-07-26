import Icons from "@/style/Icons";
import Link from "next/link";
import React from "react";

export default function Proyecto() {
  const tags = [
    "React",
    "NextJs",
    "TypeScript",
    "MongoDb",
    "MongoAtlas",
    "Realm",
    "Cloudflare",
    "PedidoYaEnvios-Api",
  ];
  return (
    <section
      id="projects"
      className="projects sec-pad z-[3] flex flex-col  bg-white"
    >
      <h2 className="heading heading-sec mb-[12rem] ">
        <span className="heading-sec__main">Mi trabajo como freelancer</span>
        <span className="heading-sec__sub text-parrafo">
          Te presento el proyecto tipo freelancer de mayor relevancia donde use
          todos mis conocimientos y fue un completo reto realizarla.
        </span>
      </h2>
      <div className="bg-[#111827] py-[50px]">
        <div className=" text-white w-full flex flex-col lg:flex-row gap-2 items-center justify-center border max-w-[1200px] mx-auto border-black/10">
          <div className="max-w-[1/2] w-full flex items-center justify-center">
            <img src="/assets/cases/spondylus.png" alt="" />
          </div>
          <div className="max-w-[1/2] w-full flex flex-col p-[36px]">
            <Link
            referrerPolicy="no-referrer"
            target="_blank"
              href="https://www.licoreriaspondylus.com/"
              className="text-[1.3rem] border w-max px-6 py-1 rounded-[6px] border-white/30 hover:border-white/60"
            >
              Visitar aplicación web
            </Link>

            <div className="flex gap-2 items-center ">
              <h2 className="font-semibold text-[4rem]  mt-2">
                Licoreria Spondylus
              </h2>
              {new Array(5).fill(null).map((e) => (
                <Icons className="fill-yellow-500 w-6 h-6" icon="star"></Icons>
              ))}{" "}
            </div>
            <p className="text-[1.6rem] py-12">
              Aplicación web que permite la compra de bebidas. Tanto el frontend
              como el backend fueron desarrollados por mí. Este proyecto
              consistió en adaptar una tienda física a una tienda en línea,
              gestionando todos los parámetros correspondientes como inventario,
              precios, descuentos, entre otros. Además, incluye la integración
              de una API con un servicio de mensajería para la entrega de
              bebidas.
            </p>
            <div></div>
            <div className="project-details__tools-used">
              <h3 className="text-[2.1rem] text-white mt-2 mb-4">
                Herramientas usadas
              </h3>
              <div className="flex gap-2 flex-wrap ">
                {tags?.map((e, i) => (
                  <div
                    key={`tags-${i}`}
                    className="text-[1.4rem] px-4 py-1  text-parrafo cursor-default text-white/70 border border-white/30 rounded-[5px]"
                  >
                    {e}
                  </div>
                ))}

                {/* <div className="skills__skill">Shopify</div>
                  <div className="skills__skill">Wordpress</div>
                  <div className="skills__skill">Google ADS</div>
                  <div className="skills__skill">Facebook Ads</div>
                  <div className="skills__skill">Android</div>
                  <div className="skills__skill">IOS</div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
