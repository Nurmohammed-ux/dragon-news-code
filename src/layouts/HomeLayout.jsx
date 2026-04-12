import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/Header/LatestNews";
import Navbar from "../components/Header/Navbar";
import LeftAside from "../components/mainlayout/LeftAside";
import RightAside from "../components/mainlayout/RightAside";

const HomeLayout = () => {
  return (
    <div className="container mx-auto lg:px-35">
      <header className="">
        <Header />
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-6"> 
        <aside className="col-span-3">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
