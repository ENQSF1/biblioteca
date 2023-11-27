import React from "react";
import Link from "next/link";

export default function Tarjeta({ titulo, link }) {
  return (
    <div
      className="w-60 mx-auto bg-red-200 shadow-lg overflow-hidden flex items-center justify-center flex-col h-80"
      style={{
        backgroundImage: "url('../fondos/2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        className="w-32 h-32 object-cover rounded-full"
        src="../ESCUELAS/logofiusac.jpg"
        alt="Imagen de la tarjeta"
      />
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-white text-center">{titulo}</h2>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {"Visitar"}
          </a>
        </button>
      </div>
    </div>
  );
}
