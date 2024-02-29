import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../Components/Button";
// import { movieData } from "../constants";
import { useNavigate, useLoaderData } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import { apiHeaders } from "../constants";
import RecommendedTvSeries from "../Components/RecommendedTvSeries";
import '../res-grid.css'
const SingleTvSeries = () => {
  const navigate = useNavigate();

  const data = useLoaderData();
  const [selectedSeason, setSelectedSeason] = useState(
    `Season ${data.seasons[0].season}`
  );
  // console.log(selectedSeason);

  const filteredSeasons = data.seasons.filter(
    (filteredSeason) => `Season ${filteredSeason.season}` === selectedSeason
  );
  // console.log(filteredSeasons);
  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };
  return (
    <div className="w-full bg-secondaryColor">
      {/* movie backdrop-image */}
      <div className="relative w-full lg:h-[80vh] z-10">
        <img
          src={data.show.backdrop_path}
          alt={data.show.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] top-0 left-0 hover:backdrop-blur-sm"></div>
        <button className="absolute z-20 top-[47%] left-[47%] bg-white md:bg-blue-800 md:text-white p-4 md:p-6 lg:p-8 rounded-full ">
          <FaPlay className="text-xl" />
        </button>{" "}
      </div>

      {/* series details */}
      <div className="flex gap-8 w-[95%] xl:w-[90%] rounded-xl bg-white mx-auto z-30 p-8">
        <div className="hidden md:inline-block w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative">
          <img
            src={data.show.poster_path}
            alt={data.show.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="w-full md:w-[80%] lg:w-[70%] ">
          <div className="w-full flex justify-between mb-2">
            <Button
              name={"Watch Now"}
              playIcon
              backgroundColor={
                "bg-primaryColor flex px-2 py-2 hover:bg-blue-700"
              }
              textColor={"text-white"}
            />{" "}
            <Button
              name={"Add to Favorites"}
              plusIcon
              textColor={"text-primaryColor"}
              backgroundColor={"bg-slate-300 flex px-2 py-2 hover:bg-slate-200"}
            />
          </div>

          <h2 className="text-2xl md:text-3xl mb-2">{data.show.title}</h2>

          <div className="flex items-center gap-2 my-4">
            <Button
              name={"Trailer"}
              textColor={
                "text-primaryColor border border-primaryColor px-2 py-1"
              }
            />
            <div className="text-sm md:text-base font-semibold text-primaryColor border border-primaryColor rounded-md p-1">
              {"HD"}
            </div>
            <span className="font-bold text-blue-700 ml-4 text-base">
              {" "}
              IMDB: {data.show.vote_average}
            </span>
          </div>

          <p
            className="text-sm text-slate-500 mb-2
        "
          >
            {data.show.overview}
          </p>
          <div className="text-slate-500 text-sm">
            <p className="">
              <span className="font-semibold text-primaryColor">
                Released:{" "}
              </span>
              {data.show.release_date}
            </p>
            <p>
              <span className="font-semibold text-primaryColor">Genre: </span>
              {data.show.genres.map((genre) => (
                <span key={genre.id}>{genre}, </span>
              ))}
            </p>
            <p>
              <span className="font-semibold text-primaryColor">
                Duration:{" "}
              </span>{" "}
              {"180m"}
            </p>
            <p>
              <span className="font-semibold text-primaryColor">Country: </span>
              United States of America
            </p>
          </div>
        </div>
      </div>

      {/* seasons section */}
      <div
        className="flex flex-col gap-8 w-[95%] xl:w-[90%] rounded-xl bg-white mx-auto p-8"
        id="season"
      >
        <div className="flex items-center gap-3 hover:cursor-pointer ">
          <BsListTask className="text-xl font-bold" />
          <select
            className=" w-24 outline-none hover:cursor-pointer"
            onChange={handleSeasonChange}
          >
            {data.seasons.map((item, i) => (
              <option
                className="font-semibold"
                value={`Season ${item.season}`}
                key={i}
              >
                Season {item.season}
              </option>
            ))}
          </select>
        </div>

        <div className="res-grid-container">
          {filteredSeasons.map((season) =>
            season.episodes.map((episode) => (
              <div
                key={episode._id}
                className="flex items-center w-full md:w-72 xl:w-64 2xl:w-80  gap-1 bg-slate-200 p-3 group  hover:cursor-pointer hover:text-blue-700 mx-1"
                onClick={() => {
                  const seriesDataString = JSON.stringify(data);
                  // console.log(seriesDataString);
                  navigate(
                    `/watch-tv-series/?title=${encodeURIComponent(
                      data.show.title
                    )}&seriesData=${encodeURIComponent(seriesDataString)}`
                  );
                }}
              >
                <FaPlay className="text-sm text-primaryColor group-hover:text-blue-700" />
                <span className="font-bold">Eps{episode.episode_number}: </span>
                <p className="text-sm text-gray-500 group-hover:text-blue-700 truncate ">
                  {episode.title}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* recommended tvseries */}
      <RecommendedTvSeries />
    </div>
  );
};

export default SingleTvSeries;

export const singleShowLoader = async ({ params }) => {
  try {
    const url = `https://movies-api14.p.rapidapi.com/show/${params._id}`;
    const options = {
      method: "GET",
      headers: apiHeaders,
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
