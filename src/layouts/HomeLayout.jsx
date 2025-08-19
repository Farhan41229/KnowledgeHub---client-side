import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../Auths/AuthContext';
import Categories from '../pages/Categories';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import Services from '../components/Services';
import ReviewSliders from '../components/ReviewSliders';
import UseAxiosSecure from '../components/AxiosSecure';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import FeaturedArticles from '../components/FeaturedArticles';
import Stat from '../components/Stat';
const CategoriesPromise = fetch(
  'https://knowledge-hub-server-gules.vercel.app/categories'
).then((res) => res.json());
const HomeLayout = () => {
  const { UserLoading } = useContext(AuthContext);

  const axiosSecure = UseAxiosSecure();
  const queryClient = useQueryClient();
  /* ---------- fetch ALL Users ---------- */
  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['users'], // new key: all users
    queryFn: async () => {
      const res = await axiosSecure.get('/articles'); // no email filter
      const data = res.data;
      data.sort((a, b) => new Date(b.date) - new Date(a.date)); // sort by date
      const top6 = data.slice(0, 3);
      return top6;
    },
  });
  if (isLoading | UserLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-dots loading-xl "></span>;
      </div>
    );
  }
  // console.log(articles);

  return (
    <div>
      <Navbar></Navbar>
      <header className="px-10">
        <Banner></Banner>
        <Stat></Stat>
        <FeaturedArticles articles={articles}></FeaturedArticles>
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
