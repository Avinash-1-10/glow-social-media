import React from "react";

const ProfilePage = () => {
  return (
    <div className="relative w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-200">
      <div className="flex flex-col items-center pb-10 relative">
        <img
          src="https://wallpapercave.com/dwp2x/wp12389732.jpg"
          alt="bg"
          className="w-full h-auto rounded-t-lg"
        />
        <img
          className="w-24 h-24  mb-3 rounded-full shadow absolute top-1/3 transform -translate-y-1/3 left-1/2 transform -translate-x-1/2 fixed"
          src="https://wallpapercave.com/dwp2x/wp8368317.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 mt-20 text-xl font-medium text-gray-900">
          Avinash Yede
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Fullstack Developer
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3">
            Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
