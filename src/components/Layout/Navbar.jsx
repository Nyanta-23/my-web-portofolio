import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function toggleBtn() {
    setToggle(!toggle);
  }

  const setActiveDesk = ({ isActive }) =>
    isActive ? "border-b-custom-white" : "border-transparent";

  const setActiveMob = ({ isActive }) =>
    isActive ? "!bg-custom-white !text-custom-black" : "";

  const handleScroll = () => {
    const newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);
  };

  return (
    <header id="navbar" className="text-custom-white">
      <section
        className={`h-20 pt-4 w-full px-6 fixed transition-all ease-in-out duration-700 sm:px-8 md:px-10 lg:px-24 lg:pb-14 lg:pt-7 bg-custom-black z-30 ${
          scrollYPosition > 15 ? "shadow-2xl shadow-blue-500/20" : ""
        }`}
      >
        <nav className="flex justify-between align-bottom">
          <a href="/" className="self-end">
            <h1 className="font-bold tracking-wide text-2xl lg:text-3xl">
              Nyan
            </h1>
          </a>

          <button
            onClick={toggleBtn}
            className={`w-10 h-10 overflow-hidden text-center relative transition-all lg:hidden self-end`}
          >
            <span
              className={`
            ${
              toggle ? "-rotate-45 -translate-y-2" : ""
            } ease-in-out duration-500 inline-block w-9 h-1 bg-white absolute rounded right-[2px] mt-[8px]`}
            ></span>
            <span
              className={`
              ${
                toggle ? "rotate-45 -translate-y-0" : ""
              }  ease-in-out duration-500 inline-block w-9 h-1 bg-white absolute rounded right-[2px] mt-[0px]`}
            ></span>
            <span
              className={`
              ${
                toggle ? "translate-y-10" : ""
              } ease-in-out duration-500 inline-block w-9 h-1 bg-white absolute rounded right-[2px] mt-[-8px]`}
            ></span>
          </button>

          <section
            id="desktop"
            className="hidden lg:inline-block text-white text-lg font-medium"
          >
            <nav>
              <ul className="flex justify-end">
                <li className="mx-4">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      `${setActiveDesk({
                        isActive,
                      })} transition-colors ease-in-out duration-150 border-b-2 pb-1 hover:border-custom-white`
                    }
                  >
                    About Me
                  </NavLink>
                </li>
                <li className="mx-4">
                  <NavLink
                    to={"/portfolio"}
                    className={({ isActive }) =>
                      `${setActiveDesk({
                        isActive,
                      })} transition-colors ease-in-out duration-150 border-b-2 pb-1 hover:border-custom-white`
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="mx-4">
                  <NavLink
                    to={"/contact-me"}
                    className={({ isActive }) =>
                      `${setActiveDesk({
                        isActive,
                      })} transition-colors ease-in-out duration-150 border-b-2 pb-1 hover:border-custom-white`
                    }
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </nav>
          </section>
        </nav>
      </section>

      <nav
        id="mobile"
        className={`${
          toggle ? "active" : ""
        } transition-all ease-in-out duration-300 fixed backdrop-blur-lg text-center bottom-full left-0 h-full lg:hidden bg-custom-black z-20`}
      >
        <ul className="pt-3 text-lg text-custom-white">
          <li className="w-screen">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${setActiveMob({
                  isActive,
                })} inline-block py-8 w-full hover:bg-custom-white hover:text-custom-black transition-all`
              }
              onClick={toggleBtn}
            >
              About Me
            </NavLink>
          </li>

          <li className="w-screen">
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) =>
                `${setActiveMob({
                  isActive,
                })} inline-block py-8 w-full hover:bg-custom-white hover:text-custom-black transition-all`
              }
              onClick={toggleBtn}
            >
              Portfolio
            </NavLink>
          </li>

          <li className="w-screen">
            <NavLink
              to={"/contact-me"}
              className={({ isActive }) =>
                `${setActiveMob({
                  isActive,
                })} inline-block py-8 w-full hover:bg-custom-white hover:text-custom-black transition-all`
              }
              onClick={toggleBtn}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
