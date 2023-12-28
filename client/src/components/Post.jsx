import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import UserProfile from "./UserProfile";

const Post = ({post}) => {
  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-5 p-4 rounded-md border shadow-md bg-white">
      <div>
        <UserProfile />
      </div>
      <img
        src={post.photo}
        alt="Post"
        className="w-full rounded-md object-cover max-h-[550px]"
      />
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-lg">Chainsawman man #makima</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <FaHeart className="text-2xl text-red-500 cursor-pointer" />
            <MdInsertComment className="text-[1.5rem] text-gray-600 cursor-pointer" />
            <FaShareAlt className="text-[1.5rem] text-gray-600 cursor-pointer" />
            <FaCartShopping className="text-[1.5rem] text-gray-600 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            <FaBookmark className="text-[1.5rem] text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
