import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';

const Categories = ({ CategoriesPromise }) => {
  const [categories, setCategories] = useState([]);
  const data = use(CategoriesPromise);
  useEffect(() => {
    console.log(data);
    setCategories(data);
  }, [data]);
  return (
    <div className=" my-10">
      <ul className="space-y-0">
        <h1 className="text-3xl p-4 bg-orange-400">Categories</h1>
        <div className="grid grid-cols-1">
          {categories.map((category) => (
            <Link
              to={`Categories/${category.Id}`}
              key={category.Id}
              className="p-6 bg-orange-200 hover:cursor-pointer shadow-2xl border-b hover:bg-orange-500 transition-all ease-in-out duration-500"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Categories;
