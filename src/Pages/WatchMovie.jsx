import { useSearchParams, Link } from "react-router-dom";
// import RecommendedMovies from "../Components/RecommendedMovies";
import VideoLoader from "../Components/VideoLoader";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const WatchMovie = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const poster = searchParams.get("poster");
  const recommendedMovies = searchParams.get("similarMovies");
  const similarMovies = JSON.parse(recommendedMovies);
  // console.log(similarMovies);
  // const videoSrc = searchParams.get("videoSrc");
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowVideo(true);
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);
  const videoRef = useRef(null);

  const handlePauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section className="bg-secondaryColor xl:px-14 xl:py-10">
      <div className="flex flex-col xl:flex-row xl:max-h-[780px] justify-center items-center ">
        <div className="w-full lg:w-[90%] xl:w-[70%] ">
          <h2 className="bg-slate-800 p-6 text-lg md:text-xl font-semibold text-slate-200 w-full truncate">
            <Link to="/" className="text-[#4FB4E0] ">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/tv-series" className="hover:text-[#4FB4E0]">
              Movie
            </Link>{" "}
            / {title}
          </h2>
          {showVideo ? (
            <div className="relative w-full h-full " onClick={handlePauseClick}>
              <video
                src="/pexels_videos_1851190 (2160p).mp4"
                controls
                poster={poster}
                className="w-full h-full z-10"
                autoPlay
                // ref={videoRef}
              />
            </div>
          ) : (
            <div className="w-full aspect-video xl:h-[700px] flex items-center justify-center bg-black">
              <VideoLoader />
            </div>
          )}
        </div>
      </div>

      {/* similar movies */}
      <div className="py-2 md:py-4">
        <h2 className="text-2xl font-semibold text-slate-200 my-4 p-4">
          You may also like
        </h2>
        <div
          className="flex w-full overflow-x-scroll px-3 pb-50"
          style={{ scrollbarWidth: "none" }}
        >
          {similarMovies.map((data) => (
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
      </div>{" "}
    </section>
  );
};

export default WatchMovie;
