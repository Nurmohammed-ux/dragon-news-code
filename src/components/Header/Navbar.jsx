import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5 mb-12">
      <div className="flex-1"></div>
      <div className="nav flex flex-1 space-x-6 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={user} alt="User" />
        <Link className="btn btn-primary text-base-100 px-10 hover:text-primary hover:bg-base-100">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
