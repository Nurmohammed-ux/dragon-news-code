import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12.5 mb-7.5">
      <img className="mb-5" src={logo} alt="The Dragon News" />
      <p className="text-accent text-[18px]">
        Journalism Without Fear or Favour
      </p>
      <p className="mt-2.5 font-medium text-gray-700">
        {format(new Date(), "EEEE, MMMM d, yyyy")}
      </p>
    </div>
  );
};

export default Header;
