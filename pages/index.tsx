import About from "@/components/page/About";
import Hero from "@/components/page/Hero";
import Knowledge from "@/components/page/Knowledge";
import { Container, DropSettingTheme, Dropdown, H1, Input } from "cllk";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <About />
      <Knowledge />

      <div className="">
        <H1 size="2rem">My recent work</H1>
      </div>
      <div className="w-full">
        <H1 size="2rem">Comunity</H1>
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
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-gradient-to-r from-indigo-300 to-purple-400"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900"></Container>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <Container className="h-40 w-40 bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900"></Container>
          </SwiperSlide>
        </Swiper>
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
    </div>
  );
}
