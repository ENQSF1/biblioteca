import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";

export default function FooterOne({ color }) {
  return (
    <>
      <div
        className={
          color
            ? "w-full md:h-[120px] flex flex-col gap-y-5 md:flex-row   bg-[#353637] text-white py-2  mt-6"
            : "w-full h-[120px] flex flex-col md:flex-row   bg-transparent text-white py-2 px-2"
        }
      >
        {" "}
        <div className="w-full flex justify-center items-center">
          <img
            className=" w-full h-full object-cover  p-2 "
            src="../varios/FOOTER.svg"
            alt="Imagen Redonda"
          />
        </div>
        <div className="w-full flex flex-col  justify-center  text-xs">
          <span className="flex items-center justify-center m-1 ">
            <FaMapMarkerAlt className="text-sm" />
            <p className="ml-2">
              Universidad de San Carlos de Guatemala, zona 12, Facultad de
              Ingeniería
            </p>
          </span>
          <span className="flex items-center justify-center m-1">
            <FaPhoneAlt className="text-sm" /> <p className="ml-2">2418-9100</p>
          </span>
          <span className="flex items-center justify-center m-1">
            <FaEnvelope className="text-sm" />{" "}
            <p className="ml-2">desarrollo_cci@ingenieria.usac.edu.gt</p>
          </span>
          <span className="flex items-center justify-center m-1">
            <FaEnvelope className="text-sm" />{" "}
            <p className="ml-2">webmaster@ing.usac.edu.gt</p>
          </span>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="flex justify-center items-center">
            <div className="flex items-center justify-center mx-4 h-10 w-10">
              <a
                href="https://www.facebook.com/USACFacultadDeIngenieria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook2 size={30} className="text-white" />
              </a>
            </div>
            <div className="flex items-center justify-center mx-4 h-10 w-10">
              <a
                href="https://twitter.com/fiusac"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} className="text-white" />
              </a>
            </div>
            <div className="flex items-center justify-center mx-4 h-10 w-10 ">
              <a
                href="https://www.youtube.com/user/FIUSAC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube size={30} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
