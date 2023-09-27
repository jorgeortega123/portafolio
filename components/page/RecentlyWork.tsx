import { Button, Container, H1, Img, P, useIsDesktop, useT } from "cllk";
import React from "react";

type Props = {};

function RecentlyWork({}: Props) {
  const { t } = useT();
  const { isDesktop } = useIsDesktop();
  return (
    <div className="space-y-5">
      <H1 size="2rem">{t("Mi trabajo reciente", "My recently work")} </H1>
      <Container
        p="pb-0 px-10 pt-10"
        gradient="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 space-y-3"
        className="shadow-[0px_0px_300px_0px_rgba(255,255,255,.3)]"
      >
        <H1 size={"1.9em"}>Llampukaq Technology </H1>
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
        {isDesktop ? (
          <div className="flex justify-center space-x-2 sm:space-x-5">
            <Img
              className="min-w-[800px] rounded-2xl "
              src={"/asset/llampukaq1.webp"}
            ></Img>
            <Img
              className="min-w-[800px] rounded-3xl "
              src={"/asset/llampukaq2.webp"}
            ></Img>
          </div>
        ) : (
          <div className="flex justify-center relative">
            <Img
              className="min-w-[350px] absolute top-0"
              src={"/asset/llampukaq2.webp"}
            />
            <div className="h-[200px]"></div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default RecentlyWork;
