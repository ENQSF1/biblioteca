import Head from "next/head";
import React from "react";
import Tarjeta from "@/components/Tarjet";
import Header from "@/components/Header";
import Particulasfondo from "@/components/config/Particulasfondo";
import particlesconfig from "@/components/config/lineas";
import FooterOne from "@/components/FooterOne";

export default function Muestra() {
  const perro = [
    {
      id: 1,
      carrera: "Matematicas",
      descripcion: "Descripción del Matematicas",
      cursos: [
        {
          id: 1,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 2,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 3,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 4,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 5,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 6,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 7,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 8,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 9,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
        {
          id: 10,
          nombre: "Matematica Intermedia 3",
          link: "https://drive.google.com/file/d/1P8aWehM4m_yhJS2eW7_Kh1BJ0MYdZnfO/view",
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>BIBLIOTECA || MUESTRA</title>
        <meta name="description" content={`Muestra `} />
        <meta property="og:image" content="./ESCUELAS/logofiusac.jpg" />
        <link rel="icon" href="./ESCUELAS/logofiusac.jpg" />
      </Head>
      <div className=" min-h-screen ">
        <div
          className=" w-full h-[400px] mb-10 "
          style={{
            backgroundImage: "url('../fondos/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            position: "relative",
          }}
        >
          <Header />
          <div className="flex flex-col items-center justify-center h-full absolute top-0 left-0 right-0 bottom-0">
            <h1 className="text-white text-center text-4xl md:text-6xl font-bold">
              MATEMATICAS
            </h1>
          </div>
        </div>
        <Particulasfondo fondo={particlesconfig} />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {perro[0]?.cursos.map((curso) => (
            <Tarjeta key={curso.id} titulo={curso.nombre} link={curso.link} />
          ))}
        </div>{" "}
        <FooterOne color={true} />
      </div>
    </>
  );
}
