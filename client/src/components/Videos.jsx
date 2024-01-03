import React from "react";
import Video from "./Video";

const Videos = () => {
  let data = [1, 2, 3, 4, 5, 5];
  return (
    <div className="flex gap-5 overflow-scroll  p-2 scrollbar-hide">
      {data.map((d) => (
        <Video />
      ))}
    </div>
  );
};

export default Videos;
