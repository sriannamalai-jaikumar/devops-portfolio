import React from "react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-card">
        <h1 className="hero-title">Sriannamalai Jaikumar</h1>
        <h2 className="hero-subtitle">DevOps Engineer</h2>
        <p className="hero-description">
          Automating infrastructure and deployments with Python, Docker, Git, and AWS — across Windows and Linux environments.
        </p>
        <div className="hero-tags">
          <span>Kubernetes Specialist</span>
          <span>CI/CD Specialist</span>
          <span>Cloud Enthusiast</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
