import { H1, Img, P, useT } from "cllk";
import React from "react";

function About() {
  const { t } = useT();
  return (
    <div className="my-6">
      <div className=" rounded-3xl w-10/12 mx-auto p-5 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
        <Img
          className="w-80 h-80 object-cover rounded-3xl mx-auto"
          src={"/profile.jpg"}
        />
        <H1 size={"2rem"}>{t("sobre mi", "about Me")} </H1>
        <P className="font-semibold">
          {t(
            "Soy un desarrollador entusiasta que lleva desarrollando desde los 17 años, me gusta probar nuevas tecnologías en el desarrollo. También me gustan los videojuegos, las motos.",
            "I am an enthusiastic developer who has been developing since I was 17, I like to try new technologies in development. I also like video games, motorcycles"
          )}
        </P>
      </div>
    </div>
  );
}

export default About;
