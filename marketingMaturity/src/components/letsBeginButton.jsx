import React from 'react';
import './letsBeginButton.css';

const BeginButton = () => {
  return (
    <button className="beginButton" onClick={() => alert('Let\'s Begin!')}>
      Let's Begin
    </button>
  );
};

export default BeginButton;
