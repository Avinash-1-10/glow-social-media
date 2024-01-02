import React from "react";
import { FaRegImage, FaPoll, FaVideo } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { CiStreamOn } from "react-icons/ci";

const UploadPost = () => {
  return (
    <div className="flex flex-col gap-5 p-3 m-2 rounded-md shadow-md border">
      <div className="flex justify-between">
        <textarea
          type="text"
          className="w-[100%] rounded-lg bg-slate-50 outline-none border border-blue-400"
        />
      </div>
      <div className="flex ml-2 items-center justify-between">
        <div className="flex justify-between items-center gap-5">
          <div className=" bg-slate-100 p-2 rounded-md cursor-pointer">
            <FaRegImage className="text-[1.4rem] text-purple-600" />
          </div>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <FaPoll className="text-[1.4rem] text-indigo-600" />
          </div>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <FaVideo className="text-[1.4rem] text-green-600" />
          </div>
          <div className=" bg-slate-100 p-2 rounded-md cursor-not-allowed">
            <CiStreamOn className="text-[1.4rem] text-blue-600" />
          </div>
        </div>
        <button className="px-3 py-1 rounded-lg font-semibold bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          Post
        </button>
      </div>
    </div>
  );
};

export default UploadPost;
