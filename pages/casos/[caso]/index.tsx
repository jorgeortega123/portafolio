import useMainContext from "@/context/useMainContext";
import { formatWords } from "@/hooks/FormatWord";
import { TestimonialsIn } from "@/interface/main";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import Caso from "@/components/pages/Casos";

const trabajos = [
  {
    title: "Licoreria Spondylus 1",
    sub: "Ecommerce para venta de licores",
    description:
      "Aplicación web que permite la compra de bebidas. Este proyecto consistió en adaptar una tienda física a una tienda en línea, gestionando todos los parámetros correspondientes como inventario, precios, descuentos, entre otros. Además, incluye la integración de una API con un servicio de mensajería para la entrega de bebidas.",
    tags: [
      "React",
      "NextJs",
      "TypeScript",
      "MongoDb",
      "MongoAtlas",
      "Realm",
      "Cloudflare",
      "PedidoYaEnvios-Api",
    ],
    link: "https://www.licoreriaspondylus.com/",
    img: "/assets/cases/licoreriaSpondylusCase.png",
  },
  {
    title: "Licoreria Spondylus 2",
    sub: "Ecommerce para venta de licores",
    description:
      "Aplicación web que permite la compra de bebidas. Este proyecto consistió en adaptar una tienda física a una tienda en línea, gestionando todos los parámetros correspondientes como inventario, precios, descuentos, entre otros. Además, incluye la integración de una API con un servicio de mensajería para la entrega de bebidas.",
    tags: [
      "React",
      "NextJs",
      "TypeScript",
      "MongoDb",
      "MongoAtlas",
      "Realm",
      "Cloudflare",
      "PedidoYaEnvios-Api",
    ],
    link: "https://www.licoreriaspondylus.com/",
    img: "/assets/cases/licoreriaSpondylusCase.png",
  },
];

export default function Index({ trabajo }: { trabajo: TestimonialsIn }) {
  return <Caso trabajo={trabajo} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  //   const { trabajos } = useMainContext();

  const paths = trabajos.map((item) => ({
    params: { caso: formatWords(item.title) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const productId = context?.params?.caso;

  const trabajo = trabajos.find((x) => formatWords(x.title) == productId);
  const value = {
    trabajo,
  };
  return { props: value };
};
