import Head from "next/head";
import React from "react";
import Tarjet from "@/components/Tarjet";
import Vacio from "@/components/Vacio";
export default function ProductPage({ data }) {
  return (
    <>
      <Head>
        <title>S.O.S USAC || candidatos || {data.nombre}</title>
        <meta
          name="description"
          content={`Conoce los candidatos del movimiento S.O.S USAC: ${data.nombre}`}
        />
        <meta property="og:image" content="/images/generales/coti.webp" />
        <link rel="icon" href="/images/generales/cotiaro.ico" />
      </Head>
      {data.cursos ? (
        <div className=" min-h-screen bg-black">
          <div
            className=" w-full h-[400px] mb-10 fixed"
            style={{
              backgroundImage: "url('../fondos/2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {data.cursos?.map((curso) => (
              <Tarjet key={curso.id} titulo={curso.nombre} link={curso.link} />
            ))}
          </div>
        </div>
      ) : (
        <Vacio />
      )}
    </>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      "https://biblioteca-api-pearl.vercel.app/api/carreras"
    );
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `https://biblioteca-api-pearl.vercel.app/api/carreras/${params?.id}`
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
