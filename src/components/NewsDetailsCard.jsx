import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, details, category_id } = news;
  // console.log(news);
  return (
    <div className="p-7.5 border border-gray-200 rounded-sm hover:shadow-2xl">
      <img className="w-full h-full rounded-sm" src={image_url} alt={title} />
      <h3 className="text-2xl font-bold my-5">{title}</h3>
      <p className="text-accent leading-8">{details}</p>
      <Link
        to={`/category/${category_id}`}
        className="btn text-white bg-secondary hover:bg-base-100 hover:text-secondary hover:outline border-0 hover:outline-secondary font-semibold py-6 px-6 mt-6"
      >
        <FaLongArrowAltLeft size={20} />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
