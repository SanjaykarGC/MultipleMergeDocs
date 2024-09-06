import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({onClick}) => {
  return (
    <button className="download-button" onClick={onClick} id="download-btn">
      Download
    </button>
  );
};

export default DownloadButton;
