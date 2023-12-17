import { navLinks } from "../constants";
import { FaBars, FaRegUser, FaSearch } from "react-icons/fa";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import { useState } from "react";

export const Navbar = () => {
  const [registered, setRegistered] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-[1000] w-full flex justify-between items-center lg:px-12 px-4 py-4 backdrop-blur-lg md:px-2 md:py-2 bg-[rgba(255,255,255,0.7)]">
      <div className="flex items-center justify-center gap-5">
        <button className="text-primaryColor cursor-pointer block sm:hidden">
          <FaBars className=" text-xl sm:text-3xl " />
        </button>
        <div className="w-20 h-12 sm:w-36 sm:h-12 md:w-24">
          <a href="/">
            <img
              src="/cinespectra-high-resolution-logo-transparent.png"
              className="contain w-full h-full"
            />
          </a>
        </div>
      </div>

      {/* search bar
       */}

      <div className=" hidden sm:flex items-center gap-2 px-2 w-[550px] md:w-[400px] h-12 bg-[rgba(255,255,255,0.5)] rounded-md border border-primaryColor">
        <FaSearch className="text-blue-800 text-xl cursor-pointer" />
        <input
          type="search"
          placeholder="Search for movies or tvseries"
          className="h-full w-full bg-transparent text-blue-800 focus:outline-none placeholder:text-blue-800"
        />
      </div>
      <nav className="min-w-7xl ">
        <ul className="hidden lg:flex justify-center items-center md:gap-4 md:text-lg gap-8 text-xl">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="sm:text-sm  lg:text-1xl
            "
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "active-nav"
                    : " text-primaryColor font-semibold  hover:underline uppercase"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center items-center gap-5">
        {" "}
        <Button
          name={"Login"}
          backgroundColor={"bg-primaryColor"}
          textColor={"text-white"}
          hidden={"hidden"}
          handleClick={() => setRegistered(!registered)}
        />
        <button>
          {" "}
          <FaSearch className="sm:hidden text-xl cursor-pointer text-primaryColor" />
        </button>
        <button className="cursor-pointer block  sm:hidden ">
          <FaRegUser
            className="sm:text-primaryColor text-xl sm:text-3xl text-primaryColor"
            onClick={() => setRegistered(!registered)}
          />
        </button>
        {registered && (
          <Register
            registered={registered}
            setRegister={setRegistered}
            iconColor={"text-orange-500"}
            btnHover={"hover:bg-orange-500 hover:text-white"}
          />
        )}
      </div>
    </header>
  );
};
