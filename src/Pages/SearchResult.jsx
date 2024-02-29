import { FaPlay } from "react-icons/fa";
import { useSearchParams, Link } from "react-router-dom";
const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const input = searchParams.get("keyword");
  const results = searchParams.get("results");
  const searchResult = JSON.parse(results);
  return (
    <section className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto lg:min-h-[65vh]">
      <h2 className="text-2xl font-semibold text-slate-200 my-4 p-4">
        Search results for: {input}
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3 sm:flex-wrap sm:justify-center place-items-center">
        {searchResult.map((data) => (
          <Link
            to={
              data.contentType === "movie"
                ? `/movies/watch/${data._id}`
                : `/tv-series/watch/${data._id}`
            }
            key={data._id}
          >
            <div className="w-40 h-60 sm:w-52 sm:h-80 rounded-lg overflow-hidden relative group">
              <img
                src={data.poster_path}
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
              <span className="w-14 truncate">{data.release_date}</span>
              <div className="h-2 w-2 rounded-full bg-gray-500"></div>
              <span>{"180m"}</span>
              <div className=" border border-slate-300 px-2 rounded-md ml-2 sm:ml-4 text-base">
                {data.contentType}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
