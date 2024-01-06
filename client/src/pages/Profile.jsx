import React from "react";
import ProfilePage from "../components/ProfilePage";
import Sidebar from "../components/Sidebar";
import Notifications from "../components/Notifications";



const Profile = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-full sm:2/10 md:w-2/10 lg:w-2/10 xl:w-1/5 hidden xs:inline xs:w-fit border">
          <Sidebar />
        </div>
        <div className="w-full sm:w-5/10  md:w-5/10 lg:w-5/10 xl:w-2/5 border ">
          <ProfilePage />
        </div>
        <div className="w-full sm:w-3/10  md:w-3/10 lg:w-3/10 xl:w-2/5 hidden xs:inline border bg-slate-500">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default Profile;
