import React from "react";
import Story from "./Story";

const Stories = () => {
  const stories = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      <div className="p-2 flex gap-5 overflow-scroll scrollbar-hide mt-2">
        {stories.map((story) => (
          <Story />
        ))}
      </div>
    </div>
  );
};

export default Stories;
