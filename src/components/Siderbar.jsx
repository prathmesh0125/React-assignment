import React from "react";
import { PiSquaresFourBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";
import { IoLayersOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";
import { CiLogin } from "react-icons/ci";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaBurger } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
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
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <i>
          <FaBurger />
        </i>
      </button>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <a className="flex items-center mx-4 my-3 mb-5">
            <img
              src="public/vite.svg"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl my-8 font-semibold whitespace-nowrap text-blue-700">
              AI CV
            </span>
          </a>
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

            <div className="flex flex-col absolute bottom-10 gap-6">
              <li className="flex justify-center items-center text-[#ACACAC]">
                <RiErrorWarningLine aria-hidden="true" />
                <Link
                  to="#"
                  className="flex items-center p-2 text-[#ACACAC] rounded-lg hover:text-blue-300"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
              <li className="flex justify-center items-center text-[#ACACAC]">
                <CiLogin aria-hidden="true" />
                <Link
                  to="#"
                  className="flex items-center p-2 text-[#ACACAC] rounded-lg hover:text-blue-300"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
