import { useState, useEffect } from "react";
import TrendingCards from "./TrendingCards";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvSeries, setTrendingTvSeries] = useState([]);
  const categories = ["movie", "show"];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // fetching trending movies
  useEffect(() => {
    async function fetchLatestMovies() {
      const url = "https://movies-api14.p.rapidapi.com/home";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7006ffebe7msh69ecf299faf54bdp16d7a4jsnf34180fa5f2c",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const trendingMovies = result[0].movies;
        setTrendingMovies(trendingMovies);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLatestMovies();

    //  fetching the most trending tv shows
    async function fetchLatestTvShows() {
      const url = "https://movies-api14.p.rapidapi.com/home";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "7006ffebe7msh69ecf299faf54bdp16d7a4jsnf34180fa5f2c",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const trendingTvShows = result[5].movies;
        setTrendingTvSeries(trendingTvShows);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLatestTvShows();
  }, []);

  // Joining trendingMovies and trendingTvSeries together
  const trending = trendingMovies.concat(trendingTvSeries);
  console.log(trending);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = trending.filter(
      (movie) => movie.contentType === activeCategory
    );
    setMovies(filteredMovies);
  }, [activeCategory, trending]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="bg-secondaryColor p-4 lg:px-16 py-10 mx-auto">
      <div className="flex items-center gap-4 px-4 mb-6 ml-20">
        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-300">
          Trending
        </h2>

        {/* category selection */}
        {categories.map((category) => (
          <button
            key={category}
            className={` text-white hover:text-blue-400 border px-2 py-1 sm:px-4 sm:py-2 rounded-[50px] ${
              activeCategory === category ? "active-category-btn" : ""
            }`}
            onClick={() => {
              handleCategoryChange(category);
            }}
          >
            {category === "show" ? "Tv " + category : category}
          </button>
        ))}
      </div>

      <TrendingCards
        selectedCategory={selectedCategory}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
};

export default Trending;
