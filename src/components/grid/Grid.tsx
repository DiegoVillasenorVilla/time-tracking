import React from "react";
import { book, comment, work, hearth, play, shape } from '../../assets';
import { Card } from '../card/Card';
import './grid.css';

const images = [book, comment, work, hearth, play, shape];

export const Grid = () => {
  return (
    <div className="main-grid-container">
      <Card
        title="Work"
        color="#FF8B64"
        hours={32}
        lastHours={36}
        icons={images}
        position={2}
      />
      <Card
        title="Play"
        color="#55C2E6"
        hours={32}
        lastHours={36}
        icons={images}
        position={4}
      />
      <Card
        title="Study"
        color="#FF5E7D"
        hours={32}
        lastHours={36}
        icons={images}
        position={0}
      />
       <Card
        title="Exercise"
        color="#4BCF82"
        hours={32}
        lastHours={36}
        icons={images}
        position={5}
      />
      <Card
        title="Social"
        color="#7335D2"
        hours={32}
        lastHours={36}
        icons={images}
        position={1}
      />
      <Card
        title="Self Care"
        color="#F1C75B"
        hours={32}
        lastHours={36}
        icons={images}
        position={3}
      />
    </div>
  );
};
