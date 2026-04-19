import React from "react";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default;

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 mx-4 md:mx-0 p-4 ">
      <p className="text-base-100 bg-secondary px-6 py-2.5">Latest</p>

      <Marquee pauseOnHover={true} speed={50} className="flex gap-10">
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
