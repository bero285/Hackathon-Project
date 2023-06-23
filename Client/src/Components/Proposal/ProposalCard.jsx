import React, { useState } from "react";
import { BiMoney,BiBox } from "react-icons/bi";
const ProposalCard = ({name,amount,proposal,id}) => {
  const [close, setClose] = useState(false);
  const closeHandler = () => {
    setClose(true);
  };
  return (
    <div className={!close ? "text-white" : "hidden"}>
      <div className="flex flex-row justify-evenly items-center w-96  rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-800 py-4">
        <div className=" flex flex-col justify-center p-3 gap-2">
        
          <div className="pb-1 ">
            <h1 className="text-2xl font-bold">{name}</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1 className="text-xm">{proposal}</h1>
          </div>
          <div className="">
            <h1 className=" text-2xl ">{amount}</h1>
          </div>
        </div>
        <div className="flex justify-center pr-2">
          <BiBox className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default ProposalCard;
