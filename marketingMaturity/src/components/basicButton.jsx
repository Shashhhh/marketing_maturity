import React from 'react';
import '../styles/basicButton.css';

const BasicButton = ({ onClick, children, className, ...props }) => {
  return (
    <button
      className={`basicBtn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
