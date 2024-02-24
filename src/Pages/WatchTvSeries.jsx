import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsListTask } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { apiHeaders } from "../constants";

const WatchTvSeries = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const title = searchParams.get("title");
  const video_path = searchParams.get("episode_video_path");
  const seriesDataString = searchParams.get("seriesData");

  const seriesData = JSON.parse(seriesDataString);
  const [selectedSeason, setSelectedSeason] = useState(seriesData[0].Season_No);
  const [recommendedTvSeries, setRecommendedTvSeries] = useState([]);

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
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLatestMovie();
  }, []);
  // console.log(seriesData);
  const filteredSeasons = seriesData.filter(
    (filteredSeason) => filteredSeason.Season_No === selectedSeason
  );
  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };

  return (
    <section className="bg-secondaryColor xl:px-14 xl:py-10">
      <div className="flex flex-col xl:flex-row xl:max-h-[780px]  ">
        <div className="w-full xl:w-[70%] ">
          <h2 className="bg-slate-800 p-6 text-xl font-semibold text-slate-200">
            <Link to="/" className="text-[#4FB4E0]">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/tv-series" className="hover:text-[#4FB4E0]">
              Tv
            </Link>{" "}
            / {title}
          </h2>
          <div className="">
            <video src={video_path} controls className="w-full h-full" />
          </div>
        </div>

        <div className="w-full xl:w-[30%] bg-slate-700 ">
          <div className="w-full p-5 h-[10%]">
            <div className="flex items-center gap-3 hover:cursor-pointer bg-white w-32 p-2 rounded-md">
              <BsListTask className="text-xl font-bold" />
              <select
                className=" w-24 outline-none hover:cursor-pointer"
                onChange={handleSeasonChange}
              >
                {seriesData.map((season) => (
                  <option
                    className="font-semibold"
                    value={season.Season_No}
                    key={season.id}
                  >
                    {season.Season_No}
                  </option>
                ))}

                {/* <FaChevronDown /> */}
              </select>
            </div>
          </div>

          <div className="w-full p-2 sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 xl:inline-block  xl:h-[89%] overflow-y-scroll">
            {filteredSeasons.map((season) =>
              season.ep_content.map((episode, index) => (
                <div
                  key={index}
                  className="flex items-center w-full  gap-4 bg-slate-500 p-3 group  hover:cursor-pointer hover:text-blue-700 my-1 "
                  onClick={() => {
                    const seriesDataString = JSON.stringify(seriesData);
                    // console.log(seriesDataString);
                    navigate(
                      `/watch-tv-series/?title=${encodeURIComponent(
                        episode.episode_title
                      )}&episode_video_path=${encodeURIComponent(
                        episode.episode_path
                      )}&seriesData=${encodeURIComponent(seriesDataString)}`
                    );
                  }}
                >
                  <FaPlay className="text-sm text-primaryColor group-hover:text-blue-700" />
                  <span className="font-bold">{episode.episode_No}: </span>
                  <p className="text-sm text-gray-200 group-hover:text-blue-700">
                    {episode.episode_title}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* recommended tvseries */}
      <h2 className="text-2xl font-semibold text-slate-200 my-4 p-4">
        You may also like
      </h2>
      <div
        className="flex w-full overflow-x-auto scrollbar-hidden px-3 pb-5"
        style={{ scrollbarWidth: "none" }}
      >
        {recommendedTvSeries.slice(9, 30).map((data) => (
          <div
            onClick={() => {
              const genresString = data.genres.join(",");

              navigate(
                `/tv-series/watch/?title=${encodeURIComponent(
                  data.title
                )}&backdropImage=${encodeURIComponent(
                  data.backdrop_path
                )}&overview=${encodeURIComponent(
                  data.overview
                )}&ReleaseDate=${encodeURIComponent(
                  data.release_date
                )}&poster=${encodeURIComponent(
                  data.poster_path
                )}&genres=${encodeURIComponent(genresString)}`
              );
            }}
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default WatchTvSeries;
