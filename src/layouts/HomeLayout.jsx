import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../Auths/AuthContext';
import Categories from '../pages/Categories';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import Services from '../components/Services';
import ReviewSliders from '../components/ReviewSliders';
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
      <Navbar></Navbar>
      <header className="px-10">
        <Banner></Banner>
        <Services></Services>
        <ReviewSliders></ReviewSliders>
      </header>
      <main className="">
        <aside className="left-aside">
          <Categories CategoriesPromise={CategoriesPromise}></Categories>
        </aside>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
