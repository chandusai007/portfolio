// src/components/Skills.jsx

import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import javaImage from '../assets/java.png'; // Import your Java image
import reactImage from '../assets/react.png'; // Import your React image
import pythonImage from '../assets/python.png'; // Import your Python image
import cssImage from '../assets/css-3.png'; // Import your CSS image
import javascriptImage from '../assets/js.png'; // Import your JavaScript image
import './skills.scss'; // Import styles for this component

const skills = [
    {
        id: 1,
        name: 'Java-fullstack',
        image: javaImage,
    },
    {
        id: 2,
        name: 'React',
        image: reactImage,
    },
    {
        id: 3,
        name: 'Python',
        image: pythonImage,
    },
    {
        id: 4,
        name: 'CSS',
        image: cssImage,
    },
    {
        id: 5,
        name: 'JavaScript',
        image: javascriptImage,
    },
];

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {skills.map(skill => (
                    <motion.div 
                        key={skill.id} 
                        className="skill-card"
                        whileHover={{ scale: 1.1 }} // Scale effect on hover
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;