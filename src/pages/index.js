import React, { useEffect } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Section from "@/components/Section";

export default function index({ data }) {
  // const divStyle = {
  //   background-color: "transparent",
  // };
  return (
    <>
      <div>
        <Head>
          <title>BIBLIOTECA</title>
          <meta name="description" content="S.O.S USAC" />
          <meta property="og:image" content="/images/generales/coti.webp" />
          <link rel="icon" href="/images/generales/cotiaro.ico" />
        </Head>

        <main class="snap-y snap-mandatory relative w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth">
          {data?.map((escuela) => (
            <>
              <Section key={escuela.id} escuela={escuela} id={escuela.id} />
            </>
          ))}
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://biblioteca-api-pearl.vercel.app/api/escuelas"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
