import React from 'react';
import {
  FaDocker,
  FaAws,
  FaLinux,
  FaJenkins,
  FaGitAlt,
  FaPython,
} from 'react-icons/fa';
import {
  SiTerraform,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiAnsible,
} from 'react-icons/si';

const skills = [
  { name: 'Docker', icon: <FaDocker size={40} aria-hidden="true" /> },
  { name: 'AWS', icon: <FaAws size={40} aria-hidden="true" /> },
  { name: 'Linux', icon: <FaLinux size={40} aria-hidden="true" /> },
  { name: 'Jenkins', icon: <FaJenkins size={40} aria-hidden="true" /> },
  { name: 'Git', icon: <FaGitAlt size={40} aria-hidden="true" /> },
  { name: 'Terraform', icon: <SiTerraform size={40} aria-hidden="true" /> },
  { name: 'Kubernetes', icon: <SiKubernetes size={40} aria-hidden="true" /> },
  { name: 'Prometheus', icon: <SiPrometheus size={40} aria-hidden="true" /> },
  { name: 'Grafana', icon: <SiGrafana size={40} aria-hidden="true" /> },
  { name: 'Ansible', icon: <SiAnsible size={40} aria-hidden="true" /> },
  { name: 'Python', icon: <FaPython size={40} aria-hidden="true" /> },
];

const Skills = () => {
  return (
    <section className="skills-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" data-aos="fade-up" tabIndex="0" aria-label={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
