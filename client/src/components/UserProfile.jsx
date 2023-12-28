import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="https://wallpapercave.com/wp/wp12389758.jpg"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">John Doe</p>
        <p className="text-gray-600 text-[0.8rem]">45K followers</p>
      </div>
    </div>
  );
};

export default UserProfile;
