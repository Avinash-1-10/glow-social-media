import React from "react";
import { RiCopperCoinFill } from "react-icons/ri";
import { CgDarkMode } from "react-icons/cg";
import { IoMdChatbubbles } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="p-3 px-5 flex justify-between items-center bg-[#F50977] text-[1.4rem]">
      <h1 className="cursive ">Glow</h1>
      <div className="  flex items-center gap-10">
        <div className=" bg-[#1AE85E] p-2 rounded-md cursor-pointer">
          <CgDarkMode className=" text-white" />
        </div>
        <div className=" bg-[#1AE85E] p-2 rounded-md cursor-pointer">
          <RiCopperCoinFill className=" text-white" />
        </div>
        <div className=" bg-[#1AE85E] p-2 rounded-md cursor-pointer">
          <IoMdChatbubbles className=" text-white" />
        </div>
        <div className=" bg-[#1AE85E] p-2 rounded-md cursor-pointer">
          <IoNotifications className=" text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
