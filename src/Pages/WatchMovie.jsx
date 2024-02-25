import { useSearchParams,  Link } from "react-router-dom";
import RecommendedMovies from "../Components/RecommendedMovies";

const WatchMovie = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  return (
    <section className="bg-secondaryColor xl:px-14 xl:py-10">
      <div className="flex flex-col xl:flex-row xl:max-h-[780px] justify-center items-center ">
        <div className="w-full xl:w-[70%] ">
          <h2 className="bg-slate-800 p-6 text-lg md:text-xl font-semibold text-slate-200">
            <Link to="/" className="text-[#4FB4E0] ">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/tv-series" className="hover:text-[#4FB4E0]">
              Movie
            </Link>{" "}
            / {title}
          </h2>
          <div className="">
            <video
              src="/pexels_videos_1851190 (2160p).mp4"
              controls
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

    
      <RecommendedMovies/>
    </section>
  );
};

export default WatchMovie;
