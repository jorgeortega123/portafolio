import { BODY, HEAD } from "cllk";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <HEAD title="Luis" />
      </Head>
      <body>
        <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 to-gray-600  w-full">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
