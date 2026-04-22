import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../provider/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  // console.log(user?.email);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        // console.log(result.user);
        alert("You Logged Out Successfully!");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center mt-5 mb-12">
      <div className="flex-1">{user?.email}</div>
      <div className="nav flex flex-1 space-x-4 md:space-x-6 text-accent font-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3 ml-4 md:ml-0">
        {
          user ? <img className="h-12 p-0.5 rounded-full border-2 border-primary" src={user?.photoURL} alt="User" /> : <img src={userIcon} alt="User" />
        }
        

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary text-base-100 px-10 hover:text-primary hover:bg-base-100"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/auth/login"}
            className="btn btn-primary text-base-100 px-10 hover:text-primary hover:bg-base-100"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
