import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthContext from '../Auths/AuthContext';

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
      <main></main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
