import React from "react";

const MonthSug = () => {
  return (
    <>
      <Card
        monthNum={3}
        money={10928}
        suggestion={"შეამცირეთ მენეჯერული ხარჯები"}
      />
      <Card
        monthNum={5}
        money={29928}
        suggestion={"შეამცირეთ მენეჯერული ხარჯები"}
      />
      <Card
        monthNum={8}
        money={92228}
        suggestion={"შეამცირეთ მენეჯერული ხარჯები"}
      />
      <Card
        monthNum={10}
        money={42228}
        suggestion={"შეამცირეთ მენეჯერული ხარჯები"}
      />
      <Card
        monthNum={11}
        money={76928}
        suggestion={"შეამცირეთ მენეჯერული ხარჯები"}
      />
    </>
  );
};

export function Card(props) {
  return (
    <div className="my-4 flex flex-col w-full">
      <div>
        <h1 className="ml-3">
          მე-{props.monthNum} თვე:{" "}
          <span className="text-red-600 ml-12">${props.money}</span>
        </h1>
      </div>
      <div className="">
        <h1 className="ml-3">
          შეთავაზება: <span className=" ml-4 w-10">{props.suggestion}</span>
        </h1>
      </div>
    </div>
  );
}
export default MonthSug;
