import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from '../App';
import HomeLayout from '../layouts/HomeLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
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
