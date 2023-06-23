import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentForm = () => {
  return (
    <div className="">
      <div className="shadow-2xl flex flex-row ">
        <div className="mr-4">
          <Cards
            number="5111111111111111"
            name="Balance: $123,782"
            expiry="12/23"
            cvc="123"
            focused="name"
          />
        </div>

        <div>
          <Cards
            number="4111111111111111"
            name="Balance: $321,782"
            expiry="12/23"
            cvc="123"
            focused="name"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
