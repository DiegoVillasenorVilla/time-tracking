import React from "react";
import { icon } from "../../assets";
import "./card.css";

interface CardProps {
  title: string;
  hours: number;
  lastHours: number;
  color: string;
  icons: string[];
  position: number;
}

export const Card = ({
  title,
  hours,
  lastHours,
  color,
  icons,
  position,
}: CardProps) => {
  return (
    <div>
      <div className="card-top-container" style={{ background: color }}>
        <img src={icons[position]} />
      </div>
      <div className="card-bottom-container">
        <div className="card-bottom-container_header">
          <p>{title}</p>
          <img src={icon} />
        </div>
        <div className="card-bottom-container_body">
          <p className="hours-paragraph">{hours}hrs</p>
          <p className="last_hours-paragraph">Last Week - {lastHours}hrs</p>
        </div>
      </div>
    </div>
  );
};
