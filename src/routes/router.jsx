import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Articles from '../pages/Articles';
import ArticleDetails from '../pages/ArticleDetails';
import PostArticle from '../pages/PostArticle';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: 'Categories/:id',
    element: <Articles></Articles>,
    loader: () => fetch('http://localhost:3000/articles'),
  },

  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/postarticle',
    element: <PostArticle></PostArticle>,
  },
  {
    path: '/article/:id',
    element: <ArticleDetails></ArticleDetails>,
    loader: async ({ params }) => {
      const response = await fetch(
        `http://localhost:3000/articles/${params.id}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      return response.json(); // Ensure this returns the data
    },
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
]);

export default router;
