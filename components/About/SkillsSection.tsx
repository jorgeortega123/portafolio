import React from "react";
import useMainContext from "@/context/useMainContext";
import { useTranslations } from "next-intl";
import H2 from "../html/H2";
import P from "../html/P";
import Img from "../html/Img";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const SkillsSection = () => {
  const t = useTranslations("about");
  const { skills } = useMainContext();

  // Agrupar skills por categoría
  const groupedSkills = {
    frontend: skills.filter((skill) => skill.type === "fr"),
    backend: skills.filter((skill) => skill.type === "ba"),
    tools: skills.filter((skill) => skill.type === "tools"),
    design: skills.filter((skill) => skill.type === "design"),
  };

  // Configuración de categorías
  const categories = [
    {
      key: "frontend",
      title: "Frontend",
      skills: groupedSkills.frontend,
    },
    {
      key: "backend",
      title: "Backend",
      skills: groupedSkills.backend,
    },
    {
      key: "tools",
      title: "Herramientas y servicios",
      skills: groupedSkills.tools,
    },
    {
      key: "design",
      title: "Diseño Gráfico",
      skills: groupedSkills.design,
    },
  ];

  const renderSkillCard = (skill: any, index: number) => (
    <div
      key={`skill-${skill.type}-${index}`}
      className="group relative flex flex-col items-center justify-center p-2 transition-all duration-300 hover:scale-110 cursor-pointer"
    >
      {/* Contenedor de imagen */}
      <div className="relative flex-shrink-0">
        <Img
          link
          loading="lazy"
          width="40"
          className="w-8 h-8 transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          src={skill.link}
          alt={skill.id}
          style={{
            width: "clamp(2rem, 3vw, 2.5rem)",
            height: "clamp(2rem, 3vw, 2.5rem)",
          }}
        />
      </div>

      {/* Texto que aparece en hover */}
      <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[24px] flex items-center justify-center">
        <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-md border whitespace-nowrap text-center">
          {skill.id}
        </span>
      </div>
    </div>
  );

  return (
    <div className="w-full lg:w-1/2">
      <H2 size="medium" className="pt-6 lg:pt-0 mb-3 lg:mb-[3rem]">
        {t("skills")}
      </H2>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.key} className="mb-4 select-none">
            {/* Título de la categoría */}
            <h3 className="text-md font-bold text-gray-900 mb-4 pl-3">
              {category.title}
            </h3>

            {/* Swiper carousel para esta categoría */}
            <Swiper
              modules={[Autoplay]}
              spaceBetween={8}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 8,
                },
                640: {
                  slidesPerView: 3,
                  spaceBetween: 8,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 8,
                },
                1280: {
                  slidesPerView: 8,
                  spaceBetween: 8,
                },
              }}
              className="skills-swiper"
            >
              {category.skills.map((skill, index) => {
                if (!skill.link) return null;
                return (
                  <SwiperSlide key={`skill-${skill.type}-${index}`}>
                    {renderSkillCard(skill, index)}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
