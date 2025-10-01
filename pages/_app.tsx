import type { AppProps } from "next/app";
import "../style/index.css";
import "../style/efectos.css";
import "../style/font.css";
import "../style/principal.css";
import MainContextComponent from "@/context/MainContext";
import Footer from "@/components/layout/Footer";
import { IconsProvider } from "@llampukaq/icons";
import Layout from "@/components/layout/Layout";
import { HeroUIProvider } from "@heroui/system";
import { IntlProvider } from "next-intl";
import { ToastProvider } from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={pageProps.locale} messages={pageProps.messages}>
      <HeroUIProvider>
        <ToastProvider placement="bottom-right" toastOffset={20} />
        <IconsProvider>
          <MainContextComponent>
            <Layout>
              <Component {...pageProps} />
              <Footer />
            </Layout>
          </MainContextComponent>{" "}
        </IconsProvider>
      </HeroUIProvider>
    </IntlProvider>
  );
}
