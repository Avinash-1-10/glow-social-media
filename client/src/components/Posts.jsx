import React, { useEffect, useState } from "react";
import Post from "./Post";
import UploadPost from "./UploadPost";
// import data from "../data/posts";
import axios from "axios";

const Posts = ({isChange, setIsChange}) => {
  const [posts, setPosts] = useState([]);

  const apiCall = async () => {
    try {
      const result = await axios.get("http://localhost:4000/posts");
      setPosts(result.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    apiCall();
  }, [isChange]);
  return (
    <div className=" h-screen overflow-scroll scrollbar-hide">
      <UploadPost isChange={isChange} setIsChange={setIsChange}/>
      <div className="p-2 flex flex-col justify-center gap-10 items-center ">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
