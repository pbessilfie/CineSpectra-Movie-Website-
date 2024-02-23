import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Button from "../Components/Button";
// import { movieData } from "../constants";
import { useSearchParams, useNavigate } from "react-router-dom";
import { BsListTask } from "react-icons/bs";
import { seriesData } from "../constants";

const SingleTvSeries = () => {
  const navigate = useNavigate();
  const [selectedSeason, setSelectedSeason] = useState(seriesData[0].Season_No);
  // console.log(selectedSeason);
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const backdrop_path = searchParams.get("backdropImage");
  const overview = searchParams.get("overview");
  const release_date = searchParams.get("ReleaseDate");
  const poster_path = searchParams.get("poster");
  const genresString = searchParams.get("genres");
  const genres = genresString ? genresString.split(",") : [];
  // const data = useLoaderData();
  // console.log(data);

  // if (!data || data.length === 0) {
  //   return <div>Loading...</div>;
  // }
  // const { backdrop_path, title, overview, release_date, poster_path, genres } =
  //   data[0];

  const filteredSeasons = seriesData.filter(
    (filteredSeason) => filteredSeason.Season_No === selectedSeason
  );
  // console.log(filteredSeasons);
  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  };
  return (
    <div className="w-full bg-secondaryColor">
      {/* movie backdrop-image */}
      <div className="relative w-full lg:h-[80vh]">
        <img
          src={backdrop_path}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] top-0 left-0 hover:backdrop-blur-sm"></div>
        <button className="absolute z-20 top-[47%] left-[47%] bg-white md:bg-blue-800 md:text-white p-4 md:p-6 lg:p-8 rounded-full ">
          <FaPlay className="text-xl" />
        </button>{" "}
      </div>

      {/* series details */}
      <div className="flex gap-8 w-[95%] lg:w-[80%] rounded-xl bg-white mx-auto  z-30 p-8">
        <div className="hidden md:inline-block w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative">
          <img
            src={poster_path}
            alt={title}
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

          <h2 className="text-2xl md:text-3xl mb-2">{title}</h2>

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
              IMDB: 9.8
            </span>
          </div>

          <p
            className="text-sm text-slate-500 mb-2
        "
          >
            {overview}
          </p>
          <div className="text-slate-500 text-sm">
            <p className="">
              <span className="font-semibold text-primaryColor">
                Released:{" "}
              </span>
              {release_date}
            </p>
            <p>
              <span className="font-semibold text-primaryColor">Genre: </span>
              {genres.map((genre) => (
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
        className="flex flex-col gap-8 w-[95%] lg:w-[80%] rounded-xl bg-white mx-auto  z-30 p-8"
        id="season"
      >
        <div className="flex items-center gap-3 hover:cursor-pointer ">
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

        <div className="flex flex-wrap gap-2">
          {filteredSeasons.map((season) =>
            season.ep_content.map((episode, index) => (
              <div
                key={index}
                className="flex items-center w-80  gap-4 bg-slate-200 p-3 group  hover:cursor-pointer hover:text-blue-700 "
                onClick={() => {
                  const seriesDataString = JSON.stringify(seriesData);
                  // console.log(seriesDataString);
                  navigate(
                    `/watch-tv-series/?title=${encodeURIComponent(
                      title
                    )}&episode_video_path=${encodeURIComponent(
                      episode.episode_path
                    )}&seriesData=${encodeURIComponent(seriesDataString)}`
                  );
                }}
              >
                <FaPlay className="text-sm text-primaryColor group-hover:text-blue-700" />
                <span className="font-bold">{episode.episode_No}: </span>
                <p className="text-sm text-gray-500 group-hover:text-blue-700">
                  {episode.episode_title}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleTvSeries;
