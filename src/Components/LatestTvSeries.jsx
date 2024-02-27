import LatestTvSeriesCards from "./LatestTvSeriesCards";

const LatestTvSeries = () => {
  return (
    <div className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto">
      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300 mb-6 md:ml-20">
        Latest Tvseries
      </h2>
      <LatestTvSeriesCards />
    </div>
  );
};

export default LatestTvSeries;
