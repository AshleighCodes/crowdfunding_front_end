// src/pages/ContactPage.jsx
import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-content">This is the contact page of our crowdfunding platform.</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;