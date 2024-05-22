"use client";

import React from "react";

const ErrorPage = ({ error, reset }: any) => {
  return (
    <div className="flex items-center justify-center min-h-[75vh] ">
      <div className="dark:bg-gray-700 bg-gray-200 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Oops, something went wrong!</h1>
        <p className="text-gray-600 mb-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
