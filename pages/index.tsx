import {
  Container,
  DropSettingTheme,
  Dropdown,
  H1,
  Input,
  P,
  useCss,
} from "cllk";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <>
      <div className="h-screen ">
        <div className="h-full flex flex-col items-center justify-center">
          <H1 span size={"8rem"}>
            Luis Ortega
          </H1>
          <H1 size={"3rem"}>Web Developer</H1>
          <H1 size={"1.5rem"}>Portafolio</H1>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-b from-sky-400 to-sky-200 rounded-full ">
        <div className="rounded-full w-11/12">
          <H1>about Me</H1>
          <P>Siii</P>
        </div>
      </div>
      <div className="h-screen g">
        <H1>My recent work</H1>
        <div className="">
          <Swiper
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={true}
            modules={[EffectCards]}
            effect={"cards"}
            spaceBetween={50}
            slidesPerView={3}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <H1>My knowlege</H1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Container className="h-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></Container>
          <Container className="h-20 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></Container>
          <Container className="h-20 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></Container>
          <Container className="h-20 bg-gradient-to-r from-indigo-300 to-purple-400"></Container>
          <Container className="h-20 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900"></Container>
          <Container className="h-20 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900"></Container>
        </div>
      </div>
      <Container className="dark:bg-zinc-800 bg-zinc-200 max-w-[600px] mx-auto flex justify-between p-5">
        <div className="w-6/12">
          <H1>Contatanme</H1>
        </div>
        <div className="w-6/12">
          <Input label="Nombre" />
          <Input label="Email" />
          <Input label="Description" />
        </div>
      </Container>
      <Dropdown nav={[{ icon: "", title: "si" }]}>
        <DropSettingTheme i={0} />
      </Dropdown>
    </>
  );
}
