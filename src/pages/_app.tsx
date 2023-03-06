import { type AppType } from "next/app";

import { api } from "~/utils/api";
import Head from 'next/head';

import "~/styles/globals.css";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Post Definitions</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto&display=optional"/>
      </Head>
      <div className={"grid grid-cols-[5rem_auto]"}>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
