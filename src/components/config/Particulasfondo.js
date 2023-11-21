import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particulasfondo({ fondo }) {
  const ParticlesBackground = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Un valor menor hace que esté detrás de otros elementos
      }}
    >
      <Particles init={ParticlesBackground} options={fondo} />
    </div>
  );
}
