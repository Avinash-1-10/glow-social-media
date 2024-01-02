import React from "react";

const Story = () => {
  return (
    <div className="relative min-w-[170px] min-h-[250px] shadow-md">
      <img
        src="https://www.enwallpaper.com/wp-content/uploads/2021/06/7af8cd66b3743bd89049656e9447d7a8-1.jpg"
        alt=""
        className="w-full h-full object-cover rounded-md cursor-pointer"
        style={{ filter: "brightness(0.7)" }}
      />
      <img
        src="https://i1.sndcdn.com/artworks-f431vpayygyqmBil-IK1IoQ-t500x500.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full ring-4 ring-blue-700 cursor-pointer hover:scale-110"
      />
    </div>
  );
};

export default Story;
