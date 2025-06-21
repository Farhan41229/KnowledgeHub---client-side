import React from 'react';
import { Link } from 'react-router';
// ← change to -dom if you use react-router-dom

const ArticleCard = ({ article }) => {
  // Destructure for readability
  const {
    _id,
    title,
    content,
    category,
    tags = [],
    thumbnail_image,
    date,
  } = article;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Thumbnail */}
      <img
        className="w-full h-48 object-cover transform transition duration-300 ease-in-out hover:scale-110"
        src={thumbnail_image}
        alt={title}
      />

      {/* Title & Excerpt */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800 transform transition duration-300 ease-in-out hover:text-blue-600">
          {title}
        </h2>
        <p className="text-gray-700 text-base">{content.slice(0, 100)}…</p>
      </div>

      {/* Category & Date */}
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-sm text-gray-600">{category}</span>
        <span className="text-sm text-gray-600">
          {new Date(date).toLocaleDateString()}
        </span>
      </div>

      {/* Tags */}
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
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
        <Link
          to={`/article/${_id}`}
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
