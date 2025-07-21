import React from "react";
import Head from "next/head";
import "./global.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Foot from "@/components/Nav/Foot";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tongston Entrepreneurial Education Summit (TEES-2024)</title>
        <meta name="description" content="Learn | Connect | Pitch | Invest" />
        <link rel="icon" type="image/png" href="/assets/images/tees-logo.png" />
      </Head>
      <div>
        <Component {...pageProps} />
        <Foot />
        <ToastContainer />
      </div>
    </>
  );
}

export default MyApp;
