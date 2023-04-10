import React from "react";
import ModelNavbar from "./ModelNavbar";

const CustomOrder = () => {
  return (
    <div>
      <ModelNavbar />
      <div className="top federal-tax--description">
        <span>
          New Model 3 and Model Y vehicles qualify for a federal tax credit for
          eligible buyers. This $7,500 credit is in effect for deliveries taken
          before an update to the federal guidance, which Treasury and the IRS
          intend to issue no later than March 31, 2023.
          <button>
            <span>See Details</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default CustomOrder;
