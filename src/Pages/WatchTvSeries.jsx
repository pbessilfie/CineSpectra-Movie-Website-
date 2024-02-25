import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import RecommendedTvSeries from "../Components/RecommendedTvSeries";

const WatchTvSeries = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const video_path = searchParams.get("episode_video_path");
  const seriesDataString = searchParams.get("seriesData");
  const seriesData = JSON.parse(seriesDataString);
  const [selectedSeason, setSelectedSeason] = useState(seriesData[0].Season_No);

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
      <RecommendedTvSeries />
    </section>
  );
};

export default WatchTvSeries;
