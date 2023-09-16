import { BODY, HEAD } from "cllk";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HEAD title="Luis" />
      </Head>
      <body>
        <div className="bg-zinc-900">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
