import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../Auths/AuthContext';
import Categories from '../pages/Categories';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
const CategoriesPromise = fetch(
  'https://knowledge-hub-server-gules.vercel.app/categories'
).then((res) => res.json());
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
        <Banner></Banner> 
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
