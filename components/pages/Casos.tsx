import { TestimonialsIn } from "@/interface/main";
import React from "react";

export default function Caso({ trabajo }: { trabajo: TestimonialsIn }) {
  return (
    <div className=" bg-gray-900 pattern">
      <div className="max-w-[1200px] mx-auto min-h-screen h-full ">
        {trabajo.title}
      </div>
    </div>
  );
}
