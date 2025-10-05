import React from 'react';
import './ResumeButton.css';

const ResumeButton = () => {
  return (
    <div className="resume-button-container">
      <a href="/resume.pdf" download className="resume-button">
        Download Resume
      </a>
    </div>
  );
};

export default ResumeButton;
