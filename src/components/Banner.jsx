import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../assets/Banner 1.png';
import Banner2 from '../assets/Banner 2.png';
import Banner3 from '../assets/Banner 3.png';
const Banner = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-4xl lg:text-7xl font-bold'>Share Your Knowledege</h1>
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
    </div>
  );
};

export default Banner;
