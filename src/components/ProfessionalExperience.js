import React from "react";

const ProfessionalExperience = () => {
  return (
    <>
      {/* Experience Section */}
      <section className="professional-experience-section">
        <div className="content-wrapper">
          <h2 className="section-title">Professional Experience</h2>

          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-header">
                <div className="icon-container building-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div>
                  <h3 className="job-title">IT Support Specialist / Systems Administrator</h3>
                  <p className="company-date">Ionidea Interactive Pvt Ltd | Jan 2024 - Present</p>
                </div>
              </div>
              <p className="job-description">
                Responsible for managing and maintaining IT infrastructure, including troubleshooting hardware and software issues, performing system monitoring, and ensuring high availability and reliability of platforms. 
                Collaborate with cross-functional teams to resolve incidents, implement process improvements, and support end-users with technical guidance. 
                Actively contribute to system upgrades, security patching, and automation of routine tasks to streamline operations.
              </p>
            </div>

            {/*<div className="experience-card">
              <div className="experience-header">
                <div className="icon-container cloud-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <div>
                  <h3 className="job-title">DevOps Engineer / OpenShift Administrator</h3>
                  <p className="company-date">Voya Financial | 2022 - 2024</p>
                </div>
                </div>
                <p className="job-description">
                    Managed end-to-end OpenShift administration, including cluster operations, upgrades, and monitoring. Automated DevOps workflows and developed reusable pipeline libraries using Python to streamline CI/CD processes.
                </p>
                </div>*/}
            </div>
        </div>

      </section>

      {/* Get in Touch Section */}
      <section className="professional-experience-section get-in-touch">
        <div className="content-wrapper text-center">
            <h2 className="section-title">
                Let's Collaborate on Something Great <span className="emoji">🚀</span>
            </h2>
            <p className="subtext">Ready to build the future of DevOps together?</p>
        </div>

      </section>
    </>
  );
};

export default ProfessionalExperience;
