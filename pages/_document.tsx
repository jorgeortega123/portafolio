import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Luis Ortega</title>
        <meta
          name="description"
          content="Conoce más acerca del mejor desarrollador full stack en Quito. Mira sus proyectos y conoce su trabajo dentro del mundo de la informática."
        />
        <link rel="icon" href={"/assets/png/icon.png"} />
      </Head>
      <body className="overflow-x-hidden relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
