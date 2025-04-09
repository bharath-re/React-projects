import React from "react";
import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-xl text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you're looking for doesn't exist or has been moved.
          Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}

export default Error;
