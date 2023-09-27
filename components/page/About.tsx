import { Container, H1, Img, P, useT } from "cllk";
import React from "react";

function About() {
  const { t } = useT();
  return (
    <div className="my-6">
      <Container
        gradient="bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-700"
        className=" max-w-[600px]"
      >
        <Img
          className="w-80 h-80 object-cover rounded-3xl mx-auto"
          src={"/profile.webp"}
        />
        <H1 size={"2rem"}>{t("sobre mi", "about Me")} </H1>
        <P className="font-semibold">
          {t(
            "Soy un desarrollador entusiasta que lleva desarrollando desde los 17 años, me gusta probar nuevas tecnologías en el desarrollo. También me gustan los videojuegos, las motos.",
            "I am an enthusiastic developer who has been developing since I was 17, I like to try new technologies in development. I also like video games, motorcycles"
          )}
        </P>
      </Container>
    </div>
  );
}

export default About;
