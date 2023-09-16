import { ImageContextProvider } from "@/context/ImagesContext";
import "@/styles/globals.css";
import { Provider } from "cllk";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/effect-cards";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ImageContextProvider>
        <Component {...pageProps} />
      </ImageContextProvider>
    </Provider>
  );
}
