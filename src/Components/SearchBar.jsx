import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { apiHeaders } from "../constants";
import { useNavigate } from "react-router-dom";

const SearchBar = ({
  setSearchResult,
  input,
  setInput,
  handleChange,
  handleNavigate,
  searchResult,
  handleClick,
  setOnResultClick,
}) => {
  useEffect(() => {
    async function fetchData(value) {
      const url = `https://movies-api14.p.rapidapi.com/search?query=${encodeURIComponent(
        value
      )}`;
      const options = {
        method: "GET",
        headers: apiHeaders,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        const searchData = result.contents;
        setSearchResult(searchData);
      } catch (error) {
        console.error(error);
      }
    }
    if (input.trim() !== "") {
      fetchData(input);
    }
  }, [input, setSearchResult]);
  const navigate = useNavigate();

  return (
    <div className=" hidden md:flex items-center gap-2 px-2 w-[550px] lg:w-[420px] md:w-[400px] sm:w-[350px] h-12 bg-[rgba(255,255,255,0.5)] rounded-md border border-primaryColor ">
      <FaSearch className="text-blue-800 text-xl cursor-pointer" />
      <input
        type="search"
        value={input}
        placeholder="Search for movies or tvseries"
        onKeyUp={(e) => {
          if (e.which === 13) {
            const searchDataString = JSON.stringify(searchResult);
            navigate(
              `/search-results/?keyword=${encodeURIComponent(
                input
              )}&results=${encodeURIComponent(searchDataString)}`
            );
            setInput("");
          }
        }}
        className="h-full w-full bg-transparent text-blue-800 focus:outline-none  placeholder:text-blue-800"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onClick={() => setOnResultClick(true)}
      />
    </div>
  );
};

export default SearchBar;
