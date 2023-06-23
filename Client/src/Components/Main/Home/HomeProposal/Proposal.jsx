import React from "react";
import ProposalCard from "./ProposalCard";
const Proposal = () => {
  return (
    <div className="w-full ">
      <div className="overflow-x-scroll flex flex-row ">
        <ProposalCard />
        <ProposalCard />
        <ProposalCard />
        <ProposalCard />
      </div>
    </div>
  );
};

export default Proposal;
