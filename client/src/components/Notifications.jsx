import React from "react";
import Navbar from "./Navbar";
import Stories from "./stories";
import Advertise from "./Advertise";
import Videos from "./Videos";
import Requests from "./Requests";

const Notifications = () => {
  return (
    <div className="h-screen overflow-scroll scrollbar-hide relative">
        <Navbar />
        <Stories />
        <Advertise />
        <Videos />
        <Requests />
    </div>
  );
};

export default Notifications;
