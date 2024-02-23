import { FaClock, FaPlayCircle } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
// import { movieData } from "../constants";

import Button from "../Components/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import Trending from "../Components/Trending";
import LatestMovies from "../Components/LatestMovies";
import LatestTvSeries from "../Components/LatestTvSeries";
import { useEffect, useState } from "react";
const Home = () => {
  const [weekTopTen, setWeekTopTen] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const url = "https://movies-api14.p.rapidapi.com/movies";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "612199ff77msh559be55a52238d8p10d0a3jsne70fd9e423f1",
          "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const items = result.movies;
        setWeekTopTen(items);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovie();
  }, []);
  return (
    <>
      {" "}
      <section className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full p-4  "
        >
          {weekTopTen.slice(0, 10).map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondaryColor xl:via-secondaryColor to-transparent z-10 "></div>

              <div className="h-auto rounded-lg xl:w-8/12 xl:ml-auto relative ">
                <img
                  src={item.backdrop_path}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-secondaryColor to-transparent "></div>
              </div>

              <div
                className="absolute top-[40%] md:top-[45%] left-10 xl:left-20 text-white min-w-[400px] md:w-[50%] sm:w-[40%] lg:w-[40%] md:p-6 bg-[rgba(0,10,100,0.4)] backdrop-blur-md p-2 rounded-md z-20
              "
              >
                <h2 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 sm:4 truncate">
                  {item.title}
                </h2>

                <div className="hidden justify-between items-center gap-4 sm:flex md:w-[75%] lg:w-[50%} sm:w-[90%] m-4 ">
                  <div className="flex gap-1  items-center">
                    <FaPlayCircle />
                    <span className="">{item.contentType}</span>
                  </div>
                  <div className="flex gap-1  items-center">
                    <FaClock />
                    <span>{"180m"}</span>
                  </div>
                  <div className="flex gap-1  items-center">
                    <BsCalendarDateFill />
                    <span>{item.release_date}</span>
                  </div>

                  <div
                    className="bg-primaryColor p-1 rounded font-semibold
                "
                  >
                    HD
                  </div>
                </div>

                <p className="mb-2 hidden overflow-hidden sm:block  w-full h-18 leading-snug">
                  {item.overview}
                </p>
                <div className="flex gap-2 ">
                  <Button
                    name={"Watch Now"}
                    playIcon
                    backgroundColor={
                      "bg-primaryColor flex px-2 py-2 hover:bg-white hover:text-primaryColor"
                    }
                    handleRoute={
                      item.contentType === "movie"
                        ? `/movies/watch/${item._id}`
                        : `/tv-series/watch/${item._id}`
                    }
                  />
                  <Button
                    name={"Detail"}
                    chevron
                    backgroundColor={"bg-slate-200 flex px-2"}
                    textColor={"text-primaryColor"}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="">
          {" "}
          <Trending />
        </div>

        <div>
          <LatestMovies />
        </div>
        <div>
          <LatestTvSeries />
        </div>
      </section>
      {/* Trending Section */}
      <section></section>
    </>
  );
};

export default Home;
