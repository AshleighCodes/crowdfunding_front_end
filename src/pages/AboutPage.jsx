// src/pages/AboutPage.jsx
import React from 'react';
import './AboutPage.css';
import aboutUsImage from '../assets/aboutUs.jpg'; // Import the image

function AboutPage() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-content">This is the about page of our crowdfunding platform.</p>
            <img className="about-image" src={aboutUsImage} alt="About Us" /> {/* Use the imported image */}
            <section className="about-section">
                <h2 className="about-subtitle">Our Mission</h2>
                <p className="about-text">Our mission is to provide a platform where people can support and fund innovative projects.</p>
            </section>
            <section className="about-section">
                <h2 className="about-subtitle">Our Team</h2>
                <p className="about-text">We are a group of passionate individuals committed to making a difference in the world through crowdfunding.</p>
            </section>
        </div>
    );
}

export default AboutPage;