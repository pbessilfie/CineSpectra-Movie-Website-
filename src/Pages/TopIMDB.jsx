// import SingleMovie from "./SingleMovie"

import TopIMDBCards from "../Components/TopIMDBCards";

const TopIMDB = () => {
  return (
    <div className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto">
      <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300 mb-6 md:ml-20">
        TopIMDB
      </h2>

      <TopIMDBCards />
    </div>
  );
}

export default TopIMDB