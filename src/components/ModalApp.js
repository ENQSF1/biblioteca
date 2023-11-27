// En un archivo llamado ModalApp.js

import React, { useState } from "react";
import Link from "next/link";

const ModalApp = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const modalClasses = isModalOpen
    ? "fixed inset-0 overflow-y-auto flex items-center justify-center"
    : "hidden";

  return (
    <div className="p-8">
      <div className={modalClasses}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="z-50 bg-white p-4 w-80 h-80 mx-auto rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">OOPS!!!</h2>
          <p className="m-4 text-justify">
            Aún no hay ningún curso agregado. Recuerda que puedes colaborar
            enviando material al correo abcde@gmail.com o contactándonos en la
            sección de{" "}
            <Link
              href={"/Contacto"}
              className="text-blue-800 hover:text-green-800 underline"
            >
              contacto
            </Link>
          </p>

          <Link
            className="mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            href={"/"}
          >
            Regresar al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalApp;
