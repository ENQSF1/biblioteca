import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
export default function Contacto() {
  return (
    <>
      <Head>
        <title>CONTRIBUYE</title>
        <meta name="description" content="contacto" />
        <meta property="og:image" content="./ESCUELAS/logofiusac.jpg" />
        <link rel="icon" href="./ESCUELAS/logofiusac.jpg" />
      </Head>
      <div className=" min-h-screen bg-black ">
        <Header />{" "}
        <div className="flex flex-col items-center justify-center h-full absolute top-0 left-0 right-0 bottom-0 text-white">
          <p className="text-3xl w-3/4 text-center">
            TEXTO PENDIENTE DE REDACTAR PARA ESTRUCTURAR ESTA PAGINA QUE SERA
            PARA USO DE CONTACTO
          </p>
        </div>
      </div>
    </>
  );
}
