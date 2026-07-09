import React, { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import "./App.css";

function About() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="about-banner text-center">
        <div className="container animate-fade-up">
          <h1 className="section-title mb-4">About Us</h1>
          <p className="about-text mx-auto">
            At Garcia & J. Smith Therapists, we offer culturally sensitive therapy
            services to individuals and families, specializing in grief, loss,
            and acculturation issues. Our commitment to the community shines
            through our outreach programs and support groups, providing a safe
            space for healing and growth.
          </p>
          <HashLink to="/#contact" className="btn btn-outline-custom px-4 py-2 mt-4 delay-200 animate-fade-up">Contact Us</HashLink>
        </div>
      </section>

      <section className="image-container animate-fade-up delay-100">
        <img 
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80" 
          alt='Therapy Session' 
          className="about-image" 
          loading="lazy"
        />
      </section>

      <div className="mission-section">
        <div className="container">
          <h1 className="mission-title animate-fade-up">Our Mission</h1>
          <p className="mission-subtitle animate-fade-up delay-100">Empowering Change Together</p>

          <div className="row mission-boxes g-0 justify-content-center animate-fade-up delay-200">
            <div className="col-lg-4 col-md-6 col-12 mission-box">
              <h3>Community Outreach</h3>
              <h5>Building Strong Connections</h5>
              <p>
                Our community outreach initiatives aim to bridge individuals and
                families in need with the support and resources necessary for their
                well-being. By fostering meaningful connections and providing a
                platform for shared experiences.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mission-box">
              <h3>Support Groups</h3>
              <h5>Unity in Healing</h5>
              <p>
                Our support groups offer a space for individuals to come together,
                share their stories, and find solace in a community that understands
                their journey. Through mutual support and understanding, we strive to
                promote healing, resilience, and a sense of belonging.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mission-box">
              <h3>Acculturation Programs</h3>
              <h5>Navigating Change</h5>
              <p>
                Our acculturation programs are designed to assist individuals and
                families in navigating the challenges of adapting to a new culture
                while preserving their identity. We provide guidance, support, and
                resources to facilitate a smooth transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;