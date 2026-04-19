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
      <main className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 px-4 md:px-0">
        {/* Left Aside */}
        <aside className="md:col-span-3 md:sticky md:top-0 h-fit order-1 md:order-1">
          <LeftAside />
        </aside>

        {/* Main Content */}
        <section className="md:col-span-6 order-2 md:order-2">
          <Outlet />
        </section>

        {/* Right Aside */}
        <aside className="md:col-span-3 md:sticky md:top-0 h-fit order-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
