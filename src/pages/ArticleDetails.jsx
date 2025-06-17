import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const ArticleDetails = () => {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    if (data != null) {
      setLoading(false);
    }
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
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.Title}</h1>
        <p className="text-sm text-gray-500">
          Published on {new Date(data.Date).toLocaleDateString()} | Category:{' '}
          {data.Category}
        </p>
      </div>
      <img
        className="w-full h-64 object-cover mb-6"
        src={data['Thumbnail image']}
        alt={data.Title}
      />
      <div className="text-lg text-gray-700 mb-6">
        <p>{data.Content}</p>
      </div>
      <div className="flex flex-wrap mb-6">
        <span className="text-sm text-gray-600 font-semibold mr-4">Tags:</span>
        {data.Tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-200 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-500">
        <p>
          Written by: {data.Userinfo.Username} ({data.Userinfo.Email})
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
