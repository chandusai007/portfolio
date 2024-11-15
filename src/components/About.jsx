// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import profileImage from '../assets/profile.jpg'; // Import your profile image
import './about.scss'; // Import styles for this component

const About = () => {
    return (
        <motion.section 
            id="about"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
            className="about-section" // Add a class for styling
        >
            <div className="about-content">
                <img src={profileImage} alt="Profile" className="profile-image" />
                <div className="bio">
                    <h2>About Me</h2>
                    <h2>GUNNU CHANDRA</h2>
                    <p>Hi! I'm Gunnu Chandra, a Java Developer with a background in Electrical and Electronics Engineering from Sir C.R. Reddy College. While my primary focus is on Java full-stack development, my engineering studies included work on MVDC (Medium Voltage Direct Current) systems, aimed at enhancing power transmission efficiency and reducing power loss. Along with projects on car rental systems and ATM simulators, I bring strong problem-solving skills and adaptability to my work. I’m also skilled in Python, Node.js, and React and am eager to learn new technologies to create impactful solutions. Let’s connect and build something great!</p>
                </div>
            </div>
        </motion.section>
    );
};

export default About;