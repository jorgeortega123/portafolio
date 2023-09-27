import { Provider } from "cllk";
import type { AppProps } from "next/app";
import "../style/index.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
