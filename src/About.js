import React from "react";
import HeaderData from "./content/HeaderData.json";
import "./About.scss";

export const About = () => {
  return (
    <div className="about">
      <h1 className="about-heading"> ABOUT </h1>
      {/*<div className="one-day-event">
        A One Day Event Focusing On The <span> Microsoft </span> Cloud Security
        Services
      </div>*/}
      <div className="about-para-text">
      Microsoft Viva Days ,2022 is a one day virtual event organized by the{" "}
        <span>
          <a
            href="https://www.meetup.com/Microsoft-365-and-Power-Platform-User-group-India/"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft 365 , Power Platform & Cloud Security India User group
          </a>
        </span>
        . Microsoft Viva is  an employee experience platform with functionalities to bring learning, insights, communications, and resources together on one platform. It’s powered by Microsoft 365, and companies can experience it via MS Teams . This event is the first of its kind from the Microsoft Community in India and we’re planning to cover all aspects of Microsoft Viva in this one day virtual event. 
      </div>
      <div className="registration-text">
        <a
          className="registration-button"
          href={HeaderData[0].registrationLink}
          target="_blank"
          rel="noreferrer"
        >
          <p>Registrations are free !</p>
        </a>
      </div>
    </div>
  );
};
