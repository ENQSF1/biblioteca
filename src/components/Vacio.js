import React from "react";
import Particulasfondo from "@/components/config/Particulasfondo";
import Among from "@/components/config/among";
import ModalApp from "@/components/ModalApp";
import Header from "@/components/Header";
import Head from "next/head";
import { TiRefresh } from "react-icons/ti";
export default function Vacio() {
  return (
    <>
      <Head>
        <title>BIBLIOTECA</title>
        <meta name="description" content="BIBLIOTECA" />
        <meta property="og:image" content="./ESCUELAS/logofiusac.jpg" />
        <link rel="icon" href="./ESCUELAS/logofiusac.jpg" />
      </Head>

      <div className=" min-h-screen ">
        <Header vacio={true} />
        <div className="flex items-center justify-center">
          <Particulasfondo fondo={Among} />
          <ModalApp />
        </div>
      </div>
    </>
  );
}
