import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full">
      <div
        role="status"
        className="p-4 max-w-[70%] mx-auto mt-[10%] animate-pulse md:p-6"
      >
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
        <div className="mb-10 w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-baseline mt-4 space-x-6">
          <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-56 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-64 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-72 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div className="w-full h-80 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Skeleton;
