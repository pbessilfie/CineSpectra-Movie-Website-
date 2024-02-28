/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import CardSkeleton from "./CardSkeleton";
const TrendingCards = ({ movies, selectedCategory, isLoading }) => {
  const filteredMovies = movies.filter(
    (filteredMovie) =>
      !selectedCategory || filteredMovie.contentType === selectedCategory
  );
  // console.log(filteredMovies);
  return (
    <div className="grid grid-cols-2 gap-2 place-items-center sm:flex sm:gap-3 sm:flex-wrap sm:justify-center ">
      {isLoading && <CardSkeleton cards={14} />}
      {filteredMovies.slice(0, 24).map((movie) => (
        <Link
          to={
            movie.contentType === "movie"
              ? `/movies/watch/${movie._id}`
              : `/tv-series/watch/${movie._id}`
          }
          className=" w-36 sm:w-52"
          key={movie.id}
        >
          <div className="w-full h-60 sm:w-full sm:h-80 w rounded-lg overflow-hidden relative group">
            <img
              src={movie.poster_path}
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

          <h3 className="text-sm sm:text-lg m-1 text-slate-100 font-semibold truncate w-full sm:w-52">
            {movie.title}
          </h3>
          <div className="flex items-center justify-start text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3 text-slate-100">
            <span className=" w-14 truncate">
              {movie.release_date}
              {movie.first_aired}
            </span>
            <div className="h-2 w-2 rounded-full bg-gray-500"></div>
            <span>{"180m"}</span>
            <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
              {movie.contentType}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingCards;
