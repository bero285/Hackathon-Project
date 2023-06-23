import React, { useState } from "react";
import { BiStats } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiTransfer } from "react-icons/bi";
// import { BiBot } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiBox } from "react-icons/bi";
const SideNav = () => {
  return (
    <div className="">
      <div className="min-h-screen w-[10%] bg-white fixed">
        {/* profile */}
        <div className="flex justify-center items-center py-4 ">
          <div className="w-16 h-16  rounded-full">
            <img
              src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/285149147_3217347791874150_7190987734152442531_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OBAAUpjf_A8AX9_2fAy&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfCfxY0CVlAS8wo-9oioO4sHCeWUq6wujhCX1To-JRrk1g&oe=64959C76"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>
        {/* items */}
        <div className="flex flex-col items-center justify-around h-96  my-8">
          <Link to={"/home"}>
            <BiHomeAlt2 className="text-3xl" />
          </Link>
          <Link to={"/Stats/19"}>
            <BiStats className="text-3xl" />
          </Link>
          <Link to={"/proposals"}>
            <BiBox className="text-3xl" />
          </Link>
          <Link to={"/Transactions"}>
            <BiTransfer className="text-3xl" />
          </Link>
        </div>
        {/* settings */}
        <div className="flex items-center justify-center py-2 ">
          <BiCog className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
