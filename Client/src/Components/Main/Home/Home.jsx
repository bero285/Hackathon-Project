import React from "react";
import HomeCard from "./HomeCard";
// import GmailBox from "./Gmail/GmailBox";
import Proposal from "./HomeProposal/Proposal";
import Chart from "./Charts/Days/Chart";

const Home = () => {
  
  return (
    <div>
      <div className="">
        {/* header -> welcome {name} /// */}
        <div className="flex flex-col items-start mb-3 my-6">
          <div className="ml-6 mb-4">
            <h1 className="text-4xl">გამარჯობა საბა</h1>
          </div>
          {/* basic income payment info */}
          <div className="flex flex-row w-full justify-around items-center px-3">
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </div>

      <div className="flex flex-row  mx-5 mt-20 ">
        <div className="w-full flex justify-center items-center ">
          <Chart />
        </div>
      </div>
      {/* proposal section */}
      <div className="flex flex-row  mx-5 mt-12  ">
        {/* <GmailBox /> */}
        {/* <Proposal /> */}
      </div>

    </div>
  );
};

export default Home;
