import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import RightAside from "../components/mainlayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [news, setNews] = useState({});
  // console.log(id, data);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id === id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="container mx-auto lg:px-35">
      <header>
        <Header />
      </header>

      <main className="mt-11 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-9">
          <h3 className="text-xl font-bold mb-5">Dragon News</h3>

          {news ? <NewsDetailsCard news={news} /> : <p>Loading...</p>}
        </section>

        <aside className="lg:col-span-3 px-4 lg:px-0">
          <RightAside showImage={false} />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
