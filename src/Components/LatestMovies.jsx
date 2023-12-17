import LatestMovieCards from "./LatestMovieCards";

const LatestMovies = () => {
  return (
    <div className="bg-[#122C36] p-4 lg:px-40 py-16 mx-auto">
      <div className="flex items-center gap-4 px-4 mb-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300">
          Latest Movies
        </h2>
      </div>
      <LatestMovieCards/>
    </div>
  );
};

export default LatestMovies;
