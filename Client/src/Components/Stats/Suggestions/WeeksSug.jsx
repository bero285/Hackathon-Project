import React from "react";

const WeeksSug = () => {
  return (
    <>
      <Card
        weekNum={3}
        money={10928}
        suggestion={"Lower the frequency of purchase"}
      />
      <Card weekNum={4} money={9928} suggestion={"Lower the Cost of product"} />
    </>
  );
};

export function Card(props) {
  return (
    <div className="my-4 flex flex-col w-full">
      <div>
        <h1 className="ml-3">
          Week {props.weekNum}:{" "}
          <span className="text-red-600 ml-12">${props.money}</span>
        </h1>
      </div>
      <div className="">
        <h1 className="ml-3">
          Suggestion: <span className=" ml-4 w-10">{props.suggestion}</span>
        </h1>
      </div>
    </div>
  );
}
export default WeeksSug;
