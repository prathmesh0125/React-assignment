import React, { useState } from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { IoLayersOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaBurger } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { icon: <PiSquaresFourBold />, name: "Search CV", href: "#" },
    { icon: <IoLayersOutline />, name: "Shortlisted CV", href: "/" },
    {
      icon: <FiMessageSquare />,
      name: "Transaction History",
      href: "/credits",
    },
    { icon: <SlSettings />, name: "Search History", href: "#" },
    { icon: <SlSettings />, name: "Profile", href: "#" },
  ];

  return (
    <>
      {/* Sidebar Toggle Button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-controls="sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-xl text-black font-bold rounded-lg lg:hidden  "
      >
        {/* <span className="sr-only">Open sidebar</span> */}
        <CiMenuBurger className="text-2xl" />
      </button>

      {/* Sidebar */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex items-center mx-4 my-3 mb-5">
            <img
              src="public/vite.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl my-8 font-semibold whitespace-nowrap text-blue-700">
              AI CV
            </span>
          </div>

          {/* Links */}
          <ul className="font-medium m-4">
            <div className="flex flex-col gap-8">
              {links.map((link, index) => (
                <li
                  key={link.name}
                  className="flex justify-start items-center relative"
                >
                  <i
                    className={`${
                      index === 0
                        ? "text-[#005DFF] text-2xl"
                        : "text-[#ACACAC] text-2xl"
                    } `}
                  >
                    {link.icon}
                  </i>
                  <Link
                    to={link.href}
                    className={`flex items-center p-2 text-[#ACACAC] rounded-lg ${
                      location.pathname === link.href
                        ? "text-blue-600 hover:text-blue-600"
                        : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`flex-1 text-sm ms-3 whitespace-nowrap hover:text-blue-400 ${
                        location.pathname === link.href ? "font-bold" : ""
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                  {location.pathname === link.href && (
                    <div className="absolute -right-7 w-1 h-6 bg-blue-600" />
                  )}
                </li>
              ))}
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col absolute bottom-10 gap-8">
              <li className="flex justify-center items-center text-[#ACACAC] gap-4">
                <i className="text-2xl">
                  <RiErrorWarningLine aria-hidden="true" />
                </i>
                <Link
                  to="#"
                  className="flex-1 text-sm ms-3 whitespace-nowrap hover:text-blue-400 rounded-lg "
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  <span className="flex ">Settings</span>
                </Link>
              </li>
              <li className="flex justify-center items-center text-[#ACACAC] ">
                <i className="text-2xl">
                  <CiLogin aria-hidden="true " />
                </i>
                <Link
                  to="#"
                  className="flex-1 text-sm ms-3 whitespace-nowrap hover:text-blue-400 rounded-lg"
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Sign Out
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
