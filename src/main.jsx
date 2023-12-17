import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import TvSeries from "./Pages/TvSeries";
import TopIMDB from "./Pages/TopIMDB";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/movies",
        element: <Movies/>,
      },
      {
        path: "/tv-series",
        element: <TvSeries/>,
      },
      {
        path: "/top-imdb",
        element: <TopIMDB/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
