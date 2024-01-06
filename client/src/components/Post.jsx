import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdInsertComment } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import UserProfile from "./UserProfile";

const Post = ({ post }) => {
  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col gap-5 p-4 rounded-md shadow-md">
      <div>
        <UserProfile  />
      </div>
      <p className="font-semibold text-lg">{post.text}</p>
      <img
        src={post.image}
        alt="Post"
        className="w-full rounded-md object-cover max-h-[600px]"
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-between bg-slate-100 p-3  rounded-lg">
          <div className="flex items-center gap-10">
            <FaHeart className="text-[1.4rem] text-pink-600 cursor-pointer" />
            <MdInsertComment className="text-[1.4rem] text-gray-800 cursor-pointer" />
            <FaShoppingBag className="text-[1.4rem] text-gray-800 cursor-pointer" />
            <IoSend className="text-[1.3rem] text-gray-800 cursor-pointer" />
          </div>
          <div className="flex items-center gap-3">
            <FaBookmark className="text-[1.2rem] text-gray-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
