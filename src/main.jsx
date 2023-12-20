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

async function fetchMovie({ params }) {
  // const movieId = params._id;
  const url = `https://movies-api14.p.rapidapi.com/movies/${params.movies._id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7006ffebe7msh69ecf299faf54bdp16d7a4jsnf34180fa5f2c",
      "X-RapidAPI-Host": "movies-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    const data = result.movies;
  
    return data;
  } catch (error) {
    console.error(error);
  }
}

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
        path: "/movie/watch/:movies._id",
        element: <SingleMovie />,
        loader: fetchMovie,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
