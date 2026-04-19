import React from "react";
import Navbar from "../components/Header/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="container mx-auto bg-base-200 min-h-screen p-4 md:p-8 lg:px-35">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
