import React from "react";
import Boton from "./Boton";

export default function Footersection({ areas }) {
  return (
    <div className="flex items-center justify-center">
      <div class="gap-6 grid  grid-flow-rows md:grid-flow-col">
        {areas.map((area) => (
          <>
            <div className="flex items-center justify-start">
              <Boton key={area.id} nombre={area.nombre} link={area.link} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
