// src/App.js

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ProfessionalExperience from './components/ProfessionalExperience';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter> {/* basename removed */}
      <ThemeToggle />

      <div className="container">
        <section id="hero" style={{ margin: '60px 0' }}>
          <Hero />
        </section>

        <section id="about" style={{ margin: '80px 0' }}>
          <About />
        </section>

        <section id="skills" style={{ margin: '80px 0' }}>
          <Skills />
        </section>

        <section id="projects" style={{ margin: '80px 0' }}>
          <Projects />
        </section>

        {/* 
        <section id="certifications" style={{ margin: '80px 0' }}>
          <Certifications />
        </section>
        */}

        <section id="experience" style={{ margin: '80px 0' }}>
          <ProfessionalExperience />
        </section>

        <section id="contact" style={{ margin: '80px 0' }}>
          <Contact />
        </section>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
