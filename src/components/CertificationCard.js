import React from 'react';

const CertificationCard = ({ name, issuer, date, link }) => {
  return (
    <div className="cert-card" data-aos="fade-up">
      <h3>{name}</h3>
      <p><strong>Issuer:</strong> {issuer}</p>
      <p><strong>Date:</strong> {date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-view-certification"  // ✅ removed the dot (.)
      >
        View Certificate
      </a>
    </div>
  );
};

export default CertificationCard;
