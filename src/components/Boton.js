import React from "react";
import Link from "next/link";
export default function Boton({ nombre, link }) {
  return (
    <Link
      class="border-[3px] border-gray-600 bg-gray-600 text-sm rounded font-medium text-white px-2 py-2 transition-colors hover:border-gray-500 hover:bg-gray-500 text-center w-[250px]"
      href={link}
    >
      {nombre}
    </Link>
  );
}
