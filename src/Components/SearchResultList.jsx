import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SearchResultList = ({ searchResult, reStyles, input, setInput }) => {
  const navigate = useNavigate();

  return (
    <div className={` ${reStyles} bg-white rounded-b-md max-h-[660px] `}>
      {" "}
      {searchResult.slice(0, 5).map((data) => (
        <div
          key={data._id}
          className=" flex  border-b border-primaryColor border-dashed p-1 lg:p-3 hover:bg-slate-300 transition-all duration-100 cursor-pointer "
          onClick={() => {
            navigate(
              data.contentType === "movie"
                ? `/movies/watch/?id=${encodeURIComponent(
                    data.id
                  )}&backdropImage=${encodeURIComponent(
                    data.backdrop_path
                  )}&title=${encodeURIComponent(
                    data.title
                  )}&overview=${encodeURIComponent(
                    data.overview
                  )}&ReleaseDate=${encodeURIComponent(
                    data.release_date
                  )}&poster=${encodeURIComponent(
                    data.poster_path
                  )}&genres=${encodeURIComponent(data.genres)}`
                : `/tv-series/watch/?id=${encodeURIComponent(
                    data.id
                  )}&backdropImage=${encodeURIComponent(
                    data.backdrop_path
                  )}&title=${encodeURIComponent(
                    data.title
                  )}&overview=${encodeURIComponent(
                    data.overview
                  )}&ReleaseDate=${encodeURIComponent(
                    data.release_date
                  )}&poster=${encodeURIComponent(
                    data.poster_path
                  )}&genres=${encodeURIComponent(data.genres)}`
            );
            setInput("");
          }}
        >
          <div className=" w-10 h-16 lg:w-16 lg:h-24 rounded-md overflow-hidden ">
            <img
              src={data.poster_path}
              alt={data.original_title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center items-start ml-3">
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <div className="flex justify-center items-center">
              <span className="text-sm text-slate-500">
                {data.release_date}
              </span>
              <div className="bg-primaryColor h-1 w-1 mx-2 rounded-full"></div>
              <span className="text-sm text-slate-500">108m</span>
              <div className="bg-primaryColor h-1 w-1 mx-2 rounded-full"></div>
              <span className="text-sm text-slate-500 ">
                {data.contentType}
              </span>
            </div>
          </div>
        </div>
      ))}
      <div
        className="w-full"
        onClick={() => {
          const searchDataString = JSON.stringify(searchResult);
          navigate(
            `/search-results/?keyword=${encodeURIComponent(
              input
            )}&results=${encodeURIComponent(searchDataString)}`
          );
          setInput("");
        }}
      >
        {" "}
        <Button
          name={"View all results"}
          chevron
          backgroundColor={"bg-primaryColor justify-center h-12 mt-2 w-full"}
          textColor={"text-white"}
        />
      </div>
    </div>
  );
};

export default SearchResultList;
