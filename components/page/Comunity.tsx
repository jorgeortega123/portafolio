import { Button, Container, H1, Marquee, P, useT } from "cllk";
import React from "react";
function Comunity() {
  const { t } = useT();
  const data = [
    {
      title: "@llampukaq/realm",

      p: t(
        "Esta es una libreria que dise;e para esta empresa, la cual mantengo y uso con frecuencia en mis proyectos, permite gestionar el backend as services de realm, de manera mas sencilla y con multiples plugins que le va a dar facilidad de uso",
        "This is a library that I designed for this company, which I maintain and use frequently in my projects, it allows you to manage the backend as services of realm, in a simpler way and with multiple plugins that will give it ease of use"
      ),
      link: "https://realm.llampukaq.com/",
    },
    {
      title: "@llampukaq/builder",

      p: t(
        "Un proyecto que aún está en desarrollo y que permite utilizar la biblioteca Grapesjs, potenciando y creando complementos de fácil acceso.",
        "A project that is still in development and allows the use of the grapesjs library, enhancing and creating easy-access plugins"
      ),
      link: "https://www.npmjs.com/package/@llampukaq/builder",
    },
    {
      title: "cllk",

      p: t(
        "una biblioteca de componentes esencial y fácil de usar, pretende ser ligera y fácil de usar",
        "a essential and easy-to-use component library, it aims to be light and easy to use"
      ),
      link: "https://www.npmjs.com/package/cllk",
    },
    {
      title: "react-languajes",

      p: t(
        "una libreria para integrar traduccion en react",
        "una libreria para integrar traduccion en react"
      ),
      link: "https://www.npmjs.com/package/cllk",
    },
    {
      title: "react-cache-state",

      p: t(
        "una libreria que permite gurdar datos, persistiendo en memoria y encritando la informacion guardad",
        "a library that allows saving data, persistence in memory and encrypting the saved information"
      ),
      link: "https://www.npmjs.com/package/react-cache-state",
    },
    {
      title: "react-scroll-video",

      p: t(
        "Este componente permite desplazarse en videos.",
        "This component allows scrolling in videos"
      ),
      link: "https://www.npmjs.com/package/react-scroll-video",
    },
  ];
  return (
    <div className="w-full space-y-3">
      <H1 size="2rem">{t("Comunidad", "Comunity")} </H1>
      <div className="w-10/12 mx-auto">
        <P>
          {t(
            "Libreria y proyectos de codugo abierto que trata de mejorar la experiencia de desarrollo en react",
            "Open source library and projects that try to improve the development experience in react"
          )}
        </P>
      </div>
      <Marquee className="flex justify-center items-center gap-5" speed={100}>
        {data.map((x, index) => (
          <Container
            c
            key={index}
            className={`flex flex-col justify-between items-center max-w-[400px] space-y-5 h-full`}
          >
            <H1 size={"1.5em"}>{x.title}</H1>
            <P>{x.p}</P>
            <Button
              onClick={() => {
                window.open(x.link);
              }}
            >
              {t("Abrir", "Open")}
            </Button>
          </Container>
        ))}
      </Marquee>
    </div>
  );
}

export default Comunity;
