import React from "react";
import { profilePhoto } from "../../assets";
import work from "../../assets/work.svg";
import "./infoSection.css";

export const InfoSection = () => {
  return (
    <div className="main-info_section-container">
      <div className="top-info_section-container">
        <div className="circular-container">
          <img src={profilePhoto} />
        </div>
        <div className="text-info_section-container">
          <p className="subtitle-paragraph">Report for</p>
          <p className="name-paragraph">Jeremy Robson</p>
        </div>
      </div>
      <div className="bottom-info_section-container">
        <p>Daily</p>
        <p>Weekly</p>
        <p className="last-paragraph">Monthly</p>
      </div>
    </div>
  );
};
