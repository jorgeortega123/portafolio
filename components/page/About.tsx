import { H1, Img, useT } from "cllk";
import React from "react";

function About() {
  const { t } = useT();
  return (
    <div className="my-6">
      <div className=" rounded-3xl w-10/12 mx-auto p-5 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
        <Img
          className="w-80 h-80 object-cover rounded-3xl mx-auto"
          src={
            "https://scontent.fuio1-1.fna.fbcdn.net/v/t39.30808-6/306075656_1094347401188869_5110241233234463185_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=wTX27Bh26mYAX84FVWL&_nc_ht=scontent.fuio1-1.fna&oh=00_AfDOQIa5pSiEgkvzfHRhOQUAnbKlmlhvC_XByQXrKzNKVg&oe=650A8F88"
          }
        />
        <H1 size={"2rem"}>{t("sobre mi", "about Me")} </H1>
        <p className="font-semibold">
          {t(
            "Soy un desarrollador entusiasta que lleva desarrollando desde los 17 años, me gusta probar nuevas tecnologías en el desarrollo. También me gustan los videojuegos, las motos.",
            "I am an enthusiastic developer who has been developing since I was 17, I like to try new technologies in development. I also like video games, motorcycles"
          )}
        </p>
      </div>
    </div>
  );
}

export default About;
