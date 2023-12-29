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
    <div className="text-[#2c3e50] p-4 md:p-10 flex flex-col gap-5">
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <MdHomeFilled className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Home
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <IoSearch className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Search
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <IoMdTrendingUp className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Trending
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <FaHotjar className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Hot
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <CiStreamOn className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Streams
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <FaCartShopping className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Shop
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <FaNewspaper className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          News
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <FaUserAlt className="text-2xl" />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Profile
        </span>
      </div>
      <div className="mb-4 md:mb-8 flex items-center gap-4 hover:text-purple-600 cursor-pointer">
        <IoSettings className="text-2xl " />
        <span className="text-[1.2rem] font-semibold hidden md:inline-block">
          Settings
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
