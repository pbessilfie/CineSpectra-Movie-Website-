import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { apiHeaders } from "../constants";
import CardSkeleton from "./CardSkeleton";
import { Link } from "react-router-dom";

const RecommendedTvSeries = () => {

  const [recommendedTvSeries, setRecommendedTvSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchLatestMovie() {
      const url = "https://movies-api14.p.rapidapi.com/shows";
      const options = {
        method: "GET",
        headers: apiHeaders,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const tvseries = result.movies;
        setRecommendedTvSeries(tvseries);
        setIsLoading(false);
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLatestMovie();
  }, []);
  return (
    <section className="py-2 md:py-4">
      {" "}
      {/* recommended tvseries */}
      <h2 className="text-2xl font-semibold text-slate-200 my-4 p-4">
        You may also like
      </h2>
      <div
        className="flex w-full overflow-x-auto px-3 pb-5"
        style={{ scrollbarWidth: "none" }}
      >
        {isLoading && <CardSkeleton cards={12} />}
        {recommendedTvSeries.slice(9, 30).map((data) => (
          <Link
            to={`/tv-series/watch/${data._id}`}
          
            key={data._id}
            className="mx-1"
          >
            <div className="w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative group mx-auto">
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
            <div className="w-full flex items-center justify-evenly text-sm sm:text-lg gap-1 sm:gap-2 md:gap-3 text-slate-100">
              <span>{data.first_aired.slice(0, 4)}</span>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <span>{"180m"}</span>
              <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
                {data.contentType}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendedTvSeries;
