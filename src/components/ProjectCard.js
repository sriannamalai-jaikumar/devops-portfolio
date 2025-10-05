import React from 'react';

const ProjectCard = ({ title, description, link, techStack }) => {
  return (
    <div className="project-card" data-aos="fade-up">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn-view-code">
        View Code
      </a>
    </div>
  );
};

export default ProjectCard;
