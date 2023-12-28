import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CiStreamOn } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";

const BottomBar = () => {
  return (
    <div className="flex gap-2 justify-between items-center">
      <MdHomeFilled className="text-2xl"/>
      <IoSearch className="text-2xl"/>
      <CiStreamOn className="text-2xl"/>
      <FaCartShopping className="text-2xl"/>
      <MdMoreVert className="text-2xl"/>
    </div>
  );
};

export default BottomBar;
