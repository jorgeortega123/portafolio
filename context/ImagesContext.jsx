import React, { createContext, useContext, useEffect, useState } from "react";
const data = [

  {
    id: "react",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686789236/ezgif.com-resize_1_h4svpb.png",
  },
  {
    id: "html",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/pngegg_pnsolw.png",
  },
  {
    id: "contact",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686789367/ezgif.com-gif-maker_1_qlg1d7.png",
  },

  {
    id: "css",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/k_fhm489.png",
  },
  {
    id: "javascript",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845292/javascript-39404_yvaz5m.png",
  },
  {
    id: "typescript",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/typescript_original_logo_icon_146317_p5xnyi.png",
  },
  {
    id: "vuejs",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1672891267/vue_pcrlxt.png",
  },
  {
    id: "sass",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1667845293/sass-logo-7702_sxv52z.png",
  },
  {
    id: "tailwindcss",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805670/Tailwind_CSS_Logo.svg_mch3ci.png",
  },
  {
    id: "framer-motion",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805764/framer-motion-logo-DA1E33CAA1-seeklogo.com_k8smvm.png",
  },
  {
    id: "bootstrap",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805814/bootstrap-logo-shadow_wsyug6.png",
  },
  {
    id: "material-ui",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806164/logo_t5er37.png",
  },
  {
    id: "nodejs",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805871/node-js-1174925_tubnek.webp",
  },
  {
    id: "express",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805507/6202fcdee5ee8636a145a41b_1234_xvfbkk.png",
  },
  {
    id: "python",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806004/267_Python-512_gt1yds.webp",
  },
  {
    id: "git",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805964/Git-Icon-1788C_ncuqfg.png",
  },
  {
    id: "github",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806043/2111612_ftyjzh.png",
  },
  {
    id: "figma",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805907/5968705_flyd73.png",
  },
  {
    id: "linux",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670805986/6124995_xpzgrl.png",
  },
  {
    id: "docker",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1694481157/pngwing.com_ckwrjs.png",
  },
  {
    id: "java",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1694481290/pngwing.com_2_v4uc8q.png",
  },
  {
    id: "cloudfare-pages",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670806235/download_oglnre.png",
  },
  {
    id: "services-1",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817561/group_r5jzkt.png",
  },
  {
    id: "services-2",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817691/group_2_qb8vxr.png",
  },
  {
    id: "services-3",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678816061/Group_1_xvfjme.png",
  },
  {
    id: "services-4",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1678817639/group_1_karpnt.png",
  },
];

var REMOVE_ARRAYS = [
  {
    id: "animGift",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686788609/ezgif.com-optimize_1_qawhr7.gif",
  },
  {
    id: "mym",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686788933/ezgif.com-gif-maker_rifvrf.png",
  },
  {
    id: "ctn",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1674605659/Frame_4_xzpybs.png",
  },
  {
    id: "jm",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686773569/Frame_2_ixg8vx.png",
  },
  {
    id: "flm",
    link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1670433485/Frame_2_2_jvxcat.png",
  },
];

export const ImageContext = createContext({});

// Proveedor del contexto
export const ImageContextProvider = ({ children }) => {
  const [imageMap, setImageMap] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [numberCharge, setnumberCharge] = useState(0);
  const [reloadImg, setreloadImg] = useState(false);
  const [alreadySet, setalreadySet] = useState(false)
  const numbersImages = data.length;
  // useEffect(() => {
  //   if (alreadySet===true) return
  //   if (window.innerWidth < 1280) {
  //     // Ejecutar código cuando el ancho supera los 1280 píxeles
  //     console.log("El ancho es mayor que 1280 píxeles");
  //     data.push();
  //     setalreadySet(true)
  //     // Aquí puedes poner el código que deseas ejecutar
  //   }
  //   const handleResize = () => {
  //     if (window.innerWidth < 1280) {
  //       // Ejecutar código cuando el ancho supera los 1280 píxeles
  //       console.log("El ancho es mayor que 1280 píxeles");
  //       data.push({
  //         id: "animGift",
  //         link: "https://res.cloudinary.com/ddcoxtm2v/image/upload/v1686788609/ezgif.com-optimize_1_qawhr7.gif",
  //       });
  //       setalreadySet(true)
  //       // Aquí puedes poner el código que deseas ejecutar
  //     }
  //   };
 

  //   // Agregar el evento de escucha al cargar el componente
  //   window.addEventListener("resize", handleResize);

  //   // Limpiar el evento de escucha al desmontar el componente
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  useEffect(() => {
    const loadImages = async () => {
      let num = 0;
      try {
        const map = {};

        for (const item of data) {
          setnumberCharge(++num);

          const response = await fetch(item.link);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          map[item.id] = url;
        }

        setImageMap(map);
        setIsLoaded(true);
      } catch (error) {
        console.log("Error loading images:", error);
        setIsLoaded(true);
      }
    };

    loadImages();
  }, [reloadImg]);

  return (
    <ImageContext.Provider
      value={{ imageMap, isLoaded, numberCharge, numbersImages }}
    >
      {children}
    </ImageContext.Provider>
  );
};
