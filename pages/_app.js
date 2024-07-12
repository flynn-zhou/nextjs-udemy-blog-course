import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
