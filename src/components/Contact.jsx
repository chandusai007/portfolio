// src/components/Contact.jsx
import React, { useState } from 'react';
import './contact.scss'; // Import styles for this component
import instagramLogo from '../assets/instagram.png'; // Import Instagram logo
import linkedinLogo from '../assets/linkedin.png'; // Import LinkedIn logo
import githubLogo from '../assets/github-sign.png'; // Import GitHub logo
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_cmrtjzc', 'template_bu61z7b', formData, 'EutnB0A5GiQ6VetEn')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            }, (err) => {
                console.error('FAILED...', err);
                alert("Failed to send message. Please try again.");
            });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <p>If you would like to get in touch, feel free to reach out via social media or fill out the contact form below!</p>
            <div className="contact-container">
                <a href="https://www.instagram.com/sai_prince07/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="contact-item" 
                   title="Instagram">
                    <img src={instagramLogo} alt="Instagram" className="contact-logo" />
                    <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/chandra-gunnu-11a403224/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="contact-item" 
                   title="LinkedIn">
                    <img src={linkedinLogo} alt="LinkedIn" className="contact-logo" />
                    <span>LinkedIn</span>
                </a>
                <a href="https://github.com/chandusai007" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="contact-item" 
                   title="GitHub">
                    <img src={githubLogo} alt="GitHub" className="contact-logo" />
                    <span>GitHub</span>
                </a>
            </div>

            {/* Add space between sections */}
            <div className="spacing"></div>

            {/* Contact Form */}
            <div className="contact-card">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;