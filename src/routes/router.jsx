import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Articles from '../pages/Articles';
import ArticleDetails from '../pages/ArticleDetails';
import PostArticle from '../pages/PostArticle';
import PrivateRoute from '../PrivateRoute';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyArticles from '../pages/MyArticles';
import ErrorComponent from '../components/ErrorComponent';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: 'Categories/:name',
    element: (
      <div>
        <Navbar></Navbar>
        <Articles></Articles>
        <Footer></Footer>
      </div>
    ),
    loader: () =>
      fetch('https://knowledge-hub-server-gules.vercel.app/articles'),
  },

  {
    path: '/register',
    element: (
      <div>
        <Navbar></Navbar>
        <Register></Register>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: '/postarticle',
    element: (
      <div>
        <Navbar></Navbar>
        <PrivateRoute>
          <PostArticle></PostArticle>
        </PrivateRoute>
        <Footer></Footer>
      </div>
    ),
  },
  {
    path: '/myarticles',
    element: (
      <div>
        <Navbar></Navbar>
        <PrivateRoute>
          <MyArticles></MyArticles>
        </PrivateRoute>
        <Footer></Footer>
      </div>
    ),
    loader: () =>
      fetch('https://knowledge-hub-server-gules.vercel.app/articles'),
  },
  {
    path: '/article/:id',
    element: (
      <div>
        <Navbar></Navbar>
        <ArticleDetails></ArticleDetails>
        <Footer></Footer>
      </div>
    ),
    loader: async ({ params }) => {
      const response = await fetch(
        `https://knowledge-hub-server-gules.vercel.app/articles/${params.id}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch listings');
      }
      return response.json(); // Ensure this returns the data
    },
  },
  {
    path: '*',
    Component: ErrorComponent,
  },
  {
    path: '/login',
    element: (
      <div>
        <Navbar></Navbar>
        <Login></Login>
        <Footer></Footer>
      </div>
    ),
  },
]);

export default router;
