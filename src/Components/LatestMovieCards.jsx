import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const LatestMovieCards = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchLatestMovie() {
      const url = "https://movies-api14.p.rapidapi.com/home";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "612199ff77msh559be55a52238d8p10d0a3jsne70fd9e423f1",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const lmovie = result[1].movies;
        console.log(lmovie);
        setLatestMovie(lmovie);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLatestMovie();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 sm:flex-wrap sm:justify-center">
      {latestMovie.slice(0, 18).map((data) => (
        <div
          onClick={() => {
            navigate(
              `/movies/watch/?id=${encodeURIComponent(
                data.id
              )}&backdropImage=${encodeURIComponent(
                data.backdrop_path
              )}&title=${encodeURIComponent(
                data.title
              )}&overview=${encodeURIComponent(
                data.overview
              )}&ReleaseDate=${encodeURIComponent(
                data.release_date
              )}&poster=${encodeURIComponent(
                data.poster_path
              )}&genres=${encodeURIComponent(data.genres)}`
            );
          }}
          key={data.id}
        >
          <div className="w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative group">
            <img
              src={data.poster_path}
              className="h-full w-full object-cover group-hover:scale-150 transition duration-300"
              loading="lazy"
            />
            <span className="absolute top-2 right-2 z-20 bg-white text-primaryColor p-1 rounded-md text-sm font-semibold ">
              {"HD"}
            </span>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <button className=" play-btn absolute z-20 top-[40%] left-[40%] bg-primaryColor text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay />
            </button>
          </div>

          <h3 className="text-sm sm:text-lg m-1 text-slate-100 font-semibold truncate w-44 sm:w-52">
            {data.title}
          </h3>
          <div className="flex items-center justify-start text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3 text-slate-100">
            <span>{data.release_date.slice(0, 4)}</span>
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <span>{"180m"}</span>
            <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
              {data.contentType}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestMovieCards;
