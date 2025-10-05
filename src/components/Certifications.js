import React from 'react';
import certifications from '../data/certifications';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  return (
    <section>
      <h1>Certifications</h1>
      {certifications.map(cert => (
        <CertificationCard
          key={cert.id}
          name={cert.name}
          issuer={cert.issuer}
          date={cert.date}
          link={cert.link}
        />
      ))}
    </section>
  );
};

export default Certifications;
