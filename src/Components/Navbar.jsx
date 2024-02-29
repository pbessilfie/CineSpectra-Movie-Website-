import { navLinks } from "../constants";
import { FaBars, FaRegUser, FaSearch, FaTimes } from "react-icons/fa";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router-dom";
import Register from "./Register";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultList from "./SearchResultList";

export const Navbar = () => {
  const [registered, setRegistered] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [input, setInput] = useState("");
  const [onResultClick, setOnResultClick] = useState(true);
  const navigate = useNavigate();

  const handleChange = (value) => {
    setInput(value);
  };
  
  return (
    <header className=" sticky top-0 left-0 z-[1000] w-full flex justify-between items-center md:h-20 lg:px-8 px-4 py-4 backdrop-blur-lg md:px-2 md:py-2 bg-[rgba(255,255,255,0.7)]">
      <div className="flex items-center justify-center gap-5">
        <button
          className="text-primaryColor cursor-pointer block lg:hidden"
          onClick={() => {
            if (searchBar) {
              setSearchBar(!searchBar);
            }
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <FaBars className=" text-xl sm:text-2xl " />
        </button>
        <div className="w-20 h-12 sm:w-24 sm:h-12 md:w-24">
          <a href="/">
            <img
              src="/cinespectra-high-resolution-logo-transparent.png"
              className="contain w-full h-full"
            />
          </a>
        </div>
      </div>

      {/* search bar for lg devices
       */}
      <SearchBar
        input={input}
        setInput={setInput}
        setSearchResult={setSearchResult}
        handleChange={handleChange}
        searchResult={searchResult}
        setOnResultClick={setOnResultClick}
      />

      <nav className="min-w-7xl ">
        {/* navlinks for lg devices */}
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
                    : " text-primaryColor font-semibold  hover:underline hover:underline-offset-4  uppercase"
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
        <button onClick={() => setSearchBar(!searchBar)}>
          {" "}
          <FaSearch className="md:hidden text-xl cursor-pointer text-primaryColor" />
        </button>
        <Button
          name={"Login"}
          backgroundColor={"bg-primaryColor"}
          textColor={"text-white"}
          hidden={"hidden"}
          handleClick={() => {
            setOnResultClick(false);
            setRegistered(!registered);
          }}
        />
        <button className="cursor-pointer block  sm:hidden ">
          <FaRegUser
            className="sm:text-primaryColor text-xl sm:text-3xl text-primaryColor"
            onClick={() => {
              if (searchBar) {
                setSearchBar(!searchBar);
              }
              setRegistered(!registered);
            }}
          />
        </button>
        {registered && (
          <Register
            registered={registered}
            setRegistered={setRegistered}
            iconColor={"text-primaryColor"}
            btnHover={"hover:bg-primaryColor hover:text-white"}
          />
        )}
      </div>

      {/* navlinks for sm devices */}
      {isMenuOpen && (
        <div className=" absolute top-0 left-0 z-20 w-full h-screen bg-[rgba(0,0,0,0.8)]">
          <div className="relative  w-[60%] sm:w-[25%]">
            {" "}
            <ul className=" bg-primaryColor h-screen  flex flex-col justify-start items-center pt-[50px] md:text-lg gap-12 text-xl">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className=" text-sm sm:text-base lg:text-1xl border-b pb-5 border-slate-500 w-full text-center
            "
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "active-nav-sm"
                        : " text-white font-semibold  hover:text-slate-300 uppercase"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* close button */}
            <button
              className="absolute top-0 right-0 p-2 bg-white border border-primaryColor rounded-bl-xl text-primaryColor text-xl cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              <FaTimes />
            </button>
          </div>
        </div>
      )}

      {/* search bar for mobile devices */}
      {searchBar && (
        <div
          className="fixed top-[100%] left-0 bg-secondaryColor  px-2
        py-2 max-h-[90vh] w-full flex flex-col justify-center items-center"
        >
          <div className="flex items-center gap-2 px-2 w-[380px]  md:w-[500px] h-12  rounded-md bg-white">
            <FaSearch className="text-blue-800 text-xl cursor-pointer" />
            <input
              type="search"
              value={input}
              placeholder="Search for movies or tvseries"
              className="h-full w-full bg-transparent text-blue-800 focus:outline-none placeholder:text-blue-800"
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.which === 13) {
                  const searchDataString = JSON.stringify(searchResult);
                  navigate(
                    `/search-results/?keyword=${encodeURIComponent(
                      input
                    )}&results=${encodeURIComponent(searchDataString)}`
                  );
                  setInput("");
                  setSearchBar(false);
                }
              }}
            />
          </div>

          {onResultClick && searchResult.length > 0 && input.length && (
            <SearchResultList
              input={input}
              setInput={setInput}
              searchResult={searchResult}
              reStyles={"w-full mt-10 "}
            />
          )}
        </div>
      )}

      {onResultClick && searchResult.length > 0 && input.length && (
        <SearchResultList
          searchResult={searchResult}
          reStyles={
            " absolute hidden md:block top-[100%] left-[23%] md:w-[350px] xl:w-[500px]"
          }
          input={input}
          setInput={setInput}
        />
      )}
    </header>
  );
};
