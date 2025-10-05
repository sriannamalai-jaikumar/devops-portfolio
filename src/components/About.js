import React from 'react';

const About = () => {
  return (
    <section className="about-section" aria-labelledby="about-heading">
      <h2 id="about-heading">About Me</h2>
      
      <p>
      I am an aspiring DevOps Engineer with a strong enthusiasm for automation, cloud computing, and CI/CD (Continuous Integration and Continuous Deployment) practices. 
      I have built a solid foundation in system administration, troubleshooting, and working effectively within fast-paced IT environments.
      </p>

      <br />

      <p>
        I am now seeking a full-time DevOps role where I can leverage my skills in tools such as Docker, Kubernetes, Jenkins, and Git, 
        along with cloud platforms like AWS and Azure. My passion lies in optimizing development workflows, implementing Infrastructure as Code (IaC), 
        and enhancing deployment efficiency.
      </p>

        <br />

        <p>
          I am driven to contribute to forward-thinking teams, embrace new challenges, and continuously advance my expertise in the DevOps field.
        </p>

      <a 
        href="/resume.pdf" 
        download 
        className="download-btn"
        aria-label="Download my resume"
      >
        Download Resume
      </a>
    </section>
  );
};

export default About;
