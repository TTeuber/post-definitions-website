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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Post Definitions</title>
      </Head>
      <div className={"lg:grid grid-cols-[5rem_auto]"}>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
