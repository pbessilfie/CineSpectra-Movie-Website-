import LatestMovieCards from "./LatestMovieCards";

const LatestMovies = ({ isLoading, setIsLoading }) => {
  return (
    <div className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto">
      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300 mb-6 md:ml-20">
        Latest Movies
      </h2>

      <LatestMovieCards isLoading={isLoading} setIsLoading={setIsLoading} />
    </div>
  );
};

export default LatestMovies;
