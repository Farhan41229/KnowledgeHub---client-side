import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import errorimg from '../assets/228438-P28070-739.jpg';
import { Link } from 'react-router';

const ErrorComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 px-6 py-10 text-center">
      {/* Banner / Illustration */}
      <img
        src={errorimg}
        alt="404 Not Found"
        className="w-full max-w-md mb-10 drop-shadow-lg"
      />

      {/* Headline */}
      <h1 className="text-5xl font-extrabold text-orange-600 mb-4">
        Oops! Page not found
      </h1>

      {/* Sub-text */}
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Return Home button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
      >
        <FaArrowLeft /> Go to Home
      </Link>
    </div>
  );
};

export default ErrorComponent;
