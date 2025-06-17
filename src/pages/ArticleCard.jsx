import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="w-full h-48 object-cover transform transition duration-300 ease-in-out hover:scale-110"
        src={article['Thumbnail image']}
        alt={article['Title']}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 transform transition duration-300 ease-in-out hover:text-blue-600">
          {article['Title']}
        </h2>
        <p className="text-gray-700 text-base">
          {article['Content'].slice(0, 100)}...
        </p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">{article['Category']}</span>
        <span className="text-sm text-gray-600">
          {new Date(article['Date']).toLocaleDateString()}
        </span>
      </div>
      <div className="px-6 py-4">
        {article['Tags'].map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-200 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* View Details Button */}
      <div className="px-6 py-4">
        <a
          href="#"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
