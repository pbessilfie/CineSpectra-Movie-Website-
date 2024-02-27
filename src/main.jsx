import { SkeletonTheme } from "react-loading-skeleton";
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
import SingleTvSeries from "./Pages/SingleTvSeries";
import WatchMovie from "./Pages/WatchMovie";
import WatchTvSeries from "./Pages/WatchTvSeries";
import SearchResult from "./Pages/SearchResult";

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
      },
      {
        path: "/tv-series/watch?",
        element: <SingleTvSeries />,
      },
      {
        path: "/search-results?",
        element: <SearchResult />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <React.StrictMode>
      <RouterProvider router={router} />{" "}
    </React.StrictMode>
  </SkeletonTheme>
);
