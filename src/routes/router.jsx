import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", Component: Home },
      { path: "/category/:id", Component: CategoryNews },
    ],
  },
  {
    path: "/auth",
    element: <h2>Auth layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404</h2>,
  },
]);

export default router;
