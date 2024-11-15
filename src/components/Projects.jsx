// src/components/Projects.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import company1Logo from '../assets/Accenture.jpg'; // Import your company logo
import company2Logo from '../assets/flipkart.png'; // Import your second company logo
import company3Logo from '../assets/walmart.png'; // Import your third company logo
import company4Logo from '../assets/compozent.jpeg'; // Import your fourth company logo
import company5Logo from '../assets/jspiders.png'; // Import your fifth company logo
import './Projects.scss'; // Import styles for this component
import Popup from './popup'; // Import the Popup component

const projects = [
    {
        id: 1,
        title: 'Accenture',
        logo: company1Logo,
        description: 'Accenture is a global The Accenture Job Simulation Certificate from Forage demonstrates practical exposure to real-world tasks in a simulated corporate environment. It reflects hands-on experience in areas like problem-solving, communication, project management, and consulting. Completing this program highlights adaptability and readiness to tackle professional challenges effectively.',
        certificateLink: 'https://drive.google.com/file/d/1l4bFyKrigsnn4Tji_bUzk2BC_dDq8J-w/view?usp=sharing', // Link to the certificate or project details
    },
    {
        id: 2,
        title: 'Flipkart',
        logo: company2Logo,
        description: 'The Flipkart SCOA Internship Certificate highlights practical knowledge in supply chain operations and analytics. It reflects an understanding of logistics, data-driven decision-making, and process optimization within e-commerce, showcasing skills essential for efficient supply chain management(certificate yet to uploded by owner).',
        certificateLink: '#',
    },
    {
        id: 3,
        title: 'Walmart',
        logo: company3Logo,
        description: 'Walmart is a multinational retail corporationThe Advanced Software Engineering Job Simulation Certificate by Walmart (via Forage) showcases proficiency in solving complex engineering challenges. It emphasizes skills like designing scalable solutions, optimizing algorithms, and collaborating in a tech-driven environment, reflecting readiness for real-world software development roles.',
        certificateLink: 'https://drive.google.com/file/d/1_-7OJlkzg_hWf7a1MM1EHSei0hpxfIOw/view?usp=sharing',
    },
    {
        id: 4,
        title: 'Compozent',
        logo: company4Logo,
        description: 'Compozent provides innovative solutions in software development and IT consulting.',
        certificateLink: 'https://drive.google.com/file/d/1vjA0qUlZSUwtbds53LAtU8s_NYGQpVp7/view?usp=sharing',
    },
    {
        id: 5,
        title: 'JSpiders',
        logo: company5Logo,
        description: 'JSpiders is an institute that provides training for software development and job placement.',
        certificateLink:'https://drive.google.com/file/d/1QYltsw8Rl4VaaTrctTlIPOb5Wqbg8yQ2/view?usp=sharing'
    }
];

const Projects = () => {
    const [popupData, setPopupData] = useState(null);

    const handlePopupOpen = (project) => {
        setPopupData(project); // Set the project data to show in the popup
    };

    const handlePopupClose = () => {
        setPopupData(null); // Close the popup
    };

    return (
        <section id="projects">
            <h2>My Projects and Course</h2>
            <div className="projects-container">
                {projects.map(project => (
                    <motion.div 
                        key={project.id} 
                        className="project-card"
                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        <img src={project.logo} alt={project.title} className="project-logo" />
                        <h3>{project.title}</h3>
                        <a 
                            href={project.certificateLink} 
                            className="view-certificate-button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Certificate
                        </a>
                        <button 
                            className="info-button" 
                            onClick={() => handlePopupOpen(project)} // Open popup on button click
                        >
                            More Info
                        </button>
                    </motion.div>
                ))}
            </div>

            {popupData && (
                <Popup 
                    title={popupData.title}
                    description={popupData.description}
                    onClose={handlePopupClose}
                />
            )}
        </section>
    );
};

export default Projects;