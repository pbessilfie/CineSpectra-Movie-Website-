import { Link } from "react-router-dom";
import { movieData } from "../constants";
import { FaPlay } from "react-icons/fa";

const LatestTvSeriesCards = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 sm:flex-wrap sm:justify-start">
      {movieData.map((movie) => (
        <Link to={"/"} key={movie.id}>
          <div className="w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative group">
            <img
              src={movie.coverImage}
              className="h-full w-full object-cover group-hover:scale-150 transition duration-300"
            />
            <span className="absolute top-2 right-2 z-20 bg-white text-primaryColor p-1 rounded-md text-sm font-semibold ">
              {movie.quality}
            </span>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <button className=" play-btn absolute z-20 top-[40%] left-[40%] bg-primaryColor text-white p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FaPlay />
            </button>
          </div>

          <h3 className="text-sm sm:text-lg m-1 text-slate-100 font-semibold">
            {movie.title}
          </h3>
          <div className="flex items-center justify-center text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3 text-slate-100">
            <span>{movie.releaseYear}</span>
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <span>{movie.duration}</span>
            <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
              {movie.category}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default LatestTvSeriesCards