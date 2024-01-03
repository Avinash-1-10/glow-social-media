// Sidebar.jsx
import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import { FaHotjar } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="text-white p-4 md:p-10 flex flex-col bg-[#F50977] h-screen">
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <MdHomeFilled className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Home
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <IoSearch className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Search
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <IoMdTrendingUp className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Trending
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <FaHotjar className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Hot
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <CiStreamOn className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Streams
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <FaCartShopping className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Shop
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <FaNewspaper className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          News
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <FaUserAlt className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Profile
        </span>
      </div>
      <div className="mb-4 md:mb-6 flex items-center gap-4 cursor-pointer  px-4 py-2 rounded-2xl hover:text-white  hover:bg-[#1AE85E] hover:transition-all hover:duration-300">
        <IoSettings className="text-2xl " />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Settings
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
