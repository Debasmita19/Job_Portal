import React from 'react';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-700 to-indigo-900 text-white">
      <div className="bg-white/90 backdrop-blur-md text-center text-gray-800 p-10 rounded-xl shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Thank You!</h1>
        <p className="text-lg mb-6">Your application has been successfully submitted.</p>
        <Link
          to="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default ThankYouPage;
