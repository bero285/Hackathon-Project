import React from "react";

const Filters = () => {
  return (
    <div className="flex flex-row  items-center">
      {/* date filter */}
      <div className="py-1 px-5 ">
        <form action="" className="flex flex-col">
          <label htmlFor="select">Filter by date</label>
          <select className="px-2 py-1 border border-gray-700">
            <option value="option1">Default</option>
            <option value="option2">latest</option>
            <option value="option3">old to new</option>
          </select>
        </form>
      </div>
      {/* unread */}
      <div className="py-1 px-8">
        <form action="" className="flex flex-col">
          <label htmlFor="select">Filter by date</label>
          <select className="px-2 py-1 border border-gray-700">
            <option value="option1">Default</option>
            <option value="option2">latest</option>
            <option value="option3">old to new</option>
          </select>
        </form>
      </div>{" "}
      {/* bank mails only */}
      <div className="py-1 px-8">
        <form action="" className="flex flex-col">
          <label htmlFor="select">Filter by date</label>
          <select className="px-2 py-1 border border-gray-700">
            <option value="option1">Default</option>
            <option value="option2">latest</option>
            <option value="option3">old to new</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Filters;
