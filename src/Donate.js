import React from "react";
import "./Donate.scss";

export const Donate = () => {
  return (
    <div className="donate">
      <div className="donate-bg">
        <h1 className="donate-heading"> SUPPORT A CAUSE </h1>
        <div className="donate-para-text">
          India Cloud Security Summit , 2021 is a one day virtual event
          organized by the Microsoft 365 , Power Platform & Cloud Security India
          User group . This event will completely focus on the Cloud Security
          services related to Microsoft 365 , Microsoft Azure ,Microsoft Power
          Platform security and Dynamics 365 .
        </div>
        <div className="donate-btn">
          <button type="button">DONATE</button>
        </div>
      </div>
    </div>
  );
};
