import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import LayOut from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* open sans consed font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </>
  );
}
export default MyApp;
