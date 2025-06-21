import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: `"This platform completely changed the way I share and learn! As a computer science student, I’ve found articles that helped me with everything from React basics to writing clean code. It’s like having a study group 24/7."`,
    author: 'Ayesha Rahman',
    title: 'CS Undergraduate at BUET',
  },
  {
    text: `"Finally, a place where developers can write and discover quality content. I’ve published several posts on backend development and got amazing feedback from the community. The clean interface and smart recommendations make it my go-to."`,
    author: 'Tanvir Alam',
    title: 'Software Engineer at a Startup in Dhaka',
  },
  {
    text: `"I love how diverse the content is—tech, science, health—you name it. It’s not just another blog site, it’s a growing community of learners and thinkers. I’ve bookmarked more than 20 posts for future reading."`,
    author: 'Nusrat Jahan',
    title: 'Masters Student in Public Health at NSU',
  },
];

const ReviewSliders = () => {
  return (
    <div data-aos="fade-right" className="bg-stone-100 py-10 px-4 lg:px-20">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('Slide changed')}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:-translate-y-2 duration-300">
              <blockquote className="text-lg italic text-gray-700 dark:text-gray-200 mb-6">
                {testimonial.text}
              </blockquote>
              <hr className="border-gray-300 dark:border-gray-600 mb-4" />
              <div className="text-center">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSliders;
