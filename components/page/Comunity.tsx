import { Button, Container, H1, P, useT } from "cllk";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function Comunity() {
  const { t } = useT();
  const data = [
    {
      title: "@llampukaq/realm",
      bg: "bg-gradient-to-r from-pink-500 to-red-500",
      p: t(
        "Esta es una libreria que dise;e para esta empresa, la cual mantengo y uso con frecuencia en mis proyectos, permite gestionar el backend as services de realm, de manera mas sencilla y con multiples plugins que le va a dar facilidad de uso",
        "This is a library that I designed for this company, which I maintain and use frequently in my projects, it allows you to manage the backend as services of realm, in a simpler way and with multiple plugins that will give it ease of use"
      ),
      link: "https://realm.llampukaq.com/",
    },
    {
      title: "@llampukaq/builder",
      bg: "bg-gradient-to-r from-green-500 to-blue-500",
      p: t(
        "Un proyecto que aún está en desarrollo y que permite utilizar la biblioteca Grapesjs, potenciando y creando complementos de fácil acceso.",
        "A project that is still in development and allows the use of the grapesjs library, enhancing and creating easy-access plugins"
      ),
      link: "https://www.npmjs.com/package/@llampukaq/builder",
    },
    {
      title: "cllk",
      bg: "bg-gradient-to-r from-indigo-500 to-purple-500",
      p: t(
        "una biblioteca de componentes esencial y fácil de usar, pretende ser ligera y fácil de usar",
        "a essential and easy-to-use component library, it aims to be light and easy to use"
      ),
      link: "https://www.npmjs.com/package/cllk",
    },
    {
      title: "react-languajes",
      bg: "bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900",
      p: t(
        "una libreria para integrar traduccion en react",
        "una libreria para integrar traduccion en react"
      ),
      link: "https://www.npmjs.com/package/cllk",
    },
    {
      title: "react-cache-state",
      bg: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900",
      p: t(
        "una libreria que permite gurdar datos, persistiendo en memoria y encritando la informacion guardad",
        "a library that allows saving data, persistence in memory and encrypting the saved information"
      ),
      link: "https://www.npmjs.com/package/react-cache-state",
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
      <div className="px-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          slidesPerView={1}
          className="mySwiper"
        >
          {data.map((x, index) => (
            <SwiperSlide key={index} className="w-full mx-auto">
              <Container
                className={`h-80 w-full rounded-3xl ${x.bg} flex flex-col justify-between py-10 items-center space-y-5`}
              >
                <H1>{x.title}</H1>
                <P>{x.p}</P>
                <Button
                  onClick={() => {
                    window.open(x.link);
                  }}
                >
                  {t("Abrir", "Open")}
                </Button>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Comunity;
