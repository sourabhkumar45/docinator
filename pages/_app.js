import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import { useSession, SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
        <title>Docinator</title>
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
