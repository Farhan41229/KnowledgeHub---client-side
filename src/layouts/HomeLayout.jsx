import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../Auths/AuthContext';
import Categories from '../pages/Categories';
import { Outlet } from 'react-router';
const CategoriesPromise = fetch('http://localhost:3000/categories').then(
  (res) => res.json()
);
const HomeLayout = () => {
  const { UserLoading } = useContext(AuthContext);
  if (UserLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-xl "></span>;
      </div>
    );
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <aside className="left-aside lg:col-span-1">
          <Categories CategoriesPromise={CategoriesPromise}></Categories>
        </aside>
        <div className="main lg:col-span-3">
          <Outlet></Outlet>
        </div>
        <aside className="right-aside lg:col-span-0"></aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
