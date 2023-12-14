import Icons from "@/style/Icons";
import React, { useState } from "react";

export default function Descarga() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      const url = "/Resume.pdf";
      const a = document.createElement("a");
      a.href = url;
      a.download = "Luis_Ortega_CV.pdf";
      document.body.appendChild(a);
      setTimeout(() => {
        a.click();
        // Limpiar después de la descarga
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
  
        setIsDownloading(false);
      }, 2500);
     
    } catch (error) {
      console.error("Error durante la descarga:", error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="absolute bottom-6 right-6 cursor-pointer">
      <div
        onClick={handleDownload}
        className={`container-anim-download p-2 gap-2 flex justify-center items-center border rounded-[6px] px-6 ${
          isDownloading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {isDownloading ? (
          <>
            <Icons className="w-7 h-7" icon="loading"></Icons>
            <p className="text-[1.6rem] font-bold">Descargando</p>
          </>
        ) : (
          <>
            <Icons className="w-7 h-7  overflow-visible" icon="download"></Icons>
            <p className="text-[1.6rem] font-bold">Descargar CV</p>
          </>
        )}
      </div>
    </div>
  );
}

// import Icons from "@/style/Icons";
// import React from "react";

// export default function Descarga() {
//   return (
//     <div className="absolute bottom-6 right-6 cursor-pointer">
//       <a
//         href="https://drive.google.com/uc?export=download&id=1H_8KIsgecAFDMBpo-Pvl_GfKiA0-RAu3"
//         download={"Luis Ortega CV"}
//       >
//         <div className="p-2 gap-2 flex justify-center items-center border rounded-[6px] px-6">
//           <Icons className="w-7 h-7" icon="download"></Icons>
//           <p className="text-[1.6rem] font-bold">Descargar CV</p>
//         </div>
//       </a>
//     </div>
//   );
// }
