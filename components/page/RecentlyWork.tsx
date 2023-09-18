import { Button, H1, Img, P, useT } from "cllk";
import React from "react";

type Props = {};

function RecentlyWork({}: Props) {
  const { t } = useT();
  return (
    <div className="space-y-5">
      <H1 size="2rem">{t("Mi trabajo reciente", "My recently work")} </H1>
      <div className="rounded-3xl bg-zinc-800 w-10/12 mx-auto">
        <Img
          className="w-full rounded-3xl "
          src={"/asset/llampukaq.webp"}
        ></Img>
        <div className="p-5 space-y-3">
          <H1>Llampukaq Technology </H1>
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
      </div>
    </div>
  );
}

export default RecentlyWork;
