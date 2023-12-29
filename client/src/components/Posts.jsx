import React from "react";
import Post from "./Post";

const Posts = () => {
  const data = [
    {
      id: 6,
      photo: "https://wallpapercave.com/dwp2x/wp8368317.jpg",
      caption: "Beautiful sunset view.",
      user: {
        username: "john_doe",
        followers: 1.5,
        profileImage: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 8,
      photo:
        "https://i0.wp.com/starmometer.com/wp-content/uploads/2020/05/0501%EB%8D%94%ED%82%B9%EC%98%81%EC%9B%90%EC%9D%98%EA%B5%B0%EC%A3%BC_%EC%9D%B4%EC%9D%84%EC%BB%A4%ED%94%8C%EA%B4%80%EC%A0%84%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%8C%805-scaled.jpg?w=1240&ssl=1",
      caption: "Exploring the city lights.",
      user: {
        username: "alice_in_wonderland",
        followers: 2.3, 
        profileImage: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 1,
      photo: "https://wallpapercave.com/wp/wp12545895.jpg",
      caption: "Nature's beauty.",
      user: {
        username: "nature_lover",
        followers: 3.7,
        profileImage: "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 2,
      photo: "https://wallpapercave.com/dwp2x/wp11253602.jpg",
      caption: "A tranquil moment by the lake.",
      user: {
        username: "lake_adventurer",
        followers: 5.2,
        profileImage: "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 3,
      photo: "https://wallpapercave.com/dwp2x/wp12389732.jpg",
      caption: "Urban skyline at dusk.",
      user: {
        username: "city_explorer",
        followers: 8.9,
        profileImage: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 7,
      photo: "https://wallpapercave.com/dwp2x/wp4553683.jpg",
      caption: "Serene mountain landscape.",
      user: {
        username: "mountain_lover",
        followers: 4.1,
        profileImage: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 4,
      photo: "https://wallpapercave.com/dwp2x/wp9373616.jpg",
      caption: "Sunrise over the hills.",
      user: {
        username: "hill_sunrise",
        followers: 6.8,
        profileImage: "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 5,
      photo: "https://wallpapercave.com/uwp/uwp3534138.jpeg",
      caption: "Adventures await.",
      user: {
        username: "adventure_seeker",
        followers: 2.5, 
        profileImage: "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
    {
      id: 9,
      photo: "https://wallpapercave.com/wp/wp12941473.jpg",
      caption: "Dreamy seaside escape.",
      user: {
        username: "beach_dreamer",
        followers: 9.4,
        profileImage: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    },
  ];

  return (
    <div className=" h-screen overflow-scroll scrollbar-hide">
      <div className="p-2 flex flex-col justify-center gap-10 items-center ">
        {data.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
