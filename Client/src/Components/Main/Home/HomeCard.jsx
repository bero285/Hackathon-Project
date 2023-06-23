import React, { useState } from "react";
import { BiMoney } from "react-icons/bi";

const HomeCard = (props) => {
  const [close, setClose] = useState(false);

  const closeHandler = () => {
    setClose(true);
  };

  return (
    <div className={!close ? "text-white" : "hidden"}>
      <div className="flex flex-row justify-evenly items-center w-96  rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-800 py-4">
        <div className=" flex flex-col justify-center">
          {/* <div className="w-full flex justify-end ml-32">
            <h1 onClick={closeHandler} className="cursor-pointer">
              X
            </h1>
          </div> */}
          <div className="pb-1 ">
            <h1 className="text-3xl">შემოსავალი</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xl">$123,456,780</h1>
          </div>
          <div className="">
            <h1>ბოლო განახლება: 20.04.2023</h1>
          </div>
        </div>
        <div className="flex justify-center">
          <BiMoney className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
