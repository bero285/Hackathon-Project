import React from "react";
import SideNav from "./SideNav";
import Home from "./Home/Home";
const Main = () => {
  return (
    <div className="bg-[#EBECEE] min-h-screen flex flex-row">
      <div className="w-[10%]">
        <SideNav />
      </div>
      <div className="w-[90%]">
        <Home />
      </div>
    </div>
  );
};

export default Main;
