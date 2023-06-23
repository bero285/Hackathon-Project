import React from "react";
import Filters from "./Filters";
import Messege from "./Messege";
const GmailBox = () => {
  return (
    <div>
      <div className="min-w-[] border-purple-900 border-2">
        {/* filters */}
        <div>
          <Filters />
        </div>
        {/* messages */}
        <div className="w-full">
          <Messege />
        </div>
      </div>
    </div>
  );
};

export default GmailBox;
