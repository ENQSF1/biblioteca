import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";

export default function FooterTwo() {
  return (
    <>
      <div className="w-full h-[110px] flex flex-col md:flex-row   bg-transparent text-white py-2 px-2">
        <div className="w-full flex flex-col  justify-center  text-[10px]">
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
      </div>
    </>
  );
}
