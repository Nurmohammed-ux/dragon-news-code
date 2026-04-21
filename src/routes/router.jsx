import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import NewsCard from "../components/NewsCard";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    hydrateFallbackElement: (
      <div className="flex justify-center items-center h-screen text-4xl font-bold">
        L(
        <span className="inline-block text-secondary animate-spin">O</span>
        )ADING...
      </div>
    ),
    children: [
      { path: "/", Component: Home },
      {
        path: "/category/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
  {
    path: `/news-details/:id`,
    loader: () => fetch("/news.json"),
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default router;
