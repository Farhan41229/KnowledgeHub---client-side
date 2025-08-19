import React from 'react';
import { Link } from 'react-router';

const FeaturedArticles = ({ articles }) => {
  return (
    <div className="my-10">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Latest from our blog
      </h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link to={`/article/${article._id}`} key={article._id}>
            <div
              key={article._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg  hover:-translate-y-3 cursor-pointer transition-all ease-in-out duration-300"
            >
              <img
                src={article.thumbnail_image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <p className="text-gray-700 mt-2">
                  {article.content.slice(0, 120)}...
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-600">
                    {article.category}
                  </span>
                  <div className="flex space-x-2">
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-sm px-2 py-1 rounded-full text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
