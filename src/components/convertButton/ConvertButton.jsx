import React from 'react';
import './ConvertButton.css';

const ConvertButton = ({ onClick, id, name }) => {
  return (
    <button id={id} name={name} className="convert-button" onClick={onClick}>
      Convert
    </button>
  );
};

export default ConvertButton;
