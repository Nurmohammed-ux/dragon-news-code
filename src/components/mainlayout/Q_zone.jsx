import React from "react";
import swimming from "../../assets/swimming.png";
import classRoom from "../../assets/class.png";
import playGround from "../../assets/playground.png";

const Q_zone = () => {
  return (
    <div className="bg-base-200 p-4">
      <h3 className="text-xl font-bold mb-5">Q-Zone</h3>
      <img className="mb-4 w-full" src={swimming} alt="Kids Swimming" />
      <img className="mb-4 w-full" src={classRoom} alt="Class Room" />
      <img className="mb-4 w-full" src={playGround} alt="Play Ground" />
    </div>
  );
};

export default Q_zone;
