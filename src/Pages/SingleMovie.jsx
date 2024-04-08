import { useLoaderData } from "react-router-dom";
import { FaPlay, FaTimes } from "react-icons/fa";
import Button from "../Components/Button";
// import { movieData } from "../constants";
import { useNavigate } from "react-router-dom";
import { apiHeaders } from "../constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const SingleMovie = () => {
  // const { _id } = useParams();
  const data = useLoaderData();
  // console.log(data);
  const [trailer, setTrailer] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full bg-secondaryColor">
      {/* movie backdrop-image */}
      <div className="relative w-full lg:h-[75vh] min-h-[250px]">
        <img
          src={data.movie.backdrop_path}
          alt={data.movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.7)] top-0 left-0 hover:backdrop-blur-sm"></div>
        <button
          className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:bg-blue-800 md:text-white p-4 md:p-6 lg:p-8 rounded-full "
          onClick={() => {
            const similarMoviesString = JSON.stringify(data.similarMovies);
            // console.log(similarMoviesString);
            navigate(
              `/watch-movie?title=${encodeURIComponent(
                data.movie.title
              )}&similarMovies=${encodeURIComponent(
                similarMoviesString
              )}&poster=${encodeURIComponent(data.movie.backdrop_path)}`
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
            src={data.movie.poster_path}
            alt={data.movie.title}
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
                const similarMoviesString = JSON.stringify(data.similarMovies);
                // console.log(similarMoviesString);
                navigate(
                  `/watch-movie?title=${encodeURIComponent(
                    data.movie.title
                  )}&similarMovies=${encodeURIComponent(
                    similarMoviesString
                  )}&poster=${encodeURIComponent(data.movie.backdrop_path)}`
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

          <h2 className="text-2xl md:text-3xl mb-2">{data.movie.title}</h2>

          <div className="flex items-center gap-2 my-4">
            <Button
              name={"Trailer"}
              textColor={
                "text-primaryColor border border-primaryColor px-2 py-1"
              }
              handleClick={() => setTrailer(true)}
            />
            <div className="text-sm md:text-base font-semibold text-primaryColor border border-primaryColor rounded-md p-1">
              {"HD"}
            </div>
            <span className="font-bold text-blue-700 ml-4 text-base">
              {" "}
              IMDB: {data.movie.vote_average}
            </span>
          </div>

          <p
            className="text-sm text-slate-500 mb-2
        "
          >
            {data.movie.overview}
          </p>
          <div className="text-slate-500 text-sm">
            <p className="">
              <span className="font-semibold text-primaryColor">
                Released:{" "}
              </span>
              {data.movie.release_date}
            </p>
            <p>
              <span className="font-semibold text-primaryColor">Genre: </span>
              {data.movie.genres.map((genre) => (
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

      {/* movie trailer */}
      {trailer && (
        <div className="fixed top-[30%] left-0  w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.6)] z-40">
          <div className=" relative w-[800px]  border-2 border-white">
            <video
              src={data.movie.youtube_trailer}
              poster={data.movie.backdrop_path}
              controls
              className="w-full h-full "
            />{" "}
            <button
              className="absolute -top-4 -right-4  rounded-full text-secondaryColor bg-white p-2 hover:bg-[#4FB4E0] hover:text-white"
              onClick={() => setTrailer(false)}
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>
      )}

      {/* similar movies */}
      <div className="py-2 md:py-4">
        <h2 className="text-2xl font-semibold text-slate-200 my-4 p-4">
          You may also like
        </h2>
        <div
          className="flex w-full overflow-x-scroll px-3 pb-50"
          style={{ scrollbarWidth: "none" }}
        >
          {data.similarMovies.map((data) => (
            <Link to={`/movies/watch/${data._id}`} key={data._id}>
              <div className="w-44 h-76 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative group">
                <img
                  src={data.poster_path}
                  alt={data.title}
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
                <span>2020</span>
                <div className="h-2 w-2 rounded-full bg-gray-500"></div>
                <span>{"180m"}</span>
                <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
                  {data.contentType}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* <RecommendedMovies /> */}
    </div>
  );
};

export default SingleMovie;

export const singleMovieLoader = async ({ params }) => {
  try {
    const url = `https://movies-api14.p.rapidapi.com/movie/${params._id}`;
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
