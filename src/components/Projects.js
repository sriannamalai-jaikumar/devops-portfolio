import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          link={project.link}
          techStack={project.techStack}
        />
      ))}
    </section>
  );
};

export default Projects;
