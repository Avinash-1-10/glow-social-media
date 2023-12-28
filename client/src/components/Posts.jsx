import React from "react";
import Post from "./Post";

const Posts = () => {
  const data = [
    { id: 6, photo: "https://wallpapercave.com/dwp2x/wp8368317.jpg" },
    {
      id: 8,
      photo:
        "https://i0.wp.com/starmometer.com/wp-content/uploads/2020/05/0501%EB%8D%94%ED%82%B9%EC%98%81%EC%9B%90%EC%9D%98%EA%B5%B0%EC%A3%BC_%EC%9D%B4%EC%9D%84%EC%BB%A4%ED%94%8C%EA%B4%80%EC%A0%84%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%8C%805-scaled.jpg?w=1240&ssl=1",
    },
    { id: 1, photo: "https://wallpapercave.com/wp/wp12545895.jpg" },
    { id: 2, photo: "https://wallpapercave.com/dwp2x/wp11253602.jpg" },
    { id: 3, photo: "https://wallpapercave.com/dwp2x/wp12389732.jpg" },
    { id: 7, photo: "https://wallpapercave.com/dwp2x/wp4553683.jpg" },
    { id: 4, photo: "https://wallpapercave.com/dwp2x/wp9373616.jpg" },
    { id: 5, photo: "https://wallpapercave.com/uwp/uwp3534138.jpeg" },
    { id: 9, photo: "https://wallpapercave.com/wp/wp12941473.jpg" },
  ];

  return (
    <div className=" h-screen overflow-scroll scrollbar-hide">
      <div className="p-2 flex flex-col justify-center gap-10 items-center ">
        {data.map((post) => (
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  );
};

export default Posts;
