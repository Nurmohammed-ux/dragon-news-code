import React from "react";
import errorImage from "../assets/error-404.png";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col mt-48 space-y-6 justify-center items-center">
      <div className="relative">
        <img src={errorImage} className="w-full" />
        <div className="absolute inset-0 bg-secondary opacity-50"></div>
      </div>
      <h2 className="text-4xl font-bold">Oops, page not found!</h2>
      <p className="text-accent">
        The page you are looking for is not available.
      </p>
      <Link
        to={"/category/0"}
        className="btn bg-primary  hover:bg-secondary text-white px-10 py-6"
      >
        Go Back Home!
      </Link>
    </div>
  );
};

export default Error;
