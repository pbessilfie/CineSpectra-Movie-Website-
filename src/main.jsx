import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import TopIMDB from "./Pages/TopIMDB";
import SingleMovie from "./Pages/SingleMovie";
import SingleTvSeries  from "./Pages/SingleTvSeries";
import WatchMovie from "./Pages/WatchMovie";
import WatchTvSeries from "./Pages/WatchTvSeries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tv-series",
        element: <TvSeries />,
      },
      {
        path: "/top-imdb",
        element: <TopIMDB />,
      },
      {
        path: "/watch-movie",
        element: <WatchMovie />,
      },
      {
        path: "/watch-tv-series/",
        element: <WatchTvSeries />,
      },
      {
        path: "/movies/watch/",
        element: <SingleMovie />,
        // loader: async () => {
        //   const url = `https://movies-api14.p.rapidapi.com/movies`;
        //   const options = {
        //     method: "GET",
        //     headers: {
        //       "X-RapidAPI-Key":
        //         "7006ffebe7msh69ecf299faf54bdp16d7a4jsnf34180fa5f2c",
        //       "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        //     },
        //   };

        //   try {
        //     const response = await fetch(url, options);
        //     const result = await response.json();
        //     console.log(result);
        //     const movies = result.movies;
        //     return movies;
        //   } catch (error) {
        //     console.error(error);
        //     return null
        //   }
        // },
      },
      {
        path: "/tv-series/watch?",
        element: <SingleTvSeries />,
        // loader: async () => {
        //   const url = `https://movies-api14.p.rapidapi.com/shows/`;
        //   const options = {
        //     method: "GET",
        //     headers: {
        //       "X-RapidAPI-Key":
        //         "7006ffebe7msh69ecf299faf54bdp16d7a4jsnf34180fa5f2c",
        //       "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
        //     },
        //   };

        //   try {
        //     const response = await fetch(url, options);
        //     const result = await response.json();
        //     console.log(result);
        //     const series = result.movies;
        //     return series;
        //   } catch (error) {
        //     console.error(error);
        //     return null
        //   }
        // },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
