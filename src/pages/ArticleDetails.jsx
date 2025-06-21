import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router'; // or 'react-router-dom' if you use that

const ArticleDetails = () => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData(); // article document

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Title, category, date */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
        <p className="text-sm text-gray-500">
          Published&nbsp;
          {new Date(data.date).toLocaleDateString()} &nbsp;|&nbsp;
          Category:&nbsp;
          {data.category}
        </p>
      </div>

      {/* Thumbnail image */}
      {data.thumbnail_image && (
        <img
          className="w-full h-64 object-cover mb-6 rounded-md"
          src={data.thumbnail_image}
          alt={data.title}
        />
      )}

      {/* Content */}
      <div className="text-lg text-gray-700 mb-6">
        <p>{data.content}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap mb-6">
        <span className="text-sm font-semibold text-gray-600 mr-4">Tags:</span>
        {data.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-block bg-blue-200 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Author info */}
      <div className="text-sm text-gray-500">
        Written by: {data.author_name} ({data.author_email})
      </div>
    </div>
  );
};

export default ArticleDetails;
