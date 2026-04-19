import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((response) =>
  response.json(),
);

const Categories = () => {
  const categories = use(categoryPromise);
  // console.log(categories);
  return (
    <div>
      <h2 className="font-bold text-xl mb-5 mt-0">All Category</h2>
      <div className="grid grid-cols-1">
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "mb-3 bg-base-300 px-6 lg:pl-12 py-4 lg:text-xl font-medium rounded-sm"
                : "mb-3 text-accent px-6 lg:pl-12 py-4 lg:text-xl font-medium hover:rounded-sm hover:bg-base-300 hover:text-black"
            }
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
