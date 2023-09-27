import { Button, Container, H1, Img, P, useT } from "cllk";
import React from "react";

type Props = {};

function RecentlyWork({}: Props) {
  const { t } = useT();
  return (
    <div className="space-y-5">
      <H1 size="2rem">{t("Mi trabajo reciente", "My recently work")} </H1>
      <Container gradient="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
        <div className="p-5 space-y-3">
          <H1 size={"2em"}>Llampukaq Technology </H1>
          <P>
            {t(
              "My trabajo en esta empresa consitio en mantener toda la infraestructura frontend, coenctar correctamente los datos de backend y mantener el rendimiento de frontend",
              "My job at this company is to maintain the entire frontend infrastructure, correctly connect backend data, and maintain frontend performance."
            )}
          </P>
          <Button
            onClick={() => {
              window.open("https://llampukaq.pages.dev/");
            }}
            center
          >
            Mirar
          </Button>
        </div>
        <div className="flex justify-center space-x-10">
          <Img
            className="w-full rounded-3xl "
            src={"/asset/llampukaq.webp"}
          ></Img>
          <Img
            className="w-full rounded-3xl "
            src={"/asset/llampukaq.webp"}
          ></Img>
        </div>
      </Container>
    </div>
  );
}

export default RecentlyWork;
