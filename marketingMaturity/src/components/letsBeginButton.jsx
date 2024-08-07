import React from 'react';
import './letsBeginButton.css';

const BeginButton = ({onClick}) => {
  return (
    <button className="beginButton" onClick={onClick}>
      Let's Begin
    </button>
  );
};

export default BeginButton;
