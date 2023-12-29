import React from "react";

const UserProfile = ({user}) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={user.profileImage}
        alt="Profile"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{user.username}</p>
        <p className="text-gray-600 text-[0.8rem]">{user.followers}K followers</p>
      </div>
    </div>
  );
};

export default UserProfile;
