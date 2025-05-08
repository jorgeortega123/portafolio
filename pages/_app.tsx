import type { AppProps } from "next/app";
import "../style/index.css";
import "../style/efectos.css";
import "../style/font.css";
import "../style/principal.css";
import MainContextComponent from "@/context/MainContext";
import Header from "@/components/Header";
import Footer from "@/components/layout/Footer";
import { IconsProvider } from "@llampukaq/icons";
import Layout from "@/components/layout/Layout";
import { HeroUIProvider } from "@heroui/system";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <IconsProvider>
        <MainContextComponent>
          <Layout>
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </MainContextComponent>{" "}
      </IconsProvider>
    </HeroUIProvider>
  );
}
