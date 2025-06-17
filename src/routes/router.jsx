import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Articles from '../pages/Articles';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <h1>The Home Element</h1>,
      },
      {
        path: 'Categories/:id',
        element: <Articles></Articles>,
        loader: () => fetch('http://localhost:3000/articles'),
      },
    ],
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
]);

export default router;
