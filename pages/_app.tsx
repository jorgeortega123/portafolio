import type { AppProps } from "next/app";
import "../style/index.css";
import "../style/principal.css";
import MainContextComponent from "@/context/MainContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainContextComponent>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MainContextComponent>
  );
}
