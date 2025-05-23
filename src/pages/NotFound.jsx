import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f7d9] text-[#001b48] p-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-[#ff4f00] text-white rounded hover:bg-[#ff6b1a] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
