import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="M_cN_ou4U75SrL7pIYIAmNrbWc6162q8LqcFbMJ8CCc"
        />
        <script src="https://cdn.tailwindcss.com"></script>
     
        <link rel="icon" href={"/assets/png/icon.png"} />
      </Head>
      <body className="overflow-x-hidden relative ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
