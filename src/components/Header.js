import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Fade from "react-reveal/Fade";
const navigation = [
  { name: "INICIO", href: "/", current: false },
  { name: "CONTRIBUYE", href: "/Contacto", current: false },
  { name: "MUESTRA", href: "/muestra", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [fixedNav, setFixedNav] = useState(false);
  const [hovered, setHovered] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navHeight = document.querySelector("nav").offsetHeight;
      if (scrollPosition > navHeight) {
        setFixedNav(true);
      } else {
        setFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <Disclosure
        as="nav"
        className={`bg-transparent w-full z-10 transition duration-300 ease-in-out ${
          fixedNav ? "absolute" : "absolute"
        }`}
      >
        {({ open }) => (
          <div className=" w-full ">
            <div
              onMouseEnter={() => setHovered(false)}
              onMouseLeave={() => setHovered(true)}
              className={
                open
                  ? "w-full   bg-white mx-auto px-4  lg:px-8  sm:px-6  md:bg-transparent"
                  : "w-full mx-auto px-4  lg:px-8  md:hover:bg-white sm:px-6 "
              }
            >
              <div className="flex justify-between items-center h-16 ">
                <div className="item justify-center items-center ">
                  <img
                    className="h-14 w-12 "
                    src="/images/generales/subir.png"
                    alt="Logo"
                  />
                </div>

                <div className="hidden md:flex items-center space-x-4 ml-auto ">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      target={item.target}
                      rel={item.enterFrom}
                      className={
                        hovered
                          ? "bg-transparent text-white py-2 rounded-md text-sm font-medium "
                          : "bg-transparent py-2 rounded-md text-sm text-black font-medium "
                      }
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden md:block">
                  <button
                    type="button"
                    className="bg-transparent p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    {/* Icono para perfil */}
                  </button>
                </div>
                <div className="-mr-2 md:hidden  ">
                  {/* Botón para menú móvil */}
                  <Disclosure.Button className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Abrir menú principal</span>
                    {open ? (
                      <XIcon className="block h-6 w-6 " aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="md:hidden  bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-transparent text-white"
                        : "text-gray-300 hover:bg-transparent hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t bg-transparent">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-3"></div>
                  <button
                    type="button"
                    className="ml-auto bg-transparent flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  ></button>
                </div>
              </div>
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>{" "}
    </>
  );
}
