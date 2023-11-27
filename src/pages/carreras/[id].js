import Head from "next/head";
import React from "react";
import Tarjet from "@/components/Tarjet";
import Vacio from "@/components/Vacio";
export default function ProductPage({ data }) {
  return (
    <>
      <Head>
        <title>BIBLIOTECA || {data.carrera}</title>
        <meta
          name="description"
          content={`Accede al material de ${data.carrera}`}
        />
        <meta property="og:image" content="./ESCUELAS/logofiusac.jpg" />
        <link rel="icon" href="./ESCUELAS/logofiusac.jpg" />
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
