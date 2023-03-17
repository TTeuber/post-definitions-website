import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet"/>
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto&display=optional"/>
        {/*<title>Post Definitions</title>*/}
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}