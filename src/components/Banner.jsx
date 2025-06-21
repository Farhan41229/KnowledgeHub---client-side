import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../assets/Banner 1.png';
import Banner2 from '../assets/Banner 2.png';
import Banner3 from '../assets/Banner 3.png';
import { Link } from 'react-router';
const Banner = () => {
  return (
    <div>
      <h1 className="text-center my-5 text-4xl lg:text-7xl font-bold">
        Share Your Knowledege
      </h1>
      <div className="divider"></div>
      <Carousel
        className="my-10"
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        infiniteLoop={true}
        showArrows={true}
        interval={1000}
      >
        <div className="px-10">
          <img className="" src={Banner1} />
        </div>
        <div className="px-10">
          <img src={Banner2} />
        </div>
        <div className="px-10">
          <img src={Banner3} />
        </div>
      </Carousel>
      <div className="divider"></div>
      <div className="flex justify-center items-center">
        <Link className="text-center text-2xl p-5 rounded-full bg-orange-500 lg:w-[500px] mx-auto hover:bg-orange-300 hover:cursor-pointer">
          Explore Articles
        </Link>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Banner;
