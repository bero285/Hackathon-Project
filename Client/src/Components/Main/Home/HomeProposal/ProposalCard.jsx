import React from "react";
import { BiMoney } from "react-icons/bi";
import { Link } from "react-router-dom";
const ProposalCard = () => {
  return (
    <div>
      <Link>
        <div className="flex flex-row justify-evenly items-center w-96  rounded-xl bg-gradient-to-r from-sky-300 to-sky-600 py-4 mx-4 my-2">
          <div className=" flex flex-col justify-center">
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
      </Link>
    </div>
  );
};

export default ProposalCard;
