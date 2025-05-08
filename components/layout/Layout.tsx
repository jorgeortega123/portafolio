import React, { ReactNode, useEffect, useState } from "react";

import useMainContext from "@/context/useMainContext";
import Footer from "./Footer";
import NavBar from "../NavBar";
import NavBarV2 from "../NavBarV2";

function Layout({ children }: { children: ReactNode }) {
  const [minHeight, setMinHeight] = useState<number>(0);

  return (
    <>
      <div className={` min-h-[calc(100vh_+_350px)] mb-[800px] lg:mb-[550px] `}>
        <NavBar />

        <div className={` `}>{children}</div>

        {/* <div className={`min-h-[${minHeight}px] mt-[100px]`}>{children}</div> */}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
