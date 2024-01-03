// Home.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import Posts from "../components/Posts";
import Notifications from "../components/Notifications";
import BottomBar from "../components/BottomBar";

const Home = () => {
  return (
    <>
      <div className="fixed bottom-0 inline xs:hidden w-full p-2 border py-3 z-50 bg-white">
        <BottomBar />
      </div>
      <div className="flex">
        <div className="w-full sm:2/10 md:w-2/10 lg:w-2/10 xl:w-1/5 hidden xs:inline xs:w-fit shadow-md">
          <Sidebar />
        </div>
        <div className="w-full sm:w-5/10  md:w-5/10 lg:w-5/10 xl:w-2/5 ">
          <Posts />
        </div>
        <div className="w-full sm:w-3/10  md:w-3/10 lg:w-3/10 xl:w-2/5 hidden xs:inline shadow-md">
          <Notifications />
        </div>
      </div>
    </>
  );
};

export default Home;
