import React from 'react';

const Contact = () => {
  const socialLinks = [
    {
      href: "https://github.com/sriannamalai-jaikumar",
      label: "GitHub",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.613-4.042-1.613-.546-1.386-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.02.005 2.047.138 3.003.403 2.29-1.553 3.296-1.23 3.296-1.23.654 1.65.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.217.695.825.577C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/sriannamalai-jaikumar/",
      label: "LinkedIn",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.786-1.75-1.75s.784-1.75 1.75-1.75 1.75.786 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.25h-3v-4.5c0-1.071-.929-1.75-1.75-1.75-.825 0-1.75.488-1.75 1.75v4.5h-3v-9h3v1.344c.409-.603 1.01-1.344 2.5-1.344 1.71 0 3.25 1.4 3.25 4.031v4.969z"/>
        </svg>
      ),
    },
    {
      href: "mailto:sriannamalai.j@gmail.com",
      label: "Email",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="contact-section">
      <h2>Connect with Me</h2>
      <p>If you'd like to get in touch, feel free to reach out through any of the platforms below.</p>

      <div className="social-buttons">
        {socialLinks.map(({ href, label, svg }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            aria-label={label}
          >
            {svg}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
