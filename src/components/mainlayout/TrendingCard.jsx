import React, { use } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const dataPromise = fetch("/news.json").then((response) => response.json());

const TrendingCard = () => {
  const data = use(dataPromise);
  // console.log(data);
  return (
    <div className="grid grid-cols-1">
      {data.map((item) => (
        <div className="flex gap-3 items-start py-3 border-b border-gray-100 last:border-0">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
            onError={(e) => {
              e.target.src = "https://placehold.co/80x64?text=img";
            }}
          />
          <div className="flex flex-col gap-1 flex-1">
            <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
              {item.title}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="badge badge-sm bg-gray-100 text-gray-500 border-0">
                {item.category}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt size={10} /> {item.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingCard;
