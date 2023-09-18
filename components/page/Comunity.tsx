import { Container, H1, P, useT } from "cllk";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
function Comunity() {
  const { t } = useT();
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
          <SwiperSlide className="w-full mx-auto">
            <Container className="h-80 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-80 w-full bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-80 w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-80 w-full bg-gradient-to-r from-indigo-300 to-purple-400"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-80 w-full bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-80 w-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900"></Container>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Comunity;
