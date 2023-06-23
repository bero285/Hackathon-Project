import React from "react";
import { FaCcMastercard } from "react-icons/fa";
const TransactionCard = (props) => {
  return (
    <div className="cursor-pointer">
      <div className="w-[800px] px-2 my-2  py-2 bg-gray-300 rounded-xl">
        <div className="flex flex-row justify-around ">
          <div className="text-lg">{props.companyName}</div>
          <div><FaCcMastercard className="text-3xl self-center text-yellow-600"/></div>
          <div className="text-lg">{props.date}</div>
          <div className="text-lg">{props.city}</div>
          <div className="text-xl font-bold text-red-600">${props.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
