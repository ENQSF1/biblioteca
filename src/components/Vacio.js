import React from "react";
import Particulasfondo from "@/components/config/Particulasfondo";
import Among from "@/components/config/among";
import ModalApp from "@/components/ModalApp";
import Header from "@/components/Header";
export default function Vacio() {
  return (
    <>
      <div className=" min-h-screen ">
        <Header />
        <div className="flex items-center justify-center">
          <Particulasfondo fondo={Among} />
          <ModalApp />
        </div>
      </div>
    </>
  );
}
