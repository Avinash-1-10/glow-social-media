import React from "react";
import Post from "./Post";
import UploadPost from "./UploadPost";
import data from "../data/posts";

const Posts = () => {
  return (
    <div className=" h-screen overflow-scroll scrollbar-hide bg-[#80F42D]">
      <UploadPost />
      <div className="p-2 flex flex-col justify-center gap-10 items-center ">
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
