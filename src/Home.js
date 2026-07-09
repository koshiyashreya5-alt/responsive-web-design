import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./App.css";

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80; // height of navbar
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <section className="banner-section" style={{ backgroundImage: 'url("/img_1.png")' }}>
                <div className="banner-content animate-fade-up">
                    <h5 className="banner-subtitle">
                        Empowering Mental Health Journeys
                    </h5>

                    <h1 className="banner-title">
                        Healing Families and Individuals
                    </h1>

                    <HashLink smooth to="/#about" scroll={scrollWithOffset} className="btn btn-primary-custom mt-2 delay-200 animate-fade-up">
                        Read More
                    </HashLink>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="about-split-container">
                    <div className="about-text-column animate-fade-up">
                        <h2 className="about-title">About Our Therapists</h2>
                        <p className="about-paragraph">
                            Garcia & J. Smith Therapists offer specialized therapy services focusing on grief, loss, and acculturation issues. Our approach is rooted in cultural sensitivity and community engagement, providing a safe space for individuals and families to heal and grow. We are dedicated to making a positive impact on mental health and well-being.
                        </p>
                        <HashLink smooth to="/#services" scroll={scrollWithOffset} className="btn-explore-services animate-fade-up delay-100">
                            Explore Services
                        </HashLink>
                    </div>
                    <div className="about-image-column animate-fade-up delay-100">
                        <img 
                            src="/images/2 (2).png" 
                            alt="About Our Therapists" 
                            className="about-therapist-img"
                        />
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="section-title animate-fade-up">Our Services</h2>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 col-12 animate-fade-up delay-100">
                            <div className="service-card">
                                <div className="service-img-wrapper">
                                    <img src="/images/1.png"
                                        alt="Grief Counseling"
                                        className="service-img"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="service-heading">Grief Counseling</h4>
                                <p className="service-text">
                                    Our grief counseling services are tailored to help individuals cope with loss, navigate through grief stages, and find healing and acceptance. We provide a supportive environment to process emotions and memories, fostering a path towards healing and resilience.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 animate-fade-up delay-200">
                            <div className="service-card">
                                <div className="service-img-wrapper">
                                    <img 
                                        src="/images/2.png"
                                        alt="Acculturation Support"
                                        className="service-img"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="service-heading">Acculturation Support</h4>
                                <p className="service-text">
                                    Acculturation support focuses on assisting individuals and families in adapting to a new culture while preserving their heritage. Our specialized services address identity challenges, communication barriers, and emotional well-being during the acculturation process.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12 animate-fade-up delay-300">
                            <div className="service-card">
                                <div className="service-img-wrapper">
                                    <img
                                        src="/images/3.png"
                                        alt="Community Outreach"
                                        className="service-img"
                                        loading="lazy"
                                    />
                                </div>
                                <h4 className="service-heading">Community Outreach</h4>
                                <p className="service-text">
                                    Through community outreach programs, we extend our support beyond therapy sessions, engaging with local communities to raise mental health awareness, provide educational resources, and promote emotional well-being for all.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 animate-fade-up">
                            <h1 className="contact-title text-center">Contact Us</h1>
                            <p className="contact-subtitle text-center">Get in Touch with Us Today</p>

                            <form className="form-area" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); e.target.reset(); }}>
                                <div className="row">
                                    <div className="col-md-6 field">
                                        <label>First name *</label>
                                        <input type="text" required />
                                    </div>

                                    <div className="col-md-6 field">
                                        <label>Last name *</label>
                                        <input type="text" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Email *</label>
                                    <input type="email" required />
                                </div>
                                <div className="field">
                                    <label>Phone</label>
                                    <input type="tel" />
                                </div>
                                <div className="field">
                                    <label>Message</label>
                                    <textarea rows="3"></textarea>
                                </div>
                                <button type="submit" className="send-btn w-100">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
