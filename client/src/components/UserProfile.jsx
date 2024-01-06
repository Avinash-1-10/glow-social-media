import React from "react";

const UserProfile = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src="http://res.cloudinary.com/dfqd02z8w/image/upload/v1704526754/u1rxjl9maxpx6f4sk2un.png"
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">John doe</p>
        <p className="text-gray-600 text-[0.8rem]">22K followers</p>
      </div>
    </div>
  );
};

export default UserProfile;
