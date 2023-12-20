import TvSeriesCards from "../Components/TvSeriesCards";

const TvSeries = () => {
  return (
    <div className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto">

      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300 mb-6 ml-20">
        TV Series
      </h2>

      <TvSeriesCards />
    </div>
  );
};

export default TvSeries;
