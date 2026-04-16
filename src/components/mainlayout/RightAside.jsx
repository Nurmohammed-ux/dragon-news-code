import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Q_zone from "./Q_zone";
import bg from "../../assets/bg.png";

const RightAside = () => {
  return (
    <div className="space-y-6">
      <SocialLogin />
      <FindUs />
      <Q_zone />
      <img className="mb-4 w-full" src={bg} alt="Background" />
    </div>
  );
};

export default RightAside;
