import { FaClock, FaPlayCircle } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import Button from "../Components/Button";
import { apiHeaders } from "../constants";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Trending from "../Components/Trending";
import LatestMovies from "../Components/LatestMovies";
import LatestTvSeries from "../Components/LatestTvSeries";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
const Home = () => {
  const [weekTopTen, setWeekTopTen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchMovie() {
      const url = "https://movies-api14.p.rapidapi.com/movies";
      const options = {
        method: "GET",
        headers: apiHeaders,
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const items = result.movies;
        setWeekTopTen(items);
        setIsLoading(false);
        // console.log(result);
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
        <div className="relative w-full p-4 min-w-[35vh] sm:min-h-[50vh] bg-secondaryColor ">
          {" "}
          <Swiper
            spaceBetween={10}
            // loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
              dynamicBullets: true,
            }}
            navigation={{
              clickable: true,

              nextEL: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper relative w-full p-4 min-w-[35vh] sm:min-h-[50vh] bg-secondaryColor"
          >
            {isLoading && (
              <div className=" w-full h-[30vh] md:h-[50vh] flex items-center justify-center">
                <Loader />
              </div>
            )}
            {!isLoading &&
              weekTopTen.slice(0, 10).map((item) => (
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
                    className="absolute left-0 sm:left-10 bottom-0 lg:bottom-[12%] xl:left-20 text-white min-w-[300px] md:w-[55%] sm:w-[60%] lg:w-[40%] md:p-6 bg-[rgba(0,10,100,0.7)] backdrop-blur-md p-2 rounded-md z-20
              "
                  >
                    <h2 className="w-full text-xl md:text-3xl font-bold text-white mb-4  truncate">
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
                        <span>{item.release_date.slice(0, 4)}</span>
                      </div>

                      <div
                        className="bg-primaryColor p-1 rounded font-semibold
                "
                      >
                        HD
                      </div>
                    </div>

                    <p className="mb-2 hidden overflow-hidden sm:block  w-full lg:h-16 h-12 leading-snug">
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
                        backgroundColor={"bg-slate-200 flex px-2 py-2"}
                        textColor={"text-primaryColor"}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <div className="w-4 h-48 md:h-64 rounded-full absolute top-1/2 right-2 md:left-8 -translate-x-1/2 -translate-y-1/2 flex flex-col z-40 items-center justify-center bg-[rgba(0,10,100,0.2)] ">
            <div className="swiper-pagination backdrop-blur-lg bg-[rgba(0,10,100,0.2)]  rounded-full px-1"></div>
          </div>
          {/* navigation buttons */}
          <div className="button-arrangement absolute top-1/2 right-10 -translate-x-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col justify-evenly h-36 ">
            <div className="swiper-button-prev  after:text-primaryColor after:bg-[rgba(255,255,255,0.5)] after:backdrop-blur-lg after:px-2 after:text-sm after:rounded-lg "></div>

            <div
              className="swiper-button-next  after:text-primaryColor after:bg-[rgba(255,255,255,0.5)] after:backdrop-blur-lg after:px-2 after:text-sm after:rounded-lg
             "
            ></div>
          </div>
        </div>

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
