import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ArticleCard from './ArticleCard';

const Articles = () => {
  const [Articles, SetArticles] = useState([]);
  const { id } = useParams();
  //   console.log(id);
  const data = useLoaderData();
  useEffect(() => {
    if (id == 0) {
      SetArticles(data);
      console.log(data);
    } else {
      const FilteredProducts = data.filter(
        (article) => article.CategoryId == id
      );
      SetArticles(FilteredProducts);
      console.log(FilteredProducts);
    }
  }, [data, id]);
  return (
    <div className="my-10">
      <h1 className="text-6xl text-center font-bold mb-2">ARTICLES</h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 px-10 lg:grid-cols-2 gap-5">
        {Articles.map((article, index) => (
          <ArticleCard article={article} key={index}></ArticleCard>
        ))}
      </div>
    </div>
  );
};

export default Articles;
