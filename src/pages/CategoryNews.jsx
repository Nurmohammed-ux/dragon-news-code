import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
  const numId = Number(id);
  // console.log(typeof numId, data);

  useEffect(() => {
    if (numId === 0) {
      setCategoryNews(data);
      return;
    }
    if (numId === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == numId);
      //   console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, numId]);

  return (
    <div>
      <h2 className="text-xl font-bold">Dragon News Home</h2>
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
