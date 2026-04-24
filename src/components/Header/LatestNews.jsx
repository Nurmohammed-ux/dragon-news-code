import React, { use } from "react";
import MarqueeModule from "react-fast-marquee";
import { Link } from "react-router";

const Marquee = MarqueeModule.default;

const dataPromise = fetch("/news.json").then((response) => response.json());

const LatestNews = () => {
  const data = use(dataPromise);
  const todayPicks = data.filter((news) => news.others.is_today_pick === true);
  // console.log(todayPicks);
  return (
    <div className="flex items-center gap-5 bg-base-200 mx-4 md:mx-0 p-4 ">
      <p className="text-base-100 font-bold bg-secondary px-6 py-2.5">Latest</p>

      <Marquee pauseOnHover={true} speed={50}>
        {todayPicks.map((news) => (
          <Link
            to={`/news-details/${news.id}`}
            className="font-bold mr-5"
            key={news.id}
          >
            {news.title}
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
