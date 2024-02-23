import { FaPlay } from "react-icons/fa";
import Button from "../Components/Button";
// import { movieData } from "../constants";
import { useNavigate, useSearchParams } from "react-router-dom";

const SingleMovie = () => {
  // const data = useLoaderData();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const backdrop_path = searchParams.get("backdropImage");
  const overview = searchParams.get("overview");
  const release_date = searchParams.get("ReleaseDate");
  const poster_path = searchParams.get("poster");
  const genresString = searchParams.get("genres");
  const genres = genresString ? genresString.split(",") : [];

  console.log(
    title,
    release_date,
    poster_path,
    overview,
    genres,
    backdrop_path
  );
  const navigate = useNavigate();
  // if (!data || data.length === 0) {
  //   return <div>Loading...</div>;
  // }
  // const { backdrop_path, title, overview, release_date, poster_path, genres } =
  //   data[0];

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
        <button
          className="absolute z-20 top-[47%] left-[47%] bg-white md:bg-blue-800 md:text-white p-4 md:p-6 lg:p-8 rounded-full "
          onClick={() => {
            navigate(
              `/watch-movie?title=${encodeURIComponent(
                title
              )}&poster=${encodeURIComponent(poster_path)}`
            );
          }}
        >
          <FaPlay className="text-xl" />
        </button>{" "}
      </div>

      {/* movie details */}
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
              handleClick={() => {
                navigate(
                  `/watch-movie?title=${encodeURIComponent(
                    title
                  )}&poster=${encodeURIComponent(poster_path)}`
                );
              }}
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
    </div>
  );
};

export default SingleMovie;
