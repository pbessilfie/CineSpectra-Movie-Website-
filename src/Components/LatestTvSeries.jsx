import LatestTvSeriesCards from "./LatestTvSeriesCards";

const LatestTvSeries = () => {
  return (
    <div className="bg-secondaryColor p-4 lg:px-40 py-16 mx-auto">
      <div className="flex items-center gap-4 px-4 mb-6">
        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300 ml-20 ">
          Latest Tvseries
        </h2>
      </div>
      <LatestTvSeriesCards />
    </div>
  );
};

export default LatestTvSeries;
