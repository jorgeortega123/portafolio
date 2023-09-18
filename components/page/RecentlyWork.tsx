import { Button, H1, Img, P } from "cllk";
import React from "react";

type Props = {};

function RecentlyWork({}: Props) {
  return (
    <div className="space-y-5">
      <H1 size="2rem">My recent work</H1>
      <div className="rounded-3xl bg-zinc-800 w-10/12 mx-auto">
        <Img
          className="w-full rounded-3xl border"
          src={"/asset/llampukaq.webp"}
        ></Img>
        <div className="p-5 space-y-3">
          <H1>Llampukaq Technology</H1>
          <P>
            My trabajo en esta empresa consitio en mantener toda la
            infraestructura frontend, coenctar correctamente los datos de
            backend y mantener el rendimiento de frontend
          </P>
          <Button center>Mirar</Button>
        </div>
      </div>
      <div className="rounded-3xl bg-zinc-800 w-10/12 mx-auto">
        <Img
          className="w-full rounded-3xl border"
          src={"/asset/llampukaq.webp"}
        ></Img>
        <div className="p-5 space-y-3">
          <H1>Llampukaq Technology</H1>
          <P>
            My trabajo en esta empresa consitio en mantener toda la
            infraestructura frontend, coenctar correctamente los datos de
            backend y mantener el rendimiento de frontend
          </P>
          <Button center>Mirar</Button>
        </div>
      </div>
    </div>
  );
}

export default RecentlyWork;
