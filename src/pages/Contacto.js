import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
export default function Contacto() {
  return (
    <>
      <Head>
        <title>CONTRIBUYE</title>
        <meta name="description" content="S.O.S USAC" />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      <div className=" min-h-screen bg-black ">
        <Header />
      </div>
    </>
  );
}
