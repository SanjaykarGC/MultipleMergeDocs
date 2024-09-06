import React from 'react';
import { FaUpload } from 'react-icons/fa';
import './BrowseButton.css';

const BrowseButton = ({ onFileSelect, id, name }) => {
  return (
    <label htmlFor={id} className="browse-button">
      <input
        id={id}
        name={name}
        type="file"
        onChange={onFileSelect}
      />
      <FaUpload style={{ marginRight: '8px' }} />
      Browse
    </label>
  );
};

export default BrowseButton;
