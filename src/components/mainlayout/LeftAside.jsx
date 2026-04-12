import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <p>
            <span className="loading loading-spinner loading-xl"></span>
          </p>
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
