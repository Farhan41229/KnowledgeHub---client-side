import React from 'react';
import {
  FaRegNewspaper,
  FaPenFancy,
  FaBookmark,
  FaComments,
  FaLightbulb,
  FaChartLine,
} from 'react-icons/fa';

/**
 * <ServicesSection />
 *
 * Renders the “Key Features” block for the Home page
 * of a knowledge-sharing app. Tailwind + DaisyUI are
 * assumed to be configured globally.
 */
const services = [
  {
    title: 'Multi-Category Articles',
    desc: 'Browse and publish content across Technology, Health & Wellness, Education, Science, Business, and Lifestyle—all in one place.',
    Icon: FaRegNewspaper,
  },
  {
    title: 'Rich Publishing Tools',
    desc: 'Write distraction-free with Markdown, code blocks, and inline media so your ideas shine.',
    Icon: FaPenFancy,
  },
  {
    title: 'Personalized Feed',
    desc: 'A smart algorithm surfaces articles you’ll love based on the topics you follow and what you read.',
    Icon: FaLightbulb,
  },
  {
    title: 'Engage & Discuss',
    desc: 'Comment, react, and start conversations directly under each article to grow a vibrant knowledge community.',
    Icon: FaComments,
  },
  {
    title: 'Save for Later',
    desc: 'Bookmark any post and build your personal library—available offline when you’re on the go.',
    Icon: FaBookmark,
  },
  {
    title: 'Author Insights',
    desc: 'Track views, reads, and engagement metrics to understand how your articles resonate with readers.',
    Icon: FaChartLine,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 my-10 rounded-2xl bg-orange-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-[40px] font-extrabold mb-3 text-orange-600">
          Key Features
        </h2>
        <p className="mb-10 font-medium text-gray-700 max-w-2xl mx-auto">
          Publish insight. Explore ideas. Connect with thinkers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, Icon: ServiceIcon }) => (
            <div
              key={title}
              className="card bg-base-100 shadow-md hover:shadow-lg transition hover:bg-orange-200/80 hover:text-black hover:cursor-pointer"
            >
              <div className="card-body items-center text-center">
                <ServiceIcon className="text-5xl text-orange-500 mb-4" />
                <h3 className="card-title text-[24px] font-bold mb-2 text-base-content">
                  {title}
                </h3>
                <p className="text-base font-medium leading-relaxed text-base-content/80">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
