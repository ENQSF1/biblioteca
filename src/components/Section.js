import React from "react";
import Fade from "react-reveal/Fade";
import Footersection from "./Footersection";
import Footer from "./handleFooter";
import Header from "./Header";
export default function Section({ escuela, id }) {
  const sectionStyle = {
    backgroundImage: `url(./fondos/${id}.jpg)`,
    backgroundSize: "cover",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Color negro transparente
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <div className="snap-center">
        <div
          className="landing-section h-screen w-screen text-center overflow-hidden relative flex items-center justify-center bg-cover bg-center "
          style={sectionStyle}
        >
          <div style={overlayStyle}>
            <Header />
            <div className="flex flex-col items-center justify-center h-full absolute top-0 left-0 right-0 bottom-0">
              <Fade bottom>
                <div className="flex flex-col items-center m-10">
                  <Fade bottom>
                    <img
                      className="w-72 h-72 rounded-full p-2 "
                      src="./ESCUELAS/logofiusac.jpg"
                      alt="Imagen Redonda"
                    />
                  </Fade>
                  <Fade bottom>
                    <h1 className="text-xl  my-2 text-white">
                      {escuela.nombre}
                    </h1>
                  </Fade>
                </div>
                <Fade bottom>
                  <Footersection areas={escuela.areas} />{" "}
                </Fade>
              </Fade>{" "}
            </div>
          </div>{" "}
          <div className="absolute bottom-0 left-0 right-0">
            {id === 7 ? <Footer /> : ""}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
